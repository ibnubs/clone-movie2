import React, { Fragment } from 'react'
import HeaderProfile from '../components/HeaderProfile';
import ContainerDisplayImg from '../components/ContainerDisplayImg';
import { Container, Button, Row, Col, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../assets/style/review.scss';
import StarRating from '../components/StarRating';
import ReviewCard from '../components/ReviewCard';

const Review = () => {
    return (
        <Fragment>
            <Container>
                <HeaderProfile />
            </Container>
            <ContainerDisplayImg />
            <Container>
                <div className="text-left mb-5 category">
                    <Link to="#">
                        <Button variant="outline-danger" className="btn-review" >Overview</Button>
                    </Link>
                    <Link to="#">
                        <Button variant="outline-danger" className="btn-review" >Characters</Button>
                    </Link>
                    <Link to="#">
                        <Button variant="outline-danger" className="btn-review" >Review</Button>
                    </Link>
                </div>
                <Row>
                    <Col sm={1} style={{ marginLeft: '20px' }}>
                        <div className="dummy-pic text-center" >PIC</div>
                    </Col>
                    <Col>
                        <p className="font-weight-bold">Text Nama Review</p>
                        <div style={{ marginTop: '-10px' }}>
                            <StarRating />
                        </div>
                    </Col>
                </Row>
                <Row style={{ paddingLeft: '8rem' }} className="mb-4">
                    <Form>
                        <Form.Group>
                            <Form.Control placeholder="Leave a review..." as="textarea" rows="3" style={{ width: "70vw" }}></Form.Control>
                            <Button className="send" style={{ backgroundColor: "#fe024e", borderColor: "#fe024e" }}>
                                Submit
                            </Button>
                        </Form.Group>
                    </Form>
                </Row>
                <ReviewCard />
            </Container>
        </Fragment>
    )
}

export default Review;
