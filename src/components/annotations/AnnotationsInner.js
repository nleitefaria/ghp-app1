import React, { Component } from 'react';
import { Card, Row, Col } from 'reactstrap';
import { PagingState, CustomPaging} from '@devexpress/dx-react-grid';
import { Grid, Table, TableHeaderRow, PagingPanel} from '@devexpress/dx-react-grid-bootstrap4';
import AnnotationsGoIdModal from './AnnotationsGoIdModal';
import AnnotationsECOIdModal from './AnnotationsECOIdModal';
import Loading from '../Loading';

const URL = 'https://www.ebi.ac.uk/QuickGO/services/annotation/search';

var divLoading =
{
    'float': 'left', 'width': '300px', 'paddingTop': '0px', 'paddingLeft': '10px'
};

const GoIdCell = ({ id }) => (
		<Table.Cell>
		    <span>
				<AnnotationsGoIdModal id={id}/>
		    </span>
		</Table.Cell>
);

const ECOIdCell = ({ id }) => (
		<Table.Cell>
		    <span>
				<AnnotationsECOIdModal id={id}/>
		    </span>
		</Table.Cell>
);

const Cell = (props) => {
	const { column, row } = props;
	
	if (column.name === 'goId') {
		return <GoIdCell  id={row.goId} />;
	}
	if (column.name === 'evidenceCode') {
		return <ECOIdCell  id={row.evidenceCode} />;
	}
	return <Table.Cell {...props} />    
};

class AnnotationsInner extends Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			error: null,
			loading: true,
			results: [],
			columns: [
				{ name: 'id', title: 'ID' },
				{ name: 'geneProductId', title: 'Gene Product ID' },
				{ name: 'goId', title: 'Gene Ontology ID' },
				{ name: 'evidenceCode', title: 'Evidence Code' }							
			],			
			rows: [],
			totalCount: 0,
		    pageSize: 10,
		    currentPage: 0,
			modal: false,
			modalGo: false,
			modalECO: false
		};
		this.toggle = this.toggle.bind(this);
		this.toggleGo = this.toggleGo.bind(this);
		this.toggleECO = this.toggleECO.bind(this);
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
	
	toggle()
	{
		this.setState({
			modal: !this.state.modal
		});
	}
	
	toggleGo()
	{
		this.setState({
			modalGo: !this.state.modalGo
		});
	}
	
	toggleECO()
	{
		this.setState({
			modalECO: !this.state.modalECO
		});
	}
	
	changeCurrentPage(currentPage)
	{
		   this.setState({
		      // loading: true,
		      currentPage: currentPage,
		   });
	}
	
	queryString()
	{
		const { pageSize, currentPage } = this.state;
		var cPage = Number(currentPage) + 1;
		return URL + '?query=&limit=' + pageSize + '&page=' + cPage;
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
    	    	          				<Table cellComponent={Cell} />  	    	          		
    	    	          					<TableHeaderRow />
    	    	        						<PagingPanel />
    	    	          	</Grid>
    	    	        </Card>
    		        </div>
    		      );
		}
	}  
}

export default AnnotationsInner;
