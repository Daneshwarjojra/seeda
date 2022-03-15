import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import { ProductData } from "../../../utils";

function BusinessForm() {
  return(
    <Row key="businessRow" className="mb-5">
      <Col md="6" className="mt-5">
        <h1 className="font-weight-bold">{ProductData.businessTitle}</h1>
        <p>{ProductData.text}</p>
      </Col>
      <Col md="6" className="mt-5">
        <p>{ProductData.fillForm}</p>
        <Form>
          <Form.Group as={Col} md="12" className="mb-3">
            <Form.Control 
              type="text"
              className="text-uppercase"
              placeholder="Business name"
              onChange={e=> e.target.value}
              name="businessName"
            />
          </Form.Group>
          <Form.Group as={Col} md="12" className="mb-3">
            <Form.Control 
              type="text"
              className="text-uppercase"
              placeholder="Website"
            />
          </Form.Group>
          <Form.Group as={Col} md="12" className="mb-3">
            <Form.Control 
              type="text"
              className="text-uppercase"
              placeholder="location"
            />
          </Form.Group>
          <Form.Group as={Col} md="12" className="mb-3">
            <Form.Control 
              type="text"
              className="text-uppercase"
              placeholder="phone number"
              onChange={e=> e.target.value}
              name="phoneNumber"
            />
          </Form.Group>
          <Form.Group as={Col} md="12" className="mb-3">
            <Form.Select className="text-uppercase">
              <option>Business Category</option>
              <option>Business Category</option>
            </Form.Select>
          </Form.Group>
        </Form>
      </Col>
    </Row>
  )
}

export default BusinessForm;