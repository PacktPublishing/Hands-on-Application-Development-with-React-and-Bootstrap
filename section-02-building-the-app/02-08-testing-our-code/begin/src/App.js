import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);

    this.state = { vehicleData: null};
  }

  componentDidMount(){
    Axios.get("http://localhost:3001/vehicles")
      .then(res => {
        this.setState( {vehicleData: res.data})
      })
      .then( res => console.log(res.data))
      .catch( err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
