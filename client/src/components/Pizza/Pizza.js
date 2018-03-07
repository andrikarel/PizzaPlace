import React from 'react';
import  {PropTypes} from 'prop-types';
import {Link} from 'react-router-dom';

const Pizza = ({pizza}) => {
    const{id,name,description,price,image} = pizza;
    return(
        <Link to={`/menu/${id}`}>
            <div className="pizza-wrapper hvr-grow">
                
                <div className="pizza-image hvr-buzz">
                    <img src={image} alt=""/>
                </div>
                <div className="pizza-name">{name}</div>
                <div className="pizza-description">{description}</div>
                <div className="pizza-price">{price}</div>
            </div>
        </Link>

    )
};

Pizza.propTypes = {
    pizza:PropTypes.shape({
        name: PropTypes.string,
        description: PropTypes.string,
        price: PropTypes.number,
        image: PropTypes.string

    })
};

export default Pizza