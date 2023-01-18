import React, { useState } from "react";
import { Button, Col, Container, ProgressBar, Row } from "react-bootstrap";
import serviecShape from "../assets/img/services-shape.png";
import logoBig from "../assets/img/logo-big.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

function Services() {
  const [servicesData] = useState([
    {
      img: "/img/services/1.svg",
      title: "Mobile and Web SDK",
      text: "Provide fast, frictionless payment experiences in iOS and Android mobile apps and web3 e-marketplace websites for players everywhere.",
    },
    {
      img: "/img/services/2.svg",
      title: "Reduce development costs",
      text: "By eliminating integration time, reducing investment cost and relying on XSTRATEGY Product Owners and Development Teams to continuously.",
    },
    {
      img: "/img/services/3.svg",
      title: "Accelerate time to market",
      text: "Our C-Suite Payment Business and Technology Consultants will provide expert guidance, and streamline the process of your digital gaming economy.",
    },
    {
      img: "/img/services/4.svg",
      title: "Increase conversions and sales",
      text: "Through a customizable, in-app, white-label, native mSDK including one-click checkout for both traditional fiat and blockchain-based alternative payment methods.",
    },
  ]);
  return (
    <section className="services shape section-padding overflow-hidden position-relative">
      <div className="services-shape position-absolute">
        <img src={serviecShape} alt="" />
      </div>
      <div className="services-logo position-absolute">
        <img src={logoBig} alt="" />
      </div>
      <Container>
        <Row>
          <Col lg="5" className="position-sticky">
            <div
              className="services-timeline bg-primary w-100 rounded-1"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <ul className="d-flex align-items-center">
                <li className="flex-grow-0">
                  <span className="fw-bold">01</span>
                </li>
                <li className="flex-grow-0 w-100">
                  <ProgressBar now={30}></ProgressBar>
                </li>
                <li className="flex-grow-0">
                  <span className="fw-bold">03</span>
                </li>
                <li className="flex-grow-0">
                  <span className="fw-bold">04</span>
                </li>
              </ul>
            </div>
            <div className="whatWeDo-content pt-2 pt-md ps-0 pb-5 pb-lg-0">
              <span
                className="meta_text text-uppercase text-primary d-inline-block mb-3"
                data-aos="fade-up"
                data-aos-duration="1400"
              >
                digital entertainment
              </span>
              <h3
                className="text-white-2 mb-4"
                data-aos="fade-up"
                data-aos-duration="1600"
              >
                Web3 Gaming and Digital Entertainment Brands
              </h3>
              <p className="mb-3" data-aos="fade-up" data-aos-duration="1800">
              Through white-label or bespoke custodial or non-custodial wallet solutions, Web3 Gaming companies can access an extensive global blockchain-based payments network for real-time payment mechanism (RTP), cross-border payments processing and local acquiring with advanced business intelligence and real-time fraud prevention.
              </p>
              <p data-aos="fade-up" data-aos-duration="1900">
              XSTRATEGY has partnered with best-in-class, blockchain native technology stacks that make-up a secure, composable, blockchain agnostic financial ecosystem in order to provide uninterrupted gaming experiences with increased payments convenience and speed.
              </p>
              <Button
                variant="primary"
                className="mt-4 mt-lg-5"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                Explore More <FontAwesomeIcon icon={faInfoCircle} />
              </Button>
            </div>
          </Col>
          <Col
            lg={{ span: 6, offset: 1 }}
            className="d-md-flex flex-wrap d-lg-block gap-md-4 gap-lg-0"
          >
            {servicesData.map((item, index) => (
              <div
                className="services-card"
                key={index}
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="services-card-icon">
                  <img src={item.img} alt="" />
                </div>
                <h4 className="mb-3">{item.title}</h4>
                <p>{item.text}</p>
                <a href="/" className="d-flex align-items-center gap-2">
                  Learn More <FontAwesomeIcon icon={faArrowRight} />
                </a>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Services;
