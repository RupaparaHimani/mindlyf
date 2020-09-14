import { faChevronRight, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'rc-tabs/assets/index.css';
import React, { Component, Fragment } from 'react';
import { isMobile, isTablet } from 'react-device-detect';
import Dotdotdot from 'react-dotdotdot';
import family from '../../assets/images/family.png';
import { Link, withRouter } from 'react-router-dom';
import { Button, Card, CardBody, CardImg, Col, Row } from 'reactstrap';
import programBanner from '../../assets/images/programBanner.png';
import Subscribe from '../../components/Subscribe';

class Blog extends Component {

    constructor(props) {
        super(props);
        this.state = {
    }
}
    render() {
        return (
            <Fragment>
                <div style={{textAlign: 'center', paddingTop: '260px', width: '80%', margin: 'auto'}}>
                    <Row>
                        <Col md={8}>
                            <Row>
                                <Col md={6}>
                                    <Link to={'org.link'} className="linkStyle blackLink"><Card className="shadowCard noBorder mb-30">
                                        <CardImg top src={family} alt="Card image cap" className="img_240"/>
                                        <CardBody>
                                            <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-SemiBold', fontSize: '15px'}}>{'org.name'}</div></Dotdotdot>
                                            <div style={{fontFamily: 'Roboto-Bold', fontSize: '26px'}}>Topic name</div>
                                            <Dotdotdot clamp={3}><div style={{fontSize: '12px', marginTop: '10px', marginBottom: '10px'}}>{'org.desc'}</div></Dotdotdot>
                                        </CardBody>
                                    </Card>
                                    </Link>

                                    <Link to={'org.link'} className="linkStyle blackLink"><Card className="shadowCard noBorder mb-30">
                                        <CardImg top src={family} alt="Card image cap" className="img_360"/>
                                        <CardBody>
                                            <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px'}}>{'org.name'}</div></Dotdotdot>
                                            <div style={{fontFamily: 'Roboto-Bold', fontSize: '26px'}}>Topic name</div>
                                            <div style={{fontFamily: 'Roboto-SemiBold', fontSize: '13px'}}>Learn More</div>
                                        </CardBody>
                                    </Card>
                                    </Link>

                                    <Link to={'org.link'} className="linkStyle blackLink"><Card className="shadowCard noBorder mb-30">
                                        <CardImg top src={family} alt="Card image cap" className="img_240"/>
                                        <CardBody>
                                            <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-SemiBold', fontSize: '15px'}}>{'org.name'}</div></Dotdotdot>
                                            <div style={{fontFamily: 'Roboto-Bold', fontSize: '26px'}}>Topic name</div>
                                            <Dotdotdot clamp={3}><div style={{fontSize: '12px', marginTop: '10px', marginBottom: '10px'}}>{'org.desc'}</div></Dotdotdot>
                                        </CardBody>
                                    </Card>
                                    </Link>

                                    <Link to={'org.link'} className="linkStyle blackLink"><Card className="shadowCard noBorder mb-30">
                                        <CardImg top src={family} alt="Card image cap" className="img_240"/>
                                        <CardBody>
                                            <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-SemiBold', fontSize: '15px'}}>{'org.name'}</div></Dotdotdot>
                                            <div style={{fontFamily: 'Roboto-Bold', fontSize: '26px'}}>Topic name</div>
                                            <Dotdotdot clamp={3}><div style={{fontSize: '12px', marginTop: '10px', marginBottom: '10px'}}>{'org.desc'}</div></Dotdotdot>
                                        </CardBody>
                                    </Card>
                                    </Link>
                                </Col>
                                <Col md={6}>
                                    <Link to={'org.link'} className="linkStyle blackLink"><Card className="shadowCard noBorder mb-30">
                                        <CardImg top src={family} alt="Card image cap" className="img_360"/>
                                        <CardBody>
                                            <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px'}}>{'org.name'}</div></Dotdotdot>
                                            <div style={{fontFamily: 'Roboto-Bold', fontSize: '26px'}}>Topic name</div>
                                            <div style={{fontFamily: 'Roboto-SemiBold', fontSize: '13px'}}>Learn More</div>
                                        </CardBody>
                                    </Card>
                                    </Link>

                                    <Link to={'org.link'} className="linkStyle blackLink"><Card className="shadowCard noBorder mb-30">
                                        <CardImg top src={family} alt="Card image cap" className="img_360"/>
                                        <CardBody>
                                            <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px'}}>{'org.name'}</div></Dotdotdot>
                                            <div style={{fontFamily: 'Roboto-Bold', fontSize: '26px'}}>Topic name</div>
                                            <div style={{fontFamily: 'Roboto-SemiBold', fontSize: '13px'}}>Learn More</div>
                                        </CardBody>
                                    </Card>
                                    </Link>

                                    <Link to={'org.link'} className="linkStyle blackLink"><Card className="shadowCard noBorder mb-30">
                                        <CardImg top src={family} alt="Card image cap" className="img_240"/>
                                        <CardBody>
                                            <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-SemiBold', fontSize: '15px'}}>{'org.name'}</div></Dotdotdot>
                                            <div style={{fontFamily: 'Roboto-Bold', fontSize: '26px'}}>Topic name</div>
                                            <Dotdotdot clamp={3}><div style={{fontSize: '12px', marginTop: '10px', marginBottom: '10px'}}>{'org.desc'}</div></Dotdotdot>
                                        </CardBody>
                                    </Card>
                                    </Link>

                                    <Link to={'org.link'} className="linkStyle blackLink"><Card className="shadowCard noBorder mb-30">
                                        <CardImg top src={family} alt="Card image cap" className="img_240"/>
                                        <CardBody>
                                            <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-SemiBold', fontSize: '15px'}}>{'org.name'}</div></Dotdotdot>
                                            <div style={{fontFamily: 'Roboto-Bold', fontSize: '26px'}}>Topic name</div>
                                            <Dotdotdot clamp={3}><div style={{fontSize: '12px', marginTop: '10px', marginBottom: '10px'}}>{'org.desc'}</div></Dotdotdot>
                                        </CardBody>
                                    </Card>
                                    </Link>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={4}>
                            <div style={{fontFamily: 'Roboto-Bold', fontSize: '26px'}}>Categories</div>
                            <Card className="shadowCard noBorder categoryBlog">
                                <CardBody>
                                    lk
                                </CardBody>
                            </Card>
                            <Card className="shadowCard noBorder categoryBlog">
                                <CardBody>
                                    lk
                                </CardBody>
                            </Card>
                            <Card className="shadowCard noBorder categoryBlog">
                                <CardBody>
                                    lk
                                </CardBody>
                            </Card>
                            <Card className="shadowCard noBorder categoryBlog">
                                <CardBody>
                                    lk
                                </CardBody>
                            </Card>
                            <div style={{fontFamily: 'Roboto-Bold', fontSize: '26px'}}>Trending Posts</div>

                        </Col>
                    </Row>
                </div>
                <Subscribe/>
            </Fragment>
        )
    }
}

export default withRouter(Blog);