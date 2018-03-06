import React, { Component } from 'react';
import Header from './component/header';
import Footer from './component/footer';
import SimulatorLandingComponent from './component/simulatorLanding';
import roomImg from './img/room3.jpg'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <Header />
        <SimulatorLandingComponent/>
        <div style={((window.innerWidth <= 800) && (window.innerWidth >= 700)) ? {marginTop:'300px'} : {marginTop:'160px'}}>
        <Footer />
        </div>
      </div>
    );
  }
}

export default App;
