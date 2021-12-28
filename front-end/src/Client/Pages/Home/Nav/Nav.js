import React, { Component } from "react";
import img from "./baskat-icon.PNG";
import style from"./Nav.module.css";

import {
  Navbar,
  NavDropdown,
  Container,
  Nav,
  InputGroup,
  FormControl,
  Button,
  Card,
} from "react-bootstrap";

export default class Navbarconb extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Resturant</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className={style.navlink} href="/">Home</Nav.Link>
              <Nav.Link className={style.navlink} href="/AboutUs">About Us</Nav.Link>
              <NavDropdown
                title="Menu"
                id="basic-nav-dropdown"
                className={"link1 " + style.dropdownitem}
              >
                <NavDropdown.Item className={style.navlink} href="/Fastfood">Fast Food</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className={style.navlink} href="/Sweet">
                  Drinks & Sweets
                </NavDropdown.Item>
                <InputGroup className="mb-3"></InputGroup>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>

        <FormControl
          className={style.search}
          placeholder="Search For A Meal"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button variant="danger" id="button-addon2" className={style.btnsearch}>
          Search
        </Button>
        <a href="/cart">
          
          <Card.Img variant="top" src={img} className={style.imgbaskat} />
        </a>
      </Navbar>
    );
  }
}
