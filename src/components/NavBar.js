import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../assets/logo2.png";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";
import { useCurrentUser, useSetCurrentUser } from '../contexts/CurrentUserContext';
import Avatar from "./Avatar";
import axios from 'axios';
import useDropdownClick from '../hooks/useDropdownClick';
import { removeTokenTimestamp } from '../utils/utils';
import { NavDropdown } from 'react-bootstrap';

const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const { expanded, setExpanded, ref, 
    refw, refw1, refw2, refw3, 
    reff, reff1, reff2, reff3, reff4, reff5, reff6, 
    refm, refm1, refm2, refin, refin2,
    refs, refs1, refs2, refs3,
    refp, refp1, refp2 } = useDropdownClick();

  const handleSignOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
      removeTokenTimestamp();
    } catch (err) {
    }
  };

  const loggedInIcons = (
    <>
      {/*  home */}
      <NavLink
          className={`mt-2 pt-2 ${styles.NavLink} `}
          activeClassName={styles.Active}
          to="/home"
        >
          <i className="navicon fas fa-play"></i>Home
      </NavLink>
      {/*  workspace */}
      <NavDropdown 
          title={
            <span style={{ color: '#555555'}}>
              <i activeClassName={styles.Active} className="navicon fas fa-stream"></i>Workspace
            </span>
          }
          ref={refw}
          id="nav-dropdown"
          activeClassName={styles.Active}
          className={`mt-1 ${styles.NavLink} luv `}
          >
        <NavDropdown.Item >
          <NavLink
          ref={refw1}
          className={`noluv ${styles.DropLink} `}
          activeClassName={styles.Active}
          to="/scenes"
        >
          <i className="navicon fas fa-stream"></i>Scenes
        </NavLink>
        </NavDropdown.Item>
        <NavDropdown.Item >
          <NavLink
          ref={refw2}
          className={`noluv ${styles.DropLink} `}
          activeClassName={styles.Active}
          to="/findposts/departments"
        >
          <i className="navicon fas fa-stream"></i>Find Posts
        </NavLink>
        </NavDropdown.Item>
        <NavDropdown.Item >
          <NavLink
          ref={refw3}
          className={`${styles.DropLink} `}
          activeClassName={styles.Active}
          to="/scenes/create"
        >
          <i className="far fa-plus-square"></i>Add scene
        </NavLink>
      </NavDropdown.Item>
      </NavDropdown>

      {/* characters locations departments-xtra */}
      <NavDropdown 
          title={
            <span style={{ color: '#555555'}} className={` ${styles.Title} `}>
              <i activeClassName={styles.Active} className="navicon fas fa-stream"></i>Features
            </span>
          }
          ref={reff}
          id="nav-dropdown2"
          activeClassName={styles.Active}
          className={`mt-1 pt-1 luv ${styles.NavLink} `}
          >
        <NavDropdown.Item >
          <NavLink
          ref={reff1}
          className={`noluv ${styles.NavLink} noluv`}
          activeClassName={styles.Active}
          to="/characters"
        >
          <i className="navicon fas fa-stream"></i>Characters
        </NavLink>
        </NavDropdown.Item>
        <NavDropdown.Item >
        <NavLink
        ref={reff2}
          className={`noluv mt-2 ${styles.NavLink} noluv`}
          activeClassName={styles.Active}
          to="/characters/create"
        >
          <i className="far fa-plus-square"></i>Add Character 
      </NavLink>
      </NavDropdown.Item>
      <NavDropdown.Item >
        <NavLink
        ref={reff3}
          className={`mt-2 ${styles.NavLink} noluv`}
          activeClassName={styles.Active}
          to="/locations"
        >
          <i className="navicon fas fa-stream"></i>Locations
      </NavLink>
      </NavDropdown.Item>
      <NavDropdown.Item >
        <NavLink
          ref={reff4}
          className={`mt-2 ${styles.NavLink} noluv `}
          activeClassName={styles.Active}
          to="/locations/create"
        >
          <i className="far fa-plus-square"></i>Add Locations
      </NavLink>
      </NavDropdown.Item>
        <NavDropdown.Item >
          <NavLink
          ref={reff5}
          className={` ${styles.NavLink} noluv`}
          activeClassName={styles.Active}
          to="/depts/general"
        >
          <i className="navicon fas fa-stream"></i>Depts-Xtra
        </NavLink>
        </NavDropdown.Item>
        <NavDropdown.Item >
        <NavLink
         ref={reff6}
          className={`mt-2 ${styles.NavLink} noluv`}
          activeClassName={styles.Active}
          to="/department/posts/create"
        >
          <i className="far fa-plus-square"></i>Add Depts-Xtra 
      </NavLink>
      </NavDropdown.Item>
      </NavDropdown>

      {/*  moodshots */}
      <NavDropdown 
          title={
            <span style={{ color: '#555555'}}>
              <i activeClassName={styles.Active} className="luv navicon fas fa-stream"></i>Moodshots
            </span>
          }
          ref={refm}
          id="nav-dropdown3"
          activeClassName={styles.Active}
          className={`mt-1 ${styles.NavLink} `}
          >
        <NavDropdown.Item >
          <NavLink
          ref={refm1}
          className={` ${styles.DropLink} noluv`}
          activeClassName={styles.Active}
          to="/moodshots"
        >
          <i className="navicon fas fa-stream"></i>Moodshots
        </NavLink>
        </NavDropdown.Item>
        <NavDropdown.Item >
          <NavLink
          ref={refm2}
          className={`${styles.DropLink} noluv`}
          activeClassName={styles.Active}
          to="/moodshot/create"
        >
          <i className="far fa-plus-square"></i>Add Moodshots
        </NavLink>
        </NavDropdown.Item>
        <NavDropdown.Item >
          <NavLink
          ref={refin}
          className={` ${styles.DropLink} noluv`}
          activeClassName={styles.Active}
          to="/indexcards"
        >
          <i className="navicon fas fa-stream"></i>Index Cards
        </NavLink>
        </NavDropdown.Item>
        <NavDropdown.Item >
          <NavLink
          ref={refin2}
          className={` ${styles.DropLink} noluv`}
          activeClassName={styles.Active}
          to="/series"
        >
          <i className="navicon fas fa-stream"></i>Index Shots
        </NavLink>
        </NavDropdown.Item>
      </NavDropdown>

      {/*  Crew Info Schedule Callsheet */}
      <NavDropdown 
          title={
            <span style={{ color: '#555555'}}>
              <i activeClassName={styles.Active} className="luv navicon fas fa-stream"></i>Scheduling
            </span>
          }
          ref={refs}
          id="nav-dropdown4"
          activeClassName={styles.Active}
          className={`mt-1 ${styles.NavLink} `}
          >
        <NavDropdown.Item >
          <NavLink
          ref={refs1}
          className={`${styles.DropLink} noluv`}
          activeClassName={styles.Active}
          to="/crewinfo"
        >
          <i className="navicon fas fa-stream"></i>Crew Info
        </NavLink>
        </NavDropdown.Item>
        <NavDropdown.Item >
          <NavLink
          ref={refs2}
          className={` ${styles.DropLink} noluv`}
          activeClassName={styles.Active}
          to="/days"
        >
          <i className="navicon fas fa-stream"></i>Schedule
        </NavLink>
        </NavDropdown.Item>
        <NavDropdown.Item >
          <NavLink
          ref={refs3}
          className={`${styles.DropLink} noluv`}
          activeClassName={styles.Active}
          to="/callsheets"
        >
          <i className="navicon fas fa-stream"></i>Callsheets
        </NavLink>
        </NavDropdown.Item>
      </NavDropdown>

      {/* Schedule */}
      {/* <NavLink
          className={`mt-2 pt-2 ${styles.NavLink} `}
          activeClassName={styles.Active}
          to="/days"
        >
          <i className="navicon fas fa-play"></i>Schedule
      </NavLink> */}

      {/* Callsheets */}
      {/* <NavLink
          className={`mt-2 pt-2 ${styles.NavLink} `}
          activeClassName={styles.Active}
          to="/callsheets"
        >
          <i className="navicon fas fa-play"></i>Calls
      </NavLink> */}

      {/* old profiles
      <NavLink
        className={`mt-2 pt-2 ${styles.NavLink} `}
        activeClassName={styles.Active}
        to="/profiles"
      >
        <i className="navicon far fa-plus-square"></i>Profiles
      </NavLink> */}

      <NavLink className={`mt-2 pt-2 ${styles.NavLink} `} 
        to="/" onClick={handleSignOut}>
        <i className="fas fa-sign-out-alt"></i>Sign out
      </NavLink>

      {/* new profiles */}
      <NavDropdown 
          title={
            <span style={{ color: '#555555'}} className={styles.Title}>
              <Avatar src={currentUser?.profile_image} text="" height={40} />Profiles
            </span>
          }
          ref={refp}
          id="nav-dropdown5"
          // activeClassName={styles.Active}
          className={`py-0 ${styles.NavLink} `}
          >
        <NavDropdown.Item >
          <NavLink
          className={` ${styles.DropLink} `}
          activeClassName={styles.Active}
          ref={refp1}
          to="/profiles"
        >
          <i className="navicon fas fa-play"></i>Profiles
        </NavLink>
        </NavDropdown.Item>
        <NavDropdown.Item >
        <NavLink
          className={`mt-2 ${styles.NavLink} `}
          activeClassName={styles.Active}
          ref={refp2}
          to={`/profiles/${currentUser?.profile_id}`}
        >
          <i className="navicon fas fa-play"></i>My Profile 
      </NavLink>
      </NavDropdown.Item>
      </NavDropdown>
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
    <Navbar expanded={expanded} className={`my-0 py-0 ${styles.NavBar} `}
       expand="lg" fixed="top">
        <NavLink to="/">
            <Navbar.Brand className='mr-1' >
            <img src={logo} alt="logo" height="30" /> Shot Caller
            </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle onClick={() => setExpanded(!expanded)}
          ref={ref}
          aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto text-left">
          {currentUser ? loggedInIcons : loggedOutIcons}
        </Nav>
        </Navbar.Collapse>
  </Navbar>
  )
}
export default NavBar
