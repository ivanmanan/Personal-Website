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
	    },
	    {
		    title: "FrackMan",
		    // Photo will be a screenshot of my project
		    photo: "/images/FrackMan.png",
		    link: "https://github.com/ivanmanan/FrackMan",
		    overview: "Video game programmed in C++.",
		    info: "Score as many points as possible by collecting oil barrels while avoiding protesters.",
		    index: "1"
	    },
	    {
		    title: "Doctor Crux",
		    photo: "/images/Crux.png",
		    link: "https://github.com/ivanmanan/Doctor-Crux",
		    overview: "Self-diagnosis web application.",
		    info: "List your symptoms, and Doctor Crux will suggest diagnoses and treatments.",
		    index: "2"
	    },
	    {
		    title: "JumbleXplore",
		    photo: "/images/construction.jpeg",
		    link: "https://github.com/ivanmanan/JumbleXplore",
		    overview: "Project currently in construction. Expected completion end of this Winter.",
        // overview: A social media platform for traveling enthusiasts.",
		    info: "Document your travels and share with others.",
		    index: "3"
	    },
      {
        title: "UAS",
		    photo: "/images/construction.jpeg",
		    link: "https://github.com/uas-at-ucla/suas_2018/tree/master/ground",
		    overview: "Project currently in construction. This is my team's source code for our autonomous drone.",
		    info: "Will be directing the ground station team for the June 2018 AUVSI SUAS competition.",
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
