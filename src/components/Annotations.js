import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import classnames from 'classnames';
import AnnotationsInner from './annotations/AnnotationsInner';

class Annotations extends Component
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
	      		<BreadcrumbItem><a href="/#/" rel="noopener noreferrer">Home</a></BreadcrumbItem>
	      		<BreadcrumbItem active>Annotations</BreadcrumbItem>
	      	</Breadcrumb>
	      	<br></br>

	      	<Nav tabs>
	          <NavItem>
	            <NavLink className={classnames({ active: this.state.activeTab === '1' })} onClick={() => { this.toggle('1'); }} >
	              Annotations
	            </NavLink>
	          </NavItem>	          	          	          
	        </Nav>
	        <TabContent activeTab={this.state.activeTab}>
	          <TabPane tabId="1">
	            <Row>
	              <Col sm="12">
					<AnnotationsInner></AnnotationsInner>
	              </Col>
	            </Row>
	          </TabPane>	          
	        </TabContent>
	      </div>
	    );
	}
}

export default Annotations;
