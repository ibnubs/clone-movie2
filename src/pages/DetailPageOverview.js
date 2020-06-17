import React, { Fragment } from 'react'
import HeaderProfile from '../components/HeaderProfile';
import ContainerDisplayImg from '../components/ContainerDisplayImg';
import { Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footers from '../components/Footers';
import '../assets/style/detail.scss';

const DetailPageOverview = () => {
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
                    <Link to="character">
                        <Button variant="outline-danger" className="btn-review" >Cast</Button>
                    </Link>
                    <Link to="review">
                        <Button variant="outline-danger" className="btn-review" >Review</Button>
                    </Link>
                </div>
                <p className="title-detail h4" >
                    <span>
                        Synopsis
                    </span>
                </p>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                <div className="mt-5">
                    <p className="title-detail h4" >
                        <span>
                            Movie Info
                        </span>
                    </p>
                    <Row>
                        <div className="col-2">
                            <p className="font-weight-bold">Release Date:</p>
                            <p className="font-weight-bold">Budget:</p>
                            <p className="font-weight-bold">Revenue:</p>
                        </div>
                        <div className="col-10">
                            <p>text dummy</p>
                            <p>text dummy</p>
                            <p>text dummy</p>
                        </div>
                    </Row>
                </div>


            </Container>
            <Footers />
        </Fragment>
    )
}

export default DetailPageOverview;
