import React, { Component } from "react";
import "./App.css";
import Intro from '../Intro';

import Series from '../../Container/Series'

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">The TV Shows</h1>
        </header>
        <Intro msg="Search your Favorite TV Shows " />
        
        <Series  />
      </div>
    );
  }
}

export default App;
