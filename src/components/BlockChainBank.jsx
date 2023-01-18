import React, { Component } from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import blockChain from '../assets/img/banking-img.png'
import blockChainShape from '../assets/img/blockchain-shape.png'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class BlockChainBank extends Component {
  render() {
    return (
      <section className='section-padding blockchain position-relative'>
        <div className="blockchain-shape position-absolute"><img src={blockChainShape} alt="" /></div>
        <Container>
          <Row className='align-items-center'>
            <Col md="6">
              <div className="blockchain-content">
                <h3 className='mb-3 mb-md-4' data-aos="fade-up"
                data-aos-duration="800">Blockchain Banking</h3>
                <p className='mb-2 mb-md-3' data-aos="fade-up"
                data-aos-duration="1000">XSTRATEGY is partnered with numerous crypto-friendly banks that provide comprehensive banking services.</p>
                <p className='mb-2 mb-md-3' data-aos="fade-up"
                data-aos-duration="1200">For both established and young enterprises from the blockchain, fintech, and cryptocurrency sectors so that you can concentrate on your core business - developing and publishing games!</p>
                <Button variant="outline-primary" className='mt-3 mt-md-4 md-lg-5' >
                  Learn More <FontAwesomeIcon icon={faAngleDoubleRight} />
                </Button>
              </div>
            </Col>
            <Col md="6">
              <div className="blockchain-img"  data-aos="fade-right"
                data-aos-duration="800">
                <img src={blockChain} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}
