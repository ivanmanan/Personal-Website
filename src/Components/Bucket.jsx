import React, { Component } from "react";
import BucketItem from "./BucketItem";

// Template for containers
class Bucket extends Component {
  render() {
	  let bucketItems;

	  // Map the projects
	  if(this.props.projects) {
	    bucketItems = this.props.projects.map(project => {
		    return (
		      <BucketItem key={project.index} project={project} />
		    );
	    });
	  }

	  return (
	    <div className="Bucket">
		    {bucketItems}
	    </div>
	  );
  }
}

export default Bucket;