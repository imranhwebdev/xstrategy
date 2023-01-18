import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import bannerShape from '../assets/img/banner-bg-shape.png'
import Brands from './Brands'

export default class Banner extends Component {
  render() {
    return (
      <section className='banner overflow-hidden position-relative shape'>
        <div className="banner-img position-absolute"><img src={bannerShape} alt="" data-aos="fade-down" data-aos-duration="700"/></div>
        <Container>
          <Row>
            <Col lg={{span:10, offset:1}} className="text-center">
              <div className="banner-content">
                <span className="meta_text text-uppercase text-primary d-inline-block mb-2"  data-aos="fade-up" data-aos-duration="1200">Web3 Gaming</span>
                <h1 className='mb-4' data-aos="fade-up" data-aos-duration="1800">Financial Services for <span>Metaverse and</span> Web3 Gaming Platforms</h1>
                <p className='mb-4 mb-lg-5 fw-semibold' data-aos="fade-up" data-aos-duration="2300">
                  XSTRATEGY is a Singapore-based Web3 Management Consulting firm specializing in blockchain and cryptocurrency compliance, fintech, digital finance, and payments.
                </p>
                <Button variant="primary" data-aos="fade-up" data-aos-duration="2800">
                  Get Started
                  <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.41057 7.04989L5.21057 4.24989C5.36612 4.09433 5.54946 3.98322 5.76057 3.91655C5.97168 3.84989 6.18834 3.83878 6.41057 3.88322L7.27723 4.06655C6.67723 4.77767 6.20501 5.42211 5.86057 5.99989C5.51612 6.57767 5.18279 7.27767 4.86057 8.09989L2.41057 7.04989ZM5.82723 8.56655C6.08279 7.76655 6.4299 7.011 6.86857 6.29989C7.30768 5.58878 7.83834 4.92211 8.46057 4.29989C9.43834 3.32211 10.555 2.59144 11.8106 2.10789C13.0661 1.62478 14.2383 1.47767 15.3272 1.66655C15.5161 2.75544 15.3717 3.92767 14.8939 5.18322C14.4161 6.43878 13.6883 7.55544 12.7106 8.53322C12.0995 9.14433 11.4328 9.675 10.7106 10.1252C9.98834 10.575 9.22723 10.9277 8.42723 11.1832L5.82723 8.56655ZM10.4272 6.56655C10.6828 6.82211 10.9968 6.94989 11.3692 6.94989C11.7412 6.94989 12.055 6.82211 12.3106 6.56655C12.5661 6.311 12.6939 5.997 12.6939 5.62455C12.6939 5.25255 12.5661 4.93878 12.3106 4.68322C12.055 4.42767 11.7412 4.29989 11.3692 4.29989C10.9968 4.29989 10.6828 4.42767 10.4272 4.68322C10.1717 4.93878 10.0439 5.25255 10.0439 5.62455C10.0439 5.997 10.1717 6.311 10.4272 6.56655ZM9.96057 14.5832L8.8939 12.1332C9.71612 11.811 10.419 11.4777 11.0026 11.1332C11.5857 10.7888 12.2328 10.3166 12.9439 9.71655L13.1106 10.5832C13.155 10.8054 13.1439 11.025 13.0772 11.2419C13.0106 11.4583 12.8995 11.6443 12.7439 11.7999L9.96057 14.5832ZM3.47723 10.6999C3.86612 10.311 4.33834 10.1137 4.8939 10.1079C5.44946 10.1026 5.92168 10.2943 6.31057 10.6832C6.69946 11.0721 6.8939 11.5443 6.8939 12.0999C6.8939 12.6554 6.69946 13.1277 6.31057 13.5166C6.03279 13.7943 5.56901 14.0332 4.91923 14.2332C4.26901 14.4332 3.37168 14.611 2.22723 14.7666C2.38279 13.6221 2.56057 12.7277 2.76057 12.0832C2.96057 11.4388 3.19946 10.9777 3.47723 10.6999Z" fill="currentColor" />
                  </svg>
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
        <Brands />
      </section>
    )
  }
}
