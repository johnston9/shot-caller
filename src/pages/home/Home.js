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
            <Col xs={10} md={10}>
              <div className="d-none d-md-block">
                <Row className="text-center">
                  <Col md={1}></Col>
                    <Col md={10} >
                      <Link to={`/scenes`} >
                        <div className={`px-3 py-1  ${styles.Homebox}`}>
                        <h5 className={`text-center pt-2 ${styles.Title}`}>Primary Scenes Workspace </h5>
                        <p className="mt-2">
                          Create scenes and breakdowns and colloborate on them 
                          in their universal or department workspaces. Create and view storyboards
                          and shotlists
                        </p>
                        </div>
                      </Link>
                    </Col>
                </Row>
                <Row className="mt-3 text-center">
                <Col xs={1} ></Col>
                  <Col xs={5} >
                      <Link to={`/findposts/departments`} >
                      <div className={`px-3 py-1  ${styles.HomeboxSm}`}>
                        <h5 className={`text-center pt-2 ${styles.Title}`}>Find Posts</h5>
                        <p className="mt-2">All, Archived, Liked and Feed<br/>
                        Posts by Department </p>
                        </div>
                      </Link>
                    </Col>
                    <Col xs={5} >
                      <Link to={`/moodshots`} >
                        <div className={`px-3 py-1 ${styles.HomeboxSm}`}>
                        <h5 className={`text-center pt-2 ${styles.Title}`}>Moodshots</h5>
                        <p className="mt-2">Add and view moodshots for scenes, locations, characters
                        and themes</p>
                        </div>
                      </Link>
                    </Col>    
                </Row>
                <Row className="text-center">
                <Col xs={1}></Col>
                    <Col xs={5} >
                      <Link to={`/profiles`} >
                        <div className={`px-3 py-1 ${styles.HomeboxSmEr}`}>
                        <h5 className={`text-center pt-2 ${styles.Title}`}>Profiles</h5>
                        <p className="mt-2">View and follow profiles. Create.Feed</p>
                        </div>
                      </Link>
                    </Col>
                    <Col xs={5} >
                    <Link to={`/days`} >
                      <div className={`px-3 py-1  ${styles.HomeboxSmEr}`}>
                            <h5 className={`text-center pt-2 ${styles.Title}`}>Schedule</h5>
                            <p className="mt-2"> Autogenerate schedule view schedule </p>
                        </div>
                      </Link>
                    </Col>
                </Row>
                <Row className="text-center">
                <Col xs={1} ></Col>
                    <Col xs={5} >
                      <Link to={`/characters`} >
                        <div className={`px-3 py-1 ${styles.HomeboxSmEr}`}>
                        <h5 className={`text-center pt-2 ${styles.Title}`}>Characters</h5>
                        <p className="mt-2">All Character details</p>
                        </div>
                      </Link>
                    </Col>
                    <Col xs={5} >
                    <Link to={`/locations`} >
                      <div className={`px-3 py-1  ${styles.HomeboxSmEr}`}>
                            <h5 className={`text-center pt-2 ${styles.Title}`}>Locations</h5>
                            <p className="mt-2">Filming addresses and images </p>
                        </div>
                      </Link>
                    </Col>
                </Row>
                <Row>
                  <Col xs={2}></Col>
                  <Col xs={8}>
                  <Link to={`/depts/general`} >
                      <div className={`px-3 py-1 ${styles.HomeboxSmEr}`}>
                            <h5 className={`text-center pt-2 ${styles.Title}`}>Departments</h5>
                            <p className="mt-2 text-center"> Posts for departments outside of scenes</p>
                        </div>
                      </Link>
                  </Col>
                </Row>
              </div>
              {/* mobile view */}
              <div className=" d-md-none mb-5">
                <Row className="text-center">
                  <Col md={2}></Col>
                    <Col md={8} className="mr-3">
                      <Link to={`/scenes`} >
                        <div className={`px-0 py-2  ${styles.HomeboxXsXs}`}>
                        <h5 className={`text-center ${styles.Title}`}>Scenes Workspace </h5>
                        <p className="pt-1 mb-0">
                          Collaborate by department
                        </p>
                        </div>
                      </Link>
                    </Col>
                </Row>
                <Row className="text-center mt-2">
                  <Col xs={6}>
                  <Link to={`/findposts/departments`} >
                      <div className={`py-1  ${styles.HomeboxXs}`}>
                        <h5 className={`text-center pt-2 ${styles.Title}`}>Find Posts</h5>
                        <p className="pt-1 mb-0">Posts by Department</p>
                        </div>
                      </Link>
                    </Col>
                    <Col xs={6} className="pr-4 pl-0" >
                    <Link to={`/moodshots`} >
                        <div className={`px-0 py-1 ${styles.HomeboxXs}`}>
                        <h5 className={`text-center pt-2 ${styles.Title}`}>Moodshots</h5>
                        <p className="mb-0 pt-1">Add and view moodshots</p>
                        </div>
                      </Link>
                    </Col>    
                </Row>
                <Row className="text-center mt-2">
                    <Col xs={6} >
                      <Link to={`/profiles`} >
                        <div className={`px-0 py-1 ${styles.HomeboxXs}`}>
                        <h5 className={`text-center pt-2 ${styles.Title}`}>Profiles</h5>
                        <p className="mb-0 pt-1">View and create feed</p>
                        </div>
                      </Link>
                    </Col>
                    <Col className="pl-0 pr-4" xs={6} >
                    <Link to={`/days`} >
                      <div className={`px-0 py-1  ${styles.HomeboxXs}`}>
                            <h5 className={`text-center pt-2 ${styles.Title}`}>Schedule</h5>
                            <p className="mb-0 pt-1"> Add and view schedule </p>
                        </div>
                      </Link>
                    </Col>
                </Row>
                <Row className="text-center mt-2">
                    <Col xs={6} >
                      <Link to={`/characters`} >
                        <div className={`px-0 py-1 ${styles.HomeboxXs}`}>
                        <h5 className={`text-center pt-2 ${styles.Title}`}>Characters</h5>
                        <p className="mb-0 pt-1"> All Character details</p>
                        </div>
                      </Link>
                    </Col>
                    <Col xs={6} className="pl-0 pr-4" >
                    <Link to={`/locations`} >
                      <div className={`px-0 py-1  ${styles.HomeboxXs}`}>
                            <h5 className={`text-center pt-2 ${styles.Title}`}>Locations</h5>
                            <p className="mb-0 pt-1">Addresses and images </p>
                        </div>
                      </Link>
                    </Col>
                </Row>
                <Row className="text-center mt-2">
                  <Col xs={2}></Col>
                <Col xs={8} >
                    <Link to={`/depts/general`} >
                      <div className={`px-0 py-1 ${styles.HomeboxXs}`}>
                            <h5 className={`text-center pt-2 ${styles.Title}`}>Departments</h5>
                            <p className="pt-1 mb-0"> Posts outside of scenes</p>
                        </div>
                      </Link>
                    </Col>
                </Row>
              </div>
          </Col>
          </Row>
            {/* <Col
            xs={1} 
            className={`my-3 px-4`}
          >
            <Image
              className={`${styles.FillerImagerh}`}
              src={door}
            />
          </Col> */}
        </div>
    )
}

export default Home
