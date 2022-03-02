import React from "react";
import { Link } from "react-router-dom";
import door from "../../assets/door.png";
import rightdoor from "../../assets/rightdoor.png";
import TopBox from '../../components/TopBox';
import { useRedirect } from '../../hooks/Redirect';
import styles from "../../styles/Home.module.css";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";


const Home = () => {
    useRedirect("loggedOut");

    return (
      <Container className={`px-2  ${styles.Background}`}>
      <TopBox title="SHOT CALLER" />
        <Row className={`my-3 ${styles.Row}`}>
        <Col className="my-3 pr-0 pl-3 pl-md-4"
          xs={1} md={1}
      >
        <Image
            className={`${styles.FillerImagel}`}
            src={door}
        />
      </Col>
      <Col className="my-3" xs={10} md={10}>
          <div className="d-none d-md-block">
            <Row className="text-center">
              <Col lg={1}></Col>
                <Col lg={10} >
                  <Link to={`/scenes`} >
                    <div className={`px-3 py-1  ${styles.Homebox}`}>
                    <h5 className={`text-center pt-2 ${styles.Title}`}>Primary Scenes Workspace </h5>
                    <div className={`${styles.Inner}`}>
                    <p className="mt-2">
                      Create scenes and breakdowns and colloborate on them 
                      in their universal or department workspaces. Create and view storyboards
                      and shotlists
                    </p>
                    </div>
                    </div>
                  </Link>
                </Col>
            </Row>
            <Row className="mt-3 text-center">
            <Col lg={1} ></Col>
              <Col xs={6} lg={5} >
                  <Link to={`/findposts/departments`} >
                  <div className={`px-3 py-1  ${styles.HomeboxSm}`}>
                    <h5 className={`text-center pt-2 ${styles.Title}`}>Find Posts</h5>
                    <div className={`${styles.Inner}`}>
                    <p className="mt-2">All, Archived, Liked and Feed<br/>
                    Posts by Department </p>
                    </div>
                    </div>
                  </Link>
                </Col>
                <Col xs={6} lg={5} >
                  <Link to={`/moodshots`} >
                    <div className={`px-1 py-1 ${styles.HomeboxSm}`}>
                    <h5 className={`text-center pt-2 ${styles.Title}`}>Moodshots</h5>
                    <div className={`${styles.Inner}`}>
                    <p className="mt-2">Moodshots for scenes, locations, characters
                    and themes</p>
                    </div>
                    </div>
                  </Link>
                </Col>    
            </Row>
            <Row className=" text-center">
            <Col lg={1}></Col>
                <Col xs={6} lg={5}  >
                  <Link to={`/profiles`} >
                    <div className={`px-3 py-1 ${styles.HomeboxSmEr}`}>
                    <h5 className={`text-center pt-2 ${styles.Title}`}>Profiles</h5>
                    <div className={`${styles.Inner}`}>
                    <p className="mt-2">Follow profiles to create Feed</p>
                    </div>
                    </div>
                  </Link>
                </Col>
                <Col xs={6} lg={5}  >
                <Link to={`/days`} >
                  <div className={`px-1 py-1  ${styles.HomeboxSmEr}`}>
                        <h5 className={`text-center pt-2 ${styles.Title}`}>Schedule</h5>
                        <div className={`${styles.Inner}`}>
                        <p className="mt-2"> Autogenerate and view schedule </p>
                        </div>
                    </div>
                  </Link>
                </Col>
            </Row>
            <Row className="mt-3 text-center">
            <Col lg={1} ></Col>
                <Col xs={6} lg={5} >
                  <Link to={`/characters`} >
                    <div className={`px-3 py-1 ${styles.HomeboxSmEr}`}>
                    <h5 className={`text-center pt-2 ${styles.Title}`}>Characters</h5>
                    <div className={`${styles.Inner}`}>
                    <p className="mt-2">All Character details</p>
                    </div>
                    </div>
                  </Link>
                </Col>
                <Col xs={6} lg={5} >
                <Link to={`/locations`} >
                  <div className={`px-3 py-1  ${styles.HomeboxSmEr}`}>
                        <h5 className={`text-center pt-2 ${styles.Title}`}>Locations</h5>
                        <div className={`${styles.Inner}`}>
                        <p className="mt-2">Filming addresses and images </p>
                        </div>
                    </div>
                  </Link>
                </Col>
            </Row>
            <Row className="mt-4">
              <Col xs={2}></Col>
              <Col xs={8}>
              <Link to={`/depts/general`} >
                  <div className={`px-3 py-1 ${styles.HomeboxSmEr}`}>
                        <h5 className={`text-center pt-2 ${styles.Title}`}>Depts-Xtra</h5>
                        <div className={`${styles.Inner}`}>
                        <p className="mt-2 text-center"> Extra departments posting area</p>
                        </div>
                    </div>
                  </Link>
              </Col>
            </Row>
          </div>
          {/* mobile view */}
          <div className=" d-md-none mb-5">
            <Row className="text-center">
              <Col md={2}></Col>
                <Col md={8} >
                  <Link to={`/scenes`} >
                    <div className={`px-2 py-2  ${styles.HomeboxXsXs}`}>
                    <h5 className={`text-center ${styles.Title}`}>Scenes Workspace </h5>
                    <div className={`${styles.Inner} mt-2 pb-1`}>
                    <p className="pt-1 mb-0">
                      Collaborate on scenes by department. View storyboards and shotlists 
                    </p>
                    </div>
                    </div>
                  </Link>
                </Col>
            </Row>
            <Row className="text-center mt-2">
              <Col xs={6}>
              <Link to={`/findposts/departments`} >
                  <div className={`py-1 px-2  ${styles.HomeboxXs}`}>
                    <h5 className={`text-center pt-2 ${styles.Title}`}>Find Posts</h5>
                    <div className={`${styles.Inner} mt-2 pb-1`}>
                    <p className="pt-1 mb-0">Posts by Department</p>
                    </div>
                    </div>
                  </Link>
                </Col>
                <Col xs={6} className="pr-3 pl-0" >
                <Link to={`/moodshots`} >
                    <div className={`px-2 py-1 ${styles.HomeboxXs}`}>
                    <h5 className={`text-center pt-2 ${styles.Title}`}>Moodshots</h5>
                    <div className={`${styles.Inner} mt-2 pb-2`}>
                    <p className="mb-0 pt-1">Add and view moodshots</p>
                    </div>
                    </div>
                  </Link>
                </Col>    
            </Row>
            <Row className="text-center mt-2">
                <Col xs={6} >
                  <Link to={`/profiles`} >
                    <div className={`px-2 py-1 ${styles.HomeboxXs}`}>
                    <h5 className={`text-center pt-2 ${styles.Title}`}>Profiles</h5>
                    <div className={`${styles.Inner} mt-2 pb-2`}>
                    <p className="mb-0 pt-1">View and create feed</p>
                    </div>
                    </div>
                  </Link>
                </Col>
                <Col className="pl-0 pr-3" xs={6} >
                <Link to={`/days`} >
                  <div className={`px-2 py-1  ${styles.HomeboxXs}`}>
                        <h5 className={`text-center pt-2 ${styles.Title}`}>Schedule</h5>
                        <div className={`${styles.Inner} mt-2 pb-2`}>
                        <p className="mb-0 pt-1"> Add and view schedule </p>
                        </div>
                    </div>
                  </Link>
                </Col>
            </Row>
            <Row className="text-center mt-2">
                <Col xs={6} >
                  <Link to={`/characters`} >
                    <div className={`px-2 py-1 ${styles.HomeboxXs}`}>
                    <h5 className={`text-center pt-2 ${styles.Title}`}>Characters</h5>
                    <div className={`${styles.Inner} mt-2 pb-2`}>
                    <p className="mb-0 pt-1"> Character details</p>
                    </div>
                    </div>
                  </Link>
                </Col>
                <Col xs={6} className="pl-0 pr-3" >
                <Link to={`/locations`} >
                  <div className={`px-2 py-1  ${styles.HomeboxXs}`}>
                        <h5 className={`text-center pt-2 ${styles.Title}`}>Locations</h5>
                        <div className={`${styles.Inner} mt-2 pb-2`}>
                        <p className="mb-0 pt-1">Addresses and images </p>
                        </div>
                    </div>
                  </Link>
                </Col>
            </Row>
            <Row className="text-center mt-2">
              <Col xs={2}></Col>
            <Col xs={8} >
                <Link to={`/depts/general`} >
                  <div className={`px-2 py-1 ${styles.HomeboxXs}`}>
                        <h5 className={`text-center pt-2 ${styles.Title}`}>Depts-Xtra</h5>
                        <div className={`${styles.Inner} mt-2 pb-2`}>
                        <p className="pt-1 mb-0"> Departments posting area </p>
                        </div>
                    </div>
                  </Link>
                </Col>
            </Row>
          </div>
      </Col>
      <Col className={`my-3 pl-0 pr-3 pr-md-4`}
        xs={1} >
        <Image
          className={`${styles.FillerImagel}`}
          src={rightdoor}
        />
      </Col>
        </Row>
    </Container>
    )
}

export default Home
