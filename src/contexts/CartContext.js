import React, {Component} from 'react'

export const CartContext = React.createContext()

export default class extends Component {
    constructor() {
        super()
        this.state = {
            inCart: []
        }
    }
    render() {
        return(
            <CartContext.Provider value={this.state}>
                {this.props.children}
            </CartContext.Provider>
        )
    }
}