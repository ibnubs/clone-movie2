import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom';
import Navigation from '../components/Navbar'
import { Carousel, Container, Pagination, Button, Modal, Form } from 'react-bootstrap';
import CardList from '../components/CardList';
import Footers from '../components/Footers';


//Css
import '../assets/style/login.scss';


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
                <div className="text-left mb-5 category">
                    <Link to="">All</Link>
                    <Link to="">Anime</Link>
                    <Link to="">Adventure</Link>
                    <Link to="">Action</Link>
                    <Link to="">Science Fiction</Link>
                    <Link to="">Comedy</Link>
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
            <Footers />

            {/* SignIn Form */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header >
                    <Modal.Title className="d-flex logo">
                        <Link to="" className="inline-block">
                            <img src={require("../assets/images/logo.png")} style={{ width: 40, height: 40 }} alt=""></img>
                        </Link>
                        <p className="h2 ml-3">MilanTV</p>
                    </Modal.Title>
                    <div className="close">
                        <button onClick={handleClose}>x</button>
                    </div>
                </Modal.Header>

                <Modal.Body className="modal-body">
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Insert username" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Insert password" />
                        </Form.Group>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button className="submit" onClick={handleClose}>
                        Submit
                    </Button>
                    <p className="goto-sign-up">Created Account? <Link to="">SignUp</Link></p>
                </Modal.Footer>
            </Modal>
        </Fragment >
    )
}


export default Homepage;