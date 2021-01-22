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
      categories: [
        {"title": "PC", "img": "https://phongvu.vn/media/wysiwyg/Hoang/uat/Case.jpg"},
        {"title": "Laptop", "img": "https://phongvu.vn/media/wysiwyg/Hoang/CateBL/T112020/Hp.jpg"},
        {"title": "Screen", "img": "https://phongvu.vn/media/wysiwyg/Hoang/CateBL/122020/unnamed.jpg"},
        {"title": "Accessory", "img": "https://lh3.googleusercontent.com/hOKClaqdNQtQfwuDFEWc5uOZvZRJtegRXu9H9X4PnWKEe0zU1rPQHJdKOaJq96rmCMG7XfsTayBHlyPaTyfp=w500-rw-rw"},
        {"title": "Gear", "img": "https://lh3.googleusercontent.com/11qFIIJkk4A9Oaa4DZCGHrKxmBJkE38B0JXwhp4JRAxwso4A4oEDhzPv1JYq8ZrCUs4qg8gNT7eKMCxWEoQ=w500-rw"},
        {"title": "Smart Watch", "img": "https://phongvu.vn/media/wysiwyg/Hoang/CateBL/122020/applese.jpg"}
      ],
    }
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
      popularBrands: [
        {"name": "MSI", "img": "https://lh3.googleusercontent.com/BdoRaaplaDNYSYRbYGinL43LaoWGrnansdiMDgawSksBM7NxlERC0SoVgvUh4H8rRnUCVHVNOxGvD7flVmNh=rw"},
        {"name": "HP", "img": "https://lh3.googleusercontent.com/sgQpul0smf3zXy4JOgD7OLzhadi_PbhS2FzocH5rv8rayiKyREPBgCAmlZE_YWuXTb6S1D5kExErV6PCOQ=rw"},
        {"name": "LG", "img": "https://lh3.googleusercontent.com/l2y1xkUV5p_aRjxyiqIQ9yyvj9vqukSKf2A2l3vd3tcnU9FefzFCScndOuyWil3w98rG618FEsz-t-moEYeI=rw"},
        {"name": "Lenovo", "img": "https://lh3.googleusercontent.com/w9mrW6_W7yVglkXPNlhRTXvOzl02Fazc1425qJBzrD2oxQ9Zk0Qwi7pOLjUr9ws8YUB5EC9ooNi8XXD94hc=rw"}
      ],
      bestSellers: [
        {
          "name": "Laptop ASUS VivoBook 14 A412FA-EK734T (14 FHD/i5-10210U/8GB/512GB SSD/Intel UHD/Win10/1.5kg)",
          "price": "$988.49",
          "category": "laptop",
          "productor": "Asus",
          "img": "https://lh3.googleusercontent.com/6tvXgbEGh1b43wyxkxoVfNZ3YfKYl9AQC61n_1P_zZ1QtrLZLdi-QFdbDdplZfUfPPdu0Ek47h3rjlOkdw=w500-rw",
          "info": ["CPU Intel Core i5-9400F (9M Cache, up to 4.10GHz)",  
            "Mainboard Gigabyte B360M Aorus Gaming 3",
            "RAM Gigabyte AORUS RGB 16GB (2x8) DDR4 3200 (GP-AR32C16S8K2HU416R)",
            "Card Gigabyte GeForce GTX 1660Ti OC 6G GDDR6 (GV-N166TOC-6GD)",
            "SSD Gigabyte 2.5 120GB SATA 6Gb/s (GP-GSTFS31120GNTD)",
            "Power Gigabyte 500W (GP-PB500)",
            "Case Gigabyte AORUS AC300W LITE",
            "Quạt CPU Gigabyte Aorus ATC700"
          ]
        }, {
          "name": "Laptop Dell G3 15 3590-N5I5518W (15 FHD/i5-9300H/8GB/512GB SSD/GTX 1650/Win10/2.3kg)",
          "price": "$567.81",
          "category": "laptop",
          "productor": "Asus",
          "img": "https://lh3.googleusercontent.com/H44s7IPyy-jSqjdujA89L5Al0ajMb43PpCHs1AzboIK_KueRRX_DJVVc4b8bfzaCI8Utux-wHHCiMkvXJqo=w500-rw",
          "info": ["CPU Intel Core i5-9400F (9M Cache, up to 4.10GHz)",  
            "Mainboard Gigabyte B360M Aorus Gaming 3",
            "RAM Gigabyte AORUS RGB 16GB (2x8) DDR4 3200 (GP-AR32C16S8K2HU416R)",
            "Card Gigabyte GeForce GTX 1660Ti OC 6G GDDR6 (GV-N166TOC-6GD)",
            "SSD Gigabyte 2.5 120GB SATA 6Gb/s (GP-GSTFS31120GNTD)",
            "Power Gigabyte 500W (GP-PB500)",
            "Case Gigabyte AORUS AC300W LITE",
            "Quạt CPU Gigabyte Aorus ATC700"
          ]
        }, {
          "name": "Laptop HP 15s-fq1022TU (8VY75PA) (15 FHD/i7-1065G7/8GB/512GB SSD/Intel UHD/Win10/1.7kg)",
          "price": "$153.51",
          "category": "laptop",
          "productor": "HP",
          "img": "https://lh3.googleusercontent.com/ENWQOMkH5y5_BavnmrLQcrdu8pYLGd57H9upthP1SXHYEfgoa7YQtfMsDUzk6nYe9LPwTImHVRUXZQBStk8=w500-rw",
          "info": ["CPU Intel Core i5-9400F (9M Cache, up to 4.10GHz)",  
            "Mainboard Gigabyte B360M Aorus Gaming 3",
            "RAM Gigabyte AORUS RGB 16GB (2x8) DDR4 3200 (GP-AR32C16S8K2HU416R)",
            "Card Gigabyte GeForce GTX 1660Ti OC 6G GDDR6 (GV-N166TOC-6GD)",
            "SSD Gigabyte 2.5 120GB SATA 6Gb/s (GP-GSTFS31120GNTD)",
            "Power Gigabyte 500W (GP-PB500)",
            "Case Gigabyte AORUS AC300W LITE",
            "Quạt CPU Gigabyte Aorus ATC700"
          ]
        }, {
          "name": "CPU Intel Core i5-9400F (6C/6T, 2.9 - 4.1 GHz, 9MB) - LGA 1151-v2",
          "price": "$199.53",
          "category": "accessory",
          "productor": "Intel",
          "img": "https://lh3.googleusercontent.com/WkEFbZM02MrWi2xg_oYUV9wcU24tQoRwRaT4nZmB6Jen1HLD23PZhqkAed_eturDck_kstljO3B7l9H3fjaY=w500-rw",
          "info": ["CPU Intel Core i5-9400F (9M Cache, up to 4.10GHz)",  
            "Mainboard Gigabyte B360M Aorus Gaming 3",
            "RAM Gigabyte AORUS RGB 16GB (2x8) DDR4 3200 (GP-AR32C16S8K2HU416R)",
            "Card Gigabyte GeForce GTX 1660Ti OC 6G GDDR6 (GV-N166TOC-6GD)",
            "SSD Gigabyte 2.5 120GB SATA 6Gb/s (GP-GSTFS31120GNTD)",
            "Power Gigabyte 500W (GP-PB500)",
            "Case Gigabyte AORUS AC300W LITE",
            "Quạt CPU Gigabyte Aorus ATC700"
          ]
        }, {
          "name": "Card MSI GeForce GTX 1050Ti 4GB GDDR5 OCV1 (GTX-1050-Ti-4GT-OCV1)",
          "price": "$630.61",
          "category": "accessory",
          "productor": "MSI",
          "img": "https://lh3.googleusercontent.com/osxjiLndX72N5TlsaE5VC5jkOx4Oa0ZtPARtPU1KWqNMzY_6h-jWVSJUur881SQxqInijzjRBxZaZtYXEBiV0MQGRx4P2VCH=w500-rw",
          "info": ["CPU Intel Core i5-9400F (9M Cache, up to 4.10GHz)",  
            "Mainboard Gigabyte B360M Aorus Gaming 3",
            "RAM Gigabyte AORUS RGB 16GB (2x8) DDR4 3200 (GP-AR32C16S8K2HU416R)",
            "Card Gigabyte GeForce GTX 1660Ti OC 6G GDDR6 (GV-N166TOC-6GD)",
            "SSD Gigabyte 2.5 120GB SATA 6Gb/s (GP-GSTFS31120GNTD)",
            "Power Gigabyte 500W (GP-PB500)",
            "Case Gigabyte AORUS AC300W LITE",
            "Quạt CPU Gigabyte Aorus ATC700"
          ]
        }, {
          "name": "Laptop ASUS TUF Gaming FX505DD-AL186T (15 FHD/R5-3550H/8GB/512GB SSD/GTX 1050/Win10/2.2 kg)",
          "price": "$444.81",
          "category": "laptop",
          "productor": "Asus",
          "img": "https://lh3.googleusercontent.com/LS1RIZ19enH0xMwF7L4x3h3zVK7duUueQjjUZb-7sRc3moNN4v3GmLPDlYr0v83a2jvUZczB-VkK-w_cAS4=w500-rw",
          "info": ["CPU Intel Core i5-9400F (9M Cache, up to 4.10GHz)",  
            "Mainboard Gigabyte B360M Aorus Gaming 3",
            "RAM Gigabyte AORUS RGB 16GB (2x8) DDR4 3200 (GP-AR32C16S8K2HU416R)",
            "Card Gigabyte GeForce GTX 1660Ti OC 6G GDDR6 (GV-N166TOC-6GD)",
            "SSD Gigabyte 2.5 120GB SATA 6Gb/s (GP-GSTFS31120GNTD)",
            "Power Gigabyte 500W (GP-PB500)",
            "Case Gigabyte AORUS AC300W LITE",
            "Quạt CPU Gigabyte Aorus ATC700"
          ]
        }, {
          "name": "LG 27 27MP59G-P (1920x1080/IPS/75Hz/5ms/FreeSync)",
          "price": "$163.44",
          "category": "screen",
          "productor": "Intel",
          "img": "https://lh3.googleusercontent.com/VqH0A1o-ESpFUxOGeVc-0B09aWSNrj_NeatFasP1dv_feKBwZQo8JCFQO7HgCOvy5-hXKOPsKkBT6ieckq8=w500-rw",
          "info": ["CPU Intel Core i5-9400F (9M Cache, up to 4.10GHz)",  
            "Mainboard Gigabyte B360M Aorus Gaming 3",
            "RAM Gigabyte AORUS RGB 16GB (2x8) DDR4 3200 (GP-AR32C16S8K2HU416R)",
            "Card Gigabyte GeForce GTX 1660Ti OC 6G GDDR6 (GV-N166TOC-6GD)",
            "SSD Gigabyte 2.5 120GB SATA 6Gb/s (GP-GSTFS31120GNTD)",
            "Power Gigabyte 500W (GP-PB500)",
            "Case Gigabyte AORUS AC300W LITE",
            "Quạt CPU Gigabyte Aorus ATC700"
          ]
        }, {
          "name": "LCD MSI Optix G27C4 (1920 x 1080/VA/165Hz/1 ms/FreeSync)",
          "price": "$749.91",
          "category": "screen",
          "productor": "MSI",
          "img": "https://lh3.googleusercontent.com/7rNEDXiEw1hZ879YRJSIA5bNgFpQ8qQYh_RWYHP5UDTB1xHcu5n6gm__tYAnkEyBT_Yj0vbcky46A0e5e-g=w500-rw",
          "info": ["CPU Intel Core i5-9400F (9M Cache, up to 4.10GHz)",  
            "Mainboard Gigabyte B360M Aorus Gaming 3",
            "RAM Gigabyte AORUS RGB 16GB (2x8) DDR4 3200 (GP-AR32C16S8K2HU416R)",
            "Card Gigabyte GeForce GTX 1660Ti OC 6G GDDR6 (GV-N166TOC-6GD)",
            "SSD Gigabyte 2.5 120GB SATA 6Gb/s (GP-GSTFS31120GNTD)",
            "Power Gigabyte 500W (GP-PB500)",
            "Case Gigabyte AORUS AC300W LITE",
            "Quạt CPU Gigabyte Aorus ATC700"
          ]
        }
      ],
    }
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
