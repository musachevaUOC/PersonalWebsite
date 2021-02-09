import React from 'react';

import {NavLink} from 'react-router-dom';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {styles} from './styles/defStyles';

import {ReactComponent as Puzzle} from '../resources/svgs/home/puzle.svg';

function Home() {

    return(
        <Col className="slider" style={{...styles, background: 'LightBlue'}}>
            <Row className="justify-content-center mt-5">
                <Col xl={2} className="homeBlock m-1">
                    <NavLink to="/AboutMe">About me</NavLink>

                </Col>
                <Col xl={2} className="homeBlock m-1">
                    <NavLink to="/projects">Projects</NavLink>
                    <Puzzle width="200" height="200" style={{position: "absolute", bottom: "0", right: "0"}}/>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col xl={2} className="homeBlock m-1">
                    <NavLink to="/contact">Contact</NavLink>
                </Col>
            </Row>
        </Col>
    );
}

export default Home;