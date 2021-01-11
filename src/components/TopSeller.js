import React, { Component } from 'react'

import { Container, Row, Col,Card, CardImg, CardText, CardBody,
  CardTitle, Pagination, PaginationItem, PaginationLink } from 'reactstrap'

import {Link} from 'react-router-dom'  
import axios from 'axios';
export default class TopSeller extends Component {
  constructor() {
    super();
    this.state = {
      page: 0,
      popularBrands: [],
      bestSellers: [],
    }
  }
  componentDidMount() {
    axios.get('https://mg5em.sse.codesandbox.io/popularBrands').then(res => 
      this.setState({
        popularBrands: res.data
      })
    )
    axios.get('https://mg5em.sse.codesandbox.io/bestSellers').then(res =>
      this.setState({
        bestSellers: res.data
      })
    )
  }

  leftArrowClick() {
    let {page} = this.state
    if(page > 0) {
      this.setState({page: this.state.page - 1})
    }
  }
  rightArrowClick() {
    let {page, bestSellers} = this.state
    if(page <= bestSellers.length - 4) {
      this.setState({page: this.state.page + 1})
    }
  }
  render() {
    let {page, bestSellers} = this.state
    let bestSellersVisible = [...bestSellers].splice(page, 4)
    return (
      <div>
        <Container className="popular-brands mt-5">
          <h2 className="mb-3">Popular Brands</h2>
          <Row>
            {
              this.state.popularBrands.map(item => (
                <Col sm="3">
                  <Link to={{pathname: "/products", category: '', brand: item.name}}>
                    <Card className="text-center">
                      <CardImg top width="100%" src={item.img}/>
                      <CardBody>
                        <CardTitle style={{maxHeight: "10px"}} tag="h5">{item.name}</CardTitle>
                      </CardBody>
                    </Card>
                  </Link>
                </Col>
              ))
            }
          </Row>
        </Container>
        <Row className="top-sellers p-5">
          <h2 className="m-3">Top Sellars</h2>
          <Row className="text-center">
            {
              bestSellersVisible.map(item => (
                <Col sm="3">
                  <Link to={{pathname: '/detail-product', item}}>
                    <Card className="text-center h-100">
                        <CardImg top width="100%" src={item.img}/>
                        <CardBody>
                          <CardTitle tag="h5">{item.name}</CardTitle>
                          <CardText className="m-0">{item.price}</CardText>
                          <CardText>{item.productor}</CardText>
                        </CardBody>
                    </Card>
                  </Link>
                </Col>
              ))
            }
          </Row>
          <Row className="pagination position-relative p-3 mt-3 m-auto">
            <div class="position-absolute d-flex bottom-0 end-0">
              <button className="btn btn-secondary" onClick={this.leftArrowClick.bind(this)}>{'<'}</button>
              <b className="btn btn-secondary">{this.state.page + 1}</b>
              <button className="btn btn-secondary" onClick={this.rightArrowClick.bind(this)}>{'>'}</button>
            </div>
          </Row>
        </Row>
      </div>

    )
  }
}