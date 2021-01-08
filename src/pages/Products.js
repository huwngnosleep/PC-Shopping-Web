import React, {Component} from 'react'

import {Link} from 'react-router-dom'

import {Container, Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CarouselItem} from 'reactstrap'

import Filter from '../components/Filter'
export default class Products extends Component {
  constructor() {
    super()
    this.state = {
      products: [{
        "name": "LCD LG 27 inch 27GN800-B.ATV",
        "price": "$993.20",
        "category": "screen",
        "productor": "LG",
        "img": "https://phongvu.vn/api/products/201200062/default_image",
        "info": ["abc","xyz"],
      }, {
        "name": "LCD PHILIPS 322M8CZ (1920 x 1080/VA/165Hz/1 ms/FreeSync)",
        "price": "$904.32",
        "category": "screen",
        "productor": "Philips",
        "img": "https://phongvu.vn/api/products/200800760/default_image"
      }, {
        "name": "E-Dra Hercules EGC203 Pro (Black)",
        "price": "$98.94",
        "category": "gear",
        "productor": "Meevee",
        "img": "https://phongvu.vn/api/products/200500012/default_image"
      }, {
        "name": `Laptop ASUS VivoBook 14 A412FA-EK734T (14" FHD/i5-10210U/8GB/512GB SSD/Intel UHD/Win10/1.5kg)`,
        "price": "$988.49",
        "category": "laptop",
        "productor": "Asus",
        "img": "https://lh3.googleusercontent.com/6tvXgbEGh1b43wyxkxoVfNZ3YfKYl9AQC61n_1P_zZ1QtrLZLdi-QFdbDdplZfUfPPdu0Ek47h3rjlOkdw=w500-rw"
      }, {
        "name": `Laptop Dell G3 15 3590-N5I5518W (15" FHD/i5-9300H/8GB/512GB SSD/GTX 1650/Win10/2.3kg)`,
        "price": "$567.81",
        "category": "laptop",
        "productor": "Dell",
        "img": "https://lh3.googleusercontent.com/H44s7IPyy-jSqjdujA89L5Al0ajMb43PpCHs1AzboIK_KueRRX_DJVVc4b8bfzaCI8Utux-wHHCiMkvXJqo=w500-rw"
      }, {
        "name": `Laptop HP 15s-fq1022TU (8VY75PA) (15" FHD/i7-1065G7/8GB/512GB SSD/Intel UHD/Win10/1.7kg)`,
        "price": "$153.51",
        "category": "laptop",
        "productor": "HP",
        "img": "https://lh3.googleusercontent.com/ENWQOMkH5y5_BavnmrLQcrdu8pYLGd57H9upthP1SXHYEfgoa7YQtfMsDUzk6nYe9LPwTImHVRUXZQBStk8=w500-rw"
      }, {
        "name": `CPU Intel Core i5-9400F (6C/6T, 2.9 - 4.1 GHz, 9MB) - LGA 1151-v2`,
        "price": "$199.53",
        "category": "accesory",
        "productor": "Intel",
        "img": "https://lh3.googleusercontent.com/WkEFbZM02MrWi2xg_oYUV9wcU24tQoRwRaT4nZmB6Jen1HLD23PZhqkAed_eturDck_kstljO3B7l9H3fjaY=w500-rw"
      }, {
        "name": "Card MSI GeForce GTX 1050Ti 4GB GDDR5 OCV1 (GTX-1050-Ti-4GT-OCV1)",
        "price": "$630.61",
        "category": "accesory",
        "productor": "MSI",
        "img": "https://lh3.googleusercontent.com/osxjiLndX72N5TlsaE5VC5jkOx4Oa0ZtPARtPU1KWqNMzY_6h-jWVSJUur881SQxqInijzjRBxZaZtYXEBiV0MQGRx4P2VCH=w500-rw"
      }, {
        "name": `Laptop ASUS TUF Gaming FX505DD-AL186T (15" FHD/R5-3550H/8GB/512GB SSD/GTX 1050/Win10/2.2 kg)`,
        "price": "$444.81",
        "category": "laptop",
        "productor": "Asus",
        "img": "https://lh3.googleusercontent.com/LS1RIZ19enH0xMwF7L4x3h3zVK7duUueQjjUZb-7sRc3moNN4v3GmLPDlYr0v83a2jvUZczB-VkK-w_cAS4=w500-rw"
      }, {
        "name": `LG 27" 27MP59G-P (1920x1080/IPS/75Hz/5ms/FreeSync)`,
        "price": "$163.44",
        "category": "screen",
        "productor": "LG",
        "img": "https://lh3.googleusercontent.com/VqH0A1o-ESpFUxOGeVc-0B09aWSNrj_NeatFasP1dv_feKBwZQo8JCFQO7HgCOvy5-hXKOPsKkBT6ieckq8=w500-rw"
      }, {
        "name": "LCD MSI Optix G27C4 (1920 x 1080/VA/165Hz/1 ms/FreeSync)",
        "price": "$749.91",
        "category": "screen",
        "productor": "MSI",
        "img": "https://lh3.googleusercontent.com/7rNEDXiEw1hZ879YRJSIA5bNgFpQ8qQYh_RWYHP5UDTB1xHcu5n6gm__tYAnkEyBT_Yj0vbcky46A0e5e-g=w500-rw"
      }, {
        "name": `SSD Western Digital Green 240GB 2.5" SATA 3 - WDS240G2G0A`,
        "price": "$345.32",
        "category": "accesory",
        "productor": "Flashspan",
        "img": "https://lh3.googleusercontent.com/VDmltAlJo0pxGNGc5nRfH8-m_aU7Kd3XjtaMbQxJDvY9vsTHI487Zx4AUUwpMpc82ndnOZ8AGLgBa6iQMwM=w500-rw"
      }, {
        "name": "LCD LG 27 inch 27GN800-B.ATV",
        "price": "$993.20",
        "category": "screen",
        "productor": "LG",
        "img": "https://phongvu.vn/api/products/201200062/default_image"
      }, {
        "name": "LCD PHILIPS 322M8CZ (1920 x 1080/VA/165Hz/1 ms/FreeSync)",
        "price": "$904.32",
        "category": "screen",
        "productor": "Philips",
        "img": "https://phongvu.vn/api/products/200800760/default_image"
      }, {
        "name": "E-Dra Hercules EGC203 Pro (Black)",
        "price": "$98.94",
        "category": "gear",
        "productor": "Meevee",
        "img": "https://phongvu.vn/api/products/200500012/default_image"
      }, {
        "name": `Laptop ASUS VivoBook 14 A412FA-EK734T (14" FHD/i5-10210U/8GB/512GB SSD/Intel UHD/Win10/1.5kg)`,
        "price": "$988.49",
        "category": "laptop",
        "productor": "Asus",
        "img": "https://lh3.googleusercontent.com/6tvXgbEGh1b43wyxkxoVfNZ3YfKYl9AQC61n_1P_zZ1QtrLZLdi-QFdbDdplZfUfPPdu0Ek47h3rjlOkdw=w500-rw"
      }, {
        "name": `Laptop Dell G3 15 3590-N5I5518W (15" FHD/i5-9300H/8GB/512GB SSD/GTX 1650/Win10/2.3kg)`,
        "price": "$567.81",
        "category": "laptop",
        "productor": "Dell",
        "img": "https://lh3.googleusercontent.com/H44s7IPyy-jSqjdujA89L5Al0ajMb43PpCHs1AzboIK_KueRRX_DJVVc4b8bfzaCI8Utux-wHHCiMkvXJqo=w500-rw"
      }, {
        "name": `Laptop HP 15s-fq1022TU (8VY75PA) (15" FHD/i7-1065G7/8GB/512GB SSD/Intel UHD/Win10/1.7kg)`,
        "price": "$153.51",
        "category": "laptop",
        "productor": "HP",
        "img": "https://lh3.googleusercontent.com/ENWQOMkH5y5_BavnmrLQcrdu8pYLGd57H9upthP1SXHYEfgoa7YQtfMsDUzk6nYe9LPwTImHVRUXZQBStk8=w500-rw"
      }, {
        "name": `CPU Intel Core i5-9400F (6C/6T, 2.9 - 4.1 GHz, 9MB) - LGA 1151-v2`,
        "price": "$199.53",
        "category": "accesory",
        "productor": "Intel",
        "img": "https://lh3.googleusercontent.com/WkEFbZM02MrWi2xg_oYUV9wcU24tQoRwRaT4nZmB6Jen1HLD23PZhqkAed_eturDck_kstljO3B7l9H3fjaY=w500-rw"
      }, {
        "name": "Card MSI GeForce GTX 1050Ti 4GB GDDR5 OCV1 (GTX-1050-Ti-4GT-OCV1)",
        "price": "$630.61",
        "category": "accesory",
        "productor": "MSI",
        "img": "https://lh3.googleusercontent.com/osxjiLndX72N5TlsaE5VC5jkOx4Oa0ZtPARtPU1KWqNMzY_6h-jWVSJUur881SQxqInijzjRBxZaZtYXEBiV0MQGRx4P2VCH=w500-rw"
      }, {
        "name": `Laptop ASUS TUF Gaming FX505DD-AL186T (15" FHD/R5-3550H/8GB/512GB SSD/GTX 1050/Win10/2.2 kg)`,
        "price": "$444.81",
        "category": "laptop",
        "productor": "Asus",
        "img": "https://lh3.googleusercontent.com/LS1RIZ19enH0xMwF7L4x3h3zVK7duUueQjjUZb-7sRc3moNN4v3GmLPDlYr0v83a2jvUZczB-VkK-w_cAS4=w500-rw"
      }, {
        "name": `LG 27" 27MP59G-P (1920x1080/IPS/75Hz/5ms/FreeSync)`,
        "price": "$163.44",
        "category": "screen",
        "productor": "LG",
        "img": "https://lh3.googleusercontent.com/VqH0A1o-ESpFUxOGeVc-0B09aWSNrj_NeatFasP1dv_feKBwZQo8JCFQO7HgCOvy5-hXKOPsKkBT6ieckq8=w500-rw"
      }, {
        "name": "LCD MSI Optix G27C4 (1920 x 1080/VA/165Hz/1 ms/FreeSync)",
        "price": "$749.91",
        "category": "screen",
        "productor": "MSI",
        "img": "https://lh3.googleusercontent.com/7rNEDXiEw1hZ879YRJSIA5bNgFpQ8qQYh_RWYHP5UDTB1xHcu5n6gm__tYAnkEyBT_Yj0vbcky46A0e5e-g=w500-rw"
      }, {
        "name": `SSD Western Digital Green 240GB 2.5" SATA 3 - WDS240G2G0A`,
        "price": "$345.32",
        "category": "accesory",
        "productor": "Flashspan",
        "img": "https://lh3.googleusercontent.com/VDmltAlJo0pxGNGc5nRfH8-m_aU7Kd3XjtaMbQxJDvY9vsTHI487Zx4AUUwpMpc82ndnOZ8AGLgBa6iQMwM=w500-rw"
      },
      {
        "name": "LCD LG 27 inch 27GN800-B.ATV",
        "price": "$993.20",
        "category": "screen",
        "productor": "LG",
        "img": "https://phongvu.vn/api/products/201200062/default_image"
      }, {
        "name": "LCD PHILIPS 322M8CZ (1920 x 1080/VA/165Hz/1 ms/FreeSync)",
        "price": "$904.32",
        "category": "screen",
        "productor": "Philips",
        "img": "https://phongvu.vn/api/products/200800760/default_image"
      }, {
        "name": "E-Dra Hercules EGC203 Pro (Black)",
        "price": "$98.94",
        "category": "gear",
        "productor": "Meevee",
        "img": "https://phongvu.vn/api/products/200500012/default_image"
      }, {
        "name": `Laptop ASUS VivoBook 14 A412FA-EK734T (14" FHD/i5-10210U/8GB/512GB SSD/Intel UHD/Win10/1.5kg)`,
        "price": "$988.49",
        "category": "laptop",
        "productor": "Asus",
        "img": "https://lh3.googleusercontent.com/6tvXgbEGh1b43wyxkxoVfNZ3YfKYl9AQC61n_1P_zZ1QtrLZLdi-QFdbDdplZfUfPPdu0Ek47h3rjlOkdw=w500-rw"
      }, {
        "name": `Laptop Dell G3 15 3590-N5I5518W (15" FHD/i5-9300H/8GB/512GB SSD/GTX 1650/Win10/2.3kg)`,
        "price": "$567.81",
        "category": "laptop",
        "productor": "Dell",
        "img": "https://lh3.googleusercontent.com/H44s7IPyy-jSqjdujA89L5Al0ajMb43PpCHs1AzboIK_KueRRX_DJVVc4b8bfzaCI8Utux-wHHCiMkvXJqo=w500-rw"
      }, {
        "name": `Laptop HP 15s-fq1022TU (8VY75PA) (15" FHD/i7-1065G7/8GB/512GB SSD/Intel UHD/Win10/1.7kg)`,
        "price": "$153.51",
        "category": "laptop",
        "productor": "HP",
        "img": "https://lh3.googleusercontent.com/ENWQOMkH5y5_BavnmrLQcrdu8pYLGd57H9upthP1SXHYEfgoa7YQtfMsDUzk6nYe9LPwTImHVRUXZQBStk8=w500-rw"
      }, {
        "name": `CPU Intel Core i5-9400F (6C/6T, 2.9 - 4.1 GHz, 9MB) - LGA 1151-v2`,
        "price": "$199.53",
        "category": "accesory",
        "productor": "Intel",
        "img": "https://lh3.googleusercontent.com/WkEFbZM02MrWi2xg_oYUV9wcU24tQoRwRaT4nZmB6Jen1HLD23PZhqkAed_eturDck_kstljO3B7l9H3fjaY=w500-rw"
      }, {
        "name": "Card MSI GeForce GTX 1050Ti 4GB GDDR5 OCV1 (GTX-1050-Ti-4GT-OCV1)",
        "price": "$630.61",
        "category": "accesory",
        "productor": "MSI",
        "img": "https://lh3.googleusercontent.com/osxjiLndX72N5TlsaE5VC5jkOx4Oa0ZtPARtPU1KWqNMzY_6h-jWVSJUur881SQxqInijzjRBxZaZtYXEBiV0MQGRx4P2VCH=w500-rw"
      }, {
        "name": `Laptop ASUS TUF Gaming FX505DD-AL186T (15" FHD/R5-3550H/8GB/512GB SSD/GTX 1050/Win10/2.2 kg)`,
        "price": "$444.81",
        "category": "laptop",
        "productor": "Asus",
        "img": "https://lh3.googleusercontent.com/LS1RIZ19enH0xMwF7L4x3h3zVK7duUueQjjUZb-7sRc3moNN4v3GmLPDlYr0v83a2jvUZczB-VkK-w_cAS4=w500-rw"
      }, {
        "name": `LG 27" 27MP59G-P (1920x1080/IPS/75Hz/5ms/FreeSync)`,
        "price": "$163.44",
        "category": "screen",
        "productor": "LG",
        "img": "https://lh3.googleusercontent.com/VqH0A1o-ESpFUxOGeVc-0B09aWSNrj_NeatFasP1dv_feKBwZQo8JCFQO7HgCOvy5-hXKOPsKkBT6ieckq8=w500-rw"
      }, {
        "name": "LCD MSI Optix G27C4 (1920 x 1080/VA/165Hz/1 ms/FreeSync)",
        "price": "$749.91",
        "category": "screen",
        "productor": "MSI",
        "img": "https://lh3.googleusercontent.com/7rNEDXiEw1hZ879YRJSIA5bNgFpQ8qQYh_RWYHP5UDTB1xHcu5n6gm__tYAnkEyBT_Yj0vbcky46A0e5e-g=w500-rw"
      }, {
        "name": `SSD Western Digital Green 240GB 2.5" SATA 3 - WDS240G2G0A`,
        "price": "$345.32",
        "category": "accesory",
        "productor": "Flashspan",
        "img": "https://lh3.googleusercontent.com/VDmltAlJo0pxGNGc5nRfH8-m_aU7Kd3XjtaMbQxJDvY9vsTHI487Zx4AUUwpMpc82ndnOZ8AGLgBa6iQMwM=w500-rw"
      },{
        "name": "LCD LG 27 inch 27GN800-B.ATV",
        "price": "$993.20",
        "category": "screen",
        "productor": "LG",
        "img": "https://phongvu.vn/api/products/201200062/default_image"
      }, {
        "name": "LCD PHILIPS 322M8CZ (1920 x 1080/VA/165Hz/1 ms/FreeSync)",
        "price": "$904.32",
        "category": "screen",
        "productor": "Philips",
        "img": "https://phongvu.vn/api/products/200800760/default_image"
      }, {
        "name": "E-Dra Hercules EGC203 Pro (Black)",
        "price": "$98.94",
        "category": "gear",
        "productor": "Meevee",
        "img": "https://phongvu.vn/api/products/200500012/default_image"
      }, {
        "name": `Laptop ASUS VivoBook 14 A412FA-EK734T (14" FHD/i5-10210U/8GB/512GB SSD/Intel UHD/Win10/1.5kg)`,
        "price": "$988.49",
        "category": "laptop",
        "productor": "Asus",
        "img": "https://lh3.googleusercontent.com/6tvXgbEGh1b43wyxkxoVfNZ3YfKYl9AQC61n_1P_zZ1QtrLZLdi-QFdbDdplZfUfPPdu0Ek47h3rjlOkdw=w500-rw"
      }, {
        "name": `Laptop Dell G3 15 3590-N5I5518W (15" FHD/i5-9300H/8GB/512GB SSD/GTX 1650/Win10/2.3kg)`,
        "price": "$567.81",
        "category": "laptop",
        "productor": "Dell",
        "img": "https://lh3.googleusercontent.com/H44s7IPyy-jSqjdujA89L5Al0ajMb43PpCHs1AzboIK_KueRRX_DJVVc4b8bfzaCI8Utux-wHHCiMkvXJqo=w500-rw"
      }, {
        "name": `Laptop HP 15s-fq1022TU (8VY75PA) (15" FHD/i7-1065G7/8GB/512GB SSD/Intel UHD/Win10/1.7kg)`,
        "price": "$153.51",
        "category": "laptop",
        "productor": "HP",
        "img": "https://lh3.googleusercontent.com/ENWQOMkH5y5_BavnmrLQcrdu8pYLGd57H9upthP1SXHYEfgoa7YQtfMsDUzk6nYe9LPwTImHVRUXZQBStk8=w500-rw"
      }, {
        "name": `CPU Intel Core i5-9400F (6C/6T, 2.9 - 4.1 GHz, 9MB) - LGA 1151-v2`,
        "price": "$199.53",
        "category": "accesory",
        "productor": "Intel",
        "img": "https://lh3.googleusercontent.com/WkEFbZM02MrWi2xg_oYUV9wcU24tQoRwRaT4nZmB6Jen1HLD23PZhqkAed_eturDck_kstljO3B7l9H3fjaY=w500-rw"
      }, {
        "name": "Card MSI GeForce GTX 1050Ti 4GB GDDR5 OCV1 (GTX-1050-Ti-4GT-OCV1)",
        "price": "$630.61",
        "category": "accesory",
        "productor": "MSI",
        "img": "https://lh3.googleusercontent.com/osxjiLndX72N5TlsaE5VC5jkOx4Oa0ZtPARtPU1KWqNMzY_6h-jWVSJUur881SQxqInijzjRBxZaZtYXEBiV0MQGRx4P2VCH=w500-rw"
      }, {
        "name": `Laptop ASUS TUF Gaming FX505DD-AL186T (15" FHD/R5-3550H/8GB/512GB SSD/GTX 1050/Win10/2.2 kg)`,
        "price": "$444.81",
        "category": "laptop",
        "productor": "Asus",
        "img": "https://lh3.googleusercontent.com/LS1RIZ19enH0xMwF7L4x3h3zVK7duUueQjjUZb-7sRc3moNN4v3GmLPDlYr0v83a2jvUZczB-VkK-w_cAS4=w500-rw"
      }, {
        "name": `LG 27" 27MP59G-P (1920x1080/IPS/75Hz/5ms/FreeSync)`,
        "price": "$163.44",
        "category": "screen",
        "productor": "LG",
        "img": "https://lh3.googleusercontent.com/VqH0A1o-ESpFUxOGeVc-0B09aWSNrj_NeatFasP1dv_feKBwZQo8JCFQO7HgCOvy5-hXKOPsKkBT6ieckq8=w500-rw"
      }, {
        "name": "LCD MSI Optix G27C4 (1920 x 1080/VA/165Hz/1 ms/FreeSync)",
        "price": "$749.91",
        "category": "screen",
        "productor": "MSI",
        "img": "https://lh3.googleusercontent.com/7rNEDXiEw1hZ879YRJSIA5bNgFpQ8qQYh_RWYHP5UDTB1xHcu5n6gm__tYAnkEyBT_Yj0vbcky46A0e5e-g=w500-rw"
      }, {
        "name": `SSD Western Digital Green 240GB 2.5" SATA 3 - WDS240G2G0A`,
        "price": "$345.32",
        "category": "accesory",
        "productor": "Flashspan",
        "img": "https://lh3.googleusercontent.com/VDmltAlJo0pxGNGc5nRfH8-m_aU7Kd3XjtaMbQxJDvY9vsTHI487Zx4AUUwpMpc82ndnOZ8AGLgBa6iQMwM=w500-rw"
      },{
        "name": "LCD LG 27 inch 27GN800-B.ATV",
        "price": "$993.20",
        "category": "screen",
        "productor": "LG",
        "img": "https://phongvu.vn/api/products/201200062/default_image"
      }, {
        "name": "LCD PHILIPS 322M8CZ (1920 x 1080/VA/165Hz/1 ms/FreeSync)",
        "price": "$904.32",
        "category": "screen",
        "productor": "Philips",
        "img": "https://phongvu.vn/api/products/200800760/default_image"
      }, {
        "name": "E-Dra Hercules EGC203 Pro (Black)",
        "price": "$98.94",
        "category": "gear",
        "productor": "Meevee",
        "img": "https://phongvu.vn/api/products/200500012/default_image"
      }, {
        "name": `Laptop ASUS VivoBook 14 A412FA-EK734T (14" FHD/i5-10210U/8GB/512GB SSD/Intel UHD/Win10/1.5kg)`,
        "price": "$988.49",
        "category": "laptop",
        "productor": "Asus",
        "img": "https://lh3.googleusercontent.com/6tvXgbEGh1b43wyxkxoVfNZ3YfKYl9AQC61n_1P_zZ1QtrLZLdi-QFdbDdplZfUfPPdu0Ek47h3rjlOkdw=w500-rw"
      }, {
        "name": `Laptop Dell G3 15 3590-N5I5518W (15" FHD/i5-9300H/8GB/512GB SSD/GTX 1650/Win10/2.3kg)`,
        "price": "$567.81",
        "category": "laptop",
        "productor": "Dell",
        "img": "https://lh3.googleusercontent.com/H44s7IPyy-jSqjdujA89L5Al0ajMb43PpCHs1AzboIK_KueRRX_DJVVc4b8bfzaCI8Utux-wHHCiMkvXJqo=w500-rw"
      }, {
        "name": `Laptop HP 15s-fq1022TU (8VY75PA) (15" FHD/i7-1065G7/8GB/512GB SSD/Intel UHD/Win10/1.7kg)`,
        "price": "$153.51",
        "category": "laptop",
        "productor": "HP",
        "img": "https://lh3.googleusercontent.com/ENWQOMkH5y5_BavnmrLQcrdu8pYLGd57H9upthP1SXHYEfgoa7YQtfMsDUzk6nYe9LPwTImHVRUXZQBStk8=w500-rw"
      }, {
        "name": `CPU Intel Core i5-9400F (6C/6T, 2.9 - 4.1 GHz, 9MB) - LGA 1151-v2`,
        "price": "$199.53",
        "category": "accesory",
        "productor": "Intel",
        "img": "https://lh3.googleusercontent.com/WkEFbZM02MrWi2xg_oYUV9wcU24tQoRwRaT4nZmB6Jen1HLD23PZhqkAed_eturDck_kstljO3B7l9H3fjaY=w500-rw"
      }, {
        "name": "Card MSI GeForce GTX 1050Ti 4GB GDDR5 OCV1 (GTX-1050-Ti-4GT-OCV1)",
        "price": "$630.61",
        "category": "accesory",
        "productor": "MSI",
        "img": "https://lh3.googleusercontent.com/osxjiLndX72N5TlsaE5VC5jkOx4Oa0ZtPARtPU1KWqNMzY_6h-jWVSJUur881SQxqInijzjRBxZaZtYXEBiV0MQGRx4P2VCH=w500-rw"
      }, {
        "name": `Laptop ASUS TUF Gaming FX505DD-AL186T (15" FHD/R5-3550H/8GB/512GB SSD/GTX 1050/Win10/2.2 kg)`,
        "price": "$444.81",
        "category": "laptop",
        "productor": "Asus",
        "img": "https://lh3.googleusercontent.com/LS1RIZ19enH0xMwF7L4x3h3zVK7duUueQjjUZb-7sRc3moNN4v3GmLPDlYr0v83a2jvUZczB-VkK-w_cAS4=w500-rw"
      }, {
        "name": `LG 27" 27MP59G-P (1920x1080/IPS/75Hz/5ms/FreeSync)`,
        "price": "$163.44",
        "category": "screen",
        "productor": "LG",
        "img": "https://lh3.googleusercontent.com/VqH0A1o-ESpFUxOGeVc-0B09aWSNrj_NeatFasP1dv_feKBwZQo8JCFQO7HgCOvy5-hXKOPsKkBT6ieckq8=w500-rw"
      }, {
        "name": "LCD MSI Optix G27C4 (1920 x 1080/VA/165Hz/1 ms/FreeSync)",
        "price": "$749.91",
        "category": "screen",
        "productor": "MSI",
        "img": "https://lh3.googleusercontent.com/7rNEDXiEw1hZ879YRJSIA5bNgFpQ8qQYh_RWYHP5UDTB1xHcu5n6gm__tYAnkEyBT_Yj0vbcky46A0e5e-g=w500-rw"
      }, {
        "name": `SSD Western Digital Green 240GB 2.5" SATA 3 - WDS240G2G0A`,
        "price": "$345.32",
        "category": "accessory",
        "productor": "Flashspan",
        "img": "https://lh3.googleusercontent.com/VDmltAlJo0pxGNGc5nRfH8-m_aU7Kd3XjtaMbQxJDvY9vsTHI487Zx4AUUwpMpc82ndnOZ8AGLgBa6iQMwM=w500-rw"
      },]
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
    let filterOption = event.target.value
    let filteredProduct = products.filter(item => item.category === filterOption)
    console.log(filterOption) 
    this.setState({
      products: filteredProduct
    })
  }
  producerClickHandler(event) {
    let products = [...this.products]
    let filterOption = event.target.value
    let filteredProduct = products.filter(item => item.productor === filterOption)
    console.log(filterOption) 
    this.setState({
      products: filteredProduct
    })
  }

  render() {
    return(
      <Container>
        <h2><Link onClick={this.rerenderAllProducts.bind(this)} to="/products">Products</Link></h2>
        <Filter 
          categoriesClick={this.categoryClickHandler.bind(this)}
          productorClick={this.producerClickHandler.bind(this)}
        />
        <p>{`Current: ${this.state.products.length} products`}</p>
        <Row>
          {
            this.state.products.map(item => (
              <Col className="mt-3" sm="3" style={{borderBottom: "1px solid black", boxSizing: 'border-box'}}>
                <Link to={{
                  pathname: "/detail-product/",
                  item
                }}>
                  <Card style={{border: 'none', position: 'relative'}}>
                    <CardImg top width="100%" src={item.img} />
                    <CardBody>
                      <CardTitle tag="h5">{item.name}</CardTitle>
                    </CardBody>
                    <div className="position-absolute bottom-0 end-0">
                        <CardSubtitle style={{height: '10%'}} tag="h6" className="mb-2 text-muted">{item.price}</CardSubtitle>
                        <CardText style={{height: '10%'}}>{item.productor}</CardText>
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