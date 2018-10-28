import React, { Component } from 'react';
import { Switch, Route, Redirect, BrowserRouter} from 'react-router-dom';
import {
	  Collapse,
	  Navbar,
	  NavbarToggler,
	  Nav,
	  NavItem,
	  NavLink,
	  Container, Row, Col
} from 'reactstrap';

import Home from './components/Home.js';
import P1 from './components/P1.js';

import logo from './logo.svg';
import './App.css';

class App extends Component 
{
	constructor(props) 
	{
		super(props);
		
		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false
		};		
    }
	 
	toggle() 
	{
		this.setState({
			isOpen: !this.state.isOpen
		});
	}
  
	render() 
	{
		return (
				<div>								
					<Container>
						<Row>
							<Col>
								<Navbar color="light" light expand="md">
									
										<NavbarToggler onClick={this.toggle} />
								<Collapse isOpen={this.state.isOpen} navbar>
								<Nav navbar>
									<NavItem>
										<NavLink href="/home">Home</NavLink>
									</NavItem>
									<NavItem>
										<NavLink href="/p1">P1</NavLink>
									</NavItem>
									
								</Nav>
								</Collapse>
								</Navbar>
								<BrowserRouter>
								<Switch>
								    <Route exact path="/" render={() => (<Redirect to="/home" />)} /> 
									<Route path='/home' component={Home}/>
									<Route path='/p1' component={P1}/>
								</Switch> 
								</BrowserRouter>
								</Col>
							</Row>
						</Container>
					</div>
    );
  }
}

export default App;
