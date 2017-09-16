import React, { Component } from "react";

/* Must make the containers bigger on phone screens*/

// Navbar for Personal Website
const navbar = (

  <nav className="navbar navbar-inverse navbar-fixed-top min-width-navbar" id="top-panel">
    <div className="container-fluid">

	    <div className="navbar-header">
	      <h1 className="navbar-brand" id="heading">Ivan Manan</h1>
	    </div>

	    <div className="navbar-collapse collapse" id="header-links">
	      <ul className="nav navbar-nav navbar-right">

	        <li>
            <a href="https://www.linkedin.com/in/ivanmanan/" target="_blank">
              <img className ="linked-in-logo" src="/images/linkedin.png"/>
            </a>
          </li>

          <li>
            <a href="https://github.com/ivanmanan" target="_blank">
              <img className="github-logo" src="/images/github.png"/>
            </a>
          </li>

	        <li>
            <button className="btn navbar-btn">
              <a href="#">JumbleXplore</a>
            </button>
          </li>

	      </ul>
	    </div>

    </div>
  </nav>
);

class Layout extends Component {
  render () {
    return navbar;
  }
}

export default Layout;