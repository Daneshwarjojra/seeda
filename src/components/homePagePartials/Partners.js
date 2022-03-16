import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import partners from "../../images/partners.svg";
import featureEffect from "../../images/featureEffect.svg";
import { ProductData } from "../../utils";

function Partners() {
  return (
    <section className="seeda-partners position-relative mt-80 mb-5">
      <img className="bgEffect" src={featureEffect} />
      <Container>
        <Row className="justify-content-center">
          <Col md="12" className="text-center">
            <h1 className="text-capitalize fw-B">features - the seeda solution</h1>
            <p className="fw-4">{ProductData.homepageSolutionText}</p>
            <img src={partners} className="w-100" style={{maxWidth: '1113px'}}/>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Partners;