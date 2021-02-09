import React from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {styles} from './styles/defStyles';

import {LinkContainer} from 'react-router-bootstrap';

import {ReactComponent as Puzzle} from '../resources/svgs/home/puzle.svg';
import {ReactComponent as Mail} from '../resources/svgs/home/mail.svg';
import {ReactComponent as User} from '../resources/svgs/home/user.svg';

function Home() {

    return(
        <Col className="slider" style={{...styles, background: 'LightBlue'}}>
            <Row className="justify-content-xl-center" noGutters>
                <Col xl={4} className="m-2">
                    <LinkContainer to="/AboutMe">
                        <div className="homeBlock p-2">
                            <h1>About me</h1>
                            <User className="m-3" width="150" height="100" style={{position: "absolute", bottom: "0", right: "0"}}/>
                        </div>
                    </LinkContainer>
                </Col>
                <Col xl={4} className="m-2">
                    <LinkContainer to="/projects">
                        <div className="homeBlock  p-2">
                            <h1>Projects</h1>
                            <Puzzle className="m-3" width="150" height="100" style={{position: "absolute", bottom: "0", right: "0"}}/>
                        </div>
                    </LinkContainer>
                </Col>
            </Row>
            <Row className="justify-content-xl-center">
                <Col xl={4} className="m-2">
                    <LinkContainer to="/contact">
                        <div className="homeBlock  p-2">
                            <h1>Contact</h1>
                            <Mail className="mb-4 mr-5" width="120" height="80" style={{position: "absolute", bottom: "0", right: "0"}}/>
                        </div>
                    </LinkContainer>
                </Col>
            </Row>
        </Col>
    );
}

export default Home;