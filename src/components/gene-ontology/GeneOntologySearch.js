import React, { Component } from 'react';
import { Table} from 'reactstrap';

class GeneOntologySearch extends Component
{	
	constructor(props) 
	{
	    super(props);
	    this.state = {
	      error: null,
	      isLoaded: false,
	      numberOfHits: null,
	      results: []
	    };
	  }

	  componentDidMount() {
	    fetch("https://www.ebi.ac.uk/QuickGO/services/ontology/go/search?query=hi&limit=25&page=1")
	      .then(res => res.json())
	      .then(
	        (result) => {
	          this.setState({
	            isLoaded: true,
	            numberOfHits: result.numberOfHits,
	  	        results: result.results
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
	    const { error, isLoaded, numberOfHits, results } = this.state;
	    if (error) {
	      return <div>Error: {error.message}</div>;
	    } else if (!isLoaded) {
	      return <div>Loading...</div>;
	    } else {
	      return (
	        <div>        	        
	        {numberOfHits}
	        </div>
	      );
	    }
	  }
}
	 
export default GeneOntologySearch;