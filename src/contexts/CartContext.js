import React, {Component} from 'react'

export const CartContext = React.createContext()

export default class extends Component {
    constructor() {
        super()
        this.state = {
            inCart: []
        }
    }

    addToCart(item) {
        this.setState({
            inCart: this.state.inCart.concat(item)
        })
    }
    delCartItem(item) {
        let inCart = this.state.inCart
        let index = inCart.indexOf(item)
        inCart.splice(index, 1)
        this.setState({
            inCart
        })
    }
    render() {
        return(
            <CartContext.Provider value={{
                inCart: this.state.inCart,
                addToCart: this.addToCart.bind(this),
                delCartItem: this.delCartItem.bind(this),
            }}>
                {this.props.children}
            </CartContext.Provider>
        )
    }
}