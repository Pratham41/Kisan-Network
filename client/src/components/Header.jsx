import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Container, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar
        className="py-4"
        bg="primary"
        expand="lg"
        variant="dark"
        collapseOnSelect
      >
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <span>PRATHAM</span>
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto ">
              <LinkContainer activeClassName="primary" to="/">
                <Nav.Link>
                <i className="fa-solid fa-list"></i> Contacts
                </Nav.Link>
              </LinkContainer>
              <LinkContainer activeClassName="primary" to="user/allMessages">
                <Nav.Link>
                <i className="fa-solid fa-envelope-circle-check"></i> Messages                                   
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
