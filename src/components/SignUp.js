import React, { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import { Button, Container } from 'react-bootstrap';

import { SignUpAction } from '../store/actions/Auth';

import "../assets/style/signup.scss";


export default function SignUp(props) {
    const baca_dispatch = useDispatch()
    const [input, setInput] = useState({
        name: "",
        email: "",
        password: ""
    })

    const handleInput = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const submit = (e) => {
        e.preventDefault()
        baca_dispatch(SignUpAction(input))
        props.history.push("/")
    }

    const back = (e) => {
        e.preventDefault()
        props.history.push("/")
    }

    return (
        <Fragment>
            <Container className="containers">
                <div className="logo">
                    <div className="logo-title">
                        <img src={require('../assets/images/logo.png')} alt="" />
                        <h4>Milan Tv</h4>
                    </div>
                </div>
                <Form className="form-style" onSubmit={submit}>
                    <Form.Group controlId="formBasicName">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" name="name" placeholder="Enter username" value={input.name} onChange={handleInput} />
                        <Form.Text className="text-muted">
                            Please enter your username as a profile complement.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email" value={input.email} onChange={handleInput} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password" value={input.password} onChange={handleInput} />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember password" />
                    </Form.Group>

                    <div className="btns">
                        <div className="btn-cancel">
                            <Button variant="secondary" type="submit" onClick={back}>
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