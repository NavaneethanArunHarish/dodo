import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import { Grid, Segment, Icon } from 'semantic-ui-react';



class Footer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            <div>
            <Grid reversed='mobile' columns='equal' style={{height:'100px'}}>
            <Grid.Column><center><label style={{marginTop:'8px'}}>Une solution Dodo-up</label></center></Grid.Column>
            <Grid.Column><center><label style={{marginTop:'8px'}}>Mentions Légales</label></center></Grid.Column>
            <Grid.Column><center><label style={{marginTop:'8px'}}>www.dodo-up.fr</label></center></Grid.Column>
          </Grid>
          </div>
        );
    }
}

export default Footer;