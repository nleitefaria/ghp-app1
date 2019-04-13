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
import Annotations from './Annotations';
	
class Main extends Component 
{
	constructor(props) {
	    super(props);

	    this.toggle1 = this.toggle1.bind(this);
	    this.toggle2 = this.toggle2.bind(this);
	    this.state = {
	      dropdown1Open: false,
	      dropdown2Open: false
	    };
	  }

	  toggle1() {
	    this.setState(prevState => ({
	      dropdown1Open: !prevState.dropdown1Open
	    }));
	  }
	  
	  toggle2() {
		    this.setState(prevState => ({
		      dropdown2Open: !prevState.dropdown2Open
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
	            										<Dropdown isOpen={this.state.dropdown1Open} toggle={this.toggle1}>
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
	            									<Col xs="auto">            							
            										<Dropdown isOpen={this.state.dropdown2Open} toggle={this.toggle2}>
            											<DropdownToggle caret color="link">
            												Annotations
            											</DropdownToggle>
            											<DropdownMenu>	            					          
            												<DropdownItem><NavLink to="/annotations">Annotations</NavLink></DropdownItem>            													
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
	            							<Route path="/annotations" component={Annotations}/>	            												
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