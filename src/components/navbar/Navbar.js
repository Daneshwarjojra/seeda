import React from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import logo from "../../images/logo.png";

function ProductNavbar({navigate, setToDefaultNavigateSate}) {
  return (
    <Navbar bg="light" expand="lg" className="fw-4 pt-3 pb-3 border-b1 sticky-top bg-white">
      <Container>
        <Navbar.Brand href="/"><img className="d-inline-block" src={logo} width="150" height="40" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="justify-content-end ms-auto" activeKey="/">
          {!navigate ?
            <>
            <Nav.Link className="text-capitalize me-2">features</Nav.Link>
            <Nav.Link className="text-capitalize me-2">about</Nav.Link>
            <Nav.Link className="text-capitalize me-2">roadmap</Nav.Link>
            <Nav.Link className="text-capitalize me-2">pricing</Nav.Link>
            </>
            :
            <>
            <div className="userAvatar">MK</div>
            <Button href="/" variant="outline-primary" className="text-capitalize">
              dashboard
            </Button>
            </>
          }
            <Button href="/" onClick={setToDefaultNavigateSate} variant="outline-primary" className="text-capitalize">sign up
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default ProductNavbar;