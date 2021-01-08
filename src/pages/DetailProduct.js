import React, {Component} from 'react'

import {Container, Row, Col} from 'reactstrap'

export default class DetailProduct extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    const item = this.props.location.state
    return(
      <Container>
        <Row>
          <Col sm="5" className="mt-2 d-flex flex-column justify-content-center">
            <img className="mw-100" src={item.img}/>
          </Col>
          <Col sm="4" className="mt-2 d-flex flex-column justify-content-center">
            <h2>{item.name}</h2>
            <p>{item.productor}</p>
            <h3>{item.price}</h3>
            <button className="btn btn-block btn-primary">Add to cart</button>            
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
          <ul className="list-group ml-3">
            {
              item.info.map(prop => <li style={{listStyle: "none"}}>{`- ${prop}`}</li>)
            }
          </ul>
        </Row>
      </Container>
    )
  }
}