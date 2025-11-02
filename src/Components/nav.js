import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";


function Header({ title, searchBar }) {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary sticky-top w-100"
      data-bs-theme="dark"
    >
      <Container fluid>
        <Navbar.Brand className="text-white fw-bold" as={Link} to="/">
          {title}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 h"
            variant="underline"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
          </Nav>
          {searchBar ? (
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          ) : null}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

Header.defaultProps = {
  title: "My App",
  searchBar: true
};

Header.propTypes = {
  title: PropTypes.string,
  searchBar: PropTypes.bool
};

export default Header;
