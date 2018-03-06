import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import { Grid, Segment, Icon } from 'semantic-ui-react';
import Stepper from 'react-stepper-horizontal';
import '../css/header.css';

var progress = [{ title: 'Votre groupe' }, { title: 'Votre séjour' }, { title: 'Vos options' }, { title: 'Votre simulation' }];

class ProgressBar extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <Stepper steps={progress} activeStep={this.props.progress || 0} />
            </div>

        );
    }
}

export default ProgressBar;