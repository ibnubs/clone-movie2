import React, { Fragment } from 'react'

const CardList = () => {
    return (
        <Fragment>
            <div className="card">
                <img src="https://source.unsplash.com/random/100x100" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a longer card with </p>
                    </div>
            </div>
        </Fragment>
    )
}

export default CardList;
