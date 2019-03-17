import React from 'react';
import { Card, Form, Input } from 'reactstrap';
import { PagingState, CustomPaging} from '@devexpress/dx-react-grid';
import { Grid, Table, TableHeaderRow, PagingPanel} from '@devexpress/dx-react-grid-bootstrap4';
import GeneOntologyTermsModal from './GeneOntologyTermsModal';

const URL = 'https://www.ebi.ac.uk/QuickGO/services/ontology/go/search';

const ActionCell = ({ id }) => (
  <Table.Cell>
    <span>
		<GeneOntologyTermsModal id={id}/>
    </span>
  </Table.Cell>
);

const Cell = (props) => {
  const { column, row } = props;
  if (column.name === 'action') {
    return <ActionCell  id={row.id} />;
  }
  return <Table.Cell {...props} />;
};

class GeneOntologySearch extends React.PureComponent
{
	constructor(props)
	{
	    super(props);
	    this.state = {
	      inputvalue: '',
	      error: null,
	      // isLoaded: false,
	      results: [],
	      columns: [
	          { name: 'id', title: 'ID' },
	          { name: 'name', title: 'Name'},
	          { name: 'aspect', title: 'Aspect' },
			  { name: "action", title: "Action" }
	      ],
	      rows: [],
	      totalCount: 0,
	      pageSize: 5,
	      currentPage: 0,
	      loading: true,
		  modal: false
	    };
	    this.handleChange = this.handleChange.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
	    this.changeCurrentPage = this.changeCurrentPage.bind(this);
			this.toggle = this.toggle.bind(this);

	  }

	  componentDidMount()
	  {
		  this.loadData();
	  }

	  componentDidUpdate()
	  {
		  this.loadDataWithParam(this.state.inputvalue);
	  }


		handleChange (event)
	 {
			 this.setState({
					 inputvalue: event.target.value
			 })
	 }

	 handleSubmit (event)
	 {
		   this.loadData(this.state.inputvalue);
			 event.preventDefault();
	 }

	  changeCurrentPage(currentPage)
	  {
		    this.setState({
		      // loading: true,
		      currentPage: currentPage,
		    });
		}

		toggle()
		{
    	this.setState({
      	modal: !this.state.modal
    	});
  	}


	  queryString()
	  {
		  const { pageSize, currentPage } = this.state;
		  var cPage = Number(currentPage) + 1;
		  return URL + '?query=&limit=' + pageSize + '&page=' + cPage;
	  }

	  queryStringWithParam(param)
	  {
		  const { pageSize, currentPage } = this.state;
		  var cPage = Number(currentPage) + 1;
		  return URL + '?query=' + param + '&limit=' + pageSize + '&page=' + cPage;
	  }

	  loadData()
	  {
		    const queryString = this.queryString();
		    if (queryString === this.lastQuery) {
		      // this.setState({ loading: false });
		      return;
		    }

		    fetch(queryString)
		      .then(response => response.json())
		      .then(data => this.setState({
		        rows: data.results,
		        totalCount: data.pageInfo.total,
		        loading: false,
		      }))
		      .catch(() => this.setState({ loading: false }));
		    this.lastQuery = queryString;
	  }

	  loadDataWithParam(param)
	  {
		    const queryString = this.queryStringWithParam(param);
		    if (queryString === this.lastQuery) {
		      this.setState({ loading: false });
		      return;
		    }

		    fetch(queryString)
		      .then(response => response.json())
		      .then(data => this.setState({
		        rows: data.results,
		        totalCount: data.pageInfo.total,
		        loading: false,
		      }))
		      .catch(() => this.setState({ loading: false }));
		    this.lastQuery = queryString;
	  }

	  render()
	  {
		  const { error, rows, columns, pageSize, currentPage, totalCount } = this.state;
		  if (error)
		  {
			  return <div>Error: {error.message}</div>;
		  }
		  else
		  {
	    		return (
	    		        <div>
	    		        	<Form onSubmit={this.handleSubmit}>
	    		        	<br></br>
	    	            		<Input type="text" placeholder="type query here. e.g.: hi" value={this.state.inputvalue} onChange={this.handleChange}/>
	    	            		<br></br>
	    	            	</Form>
	    	    	        <br></br>
	    	    	        <Card style={{ position: 'relative' }}>
	    	    	        	<Grid rows={rows} columns={columns} >
	    	    	        		<PagingState currentPage={currentPage} onCurrentPageChange={this.changeCurrentPage} pageSize={pageSize} />
	    	    	        			<CustomPaging totalCount={totalCount} />
															<Table cellComponent={Cell}/>
																<TableHeaderRow />
																	<PagingPanel />
	    	    	          	</Grid>
	    	    	        </Card>
	    		        </div>
	    		      );
	    }
	  }
}

export default GeneOntologySearch;
