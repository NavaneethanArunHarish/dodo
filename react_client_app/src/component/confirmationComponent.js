import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import { Form, Button, Input, Table, Grid, Icon, Checkbox, Radio } from 'semantic-ui-react';
import '../css/stay.css';
import Moment from 'react-moment';
import BookingAction from '../action/booking';


class ConfirmationComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            widthDiv: '',
            nameErr: '',
            phoneErr: '',
            emailErr: '',
            name: '',
            phone: '',
            email: ''
        }
        this.back = this.back.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePhone = this.handlePhone.bind(this);
        this.save = this.save.bind(this);
        this.validateEmail = this.validateEmail.bind(this);
        this.validateName = this.validateName.bind(this);
        this.validatePhone = this.validatePhone.bind(this);
    }

    componentWillMount() {
        if (window.innerWidth > 500) {
            this.setState({
                widthDiv: '500px'
            });
        } else {
            this.setState({
                widthDiv: '300px'
            });
        }
    }

    componentWillReceiveProps(nextProps) {
        //console.log("nextProps>>>>>>>>> ",JSON.stringify(nextProps));
    };

    back() {
        this.props.backToSwitch(2);
    }

    handleEmail(e) {
        this.setState({ email: e.target.value, emailErr: '' });
    }

    handleName(e) {
        this.setState({ name: e.target.value, nameErr: '' });
    }

    handlePhone(e) {
        this.setState({ phone: e.target.value, phoneErr: '' });
    }

    validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };

    validateName(name) {
        var re = /^[A-Za-z\s]+$/;
        return re.test(name);
    };

    validatePhone(phone) {
        var re = /^\d{10}$/;
        return re.test(phone);
    };

    save() {


        if (this.state.name === '') {
            this.setState({ nameErr: ' Entrez le nom. ' });
        } else if (!this.validateName(this.state.name)) {
            this.setState({ nameErr: " Entrez le nom valide. " });
        } else {
            this.setState({ nameErr: '' });
        }

        if (this.state.phone === '') {
            this.setState({ phoneErr: ' Entrez le numéro de téléphone. ' });
        } else if (!this.validatePhone(this.state.phone)) {
            this.setState({ phoneErr: " Entrez le numéro de téléphone valide. " });
        } else {
            this.setState({ phoneErr: '' });
        }

        if (this.state.email === '') {
            this.setState({ emailErr: " Entrez le email. " });
        } else if (!this.validateEmail(this.state.email)) {
            this.setState({ emailErr: " Entrez le email valide. " });
        } else {
            this.setState({ emailErr: '' });
        }

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
                "cleaningSportsWear": this.props.details.option.cleaningSportsWear,
                "sportsFacilities": this.props.details.option.sportsFacilities,
                "liveForAGroup": this.props.details.option.liveForAGroup,
                "lastDeparture": this.props.details.option.lastDeparture
            },
            "personalDetails": {
                "name": this.state.name,
                "phone": this.state.phone,
                "email": this.state.email
            },
            "simulationName": this.props.simulationValue
        }

        if ((this.validateName(this.state.name)) && (this.validateEmail(this.state.email)) && (this.validatePhone(this.state.phone))) {
            this.props.BookingAction.createBooking(data);
        }
    }

    render() {
        return (
            <div className="cardColor">
                <br />
                <div className="cardAlign">
                    <div className="cardgroupColor">
                        <label>RÉCAPITULATIF</label>
                    </div><br />
                    <div>
                        <center>
                            <div className="confirmTableWidth" style={{ width: this.state.widthDiv }}>
                                <table class="table-responsive border_confirm">
                                    <tbody class="border_confirm">
                                        <tr class="border_confirm">
                                            <td class="border_confirm">
                                                <Icon name='checkmark' size='smail' style={{ color: '#28a89a' }} />
                                            </td>
                                            <td class="border_confirm">
                                                <label>Type de séjour </label>
                                            </td>
                                            <td class="border_confirm">
                                                {window.innerWidth > 500 ? <span>:&nbsp;&nbsp;</span> : ''}
                                                <label>{this.props.details.groupType}</label>
                                            </td>
                                        </tr>
                                        <tr class="border_confirm">
                                            <td class="border_confirm">
                                                <Icon name='checkmark' size='smail' style={{ color: '#28a89a' }} />
                                            </td>
                                            <td class="border_confirm">
                                                <label>Durée du séjour</label>
                                            </td>
                                            <td class="border_confirm">
                                                {window.innerWidth > 500 ? <span>:&nbsp;&nbsp;</span> : ''}
                                                <label><Moment format="YYYY/MM/DD">{this.props.details.date.startDate}</Moment></label>
                                            </td>
                                        </tr>

                                        <tr class="border_confirm">
                                            <td class="border_confirm">
                                                <Icon name='checkmark' size='smail' style={{ color: '#28a89a' }} />
                                            </td>
                                            <td class="border_confirm">
                                                <label>Durée du séjour</label>
                                            </td>
                                            <td class="border_confirm">
                                                {window.innerWidth > 500 ? <span>:&nbsp;&nbsp;</span> : ''}
                                                <label><Moment format="YYYY/MM/DD">{this.props.details.date.endDate}</Moment></label>
                                            </td>
                                        </tr>
                                        <tr class="border_confirm">
                                            <td class="border_confirm">
                                                <Icon name='checkmark' size='smail' style={{ color: '#28a89a' }} />
                                            </td>
                                            <td class="border_confirm">
                                                <label>Chambres </label>
                                            </td>
                                            <td class="border_confirm">
                                                {window.innerWidth > 500 ? <span>:&nbsp;&nbsp;</span> : ''}
                                                <label>{this.props.details.accommodationOne.twoBeds} chambres de 2 lits</label>
                                            </td>
                                        </tr>
                                        <tr class="border_confirm">
                                            <td class="border_confirm">
                                                <Icon name='checkmark' size='smail' style={{ color: '#28a89a' }} />
                                            </td>
                                            <td class="border_confirm">
                                                <label>Présentation de restauration</label>
                                            </td>
                                            <td class="border_confirm">
                                                {window.innerWidth > 500 ? <span>:&nbsp;&nbsp;</span> : ''}
                                                <label>{this.props.details.restoration}</label>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </center>
                    </div><br />
                    <div>
                        <label style={{ color: '#28a89a' }}>Afin de vous envoyer le devis, compléter les champs ci-dessous.</label>
                        <div>
                            <center>
                                <div class="border_confirm">
                                    <table class="border_confirm" style={{ width: this.state.widthDiv, border: '1px solid #ffffff' }}>
                                        <tbody>
                                            <tr class="border_confirm">
                                                <td class="border_confirm">
                                                    <label>Nom </label>
                                                </td>
                                                <td class="border_confirm">
                                                    <label><Input value={this.state.name} onChange={this.handleName} /></label>
                                                </td>
                                                <td>
                                                    <span style={{ color: "red" }}>{this.state.nameErr}</span>
                                                </td>
                                            </tr>
                                            <tr class="border_confirm">
                                                <td class="border_confirm">
                                                    <label>Téléphone </label>
                                                </td>
                                                <td class="border_confirm">
                                                    <label><Input value={this.state.phone} onChange={this.handlePhone} /></label>
                                                </td>
                                                <td>
                                                    <span style={{ color: "red" }}>{this.state.phoneErr}</span>
                                                </td>
                                            </tr>
                                            <tr class="border_confirm">
                                                <td class="border_confirm">
                                                    <label>E-mail </label>
                                                </td>
                                                <td class="border_confirm">
                                                    <label><Input value={this.state.email} onChange={this.handleEmail} /></label>
                                                </td>
                                                <td>
                                                    <span style={{ color: "red" }}>{this.state.emailErr}</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </center>
                        </div>
                    </div>

                </div><br />
                <Button className="pull-right" style={{ backgroundColor: '#28a89a', color: '#ffffff' }} onClick={this.save}>Suivant</Button>
                <Button className="pull-right" style={{ backgroundColor: 'grey', color: '#ffffff' }} onClick={this.back}>Arrière</Button>
                <br /><br />
            </div>

        );
    }
}

function mapStateToProps(state, props) {
    return {
        bookingSimulationSuccess: state.booking.bookingSimulationSuccess
    };
}

function mapDispatchToProps(dispatch) {
    return {
        BookingAction: bindActionCreators(BookingAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmationComponent);
