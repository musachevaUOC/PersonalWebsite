import React from 'react';

import "./Pages/styles/anim.css"

import {Switch, Route, useLocation} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';

import {TransitionGroup, CSSTransition} from 'react-transition-group';

import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import AboutMe from './Pages/AboutMe';
import Contact from './Pages/contact';
import Home from './Pages/home';
import Projects from './Pages/projects';

import {ReactComponent as LiLogo} from './resources/svgs/media/linkedin.svg';
import {ReactComponent as GhLogo} from './resources/svgs/media/github.svg';

function App() {
    let location = useLocation();

    return (


        <Container fluid className="p-0">
            <Row xl={2} noGutters>

                    <Social/>

                <Col className="justify-content-end">
                    <NavBar/>
                </Col>
            </Row>
            <Row noGutters>
                <TransitionGroup component={null}>
                    <CSSTransition key={location.key} classNames="fade" timeout={1000}>
                        <Switch location={location}>
                            <Route path="/AboutMe">
                                <AboutMe/>
                            </Route>
                            <Route path="/contact">
                                <Contact/>
                            </Route>
                            <Route path="/projects">
                                <Projects/>
                            </Route>
                            <Route exact path="/">
                                <Home/>
                            </Route>
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            </Row>
        </Container>
  );
}

function NavBar(){
    return (

        <ToggleButtonGroup name="pages" size="md" className="d-flex mt-1 justify-content-end">

            <LinkContainer exact to="/"><ToggleButton variant="outline-info">Home</ToggleButton></LinkContainer>
            <LinkContainer to="/AboutMe"><ToggleButton variant="outline-info">About me</ToggleButton></LinkContainer>
            <LinkContainer to="/projects"><ToggleButton variant="outline-info">Projects</ToggleButton></LinkContainer>
            <LinkContainer to="/contact"><ToggleButton variant="outline-info">Contact</ToggleButton></LinkContainer>

        </ToggleButtonGroup>

    );
}

function Social(){
    return(

        <>
            <Col>
                <a href="https://www.linkedin.com/in/mikhail-usacheva-uryvskiy-829052200/"><LiLogo className="socialMedia" width="32" height="32"/></a>
                <a href="https://github.com/musachevaUOC"><GhLogo className="socialMedia" width="32" height="32"/></a>
            </Col>
        </>

    );
}


export default App;
