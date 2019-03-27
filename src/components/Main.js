import React, { Component } from 'react';
import {
	  Route,
	  NavLink,
	  HashRouter
} 
from "react-router-dom";
import 
{
	Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Container, Row, Col
} 
from 'reactstrap';

import Home from './Home';
import GeneOntology from './GeneOntology';
import EvidenceConclusionOntology from './EvidenceConclusionOntology';
import AnnotationExtensionRelationsAndValidation from './AnnotationExtensionRelationsAndValidation';
	
class Main extends Component 
{
	constructor(props) {
	    super(props);

	    this.toggle = this.toggle.bind(this);
	    this.state = {
	      dropdownOpen: false
	    };
	  }

	  toggle() {
	    this.setState(prevState => ({
	      dropdownOpen: !prevState.dropdownOpen
	    }));
	  }
	  
	  render() {
	    return (
	    		<HashRouter>
	            	<div>
	            		<div>								
	            			<Container>
	            				<Row>
	            					<Col>
	            						<div className="header">	            							
	            							<Container>
	            								<Row>
	            									<Col xs="auto">	            								            								
	            										<Button color="link"><NavLink to="/">Home</NavLink></Button>
	            									</Col>
	            									<Col xs="auto">            							
	            										<Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
	            											<DropdownToggle caret color="link">
	            												Ontologies
	            											</DropdownToggle>
	            											<DropdownMenu>	            					          
	            												<DropdownItem><NavLink to="/gene-ontology">Gene Ontology</NavLink></DropdownItem>
	            												<DropdownItem><NavLink to="/evidence-conclusion-ontology">Evidence and Conclusion Ontology</NavLink></DropdownItem>	            					          
	            												<DropdownItem><NavLink to="/annotation-extension-relations-and-validation">Annotation Extension Relations and Validation</NavLink></DropdownItem>				          
	            											</DropdownMenu>
	            										</Dropdown>
	            									</Col>
	            								</Row>	            						
	            							</Container>          					              								            							
	            						</div>
	            					
	            						<div className="content">
	            							<Route exact path="/" component={Home}/>
	            							<Route path="/gene-ontology" component={GeneOntology}/>
	            							<Route path="/evidence-conclusion-ontology" component={EvidenceConclusionOntology}/>
	            							<Route path="/annotation-extension-relations-and-validation" component={AnnotationExtensionRelationsAndValidation}/>		
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