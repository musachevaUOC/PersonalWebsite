import React, {useEffect} from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {styles} from './styles/defStyles';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Contact() {

    useEffect(()=>{window.onloadCallback()});

    return(
        <div className="slider" style={{...styles, background: '#c3989a'}}>
            <h1 style={{textAlign: "center"}}>Contact me!</h1>
            <Row className="justify-content-center">
                <Col md={6} >
                    <Form method="post" onSubmit={(event) => {
                        event.preventDefault();
                        console.log(event.target);
                        fetch('/', {
                            method: 'POST',
                            body: new URLSearchParams(new FormData(event.target))
                        })}}>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control name="email" type="email" placeHolder="Enter your email here"/>
                        </Form.Group>
                        <Form.Group controlId="formTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control name="title" type="text" placeHolder="Enter a title here" />
                        </Form.Group>
                        <Form.Group controlId="formText">
                            <Form.Label>Text</Form.Label>
                            <Form.Control name="text" as="textarea" rows={3} placeHolder="Enter message here"/>
                        </Form.Group>
                        <Row noGutters>
                            <Col lg={8}>
                                <div id="g-recaptcha"> </div>
                            </Col>
                            <Col lg={{span:2, offset:2}}>
                                <Button type="submit" size="lg" variant="info"> Send </Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </div>
    );
}

export default Contact;