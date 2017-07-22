import React, { Component } from "react";
import Bucket from "./Components/Bucket.jsx";


// This file passes down all the info to the other templating
// I want to insert my images into the projects array


class App extends Component {
    constructor() {
	super();
	this.state = {
	    projects: [ ]
	}
    }

    componentWillMount() {
	this.setState({projects: [
	    {
		title: "Bio",
		info: "Student at UCLA. Aspiring full-stack engineer."
	    },
	    {
		title: "Mad Manan's Movie Review",
		info: "Ivan's personal movie reviews."
	    },
	    {
		title: "To Be Determined",
		info: "???"
	    },
	    {
		title: "Emacs Init File",
		info: "This is the Emacs configuration I use to develop anything."
	    }
	]})
    }
    
    render() {
	return (
	    <div className="App">
		<Bucket projects={this.state.projects} />
	    </div>
	);
    }
}

export default App;
