import React from "react";

import {Container, Row, Col} from 'reactstrap'

import { connect } from 'react-redux'

import { delItem } from '../redux/cart/cart.actions'

const Payment = ({ cartItems, delItem }) => {

    return(
        <Container className="mt-3">
            <Row>
                <Col sm="6">
                    <h2>Cart</h2>
                    { 
                        cartItems.length ? cartItems.map((item) => 
                            <Row class="card mb-5" style={{maxWidth: "540px"}}>
                                <div class="row border-bottom g-0">
                                    <div class="col">
                                        <img class="card border-0 mb-3" style={{width: "100%"}} src={item.img} />
                                    </div>
                                    <div class="col">
                                        <div class="card-body p-0">
                                            <h5 class="card-title">{item.name}</h5>
                                            <p class="card-text">{item.price}</p>
                                            <p class="card-text"><small class="text-muted">{item.productor}</small></p>
                                            <button onClick={() => delItem(item)}>X</button>
                                        </div>
                                    </div>
                                </div>
                            </Row> 
                        ) : <h5>You have no items in cart yet!</h5>
                    }
                    {
                        cartItems.length ? <p>{`TOTAL: ${cartItems.reduce((total, nextItem) => total + Number(nextItem.price.replace('$', '')), 0)}$`}</p>
                        : 
                        null
                    }
                </Col>
                <Col className="pb-3" sm="6">
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
                        <button class="btn btn-primary btn-block">Confirm</button>
                    </form>
                </Col>
            </Row>
        </Container>  
    )
}

const mapStateToProps = (state) => {
    return {
        cartItems: state.cart.cartItems
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      delItem: (item) => dispatch(delItem(item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Payment)

