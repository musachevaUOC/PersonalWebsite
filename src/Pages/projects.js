import React from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {styles} from './styles/defStyles';

import mazeimg from '../resources/images/mazeImg.jpg';
import omiopr from '../resources/images/OmioProj.PNG'

//TODO: implement popover text description

function Projects() {

    return(
        <div className="slider" style={{...styles, background: 'Coral'}}>
            <Row className="justify-content-center mt-5" noGutters>
                <Col md={4}>
                    <a href="https://rusoury.itch.io/mazegenerator3d">
                       <div className="text-center">
                           <img className="projImg" src={mazeimg} alt="Maze project" />
                           <span>Maze Generator 3D</span>
                       </div>
                    </a>
                </Col>
            </Row>
            <Row className="justify-content-center" noGutters>
                <Col md={4}>
                    <a href="https://cloud.justinmind.com/usernote/tests/48297745/49710263/49825127/index.html">
                        <div className="text-center">
                            <img className="projImg" src={omiopr} alt="Maze project" />
                            <span>UI project</span>
                        </div>
                    </a>
                </Col>
            </Row>
        </div>
    );
}

export default Projects;