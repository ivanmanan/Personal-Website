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
		    info: "Traveling enthusiast. Favorite place: Fingal's Cave.",
		    index: "start"
	    },/*
	    {
		    title: "JumbleXplore",
		    // Photo will be a screenshot of my project
		    photo: "/images/construction.jpeg",
		    link: "#",
		    overview: "Social media platform for traveling enthusiasts.",
		    info: "Document your travels and share with everyone.",
		    index: "1"
	    },*/
	    {
		    title: "Doctor Crux",
		    // Photo will be a screenshot of my project with an inputted symptom
		    photo: "/images/Crux.png",
		    link: "#",
		    overview: "Self-diagnosing illnesses web application.",
		    info: "List your symptoms, and Doctor Crux will suggest diagnoses and treatments.",
		    index: "2"
	    },
	    {
		    title: "FrackMan",
		    // Must take photo of the FrackMan video game on Visual Studio
		    photo: "/images/FrackMan.png",
		    link: "https://github.com/ivanmanan/FrackMan",
		    overview: "Video game programmed in C++.",
		    info: "Score as many points as possible by collecting oil barrels while avoiding protesters.",
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
