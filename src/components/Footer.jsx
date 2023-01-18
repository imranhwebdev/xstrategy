import { useEffect, useState } from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';
import Cta from './Cta';
import Logo from '../assets/img/footer-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faFacebookF, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  const [isFixed, setIsFixed] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);
  const handleClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(window.pageYOffset);
      if (window.pageYOffset > 500) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <Cta />
      <footer className="footer position-relative shape">
        <Container>
          <Row>
            <Col lg="5">
              <a href="/" className="site-logo">
                <img src={Logo} alt="" />
              </a>
              <p>XSTRATEGY is a Singapore-based web3 management consulting firm specializing in blockchain and cryptocurrency compliance, fintech, digital finance, and payments</p>
            </Col>
            <Col lg="7">
              <Row>
                <Col xl='3' lg="2" md="3" className='mb-4 mb-md-0'>
                  <div className="footer-item">
                    <h5>Company</h5>
                    <ul>
                      <li><a href="/">About us</a></li>
                      <li><a href="/">Blog</a></li>
                      <li><a href="/">Careers</a></li>
                    </ul>
                  </div>
                </Col>
                <Col xl='6' lg="6" md="6" className='mb-4 mb-md-0'>
                  <div className="footer-item ps-md-5">
                    <h5>Products</h5>
                    <ul>
                      <li><a href="/">Transaction Gateway</a></li>
                      <li><a href="/">Blockchain Wallet</a></li>
                      <li><a href="/">Crypto Point-of-Sale Device</a></li>
                    </ul>
                  </div>
                </Col>
                <Col xl='3' lg="4" md="3">
                  <div className="footer-item">
                    <h5>Services</h5>
                    <ul>
                      <li><a href="/">C-Suite Advisory</a></li>
                      <li><a href="/">Blockchain Banking</a></li>
                      <li><a href="/">Legal Advisory</a></li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className='align-items-center'>
            <Col>
              <div className="footer-copyright mt-4 pt-4">
                <Row>
                  <Col md="7">
                    <p className='m-0'>&copy; 2023 XSTRATEGY. All Rights Reserved</p>
                  </Col>
                  <Col md="5" className='mt-4 mt-md-0'>
                    <ul className="social-media d-flex align-items-center justify-content-end">
                      <li>
                        <a href="/" className='social-link'><FontAwesomeIcon icon={faGithub} /></a>
                      </li>
                      <li>
                        <a href="/" className='social-link'><FontAwesomeIcon icon={faTwitter} /></a>
                      </li>
                      <li>
                        <a href="/" className='social-link'><FontAwesomeIcon icon={faFacebookF} /></a>
                      </li>
                      <li>
                        <a href="/" className='social-link'><FontAwesomeIcon icon={faYoutube} /></a>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
      <Button variant='primary' onClick={handleClick} className={`backtop ${isFixed ? 'show' : ''}`}>
        <FontAwesomeIcon icon={faAngleUp} className="m-0" />
      </Button>
    </>
  )

}
export default Footer;