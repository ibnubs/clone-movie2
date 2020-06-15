import React, { Fragment } from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import Navigation from '../components/Navbar';
import ContainerDisplayImg from '../components/ContainerDisplayImg';
import Footers from '../components/Footers';
import {Link} from 'react-router-dom';
import CardCharacter from '../components/CardCharacter';

const Character = () => {
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
                <CardCharacter />
                <CardCharacter />
            </Container>
            <Footers />
        </Fragment>
    );
}

export default Character;
