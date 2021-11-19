import React from 'react'
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/logo2.png";
import door from "../assets/door.png";

const NavBar = () => {
    return (
    <Navbar expand="md" fixed="top">
        {/* <Container /> */}
            <Navbar.Brand >
            <img src={logo} alt="logo" height="30" /> Shot Caller</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto text-left">
                <Nav.Link ><i class="fas fa-square-full"></i>Home</Nav.Link>
                <Nav.Link ><i class="fas fa-play"></i>Sign in</Nav.Link>
                <Nav.Link ><i class="fas fa-circle"></i>Sign up</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        {/* <Container /> */}
  </Navbar>
  )
}

export default NavBar
