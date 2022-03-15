import React from "react";
import { Col, Container, Form, Row , InputGroup, Button} from "react-bootstrap";
import calendar from '../images/calendar.svg';
import seedaWhite from '../images/seedaWhite.png';
import { ProductData } from "../utils";

function Footer() {
  return (
    <footer>
      <Container>
        <Row className="align-items-center">
          <Col md="6">
            <h2 className="text-capitalize">get important updates</h2>
            <p>{ProductData.text}</p>
          </Col>
          <Col md="6">
            <Form>
              <InputGroup>
                <InputGroup.Text id="email-icon" className="iconBox"><img src={calendar} /></InputGroup.Text>
                <Form.Control md="12" aria-describedby="email-icon" className="text-capitalize" placeholder="send message"/>
                <Button variant="primary" className="text-white text-capitalize">send message</Button>
              </InputGroup>
            </Form>
          </Col>
        </Row>
        <hr style={{backgroundColor: 'white'}} />
        <Row>
          <Col md="5">
            <img src={seedaWhite} />
            <p>{ProductData.text}</p>
          </Col>
          <Col md="3" className="pt-4">
            <h4>Navigate</h4>
            <ul>
              <li>Features</li>
              <li>Interfaces</li>
              <li>Token</li>
              <li>Roadmap</li>
            </ul>
          </Col>
          <Col md="4"></Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer;