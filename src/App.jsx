import React, { Component } from "react";
import Bucket from "./Components/Bucket.jsx";


// This file passes down all the info to the other templating
// I want to insert my images into the projects array

// Must make the photos a clickable link


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
		photo: "img src='/images/ivan.jpg'",
		link: "https://www.linkedin.com/in/ivan-manan/",
		overview: "I am a student at UCLA aspiring to become a full-stack engineer.",
		info: "Besides engineering, I enjoy traveling, hiking, and watching movies."
	    },
	    {
		title: "Mad Manan's Movie Review",
		photo: "img src='/images/construction.jpeg",
		link: "localhost",
		overview: "Ivan's personal movie reviews.",
		info: "I absolutely enjoy watching movies, so I like to share my personal reviews on them."
	    },
	    {
		title: "To Be Determined",
		photo: "img src='/images/construction.jpeg",
		link: "localhost",
		overview: "???",
		info: "???"
	    },
	    {
		title: "Emacs Init File",
		photo: "img src='/images/construction.jpeg",
		link: "https://github.com/ivanmanan/emacs/blob/master/.emacs",
		overview: "This is my Emacs settings.",
		info: "I always use this Emacs Lisp file to develop anything."
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
