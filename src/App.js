import React, { Component } from 'react';
import './App.css';
import axiosWrapper from "./api";
import { connect } from 'react-redux'
import { searchResult} from "./actions";

export class App extends Component {

  componentDidMount(){
      axiosWrapper.get('jaws').then(
          (res) => {
              console.log(res.data)
              this.props.addResult(res.data)
          },
      );
  }

  render() {
    console.log(this.props.result)
    return (
      <div className="App">
        App Page
      </div>
    );
  }
}

const mapStateToProps = state => ({
    result: state.searchResult.data
})

const mapDispatchToProps = dispatch => ({
    addResult: () => dispatch(searchResult)
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
