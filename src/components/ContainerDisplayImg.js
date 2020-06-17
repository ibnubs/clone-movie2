import React, { Fragment, useState, useEffect } from 'react';
import { Jumbotron, Container, Button, Col, Modal, Row } from 'react-bootstrap';
import {fetchMovieDetail, fetchMovieVideos} from '../Services/index';
import ReactStars from 'react-star-rating-component';
import ReactPlayer from 'react-player';


const ContainerDisplayImg = ({ match }) => {
    let params = match.params;
    const [isOpen, setIsOpen] = useState(false);
    const [detail, setDetail] = useState([]);
    const [video, setVideo] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            setDetail(await fetchMovieDetail(params.id));
            setVideo(await fetchMovieVideos(params.id));
        };
        fetchApi();
    }, [params.id]);

    const MoviePlayerModal = (props) => {
        const youtubeUrl = 'https://www.youtube.com/watch?v=';
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title
                        id="contained-modal-title-vcenter"
                        style={{ color: '#000000', fontWeight: 'bolder' }}
                    >
                        {detail.title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ backgroundColor: '#000000' }}>
                    <ReactPlayer
                        className="container-fluid"
                        url={youtubeUrl + video.key}
                        playing
                        width="100%"
                    >

                    </ReactPlayer>
                </Modal.Body>
            </Modal>
        )
    }


    return (
        <Fragment>
            <Jumbotron fluid >
                <Row>
                    <MoviePlayerModal
                        show={isOpen}
                        onHide={() => {
                            setIsOpen(false);
                        }}
                    ></MoviePlayerModal>
                    <img className="img-fluid" src={`http://image.tmdb.org/t/p/original/${detail.backdrop_path}`} alt={detail.title}
                        style={{ width: '100%', height: '60vh' }}
                    />

                    <Container style={{ marginTop: '-510px', paddingTop: '100px', color: '#ffff', fontWeight: 800, background: 'rgb(0, 0, 0) rgba(0, 0, 0, 0.7)' }} >
                        <h1 > {detail.title} </h1>
                        <h5> {detail.overview} </h5>
                        <Row className="mx-1">
                            <ReactStars
                                value={detail.vote_average}
                                count={detail.vote_average}
                                size={30}
                                emptyStarColor={"#ffb400"}
                            >
                            </ReactStars>
                            <p className="mt-2 ml-3" style={{ fontSize: '1.4rem' }}>  {detail.vote_count} reviews</p>
                        </Row>
                        <Col >
                            <Button variant="outline-danger" className="mr-2"
                                onClick={() => setIsOpen(true)}
                            >Watch Trailer</Button>
                            <Button variant="outline-danger">Add to Watchlist</Button>
                        </Col>
                    </Container>
                </Row>
            </Jumbotron>
        </Fragment>
    );
}

export default ContainerDisplayImg;
