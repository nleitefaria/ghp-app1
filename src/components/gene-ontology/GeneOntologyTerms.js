import React from 'react';
import { Card } from 'reactstrap';
import { PagingState, CustomPaging} from '@devexpress/dx-react-grid';
import { Grid, Table, TableHeaderRow, PagingPanel} from '@devexpress/dx-react-grid-bootstrap4';


const URL = 'https://www.ebi.ac.uk/QuickGO/services/ontology/go/terms';

class GeneOntologyTerms extends React.PureComponent
{
		constructor(props)
		{
			super(props);
	    this.state = {
	      error: null,
	      //isLoaded: false,
	      results: [],
	      columns: [
	          { name: 'id', title: 'ID' },
	          { name: 'name', title: 'Name'},
	          { name: 'aspect', title: 'Aspect' },
	        ],
	        rows: [],
	        totalCount: 0,
	        currentPage: 0,
	        loading: true,
	    };
	    this.handleChange = this.handleChange.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
	    this.changeCurrentPage = this.changeCurrentPage.bind(this);

	  }

		componentDidMount()
	  {
		  this.loadData();
	  }

		componentDidUpdate()
	  {
		  this.loadData();
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
		      //loading: true,
		      currentPage: currentPage,
		    });
		}

		queryString()
	  {
		  const { currentPage } = this.state;
		  var cPage = Number(currentPage) + 1;
		  return URL + '?&page=' + cPage;
	  }

		loadData()
	  {
		    const queryString = this.queryString();
		    if (queryString === this.lastQuery) {
		      //this.setState({ loading: false });
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
	    	    	        <br></br>
	    	    	        <Card style={{ position: 'relative' }}>
	    	    	        	<Grid rows={rows} columns={columns} >
	    	    	        		<PagingState currentPage={currentPage} onCurrentPageChange={this.changeCurrentPage} pageSize={pageSize} />
	    	    	        			<CustomPaging totalCount={totalCount} />
	    	    	          				<Table />
	    	    	          					<TableHeaderRow />
	    	    	          						<PagingPanel />
	    	    	          	</Grid>
	    	    	        </Card>
	    		        </div>
	    		      );
	    }
	  }
}

export default GeneOntologyTerms;
