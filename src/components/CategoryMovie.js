import React, { Fragment, useState, useEffect } from 'react';
import { fetchGenre, fetchMovieByGenre } from '../Services/index';
import { Row, Col, Card, Pagination } from 'react-bootstrap';
import ReactStars from 'react-star-rating-component';
import '../index.css';
import { Link } from 'react-router-dom';

const CategoryMovie = () => {
    const [genres, setGenres] = useState([]);
    const [movieByGenre, setMovieByGenre] = useState([]);

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
    const movielist = movieByGenre.slice(0, 4).map((item, index) => {

        return (
            <Col md={3} sm={6} key={index}>
                <Card>
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

            <div className=" d-flex justify-content-center mt-3">
                    <Pagination >
                        <Pagination.First />
                        <Pagination.Prev />
                        <Pagination.Item>{1}</Pagination.Item>
                        <Pagination.Item>{2}</Pagination.Item>
                        <Pagination.Next />
                        <Pagination.Last />
                    </Pagination>
            </div>
        </Fragment>
    );
}

export default CategoryMovie;
