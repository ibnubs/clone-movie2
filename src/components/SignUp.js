import React, { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from 'react-bootstrap/Form';
import { Button, Container } from 'react-bootstrap';

import { register } from '../store/actions/regis';

import "../assets/style/signup.scss";


const SignUp = (props) => {
    const baca_dispatch = useDispatch()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")



    const submit = (e) => {
        e.preventDefault()
        const userData = {
            name,
            email,
            password
        }
        baca_dispatch(register(userData))
        props.history.push("/profile")
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
                        <Form.Control type="name" placeholder="Enter username" value={name} onChange={(e) => setName(e.target.value)} />
                        <Form.Text className="text-muted">
                            Please enter your username as a profile complement.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
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



export default SignUp;