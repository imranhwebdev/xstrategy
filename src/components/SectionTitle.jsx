import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'

export default class SectionTitle extends Component {
  render() {
    return (
        <>
            <Row className='text-center justify-content-center'>
            <Col lg='9' md='10'>
            <div className="section-title">
                <span className={`d-inline-block text-primary mb-3 mb-lg-4 text-uppercase ${this.props.darkClass}`}  data-aos="fade-up" data-aos-duration="1000">{this.props.meta}</span>
                <h2 className={`fw-fw-bolder mb-3 mb-lg-4 ${this.props.darkClass}`}  data-aos="fade-up" data-aos-duration="1200">{this.props.title}</h2>
                <p className={`fw-medium ${this.props.darkClass}`} data-aos="fade-up" data-aos-duration="1400">{this.props.description}</p>
            </div>
            </Col>
        </Row>
        </>
    )
  }
}
