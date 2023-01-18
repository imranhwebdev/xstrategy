import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import img1 from "../assets/img/brands/5.png";
import img2 from "../assets/img/brands/2.png";
import img3 from "../assets/img/brands/regency_casino.png";
import img4 from "../assets/img/brands/rw_manila.png";
import img5 from "../assets/img/brands/amazix-logotype.png";
import img6 from "../assets/img/brands/starcruises.png";
import img7 from "../assets/img/brands/Aristocrat-logo.png";
import img8 from "../assets/img/brands/Football_Pools.png";
import img9 from "../assets/img/brands/1.png";
import img10 from "../assets/img/brands/Grosvenor-Casino-Logo.png";
import img11 from "../assets/img/brands/11.png";
import img12 from "../assets/img/brands/4.png";
import img13 from "../assets/img/brands/lonase-600x375.png";
import img14 from "../assets/img/brands/pagcor.png";
import badge from "../assets/img/bade-img.svg";

export default class Brands extends Component {
  render() {
    return (
      <section className="brands position-relative">
        <div className="bg-white brands-inner">
          <Container className="position-relative">
            <Row className="align-items-center">
              <Col xl="2" className="d-none d-xl-block">
                <div
                  className="brands-text"
                  data-aos="fade-right"
                  data-aos-duration="700"
                >
                  <p>
                    Trusted by innovative market leading Web 2.0 and Web 3.0
                    companies
                  </p>
                </div>
              </Col>
              <Col xl="9" md="12">
                <div className="brands-badge position-absolute">
                  <img src={badge} alt="" />
                </div>
                <div className="brands-imgs d-flex flex-wrap align-items-center">
                  <Marquee speed={50}>
                    <div
                      className="brands-img"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                    >
                      <img src={img1} alt="" />
                    </div>
                    <div
                      className="brands-img"
                      data-aos="fade-up"
                      data-aos-duration="1300"
                    >
                      <img src={img2} alt="" />
                    </div>
                    <div
                      className="brands-img"
                      data-aos="fade-up"
                      data-aos-duration="1600"
                    >
                      <img src={img3} alt="" />
                    </div>
                    <div
                      className="brands-img"
                      data-aos="fade-up"
                      data-aos-duration="1900"
                    >
                      <img src={img4} alt="" />
                    </div>
                    <div
                      className="brands-img"
                      data-aos="fade-up"
                      data-aos-duration="2200"
                    >
                      <img src={img5} alt="" />
                    </div>
                    <div
                      className="brands-img"
                      data-aos="fade-up"
                      data-aos-duration="2200"
                    >
                      <img src={img6} alt="" />
                    </div>
                    <div
                      className="brands-img"
                      data-aos="fade-up"
                      data-aos-duration="2200"
                    >
                      <img src={img7} alt="" />
                    </div>
                    <div
                      className="brands-img"
                      data-aos="fade-up"
                      data-aos-duration="2200"
                    >
                      <img src={img8} alt="" />
                    </div>
                    <div
                      className="brands-img"
                      data-aos="fade-up"
                      data-aos-duration="2200"
                    >
                      <img src={img9} alt="" />
                    </div>
                    <div
                      className="brands-img"
                      data-aos="fade-up"
                      data-aos-duration="2200"
                    >
                      <img src={img10} alt="" />
                    </div>
                    <div
                      className="brands-img"
                      data-aos="fade-up"
                      data-aos-duration="2200"
                    >
                      <img src={img11} alt="" />
                    </div>
                    <div
                      className="brands-img"
                      data-aos="fade-up"
                      data-aos-duration="2200"
                    >
                      <img src={img12} alt="" />
                    </div>
                    <div
                      className="brands-img"
                      data-aos="fade-up"
                      data-aos-duration="2200"
                    >
                      <img src={img13} alt="" />
                    </div>
                    <div
                      className="brands-img"
                      data-aos="fade-up"
                      data-aos-duration="2200"
                    >
                      <img src={img14} alt="" />
                    </div>
                  </Marquee>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    );
  }
}
