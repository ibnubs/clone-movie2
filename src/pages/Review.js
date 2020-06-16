import React, { Fragment, useState, useEffect } from 'react'
// import HeaderProfile from '../components/HeaderProfile';
// import ContainerDisplayImg from '../components/ContainerDisplayImg';
import { Container, Button, Row, Col, Modal, Jumbotron, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../assets/style/review.scss';
import ReviewCard from '../components/ReviewCard';
import { fetchMovieDetail, fetchMovieVideos } from '../Services/index';
import ReactStars from 'react-star-rating-component';
import ReactPlayer from 'react-player';
import HeaderProfile from '../components/HeaderProfile';

const Review = ({ match }) => {
    // return (
    //     <Fragment>
    //         <Container>
    //             <HeaderProfile />
    //         </Container>
    //         <ContainerDisplayImg />
    //         <Container>
    //             <div className="text-left mb-5 category">
    //                 <Link to="">
    //                     <Button variant="outline-danger" className="btn-review" >Overview</Button>
    //                 </Link>
    //                 <Link to="">
    //                     <Button variant="outline-danger" className="btn-review" >Characters</Button>
    //                 </Link>
    //                 <Link to="">
    //                     <Button variant="outline-danger" className="btn-review" >Review</Button>
    //                 </Link>
    //             </div>
    //             <Row>
    //                 <Col sm={1} style={{ marginLeft: '20px' }}>
    //                     <div className="dummy-pic text-center" >PIC</div>
    //                 </Col>
    //                 <Col>
    //                     <p className="font-weight-bold">Text Nama Review</p>
    //                     <div style={{ marginTop: '-10px' }}>
    //                         <StarRating />
    //                     </div>
    //                 </Col>
    //             </Row>
    //             <Row style={{ paddingLeft: '8rem' }} className="mb-4">
    //                 <Form>
    //                     <Form.Group>
    //                         <Form.Control placeholder="Leave a review..." as="textarea" rows="3" style={{ width: "70vw" }}></Form.Control>
    //                     </Form.Group>
    //                 </Form>
    //             </Row>
    //             <ReviewCard />
    //         </Container>
    //     </Fragment>
    // )


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
            <Container >
            <HeaderProfile />
            </Container>
            <Jumbotron fluid className="bg-jumbo" >
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

                    <Container style={{ marginTop: '-60vh', paddingTop: '10vh', color: '#ffff', fontWeight: 800, background: 'rgba(0, 0, 0, 0.7)' }} >
                        <h1 > {detail.title} </h1>
                        <h5> {detail.overview} </h5>
                        <Row className="mx-1">
                            <ReactStars
                                value={detail.vote_average}
                                starCount={detail.vote_average}
                                size={30}
                                emptyStarColor={"#ffb400"}
                            >
                            </ReactStars>
                            <p className=" ml-3" style={{ fontSize: '1.4rem' }}>  {detail.vote_count} reviews</p>
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

            <Container>
                <div className="text-left mb-5 category">
                    <Link to="#">
                        <Button variant="outline-danger" className="btn-review" >Overview</Button>
                    </Link>
                    <Link to={`/character/${detail.id}`}>
                        <Button variant="outline-danger" className="btn-review" >Characters</Button>
                    </Link>
                    <Link to={`/review/${detail.id}`}>
                        <Button variant="outline-danger" className="btn-review" >Review</Button>
                    </Link>
                </div>
                <p className="title-detail h4" >
                    <span>
                        Review
                    </span>
                </p>
                <Row>
                    <Col sm={1} style={{ marginLeft: '20px' }}>
                        <div className="dummy-pic text-center" >PIC</div>
                    </Col>
                    <Col>
                        <p className="font-weight-bold">Text Nama Review</p>
                        <div style={{ marginTop: '-10px' }}>
                            
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
