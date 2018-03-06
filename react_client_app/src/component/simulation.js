import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import { Form, Button, Input, Table } from 'semantic-ui-react';
import '../css/group.css';
import roomImg from '../img/room8.jpg';
import roomImg1 from '../img/room3.jpg';
import roomImg2 from '../img/room2.jpg';
import GroupComponent from './groupComponent';
import StayComponent from './stayComponent';
import OptionComponent from './optionComponent';
import ConfirmationComponent from './confirmationComponent';
import '../css/simulation.css';

class SimulationComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            show: 0,
            marginTopValue: '',
            details:''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSwitch = this.handleSwitch.bind(this);
        this.backToSwitch = this.backToSwitch.bind(this);
    }

    componentWillMount() {
        //this.props.createAction.getEvent();
    }

    componentWillReceiveProps(nextProps) {
        //console.log("nextProps>>>>>>>>> ",JSON.stringify(nextProps));
    };

    handleChange() {
        browserHistory.push('/Simulator');
    }

    handleSwitch(data, obj) {
        this.setState({ show: data, details: obj });
        this.props.switchValue(data);
        if (data === 2) {
            this.setState({ marginTopValue: '180px' });
        } else {
            this.setState({ marginTopValue: '75px' });
        }
    }

    backToSwitch(data) {
        this.setState({ show: data });
        this.props.switchValue(data);
        if (data === 2) {
            this.setState({ marginTopValue: '180px' });
        } else {
            this.setState({ marginTopValue: '75px' });
        }
    }




    render() {
        return (
            <div>
                <div className="App" style={{ marginTop: this.state.marginTopValue }}>
                    <div>
                        {this.state.show === 0 ? <img src={roomImg1} className="responsive groupBackGroundImg" /> : ''}
                        {this.state.show === 1 ? <img src={roomImg} className="responsive stayBackGroundImg" /> : ''}
                        {this.state.show === 2 ? <img src={roomImg1} className="responsive optionBackGroundImg" /> : ''}
                        {this.state.show === 3 ? <img src={roomImg1} className="responsive confirmBackGroundImg" /> : ''}
                    </div>
                    <div className="App-card">
                        {this.state.show === 0 ? <GroupComponent handleSwitch={this.handleSwitch} backToSwitch={this.backToSwitch} /> : ''}
                        {this.state.show === 1 ? <StayComponent handleSwitch={this.handleSwitch} backToSwitch={this.backToSwitch} details={this.state.details}/> : ''}
                        {this.state.show === 2 ? <OptionComponent handleSwitch={this.handleSwitch} backToSwitch={this.backToSwitch} details={this.state.details}/> : ''}
                        {this.state.show === 3 ? <ConfirmationComponent handleSwitch={this.handleSwitch} backToSwitch={this.backToSwitch} details={this.state.details} simulationValue={this.props.simulationValue}/> : ''}
                    </div>
                </div><br /><br />
            </div>

        );
    }
}

// function mapStateToProps(state, props) {
//   return {
//     signUpSuccess: state.login.signupSuccess
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     LoginAction: bindActionCreators(LoginAction, dispatch)
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);

export default SimulationComponent;