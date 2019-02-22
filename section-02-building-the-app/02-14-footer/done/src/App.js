import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';
import TopNav from './components/TopNav';
import Home from './components/Home';
import Footer from './components/Footer';


class App extends Component {

  constructor(props){
    super(props);
    this.state = { vehicleData: null};
  }
  componentDidMount(){
    Axios.get("http://localhost:3001/vehicles")
      .then( res => {
        console.log(res.data);
        this.setState({ vehicleData: res.data});
      })
      .catch( err => console.log(err));
  }

  render() {
    if(this.state.vehicleData){
    return(
      <div className="App">
        <TopNav />
        <Home />
        <Footer />
      </div>
    );
    } else {
      return <h4>Loading Data...</h4>;
    }
  }
}

export default App;
