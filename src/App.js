import React, { Component } from 'react';

import './App.css';
import Picture from './Picture';
import ListPicture from './ListPicture';

class App extends Component {

  render() {
    return (
      <div className="center">
        <h1>Picture Gallery</h1>
        <ListPicture/>
      </div>
    );
  }
}

export default App;
