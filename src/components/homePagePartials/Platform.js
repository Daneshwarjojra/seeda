import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import right from "../../images/right.svg";
import desktop from "../../images/desktop.png";
import mobile from "../../images/mobile.png";
import framework from "../../images/framework.jpg";
import { ProductData } from "../../utils";

function Platform({handleHomeView}) {
  return (
    <section className="platform-section pt-80 pb-5 mb-5">
      <Container fluid>
        <Row className="align-items-center">
          <Col md="6" className="text-sm-center">
            <img src={desktop} className="w-100" style={{maxWidth: '692px'}} />
          </Col>
          <Col md="6" className="pr-(13%) text-sm-center">
            <h1 className="text-capitalize fw-B mt-2 mb-3">seeda crawler</h1>
            <p className="fw-4">{ProductData.text}</p>
            <Button variant="primary" className="text-white text-capitalize" onClick={handleHomeView}>get started today<img src={right} /></Button>
          </Col>
        </Row>
        <Row className="mt-80 align-items-center">
          <Col md="6" className="order-2 order-md-1 pl-(13%) mt-5 text-sm-center">
            <h1 className="text-capitalize fw-B mt-2 mb-3">seeda crawler</h1>
            <p className="fw-4">{ProductData.text}</p>
            <Button variant="primary" className="text-white text-capitalize" onClick={handleHomeView}>get started today<img src={right} /></Button>
          </Col>
          <Col md="6" className="order-1 order-md-2 text-center">
            <img src={mobile} className="w-100" style={{maxWidth: '505px'}}/>
          </Col>
        </Row>
        <Row className="mt-80 align-items-center">
          <Col md="6" className="pl-(13%) text-sm-center mb-5">
            <h1 className="text-capitalize fw-B mt-2 mb-3">seeda crawler</h1>
            <p>{ProductData.homepageSolutionText}<br/>{ProductData.text}{ProductData.homepageSolutionText}<br/>{ProductData.text}</p>
          </Col>
          <Col md="6">
            <div className="shadow-box"></div>
          </Col>
        </Row>
        <Row className="mt-80 align-items-center">
          <Col md="6" className="order-1 order-md-2 pr-(13%) text-sm-center">
            <h1 className="text-capitalize fw-B mt-2 mb-3">seeda crawler</h1>
            <p className="fw-4">{ProductData.text}</p>
            <Button variant="primary" className="text-white text-capitalize" onClick={handleHomeView}>get started today<img src={right} /></Button>
          </Col>
          <Col md="6" className="order-2 order-md-1 text-center mt-5">
            <img src={framework} className="w-100 " style={{maxWidth: '615px'}}/>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Platform;