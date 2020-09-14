import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';
import AppHeader from '../components/AppHeader';
import AppFooter from '../components/AppFooter';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './Home';
import '../assets/styles/base.scss';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './About';
import CorporateCounselling from './CorporateCounselling';
import ServiceFee from './ServiceFee';
import Faq from './Faq';
import Programs from './Programs';
import AngerManagement from './Programs/AngerManagement';
import Depression from './Programs/Depression';
import Motivation from './Programs/Motivation';
import Loneliness from './Programs/Loneliness';
import Procrastination from './Programs/Procrastination';
import SelfEsteem from './Programs/SelfEsteem';
import Stress from './Programs/Stress';
import Family from './Programs/Family';
import Relationship from './Programs/Relationship';
import Marriage from './Programs/Marriage';
import MarriageJitters from './Programs/MarriageJitters';
import DreamCareer from './Programs/DreamCareer';
import CareerTrans from './Programs/CareerTrans';
import Entrepreneurs from './Programs/Entrepreneurs';
import Sexuality from './Programs/Sexuality';
import SexEducation from './Programs/SexEducation';
import SexDisorder from './Programs/SexDisorder';
import SexAbuse from './Programs/SexAbuse';
import LGBTQ from './Programs/LGBTQ';
import Services from './Services';
import StressService from './Services/StressService';
import RelationshipService from './Services/RelationshipService';
import FlourishService from './Services/FlourishService';
import EsteemService from './Services/EsteemService';
import ParentingService from './Services/ParentingService';
import SpecialChildren from './Services/SpecialChildren';
import MentalHealth from './Services/MentalHealth';
import Therapies from './Services/Therapies';
import Test from './Test';
import StartTest from './StartTest';
import Questions from './Questions';
import Results from './Results';
import SelfTest from './SelfTest';
import PaidTest from './PaidTest';
import Consultant from './Consultant';
import Terms from './Terms';
import Dashboard from './Dashboard';
import Profile from './Profile';
import Gift from './Gift';
import Blog from './Blog';
import Checkout from './Checkout';
import Signup from './Signup';

const Pages = ({match}) => (
    <Fragment>
        <Router>
            <AppHeader/>
                <Switch>
                    <Route exact path={`/`} component={Home}/>
                    <Route exact path={`/about`} component={About}/>
                    <Route exact path={`/corporate-counselling`} component={CorporateCounselling}/>
                    <Route exact path={`/service-fee`} component={ServiceFee}/>
                    <Route exact path={`/faq`} component={Faq}/>
                    <Route exact path={`/programs`} component={Programs}/>
                    <Route exact path={`/programs/anger-management`} component={AngerManagement}/>
                    <Route exact path={`/programs/depression`} component={Depression}/>
                    <Route exact path={`/programs/motivation`} component={Motivation}/>
                    <Route exact path={`/programs/loneliness`} component={Loneliness}/>
                    <Route exact path={`/programs/procrastination`} component={Procrastination}/>
                    <Route exact path={`/programs/self-esteem`} component={SelfEsteem}/>
                    <Route exact path={`/programs/stress`} component={Stress}/>
                    <Route exact path={`/programs/family`} component={Family}/>
                    <Route exact path={`/programs/relationship`} component={Relationship}/>
                    <Route exact path={`/programs/marriage`} component={Marriage}/>
                    <Route exact path={`/programs/marriage-jitters`} component={MarriageJitters}/>
                    <Route exact path={`/programs/dream-career`} component={DreamCareer}/>
                    <Route exact path={`/programs/career-transition`} component={CareerTrans}/>
                    <Route exact path={`/programs/entrepreneurs`} component={Entrepreneurs}/>
                    <Route exact path={`/programs/sexuality`} component={Sexuality}/>
                    <Route exact path={`/programs/sex-education`} component={SexEducation}/>
                    <Route exact path={`/programs/sexual-disorder`} component={SexDisorder}/>
                    <Route exact path={`/programs/sexual-abuse`} component={SexAbuse}/>
                    <Route exact path={`/programs/lgbtq`} component={LGBTQ}/>
                    <Route exact path={`/services`} component={Services}/>
                    <Route exact path={`/services/stress`} component={StressService}/>
                    <Route exact path={`/services/relationship`} component={RelationshipService}/>
                    <Route exact path={`/services/flourish`} component={FlourishService}/>
                    <Route exact path={`/services/esteem`} component={EsteemService}/>
                    <Route exact path={`/services/parenting`} component={ParentingService}/>
                    <Route exact path={`/services/special-children`} component={SpecialChildren}/>
                    <Route exact path={`/services/mental-health`} component={MentalHealth}/>
                    <Route exact path={`/services/therapies`} component={Therapies}/>
                    <Route exact path={`/test`} component={Test}/>
                    <Route exact path={`/start`} component={StartTest}/>
                    <Route exact path={`/questions`} component={Questions}/>
                    <Route exact path={`/results`} component={Results}/>
                    <Route exact path={`/self-test`} component={SelfTest}/>
                    <Route exact path={`/consultant`} component={Consultant}/>
                    <Route exact path={`/dashboard`} component={Dashboard}/>
                    <Route exact path={`/profile`} component={Profile}/>
                    <Route exact path={`/gift`} component={Gift}/>
                    <Route exact path={`/terms`} component={Terms}/>
                    <Route exact path={`/privacy`} component={Terms}/>
                    <Route exact path={`/blog`} component={Blog}/>
                    <Route exact path={`/checkout`} component={Checkout}/>
                    <Route exact path={`/signup`} component={Signup}/>
                    <Route exact path={`/paid-test`} component={PaidTest}/>
                </Switch>
            <AppFooter/>
        </Router>
    </Fragment>
);

export default Pages;