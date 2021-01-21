import React, {Component} from 'react'

import {Container, Row, Col} from 'reactstrap'

import { addItem } from '../redux/cart/cart.actions'

import { connect } from 'react-redux'
class DetailProduct extends Component {
  
  alert() {
    alert('Added new item to cart!')
  }
  render() {
    const {item} = this.props.location
    const { addItem } = this.props
    return(
      <Container className="pb-3">
        <Row>
          
          <Col sm="5" className="mt-2 d-flex flex-column justify-content-center">
            <img className="mw-100" src={item.img}/>
          </Col>
          <Col sm="4" className="mt-2 d-flex flex-column justify-content-center">
            <h2>{item.name}</h2>
            <p>{item.productor}</p>
            <h3>{item.price}</h3>
            
            <button onClick={() => addItem(item)} className="btn btn-block btn-primary">Add to cart</button>
          </Col>
          <Col sm="3" className="mt-2 d-flex flex-column justify-content-center">
            <ul className="list-group">
              <li className="border-left-0 list-group-item">3 years guarenteered</li>
              <li className="border-left-0 list-group-item">Repair at home</li>
              <li className="border-left-0 list-group-item">Arrival within 5 days</li>
              <li className="border-left-0 list-group-item">No ship cost</li>
              <li className="border-left-0 list-group-item">Free setup</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <ul className="list-group ml-3">Product detail information:
            {
              item.info.map(prop => <li style={{listStyle: "none"}}>{`- ${prop}`}</li>)
            }
          </ul>
        </Row>
      </Container>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (item) => dispatch(addItem(item))
  }
}

export default connect(null, mapDispatchToProps)(DetailProduct)