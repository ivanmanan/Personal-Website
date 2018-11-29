import React, { Component } from "react";

// Template for containers
class ProjectItem extends Component {
  render() {
    switch(this.props.project.index) {

      // Remove clickable image and induce buffer for phones
      case "start":
        return (
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center">
                <div className="projectItem">
                  <h1>{this.props.project.title}</h1>
                  <div>
                    <img id="profile-picture" src={this.props.project.photo} alt="Project"/>
                  </div>
                  <div className="text-left
                    col-md-offset-2
                    col-xs-offset-2
                    marginalized">
                    <li>{this.props.project.overview}</li>
                    <li>{this.props.project.info}</li>
                  </div>
                </div>
                <div className="transition">
                </div>
              </div>
            </div>
          </div>
        );

      // Remove transition margin
      case "end":
        return (
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center">
                <div className="projectItem">
                  <h1>{this.props.project.title}</h1>

                  <div>
                    <img src={this.props.project.photo} alt="Project"/>
                  </div>

                  <div className="text-left
                    col-md-offset-2
                    col-xs-offset-2
                    marginalized">
                    <li>
                      <a href={this.props.project.link} target="_blank" rel="noopener noreferrer">
                        {this.props.project.linkInfo}
                      </a>
                    </li>
                    <li>{this.props.project.info}</li>
                  </div>
                </div>
              </div>
            </div>
            <div className="end-buffer"/>
          </div>
        );

      default:
        return (
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center">
                <div className="projectItem">
                  <h1>{this.props.project.title}</h1>

                  <div>
                    <img src={this.props.project.photo} alt="Project"/>
                  </div>

                  <div className="text-left
                    col-md-offset-2
                    col-xs-offset-2
                    marginalized">
                    <li>
                      <a href={this.props.project.link} target="_blank" rel="noopener noreferrer">
                        {this.props.project.linkInfo}
                      </a>
                    </li>
                    <li>{this.props.project.info}</li>
                  </div>
                </div>
                <div className="transition">
                </div>
              </div>
            </div>
          </div>
        );
    }
  }
}
export default ProjectItem;