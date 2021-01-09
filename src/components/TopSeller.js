import React, { Component } from 'react'

import { Container, Row, Col,Card, CardImg, CardText, CardBody,
  CardTitle, Pagination, PaginationItem, PaginationLink } from 'reactstrap'

import {Link} from 'react-router-dom'  
export default class TopSeller extends Component {
  constructor() {
    super();
    this.state = {
      page: 0,
      popularBrands: [
        {name: "MSI", img: "https://lh3.googleusercontent.com/BdoRaaplaDNYSYRbYGinL43LaoWGrnansdiMDgawSksBM7NxlERC0SoVgvUh4H8rRnUCVHVNOxGvD7flVmNh=rw"},
        {name: "HP", img: "https://lh3.googleusercontent.com/sgQpul0smf3zXy4JOgD7OLzhadi_PbhS2FzocH5rv8rayiKyREPBgCAmlZE_YWuXTb6S1D5kExErV6PCOQ=rw"},
        {name: "LG", img: "https://lh3.googleusercontent.com/l2y1xkUV5p_aRjxyiqIQ9yyvj9vqukSKf2A2l3vd3tcnU9FefzFCScndOuyWil3w98rG618FEsz-t-moEYeI=rw"},
        {name: "Lenovo", img: "https://lh3.googleusercontent.com/w9mrW6_W7yVglkXPNlhRTXvOzl02Fazc1425qJBzrD2oxQ9Zk0Qwi7pOLjUr9ws8YUB5EC9ooNi8XXD94hc=rw"}
      ],
      bestSellers: [{
        "name": "LCD LG 27 inch 27GN800-B.ATV",
        "price": "$993.20",
        "category": "screen",
        "productor": "Intel",
        "img": "https://phongvu.vn/api/products/201200062/default_image",
        "info": ["CPU Intel Core i5-9400F (9M Cache, up to 4.10GHz)",  
          "Mainboard Gigabyte B360M Aorus Gaming 3",
          "RAM Gigabyte AORUS RGB 16GB (2x8) DDR4 3200 (GP-AR32C16S8K2HU416R)",
          "Card Gigabyte GeForce GTX 1660Ti OC 6G GDDR6 (GV-N166TOC-6GD)",
          'SSD Gigabyte 2.5" 120GB SATA 6Gb/s (GP-GSTFS31120GNTD)',
          'Power Gigabyte 500W (GP-PB500)',
          'Case Gigabyte AORUS AC300W LITE',
          'Quạt CPU Gigabyte Aorus ATC700'
        ],
      }, {
        "name": "LCD PHILIPS 322M8CZ (1920 x 1080/VA/165Hz/1 ms/FreeSync)",
        "price": "$904.32",
        "category": "screen",
        "productor": "MSI",
        "img": "https://phongvu.vn/api/products/200800760/default_image",
        "info": ["CPU Intel Core i5-9400F (9M Cache, up to 4.10GHz)",  
          "Mainboard Gigabyte B360M Aorus Gaming 3",
          "RAM Gigabyte AORUS RGB 16GB (2x8) DDR4 3200 (GP-AR32C16S8K2HU416R)",
          "Card Gigabyte GeForce GTX 1660Ti OC 6G GDDR6 (GV-N166TOC-6GD)",
          'SSD Gigabyte 2.5" 120GB SATA 6Gb/s (GP-GSTFS31120GNTD)',
          'Power Gigabyte 500W (GP-PB500)',
          'Case Gigabyte AORUS AC300W LITE',
          'Quạt CPU Gigabyte Aorus ATC700'
        ],
      }, {
        "name": "E-Dra Hercules EGC203 Pro (Black)",
        "price": "$98.94",
        "category": "gear",
        "productor": "MSI",
        "img": "https://phongvu.vn/api/products/200500012/default_image",
        "info": ["CPU Intel Core i5-9400F (9M Cache, up to 4.10GHz)",  
          "Mainboard Gigabyte B360M Aorus Gaming 3",
          "RAM Gigabyte AORUS RGB 16GB (2x8) DDR4 3200 (GP-AR32C16S8K2HU416R)",
          "Card Gigabyte GeForce GTX 1660Ti OC 6G GDDR6 (GV-N166TOC-6GD)",
          'SSD Gigabyte 2.5" 120GB SATA 6Gb/s (GP-GSTFS31120GNTD)',
          'Power Gigabyte 500W (GP-PB500)',
          'Case Gigabyte AORUS AC300W LITE',
          'Quạt CPU Gigabyte Aorus ATC700'
        ],
      }, {
        "name": `Laptop ASUS VivoBook 14 A412FA-EK734T (14" FHD/i5-10210U/8GB/512GB SSD/Intel UHD/Win10/1.5kg)`,
        "price": "$988.49",
        "category": "laptop",
        "productor": "Asus",
        "img": "https://lh3.googleusercontent.com/6tvXgbEGh1b43wyxkxoVfNZ3YfKYl9AQC61n_1P_zZ1QtrLZLdi-QFdbDdplZfUfPPdu0Ek47h3rjlOkdw=w500-rw",
        "info": ["CPU Intel Core i5-9400F (9M Cache, up to 4.10GHz)",  
          "Mainboard Gigabyte B360M Aorus Gaming 3",
          "RAM Gigabyte AORUS RGB 16GB (2x8) DDR4 3200 (GP-AR32C16S8K2HU416R)",
          "Card Gigabyte GeForce GTX 1660Ti OC 6G GDDR6 (GV-N166TOC-6GD)",
          'SSD Gigabyte 2.5" 120GB SATA 6Gb/s (GP-GSTFS31120GNTD)',
          'Power Gigabyte 500W (GP-PB500)',
          'Case Gigabyte AORUS AC300W LITE',
          'Quạt CPU Gigabyte Aorus ATC700'
        ],
      }, {
        "name": `Laptop Dell G3 15 3590-N5I5518W (15" FHD/i5-9300H/8GB/512GB SSD/GTX 1650/Win10/2.3kg)`,
        "price": "$567.81",
        "category": "laptop",
        "productor": "Asus",
        "img": "https://lh3.googleusercontent.com/H44s7IPyy-jSqjdujA89L5Al0ajMb43PpCHs1AzboIK_KueRRX_DJVVc4b8bfzaCI8Utux-wHHCiMkvXJqo=w500-rw",
        "info": ["CPU Intel Core i5-9400F (9M Cache, up to 4.10GHz)",  
          "Mainboard Gigabyte B360M Aorus Gaming 3",
          "RAM Gigabyte AORUS RGB 16GB (2x8) DDR4 3200 (GP-AR32C16S8K2HU416R)",
          "Card Gigabyte GeForce GTX 1660Ti OC 6G GDDR6 (GV-N166TOC-6GD)",
          'SSD Gigabyte 2.5" 120GB SATA 6Gb/s (GP-GSTFS31120GNTD)',
          'Power Gigabyte 500W (GP-PB500)',
          'Case Gigabyte AORUS AC300W LITE',
          'Quạt CPU Gigabyte Aorus ATC700'
        ],
      }, {
        "name": `Laptop HP 15s-fq1022TU (8VY75PA) (15" FHD/i7-1065G7/8GB/512GB SSD/Intel UHD/Win10/1.7kg)`,
        "price": "$153.51",
        "category": "laptop",
        "productor": "HP",
        "img": "https://lh3.googleusercontent.com/ENWQOMkH5y5_BavnmrLQcrdu8pYLGd57H9upthP1SXHYEfgoa7YQtfMsDUzk6nYe9LPwTImHVRUXZQBStk8=w500-rw",
        "info": ["CPU Intel Core i5-9400F (9M Cache, up to 4.10GHz)",  
          "Mainboard Gigabyte B360M Aorus Gaming 3",
          "RAM Gigabyte AORUS RGB 16GB (2x8) DDR4 3200 (GP-AR32C16S8K2HU416R)",
          "Card Gigabyte GeForce GTX 1660Ti OC 6G GDDR6 (GV-N166TOC-6GD)",
          'SSD Gigabyte 2.5" 120GB SATA 6Gb/s (GP-GSTFS31120GNTD)',
          'Power Gigabyte 500W (GP-PB500)',
          'Case Gigabyte AORUS AC300W LITE',
          'Quạt CPU Gigabyte Aorus ATC700'
        ],
      },
    ]
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