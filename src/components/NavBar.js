import React from 'react'
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/logo2.png";
// import door from "../assets/door.png";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";
import { useCurrentUser } from '../contexts/CurrentUserContext';

const NavBar = () => {
  const currentUser = useCurrentUser();
  const loggedInIcons = (
    <>
      {currentUser?.username}
      <NavLink
          className={styles.NavLink} 
          activeClassName={styles.Active}
          to="/"
        >
          <i className="fas fa-play"></i>Home
        </NavLink>
    </>
  );
  const loggedOutIcons = (
    <>
      <NavLink
          className={styles.NavLink}
          activeClassName={styles.Active}
          to="/signin"
        >
          <i className="fas fa-play"></i>Sign in
        </NavLink>
        <NavLink
          className={styles.NavLink}
          activeClassName={styles.Active}         
          to="/signup"
        >
          <i className="fas fa-play"></i>Sign up
        </NavLink>
    </>
  );
    return (
    <Navbar className={styles.NavBar} expand="md" fixed="top">
        {/* <Container /> */}
        <NavLink to="/">
            <Navbar.Brand >
            <img src={logo} alt="logo" height="30" /> Shot Caller
            </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto text-left">

            {currentUser ? loggedInIcons : loggedOutIcons}

        </Nav>
        </Navbar.Collapse>
        {/* <Container /> */}
  </Navbar>
  )
}

export default NavBar
