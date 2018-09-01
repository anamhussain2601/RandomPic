import React, { Component } from "react";
import Picture from "./Picture";
import Loading from "./Loading";
import { getRandomTenPic } from "./Utils";
import GuttersGrid from './Pictures';
import Button from '@material-ui/core/Button';

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
        <div style={{marginBottom:"10px"}}>
        <Button variant="outlined" onClick={() => {this.getMorePic(this.state.pictures);}}>Click Me!</Button>
        </div>
        {this.state.pictures.length ? (
          <div>
            {this.state.randomTenPic.map((picture, index) => {
              return <div style={{marginBottom:"10px"}}><GuttersGrid picture={picture}/></div>;
            })}
            <GuttersGrid/>
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
