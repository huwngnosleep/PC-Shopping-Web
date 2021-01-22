import { combineReducers } from 'redux'

import dataReducer from './data/data.reducer'
import cartReducer from './cart/cart.reducer'
import userReducer from './user/user.reducer'

export default combineReducers({
    data: dataReducer,
    user: userReducer,
    cart: cartReducer,
})