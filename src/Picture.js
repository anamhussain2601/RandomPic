import React, { Component } from "react";
import './App.css';

class Picture extends Component {

  render() {
    return (
      <div className="card">
        <div>
          <img src={this.props.picture.thumbnailUrl} />
        </div>
        <div>{this.props.picture.title}</div>
      </div>
    );
  }
}

export default Picture;
