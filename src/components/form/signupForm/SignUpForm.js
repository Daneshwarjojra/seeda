import React, { useState } from "react";
import { Button, Form, Row, Col, Container } from "react-bootstrap";
import right from "../../../images/right.svg";
import { ProductData } from "../../../utils";
import MultiStepForm from "../multiStepForm";
import { MultiStepFormProvider } from "../multiStepFormReducer";
import Bitmap from "../../../images/Bitmap.png";

function SignUpForm({handleNavigate, navigate}) {
  const [validated, setValidated] = useState(false);
  const [value, setValue] = useState('');
  const [number, setNumber] = useState('');
  const [submit, setSubmit] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      setSubmit(true);
    }
    setValidated(true);
  };
  const handleValue = (event) => {
    setValue(event.target.value);
  }
  const handleNumber = (evt) => {
    let number = evt.target.value.replace(/[^0-9.]/g,'');
    setNumber(number);
  }
  return (
    <Container key="signUpContainer">
      <Row key="signUpRow" className="mb-10 mt-5">
        {!submit ? (
          <>
            <Col key="signUpCol1" md="5" sm="6">
              <h1 className="font-weight-bold mt-5">{ProductData.mainTitle}</h1>
              <p>{ProductData.fillForm}</p>
              <Form noValidate validated={validated} onSubmit={handleSubmit} className="mb-5">
                <Form.Group as={Col} md="12" className="mb-3" controlId="validationCustom01">
                  <Form.Control
                    required
                    type="text"
                    className="text-uppercase"
                    placeholder="First name"
                    value={value}
                    onChange={handleValue}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="12" className="mb-3" controlId="validationCustom02">
                  <Form.Control
                    require
                    type="text"
                    className="text-uppercase"
                    placeholder="Last name"
                    value={value}
                    onChange={handleValue}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="12" className="mb-3" controlId="validationCustom03">
                  <Form.Control type="text" placeholder="EMAIL ADDRESS" required />
                  <Form.Control.Feedback type="invalid">
                    Please provide a email address.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="12" className="mb-5" controlId="validationCustom04">
                  <Form.Control type="text" className="text-uppercase" placeholder="Phone Number" value={number} onChange={handleNumber} maxLength={10} required />
                  <Form.Control.Feedback type="invalid">
                    Please provide a Phone Number.
                  </Form.Control.Feedback>
                </Form.Group>
                <Button variant="primary" className="text-white text-capitalize" type="submit">get started today <img src={right} /></Button>
              </Form>
              <p>{ProductData.text}</p>
            </Col>
            <Col key="signUpCol2" md="7" sm="6" style={{display:"flex", alignItems: "center", justifyContent: "flex-end"}} className="mt-5">
              <img src={Bitmap} style={{width: "90%"}}/>
            </Col>
          </>
        ) : (
          <MultiStepFormProvider>
            <div key="multiStepFormWrapper" className='multiStepFormWrapper'>
              <MultiStepForm key="multiStepForm" handleNavigate={handleNavigate} navigate={navigate} />
            </div>
          </MultiStepFormProvider>
        )}
      </Row>
    </Container>
    
  )
}

export default SignUpForm;