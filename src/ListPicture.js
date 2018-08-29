import React, { Component } from "react";
import Picture from "./Picture";
import Loading from "./Loading";
import { getRandomTenPic } from "./Utils";

class ListPicture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: [],
      randomTenPic: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then(data => {
        return data.json();
      })
      .then(data => {
        this.setState({ pictures: data });
        this.setState({ randomTenPic: getRandomTenPic(this.state.pictures) });
      });
  }

  getMorePic = pictures => {
    this.setState({ randomTenPic: getRandomTenPic(pictures) });
  };

  render() {
    console.log(this.state.randomTenPic);
    return (
      <div>
        <button
          style={{ marginBottom: "20px", backgroundColor:'#173dd5', color:'white', height: '40px'}}
          onClick={() => {
            this.getMorePic(this.state.pictures);
          }}
        >
         Click Me!!
        </button>
        {this.state.pictures.length ? (
          <div>
            {this.state.randomTenPic.map((picture, index) => {
              return <Picture picture={picture} />;
            })}
          </div>
        ) : (
          <div>
            <Loading />
          </div>
        )}
      </div>
    );
  }
}

export default ListPicture;
