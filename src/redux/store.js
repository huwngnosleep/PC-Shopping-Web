import { createStore, applyMiddleware } from 'redux'

import logger from 'redux-logger'

import rootReducer from './root-reducer'

const middleWares = [logger]

// nên để middleWares là một cái array để chỉnh sửa cho tiện
const store = createStore(rootReducer, applyMiddleware(...middleWares))

export default store