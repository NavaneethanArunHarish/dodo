import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import { Grid, Segment, Icon } from 'semantic-ui-react';
import '../css/header.css';

class Header extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            <div>
            <Grid reversed='mobile' columns='equal' className="grid" padded>
                <Grid.Column style={{paddingTop:'0px', paddingBottom:'0px'}}><center><label className="grid-label">LE REGINA</label></center></Grid.Column>
                <Grid.Column style={{paddingTop:'0px', paddingBottom:'0px', paddingRight: '0px', paddingLeft: '0px'}}>
                    <div className="grid-column">
                        <center><Icon name='user outline' size='huge' style={{ marginTop: '8px' }} /></center>
                    </div>
                </Grid.Column>
            </Grid>
            </div>
        );
    }
}

export default Header;