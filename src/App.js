import React, { Component } from 'react';
import './App.css';
import axiosWrapper from "./api";

class App extends Component {

  componentDidMount(){
      axiosWrapper.get('jaws').then(
          (res) => {
              console.log(res.data)
          },
      );
  }

  render() {
    return (
      <div className="App">
        App Page
      </div>
    );
  }
}

export default App;
