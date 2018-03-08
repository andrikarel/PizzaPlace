
import {GET_ALL_PIZZAS,GET_PIZZA_DETAILS, GET_ALL_OFFERS,GET_OFFER_DETAILS} from '../constants/pizzaConstants';
import fetch from 'isomorphic-fetch';
import { LOAD_CART, SAVE_CART, ADD_TO_CART,GET_CART, CLEAR_CART } from '../constants/cartConstants';
const myStorage = window.localStorage;


export const getAllPizzas = () => {
    return dispatch => fetch('http://localhost:3500/api/pizzas').then(json => json.json()).then(data => dispatch(getAllPizzasSuccess(data)));
};

const getAllPizzasSuccess = (pizzas) => {
    return {
        type: GET_ALL_PIZZAS,
        payload: pizzas
    }
}

export const getPizzaDetails = (id) => {
    return dispatch => fetch(`http://localhost:3500/api/pizzas/${id}`).then(json => json.json()).then(data => dispatch(getPizzaDetailsSuccess(data)));
};

const getPizzaDetailsSuccess = (pizza) => {
    return {
        type: GET_PIZZA_DETAILS,
        payload: [pizza]
    }
}

export const getAllOffers = () => {
    return dispatch => fetch('http://localhost:3500/api/offers').then(json => json.json()).then(data => dispatch(getAllOffersSuccess(data)));
};

const getAllOffersSuccess = (offers) => {
    return {
        type: GET_ALL_OFFERS,
        payload: offers
    }
}

export const getOfferDetails = (id) => {
    return dispatch => fetch(`http://localhost:3500/api/offers/${id}`).then(json => json.json()).then(data => dispatch(getOfferDetailsSuccess(data)));
};

const getOfferDetailsSuccess = (offerDetails) => {
    return {
        type: GET_OFFER_DETAILS,
        payload: [offerDetails]
    }
}

export const loadCart = () => {
    return dispatch => dispatch(loadCartSuccess(JSON.parse(myStorage.getItem('cart'))));
}

const loadCartSuccess = (cart) => {
    return {
        type: LOAD_CART,
        payload: (cart === null ? [] : cart)
    }
}

export const saveCart = (cart) => {
    myStorage.setItem('cart', JSON.stringify(cart));
    return dispatch => dispatch(saveCartSuccess());
}

const saveCartSuccess = () => {
    return {
        type: SAVE_CART,
        payload: []
    }
}

export const addToCart = (cartItem) => {
    return dispatch => dispatch({
        type: ADD_TO_CART,
        payload: cartItem
    })
}

export const getCart = () => {
    return dispatch => dispatch({
        type: GET_CART,
        payload: []
    })
}

export const clearCart = () => {
    return dispatch({
        type: CLEAR_CART,
        payload: []
    })
}





