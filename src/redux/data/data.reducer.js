import DataTypes from './data.types'

const INITIAL_STATE = {}

const dataReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case DataTypes.LOAD_DATA:
            return {
                ...state,
                data: action.payload,
            }
        
        default:
            return state
    }
}

export default dataReducer