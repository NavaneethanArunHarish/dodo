import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import { Form, Button, Input, Table, Grid, Icon, Radio } from 'semantic-ui-react';
import '../css/group.css';
import roomImg from '../img/room3.jpg';
import user from '../img/Fichier 1.svg';
import bag from '../img/Fichier 3.svg';
import group from '../img/Fichier 4.svg';

var nameData, emailData, phoneData, addressData;

class GroupComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            width: '',
            group: '',
            participant: '',
            participantYouth: '',
            accompanyingOne: '',
            accompanyingTwo: '',
            value: true
        }
        this.save = this.save.bind(this);
        this.handleCompany = this.handleCompany.bind(this);
        this.handleEntertainment = this.handleEntertainment.bind(this);
        this.handleSchool = this.handleSchool.bind(this);
        this.handleYouth = this.handleYouth.bind(this);
        this.handleParticipant = this.handleParticipant.bind(this);
        this.handleParticipantYouth = this.handleParticipantYouth.bind(this);
        this.handleAccompanyingOne = this.handleAccompanyingOne.bind(this);
        this.handleAccompanyingTwo = this.handleAccompanyingTwo.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    componentWillMount() {
        // if (window.innerWidth < 500) {
        //     c
        // } else {
        //     if (window.innerWidth < 900) {
        //         if ((window.innerWidth <= 800) && (window.innerWidth >= 700)) {
        //             this.setState({ width: '450px' });
        //         } else if ((window.innerWidth <= 699) && (window.innerWidth >= 600)) {
        //             this.setState({ width: '300px' });
        //         } else {
        //             this.setState({ width: '400px' });
        //         }
        //     } else {
        //         this.setState({ width: '600px' });
        //     }
        // }
        this.setState({ width: '0px' });
    }


    componentDidMount() {
        if ((this.state.group) && (this.state.participant) && (this.state.participantYouth) && (this.state.accompanyingOne) && (this.state.accompanyingTwo)) {
            this.setState({ value: false });
        } else {
            this.setState({ value: true });
        }
    }

    componentWillReceiveProps(nextProps) {
        //console.log("nextProps>>>>>>>>> ",JSON.stringify(nextProps));
    };

    handleYouth() {
        // if (this.state.youthEnable === false) {
            this.setState({ group: "Youth"},
                function () {
                    this.handleSave();
                });
        // } else {
        //     this.setState({ group: ""},
        //         function () {
        //             this.handleSave();
        //         });
        // }
    }

    handleEntertainment() {
        // if (this.state.entertainEnable === false) {
            this.setState({ group: "Entertainment"},
                function () {
                    this.handleSave();
                });
        // } else {
        //     this.setState({ group: ""},
        //         function () {
        //             this.handleSave();
        //         });
        // }
    }

    handleCompany() {
        // if (this.state.companyEnable === false) {
            this.setState({ group: "Company"},
                function () {
                    this.handleSave();
                });
        // } else {
        //     this.setState({ group: ""},
        //         function () {
        //             this.handleSave();
        //         });
        // }
    }

    handleSchool() {
        // if (this.state.schoolEnable === false) {
            this.setState({ group: "School"},
                function () {
                    this.handleSave();
                });
        // } else {
        //     this.setState({ group: ""},
        //         function () {
        //             this.handleSave();
        //         });
        // }
    }

    handleParticipant(e) {
        this.setState({ participant: e.target.value },
            function () {
                this.handleSave();
            });
    }

    handleParticipantYouth(e) {
        this.setState({ participantYouth: e.target.value },
            function () {
                this.handleSave();
            });
    }

    handleAccompanyingOne(e) {
        this.setState({ accompanyingOne: e.target.value },
            function () {
                this.handleSave();
            });
    }

    handleAccompanyingTwo(e) {
        this.setState({ accompanyingTwo: e.target.value },
            function () {
                this.handleSave();
            });
    }

    save() {
        var data = {
            "groupType": this.state.group,
            "participants": {
                "participants": this.state.participant,
                "youth": this.state.participantYouth,
                "accompanyingOne": this.state.accompanyingOne,
                "accompanyingTwo": this.state.accompanyingTwo
            }
        }
        this.props.handleSwitch(1, data);
    }

    handleSave() {
        if ((this.state.group) && (this.state.participant) && (this.state.participantYouth) && (this.state.accompanyingOne) && (this.state.accompanyingTwo)) {
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
                    <div className="cardgroupColor">
                        <label>Sélectionnez votre type de groupe</label>
                    </div><br />
                    <center>
                        <form>
                            <Table className="border table" style={{ width: this.state.width }}>
                                <Table.Body>
                                    <Table.Row>
                                        <Table.Cell className="border">
                                            <div>
                                                <Radio name="groupName" value={this.state.group} onChange={this.handleEntertainment} checked={this.state.group === 'Entertainment'}/>&nbsp;&nbsp;&nbsp;
                                            <img src={user} className="groupImgAlign" />&nbsp;&nbsp;&nbsp;
                                            <label className="groupLabel">Groupe Loisirs</label>
                                            </div>
                                        </Table.Cell>
                                        <Table.Cell className="border">
                                            <div>
                                                <Radio name="groupName" value={this.state.group} onChange={this.handleCompany} checked={this.state.group === 'Company'}/>&nbsp;&nbsp;&nbsp;
                                            <img src={bag} className="groupImgAlign" />&nbsp;&nbsp;&nbsp;
                                            <label className="groupLabel">Groupe Entreprise</label>
                                            </div>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell className="border">
                                            <div>
                                                <Radio name="groupName" value={this.state.group} onChange={this.handleYouth} checked={this.state.group === 'Youth'}/>&nbsp;&nbsp;&nbsp;
                                            <img src={group} className="groupImgAlign" />&nbsp;&nbsp;&nbsp;
                                            <label className="groupLabel">Groupe Jeunes</label>
                                            </div>
                                        </Table.Cell>
                                        <Table.Cell className="border">
                                            <div>
                                                <Radio name="groupName" value={this.state.group} onChange={this.handleSchool} checked={this.state.group === 'School'}/>&nbsp;&nbsp;&nbsp;
                                            <img src={bag} className="groupImgAlign" />&nbsp;&nbsp;&nbsp;
                                            <label className="groupLabel">Groupe Scolaire</label>
                                            </div>
                                        </Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table>
                        </form>
                    </center>
                </div>
                <br />
                <div className="cardAlign">
                    <div className="cardgroupColor">
                        <label>Les participants</label>
                    </div><br />
                    <div className="row col-xs-12 singleLine">
                        <div className="participantWidth">
                            <label className="tableFontColor">Participants</label>&nbsp;&nbsp;&nbsp;&nbsp;
                            <Input type="number" className="tableWidth" min="1" value={this.state.participant} onChange={this.handleParticipant} style={window.innerWidth < 900 ? { width: '100px' } : { width: 'auto' }} />
                        </div>
                        <div className="tableDiv">
                            {/* <Table className="border">
                                <Table.Body>
                                    <Table.Row>
                                        <Table.Cell className="border">
                                            <label className="tableFontColor">Jeunes </label>
                                        </Table.Cell>
                                        <Table.Cell className="border">
                                            <Input type="number" className="tableWidth" min="1" value={this.state.participantYouth} onChange={this.handleParticipantYouth} style={window.innerWidth < 900 ? { width: '100px' } : { width: 'auto' }} />
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell className="border">
                                            <label className="tableFontColor">Accompagnants </label>
                                        </Table.Cell>
                                        <Table.Cell className="border">
                                            <Input type="number" className="tableWidth" min="1" value={this.state.accompanyingOne} onChange={this.handleAccompanyingOne} style={window.innerWidth < 900 ? { width: '100px' } : { width: 'auto' }} />
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell className="border">
                                            <label className="tableFontColor">Accompagnants </label>
                                        </Table.Cell>
                                        <Table.Cell className="border">
                                            <Input type="number" className="tableWidth" min="1" value={this.state.accompanyingTwo} onChange={this.handleAccompanyingTwo} style={window.innerWidth < 900 ? { width: '100px' } : { width: 'auto' }} />
                                        </Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table> */}
                            <table className="border">
                                <tbody>
                                    <tr>
                                        <td className="border">
                                            <label className="tableFontColor">Jeunes </label>
                                        </td>
                                        <td className="border">
                                            <Input type="number" className="tableWidth" min="1" value={this.state.participantYouth} onChange={this.handleParticipantYouth} style={window.innerWidth < 900 ? { width: '100px' } : { width: 'auto' }} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border">
                                            <label className="tableFontColor">Accompagnants </label>
                                        </td>
                                        <td className="border">
                                            <Input type="number" className="tableWidth" min="1" value={this.state.accompanyingOne} onChange={this.handleAccompanyingOne} style={window.innerWidth < 900 ? { width: '100px' } : { width: 'auto' }} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border">
                                            <label className="tableFontColor">Accompagnants </label>
                                        </td>
                                        <td className="border">
                                            <Input type="number" className="tableWidth" min="1" value={this.state.accompanyingTwo} onChange={this.handleAccompanyingTwo} style={window.innerWidth < 900 ? { width: '100px' } : { width: 'auto' }} />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div><br />
                {this.state.value === true ? <Button className="buttonColor" onClick={this.save} disabled>Suivant</Button> :
                    <Button className="buttonColor" onClick={this.save}>Suivant</Button>}
                <br /><br />
            </div>

        );
    }
}

export default GroupComponent;