import React, { Component } from "react";

class Picture extends Component {

  render() {
    return (
      <div style={{marginBottom:'15px'}}>
        <div>
          <img src={this.props.picture.thumbnailUrl} />
        </div>
        <div>{this.props.picture.title}</div>
      </div>
    );
  }
}

export default Picture;
