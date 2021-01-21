import CartTypes from './cart.types'

const INITIAL_STATE = {
    cartItems: [],
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CartTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload],
            }
        case CartTypes.DELETE_ITEM:
            state.cartItems.splice(state.cartItems.indexOf(action.payload), 1)
            return {
                ...state,
                cartItems: [...state.cartItems],
            }

        default:
            return state
    }
}

export default cartReducer