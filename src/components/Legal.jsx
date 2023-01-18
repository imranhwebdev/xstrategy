import React, { Component } from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import legal from '../assets/img/legal-img.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'


export default class Legal extends Component {
  render() {
    return (
      <section className='section-padding legal bg-white'>
        <Container>
          <Row className='align-items-center'>
            <Col md="6">
              <div className="blockchain-content ps-lg-5">
                <h3 className='mb-4' data-aos="fade-up"
                data-aos-duration="800">Legal Advisory</h3>
                <p className='mb-3' data-aos="fade-up"
                data-aos-duration="1000">The legal compliance of your Web3 Gaming business is crucial for the success of your launch and ongoing gaming operations. Blockchain gaming projects and their digital economies supporting different transactions are legally complex.</p>
                <p className='mb-3' data-aos="fade-up"
                data-aos-duration="1200">Because of this, we work collaboratively with Blockchain leaders from specialised law firms to address regulatory concerns and seize strategic opportunities. Our network of Legal Advisors focus primarily on Blockchain, Smart Contracts and Cryptocurrency matters. Whether you are just getting started in blockchain or have deep industry expertise, we are here to help.</p>
                <Button variant="outline-primary" className='mt-4 md-lg-5'>
                  Learn More <FontAwesomeIcon icon={faAngleDoubleRight} />
                </Button>
              </div>
            </Col>
            <Col md="6">
              <div className="legal-img" data-aos="fade-right"
                data-aos-duration="800">
                <img src={legal} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}
