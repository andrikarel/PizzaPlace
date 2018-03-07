
import {GET_ALL_PIZZAS,GET_PIZZA_DETAILS, GET_ALL_OFFERS} from '../constants/pizzaConstants';
import fetch from 'isomorphic-fetch';
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




