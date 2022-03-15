import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import ReactDatePicker from "react-datepicker";
import { ProductData } from "../../utils";

function CreditCard() {
  const [number, setNumber] = useState('');
  const [startDate, setStartDate] = useState('');

  const handleDate = (newDate) => {
    setStartDate(newDate);
  }

  const handleNumber = (evt) => {
    let number = evt.target.value.replace(/[^0-9.]/g,'');
    setNumber(number);
  }
  
  return (
    <Col md="6" className="mt-5">
      <p>{ProductData.creditText}</p>
      <Form>
        <Row className="mb-5">
          <Form.Group as={Col} md="5" className="mb-3">
            <Form.Control type="text" className="text-uppercase" placeholder="credit card" value={number} onChange={handleNumber}/>
          </Form.Group>
          <Form.Group as={Col} md="4" className="mb-3">
            <ReactDatePicker
              placeholderText="Click to select a start date"
              showPopperArrow={false}
              selected={startDate}
              onChange={handleDate}
              className="form-control text-capitalize"
              style={{width: '100%'}} />
          </Form.Group>
          <Form.Group as={Col} md="3">
            <Form.Control type="text" className="text-uppercase" placeholder="cvv" value={number} onChange={handleNumber} />
          </Form.Group>
        </Row>
        <Row>
          <Col md="12">
            <p>{ProductData.receiveText}</p>
            <Button variant="outline-secondary" className="text-uppercase">email me</Button>
            <Button variant="outline-secondary" className="text-uppercase mx-2">contact me</Button>
          </Col>
        </Row>
      </Form>
    </Col>
  )
}

export default CreditCard;