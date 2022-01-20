import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import door from "../../assets/door.png";
import TopBox from '../../components/TopBox';
import { useRedirect } from '../../hooks/Redirect';
import styles from "../../styles/Home.module.css";
import btnStyles from "../../styles/Button.module.css";

import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";


const Home = () => {
    useRedirect("loggedOut");
    const history = useHistory();

    return (
        <div className={styles.Backgroundhome}>
            <TopBox title="SHOT CALLER" />
            <Row className={`my-3 ${styles.Row}`}>
            <Col className="my-3 pr-0 pl-4"
            xs={1} md={1}
          >
            <Image
                className={`${styles.FillerImageh}`}
                src={door}
            />
          </Col>
          <Col className="pb-0" xs={10}>
              <Row className="text-center">
                <Col md={2}></Col>
                  <Col md={8} >
                    <Link to={`/scenes`} >
                      <div className={`px-3 py-1  ${styles.Homebox1}`}>
                      <h5 className={`text-center pt-2 ${styles.Title}`}>Primary Scenes Workspace </h5>
                      <p className="mt-2">
                         Create scenes and breakdowns and collobarate on them 
                         in their universal or department workspaces</p>
                         <p> Create and view storyboards
                         and shotlists
                      </p>
                      </div>
                    </Link>
                  </Col>
              </Row>
              <Row className="text-center">
                <Col md={1}></Col>
                <Col md={5} >
                    <Link to={`/findposts/departments`} >
                    <div className={`px-3 py-1  ${styles.Homebox}`}>
                      <h5 className={`text-center pt-2 ${styles.Title}`}>Find Posts</h5>
                      <p className="mt-2">All Posts Archived Posts Liked Posts</p>
                      <p>Posts by Department - Requirements and Finals ordered by scene number</p>
                      </div>
                    </Link>
                  </Col>
                  <Col md={1}></Col>
                  <Col md={5} >
                    <Link to={`/days`} >
                    <div className={`px-3 py-1  ${styles.Homebox}`}>
                          <h5 className={`text-center pt-2 ${styles.Title}`}>Schedule</h5>
                          <p className="mt-2"> Simple autogenerating schedule creater pre-populated with scene info. </p>
                      </div>
                    </Link>
                  </Col>    
              </Row>
              <Row className="text-center">
              <Col md={1}></Col>
                  <Col md={5} >
                    <Link to={`/profiles`} >
                      <div className={`px-3 py-1 ${styles.Homebox}`}>
                      <h5 className={`text-center pt-2 ${styles.Title}`}>Profiles and Posts</h5>
                      <p className="mt-2">View and follow profiles</p>
                      <p className="mt-2">Access feed and archived posts</p>
                      </div>
                    </Link>
                  </Col>
                  <Col md={1}></Col>
                  <Col md={5} >
                    <Link to={`/depts/general`} >
                    <div className={`px-3 py-1 ${styles.Homebox}`}>
                          <h5 className={`text-center pt-2 ${styles.Title}`}>Departments</h5>
                          <p className="mt-2"> Separate departments section for communication
                          outside of the scenes workspaces</p>
                      </div>
                    </Link>
                  </Col>
              </Row>
          </Col>
          <Col
            xs={1} 
            className={`my-auto d-none d-md-block p-2`}
          >
            {/* <Image
              className={`${appStyles.FillerImager}`}
              src={door}
            /> */}
          </Col>
            </Row>
        </div>
    )
}

export default Home
