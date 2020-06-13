import React, { Fragment } from 'react';
import Form from 'react-bootstrap/Form';
import { Button, Container } from 'react-bootstrap';

import "../assets/style/signup.scss";


const SignUp = () => {
    return (
        <Fragment>
            <Container className="containers">
                <div className="logo">
                    <div className="logo-title">
                        <img src={require('../assets/images/logo.png')} alt="" />
                        <h4>Milan Tv</h4>
                    </div>
                </div>
                <Form className="form-style">
                    <Form.Group controlId="formBasicName">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="name" placeholder="Enter username" />
                        <Form.Text className="text-muted">
                            Please enter your username as a profile complement.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember password" />
                    </Form.Group>

                    <div className="btns">
                        <div className="btn-cancel">
                            <Button variant="secondary" type="submit">
                                Cancel
                    </Button>
                        </div>
                        <div className="btn-submit">
                            <Button variant="primary" type="submit">
                                Submit
                    </Button>
                        </div>
                    </div>
                </Form>
            </Container>
        </Fragment>
    )
}



export default SignUp;