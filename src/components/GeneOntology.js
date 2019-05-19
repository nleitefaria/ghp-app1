import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import classnames from 'classnames';
import GeneOntologyAbout from './gene-ontology/GeneOntologyAbout';
import GeneOntologySearch from './gene-ontology/GeneOntologySearch';
import GeneOntologyTerms from './gene-ontology/GeneOntologyTerms';

class GeneOntology extends Component
{
	constructor(props)
	{
	    super(props);

	    this.toggle = this.toggle.bind(this);
	    this.state = {
	      activeTab: '1'
	    };
	  }

	  toggle(tab) {
	    if (this.state.activeTab !== tab) {
	      this.setState({
	        activeTab: tab
	      });
	    }
	  }

	  componentDidMount()
		{
	  }

	  render()
	  {
	    return (
	      <div>
	      	<Breadcrumb>
	      		<BreadcrumbItem><a href="/" rel="noopener noreferrer">Home</a></BreadcrumbItem>
	      		<BreadcrumbItem active>Gene Ontology</BreadcrumbItem>
	      	</Breadcrumb>
	      	

	      	<Nav tabs>
	          <NavItem>
	            <NavLink className={classnames({ active: this.state.activeTab === '1' })} onClick={() => { this.toggle('1'); }} >
	              <b>Terms</b>
	            </NavLink>
	          </NavItem>
	          <NavItem>
	            <NavLink className={classnames({ active: this.state.activeTab === '2' })} onClick={() => { this.toggle('2'); }} >
	              <b>Search</b>
	            </NavLink>
	          </NavItem>	          
	          <NavItem>
	            <NavLink className={classnames({ active: this.state.activeTab === '4' })} onClick={() => { this.toggle('4'); }} >
	              <b>About</b>
	            </NavLink>
	          </NavItem>
	        </Nav>
	        <TabContent activeTab={this.state.activeTab}>
	          <TabPane tabId="1">
	            <Row>
	              <Col sm="12">
					<GeneOntologyTerms></GeneOntologyTerms>
	              </Col>
	            </Row>
	          </TabPane>
	          <TabPane tabId="2">
	            <Row>
	              <Col sm="12">
	              	<GeneOntologySearch></GeneOntologySearch>
	              </Col>
	            </Row>
	          </TabPane>
	          <TabPane tabId="4">
	            <Row>
	              <Col sm="12">
	              	<GeneOntologyAbout></GeneOntologyAbout>
	              </Col>
	            </Row>
	          </TabPane>
	        </TabContent>
	      </div>
	    );
	  }
}

export default GeneOntology;
