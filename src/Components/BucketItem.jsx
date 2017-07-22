import React, { Component } from "react";
import "./styles.css";

// Template for containers
class BucketItem extends Component {
    render() {
	switch(this.props.project.index) {
	
            // Remove clickable image and induce buffer for phones
	    case 0:
		return (
		    <div className="container">
			<div className="row">
			    <div className="col-md-8 col-md-offset-2 text-center">
				<div className="projectItem">
				    <h1>{this.props.project.title}</h1>

				    <div>
					<img src={this.props.project.photo}/>
				    </div>

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
					<li>&#x25C8;</li>
					<li>&#x25C8;</li>
					<li>&#x25C8;</li>
				    </ul>
				</div>
			    </div>
			</div>
		    </div>
		);

	    // All other cases
	    case 1:
	    case 2:
		return (
		    <div className="container">
			<div className="row">
			    <div className="col-md-8 col-md-offset-2 text-center">
				<div className="projectItem">
				    <h1>{this.props.project.title}</h1>

				    <div>
					<a href={this.props.project.link} target="_blank">
					    <img src={this.props.project.photo}/>
					</a>
				    </div>

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
					<li>&#x25C8;</li>
					<li>&#x25C8;</li>
					<li>&#x25C8;</li>
				    </ul>
				</div>
			    </div>
			</div>
		    </div>
		);		

	    // Must change the indices every new project insert
	    // Remove trailing bulletpoints
	    case 3:
		return (
		    <div className="container">
			<div className="row">
			    <div className="col-md-8 col-md-offset-2 text-center">
				<div className="projectItem">
				    <h1>{this.props.project.title}</h1>

				    <div>
					<a href={this.props.project.link} target="_blank">
					    <img src={this.props.project.photo}/>
					</a>
				    </div>

				    <div className="text-left
					col-md-offset-2
					col-xs-offset-2
					marginalized">
					<li>{this.props.project.overview}</li>
					<li>{this.props.project.info}</li>
				    </div>
				</div>
			    </div>
			</div>
			<div className="buffer"/>
		    </div>
		);
	}
    }
}
export default BucketItem;
