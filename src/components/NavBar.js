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
    refw, refw1, refw2, refw3, refw4,
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
          className={`mt-1 pt-2  ${styles.NavLink} `}
          // style={isActive => ({
          //   color: isActive ? "blue" : ""
          // })}
          to="/home"
        >
          <i 
          className="navicon fas fa-play"></i>Home
      </NavLink>
      {/*  workspace */}
      <NavDropdown 
          title={
            <span style={{ color: '#555555'}}>
              <i 
              className="navicon fas fa-stream pt-1"></i>Workspace
            </span>
          }
          ref={refw}
          id="nav-dropdown"
          // activeClassName={styles.Active}
          // activeclassname={styles.Active}  
          className={`mt-1 ${styles.NavLink} luv `}
          >
        <NavDropdown.Item >
          <NavLink
          ref={refw1}
          className={`noluv ${styles.DropLink} `}
          to="/scenes"
        >
          <i className="navicon fas fa-stream"></i>Scenes
        </NavLink>
        </NavDropdown.Item>
        <NavDropdown.Item >
          <NavLink
          ref={refw2}
          className={`noluv ${styles.DropLink} `}
          to="/findposts/departments"
        >
          <i className="navicon fas fa-stream"></i>Find Posts
        </NavLink>
        </NavDropdown.Item>
        <NavDropdown.Item >
          <NavLink
          ref={refw3}
          className={`${styles.DropLink} `}
          to="/scenes/create"
        >
          <i className="far fa-plus-square"></i>Add scene
        </NavLink>
        </NavDropdown.Item>
        <NavDropdown.Item >
          <NavLink
          ref={refw4}
          className={`${styles.DropLink} `}
          to="/script"
        >
          <i className="far fa-plus-square"></i>Script 
        </NavLink>
        </NavDropdown.Item>
      </NavDropdown>

      {/* characters locations departments-xtra */}
      <NavDropdown 
          title={
            <span 
            style={{ color: '#555555'}} 
            className={` ${styles.Title} `}>
              <i              
              className="navicon fas fa-stream pt-1"></i>Features
            </span>
          }
          ref={reff}
          id="nav-dropdown2"
          className={`mt-1 luv ${styles.NavLink} `}
          >
        <NavDropdown.Item >
          <NavLink
          ref={reff1}
          className={`noluv ${styles.NavLink} noluv`}
          to="/characters"
        >
          <i className="navicon fas fa-stream"></i>Characters
        </NavLink>
        </NavDropdown.Item>
        <NavDropdown.Item >
        <NavLink
        ref={reff2}
          className={`noluv mt-2 ${styles.NavLink} noluv`}
          to="/characters/create"
        >
          <i className="far fa-plus-square"></i>Add Character 
      </NavLink>
      </NavDropdown.Item>
      <NavDropdown.Item >
        <NavLink
        ref={reff3}
          className={`mt-2 ${styles.NavLink} noluv`}
          to="/locations"
        >
          <i className="navicon fas fa-stream"></i>Locations
      </NavLink>
      </NavDropdown.Item>
      <NavDropdown.Item >
        <NavLink
          ref={reff4}
          className={`mt-2 ${styles.NavLink} noluv `}
          to="/locations/create"
        >
          <i className="far fa-plus-square"></i>Add Locations
      </NavLink>
      </NavDropdown.Item>
        <NavDropdown.Item >
          <NavLink
          ref={reff5}
          className={` ${styles.NavLink} noluv`}
          to="/depts/general"
        >
          <i className="navicon fas fa-stream"></i>Depts-Xtra
        </NavLink>
        </NavDropdown.Item>
        <NavDropdown.Item >
        <NavLink
         ref={reff6}
          className={`mt-2 ${styles.NavLink} noluv`}
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
              <i 
              className="luv navicon fas fa-stream pt-1"></i>Moodboards
            </span>
          }
          ref={refm}
          id="nav-dropdown3"
          // activeClassName={styles.Active}
          // activeclassname={styles.Active} 
          className={`mt-1 ${styles.NavLink} `}
          >
        <NavDropdown.Item >
          <NavLink
          ref={refm1}
          className={` ${styles.DropLink} noluv`}
          to="/moodshots"
        >
          <i className="navicon fas fa-stream"></i>Moodboards
        </NavLink>
        </NavDropdown.Item>
        <NavDropdown.Item >
          <NavLink
          ref={refm2}
          className={`${styles.DropLink} noluv`}
          to="/moodshot/create"
        >
          <i className="far fa-plus-square"></i>Add Moodboard
        </NavLink>
        </NavDropdown.Item>
        <NavDropdown.Item >
          <NavLink
          ref={refin}
          className={` ${styles.DropLink} noluv`}
          to="/indexcards"
        >
          <i className="navicon fas fa-stream"></i>Index Cards
        </NavLink>
        </NavDropdown.Item>
        <NavDropdown.Item >
          <NavLink
          ref={refin2}
          className={` ${styles.DropLink} noluv`}
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
              <i 
              className="luv navicon fas fa-stream pt-1"></i>Production
            </span>
          }
          ref={refs}
          id="nav-dropdown4"
          // activeClassName={styles.Active}
          // activeclassname={styles.Active} 
          className={`mt-1 ${styles.NavLink} `}
          >
        <NavDropdown.Item >
          <NavLink
          ref={refs1}
          className={`${styles.DropLink} noluv`}
          to="/crewinfo"
        >
          <i className="navicon fas fa-stream"></i>Crew Info
        </NavLink>
        </NavDropdown.Item>
        <NavDropdown.Item >
          <NavLink
          ref={refs2}
          className={` ${styles.DropLink} noluv`}
          to="/days"
        >
          <i className="navicon fas fa-stream"></i>Schedule
        </NavLink>
        </NavDropdown.Item>
        <NavDropdown.Item >
          <NavLink
          ref={refs3}
          className={`${styles.DropLink} noluv`}
          to="/callsheets"
        >
          <i className="navicon fas fa-stream"></i>Callsheets
        </NavLink>
        </NavDropdown.Item>
      </NavDropdown>

      <NavLink className={`mt-2 pt-1 ${styles.NavLink} `} 
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
          // activeclassname={styles.Active} 
          className={`py-0 ${styles.NavLink} `}
          >
        <NavDropdown.Item >
          <NavLink
          className={` ${styles.DropLink} `}
          ref={refp1}
          to="/profiles"
        >
          <i className="navicon fas fa-play"></i>Profiles
        </NavLink>
        </NavDropdown.Item>
        <NavDropdown.Item >
        <NavLink
          className={`mt-2 ${styles.NavLink} `}
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
          // activeClassName={styles.Active}
          // activeclassname={styles.Active} 
          to="/signin"
        >
          <i className="fas fa-play"></i>Sign in
        </NavLink>
        <NavLink
          className={styles.NavLink}
          // activeClassName={styles.Active}  
          // activeclassname={styles.Active}        
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
            <img src={logo} alt="logo" height="40" className='pb-1' /> Shot Caller
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
