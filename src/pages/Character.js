import React, { Fragment, useEffect, useState } from 'react';
import {Container,  Button, Modal, Jumbotron, Col, Row} from 'react-bootstrap';
// import Navigation from '../components/Navbar';
import {fetchMovieDetail, fetchMovieVideos, fetchCasts} from '../Services/index';
import ReactStars from 'react-star-rating-component';
import ReactPlayer from 'react-player';
// import ContainerDisplayImg from '../components/ContainerDisplayImg';
import {Link} from 'react-router-dom';
import HeaderProfile from '../components/HeaderProfile';

const Character = ({match}) => {
    let params = match.params;
    const [isOpen, setIsOpen] = useState(false);
    const [detail, setDetail] = useState([]);
    const [video, setVideo] = useState([]);
    const [casts,setCasts] = useState([]);
    

    useEffect(() => {
        const fetchApi = async () => {
            setDetail(await fetchMovieDetail(params.id));
            setVideo(await fetchMovieVideos(params.id));
            setCasts(await fetchCasts(params.id));
        };
        fetchApi();
    }, [params.id]);
    
    const MoviePlayerModal = (props) => {
        const youtubeUrl = 'https://www.youtube.com/watch?v=';
        return(
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title
                        id="contained-modal-title-vcenter"
                        style={{color:'#000000', fontWeight: 'bolder'}}
                    >
                        {detail.title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{backgroundColor:'#000000'}}>
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

    const castList = casts.map ((c,i)=>{
        return(
            <Col md={3} className="text-center" key={i}>
                <img 
                    rounded
                    className="img-fluid mx-auto d-block"
                    src={c.img}
                    alt={c.name}
                />
                <p className="font-weight-bold mt-2"> {c.name} </p>
                <p
                    className="font-weight-light text-center mb-3"
                    style={{color:"#5a606b", marginTop:"-5px"}}
                > {c.character} </p>
            </Col>
        )
    })

    return (
        <Fragment>
            <Container>
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

                    <Container style={{ marginTop: '-60vh', paddingTop:'10vh',  color: '#ffff', fontWeight: 800, background: 'rgba(0, 0, 0, 0.7)' }} >
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
                            <Button variant="danger" className="mr-2"
                                onClick={() => setIsOpen(true)}
                            >Watch Trailer</Button>
                            {/* <Button variant="outline-danger">Add to Watchlist</Button> */}
                        </Col>
                    </Container>
                </Row>
            </Jumbotron>

            <Container>
                <div className="text-left mb-5 category">
                    <Link to={`/movie/${detail.id}`}>
                        <Button variant="outline-danger" className="btn-review" >Overview</Button>
                    </Link>
                    <Link to={`/character/${detail.id}`}>
                        <Button variant="outline-danger" className="btn-review" >Cast</Button>
                    </Link>
                    <Link to={`/review/${detail.id}`}>
                        <Button variant="outline-danger" className="btn-review" >Review</Button>
                    </Link>
                </div>
                <p className="title-detail h4" >
                    <span>
                        Cast
                    </span>                    
                </p>
                <Row className="mt-3">
                        {castList}
                </Row>
            </Container>
        </Fragment>
    )




}

export default Character;
