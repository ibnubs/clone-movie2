import React, { Fragment } from 'react'
import Navigation from '../components/Navbar';
import ContainerDisplayImg from '../components/ContainerDisplayImg';
import StarRating from '../components/StarRating';
import {Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footers from '../components/Footers'

const DetailPageOverview = () => {
    return (
        <Fragment>
            <Navigation />
            <ContainerDisplayImg />
            <Container>
                <div className="text-left mb-5 category">
                    <Link to="">Overview</Link>
                    <Link to="">Characters</Link>
                    <Link to="">Review</Link>
                </div>
            </Container>
            <Footers />
        </Fragment>
    )
}

export default DetailPageOverview;
