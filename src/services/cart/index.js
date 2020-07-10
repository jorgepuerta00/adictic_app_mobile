import { types } from './action'
import { omit } from 'lodash'

// ************************** STATE ************************** //
const initialState = {
    quantityById: {}
}

// ************************** REDUCER ************************** //
export default function cart(state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case types.ADD: {
            let { id, name, image, price, discount, type, description, color, size } = payload.product
            let { quantity } = payload
            if (state.quantityById[id]) {
                return {
                    ...state,
                    quantityById: {
                        ...state.quantityById,
                        [id]: {
                            id, 
                            name, 
                            image, 
                            price, 
                            discount, 
                            type, 
                            description, 
                            color, 
                            size,
                            quantity: state.quantityById[id].quantity + quantity,
                        }
                    }
                }
            }
            return {
                ...state,
                quantityById: {
                    ...state.quantityById,
                    [id]: {
                        id, 
                        name, 
                        image, 
                        price, 
                        discount, 
                        type, 
                        description, 
                        color, 
                        size,
                        quantity
                    }
                }
            }
        }
        case types.UPDATE: {
            let { id, name, image, price, discount, type, description, color, size } = payload.product
            let { quantity } = payload
            if (state.quantityById[id]) {
                return {
                    ...state,
                    quantityById: {
                        ...state.quantityById,
                        [id]: {
                            id, 
                            name, 
                            image, 
                            price, 
                            discount, 
                            type, 
                            description, 
                            color, 
                            size,
                            quantity: quantity
                        }
                    }
                }
            }
            return {
                ...state,
                quantityById: {
                    ...state.quantityById,
                    [id]: {
                        id, 
                        name, 
                        image, 
                        price, 
                        discount, 
                        type, 
                        description, 
                        color, 
                        size,
                        quantity
                    }
                }
            }
        }
        case types.REMOVE: {
            let { id } = payload.product.product === undefined ? payload.product : payload.product.product
            const updateRemoved = omit(state.quantityById, id)
            return {
                ...state,
                quantityById: updateRemoved
            }
        }
        case types.INCREASE_QUANTITY: {
            let { quantity } = payload.item
            let { id, name, image, price, discount, type, description, color, size } = payload.item.product
            return {
                ...state,
                quantityById: {
                    ...state.quantityById,
                    [id]: {
                        id, 
                        name, 
                        image, 
                        price, 
                        discount, 
                        type, 
                        description, 
                        color, 
                        size,
                        quantity: quantity + 1
                    }
                }
            }
        }
        case types.DECREASE_QUANTITY: {
            let { quantity } = payload.item
            let { id, name, image, price, discount, type, description, color, size } = payload.item.product
            if (state.quantityById[id] && quantity === 1) {
                const updateRemoved = omit(state.quantityById, id)
                return {
                    ...state,
                    quantityById: updateRemoved
                }
            }
            return {
                ...state,
                quantityById: {
                    ...state.quantityById,
                    [id]: {
                        id, 
                        name, 
                        image, 
                        price, 
                        discount, 
                        type, 
                        description, 
                        color, 
                        size,
                        quantity: quantity - 1
                    }
                }
            }
        }
        case types.RESET: {
            const updateReseted = {}
            return {
                ...state,
                quantityById: updateReseted
            }
        }
        case types.SET: {
            return {
                ...state,
                ...payload
            }
        }
        default: return state;
    }

}
