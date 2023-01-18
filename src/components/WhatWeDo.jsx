import React, { Component } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import weimg from '../assets/img/what-we-do.png'
import SectionTitle from './SectionTitle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'


export default class WhatWeDo extends Component {
  render() {
    return (
      <section className='section-padding whatWeDo bg-white'>
        <Container>
          <SectionTitle
            darkClass="light"
            meta="Our Mission"
            title="What We Do"
            description="The XSTRATEGY team provides trusted guidance and advice to Web3 Founders and C-Suite Executives working in the gaming and metaverse industries." 
          />
          <Row className='align-items-center'>
            <Col lg="6" className='text-center'>
              <div className="whatWeDo-img" data-aos="fade-right" data-aos-duration="1000">
                <img className='h-100' src={weimg} alt="" />
              </div>
            </Col>
            <Col lg="6">
              <div className="whatWeDo-content">
                <h3 className='mb-3 mb-md-4' data-aos="fade-up" data-aos-duration="1000">Enabling Next-Generation Crypto Payments</h3>
                <p className='mb-2 mb-md-3' data-aos="fade-up" data-aos-duration="1200">We are subject matter experts in delivering compliant payments software and solutions that power the global web3 gaming and metaverse digital economies.</p>
                <p  data-aos="fade-up" data-aos-duration="1400">Provisioning of seamless fiat and crypto on-off ramps, digital asset payment, and fraud prevention for the Blockchain.</p>
                <Button variant="outline-primary" className='mt-4 mt-lg-5'  data-aos="fade-up" data-aos-duration="1600">
                  Learn More <FontAwesomeIcon icon={faAngleDoubleRight} />
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}
