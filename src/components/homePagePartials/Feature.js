import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import featureEffect from "../../images/featureEffect.svg";
import featureIcon from "../../images/featureIcon.svg";
import { ProductData } from "../../utils";

function Features() {
  return (
    <section className="feature-section mt-80">
      <img className="bgEffect" src={featureEffect} />
      <Container>
        <Row className="justify-content-center">
          <Col md="5" className="text-center">
            <h1 className="text-capitalize fw-B">Faetures - the seeda solution</h1>
            <p className="fw-4">{ProductData.homePageText}</p>
          </Col>
        </Row>
        <Row>
          <Col md={4} className="text-center mt-30">
            <img src={featureIcon} className="w-100" style={{maxWidth: '338px'}}/>
            <h3 className="text-capitalize fw-6 mt-4 mb-3">seeda crawler</h3>
            <p className="fw-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dapibus est ac nunc gravida dapibus.</p>
          </Col>
          <Col md={4} className="text-center mt-30">
            <img src={featureIcon} className="w-100" style={{maxWidth: '338px'}} />
            <h3 className="text-capitalize fw-6 mt-4 mb-3">seeda crawler</h3>
            <p className="fw-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dapibus est ac nunc gravida dapibus.</p>
          </Col>
          <Col md={4} className="text-center mt-30">
            <img src={featureIcon} className="w-100" style={{maxWidth: '338px'}} />
            <h3 className="text-capitalize fw-6 mt-4 mb-3">seeda crawler</h3>
            <p className="fw-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dapibus est ac nunc gravida dapibus.</p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Features;