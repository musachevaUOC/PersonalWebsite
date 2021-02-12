import React from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {styles} from './styles/defStyles';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


//TODO: implement POST

function Contact() {

    return(
        <div className="slider" style={{...styles, background: '#c3989a'}}>
            <h1 style={{textAlign: "center"}}>Contact me!</h1>
            <Row className="justify-content-center">
                <Col md={4} >
                    <Form method="post" onSubmit={(event) => {
                        event.preventDefault();
                        console.log(event.target);
                        fetch('/', {
                            method: 'POST',
                            body: new FormData(event.target)
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
                        <Button type="submit" variant="info"> Send </Button>
                    </Form>
                </Col>
            </Row>
        </div>
    );
}

export default Contact;