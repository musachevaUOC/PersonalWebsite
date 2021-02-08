import React from 'react';

import Col from 'react-bootstrap/Col';
import {styles} from './styles/defStyles';

function AboutMe() {

    return(
        <Col className="slider" style={{...styles, background: 'DarkGray'}}>
            <h1>About Me</h1>

        </Col>
    );
}



export default AboutMe;