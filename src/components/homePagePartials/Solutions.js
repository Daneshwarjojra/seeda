import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import solutionEffect from "../../images/solutionEffect.svg";
import solutionIcon from "../../images/solutionIcon.svg";
import { ProductData } from "../../utils";

function Solutions() {
  return (
    <section className="seeda-crawler-solutions mt-80">
      <img className="bgEffect mt-80 pt-80" src={solutionEffect} />
      <Container>
        <Row className="justify-content-center">
          <Col md="5" className="text-center">
            <h1 className="text-capitalize fw-B mt-80 mb-4">seeda crawler</h1>
            <p className="text-white">{ProductData.homePageText}</p>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col md="4" className="py-5 sm-text-center">
            <img src={solutionIcon} />
            <h3 className="text-capitalize fw-6 mt-2 mb-3">seeda crawler</h3>
            <p className="text-white">{ProductData.homepageSolutionText}</p>
          </Col>
          <Col md="4" className="py-5 border-start border-end border-white sm-text-center">
            <img src={solutionIcon} />
            <h3 className="text-capitalize fw-6 mt-2 mb-3">seeda crawler</h3>
            <p className="text-white">{ProductData.homepageSolutionText}</p>
          </Col>
          <Col md="4" className="py-5 sm-text-center">
            <img src={solutionIcon} />
            <h3 className="text-capitalize fw-6 mt-2 mb-3">seeda crawler</h3>
            <p className="text-white">{ProductData.homepageSolutionText}</p>
          </Col>
        </Row>
        <Row className="pb-5 border-top border-white">
          <Col md="4" className="py-5 sm-text-center">
            <img src={solutionIcon} />
            <h3 className="text-capitalize fw-6 mt-2 mb-3">seeda crawler</h3>
            <p className="text-white">{ProductData.homepageSolutionText}</p>
          </Col>
          <Col md="4" className="py-5 border-start border-end border-white sm-text-center">
            <img src={solutionIcon} />
            <h3 className="text-capitalize fw-6 mt-2 mb-3">seeda crawler</h3>
            <p className="text-white">{ProductData.homepageSolutionText}</p>
          </Col>
          <Col md="4" className="py-5 sm-text-center">
            <img src={solutionIcon} />
            <h3 className="text-capitalize fw-6 mt-2 mb-3">seeda crawler</h3>
            <p className="text-white">{ProductData.homepageSolutionText}</p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Solutions;