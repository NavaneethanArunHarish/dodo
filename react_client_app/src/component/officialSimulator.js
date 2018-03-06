import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import { Form, Button, Input, Table } from 'semantic-ui-react';
import '../css/simulation.css';
import SimulationAction from '../action/simulation';


class OfficialSimulatorComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            address: '',
            phone: '',
            email: '',
            website: '',
            nameErr: '',
            addressErr: '',
            phoneErr: '',
            emailErr: '',
            websiteErr: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handleAddress = this.handleAddress.bind(this);
        this.handlePhone = this.handlePhone.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleWebsite = this.handleWebsite.bind(this);
        this.validateEmail = this.validateEmail.bind(this);
        this.validateName = this.validateName.bind(this);
        this.validatePhone = this.validatePhone.bind(this);
        this.validateWebsite = this.validateWebsite.bind(this);
    }

    componentWillMount() {
    }

    componentWillReceiveProps(nextProps) {
        var simulation = nextProps.simulationSuccess.result._id;
        if (nextProps.simulationSuccess.status === "SUCCESS") {
            browserHistory.push({
                pathname: '/Simulator',
                state: { simulationValue: simulation }
            })
        }
    };

    handleChange(e) {
        e.preventDefault();
        if (this.state.name === '') {
            this.setState({ nameErr: ' Entrez le nom. ' });
        } else if (!this.validateName(this.state.name)) {
            this.setState({ nameErr: " Entrez le nom valide. " });
        } else {
            this.setState({ nameErr: '' });
        }

        if (this.state.address === '') {
            this.setState({ addressErr: ' Entrez le adresse. ' });
        } else {
            this.setState({ addressErr: '' });
        }

        if (this.state.phone === '') {
            this.setState({ phoneErr: ' Entrez le numéro de téléphone. ' });
        } else if (!this.validatePhone(this.state.phone)) {
            this.setState({ phoneErr: " Entrez le numéro de téléphone valide. " });
        } else {
            this.setState({ phoneErr: '' });
        }

        if (this.state.website === '') {
            this.setState({ websiteErr: ' Entrez le site. ' });
        } else if (!this.validateWebsite(this.state.website)) {
            this.setState({ websiteErr: " Entrez le site Web valide. " });
        } else {
            this.setState({ websiteErr: '' });
        }

        if (this.state.email === '') {
            this.setState({ emailErr: " Entrez le email. " });
        } else if (!this.validateEmail(this.state.email)) {
            this.setState({ emailErr: " Entrez le email valide. " });
        } else {
            this.setState({ emailErr: '' });
        }

        var data = {
            "name": this.state.name,
            "address": this.state.address,
            "telephone": this.state.phone,
            "email": this.state.email,
            "website": this.state.website
        }
        if ((this.validateName(this.state.name)) && (this.validateEmail(this.state.email)) && (this.validatePhone(this.state.phone)) && (this.state.address) && (this.validateWebsite(this.state.website))) {
            this.props.SimulationAction.createSimulation(data);
        }
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

    validateWebsite(web) {
        var re = /^(((ht|f){1}(tp:[/][/]){1})|((ht|f){1}(tps:[/][/]){1})|((www.){1}))[-a-zA-Z0-9@:%_\+.~#?&//=]+$/;
        return re.test(web);
    };

    handleName(e) {
        this.setState({ name: e.target.value, nameErr: '' });
    }

    handleAddress(e) {
        this.setState({ address: e.target.value, addressErr: '' });
    }

    handleWebsite(e) {
        this.setState({ website: e.target.value, websiteErr: '' });
    }

    handlePhone(e) {
        this.setState({ phone: e.target.value, phoneErr: '' });
    }

    handleEmail(e) {
        this.setState({ email: e.target.value, emailErr: '' });
    }


    render() {
        return (
            <center>
                <div className="cardColor">
                    <div className="cardFontColor">
                        <center>
                            <br />
                            <label><strong>La proposition générée par le simulateur de prix est une indication pour préparer votre séjour</strong></label><br />
                            <label><i>sous réserve de la disponibilité de l’établissement</i></label>
                        </center>
                    </div>
                    <div className="cardTitle">
                        <center>
                            <label className="cardTitleAlign"><strong>SIMULATEUR OFFICIEL DE L’ÉTABLISSEMENT</strong></label>
                        </center>
                    </div><br />
                    <div>
                        <center>
                            {/* <Table className="officialTable">
                                <Table.Body>
                                    <Table.Row className="border">
                                        <Table.Cell className="border"><label>Nom de l’établissement </label></Table.Cell>
                                        <Table.Cell className="border">
                                            <Input value={this.state.name} onChange={this.handleName} />
                                            <span style={{color: "red"}}>{this.state.nameErr}</span>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row className="border">
                                        <Table.Cell className="border"><label>Adresse </label></Table.Cell>
                                        <Table.Cell className="border">
                                            <Input value={this.state.address} onChange={this.handleAddress} />
                                            <span style={{color: "red"}}>{this.state.addressErr}</span>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row className="border">
                                        <Table.Cell className="border"><label>Téléphone </label></Table.Cell>
                                        <Table.Cell className="border">
                                            <Input value={this.state.phone} onChange={this.handlePhone}/>
                                            <span style={{color: "red"}}>{this.state.phoneErr}</span>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row className="border">
                                        <Table.Cell className="border"><label>E-mail </label></Table.Cell>
                                        <Table.Cell className="border">
                                            <Input value={this.state.email} onChange={this.handleEmail} />
                                            <span style={{color: "red"}}>{this.state.emailErr}</span>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row className="border">
                                        <Table.Cell className="border"><label>Site internet </label></Table.Cell>
                                        <Table.Cell className="border">
                                            <Input value={this.state.website} onChange={this.handleWebsite} />
                                            <span style={{color: "red"}}>{this.state.websiteErr}</span>
                                        </Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table> */}
                            <table className="officialTable">
                                <tbody>
                                    <tr className="border">
                                        <td className="border"><label>Nom de l’établissement </label></td>
                                        <td className="border">
                                            <Input value={this.state.name} onChange={this.handleName} />
                                            <span style={{ color: "red" }}>{this.state.nameErr}</span>
                                        </td>
                                    </tr>
                                    <tr className="border">
                                        <td className="border"><label>Adresse </label></td>
                                        <td className="border">
                                            <Input value={this.state.address} onChange={this.handleAddress} />
                                            <span style={{ color: "red" }}>{this.state.addressErr}</span>
                                        </td>
                                    </tr>
                                    <tr className="border">
                                        <td className="border"><label>Téléphone </label></td>
                                        <td className="border">
                                            <Input value={this.state.phone} onChange={this.handlePhone} />
                                            <span style={{ color: "red" }}>{this.state.phoneErr}</span>
                                        </td>
                                    </tr>
                                    <tr className="border">
                                        <td className="border"><label>E-mail </label></td>
                                        <td className="border">
                                            <Input value={this.state.email} onChange={this.handleEmail} />
                                            <span style={{ color: "red" }}>{this.state.emailErr}</span>
                                        </td>
                                    </tr>
                                    <tr className="border">
                                        <td className="border"><label>Site internet </label></td>
                                        <td className="border">
                                            <Input value={this.state.website} onChange={this.handleWebsite} />
                                            <span style={{ color: "red" }}>{this.state.websiteErr}</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </center><br />
                        <center>
                            <Button className="cardFontColor" onClick={this.handleChange.bind(this)}>Suivant</Button>
                        </center><br /><br />
                    </div>
                </div>
            </center>

        );
    }
}

function mapStateToProps(state, props) {
    return {
        simulationSuccess: state.simulation.simulationSuccess
    };
}

function mapDispatchToProps(dispatch) {
    return {
        SimulationAction: bindActionCreators(SimulationAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OfficialSimulatorComponent);
