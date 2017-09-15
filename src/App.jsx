import React, { Component } from "react";
import Bucket from "./Components/Bucket.jsx";

// This file passes down all the info to the other templating
// Every new project: Make sure to rearrange start/end indices
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
		    overview: "Student at UCLA and an aspiring full-stack engineer.",
		    info: "Traveling enthusiast. Best place I been to: Fingal's Cave, Scotland.",
		    index: "start"
	    },
	    {
		    title: "JumbleXplore",
		    // Photo will be a screenshot of my project
		    photo: "/images/construction.jpeg",
		    link: "#",
		    overview: "My personal movie reviews.",
		    info: "I have a passion for great films.",
		    index: "1"
	    },
	    {
		    title: "Doctor Crux",
		    // Photo will be a screenshot of my project
		    photo: "/images/construction.jpeg",
		    link: "#",
		    overview: "Self-diagnosing web application",
		    info: "List your symptoms, and Doctor Crux will list you suggestions of your illness.",
		    index: "2"
	    },
	    {
		    title: "FrackMan",
		    // Must take photo of the FrackMan video game on Visual Studio
		    photo: "/images/emacs_display.png",
		    link: "https://github.com/ivanmanan/emacs/blob/master/.emacs",
		    overview: "This is my Emacs display.",
		    info: "Click on the image above for my Emacs Lisp file.",
		    index: "end"
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