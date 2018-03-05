import React from 'react';
import NavBarLinkWrapper from '../NavBarLinkWrapper/NavBarLinkWrapper';
import {NavLink} from 'react-router-dom';

import {PropTypes} from 'prop-types';

const NavigationBar = ({logoImageUrl}) => {
    return(
        <nav className="navbar">
            <div className="nav-logo">
                <img src={logoImageUrl}></img>
                <h3>Jason Statham Pizza</h3>
            </div>
            <NavBarLinkWrapper>
                <NavLink
                    to="/menu"
                    activeClassName="active"
                    className="nav-link">Menu</NavLink>
                <NavLink
                    to="/offers"
                    activeClassName="active"
                    className="nav-link">Offers</NavLink>
                <NavLink
                    to="/about"
                    activeClassName="active"
                    className="nav-link">About us</NavLink>
                <NavLink
                    to="/cart"
                    activeClassName="active"
                    className="nav-link">Cart</NavLink>
            </NavBarLinkWrapper>
        </nav>
    );
};

NavigationBar.propTypes = {
    logoImageUrl: PropTypes.string.isRequired
};

export default NavigationBar;