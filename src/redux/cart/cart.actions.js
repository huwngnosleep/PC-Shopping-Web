import CartTypes from './cart.types'

export const addItem = (item) => {
    return {
        type: CartTypes.ADD_ITEM,
        payload: item,
    }   
}

export const delItem = (item) => {
    return {
        type: CartTypes.DELETE_ITEM,
        payload: item,
    }
}