import React, { Component } from 'react';
import { Card, Row, Col } from 'reactstrap';
import { Grid, Table, TableHeaderRow } from '@devexpress/dx-react-grid-bootstrap4';
import AnnotationExtensionRelationsAndValidationRelationsModal from './AnnotationExtensionRelationsAndValidationRelationsModal';
import Loading from '../Loading';

const URL = 'https://www.ebi.ac.uk/QuickGO/services/ontology/ae/relations';

var divLoading =
{
    'float': 'left', 'width': '300px', 'paddingTop': '0px', 'paddingLeft': '10px'
};

const ActionCell = ({ id }) => (
  <Table.Cell>
    <span>
		<AnnotationExtensionRelationsAndValidationRelationsModal id={id}/>
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

class AnnotationExtensionRelationsAndValidationRelations extends Component
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
				{ name: 'usage', title: 'Usage' },
				{ name: "action", title: "Action" }
			],
			rows: [],
			totalCount: 0,
			modal: false
		};
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
	
	queryString()
	{
		return URL;
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
	    		rows: data.nodes,	    	
	    		loading: false,
	    }))
	    .catch(() => this.setState({ loading: false }));
	    this.lastQuery = queryString;
	}


	render()
	{
		const { error, rows, columns } = this.state;

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
    	    	        		
    	    	          				<Table cellComponent={Cell}/>
    	    	          					<TableHeaderRow />
    	    	          							
    	    	          	</Grid>
    	    	        </Card>
    		        </div>
    		      );
		}
	}
	  
}
	 
export default AnnotationExtensionRelationsAndValidationRelations;
