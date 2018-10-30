import React, { Component } from 'react';
import {NavLink} from "react-router-dom";

class Home extends Component {
	  render() {
		  return (
			      <div>	      	      	      
			      <hr></hr>
			      <h2>This project is a client for the <a href="https://financialmodelingprep.com/developer/docs" rel="noopener noreferrer" target="_blank">FinancialModelingprep RESTFul API</a>.</h2>
			      <br></br>
			      <h3>Please browse the following subjects to get more info:</h3>
			      <br></br>
			     
			      		<div>
			      		<NavLink to="/financials">Companies Financial Statements</NavLink>
			      		</div>
			      		<div>
			      		<NavLink to="/profile">Companies profile</NavLink>
			      		</div>
					   
			      </div>
			    );
			  }
	 
}
	 
export default Home;