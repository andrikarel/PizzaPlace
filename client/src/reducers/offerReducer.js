import { GET_ALL_OFFERS,GET_OFFER_DETAILS } from '../constants/pizzaConstants';

const offerReducer = (state = [],action) => {
    switch(action.type) {
        case GET_ALL_OFFERS: return action.payload;
        case GET_OFFER_DETAILS: return action.payload;
        default: return state;
    }
};

export default offerReducer;