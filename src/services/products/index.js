import { types } from './action'

const initialState = {
    data: [],
    pending: false,
    error: false
}

export default function productsReducer(state = initialState, action) {
    switch(action.type) {
        case types.FETCH_PRODUCTS_PENDING: 
            return {
                ...state,
                pending: true,
                error: false,
                data: []
            }
        case types.FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                pending: false,
                data: action.payload,
                error: false
            }
        case types.FETCH_PRODUCTS_ERROR:
            return {
                ...state,
                pending: false,
                error: true,
                data: action.error
            }
        default: 
            return state;
    }
}

export const getProducts = state => state.data;
export const getProductsPending = state => state.pending;
export const getProductsError = state => state.error;
