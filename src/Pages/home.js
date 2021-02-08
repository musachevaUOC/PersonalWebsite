import React from 'react';

import Col from 'react-bootstrap/Col';
import {styles} from './styles/defStyles';

function Home() {

    return(
        <Col className="slider" style={{...styles, background: 'LightBlue'}}>
            <h1>Home</h1>

        </Col>
    );
}

export default Home;