import React, { Fragment, useState, useEffect } from 'react';
import { Carousel,Row, Col } from 'react-bootstrap';
import {fetchMovie} from '../Services/index';



const SliderHome = () => {
    const [nowPlaying, setNowPlaying] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            setNowPlaying(await fetchMovie());
        };
        fetchApi();
    }, [])

    const movies = nowPlaying.slice(0, 5).map((item, index) => {
        return (
            <Carousel.Item>
                <div key={index}>
                <img 
                    style={{width:'100%', height:'60vh'}}
                    src={item.backPoster}
                    alt={item.title}
                />
                <Carousel.Caption>
                    <p className="h2">{item.title}</p>
                </Carousel.Caption>
                </div>
            </Carousel.Item>
        )
    })
    
    return (
        <Fragment>
            <Row className="mb-5">
                <Col>
                    <Carousel>
                        {movies}
                    </Carousel>
                </Col>
            </Row>
        </Fragment>
    );
}

export default SliderHome;




        // <Fragment>
        //     <Carousel className="carousel-fade">
        //         <Carousel.Item style={{height:'40vh'}}>
        //             <img
        //                 className="d-block w-100 "
        //                 src={require('../assets/images/fall-in-love.jpg')}
        //                 alt="First slide"
        //                 height="100%"
        //                 style={{objectFit: 'cover'}}

        //             />
        //         </Carousel.Item>
        //         <Carousel.Item style={{height:'40vh'}}>
        //             <img
        //                 className="d-block w-100"
        //                 src={require('../assets/images/pokemon.jpg')}
        //                 alt="Third slide"
        //                 height="100%"
        //                 style={{objectFit: 'cover'}}
        //             />
        //         </Carousel.Item>
        //         <Carousel.Item style={{height:'40vh'}}>
        //             <img
        //                 className="d-block w-100"
        //                 src={require('../assets/images/pokemonarceus.jpg')}
        //                 alt="Third slide"
        //                 height="100%"
        //                 style={{objectFit: 'cover'}}
        //             />
        //         </Carousel.Item>
        //     </Carousel>
        // </Fragment>