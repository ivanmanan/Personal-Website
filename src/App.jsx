import React, { Component } from "react";
import Bucket from "./Components/Bucket.jsx";

// This file passes down all the info to the other templating
// Every new project insert -- must edit case numbers in BucketItem.js
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
		photo: "/images/ivan.jpg",
		link: "#",
		overview: "I am a student at UCLA and an aspiring full-stack engineer.",
		info: "I enjoy traveling and exploring new places.",
		index: 0
	    },
	    {
		title: "Manan's Movies",
		// Photo will be a screenshot of my project
		photo: "/images/construction.jpeg",
		link: "#",
		overview: "My personal movie reviews.",
		info: "I have a passion for great films.",
		index: 1
	    },
	    {
		title: "In Development",
		photo: "/images/construction.jpeg",
		link: "#",
		overview: "???",
		info: "???",
		index: 2
	    },
	    {
		title: "Emacs Init",
		// Photo needs to have more clarity
		photo: "/images/emacs_display.png",
		link: "https://github.com/ivanmanan/emacs/blob/master/.emacs",
		overview: "This is my Emacs display.",
		info: "Click on the image above for my Emacs Lisp file.",
		index: 3
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
