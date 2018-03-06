import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import { Form, Button, Input, Table, Grid, Icon, Checkbox, Radio, TextArea } from 'semantic-ui-react';
import '../css/stay.css';
import dateImg from '../img/Fichier 7.svg';
import camImg from '../img/Fichier 8.svg';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';


class StayComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            startDate: moment(),
            endDate: moment(),
            collapseOne: true,
            collapseTwo: true,
            collapseThree: true,
            collapseFour: true,
            conference: '',
            class: '',
            meeting: '',
            uRoom: '',
            cocktail: '',
            value: true
        }
        this.handleStartChange = this.handleStartChange.bind(this);
        this.handleEndChange = this.handleEndChange.bind(this);
        this.handleCollapseOne = this.handleCollapseOne.bind(this);
        this.handleCollapseTwo = this.handleCollapseTwo.bind(this);
        this.handleCollapseThree = this.handleCollapseThree.bind(this);
        this.handleCollapseFour = this.handleCollapseFour.bind(this);
        this.save = this.save.bind(this);
        this.back = this.back.bind(this);
        this.handleDescription = this.handleDescription.bind(this);
        this.handleTwoBed = this.handleTwoBed.bind(this);
        this.handleThreeBed = this.handleThreeBed.bind(this);
        this.handleFourBed = this.handleFourBed.bind(this);
        this.handleSixBed = this.handleSixBed.bind(this);
        this.handleSecondThreeBed = this.handleSecondThreeBed.bind(this);
        this.handleAccTwoBed = this.handleAccTwoBed.bind(this);
        this.handleAccThreeBed = this.handleAccThreeBed.bind(this);
        this.handleAccFourBed = this.handleAccFourBed.bind(this);
        this.handleAccFiveBed = this.handleAccFiveBed.bind(this);
        this.accommodationOnly = this.accommodationOnly.bind(this);
        this.accommodation_breakfast = this.accommodation_breakfast.bind(this);
        this.accommodation_halfboard = this.accommodation_halfboard.bind(this);
        this.cocktail = this.cocktail.bind(this);
        this.festive_evening = this.festive_evening.bind(this);
        this.packed_lunch = this.packed_lunch.bind(this);
        this.handleOne = this.handleOne.bind(this);
        this.handleTwo = this.handleTwo.bind(this);
        this.handleThree = this.handleThree.bind(this);
        this.handleFour = this.handleFour.bind(this);
        this.handleFive = this.handleFive.bind(this);
        this.handleSix = this.handleSix.bind(this);
        this.handleSeven = this.handleSeven.bind(this);
        this.handleEight = this.handleEight.bind(this);
        this.handleNine = this.handleNine.bind(this);
        this.handleTen = this.handleTen.bind(this);
        this.handleValidate = this.handleValidate.bind(this);
    }

    componentDidMount() {
        //console.log("this.prop>>>>>", JSON.stringify(this.props.details));
    }


    handleStartChange(date) {
        this.setState({
            startDate: date
        },
            function () {
                this.handleValidate();
            });
    }

    handleEndChange(date) {
        this.setState({
            endDate: date
        },
            function () {
                this.handleValidate();
            });
    }

    handleCollapseOne() {
        this.setState({
            collapseOne: !this.state.collapseOne
        });
    }

    handleCollapseTwo() {
        this.setState({
            collapseTwo: !this.state.collapseTwo
        });
    }

    handleCollapseThree() {
        this.setState({
            collapseThree: !this.state.collapseThree
        });
    }

    handleCollapseFour() {
        this.setState({
            collapseFour: !this.state.collapseFour
        });
    }

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
                "startDate": this.state.startDate,
                "endDate": this.state.endDate
            },
            "accommodationOne": {
                "twoBeds": this.state.twoBeds,
                "threeBeds": this.state.threeBeds,
                "fourBeds": this.state.fourBeds,
                "sixBeds": this.state.sixBeds,
                "secondThreeBeds": this.state.secondThreeBeds,
                "description": this.state.description
            },
            "accommodationTwo": {
                "twoBeds": this.state.accomodationTwoBeds,
                "threeBeds": this.state.accomodationThreeBeds,
                "fourBeds": this.state.accomodationFourBeds,
                "fiveBeds": this.state.accomodationFiveBeds
            },
            "restoration": this.state.restoration,
            "interestIn": this.state.interest,
            "roomRental": {
                "conference": this.state.conference,
                "class": this.state.class,
                "meeting": this.state.meeting,
                "uRoom": this.state.uRoom,
                "cocktail": this.state.cocktail
            }
        }
        this.props.handleSwitch(2, data);
    }

    back() {
        this.props.backToSwitch(0);
    }

    handleDescription(e) {
        this.setState({ description: e.target.value },
            function () {
                this.handleValidate();
            });
    }

    handleTwoBed(e) {
        this.setState({ twoBeds: e.target.value },
            function () {
                this.handleValidate();
            });
    }

    handleThreeBed(e) {
        this.setState({ threeBeds: e.target.value },
            function () {
                this.handleValidate();
            });
    }

    handleFourBed(e) {
        this.setState({ fourBeds: e.target.value },
            function () {
                this.handleValidate();
            });
    }

    handleSixBed(e) {
        this.setState({ sixBeds: e.target.value },
            function () {
                this.handleValidate();
            });
    }

    handleSecondThreeBed(e) {
        this.setState({ secondThreeBeds: e.target.value },
            function () {
                this.handleValidate();
            });
    }

    handleAccTwoBed(e) {
        this.setState({ accomodationTwoBeds: e.target.value },
            function () {
                this.handleValidate();
            });
    }

    handleAccThreeBed(e) {
        this.setState({ accomodationThreeBeds: e.target.value },
            function () {
                this.handleValidate();
            });
    }

    handleAccFourBed(e) {
        this.setState({ accomodationFourBeds: e.target.value },
            function () {
                this.handleValidate();
            });
    }

    handleAccFiveBed(e) {
        this.setState({ accomodationFiveBeds: e.target.value },
            function () {
                this.handleValidate();
            });
    }

    accommodationOnly(e) {
        this.setState({ restoration: "Accommodation Only" },
            function () {
                this.handleValidate();
            });
    }

    accommodation_breakfast(e) {
        this.setState({ restoration: "Accommodation with BreakFast" },
            function () {
                this.handleValidate();
            });
    }

    accommodation_halfboard(e) {
        this.setState({ restoration: "Accommodation with half board" },
            function () {
                this.handleValidate();
            });
    }

    cocktail(e) {
        this.setState({ interest: "A welcome cocktail" },
            function () {
                this.handleValidate();
            });
    }

    festive_evening(e) {
        this.setState({ interest: "A festive evening" },
            function () {
                this.handleValidate();
            });
    }

    packed_lunch(e) {
        this.setState({ interest: "Packed lunches" },
            function () {
                this.handleValidate();
            });
    }

    handleOne(e) {
        this.setState({ conference: "250 pers" },
            function () {
                this.handleValidate();
            });
    }

    handleTwo(e) {
        this.setState({ class: "125 pers" },
            function () {
                this.handleValidate();
            });
    }

    handleThree(e) {
        this.setState({ meeting: "120 pers" },
            function () {
                this.handleValidate();
            });
    }

    handleFour(e) {
        this.setState({ uRoom: "50 pers" },
            function () {
                this.handleValidate();
            });
    }

    handleFive(e) {
        this.setState({ cocktail: "350 pers" },
            function () {
                this.handleValidate();
            });
    }

    handleSix(e) {
        this.setState({ conference: "250 per" },
            function () {
                this.handleValidate();
            });
    }

    handleSeven(e) {
        this.setState({ class: "125 per" },
            function () {
                this.handleValidate();
            });
    }

    handleEight(e) {
        this.setState({ meeting: "120 per" },
            function () {
                this.handleValidate();
            });
    }

    handleNine(e) {
        this.setState({ uRoom: "50 per" },
            function () {
                this.handleValidate();
            });
    }

    handleTen(e) {
        this.setState({ cocktail: "350 per" },
            function () {
                this.handleValidate();
            });
    }

    handleValidate() {
        if ((this.state.startDate) && (this.state.endDate) && (this.state.description) && (this.state.twoBeds) && (this.state.threeBeds)
            && (this.state.fourBeds) && (this.state.sixBeds) && (this.state.secondThreeBeds) && (this.state.accomodationTwoBeds) && (this.state.accomodationThreeBeds) && (this.state.accomodationFourBeds)
            && (this.state.accomodationFiveBeds) && (this.state.restoration) && (this.state.interest) && ((this.state.conference) || (this.state.class) || (this.state.meeting)
                || (this.state.uRoom) || (this.state.cocktail))) {
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
                        <label>La durée du séjour</label>
                    </div><br />
                    {this.state.collapseOne === true ? <div>
                        <div style={{ display: 'inline-flex' }}>
                            <label>Du:</label>&nbsp;&nbsp;
                        <DatePicker selected={this.state.startDate} onChange={this.handleStartChange} style={{ display: 'inline-flex' }} />&nbsp;&nbsp;
                        <img src={dateImg} style={{ width: '30px', height: '25px' }} />
                        </div>{window.innerWidth < 500 ? <div><br /> <br /> </div> : ''}
                        {window.innerWidth > 500 ? <span>&nbsp;&nbsp;</span> : ''}
                        <div style={{ display: 'inline-flex' }}>
                            <label>Au:</label>&nbsp;&nbsp;
                        <DatePicker selected={this.state.endDate} onChange={this.handleEndChange} style={{ display: 'inline-flex' }} />&nbsp;&nbsp;
                        <img src={dateImg} style={{ width: '30px', height: '25px' }} />
                        </div>
                        <br />
                        <div className="tableSpan">
                            {window.innerWidth < 500 ? <div><br /> <br /> </div> : ''}
                            <label>Soit deux jours et une nuit</label>
                        </div>
                    </div> : ''}

                </div>

                <div className="cardAlign">
                    <div className="cardgroupColor" onClick={this.handleCollapseTwo}>
                        <label>Votre hébergement</label>
                    </div>
                    {this.state.collapseTwo === true ? <div>
                        <div>
                            <br />
                            <label>Quei niveau de confort attendez-vous pour vos chambres?</label>
                            <div style={{ display: 'inline-flex' }}>
                                <Checkbox /> &nbsp;&nbsp;
                            <b><label>CONFORT+ - Hébergement dans des chambres rénovées en 2015 avec télévision, wifi, douche a l'italienne</label></b>
                                &nbsp;&nbsp;
                                <div style={{ marginRight: '10px' }}><img src={camImg} style={{ width: '30px' }} /></div>
                            </div>
                            <center>
                            <div>
                                <Input rows={3} value={this.state.description} onChange={this.handleDescription} placeholder="la description" />
                            </div>
                            </center>
                            <center>
                                <Table className="border table_width">
                                    <Table.Body>
                                        <Table.Row>
                                            <Table.Cell className="border">
                                                <label>2 lits</label>
                                                {window.innerWidth < 500 ? <span>&nbsp;&nbsp;</span> : ''}
                                                <Input type="number" value={this.state.twoBeds} min="1" onChange={this.handleTwoBed} style={{ width: '90px' }} />
                                            </Table.Cell>
                                            <Table.Cell className="border">
                                                <label>3 lits</label>
                                                {window.innerWidth < 500 ? <span>&nbsp;&nbsp;&nbsp;</span> : ''}
                                                <Input type="number" value={this.state.threeBeds} min="1" onChange={this.handleThreeBed} style={{ width: '90px' }} />
                                            </Table.Cell>
                                            <Table.Cell className="border">
                                                <label>4 lits</label>
                                                {window.innerWidth < 500 ? <span>&nbsp;&nbsp;&nbsp;</span> : ''}
                                                <Input type="number" value={this.state.fourBeds} min="1" onChange={this.handleFourBed} style={{ width: '90px' }} />
                                            </Table.Cell>
                                            <Table.Cell className="border">
                                                <label>6 lits</label>
                                                {window.innerWidth < 500 ? <span>&nbsp;&nbsp;&nbsp;</span> : ''}
                                                <Input type="number" value={this.state.sixBeds} min="1" onChange={this.handleSixBed} style={{ width: '90px' }} />
                                            </Table.Cell>
                                        </Table.Row>
                                    </Table.Body>
                                </Table>
                                {window.innerWidth > 500 ? <div style={{ width: '300px' }}>
                                    <Table className="tableAlignDiv">
                                        <Table.Body>
                                            <Table.Row>
                                                <Table.Cell className="border">
                                                    <label >3 lits</label>&nbsp;&nbsp;
                                            <Input type="number" value={this.state.secondThreeBeds} min="1" onChange={this.handleSecondThreeBed} />
                                                </Table.Cell>
                                            </Table.Row>
                                        </Table.Body>
                                    </Table>

                                </div> : <div style={{ width: '250px' }}>
                                        <Table className="tableAlignDiv">
                                            <Table.Body>
                                                <Table.Row>
                                                    <Table.Cell className="border">
                                                        <label>3 lits</label>&nbsp;&nbsp;
                                            <Input type="number" value={this.state.secondThreeBeds} min="1" onChange={this.handleSecondThreeBed} />
                                                    </Table.Cell>
                                                </Table.Row>
                                            </Table.Body>
                                        </Table>

                                    </div>}
                            </center>
                        </div>
                        <br />
                        <div>
                            <div style={{ display: 'inline-flex' }}>
                                <Checkbox onChange={this.enableOne} /> &nbsp;&nbsp;
                                <b><label>CONFORT - Hébergement dans des chambres avec salles de bain/toilettes, wifi et télévision</label></b>
                                &nbsp;&nbsp;
                                <div style={{ marginRight: '10px' }}><img src={camImg} style={{ width: '30px' }} /></div>
                            </div>
                            <center>
                                <Table className="border table_width">
                                    <Table.Body>
                                        <Table.Row>
                                            <Table.Cell className="border">
                                                <label>2 lits</label>
                                                {window.innerWidth < 500 ? <span>&nbsp;&nbsp;</span> : ''}
                                                <Input type="number" value={this.state.accomodationTwoBeds} min="1" onChange={this.handleAccTwoBed} style={{ width: '90px' }} />
                                            </Table.Cell>
                                            <Table.Cell className="border">
                                                <label>3 lits</label>
                                                {window.innerWidth < 500 ? <span>&nbsp;&nbsp;&nbsp;</span> : ''}
                                                <Input type="number" value={this.state.accomodationThreeBeds} min="1" onChange={this.handleAccThreeBed} style={{ width: '90px' }} />
                                            </Table.Cell>
                                            <Table.Cell className="border">
                                                <label>4 lits</label>
                                                {window.innerWidth < 500 ? <span>&nbsp;&nbsp;&nbsp;</span> : ''}
                                                <Input type="number" value={this.state.accomodationFourBeds} min="1" onChange={this.handleAccFourBed} style={{ width: '90px' }} />
                                            </Table.Cell>
                                            <Table.Cell className="border">
                                                <label>5 lits</label>
                                                {window.innerWidth < 500 ? <span>&nbsp;&nbsp;&nbsp;</span> : ''}
                                                <Input type="number" value={this.state.accomodationFiveBeds} min="1" onChange={this.handleAccFiveBed} style={{ width: '90px' }} />
                                            </Table.Cell>
                                        </Table.Row>
                                    </Table.Body>
                                </Table><br />
                                <label>Avec la répartition actuelle, vous pouvez héberger 24 personnes.</label><br />
                            </center>
                        </div>
                    </div> : ''}
                </div><br />

                <div className="cardAlign">
                    <div className="cardgroupColor" onClick={this.handleCollapseThree}>
                        <label>La restauration</label>
                    </div><br />
                    {this.state.collapseThree === true ? <div><div>
                        <label className="collapseThreeLabel">Quelle prestation recherchez vous pour votre groupe?</label><br />
                        <center>
                            <div style={{ width: '300px' }}>
                                <Table className="border">
                                    <Table.Body>
                                        <Table.Row>
                                            <Table.Cell className="border">
                                                <div>
                                                    <Radio onChange={this.accommodationOnly} value={this.state.restoration} checked={this.state.restoration === "Accommodation Only"} /> <label>Hébergement uniquement</label>
                                                </div>
                                            </Table.Cell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell className="border">
                                                <div>
                                                    <Radio onChange={this.accommodation_breakfast} value={this.state.restoration} checked={this.state.restoration === "Accommodation with BreakFast"} /> <label>Hébergement avec le petit-déjeuner</label>
                                                </div>
                                            </Table.Cell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell className="border">
                                                <div>
                                                    <Radio onChange={this.accommodation_halfboard} value={this.state.restoration} checked={this.state.restoration === "Accommodation with half board"} /> <label>Hébergement en demi-pension</label>
                                                </div>
                                            </Table.Cell>
                                        </Table.Row>
                                    </Table.Body>
                                </Table>
                            </div>
                        </center>
                    </div>
                        <div>
                            <div className="cardOneGroup" onClick={this.handleCollapseFour}>
                                <label>Pendant votre séjour, pourriez-vous être intéressé par :</label>
                            </div><br />
                            <center>
                                <div style={{ width: '300px' }}>
                                    <Table className="border">
                                        <Table.Body>
                                            <Table.Row>
                                                <Table.Cell className="border">
                                                    <div>
                                                        <Radio onChange={this.cocktail} value={this.state.interest} checked={this.state.interest === "A welcome cocktail"} /> <label> Un cocktail de bienvenue</label>
                                                    </div>
                                                </Table.Cell>
                                            </Table.Row>
                                            <Table.Row>
                                                <Table.Cell className="border">
                                                    <div>
                                                        <Radio onChange={this.festive_evening} value={this.state.interest} checked={this.state.interest === "A festive evening"} /> <label>Une soirée festive </label>
                                                    </div>
                                                </Table.Cell>
                                            </Table.Row>
                                            <Table.Row>
                                                <Table.Cell className="border">
                                                    <div>
                                                        <Radio onChange={this.packed_lunch} value={this.state.interest} checked={this.state.interest === "Packed lunches"} /> <label>Des paniers repas</label>
                                                    </div>
                                                </Table.Cell>
                                            </Table.Row>
                                        </Table.Body>
                                    </Table>
                                </div></center>
                        </div></div> : ''}
                </div>

                <div className="cardAlign">
                    <div className="cardgroupColor" onClick={this.handleCollapseFour}>
                        <label>Location de salle</label>
                    </div><br />
                    {this.state.collapseFour === true ? <div>
                        <center>
                            <table className="table-responsive">
                                <tr style={{ backgroundColor: '#B3B6B7', border: "1px solid #B3B6B7" }}>
                                    <th rowSpan="2" style={{ border: "1px solid #000" }}>Nom de la salle ou des combinaisons</th>
                                    <th rowSpan="2" style={{ border: "1px solid #000" }}>Superficie</th>
                                    <th rowSpan="2" style={{ border: "1px solid #000" }}>Accès wifi</th>
                                    <th style={{ border: "1px solid #000" }}>Conférence</th>
                                    <th style={{ border: "1px solid #000" }}>Classe</th>
                                    <th style={{ border: "1px solid #000" }}>Réunion</th>
                                    <th style={{ border: "1px solid #000" }}>Salle en U</th>
                                    <th style={{ border: "1px solid #000" }}>Cocktail</th>
                                </tr>
                                <tbody style={{ border: "1px solid #000" }}>
                                    <tr style={{ border: "1px solid #000" }}>
                                        <td style={{ border: "1px solid #000" }}>Salle David</td>
                                        <td style={{ border: "1px solid #000" }}> 200 m²</td>
                                        <td style={{ border: "1px solid #000" }}> Oui</td>
                                        <td style={{ border: "1px solid #000" }}> <Radio onChange={this.handleOne} value={this.state.conference} checked={this.state.conference === "250 pers"} />250 pers</td>
                                        <td style={{ border: "1px solid #000" }}> <Radio onChange={this.handleTwo} value={this.state.class} checked={this.state.class === "125 pers"} />125 pers</td>
                                        <td style={{ border: "1px solid #000" }}> <Radio onChange={this.handleThree} value={this.state.meeting} checked={this.state.meeting === "120 pers"} />120 pers</td>
                                        <td style={{ border: "1px solid #000" }}> <Radio onChange={this.handleFour} value={this.state.uRoom} checked={this.state.uRoom === "50 pers"} />50 pers</td>
                                        <td style={{ border: "1px solid #000" }}> <Radio onChange={this.handleFive} value={this.state.cocktail} checked={this.state.cocktail === "350 pers"} />350 pers</td>
                                    </tr>
                                    <tr style={{ border: "1px solid #000" }}>
                                        <td style={{ border: "1px solid #000" }}>Salle Stéphane</td>
                                        <td style={{ border: "1px solid #000" }}> 200 m²</td>
                                        <td style={{ border: "1px solid #000" }}> Oui</td>
                                        <td style={{ border: "1px solid #000" }}> <Radio onChange={this.handleSix} value={this.state.conference} checked={this.state.conference === "250 per"} />250 pers</td>
                                        <td style={{ border: "1px solid #000" }}> <Radio onChange={this.handleSeven} value={this.state.class} checked={this.state.class === "125 per"} />125 pers</td>
                                        <td style={{ border: "1px solid #000" }}> <Radio onChange={this.handleEight} value={this.state.meeting} checked={this.state.meeting === "120 per"} />120 pers</td>
                                        <td style={{ border: "1px solid #000" }}> <Radio onChange={this.handleNine} value={this.state.uRoom} checked={this.state.uRoom === "50 per"} />50 pers</td>
                                        <td style={{ border: "1px solid #000" }}> <Radio onChange={this.handleTen} value={this.state.cocktail} checked={this.state.cocktail === "350 per"} />350 pers</td>
                                    </tr>
                                </tbody>
                            </table></center><br /><br />
                    </div> : ''}
                </div>
                {this.state.value === true ? <Button className="pull-right" style={{ backgroundColor: '#28a89a', color: '#ffffff' }} onClick={this.save} disabled>Suivant</Button> :
                    <Button className="pull-right" style={{ backgroundColor: '#28a89a', color: '#ffffff' }} onClick={this.save}>Suivant</Button>}
                <Button className="pull-right" style={{ backgroundColor: 'grey', color: '#ffffff' }} onClick={this.back}>Arrière</Button>
                <br /><br />
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

export default StayComponent;