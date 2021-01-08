import { Component } from "react";

import {Container, Row, Col} from 'reactstrap'

import {CartContext} from '../contexts/CartContext'

export default class Payment extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <Container>
                
                <Row>
                    <Col sm="6">
                        <h2>Cart</h2>
                        <CartContext.Consumer>
                            {({inCart, delCartItem}) => inCart.map(
                                (item) => 
                                    <Row class="card mb-5" style={{maxWidth: "540px"}}>
                                        <div class="row border-bottom g-0">
                                            <div class="col">
                                                <img class="card border-0 mb-3" style={{width: "100%", maxWidth: "200px"}} src={item.img} />
                                            </div>
                                            <div class="col">
                                                <div class="card-body">
                                                    <h5 class="card-title">{item.name}</h5>
                                                    <p class="card-text">{item.price}</p>
                                                    <p class="card-text"><small class="text-muted">{item.productor}</small></p>
                                                    <button onClick={() => delCartItem(item)} class="btn btn-danger">Remove<ion-icon name="trash-outline"></ion-icon></button>
                                                </div>
                                            </div>
                                        </div>
                                    </Row> 
                            )}
                        </CartContext.Consumer>
                    </Col>
                    <Col sm="6">
                        <h2>Payment</h2>
                        <form>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Name</label>
                                <input required type="text" class="form-control" id="exampleFormControlInput1" placeholder="Your full name" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Phone number</label>
                                <input required type="number" class="form-control" id="exampleFormControlInput1" placeholder="0123456789" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Arrival Address</label>
                                <input required type="text" class="form-control" id="exampleFormControlInput1" placeholder="xxx Street - Ha Noi - Viet Nam" />
                            </div>  
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input required type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Note</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Addition requirement" rows="3"></textarea>
                            </div>
                            <button class="btn btn-primary">Confirm</button>
                        </form>
                    </Col>
                </Row>
            </Container>  
        ) 
    }
}
