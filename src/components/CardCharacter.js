import React, { Fragment } from 'react';
import {Card, CardDeck} from 'react-bootstrap';

const CardCharacter = () => {
    return (
        <Fragment>
            <CardDeck>
            {[...Array(5)].map(()=> {
                return(
                    
                        <Card style={{width:'14rem', marginBottom:'1rem'}} >
                            <Card.Img variant="top" src="https://source.unsplash.com/random/" style={{height:'10rem'}} />
                            <Card.Body>
                                <Card.Title className="text-center">
                                    Dummy Name
                                </Card.Title>
                            </Card.Body>
                        </Card>    
                    
                )
            })}
            </CardDeck>
        </Fragment>
    );
}

export default CardCharacter;
