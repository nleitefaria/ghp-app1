import React from 'react';
import { Card, Row, Col } from 'reactstrap';
import { PagingState, CustomPaging} from '@devexpress/dx-react-grid';
import { Grid, Table, TableHeaderRow, PagingPanel} from '@devexpress/dx-react-grid-bootstrap4';
import EvidenceConclusionOntologyTermsModal from './EvidenceConclusionOntologyTermsModal';
import Loading from '../Loading';

const URL = 'https://www.ebi.ac.uk/QuickGO/services/ontology/eco/terms';

var divLoading =
{
    'float': 'left', 'width': '300px', 'paddingTop': '0px', 'paddingLeft': '10px'
};

const ActionCell = ({ id }) => (
		  <Table.Cell>
		    <span>
				<EvidenceConclusionOntologyTermsModal id={id}/>
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

class EvidenceConclusionOntologyTerms extends React.Component 
{
	constructor(props)
	{
		super(props);
		this.state = {
			error: null,
			inputvalue: '',
			results: [],
			columns: [
				{ name: 'id', title: 'ID' },
				{ name: 'name', title: 'Name'},				
				{ name: "action", title: "Action" }
			],
			rows: [],
		    totalCount: 0,
		    currentPage: 0,
			loading: true,
			modal: false
		};
		this.handleChange = this.handleChange.bind(this);
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
			loading: true,
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
	      loading: true,
	      currentPage: currentPage,
	    });
	}

	queryString()
	{
		const { currentPage } = this.state;
		var cPage = Number(currentPage) + 1;	
		return URL + '?page=' + cPage;
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
    	    	        <Row>
	    	        		<Col xs="6"><div style={divLoading}>{this.state.loading && <Loading />}</div></Col>
	    	        	</Row>
    	    	        <Card style={{ position: 'relative' }}>
    	    	        	<Grid rows={rows} columns={columns}>
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

export default EvidenceConclusionOntologyTerms;