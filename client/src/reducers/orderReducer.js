import {GET_ORDER_BY_TELEPHONE, ADD_ORDER} from '../constants/orderConstants';

const orderReducer = (state = [],action) => {
    switch(action.type) {
        case GET_ORDER_BY_TELEPHONE: return action.payload;
        case ADD_ORDER: return state;
        default: return state;
    }
}
export default orderReducer;