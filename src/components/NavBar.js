import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../assets/logo2.png";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";
import { useCurrentUser, useSetCurrentUser } from '../contexts/CurrentUserContext';
import Avatar from "./Avatar";
import axios from 'axios';
import useClickOutsideToggle from '../hooks/useClickOutsideToggle';
import { removeTokenTimestamp } from '../utils/utils';

const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const { expanded, setExpanded, ref } = useClickOutsideToggle();

  const handleSignOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
      removeTokenTimestamp();
    } catch (err) {
      // console.log(err);
    }
  };

  const addSceneIcon = (
    <NavLink
      className={styles.NavLink}
      activeClassName={styles.Active}
      to="/scenes/create"
    >
      <i className="far fa-plus-square"></i>Add scene
    </NavLink>
  );

  const scenesIcon = (
    <NavLink
      className={styles.NavLink}
      activeClassName={styles.Active}
      to="/scenes"
    >
      <i className="navicon fas fa-stream"></i>Scenes
    </NavLink>
  );

  const addPostIcon = (
    <NavLink
      className={styles.NavLink}
      activeClassName={styles.Active}
      to="/posts/create"
    >
      <i className="navicon far fa-plus-square"></i>Add post
    </NavLink>
  );
  const loggedInIcons = (
    <>
      <NavLink
          className={styles.NavLink} 
          activeClassName={styles.Active}
          to="/"
        >
          <i className="navicon fas fa-play"></i>Home
      </NavLink>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/posts"
      >
        <i className="navicon fas fa-stream"></i>Posts
      </NavLink>
      {/* <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/dept/category"
      >
        <i className="fas fa-stream fa-xs"></i>
        script
      </NavLink> */}
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/feed"
      >
        <i className="fas fa-stream"></i>Feed
      </NavLink>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/archived"
      >
        <i className="fas fa-stream"></i>Archived
      </NavLink>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/liked"
      >
        <i className="fas fa-heart"></i>Liked
      </NavLink>
      <NavLink className={styles.NavLink} to="/" onClick={handleSignOut}>
        <i className="fas fa-sign-out-alt"></i>Sign out
      </NavLink>
      <NavLink
        className={styles.NavLink}
        to={`/profiles/${currentUser?.profile_id}`}
      >
        <Avatar src={currentUser?.profile_image} text="Profile" height={40} />
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
    <Navbar 
      expanded={expanded}
      className={styles.NavBar} expand="md" fixed="top">
        {/* <Container /> */}
        <NavLink to="/">
            <Navbar.Brand >
            <img src={logo} alt="logo" height="30" /> Shot Caller
            </Navbar.Brand>
        </NavLink>
        {currentUser && addSceneIcon }
        {currentUser && addPostIcon }
        {currentUser && scenesIcon }
        <Navbar.Toggle onClick={() => setExpanded(!expanded)}
          ref={ref}
          aria-controls="basic-navbar-nav" />
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
