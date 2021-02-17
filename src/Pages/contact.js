import React, {useEffect, useState} from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {styles} from './styles/defStyles';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Contact() {

    useEffect(()=>{window.onloadCallback()});
    const [responseData, setResponseData] = useState("please submit the data");

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
                        }).then(response =>{
                            return response.text()
                        }).then(data=>{
                            console.log(data);
                            setResponseData(data);
                        });
                        }}>
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
                        <Row noGutters className="justify-content-sm-center">
                            <Col md={6} xl={7}>
                                <div id="g-recaptcha"> </div>
                            </Col>
                            <Col className="confirmationBox" xl={3}>
                                {responseData}
                            </Col>
                            <Col md={1} xl={1}>
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