import React, { Component } from "react";
import "./BucketItem.css";

// Template for containers

class BucketItem extends Component {
    render() {
	console.log(this.props);
	return (
	    <div className="container">
	        <div className="row">
	            <div className="col-md-8 col-md-offset-2 text-center">
			<div className="projectItem">
			    <h1>{this.props.project.title}</h1>
			    
			    <p>{this.props.project.info}</p>
			</div>
			<div className="trailing">
			    <ul>
			    <li>Ivan</li>
			    <li>Ivan</li>
			    <li>Ivan</li>
			    </ul>
			</div>
		    </div>
	        </div>
	    </div>
	);
    }
}

export default BucketItem;
