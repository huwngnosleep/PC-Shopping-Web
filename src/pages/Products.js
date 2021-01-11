import React, {Component} from 'react'

import {Link} from 'react-router-dom'

import {Container, Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CarouselItem} from 'reactstrap'

import Filter from '../components/Filter'
export default class Products extends Component {
  constructor() {
    super()
    this.state = {
      products: [
        {
        "name": "LCD LG 27 inch 27GN800-B.ATV",
        "price": "$993.20",
        "category": "screen",
        "productor": "Intel",
        "img": "https://phongvu.vn/api/products/201200062/default_image",
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
        "name": "LCD PHILIPS 322M8CZ (1920 x 1080/VA/165Hz/1 ms/FreeSync)",
        "price": "$904.32",
        "category": "screen",
        "productor": "MSI",
        "img": "https://phongvu.vn/api/products/200800760/default_image",
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
        "name": "E-Dra Hercules EGC203 Pro (Black)",
        "price": "$98.94",
        "category": "gear",
        "productor": "MSI",
        "img": "https://phongvu.vn/api/products/200500012/default_image",
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
      }, {
        "name": "SSD Western Digital Green 240GB 2.5 SATA 3 - WDS240G2G0A",
        "price": "$345.32",
        "category": "accessory",
        "productor": "Logitech",
        "img": "https://lh3.googleusercontent.com/VDmltAlJo0pxGNGc5nRfH8-m_aU7Kd3XjtaMbQxJDvY9vsTHI487Zx4AUUwpMpc82ndnOZ8AGLgBa6iQMwM=w500-rw",
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
        "name": "PC Gaming Gigabyte Aorus B360 (i5 9400F/16GB/120 GB/GTX1660Ti OC 6GB/)",
        "price": "$993.20",
        "category": "pc",
        "productor": "Gigabyte",
        "img": "https://lh3.googleusercontent.com/QinLpKdCLSEkH92v2g7zxNUOlRi6NK_WAoJvIErKH-ZT1CKj_aZ7Rh-kynVjDnmV7LCfc3Mv41xQd92kD7Y=w500-rw",
        "info": ["CPU Intel Core i5-9400F (9M Cache, up to 4.10GHz)",  
            "Mainboard Gigabyte B360M Aorus Gaming 3",
            "RAM Gigabyte AORUS RGB 16GB (2x8) DDR4 3200 (GP-AR32C16S8K2HU416R)",
            "Card Gigabyte GeForce GTX 1660Ti OC 6G GDDR6 (GV-N166TOC-6GD)",
            "SSD Gigabyte 2.5 120GB SATA 6Gb/s (GP-GSTFS31120GNTD)",
            "Power Gigabyte 500W (GP-PB500)",
            "Case Gigabyte AORUS AC300W LITE",
            "Quạt CPU Gigabyte Aorus ATC700"
        ]
      },{
        "name": "F4600-3 (G4600/4GB/1TB HDD/HD 630/Win10)",
        "price": "$350.20",
        "category": "pc",
        "productor": "Gigabyte",
        "img": "https://lh3.googleusercontent.com/wdLPIhKgxFY2T-krgsDV8mkT5p6UhgcDIINWjZOMJM7jHteEK1j-V7BDKYJdjV_HkUMtSY_LuoJiIyWVBBVC=w500-rw",
        "info": ["CPU Intel Core i5-9400F (9M Cache, up to 4.10GHz)",  
            "Mainboard Gigabyte B360M Aorus Gaming 3",
            "RAM Gigabyte AORUS RGB 16GB (2x8) DDR4 3200 (GP-AR32C16S8K2HU416R)",
            "Card Gigabyte GeForce GTX 1660Ti OC 6G GDDR6 (GV-N166TOC-6GD)",
            "SSD Gigabyte 2.5 120GB SATA 6Gb/s (GP-GSTFS31120GNTD)",
            "Power Gigabyte 500W (GP-PB500)",
            "Case Gigabyte AORUS AC300W LITE",
            "Quạt CPU Gigabyte Aorus ATC700"
        ]
      },{
        "name": "HyperX Orbit S (HX-HSCOS-GM/WW)",
        "price": "$245",
        "category": "gear",
        "productor": "Gigabyte",
        "img": "https://lh3.googleusercontent.com/azi6i7i86XA9jf41JBMqoFk3-Pj0Pi63-5HUj8xGnuBzsbIalgQCZFsi6XlUnosumMqyOQkPfc3-t3n3jQ=w500-rw",
        "info": ["CPU Intel Core i5-9400F (9M Cache, up to 4.10GHz)",  
            "Over-ear",
            "USB, 3.5 mm, USB Type-C",
            "10Hz-50,000Hz",
            "368 g"
        ]
      },{
        "name": "Logitech G502 HERO",
        "price": "$45",
        "category": "gear",
        "productor": "Logitech",
        "img": "https://lh3.googleusercontent.com/YgYj2PBE8ZCBTD-f38xH2YJfBsI2HuEi8B_t9AVZWKI3NtU6smV4L4EKJCMyDNZLnIDhKUFl_-VT21Mf3Oo=w500-rw",
        "info": ["Kiểu kết nối: Có dây",  
            "Cảm biến: HERO",
            "Độ phân giải: 16000 DPI",
            "Tốc độ phản hồi: 1000 Hz (1ms)",
            "Màu sắc: Đen"
        ]
      },{
        "name": "Steelseries Apex 5",
        "price": "$230",
        "category": "gear",
        "productor": "Logitech",
        "img": "https://lh3.googleusercontent.com/SjJK6tLotmyRKuXuo0jgdJJpAkyHsRt8oO167VpG1MM2No9yYXsSyeLkbnwm2GcvLa02s6vRO-FhElrA5g=w500-rw",
        "info": ["Kiểu kết nối: Có dây",  
            "Cảm biến: HERO",
            "Độ phân giải: 16000 DPI",
            "Tốc độ phản hồi: 1000 Hz (1ms)",
            "Switch: SteelSeries Hybrid Mechanical RGB Switch"
        ]
      },{
        "name": "Apple Watch S5 44mm",
        "price": "$1130",
        "category": "smart watch",
        "productor": "HP",
        "img": "https://cdn.tgdd.vn/Products/Images/7077/212770/apple-watch-s5-44mm-vien-nhom-day-cao-su-ava-1-600x600.jpg",
        "info": ["1.78 inch",  
            "watchOS 6.0",
            "44 mm",
            "Wifi, Bluetooth v5.0, GPS"
        ]
      },{
        "name": "Huami Amazfit GTS",
        "price": "$230",
        "category": "smart watch",
        "productor": "Asus",
        "img": "https://cdn.tgdd.vn/Products/Images/7077/223746/huami-amazfit-gts-xam-ava-600x600.jpg",
        "info": ["1.78 inch",  
            "Amazﬁt OS",
            "44 mm",
            "Wifi, Bluetooth v5.0, GPS"
        ]
      }
    ]
    }
    this.products = this.state.products
  }
  rerenderAllProducts() {
    this.setState({
      products: this.products
    })
  }
  categoryClickHandler(event) {
    let products = [...this.products]
    let filter = event.target.value
    let filteredProduct = products.filter(item => item.category === filter)
    this.setState({
      products: filteredProduct
    })
  }
  producerClickHandler(event) {
    let products = [...this.products]
    let filterOption = event.target.value
    let filteredProduct = products.filter(item => item.productor === filterOption)
    this.setState({
      products: filteredProduct
    })
  }
  componentDidMount() {
    const defaultCategory = ''
    const defaultBrand = ''
    let filterCategory = this.props.location.category
    if(!filterCategory) {
      filterCategory = defaultCategory
    }
    let filterBrand = this.props.location.brand
    if(!filterBrand) {
      filterBrand = defaultBrand
    } 
    let filteredProductByCategory = this.products.filter(item => item.category.indexOf(filterCategory.toLowerCase()) !== -1)
    let filteredProductByBrand = this.products.filter(item => item.productor.indexOf(filterBrand) !== -1)
    
    if(filteredProductByBrand.length >= filteredProductByCategory.length) {
      var filteredProduct = filteredProductByCategory
    } else {
      var filteredProduct = filteredProductByBrand
    }
    if (this.state.products.length !== filteredProduct.length) {
      this.setState({
        products: filteredProduct
      })
    }
  }
  render() {
    return(
      <Container className="products">
        <h2><Link onClick={this.rerenderAllProducts.bind(this)} to={{pathname: "/products", category: '', brand: ''}}>Products</Link></h2>
        <Filter 
          categoriesClick={this.categoryClickHandler.bind(this)}
          productorClick={this.producerClickHandler.bind(this)}
        />
        <p>{`Current: ${this.state.products.length} products`}</p>
        <Row>
          {
            this.state.products.map(item => (
              <Col className="mt-2" sm="3" style={{borderBottom: "1px solid black", boxSizing: 'border-box'}}>
                <Link to={{
                  pathname: "/detail-product/",
                  item
                }}>
                  <Card style={{border: 'none', position: 'relative'}}>
                    <CardImg top width="100%" src={item.img} />
                    <CardBody>
                      <CardTitle tag="h5">{item.name}</CardTitle>
                    </CardBody>
                    <div className="p-1 position-absolute bottom-0 end-0">
                        <CardTitle tag="h6" className="mb-2">{item.price}</CardTitle>
                        <CardText className="text-muted">{item.productor}</CardText>
                    </div>
                  </Card>
                </Link>
              </Col>
            ))
          }
        </Row>
      </Container>
    )
  }
}