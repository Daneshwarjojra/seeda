import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import banner from "../../images/banner.svg";
import right from "../../images/right.svg";
import { ProductData } from "../../utils";

function Header({handleHomeView}) {
  return (
    <header className="header-section mt-80 pt-80 mb-5 sm-mt-0 pb-5">
      <Container fluid>
        <Row>
          <Col md={4} className="ml-(13%) sm-text-center">
            <h1 className="fw-B">Generate intelligent demand for your business using our real time marketing technology</h1>
            <p className="fw-4">{ProductData.text}</p>
            <Button variant="primary" className="text-white text-capitalize" onClick={handleHomeView}>get started today<img src={right} /></Button>
          </Col>
          <Col md={6} className="mt-5 sm-text-center">
            <img src={banner} className="w-100"/>
          </Col>
        </Row>
      </Container>
    </header>
  )
}

export default Header;