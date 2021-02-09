import React from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {styles} from './styles/defStyles';

import mazeimg from '../resources/images/mazeImg.jpg';
import omiopr from '../resources/images/OmioProj.PNG'

function Projects() {

    return(
        <Col className="slider" style={{...styles, background: 'Coral'}}>
            <Row className="justify-content-center mt-5" height="128" noGutters>
                <Col xl="1">
                    <a href="https://rusoury.itch.io/mazegenerator3d">
                        <img className="projImg" src={mazeimg} alt="Maze project" />
                    </a>
                    <h1 className="centered">Maze Generator 3D</h1>
                </Col>
            </Row>
            <Row className="justify-content-center mt-5" height="128" noGutters>
                <Col xl="1">
                    <a href="https://cloud.justinmind.com/usernote/tests/48297745/49710263/49825127/index.html">
                        <img className="projImg" src={omiopr} alt="Maze project" />
                    </a>
                    <h1 className="centered">UI project</h1>
                </Col>
            </Row>
        </Col>
    );
}

export default Projects;