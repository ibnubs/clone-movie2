import React, { Fragment, useState } from 'react'
import Navigation from '../components/Navbar'

import { Carousel, Container, Pagination, Button, Modal, Form } from 'react-bootstrap';
import CardList from '../components/CardList';



const Homepage = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Fragment>
            <Container >
                <Navigation
                    handleShow={handleShow}
                />
            </Container>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://source.unsplash.com/random/600x400"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://source.unsplash.com/random/600x400"
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://source.unsplash.com/random/600x400"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            <Container>
                <p className="h2 text-left mt-2"><strong> Browser by category </strong></p>
                <div className="text-left mb-5">
                    <a className="h4 mr-3">All</a>
                    <a className="h4 mr-3">Anime</a>
                    <a className="h4 mr-3">Action</a>
                    <a className="h4 mr-3">Adventure</a>
                    <a className="h4 mr-3">Science Fiction</a>
                    <a className="h4 mr-3">Comedy</a>
                </div>
                <div>
                    <div className="card-deck mb-3">
                        <CardList />
                        <CardList />
                        <CardList />
                        <CardList />
                        <CardList />
                    </div>
                    <div className="card-deck mb-3">
                        <CardList />
                        <CardList />
                        <CardList />
                        <CardList />
                        <CardList />
                    </div>
                    <div className="card-deck mb-3">
                        <CardList />
                        <CardList />
                        <CardList />
                        <CardList />
                        <CardList />
                    </div>
                </div>
                <div className=" d-flex justify-content-center">
                    <Pagination >
                        <Pagination.First />
                        <Pagination.Prev />
                        <Pagination.Item>{1}</Pagination.Item>
                        <Pagination.Item>{2}</Pagination.Item>
                        <Pagination.Item>{3}</Pagination.Item>
                        <Pagination.Item>{4}</Pagination.Item>
                        <Pagination.Item>{5}</Pagination.Item>
                        <Pagination.Next />
                        <Pagination.Last />
                    </Pagination>
                </div>
            </Container>

            {/* SignIn Form */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header >
                    <Modal.Title className="d-flex mx-auto">
                        <a href="#" className="inline-block">
                            <img src={require("../assets/images/logo.png")} style={{ width: 40, height: 40 }}></img>
                        </a>
                        <p className="h2 ml-3">MilanTV</p>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Username" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                    </Form>
                    <p className="font-weight-bold text-center">Created Account? <a href="#">SignUp</a></p>
                    
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </Fragment>
    )
}


export default Homepage;