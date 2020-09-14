import { faFacebookF, faLinkedinIn, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEdit, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import FacebookLogin from 'react-facebook-login';
import axios from 'axios';
import React, { Component, Fragment } from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { GoogleLogin } from 'react-google-login';
import { Link, withRouter } from 'react-router-dom';
import Select, { components } from "react-select";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Input, Modal, ModalBody, Row } from 'reactstrap';
import Swal from 'sweetalert2';
import english from '../../assets/images/english.png';
import fb from '../../assets/images/fb.png';
import germany from '../../assets/images/germany.png';
import google from '../../assets/images/google-icon.png';
import logo from '../../assets/images/mind-lyf-04.png';
import registration from '../../assets/images/registration.png';
import spain from '../../assets/images/spain.jpg';

let user = {};
var validator = require("email-validator");

const formatOptionLabel = ({ value, label, logo }) => (
    <div style={{ display: "flex" }}>
        <img style={{width: '20px', objectFit: 'contain', marginRight: '5px'}} src={logo}/><span>{label}</span>
    </div>
  );

const CaretDownIcon = () => {
    return <FontAwesomeIcon icon={faSearch} color="grey" />;
  };
  
  const SearchIndicator = props => {
    return (
      <components.DropdownIndicator {...props}>
        <CaretDownIcon />
      </components.DropdownIndicator>
    );
  };

const customStyles = {
    placeholder: () => ({
      color: 'grey',
    }),
    control: () => ({
        background: 'transparent',
        display: 'flex',
    }),
    indicatorSeparator: () => ({
        display: 'none',
    }),
    dropdownIndicator: () => ({
        color: 'grey',
    }),
    input: () => ({
        color: 'grey',
    }),
  }

class AppHeader extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currencyList: [],
            selectedCurrency: null,
            countryList: [
                {label: 'English', value:'English', logo: english},
                {label: 'German', value:'German', logo: spain},
                {label: 'Spanish', value:'Spanish', logo: germany},
            ],
            country: '',
            showPass: false,
            dropdownOpen: false,
            dropdownOpenTest: false,
            loggedIn: false,
            showLogin: false,
            selectedOption: null,
            isSearchable: true,
            currency: '',
            name: '',
            password: '',
            number: '',
            email: '',
            courseList: [
                {label: 'Depression Counselling', value:'services/stress'},
                {label: 'Relationship Counselling', value:'services/relationship'},
                {label: 'Flourish at Work', value:'services/flourish'},
                {label: 'Boost Self Esteem and Confidence', value:'services/esteem'},
                {label: 'Parenting Done Right', value:'services/parenting'},
                {label: 'Special Children', value:'services/special-children'},
                {label: 'Mental Health Disorders', value:'services/mental-health'},
                {label: 'Therapies', value:'services/therapies'},
                {label: 'Anger Management', value:'programs/anger-management'},
                {label: 'Overcome Depression And Anxiety', value:'programs/depression'},
                {label: 'Overcome Your Lonliness', value:'programs/loneliness'},
                {label: 'Leave Your Procastination', value:'programs/procrastination'},
                {label: 'Develop Self Esteem And Confidence', value:'programs/self-esteem'},
                {label: 'Stress Management', value:'programs/stress'},
                {label: 'Resolve your family issues', value:'programs/family'},
                {label: 'Improve your relationship with your partner', value:'programs/relationship'},
                {label: 'Improve your Marriage', value:'programs/marriage'},
                {label: 'Manage  pre-wedding jitters', value:'programs/marriage-jitters'},
                {label: 'Counselling for entrepreneurs', value:'programs/entrepreneurs'},
                {label: 'Easy Career trasition', value:'programs/career-transition'},
                {label: 'Build your Dream Career', value:'programs/dream-career'},
                {label: 'Counselling for LGBTQ Individuals', value:'programs/lgbtq'},
                {label: 'Therapy for Sexual Abuse', value:'programs/sexual-abuse'},
                {label: 'Indentify Sexual Disorders', value:'programs/sexual-disorder'},
                {label: 'Sex Education', value:'programs/sex-education'},
                {label: 'Learn to Embrace your Sexuality', value:'programs/sexuality'},
            ],
    }
}

handleCurrency = (selectedCurrency) => {
    this.setState({
        currency: selectedCurrency.value,
    })
}

responseGoogle = (response) => {
    console.log(response);
    let res = response.profileObj;
    let data = {
        name: res.name,
        email: res.email,
    };
    localStorage.setItem('userData',JSON.stringify(data));
    localStorage.setItem('isLoggedIn',true);
    this.hideAll();
    this.componentDidMount();
    window.location.reload();
}

