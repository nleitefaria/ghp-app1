import React, { Component } from 'react';

class About extends Component
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
	    fetch("https://www.ebi.ac.uk/QuickGO/services/ontology/go/about")
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
	        {go.version}
	        </div>
	      );
	    }
	  }
}
	 
export default About;