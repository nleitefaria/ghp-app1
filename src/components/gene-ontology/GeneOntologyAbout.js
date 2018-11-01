import React, { Component } from 'react';
import { Table} from 'reactstrap';

const URL = 'https://www.ebi.ac.uk/QuickGO/services/ontology/go/about';

class GeneOntologyAbout extends Component
{	
	constructor(props) 
	{
	    super(props);
	    this.state = {
	      error: null,
	      isLoaded: false,
	      go: {}
	    };
	}

	componentDidMount() {
	    fetch(URL)
	      .then(res => res.json())
	      .then(
	        (result) => {
	          this.setState({
	            isLoaded: true,
	            go: result.go
	          });
	        },
	        (error) => {
	          this.setState({
	            isLoaded: true,
	            error
	          });
	        }
	      )
	  }

	  render() {
	    const { error, isLoaded, go } = this.state;
	    if (error) {
	      return <div>Error: {error.message}</div>;
	    } else if (!isLoaded) {
	      return <div>Loading...</div>;
	    } else {
	      return (
	        <div>        	        
	        <Table>	        
	        <tbody>
	          <tr>
	            <th scope="row"> Version</th>
	            <td><a target="_blank" rel="noopener noreferrer" href={go.version}>{go.version}</a></td>	            
	          </tr>
	          <tr>
	            <th scope="row">Timestamp</th>
	            <td>{go.timestamp}</td>	            
	          </tr>	          
	        </tbody>
	      </Table> 
	        </div>
	      );
	    }
	  }
}
	 
export default GeneOntologyAbout;