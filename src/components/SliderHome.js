import React, { Fragment } from 'react';
import { Carousel } from 'react-bootstrap';

const SliderHome = () => {
    return (
        <Fragment>
            <Carousel className="carousel-fade">
                <Carousel.Item style={{height:'40vh'}}>
                    <img
                        className="d-block w-100 "
                        src={require('../assets/images/fall-in-love.jpg')}
                        alt="First slide"
                        height="100%"
                        style={{objectFit: 'cover'}}

                    />
                </Carousel.Item>
                <Carousel.Item style={{height:'40vh'}}>
                    <img
                        className="d-block w-100"
                        src={require('../assets/images/pokemon.jpg')}
                        alt="Third slide"
                        height="100%"
                        style={{objectFit: 'cover'}}
                    />
                </Carousel.Item>
                <Carousel.Item style={{height:'40vh'}}>
                    <img
                        className="d-block w-100"
                        src={require('../assets/images/pokemonarceus.jpg')}
                        alt="Third slide"
                        height="100%"
                        style={{objectFit: 'cover'}}
                    />
                </Carousel.Item>
            </Carousel>
        </Fragment>
    );
}

export default SliderHome;
