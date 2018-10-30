import React, { Component } from 'react';
import {
	  Route,
	  NavLink,
	  HashRouter
} 
from "react-router-dom";
import 
{
	  Container, Row, Col
} 
from 'reactstrap';

import Home from './Home';
import Financials from './Financials';
import Profile from './Profile';
	
class Main extends Component 
{
	  render() {
	    return (
	    		<HashRouter>
	            	<div>
	            		<div>								
	            			<Container>
	            				<Row>
	            					<Col>
	            						<ul className="header">
	            							<li><NavLink to="/">Home</NavLink></li>
	            							<li><NavLink to="/financials">Financials</NavLink></li>
	            							<li><NavLink to="/profile">Profile</NavLink></li>
	            						</ul>
	            					
	            						<div className="content">
	            							<Route exact path="/" component={Home}/>
	            							<Route path="/financials" component={Financials}/>
	            							<Route path="/profile" component={Profile}/>
	            						</div>	              		              	           	
	            					</Col>
	            				</Row>
	            			</Container>
	            		</div>  	
	            	</div>
	            </HashRouter>
	    );
	  }
}
	 
export default Main;