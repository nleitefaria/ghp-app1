import React, { Component } from 'react';
import {Breadcrumb, BreadcrumbItem} from 'reactstrap';

class Profile extends Component 
{
	  render() 
	  {
	    return (
	      <div>
	      <Breadcrumb>
    		<BreadcrumbItem><a href="/" rel="noopener noreferrer">Home</a></BreadcrumbItem>
    		<BreadcrumbItem active>Profile</BreadcrumbItem>
    	  </Breadcrumb>	
    	  <br></br> 
    	  TODO
	      </div>
	    );
	  }
}
	 
export default Profile;