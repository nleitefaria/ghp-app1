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
import GeneOntology from './GeneOntology';
import EvidenceConclusionOntology from './EvidenceConclusionOntology';
import AnnotationExtensionRelationsAndValidation from './AnnotationExtensionRelationsAndValidation';
	
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
	            							<li><NavLink to="/gene-ontology">Gene Ontology</NavLink></li>
	            							<li><NavLink to="/evidence-conclusion-ontology">Evidence and Conclusion Ontology</NavLink></li>
	            							<li><NavLink to="/annotation-extension-relations-and-validation">Annotation Extension Relations and Validation</NavLink></li>
	            						</ul>
	            					
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