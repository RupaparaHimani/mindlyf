import 'rc-tabs/assets/index.css';
import React, { Component, Fragment } from 'react';
import { isMobile, isTablet } from 'react-device-detect';
import { withRouter, Link } from 'react-router-dom';
import { faChevronRight, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Card, CardBody, Col, Row, Label, Input, Button } from 'reactstrap';
import profile from '../../assets/images/profile.png';
import programBanner from '../../assets/images/programBanner.png';
import Subscribe from '../../components/Subscribe';
import Swal from 'sweetalert2';
import { Tabs, Select, Space } from 'antd';
import 'antd/dist/antd.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

var validator = require("email-validator");

const { TabPane } = Tabs;
const { Option } = Select;

class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            name: '',
            tabPosition: (isMobile||isTablet)?'top':'left',
            packages: [],
            fname: '',
            lname: '',
            number: '',
            email: '',
            password: '',
            confirm: '',
            amount: 0,
            purpose: '',
    }
}

componentDidMount = () => {
    if (localStorage.getItem('userData')!==null) {
        let user = JSON.parse(localStorage.getItem('userData'));
        this.setState({
            id: user.id,
            fname: user.first_name,
            lname: user.last_name,
            number: user.number,
            email: user.email,
            loggedIn: true,
        })
        this.getPackage();
    }
    else {
        window.location.assign('/');
    }
}

getPackage = () => {
    let self = this;
    axios.post('https://api.mindlyf.com/api/getPackage', {id: this.state.id})
        .then(function (response) {
            console.log(response.amount)

            self.setState({
                packages: response,
                amount: response.data.users.amount,
                purpose: response.data.users.purpose,
            })
        })
}

clear = () => {

}

emailChange = event => {
    this.setState({ email: event.target.value });
}

fname = event => {
    this.setState({ fname: event.target.value });
}

lname = event => {
    this.setState({ lname: event.target.value });
}

password = event => {
    this.setState({ password: event.target.value });
}

confirm = event => {
    this.setState({ confirm: event.target.value });
}

numberChange = event => {
    this.setState({ number: event.target.value });
}

update = () => {
    axios.post('https://api.mindlyf.com/api/update', {email: this.state.email, fname: this.state.fname, lname: this.state.lname, number: this.state.number})
        .then(function (response) {
            Swal.fire({
                icon: 'success',
                type: 'success',
                text: 'Your profile has been updated successfully!',
                showConfirmButton: true,
                timer: 3500
            });
            let data = response.data.user;
            let user = {
                id: data.id,
                first_name: data.first_name,
                last_name: data.last_name,
                email: data.email,
                number: data.number
            }
            localStorage.setItem('isLoggedIn',true);
            localStorage.setItem('userData',JSON.stringify(user));
        })
}

    render() {
        return (
            <Fragment>
                <div style={{paddingTop: '17%', width: '80%', margin: 'auto'}}>
                    <Row>
                        <Col>
                            <Tabs tabPosition={this.state.tabPosition}>
                                <TabPane tab="Your Details" key="1">
                                    <div style={{marginBottom: '20px', fontSize: '24px', fontFamily: 'Nunito-Bold'}}>Your Details</div>
                                    <Row>
                                        <Col md={6}>
                                            <Label>First Name</Label><Input className='inputStyleProfile' value={this.state.fname} placeholder="Enter your first name" onChange={this.fname}/>
                                        </Col>
                                        <Col md={6} style={{marginTop: isMobile||isTablet?'10px':'0px'}}>
                                            <Label>Last Name</Label><Input className='inputStyleProfile' value={this.state.lname} placeholder="Enter your last name" onChange={this.lname}/>
                                        </Col>
                                    </Row>
                                    <Row style={{marginTop: '20px'}}>
                                        <Col md={6}>
                                            <Label>Email Address</Label><Input className='inputStyleProfile' value={this.state.email} placeholder="Enter your email address" onChange={this.emailChange}/>
                                        </Col>
                                        <Col md={6} style={{marginTop: isMobile||isTablet?'10px':'0px'}}>
                                            <Label>Mobile Number</Label><Input className='inputStyleProfile' value={this.state.number} placeholder="Enter your mobile number" onChange={this.numberChange}/>
                                        </Col>
                                    </Row>
                                    <div style={{marginTop: '20px', paddingBottom: '30px'}}>
                                        <Button onClick={this.update} className='buttonSolid'>Update Details<span><FontAwesomeIcon icon={faChevronRight} className="iconRight"/></span></Button>
                                    </div>
                                </TabPane>
                                <TabPane tab="Packages" key="2">
                                    <div style={{marginBottom: '20px', fontSize: '24px', fontFamily: 'Nunito-Bold'}}>Therapy Packages</div>
                                    {this.state.packages.length===0 ?
                                        <div style={{margin: '20px auto', color: 'grey'}}>You have no therapy package available right now.</div> : 
                                        <div>
                                            <Card style={{width: 'max-content', marginBottom: '20px'}}>
                                                <CardBody>
                                                    <div>You have booked an appointment for</div>
                                                    <div style={{margin: '10px 0px'}}><span style={{fontWeight: '600'}}>Sessions: </span>{this.state.purpose}</div>
                                                    <div><span style={{fontWeight: '600'}}>Amount: </span>{this.state.amount}</div>
                                                </CardBody>
                                            </Card>
                                        </div>
                                    }
                                </TabPane>
                                <TabPane tab="Password" key="3">
                                    <div style={{marginBottom: '20px', fontSize: '24px', fontFamily: 'Nunito-Bold'}}>Change Password</div>
                                    <Row>
                                        <Col md={6}>
                                            <Label>New Password</Label><Input className='inputStyleProfile' placeholder="Enter your new password" onChange={this.password}/>
                                        </Col>
                                        <Col md={6} style={{marginTop: isMobile||isTablet?'10px':'0px'}}>
                                            <Label>Confirm Password</Label><Input className='inputStyleProfile' placeholder="Re-enter your password" onChange={this.confirm}/>
                                        </Col>
                                    </Row>
                                    <div style={{marginTop: '20px', paddingBottom: '30px'}}>
                                        <Button className='buttonSolid'>Change Password<span><FontAwesomeIcon icon={faChevronRight} className="iconRight"/></span></Button>
                                    </div>
                                </TabPane>
                                <TabPane tab="Help &amp; Support" key="4">
                                    <div style={{marginBottom: '20px', fontSize: '24px', fontFamily: 'Nunito-Bold'}}>Help &amp; Support</div>
                                    <Link className="linkStyle" to="/faq"><div>FAQ<span><FontAwesomeIcon icon={faChevronRight} style={{fontSize: '12px', marginLeft: '10px'}}/></span></div></Link>
                                    <hr/>
                                    <Link className="linkStyle" to="/programs"><div>Therapies<span><FontAwesomeIcon icon={faChevronRight} style={{fontSize: '12px', marginLeft: '10px'}}/></span></div></Link>
                                    <hr/>
                                    <Link className="linkStyle" to="/contact"><div>Contact Us<span><FontAwesomeIcon icon={faChevronRight} style={{fontSize: '12px', marginLeft: '10px'}}/></span></div></Link>
                                </TabPane>
                            </Tabs>
                        </Col>
                    </Row>
                </div>
                <Subscribe/>
            </Fragment>
        )
    }
}

export default withRouter(Profile);