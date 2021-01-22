import DataTypes from './data.types'

export const loadData = (data) => {
    return {
        type: DataTypes.LOAD_DATA,
        payload: data
    }
}