import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import classnames from 'classnames';

class Financials extends Component
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

	  render() 
	  {
	    return (
	      <div>
	      	<Breadcrumb>
	      		<BreadcrumbItem><a href="/" rel="noopener noreferrer">Home</a></BreadcrumbItem>
	      		<BreadcrumbItem active>Financials</BreadcrumbItem>
	      	</Breadcrumb>	        
	      	<br></br> 
	               	        
	      	<Nav tabs>
	          <NavItem>
	            <NavLink className={classnames({ active: this.state.activeTab === '1' })} onClick={() => { this.toggle('1'); }} >
	              Tab1
	            </NavLink>
	          </NavItem>
	          <NavItem>
	            <NavLink className={classnames({ active: this.state.activeTab === '2' })} onClick={() => { this.toggle('2'); }} >
	              Tab2
	            </NavLink>
	          </NavItem>
	          <NavItem>
	            <NavLink className={classnames({ active: this.state.activeTab === '3' })} onClick={() => { this.toggle('3'); }} >
	              Tab3
	            </NavLink>
	          </NavItem>
	        </Nav>
	        <TabContent activeTab={this.state.activeTab}>
	          <TabPane tabId="1">
	            <Row>
	              <Col sm="12">
	                <br></br>
	              	<h4>Tab 1 Contents</h4>
	              </Col>
	            </Row>
	          </TabPane>
	          <TabPane tabId="2">
	            <Row>
	              <Col sm="12">
	              	<br></br>
	              	<h4>Tab 2 Contents</h4>
	              </Col>
	            </Row>
	          </TabPane>
	          <TabPane tabId="3">
	            <Row>
	              <Col sm="12">
	              	<br></br>
	              	<h4>Tab 3 Contents</h4>
	              </Col>
	            </Row>
	          </TabPane>
	        </TabContent>
	      </div>
	    );
	  }
}
	 
export default Financials;