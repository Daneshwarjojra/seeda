import React from "react";
import { Col, Container, Form, Row , InputGroup, Button} from "react-bootstrap";
import mail from '../images/mail.svg';
import seedaWhite from '../images/seedaWhite.png';
import { ProductData } from "../utils";

import '../partialCSS/footer.scss';

function Footer() {
  return (
    <footer>
      <Container>
        <Row className="align-items-center">
          <Col md="6">
            <h2 className="text-capitalize fw-B">get important updates</h2>
            <p className="fw-4">{ProductData.text}</p>
          </Col>
          <Col md={{span: 5, offset: 1}}>
            <Form>
              <InputGroup>
                <InputGroup.Text id="email-icon" className="iconBox"><img src={mail} /></InputGroup.Text>
                <Form.Control md="12" aria-describedby="email-icon" className="text-capitalize border-start-0" placeholder="send message"/>
                <Button variant="primary" className="text-white text-capitalize">send message</Button>
              </InputGroup>
            </Form>
          </Col>
        </Row>
        <hr style={{backgroundColor: 'white', opacity: '1'}} />
        <Row>
          <Col md="5">
            <img src={seedaWhite} />
            <p className="fw-4 mt-3 pb-4 border-bottom border-white">{ProductData.text}</p>
          </Col>
          <Col md="3" className="pt-4">
            <h4 className="fw-6">Navigate</h4>
            <ul className="fw-4">
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