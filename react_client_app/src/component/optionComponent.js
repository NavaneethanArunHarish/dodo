import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import { Form, Button, Input, Table, Grid, Icon, Checkbox, Radio } from 'semantic-ui-react';
import '../css/stay.css';


class OptionComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            value: true
        }
        this.save = this.save.bind(this);
        this.back = this.back.bind(this);
        this.cleaningSportsWear = this.cleaningSportsWear.bind(this);
        this.sportsFacilities = this.sportsFacilities.bind(this);
        this.liveForAGroup = this.liveForAGroup.bind(this);
        this.lastDeparture = this.lastDeparture.bind(this);
        this.handleValidate = this.handleValidate.bind(this);
    }

    componentWillMount() {
        //this.props.createAction.getEvent();
    }

    componentWillReceiveProps(nextProps) {
        //console.log("nextProps>>>>>>>>> ",JSON.stringify(nextProps));
    };

    save() {
        var data = {
            "groupType": this.props.details.groupType,
            "participants": {
                "participants": this.props.details.participants.participants,
                "youth": this.props.details.participants.youth,
                "accompanyingOne": this.props.details.participants.accompanyingOne,
                "accompanyingTwo": this.props.details.participants.accompanyingTwo
            },
            "date": {
                "startDate": this.props.details.date.startDate,
                "endDate": this.props.details.date.endDate
            },
            "accommodationOne": {
                "twoBeds": this.props.details.accommodationOne.twoBeds,
                "threeBeds": this.props.details.accommodationOne.threeBeds,
                "fourBeds": this.props.details.accommodationOne.fourBeds,
                "sixBeds": this.props.details.accommodationOne.sixBeds,
                "secondThreeBeds": this.props.details.accommodationOne.secondThreeBeds,
                "description": this.props.details.accommodationOne.description
            },
            "accommodationTwo": {
                "twoBeds": this.props.details.accommodationTwo.twoBeds,
                "threeBeds": this.props.details.accommodationTwo.threeBeds,
                "fourBeds": this.props.details.accommodationTwo.fourBeds,
                "fiveBeds": this.props.details.accommodationTwo.fiveBeds
            },
            "restoration": this.props.details.restoration,
            "interestIn": this.props.details.interestIn,
            "roomRental": {
                "conference": this.props.details.roomRental.conference,
                "class": this.props.details.roomRental.class,
                "meeting": this.props.details.roomRental.meeting,
                "uRoom": this.props.details.roomRental.uRoom,
                "cocktail": this.props.details.roomRental.cocktail
            },
            "option": {
                "cleaningSportsWear": this.state.sportsWear,
                "sportsFacilities": this.state.facilities,
                "liveForAGroup": this.state.live_group,
                "lastDeparture": this.state.last_departure
            }
        }
        this.props.handleSwitch(3, data);
    }

    back() {
        this.props.backToSwitch(1);
    }

    cleaningSportsWear() {
        this.setState({ sportsWear: "Cleaning of sportswear in 24 hours (4 € / person)" },
        function () {
            this.handleValidate();
        });
    }

    sportsFacilities() {
        this.setState({ facilities: "Renting a secure storage place for sports facilities (25 € / 24h)" },
        function () {
            this.handleValidate();
        });
    }

    liveForAGroup() {
        this.setState({ live_group: "Renting a place to live for the group (60 € / 24h)" },
        function () {
            this.handleValidate();
        });
    }

    lastDeparture() {
        this.setState({ last_departure: "Shower use for a late departure (29 € for the group)" },
        function () {
            this.handleValidate();
        });
    }

    handleValidate() {
        if ((this.state.sportsWear) || (this.state.facilities) || (this.state.live_group) || (this.state.last_departure)) {
            this.setState({ value: false });
        } else {
            this.setState({ value: true });
        }
    }

    render() {
        return (
            <div className="cardColor">
                <br />
                <div className="cardAlign">
                    <div className="cardgroupColor" onClick={this.handleCollapseOne}>
                        <label>En Option</label>
                    </div><br />
                    <div>
                        <center>
                            <Table className="border">
                                <Table.Body>
                                    <Table.Row>
                                        <Table.Cell className="border">
                                            <Checkbox onChange={this.cleaningSportsWear} />{window.innerWidth > 500 ? <span>&nbsp;&nbsp;</span> : ''}<label >Nettoyage des tenues de sport en 24 heures(4€/personne)</label><br />
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell className="border">
                                            <Checkbox onChange={this.sportsFacilities} />{window.innerWidth > 500 ? <span>&nbsp;&nbsp;</span> : ''}<label >Location d'un lieu stockage sécurisé pour vos équipements sportifs(25€/24h)</label><br />
                                        </Table.Cell>
                                    </Table.Row>

                                    <Table.Row>
                                        <Table.Cell className="border">
                                            <Checkbox onChange={this.liveForAGroup} />{window.innerWidth > 500 ? <span>&nbsp;&nbsp;</span> : ''}<label >Location d'un lieu de vie pour le groupe(60€/24h)</label><br />
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell className="border">
                                            <Checkbox onChange={this.lastDeparture} />{window.innerWidth > 500 ? <span>&nbsp;&nbsp;</span> : ''}<label>Utilisation de douches pour un départ tardif(29€ pour le groupe)</label><br />
                                        </Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table>
                        </center>
                    </div>
                </div><br />
                {this.state.value === true ? <Button className="pull-right" style={{ backgroundColor: '#28a89a', color: '#ffffff' }} onClick={this.save} disabled>Suivant</Button> :
                    <Button className="pull-right" style={{ backgroundColor: '#28a89a', color: '#ffffff' }} onClick={this.save}>Suivant</Button>}
                <Button className="pull-right" style={{ backgroundColor: 'grey', color: '#ffffff' }} onClick={this.back}>Arrière</Button>
                <br /><br />
            </div>

        );
    }
}

export default OptionComponent;