import React, { Fragment } from 'react';
import {Row, Col} from 'react-bootstrap';

const ReviewCard = () => {
    return (
        <Fragment>

            {[...Array(5)].map(()=> {
                return(
                <Row className="mb-2">
                    <Col sm={1} style={{marginLeft:'20px'}}>
                        <div className="dummy-pic text-center" >PIC</div>
                    </Col>
                    <Col>
                        <Row style={{marginBottom:'-10px'}}>
                            <p className="font-weight-bold">
                                Nama Reviwer Dummy
                            </p>
                        </Row>
                        <Row>
                            <p>
                                Komentar reviewr dummy adalah film bagus dan lain lain lain
                            </p>
                        </Row>
                    </Col>
                </Row>
                )
            })}
            
        </Fragment>
    );
}

export default ReviewCard;
