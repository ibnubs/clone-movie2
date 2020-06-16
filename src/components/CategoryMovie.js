import React, { Fragment, useState, useEffect } from 'react';
import { fetchGenre, fetchMovieByGenre } from '../Services/index';
import { Row, Col, Card, Button } from 'react-bootstrap';
import ReactStars from 'react-star-rating-component';
import '../index.css';
import { Link } from 'react-router-dom';

const CategoryMovie = () => {
    const [genres, setGenres] = useState([]);
    const [movieByGenre, setMovieByGenre] = useState([]);
    const [loadCard, setLoadCard] = useState(4);

    useEffect(() => {
        const fetchApi = async () => {
            setGenres(await fetchGenre());
            setMovieByGenre(await fetchMovieByGenre());
        };
        fetchApi();
    }, [])


    //event click genres
    const handleGenreClick = async (genre_id) => {
        setMovieByGenre(await fetchMovieByGenre(genre_id))
    }


    //loop genres
    const genrelist = genres.map((item, index) => {
        return (
            <li className="list-inline-item" key={index}>
                <button
                    type="button"
                    className="btn btn-outline-danger"
                    onClick={() => { handleGenreClick(item.id) }}
                >
                    {item.name}
                </button>
            </li>
        )
    })

    //loop movielist by genre
    const movielist = movieByGenre.slice(0,loadCard).map((item, index) => {

        return (
            <Col md={3} sm={6} key={index}>
                <Card className='mt-4'>
                    <Link to={`/movie/${item.id}`}>
                        <img
                            className="img-fluid"
                            src={item.poster}
                            alt={item.title}
                        />
                    </Link>
                    <Card.Body className="text-center">
                        <Card.Title> {item.title} </Card.Title>
                        <Card.Text> {item.rating} </Card.Text>
                        <ReactStars
                            value={item.rating}
                            starCount={item.rating}
                            size={20}
                            emptyStarColor={"#ffb400"}
                        >
                        </ReactStars>
                    </Card.Body>
                </Card>
            </Col>
        )
    })

    return (
        <Fragment>
            <Row>
                <Col>
                    <ul className="list-inline">
                        {genrelist}
                    </ul>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col>
                    <div className="float-right">
                        <i className="far fa-arrow-alt-circle-right"></i>
                    </div>
                </Col>
            </Row>
            <Row className="mt-3">
                {movielist}
            </Row>

            <div className=" d-flex justify-content-center mt-3 mb-4">
                <Button
                    onClick={()=>setLoadCard(loadCard+4)}
                >Loadmore</Button>
            </div>
        </Fragment>
    );
}

export default CategoryMovie;