responseFacebook = (response) => {
    console.log(response);
    // let res = response.profileObj;
    // let data = {
    //     name: res.name,
    //     email: res.email,
    // };
    // localStorage.setItem('userData',JSON.stringify(data));
    // localStorage.setItem('isLoggedIn',true);
    // this.hideAll();
    // this.componentDidMount();
    // window.location.reload();
}

handleCountry = (selectedCountry) => {
    this.setState({
        country: selectedCountry.value,
    })
}

showLogin = () => {
    this.setState({showLogin: true})
}

handleChange = (selectedOption) => {
    this.props.history.push({
        pathname: '/'+selectedOption.value,
    })
}

hideAll = () => {
    this.setState({
        showLogin: false,
        showPass: false,
    })
}

componentDidMount = () => {
    this.setState({
        currencyList: [
            {value: 'INR', label: 'INR'},
            {value: 'USD', label: 'USD'},
            {value: 'CAD', label: 'CAD'},
        ],
    })

    if (localStorage.getItem('isLoggedIn')) {
        user = JSON.parse(localStorage.getItem('userData'));
        this.setState({
            name: user.name,
            loggedIn: true,
        })
    }
}

nameChange = event => {
    this.setState({ name: event.target.value });
}

emailChange = event => {
    this.setState({ email: event.target.value });
}

passChange = event => {
    this.setState({ password: event.target.value });
}

