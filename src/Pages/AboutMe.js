import React from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'
import {styles} from './styles/defStyles';

import foto from '../resources/images/foto.jpg';
import {Link} from 'react-router-dom';

function AboutMe() {

    return(
        <div className="slider" style={{...styles, background: 'DarkGray'}}>
            <Row className="h-100 mt-5" style={{overflow: "scroll"}}>
                <Col lg={6} className="d-flex justify-content-center mb-5">
                    <img className="personalImage" width={400} height={250} src={foto} alt="myself"/>
                </Col>
                <Col lg={6} className="d-flex justify-content-center">
                    <p>I'm a computer science student from the Open University of Catalonia (UOC). <br/>
                        Although I lack professional experience, I have a particular interest on software<br/>
                        development and building software implementations of things I find interesting. <br/>
                        For example, the two projects linked on the <Link to="/projects">projects</Link> tab are an implementation <br/>
                        example of an idea. <br/>
                        <br/>
                        The first project, was a game experiment of a randomly generated 3D maze using <br/>
                        the Unity Engine and C#. The algorithm to build randomly generated mazes was based<br/>
                        on generating a graph and finding the minimum spanning tree, which then walls were <br/>
                        placed on the roads and the maze was buit.<br/>
                        <br/>
                        The other project, was a university practice assignment, where we where told to build a UI<br/>
                        for a train ticketing app. The project was built using JustInMind, a tool for generating <br/>
                        high fidelity user interfaces, which also allowed for basic logic and databases. <br/>
                        <br/>
                        As for this website, I used the React-Express-Node software stack, built from the <br/>
                        create-react-app tool. For the back-end, I used a basic node server hosted as an azure web app.<br/>
                    </p>
                </Col>
            </Row>
        </div>
    );
}



export default AboutMe;