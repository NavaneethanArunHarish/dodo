import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import roomImg from '../img/room3.jpg'
import OfficialSimulator from './officialSimulator';
import '../css/simulation.css';

class SimulatorLandingComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    componentWillMount() {
        if (window.innerWidth <= 500) {
            this.setState({ cardHeight: '400px', imgHeight: '700px' });
        }
    }




    render() {
        return (
            <div>
                <div className="App">
                    <div>
                        <img src={roomImg} className="responsive App-img simulationImg" style={{ height: this.state.imgHeight }} />
                    </div>
                    <div className="App-card" style={{ height: this.state.cardHeight }}>
                        <center>
                            <OfficialSimulator />
                        </center>
                    </div>
                </div><br /><br />
            </div>
        );
    }
}

export default SimulatorLandingComponent;