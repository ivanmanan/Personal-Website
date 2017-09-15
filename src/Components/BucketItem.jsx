import React, { Component } from "react";
import "./styles.css";

// Template for containers
class BucketItem extends Component {
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
                    <img src={this.props.project.photo}/>
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
                  <ul>

                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      // Remove transition bulletpoints
      case "end":
        return (
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center">
                <div className="projectItem">
                  <h1>{this.props.project.title}</h1>

                  <div>
                    <a href={this.props.project.link} target="_blank">
                      <img src={this.props.project.photo}/>
                    </a>
                  </div>

                  <div className="text-left
                    col-md-offset-2
                    col-xs-offset-2
                    marginalized">
                    <li>{this.props.project.overview}</li>
                    <li>{this.props.project.info}</li>
                  </div>
                </div>
              </div>
            </div>
            <div className="buffer"/>
          </div>
        );

      // All other cases
      default:
        return (
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center">
                <div className="projectItem">
                  <h1>{this.props.project.title}</h1>

                  <div>
                    <a href={this.props.project.link} target="_blank">
                      <img src={this.props.project.photo}/>
                    </a>
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
                  <ul>

                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
    }
  }
}
export default BucketItem;