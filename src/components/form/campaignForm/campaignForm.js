import React from "react";
import { Col, Row, Form } from "react-bootstrap";
import { ProductData } from "../../../utils";

function CampaignForm() {
  return (
    <Row className="mb-5">
      <Col md="6" className="mt-5">
        <h1>{ProductData.campaignTitle}</h1>
        <p>{ProductData.text}</p>
      </Col>
      <Col md="6" className="mt-5">
        <p>{ProductData.fillForm}</p>
        <Form>
          <Form.Group as={Col} md="12" className="mb-3">
            <Form.Control 
              type="text"
              className="text-uppercase"
              placeholder="Campaign name"
              name="campaignName"
              onChange={e=>  e.target.value}
            />
          </Form.Group>
          <Form.Group as={Col} md="12" className="mb-3">
            <Form.Control 
              type="text"
              className="text-uppercase"
              placeholder="campaign start date"
            />
          </Form.Group>
          <Form.Group as={Col} md="12" className="mb-3">
            <Form.Control 
              type="text"
              className="text-uppercase"
              placeholder="campaign end date"
            />
          </Form.Group>
          <Form.Group as={Col} md="12" className="mb-3">
            <Form.Control 
              type="text"
              className="text-uppercase"
              placeholder="enter 5 potential clients (name or websites)"
            />
          </Form.Group>
        </Form>
      </Col>
    </Row>
  )
}

export default CampaignForm;