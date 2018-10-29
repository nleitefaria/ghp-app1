import React, { Component } from 'react';
import {
	  Route,
	  NavLink,
	  HashRouter
	} from "react-router-dom";

import Home from './Home';
import Financials from './Financials';
	

class Main extends Component {
	  render() {
	    return (
	    		<HashRouter>
	            <div>
	              <ul className="header">
	                <li><NavLink to="/">Home</NavLink></li>
	                <li><NavLink to="/financials">Financials</NavLink></li>
	                
	              </ul>
	              <div className="content">
	              	<Route exact path="/" component={Home}/>
	                <Route path="/financials" component={Financials}/>
	                
	              </div>
	            </div>
	          </HashRouter>
	    );
	  }
}
	 
export default Main;