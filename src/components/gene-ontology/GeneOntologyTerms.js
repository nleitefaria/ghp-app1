import React from 'react';
import { Card, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { PagingState, CustomPaging} from '@devexpress/dx-react-grid';
import { Grid, Table, TableHeaderRow, PagingPanel} from '@devexpress/dx-react-grid-bootstrap4';
import GeneOntologyTermsModal from './GeneOntologyTermsModal';

const URL = 'https://www.ebi.ac.uk/QuickGO/services/ontology/go/terms';

const HighlightedCell = ({ id }) => (
  <Table.Cell>
    <span>
				<GeneOntologyTermsModal id={id}/>
    </span>
  </Table.Cell>
);

const Cell = (props) => {
  const { column, row } = props;
  if (column.name === 'action') {
    return <HighlightedCell  id={row.id} />;
  }
  return <Table.Cell {...props} />;
};

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
	          { name: "action", title: "Action" }
	        ],
	        rows: [],
	        totalCount: 0,
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
		  this.loadData();
	  }

		toggle()
		{
    	this.setState({
      	modal: !this.state.modal
    	});
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
	    	    	        	<Grid rows={rows} columns={columns}>
	    	    	        		<PagingState currentPage={currentPage} onCurrentPageChange={this.changeCurrentPage} pageSize={pageSize} />
	    	    	        			<CustomPaging totalCount={totalCount} />
	    	    	          				<Table cellComponent={Cell}/>
	    	    	          					<TableHeaderRow />
	    	    	          							<PagingPanel />
	    	    	          	</Grid>
	    	    	        </Card>
											<Modal>
											<ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
	    		        </div>
	    		      );
	    }
	  }
}

export default GeneOntologyTerms;
