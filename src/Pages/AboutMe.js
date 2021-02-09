import React from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'
import {styles} from './styles/defStyles';

import foto from '../resources/images/foto.jpg';

function AboutMe() {

    return(
        <Col className="slider" style={{...styles, background: 'DarkGray'}}>
            <Row className="justify-content-md-center mt-5">
                <Col md={4}>
                    <img className="personalImage" width={400} height={250} src={foto} alt="myself"/>
                </Col>
                <Col md="{1}">
                    <p>I'm a computer science student from the Open University of Catalonia (UOC).</p>
                </Col>
            </Row>
        </Col>
    );
}



export default AboutMe;