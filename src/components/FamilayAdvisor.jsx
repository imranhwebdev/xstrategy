import React, { Component } from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import blockChainShape from '../assets/img/blockchain-shape.png'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import legal from '../assets/img/family-img.png'

export default class FamilayAdvisor extends Component {
  render() {
    return (
      <section className='section-padding familay position-relative'>
        <div className="blockchain-shape position-absolute"><img src={blockChainShape} alt="" /></div>
        <Container>
          <Row className='align-items-center'>
            <Col md="6">
              <div className="legal-img"  data-aos="fade-left"
                data-aos-duration="800">
                <img src={legal} alt="" />
              </div>
            </Col>
            <Col md="6">
              <div className="blockchain-content ps-lg-4 pe-0">
                <h3 className='mb-4'  data-aos="fade-up"
                data-aos-duration="800">Family Office Advisory</h3>
                <p className='mb-3'  data-aos="fade-up"
                data-aos-duration="1000">XSTRATEGY offers comprehensive and customized Family Office strategic advisory services. We provide technical analysis and subject matter expertise (SME) in the areas of Fintech, Blockchain, Cryptocurrency and Gaming.</p>
                <p className='mb-3' data-aos="fade-up"
                data-aos-duration="1200">As a specialised partner, XSTRATEGY serves as an Interim Chief Information Officer (CIO) and Chief Technology Officer (CTO) to progressive Family Offices filling knowledge and competence gaps.</p>
                <p className='mb-3' data-aos="fade-up"
                data-aos-duration="1400">Ultra-wealthy families require professional and expert support more than ever before. Our focused attention is on building relationships with next-generation of Family Office leaders. </p>
                <Button variant="outline-primary" className='mt-4 md-lg-5'>
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
