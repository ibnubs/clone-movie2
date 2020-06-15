import React, { Fragment } from 'react'

const CardList = ({item, title, poster, genre}) => {
    return (
        <Fragment>
            <div className="card" key={item.id}>
                <img src={poster} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title} </h5>
                        <p className="card-text">{genre} </p>
                    </div>
            </div>
        </Fragment>
    )
}

export default CardList;
