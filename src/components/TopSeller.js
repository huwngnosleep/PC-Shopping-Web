import React, { Component } from 'react'

import css from './TopSeller.css'

import { Container, Row, Col,Card, CardImg, CardText, CardBody,
  CardTitle, Pagination, PaginationItem, PaginationLink } from 'reactstrap'

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
        "productor": "LG",
        "img": "https://phongvu.vn/api/products/201200062/default_image"
      }, {
        "name": "LCD PHILIPS 322M8CZ (1920 x 1080/VA/165Hz/1 ms/FreeSync)",
        "price": "$904.32",
        "productor": "Philips",
        "img": "https://phongvu.vn/api/products/200800760/default_image"
      }, {
        "name": "E-Dra Hercules EGC203 Pro (Black)",
        "price": "$98.94",
        "productor": "Meevee",
        "img": "https://phongvu.vn/api/products/200500012/default_image"
      }, {
        "name": `Laptop ASUS VivoBook 14 A412FA-EK734T (14" FHD/i5-10210U/8GB/512GB SSD/Intel UHD/Win10/1.5kg)`,
        "price": "$988.49",
        "productor": "Asus",
        "img": "https://lh3.googleusercontent.com/6tvXgbEGh1b43wyxkxoVfNZ3YfKYl9AQC61n_1P_zZ1QtrLZLdi-QFdbDdplZfUfPPdu0Ek47h3rjlOkdw=w500-rw"
      }, {
        "name": `Laptop Dell G3 15 3590-N5I5518W (15" FHD/i5-9300H/8GB/512GB SSD/GTX 1650/Win10/2.3kg)`,
        "price": "$567.81",
        "productor": "Dell",
        "img": "https://lh3.googleusercontent.com/H44s7IPyy-jSqjdujA89L5Al0ajMb43PpCHs1AzboIK_KueRRX_DJVVc4b8bfzaCI8Utux-wHHCiMkvXJqo=w500-rw"
      }, {
        "name": `Laptop HP 15s-fq1022TU (8VY75PA) (15" FHD/i7-1065G7/8GB/512GB SSD/Intel UHD/Win10/1.7kg)`,
        "price": "$153.51",
        "productor": "HP",
        "img": "https://lh3.googleusercontent.com/ENWQOMkH5y5_BavnmrLQcrdu8pYLGd57H9upthP1SXHYEfgoa7YQtfMsDUzk6nYe9LPwTImHVRUXZQBStk8=w500-rw"
      }, {
        "name": `CPU Intel Core i5-9400F (6C/6T, 2.9 - 4.1 GHz, 9MB) - LGA 1151-v2`,
        "price": "$199.53",
        "productor": "Intel",
        "img": "https://lh3.googleusercontent.com/WkEFbZM02MrWi2xg_oYUV9wcU24tQoRwRaT4nZmB6Jen1HLD23PZhqkAed_eturDck_kstljO3B7l9H3fjaY=w500-rw"
      }, {
        "name": "Card MSI GeForce GTX 1050Ti 4GB GDDR5 OCV1 (GTX-1050-Ti-4GT-OCV1)",
        "price": "$630.61",
        "productor": "MSI",
        "img": "https://lh3.googleusercontent.com/osxjiLndX72N5TlsaE5VC5jkOx4Oa0ZtPARtPU1KWqNMzY_6h-jWVSJUur881SQxqInijzjRBxZaZtYXEBiV0MQGRx4P2VCH=w500-rw"
      }, {
        "name": `Laptop ASUS TUF Gaming FX505DD-AL186T (15" FHD/R5-3550H/8GB/512GB SSD/GTX 1050/Win10/2.2 kg)`,
        "price": "$444.81",
        "productor": "Asus",
        "img": "https://lh3.googleusercontent.com/LS1RIZ19enH0xMwF7L4x3h3zVK7duUueQjjUZb-7sRc3moNN4v3GmLPDlYr0v83a2jvUZczB-VkK-w_cAS4=w500-rw"
      }, {
        "name": `LG 27" 27MP59G-P (1920x1080/IPS/75Hz/5ms/FreeSync)`,
        "price": "$163.44",
        "productor": "LG",
        "img": "https://lh3.googleusercontent.com/VqH0A1o-ESpFUxOGeVc-0B09aWSNrj_NeatFasP1dv_feKBwZQo8JCFQO7HgCOvy5-hXKOPsKkBT6ieckq8=w500-rw"
      }, {
        "name": "LCD MSI Optix G27C4 (1920 x 1080/VA/165Hz/1 ms/FreeSync)",
        "price": "$749.91",
        "productor": "MSI",
        "img": "https://lh3.googleusercontent.com/7rNEDXiEw1hZ879YRJSIA5bNgFpQ8qQYh_RWYHP5UDTB1xHcu5n6gm__tYAnkEyBT_Yj0vbcky46A0e5e-g=w500-rw"
      }, {
        "name": `SSD Western Digital Green 240GB 2.5" SATA 3 - WDS240G2G0A`,
        "price": "$345.32",
        "productor": "Flashspan",
        "img": "https://lh3.googleusercontent.com/VDmltAlJo0pxGNGc5nRfH8-m_aU7Kd3XjtaMbQxJDvY9vsTHI487Zx4AUUwpMpc82ndnOZ8AGLgBa6iQMwM=w500-rw"
      }, {
        "name": `LG 29" 29WK600 (2560x1080/IPS/75Hz/5ms/FreeSync)`,
        "price": "$704.69",
        "productor": "LG",
        "img": "https://lh3.googleusercontent.com/MLyGE8C6QF_p4r9141yCg-XqlC8t46qt28xBAszwnBDZubfwzCG0aV8lQKEKohGYCgi80dK1MjTkUQDGSb4=w500-rw"
      },{
        "name": "LCD LG 27 inch 27GN800-B.ATV",
        "price": "$993.20",
        "productor": "LG",
        "img": "https://phongvu.vn/api/products/201200062/default_image"
      }, {
        "name": "LCD PHILIPS 322M8CZ (1920 x 1080/VA/165Hz/1 ms/FreeSync)",
        "price": "$904.32",
        "productor": "Philips",
        "img": "https://phongvu.vn/api/products/200800760/default_image"
      }, {
        "name": "E-Dra Hercules EGC203 Pro (Black)",
        "price": "$98.94",
        "productor": "Meevee",
        "img": "https://phongvu.vn/api/products/200500012/default_image"
      }, {
        "name": `Laptop ASUS VivoBook 14 A412FA-EK734T (14" FHD/i5-10210U/8GB/512GB SSD/Intel UHD/Win10/1.5kg)`,
        "price": "$988.49",
        "productor": "Asus",
        "img": "https://lh3.googleusercontent.com/6tvXgbEGh1b43wyxkxoVfNZ3YfKYl9AQC61n_1P_zZ1QtrLZLdi-QFdbDdplZfUfPPdu0Ek47h3rjlOkdw=w500-rw"
      }, {
        "name": `Laptop Dell G3 15 3590-N5I5518W (15" FHD/i5-9300H/8GB/512GB SSD/GTX 1650/Win10/2.3kg)`,
        "price": "$567.81",
        "productor": "Dell",
        "img": "https://lh3.googleusercontent.com/H44s7IPyy-jSqjdujA89L5Al0ajMb43PpCHs1AzboIK_KueRRX_DJVVc4b8bfzaCI8Utux-wHHCiMkvXJqo=w500-rw"
      }, {
        "name": `Laptop HP 15s-fq1022TU (8VY75PA) (15" FHD/i7-1065G7/8GB/512GB SSD/Intel UHD/Win10/1.7kg)`,
        "price": "$153.51",
        "productor": "HP",
        "img": "https://lh3.googleusercontent.com/ENWQOMkH5y5_BavnmrLQcrdu8pYLGd57H9upthP1SXHYEfgoa7YQtfMsDUzk6nYe9LPwTImHVRUXZQBStk8=w500-rw"
      }, {
        "name": `CPU Intel Core i5-9400F (6C/6T, 2.9 - 4.1 GHz, 9MB) - LGA 1151-v2`,
        "price": "$199.53",
        "productor": "Intel",
        "img": "https://lh3.googleusercontent.com/WkEFbZM02MrWi2xg_oYUV9wcU24tQoRwRaT4nZmB6Jen1HLD23PZhqkAed_eturDck_kstljO3B7l9H3fjaY=w500-rw"
      }, {
        "name": "Card MSI GeForce GTX 1050Ti 4GB GDDR5 OCV1 (GTX-1050-Ti-4GT-OCV1)",
        "price": "$630.61",
        "productor": "MSI",
        "img": "https://lh3.googleusercontent.com/osxjiLndX72N5TlsaE5VC5jkOx4Oa0ZtPARtPU1KWqNMzY_6h-jWVSJUur881SQxqInijzjRBxZaZtYXEBiV0MQGRx4P2VCH=w500-rw"
      }, {
        "name": `Laptop ASUS TUF Gaming FX505DD-AL186T (15" FHD/R5-3550H/8GB/512GB SSD/GTX 1050/Win10/2.2 kg)`,
        "price": "$444.81",
        "productor": "Asus",
        "img": "https://lh3.googleusercontent.com/LS1RIZ19enH0xMwF7L4x3h3zVK7duUueQjjUZb-7sRc3moNN4v3GmLPDlYr0v83a2jvUZczB-VkK-w_cAS4=w500-rw"
      }, {
        "name": `LG 27" 27MP59G-P (1920x1080/IPS/75Hz/5ms/FreeSync)`,
        "price": "$163.44",
        "productor": "LG",
        "img": "https://lh3.googleusercontent.com/VqH0A1o-ESpFUxOGeVc-0B09aWSNrj_NeatFasP1dv_feKBwZQo8JCFQO7HgCOvy5-hXKOPsKkBT6ieckq8=w500-rw"
      }, {
        "name": "LCD MSI Optix G27C4 (1920 x 1080/VA/165Hz/1 ms/FreeSync)",
        "price": "$749.91",
        "productor": "MSI",
        "img": "https://lh3.googleusercontent.com/7rNEDXiEw1hZ879YRJSIA5bNgFpQ8qQYh_RWYHP5UDTB1xHcu5n6gm__tYAnkEyBT_Yj0vbcky46A0e5e-g=w500-rw"
      }, {
        "name": `SSD Western Digital Green 240GB 2.5" SATA 3 - WDS240G2G0A`,
        "price": "$345.32",
        "productor": "Flashspan",
        "img": "https://lh3.googleusercontent.com/VDmltAlJo0pxGNGc5nRfH8-m_aU7Kd3XjtaMbQxJDvY9vsTHI487Zx4AUUwpMpc82ndnOZ8AGLgBa6iQMwM=w500-rw"
      }, {
        "name": `LG 29" 29WK600 (2560x1080/IPS/75Hz/5ms/FreeSync)`,
        "price": "$704.69",
        "productor": "LG",
        "img": "https://lh3.googleusercontent.com/MLyGE8C6QF_p4r9141yCg-XqlC8t46qt28xBAszwnBDZubfwzCG0aV8lQKEKohGYCgi80dK1MjTkUQDGSb4=w500-rw"
      },{
        "name": "LCD LG 27 inch 27GN800-B.ATV",
        "price": "$993.20",
        "productor": "LG",
        "img": "https://phongvu.vn/api/products/201200062/default_image"
      }, {
        "name": "LCD PHILIPS 322M8CZ (1920 x 1080/VA/165Hz/1 ms/FreeSync)",
        "price": "$904.32",
        "productor": "Philips",
        "img": "https://phongvu.vn/api/products/200800760/default_image"
      }, {
        "name": "E-Dra Hercules EGC203 Pro (Black)",
        "price": "$98.94",
        "productor": "Meevee",
        "img": "https://phongvu.vn/api/products/200500012/default_image"
      }, {
        "name": `Laptop ASUS VivoBook 14 A412FA-EK734T (14" FHD/i5-10210U/8GB/512GB SSD/Intel UHD/Win10/1.5kg)`,
        "price": "$988.49",
        "productor": "Asus",
        "img": "https://lh3.googleusercontent.com/6tvXgbEGh1b43wyxkxoVfNZ3YfKYl9AQC61n_1P_zZ1QtrLZLdi-QFdbDdplZfUfPPdu0Ek47h3rjlOkdw=w500-rw"
      }, {
        "name": `Laptop Dell G3 15 3590-N5I5518W (15" FHD/i5-9300H/8GB/512GB SSD/GTX 1650/Win10/2.3kg)`,
        "price": "$567.81",
        "productor": "Dell",
        "img": "https://lh3.googleusercontent.com/H44s7IPyy-jSqjdujA89L5Al0ajMb43PpCHs1AzboIK_KueRRX_DJVVc4b8bfzaCI8Utux-wHHCiMkvXJqo=w500-rw"
      }, {
        "name": `Laptop HP 15s-fq1022TU (8VY75PA) (15" FHD/i7-1065G7/8GB/512GB SSD/Intel UHD/Win10/1.7kg)`,
        "price": "$153.51",
        "productor": "HP",
        "img": "https://lh3.googleusercontent.com/ENWQOMkH5y5_BavnmrLQcrdu8pYLGd57H9upthP1SXHYEfgoa7YQtfMsDUzk6nYe9LPwTImHVRUXZQBStk8=w500-rw"
      }, {
        "name": `CPU Intel Core i5-9400F (6C/6T, 2.9 - 4.1 GHz, 9MB) - LGA 1151-v2`,
        "price": "$199.53",
        "productor": "Intel",
        "img": "https://lh3.googleusercontent.com/WkEFbZM02MrWi2xg_oYUV9wcU24tQoRwRaT4nZmB6Jen1HLD23PZhqkAed_eturDck_kstljO3B7l9H3fjaY=w500-rw"
      }, {
        "name": "Card MSI GeForce GTX 1050Ti 4GB GDDR5 OCV1 (GTX-1050-Ti-4GT-OCV1)",
        "price": "$630.61",
        "productor": "MSI",
        "img": "https://lh3.googleusercontent.com/osxjiLndX72N5TlsaE5VC5jkOx4Oa0ZtPARtPU1KWqNMzY_6h-jWVSJUur881SQxqInijzjRBxZaZtYXEBiV0MQGRx4P2VCH=w500-rw"
      }, {
        "name": `Laptop ASUS TUF Gaming FX505DD-AL186T (15" FHD/R5-3550H/8GB/512GB SSD/GTX 1050/Win10/2.2 kg)`,
        "price": "$444.81",
        "productor": "Asus",
        "img": "https://lh3.googleusercontent.com/LS1RIZ19enH0xMwF7L4x3h3zVK7duUueQjjUZb-7sRc3moNN4v3GmLPDlYr0v83a2jvUZczB-VkK-w_cAS4=w500-rw"
      }, {
        "name": `LG 27" 27MP59G-P (1920x1080/IPS/75Hz/5ms/FreeSync)`,
        "price": "$163.44",
        "productor": "LG",
        "img": "https://lh3.googleusercontent.com/VqH0A1o-ESpFUxOGeVc-0B09aWSNrj_NeatFasP1dv_feKBwZQo8JCFQO7HgCOvy5-hXKOPsKkBT6ieckq8=w500-rw"
      }, {
        "name": "LCD MSI Optix G27C4 (1920 x 1080/VA/165Hz/1 ms/FreeSync)",
        "price": "$749.91",
        "productor": "MSI",
        "img": "https://lh3.googleusercontent.com/7rNEDXiEw1hZ879YRJSIA5bNgFpQ8qQYh_RWYHP5UDTB1xHcu5n6gm__tYAnkEyBT_Yj0vbcky46A0e5e-g=w500-rw"
      }, {
        "name": `SSD Western Digital Green 240GB 2.5" SATA 3 - WDS240G2G0A`,
        "price": "$345.32",
        "productor": "Flashspan",
        "img": "https://lh3.googleusercontent.com/VDmltAlJo0pxGNGc5nRfH8-m_aU7Kd3XjtaMbQxJDvY9vsTHI487Zx4AUUwpMpc82ndnOZ8AGLgBa6iQMwM=w500-rw"
      }, {
        "name": `LG 29" 29WK600 (2560x1080/IPS/75Hz/5ms/FreeSync)`,
        "price": "$704.69",
        "productor": "LG",
        "img": "https://lh3.googleusercontent.com/MLyGE8C6QF_p4r9141yCg-XqlC8t46qt28xBAszwnBDZubfwzCG0aV8lQKEKohGYCgi80dK1MjTkUQDGSb4=w500-rw"
      },]
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
        <Container>
          <h2>Popular Brands</h2>
          <Row>
            {
              this.state.popularBrands.map(item => (
                <Col sm="3">
                  <Card className="text-center">
                    <CardImg top width="100%" src={item.img}/>
                    <CardBody>
                      <CardTitle tag="h5">{item.name}</CardTitle>
                    </CardBody>
                  </Card>
                </Col>
              ))
            }
          </Row>
        </Container>
        <div className="topsellers">
          <h2>Top Sellars</h2>
          <Row className="text-center">
            {
              bestSellersVisible.map(item => (
                <Col sm="3">
                  <img className="img-responsive topsellers-img" src={item.img} />
                  <h4>{item.name}</h4>
                  <bold>{item.price}</bold>
                  <p>{item.productor}</p>
                </Col>
              ))
            }
          </Row>
          <Row className="paginate">
            <button className="paginate-btn" onClick={this.leftArrowClick.bind(this)}>{'<'}</button>
            <b>{this.state.page}</b>
            <button className="paginate-btn" onClick={this.rightArrowClick.bind(this)}>{'>'}</button>
          </Row>
        </div>
      </div>

    )
  }
}