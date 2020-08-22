import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { LogoutAction } from '../store/actions/Auth';
import { getProfile } from '../store/actions/profile';
import { Link } from 'react-router-dom';
import "../assets/style/header.scss";


import { Navbar, Nav, Form, FormControl, InputGroup } from 'react-bootstrap';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'



const HeaderProfile = (props) => {
    const Profile = useSelector(state => state.profile.profile)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProfile())
    }, [dispatch])

    const handleLogout = (e) => {
        e.preventDefault()
        dispatch(LogoutAction())
        props.history.push("/")
    }

    return (
        <Fragment>
            <Navbar expand="lg">
                <Navbar.Brand href="#home" >
                <Link to="/">
                    <img src={require('../assets/images/logo.png')} style={{ width: 44, height: 44 }} alt="" />
                </Link>
                </Navbar.Brand>
                <Link style={{textDecoration:'none'}} to="/">
                    <p className="h1" style={{color:"black", fontWeight:'bolder'}}>MilanTV</p>
                </Link>
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
                            <h6 style={{ textAlign: "center" }}>{Profile}</h6>
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
