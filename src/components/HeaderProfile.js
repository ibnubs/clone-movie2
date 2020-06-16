import React, { Fragment } from "react";
import { useDispatch } from 'react-redux';
import { LogoutAction } from '../store/actions/Auth';
import "../assets/style/header.scss";


import { Navbar, Nav, Form, FormControl,  InputGroup } from 'react-bootstrap';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'



const HeaderProfile = (props) => {
    const baca_dispatch = useDispatch()

    const handleLogout = (e) => {
        e.preventDefault()
        baca_dispatch(LogoutAction())
        props.history.push("/")
    }

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
                        <InputGroup className=" mr-sm-2 mr">
                            <FormControl id="search" placeholder="Search" />
                        </InputGroup>
                    </Form>
                    <div className="picture-profile">
                        <img src={require('../assets/image/default-user.png')} alt="" />
                        <DropdownButton title="">
                            <Dropdown.Item ><button>Profile</button></Dropdown.Item>
                            <Dropdown.Item ><button>Setting</button></Dropdown.Item>
                            <Dropdown.Item ><button>Help</button></Dropdown.Item>
                            <Dropdown.Item ><button onClick={handleLogout}>Logout</button></Dropdown.Item>
                        </DropdownButton>
                    </div>
                </Navbar.Collapse>
            </Navbar>

        </Fragment>
    );
}

export default HeaderProfile;