login = () => {
    if (this.state.email=="" || validator.validate(this.state.email)===false) {
        toast.error("Please enter a valid email address!");
    }
    else if (this.state.password=='') {
        toast.error("Please enter a password!");
    }
    else {
        let self = this;
        axios.post('https://api.mindlyf.com/api/login', {email: this.state.email, password: this.state.password})
            .then(function (response) {
                if (response.data.message==='No user found') {
                    self.hideAll();
                    self.props.history.push({
                        pathname: '/signup',
                    })
                }
                else {
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
                    window.location.reload();
                }
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

        // let data = {
        //     email: this.state.email,
        // };
        // localStorage.setItem('userData',JSON.stringify(data));
    }
}

toggleDrop = () => {
    this.setState(prevState => ({
        dropdownOpen: !prevState.dropdownOpen
    }));
}

toggleDropTest = () => {
    this.setState(prevState => ({
        dropdownOpenTest: !prevState.dropdownOpenTest
    }));
}

nav = value => {
    if (value==='profile') {
        this.props.history.push({
            pathname: '/profile',
        })
    }
    else if (value==='sessions') {
        this.props.history.push({
            pathname: '/sessions',
        })
    }
    else if (value==='dashboard') {
        this.props.history.push({
            pathname: '/dashboard',
        })
    }
    else if (value==='password') {
        this.setState({
            showPass: true,
        })
    }
    else if (value==='logout') {
        localStorage.clear();
        window.location.href="/";
    }
    else if (value==='self-test') {
        this.props.history.push({
            pathname: '/self-test',
        })
    }
    else if (value==='paid-test') {
        this.props.history.push({
            pathname: '/paid-test',
        })
    }
}

changePassword = () => {
    this.hideAll();
    Swal.fire({
        icon: 'success',
        type: 'success',
        text: 'Your password has been changed successfully!',
        showConfirmButton: true,
        timer: 3500
    })
}

    render() {
        const { isSearchable, selectedOption, selectedCountry, selectedCurrency } = this.state;
        return (
            <Fragment>
                <ToastContainer />
                <Modal size="lg" centered={true} style={{ textAlign: "center"}} isOpen={this.state.showLogin} toggle={this.hideAll} >
                    <ModalBody style={{ textAlign: "center" }}>
                        <Row style={{padding: '0px'}}>
                            <Col md={5} className="flexCenter" style={{background: '#0061AB', flexDirection: 'column', textAlign: 'left', justifyContent: 'space-around', color: 'white', paddingLeft: '40px'}}>
                                <div>
                                    <span style={{fontSize: '1.6rem'}}>Login</span>
                                    <span style={{display: 'block', marginTop: '15px'}}>Get access to your Appointments, Profile, etc.</span>
                                </div>
                                <img src={registration} alt="" style={{width: '80%', objectFit: 'cover'}}/>
                            </Col>
                            <Col md={7} className="flexCenter" style={{flexDirection: 'column', padding: '40px'}}>
                                <div style={{fontSize: '1.4rem', fontFamily: 'Roboto-Bold', marginBottom: '15px'}}>Sign In to Your Account</div>
                                <div style={{margin: '10px 0px', width: '100%'}}><Input className='inputStyle' placeholder="Enter your email address" onChange={this.emailChange}/></div>
                                <div style={{margin: '20px 0px', width: '100%'}}><Input className='inputStyle' maxLength={10} placeholder="Enter your password" onChange={this.passChange}/></div>
                                <div style={{marginTop: '10px', textAlign: 'left', width: '100%'}}><Button onClick={this.login} style={{fontFamily: 'Roboto-Bold', borderRadius: '8px', border: 'none', width: '100%', background: '#DF8F06', padding: '10px 16px', fontSize: '1rem'}}>LOGIN NOW</Button></div>
                                <div style={{marginTop: '20px', display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', width: '100%'}}>
                                    <div>
                                        <FacebookLogin
                                            appId="318952325788846"
                                            // autoLoad
                                            callback={this.responseFacebook}
                                            render={renderProps => (
                                                    <span style={{cursor: 'pointer', fontSize: '13px', background: '#3b5998', color: 'white', padding: '6px 10px', display: 'inline-flex', alignItems: 'center', borderRadius: '8px'}} onClick={renderProps.onClick} disabled={renderProps.disabled}><img src={fb} style={{height: '30px', marginRight: '10px', borderRadius: '6px'}}/><span>Login with Facebook</span></span>
                                                )}
                                            />
                                    </div>
                                    <div>
                                        <GoogleLogin
                                            clientId="666008965252-p0f44125gort69gcqa1m6e25o3tujpvp.apps.googleusercontent.com"
                                            render={renderProps => (
                                                <span style={{cursor: 'pointer', fontSize: '13px', background: '#4285F4', color: 'white', padding: '6px 10px', display: 'inline-flex', alignItems: 'center', borderRadius: '8px'}} onClick={renderProps.onClick} disabled={renderProps.disabled}><img src={google} style={{height: '30px', width: '30px', objectFit: 'contain', marginRight: '10px', padding: '5px', background: 'white', borderRadius: '6px'}}/><span>Login with Google</span></span>
                                            )}
                                            buttonText="Login"
                                            onSuccess={this.responseGoogle}
                                            // onFailure={responseGoogle}
                                            cookiePolicy={'single_host_origin'}
                                        />
                                    </div>
                                </div>
                                <div style={{margin: '10px', color: '#9f9f9f', textAlign: 'center', fontSize: '1.2rem'}}>OR</div>
                                <div style={{marginTop: '10px', textAlign: 'left', width: '100%'}}><Link className="linkStyle" to="/signup" onClick={this.hideAll}><Button style={{fontFamily: 'Roboto-Bold', borderRadius: '8px', background: 'none', width: '100%', border: 'solid 1px #DF8F06', color: '#DF8F06', padding: '10px 16px', fontSize: '1rem'}}>SIGN UP</Button></Link></div>
                            </Col>
                        </Row>
                    </ModalBody>
                </Modal>
                <Modal centered={true} style={{ textAlign: "center"}} isOpen={this.state.showPass} toggle={this.hideAll} >
                    <ModalBody style={{ textAlign: "center" }}>
                        <div style={{fontSize: '1.4rem', fontFamily: 'Roboto-Bold', marginBottom: '15px'}}>Change Password</div>
                        <div style={{margin: '20px 0px'}}><Input className='inputStyle' placeholder="Enter new password" onChange={this.passChange}/></div>
                        <div style={{marginTop: '10px', textAlign: 'left'}}><Button onClick={this.changePassword} style={{borderRadius: '40px', background: 'black', padding: '10px 16px', fontSize: '0.8rem'}}>Change Password</Button></div>
                    </ModalBody>
                </Modal>
                <div className="headerWidth">
                    <div className="topOrder">
                        <a href="https://www.facebook.com/Mindlyf-103845977940812" target="_blank"><span style={{marginRight: '20px'}}><FontAwesomeIcon icon={faFacebookF} style={{color: 'white', fontSize: '18px'}}/></span></a>
                        <a href="https://twitter.com/mindlyf" target="_blank"><span style={{marginRight: '20px'}}><FontAwesomeIcon icon={faTwitter} style={{color: 'white', fontSize: '18px'}}/></span></a>
                        <a href="https://www.instagram.com/mindlyf/" target="_blank"><span style={{marginRight: '20px'}}><FontAwesomeIcon icon={faYoutube} style={{color: 'white', fontSize: '18px'}}/></span></a>
                        <a href="https://www.linkedin.com/company/33269743/admin/" target="_blank"><span style={{marginRight: '20px'}}><FontAwesomeIcon icon={faLinkedinIn} style={{color: 'white', fontSize: '18px'}}/></span></a>
                    </div>
                    <div className="headerBottom flexCenter" style={{justifyContent: 'space-around', display: 'grid', gridTemplateColumns: 'auto 1fr'}}>
                        <div style={{background: 'white', width: 'min-content', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px', padding: '7px 12px'}}><Link className="linkStyle" to="/" style={{color: 'white'}}><img src={logo} alt="" style={{height: "74px"}}/></Link></div>
                        <div style={{color: 'black', display: 'flex', justifySelf: 'flex-end'}}>
                            <span style={{display: 'flex', justifyContent: 'flex-end'}}>
                                <div style={{color: 'black', display: 'flex', marginRight: '10px'}}>
                                    <Select
                                    id="global-search"
                                    className="basic-singleSearch"
                                    classNamePrefix="select"
                                    value={selectedOption}
                                    placeholder="Search..."
                                    styles={customStyles}
                                    components={{ DropdownIndicator: SearchIndicator }}
                                    onChange={(selectedOption) => this.handleChange(selectedOption)}
                                    isSearchable={isSearchable}
                                    name="color"
                                    options={this.state.courseList} /> 
                                </div>
                                <div style={{color: 'black', display: 'flex', marginRight: '10px'}}>
                                    {/* <div><FontAwesomeIcon icon={faMapMarkerAlt} color="white" /></div> */}
                                    <Select
                                        id="global-search"
                                        className="basic-singleCountry"
                                        classNamePrefix="select"
                                        value={selectedCountry}
                                        placeholder="IND"
                                        styles={customStyles}
                                        formatOptionLabel={formatOptionLabel}
                                        // components={{ DropdownIndicator }}
                                        onChange={(selectedCountry) => this.handleCountry(selectedCountry)}
                                        isSearchable={isSearchable}
                                        name="color"
                                        options={this.state.countryList} /> 
                                </div>
                                <div style={{color: 'black', display: 'flex', marginRight: '25px'}}>
                                    {/* <div><FontAwesomeIcon icon={faDollarSign} color="white" /></div> */}
                                    <Select
                                        id="global-search"
                                        className="basic-singleCurrency"
                                        classNamePrefix="select"
                                        value={selectedCurrency}
                                        placeholder="₹"
                                        styles={customStyles}
                                        // components={{ DropdownIndicator }}
                                        onChange={(selectedCurrency) => this.handleCurrency(selectedCurrency)}
                                        isSearchable={isSearchable}
                                        name="color"
                                        options={this.state.currencyList} /> 
                                </div>
                            </span>
                        </div>
                        </div>
                    <div className="headerTop"> 
                        <div style={{fontSize: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0px 100px'}}>
                            <Link className="headerLink" to="/services"><div className="linkHeader">Services</div></Link>
                            <Link className="headerLink" to="/programs"><div className="linkHeader">Programs</div></Link>
                            <div className="headerLink">Become A Counsellor</div>
                            <Link className="headerLink" to="/consultant"><div className="linkHeader">Our Experts</div></Link>
                            <Link className="headerLink" to="/corporate-counselling"><div className="linkHeader">For Corporates</div></Link>
                            <Dropdown isOpen={this.state.dropdownOpenTest} style={{display: 'inline'}} toggle={this.toggleDropTest}>
                                <DropdownToggle style={{background: 'transparent', border: 'none'}}>
                                    <FontAwesomeIcon icon={faEdit} color="white" style={{marginRight: '10px'}} />Test
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem onClick={() => this.nav('self-test')}>Self - Test</DropdownItem>
                                    <DropdownItem onClick={() => this.nav('paid-test')}>Paid - Test</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                            {/* <Link className="headerLink" to="/self-test"><div className="linkHeader">Test</div></Link> */}
                            <Link className="headerLink" to="/blog"><div className="linkHeader">Blog</div></Link>
                            <Link className="headerLink" to="/gift"><div className="linkHeader">Gift Hapiness</div></Link>
                            <div style={{cursor: 'pointer'}} hidden={this.state.loggedIn} onClick={this.showLogin}><FontAwesomeIcon icon={faUser} color="white" style={{marginRight: '10px'}} />Login</div>
                            <Dropdown hidden={!this.state.loggedIn} isOpen={this.state.dropdownOpen} style={{display: 'inline'}} toggle={this.toggleDrop}>
                                <DropdownToggle style={{background: 'transparent', border: 'none'}}>
                                    <FontAwesomeIcon icon={faUser} color="white" style={{marginRight: '10px'}} />Profile
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem onClick={() => this.nav('profile')}>My Profile</DropdownItem>
                                    {/* <DropdownItem onClick={() => this.nav('sessions')}>My Sessions</DropdownItem> */}
                                    <DropdownItem onClick={() => this.nav('dashboard')}>Dashboard</DropdownItem>
                                    <DropdownItem onClick={() => this.nav('password')}>Change Password</DropdownItem>
                                    <DropdownItem onClick={() => this.nav('logout')}>Logout</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                            {/* <div style={{marginRight: '20px', border: 'solid 2px white', borderRadius: '4px', padding: '5px 15px', background: 'white', color: '#0061AB'}}>Sign up</div> */}
                        </div>             
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default withRouter(AppHeader);