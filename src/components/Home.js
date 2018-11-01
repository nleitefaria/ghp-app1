import React, { Component } from 'react';
import {NavLink} from "react-router-dom";

class Home extends Component {
	  render() {
		  return (
			      <div>	      	      	      
			      <hr></hr>
			      <h2>This project is a client for the <a href="https://www.ebi.ac.uk/QuickGO/api/index.html" rel="noopener noreferrer" target="_blank">QuickGO RESTFul API (EBI)</a>.</h2>
			      <br></br>
			      <h3>Please browse the following subjects to get more info:</h3>
			      <br></br>			     
			      	<div>			      		
			      			- <NavLink to="/gene-ontology">Gene Ontology</NavLink>	
			      			<br></br>
			      			- <NavLink to="/evidence-conclusion-ontology">Evidence and Conclusion Ontology</NavLink>			      		
			      	</div>
					   
			      </div>
			    );
			  }
	 
}
	 
export default Home;