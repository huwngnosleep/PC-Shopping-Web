import axios from 'axios';
import React, { Component } from 'react'

import {Link} from 'react-router-dom'

import { Container, Row, Col} from 'reactstrap'
import {
  Card, CardImg, CardBody, CardTitle,
} from 'reactstrap';

export default class ProductsCategories extends Component {
  constructor() {
    super();
    this.state = {
      categories: []
    }
  }
  componentDidMount() {
    axios.get('https://mg5em.sse.codesandbox.io/categories').then(res =>
      this.setState({
        categories: res.data
      })
    )
  }

  render() {
    return (
      <Container id="products-categories">
        <Row>
          {
            this.state.categories.map(item => (
              <Col className="mt-3" sm="4">
                <div>
                  <Link to={{pathname: "/products/", category: item.title, brand: ''}}>
                    <Card>
                      <CardBody>
                        <CardTitle className="p-0" tag="h5">{item.title}</CardTitle>
                      </CardBody>
                      <CardImg top className="img-responsive" width="100%" src={item.img}/>
                    </Card>
                  </Link>
                </div>
              </Col>
            ))
          }          
        </Row>
      </Container>
    )
  }
}