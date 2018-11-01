import React, { Component } from 'react';
import { Button, Form, Label, Input } from 'reactstrap';

class GeneOntologySearch extends Component
{	
	constructor(props) 
	{
	    super(props);
	    this.state = {
	      inputvalue: '',
	      error: null,
	      //isLoaded: false,
	      numberOfHits: null,
	      results: []
	    };
	    this.handleChange = this.handleChange.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
	    
	  }

	  componentDidMount() {	    
	  }
	  
	  fetchSearch(param)
	  {		  
		  fetch('https://www.ebi.ac.uk/QuickGO/services/ontology/go/search?query=' + param + '&limit=25&page=1')
	      .then(res => res.json())
	      .then(
	        (result) => {
	          this.setState({
	            //isLoaded: true,
	            numberOfHits: result.numberOfHits,
	  	        results: result.results
	          });
	        },
	        (error) => {
	          this.setState({
	            //isLoaded: true,
	            error
	          });
	        }
	      )  
	  }
	  
	  handleChange (event) 
	  {
		    this.setState({
		        inputvalue: event.target.value
		    })
	  }
	  
	  handleSubmit (event) 
	  {
		  this.fetchSearch(this.state.inputvalue);
	      console.log('Form value: ' + this.state.inputvalue);
	      event.preventDefault();
	  }

	  render() 
	  {
		  const { error, numberOfHits, results } = this.state;
		  if (error) 
		  {
			  return <div>Error: {error.message}</div>;
		  } 
		  else 
		  {
			  if(results.length !== 0)
			  {
				  return (
	    		        <div>        	        	        	        
	    		        	<Form onSubmit={this.handleSubmit}>
	    	            		<Label>Query</Label>
	    	            		<Input type="text" value={this.state.inputvalue} onChange={this.handleChange}/>           		
	    	            		<br></br>
	    	            		<Button type="submit">Search</Button>         		
	    	            	</Form>
	    	            		
	    	            	{numberOfHits}
	    	    	        <br></br>
	    	    	        {results.length}
	    	            		
	    	            		
	    		        
	    		        </div>
				  );
    		}
	    	else
	    	{
	    		return (
	    		        <div>        	        	        	        
	    		        	<Form onSubmit={this.handleSubmit}>
	    	            		<Label>Query</Label>
	    	            		<Input type="text" value={this.state.inputvalue} onChange={this.handleChange}/>           		
	    	            		<br></br>
	    	            		<Button type="submit">Search</Button>         		
	    	            	</Form>    
	    		        </div>
	    		      );
	    	}
	    }
	  }
}
	 
export default GeneOntologySearch;