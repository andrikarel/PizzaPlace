import React from 'react';
import  {PropTypes} from 'prop-types';
import {Link} from 'react-router-dom';

const Offer = ({offer}) => {
    return(
        <Link to={`/offers/${offer.id}`}>
            <div className="pizza-wrapper hvr-grow">
                <div className="pizza-name">{offer.offer}</div>
                <div className="pizza-description">This offer is valid for {offer.validFor}</div>
                <div className="pizza-price">{offer.price}</div>
            </div>
        </Link>

    )
};

Offer.propTypes = {
    offer:PropTypes.shape({
        name: PropTypes.string,
        description: PropTypes.string,
        price: PropTypes.number,
        image: PropTypes.string

    })
};

export default Offer;