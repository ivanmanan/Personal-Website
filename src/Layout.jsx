import React, { Component } from "react";

// Navbar for Personal Website
const navbar = (

  <nav className="navbar navbar-inverse navbar-fixed-top" id="top-panel">
    <div className="container-fluid">
      <div className="navbar-right">
        <button type="button" className="pull-right navbar-toggle"
                data-toggle="collapse" data-target="#header-links"
                id="navbar-toggle">
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
      </div>
	    <div className="navbar-header">
	      <h1 className="navbar-brand" id="heading">Ivan Manan</h1>
	    </div>

	    <div className="navbar-collapse collapse" id="header-links">
	      <ul className="nav navbar-nav navbar-right">

	        <li>
            <a href="https://www.linkedin.com/in/ivanmanan/"
               target="_blank" rel="noopener noreferrer">
              <img className ="linked-in-logo"
                   src="/images/linkedin.png" alt="Project"/>
            </a>
          </li>

          <li>
            <a href="https://github.com/ivanmanan"
               target="_blank" rel="noopener noreferrer">
              <img className="github-logo"
                   src="/images/github.png" alt="Project"/>
            </a>
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