import React from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import logo from "../../images/logo.png";

function ProductNavbar({navigate, setToDefaultNavigateSate}) {
  return (
    <Navbar bg="light" expand="lg" className="pt-3 pb-3 border-b1 sticky-top bg-white">
      <Container>
        <Navbar.Brand href="/"><img className="d-inline-block" src={logo} width="150" height="40" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="justify-content-end ms-auto" activeKey="/">
          {!navigate ?
            <>
            <Nav.Link className="text-capitalize">features</Nav.Link>
            <Nav.Link className="text-capitalize">about</Nav.Link>
            <Nav.Link className="text-capitalize">roadmap</Nav.Link>
            <Nav.Link className="text-capitalize">pricing</Nav.Link>
            </>
            :
            <div className="userAvatar">MK</div>
          }
            <Button href="/" onClick={setToDefaultNavigateSate}
              variant={!navigate ? "primary":"outline-primary"}
              className={!navigate ? "text-capitalize text-white":"text-capitalize"}>
                {!navigate ? 'sign up':'dashboard'}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default ProductNavbar;