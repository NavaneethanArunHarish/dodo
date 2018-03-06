import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import { Form, Button, Input, Message } from 'semantic-ui-react'
import Header from './header';
import Footer from './footer';
import SimulationComponent from './simulation';
import ProgressBar from './progressBar';

class SimulatorComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            marginTopValue: '',
            progressBarValue: ''
        }
        this.switchValue = this.switchValue.bind(this);
    }

    componentWillMount() {
        if (window.innerWidth <= 500) {
            this.setState({ marginTopValue: '0px' });
        } else if ((window.innerWidth <= 800) && (window.innerWidth >= 501)){
            this.setState({ marginTopValue: '300px' });
        } else {
            this.setState({ marginTopValue: '100px' });
        }
    }

    switchValue(value) {
        this.setState({ progressBarValue: value });
        if (value === 1) {
            if ((window.innerWidth > 800) && (window.innerWidth < 900)) {
                this.setState({ marginTopValue: '950px' });
            } else if ((window.innerWidth > 770) && (window.innerWidth < 800)) {
                this.setState({ marginTopValue: '1050px' });
            } else if ((window.innerWidth > 700) && (window.innerWidth < 769)) {
                this.setState({ marginTopValue: '1350px' });
            } else if ((window.innerWidth > 600) && (window.innerWidth < 699)) {
                this.setState({ marginTopValue: '1250px' });
            } else if (window.innerWidth > 900) {
                this.setState({ marginTopValue: '850px' });
            } else {
                this.setState({ marginTopValue: '1350px' });
            }
        } else if (value === 3) {
            if (window.innerWidth > 500) {
                this.setState({ marginTopValue: '0px' });
            } else {
                this.setState({ marginTopValue: '0px' });
            }
        } else if (value === 0) {
            if (window.innerWidth > 500) {
                this.setState({ marginTopValue: '50px' });
            } else {
                this.setState({ marginTopValue: '100px' });
            }
        } else {
            this.setState({ marginTopValue: '0px' });
        }
    }




    render() {
        return (
            <div>
                <Header />
                <ProgressBar progress={this.state.progressBarValue} />
                <SimulationComponent switchValue={this.switchValue} simulationValue={this.props.location.state.simulationValue}/><br /><br />
                <div style={{ marginTop: this.state.marginTopValue }}>
                    <Footer />
                </div>
            </div>

        );
    }
}

export default SimulatorComponent;