import React, { Component } from "react";
import ProjectItem from "./ProjectItem";

// Template for containers
class Project extends Component {
  render() {
	  let projectItems;
	  // Map the projects
	  if(this.props.projects) {
	    projectItems = this.props.projects.map(project => {
		    return (
		      <ProjectItem key={project.index} project={project} />
		    );
	    });
	  }
	  return (
	    <div className="Project">
		    {projectItems}
	    </div>
	  );
  }
}

export default Project;