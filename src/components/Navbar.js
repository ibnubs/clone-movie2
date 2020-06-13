import React, { Fragment } from "react";
import "../assets/style/style.css";


import { Navbar, Nav, Form, FormControl, Button, InputGroup } from 'react-bootstrap';



const Navigation = ({ handleShow }) => {
  return (
    <Fragment>
      <Navbar expand="lg">
        <Navbar.Brand href="#home" >
          <img src={require('../assets/images/logo.png')} style={{ width: 44, height: 44 }} alt="" />
        </Navbar.Brand>
        <p className="h1">MilanTV</p>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          </Nav>
          <Form inline>
            <InputGroup className=" mr-sm-2">
              <InputGroup.Prepend>
                <InputGroup.Text>
                  <svg class="bi bi-search" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z" />
                    <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
                  </svg>
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl id="search" placeholder="Search" />
            </InputGroup>
          </Form>
          <Button variant="secondary" onClick={handleShow}>Sign In</Button>
        </Navbar.Collapse>
      </Navbar>

    </Fragment>
  );
}

export default Navigation;
