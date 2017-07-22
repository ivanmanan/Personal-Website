import React, { Component } from "react";
import "./styles.css";

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

			    <p>{this.props.project.photo}</p>

			    <div className="text-left
				col-md-offset-2
				col-xs-offset-2
				marginalized">

				<li>{this.props.project.overview}</li>
				<li>{this.props.project.info}</li>
			    </div>
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
