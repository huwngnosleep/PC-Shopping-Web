import React, { Component, useState } from "react";
import { Link } from 'react-router-dom'

import axios from 'axios'

import {
  Carousel, CarouselItem, CarouselControl,
  Card, CardImg, CardBody, CardTitle, CardText,
  Container, Row, Col,
} from "reactstrap";

const CarouselIntro = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const items = [
    {
      src:
        "https://s.alicdn.com/@banner/montage/184481-11d09e5a2a8fb530c67d812c2dd24490.jpg?content=%7B%2211%22%3A%7B%22attrs%22%3A%7B%22mini%22%3Afalse%2C%22value%22%3A%22https%3A%2F%2Fs.alicdn.com%2F%40img%2Ftfs%2FTB1QCSK4VP7gK0jSZFjXXc5aXXa-990-400.png%22%2C%22demo%22%3A%22%22%7D%7D%2C%2212%22%3A%7B%22attrs%22%3A%7B%22verticalAlign%22%3A%22top%22%2C%22mini%22%3Afalse%2C%22fontSize%22%3A%2220%22%2C%22lineHeight%22%3A%2224%22%2C%22align%22%3A%22left%22%2C%22value%22%3A%22Industrial++Manufacturing%2C+Home%2C+and+Lifestyle%22%7D%7D%2C%2216%22%3A%7B%22attrs%22%3A%7B%22verticalAlign%22%3A%22top%22%2C%22mini%22%3Afalse%2C%22fontSize%22%3A%2230%22%2C%22lineHeight%22%3A%2236%22%2C%22align%22%3A%22left%22%2C%22value%22%3A%22Shenzhen+Online+Mega+Expo%22%7D%7D%2C%2220%22%3A%7B%22attrs%22%3A%7B%22mini%22%3Afalse%2C%22value%22%3A%22https%3A%2F%2Fs.alicdn.com%2F%40img%2Ftfs%2FTB1MP5M4EH1gK0jSZSyXXXtlpXa-251-38.png%22%7D%7D%2C%2210%22%3A%7B%22attrs%22%3A%7B%22mini%22%3Afalse%2C%22value%22%3A%22https%3A%2F%2Fs.alicdn.com%2F%40sc01%2Fkf%2FHb60cbcb33fa34c708a96cafee7e7c651j.jpg_300x300.jpg%22%7D%7D%7D&channel=25",
    },
    {
      src:
        "https://s.alicdn.com/@banner/montage/184481-7614b8e019cc3c8141552f99500e1764.jpg?content=%7B%2211%22%3A%7B%22attrs%22%3A%7B%22mini%22%3Afalse%2C%22value%22%3A%22https%3A%2F%2Fs.alicdn.com%2F%40img%2Fimgextra%2Fi1%2FO1CN01ykVz2D27XejiEidA7_%21%216000000007807-2-tps-990-400.png%22%2C%22demo%22%3A%22%22%7D%7D%2C%2212%22%3A%7B%22attrs%22%3A%7B%22verticalAlign%22%3A%22top%22%2C%22mini%22%3Afalse%2C%22fontSize%22%3A%2220%22%2C%22lineHeight%22%3A%2224%22%2C%22align%22%3A%22left%22%2C%22value%22%3A%222021+Consumer+Electronics+%26+Home+Appliances%22%7D%7D%2C%2216%22%3A%7B%22attrs%22%3A%7B%22verticalAlign%22%3A%22top%22%2C%22mini%22%3Afalse%2C%22fontSize%22%3A%2230%22%2C%22lineHeight%22%3A%2236%22%2C%22align%22%3A%22left%22%2C%22value%22%3A%22Electronics+Online+Trade+Show%22%7D%7D%2C%2220%22%3A%7B%22attrs%22%3A%7B%22mini%22%3Afalse%2C%22value%22%3A%22https%3A%2F%2Fs.alicdn.com%2F%40img%2Ftfs%2FTB1MP5M4EH1gK0jSZSyXXXtlpXa-251-38.png%22%7D%7D%2C%2210%22%3A%7B%22attrs%22%3A%7B%22mini%22%3Afalse%2C%22value%22%3A%22https%3A%2F%2Fs.alicdn.com%2F%40sc01%2Fkf%2FH6909447abab148938b9cc0db65fb2969C.jpg_300x300.jpg%22%7D%7D%7D&channel=25",
    },
    {
      src:
        "https://img.alicdn.com/tfs/TB1e.XyReL2gK0jSZFmXXc7iXXa-990-400.png",
    }
  ];
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem className="text-center"
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img className="mw-100" src={item.src} alt={item.altText} />
      </CarouselItem>
    );
  });

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
};

class ProductsCategories extends Component {
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
            this.state.categories.map((item, index) => (
              <Col key={index} className="mt-3" sm="4">
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

class BestSeller extends Component {
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
              this.state.popularBrands.map((item, index) => (
                <Col key={index} sm="3">
                  <Link to={{pathname: "/products", category: '', brand: item.name}}>
                    <Card className="text-center">
                      <CardImg Best width="100%" src={item.img}/>
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
              bestSellersVisible.map((item, index) => (
                <Col key={index} sm="3">
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

const Home = () => {
  return (
    <div>
      <CarouselIntro/>
      <ProductsCategories/>
      <BestSeller/>
    </div>
  )
};

export default Home
