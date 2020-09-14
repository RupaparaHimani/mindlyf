import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import subscribe from '../../assets/images/subscribe.png';
import { Input, Button } from 'reactstrap';

export default class Subscribe extends Component {

    constructor(props) {
        super(props);
        this.state = {
    }
}
    render() {
        return (
            <Fragment>
                <div className="flexCenter" style={{backgroundImage: 'url(' + subscribe + ')', backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPosition: 'center', height: '350px'}}>
                    <div className="width-70mm" style={{textAlign: 'center'}}>
                        <div style={{fontFamily: 'Nunito-Bold', fontSize: '44px', color: 'white', marginBottom: '40px'}}>Subscribe to our newsletter</div>
                        <div style={{display: 'flex', alignItems: 'center', width: '70%', margin: 'auto'}}>
                            <Input placeholder="Enter your mail here" style={{display: 'inline-block', borderRadius: '100px 0px 0px 100px', border: 'none', padding: '20px', margin: 'auto', height: '58px', fontSize: '16px'}}/>
                            <Button placeholder="Enter your mail here" style={{width: 'fit-content', borderRadius: '0px 100px 100px 0px', border: 'none', background: '#DF8F06', padding: '10px 20px', height: '58px', fontSize: '15px'}}>Subscribe</Button>
                        </div>
                        
                    </div>
                    
                </div>
            </Fragment>
        )
    }
}
