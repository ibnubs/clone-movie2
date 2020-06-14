import React, { Fragment } from 'react'
import Navigation from '../components/Navbar';
import ContainerDisplayImg from '../components/ContainerDisplayImg';
import {Container, Button, Row, Col, Form} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footers from '../components/Footers';
import '../assets/style/review.scss';
import StarRating from '../components/StarRating';

const Review = () => {
    return (
        <Fragment>
            <Container>
                <Navigation />
            </Container>
            <ContainerDisplayImg />
            <Container>
                <div className="text-left mb-5 category">
                    <Link to="">
                        <Button variant="outline-danger" className="btn-review" >Overview</Button>
                    </Link>
                    <Link to="">
                        <Button variant="outline-danger" className="btn-review" >Characters</Button>
                    </Link>
                    <Link to="">
                        <Button variant="outline-danger" className="btn-review" >Review</Button>
                    </Link>
                </div>
                <Row>
                    <Col sm={1} style={{marginLeft:'20px'}}>
                        <div className="dummy-pic text-center" >PIC</div>
                    </Col>
                    <Col>
                        <p className="font-weight-bold">Text Nama Review</p>
                        <div style={{marginTop:'-10px'}}>
                            <StarRating />
                        </div>
                    </Col>
                </Row>
                <Row style={{paddingLeft:'8rem', border:'1px solid black'}}>
                    <Form>
                        <Form.Group>
                            <Form.Control as="textarea" rows="3" style={{width:"70vw"}}></Form.Control>
                        </Form.Group>
                    </Form>
                </Row>
            </Container>
            <Footers />
        </Fragment>
    )
}

export default Review;
