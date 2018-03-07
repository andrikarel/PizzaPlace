import { GET_ALL_PIZZAS,GET_PIZZA_DETAILS} from '../constants/pizzaConstants';


const pizzaReducer = (state = [],action) => {
    switch(action.type) {
        case GET_ALL_PIZZAS: return action.payload;
        case GET_PIZZA_DETAILS: return action.payload;
        default: return state;
    }
};

export default pizzaReducer;