import React, { Fragment } from 'react'
import Navigation from '../components/Navbar';
import ContainerDisplayImg from '../components/ContainerDisplayImg';
import {Container, Table} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footers from '../components/Footers';
import '../assets/style/detail.scss';

const DetailPageOverview = () => {
    return (
        <Fragment>
            <Container>
                <Navigation />
            </Container>
            <ContainerDisplayImg />
            <Container>
                <div className="text-left mb-5 category">
                    <Link to="">
                        <button className="link-btn active">Overview</button>
                    </Link>
                    <Link to="">
                        <button className="link-btn">Characters</button>
                    </Link>
                    <Link to="">
                        <button className="link-btn">Review</button>
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
                    <div className="row">
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
                    </div>
                </div>
                

            </Container>
            <Footers />
        </Fragment>
    )
}

export default DetailPageOverview;
