import React, { Fragment } from 'react';
import { Jumbotron, Container, Button, Col } from 'react-bootstrap';
import StarRating from './StarRating';


const ContainerDisplayImg = () => {
    return (
        <Fragment>
            <Jumbotron fluid style={{ height: '50vh' }}>
                <Container>
                    <h1>Fluid jumbotron</h1>
                    <ul className="list-inline">
                        <li className="list-inline-item " style={{ marginTop: '-1000px' }}> <StarRating /></li>
                        <li className="list-inline-item " style={{ fontSize: 22 }}> 2200 reviews</li>
                    </ul>
                    <p>
                        This is a modified jumbotron that occupies the entire horizontal space of
                        its parent.
                    </p>
                    <Col>
                        <Button variant="outline-danger" className="mr-2">Watch Trailer</Button>
                        <Button variant="outline-danger">Add to Watchlist</Button>
                    </Col>
                </Container>
            </Jumbotron>
        </Fragment>
    );
}

export default ContainerDisplayImg;
