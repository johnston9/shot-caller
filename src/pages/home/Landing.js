import React from "react";
import { Link } from "react-router-dom";
import door from "../../assets/door.png";
import rightdoor from "../../assets/rightdoor.png";
import TopBox from '../../components/TopBox';
import styles from "../../styles/Home.module.css";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

const Landing = () => {
  const currentUser = useCurrentUser();
  const admin = true;
    return (
        <Container className={`px-2 ${styles.Background} px-0`}>
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
          
          { currentUser ? (
            <Col className="my-3" xs={10} md={10}>
            <div className="d-none d-md-block">
              <Row className="text-center">
                <Col md={1}></Col>
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
              <Row className="mt-0 text-center">
              <Col lg={1} ></Col>
                <Col lg={10} >
                    <Link to={`/findposts/departments`} >
                    <div className={`px-3 py-1  ${styles.HomeboxFind}`}>
                      <h5 className={`text-center pt-0 `}>Quick Find Posts</h5>
                      <p className="mt-2">All - Archived - Liked - Feed - Posts by Department </p>
                      </div>
                    </Link>
                </Col>
              </Row>
              <Row className="mt-3 text-center">
              <Col lg={1} ></Col>
                  {/* Moodshots */}
                  <Col md={6} lg={5} >
                    <Link to={`/moodshots`} >
                      <div className={`px-1 py-1 ${styles.HomeboxSmEr}`}>
                      <h5 className={`text-center pt-2 ${styles.Title}`}>Moodshots</h5>
                      <div className={`${styles.Inner}`}>
                      <p className="mt-2">Add and View Moodshots</p>
                      </div>
                      </div>
                    </Link>
                  </Col>   
                  {/* Profiles */}
                  <Col md={6} lg={5} >
                    <Link to={`/profiles`} >
                      <div className={`px-3 py-1 ${styles.HomeboxSmEr}`}>
                      <h5 className={`text-center pt-2 ${styles.Title}`}>Profiles</h5>
                      <div className={`${styles.Inner}`}>
                      <p className="mt-2">Follow Profiles to Create Feed</p>
                      </div>
                      </div>
                    </Link>
                  </Col> 
              </Row>
              <Row className="mt-3 text-center">
              <Col lg={1}></Col>
                  <Col md={6} lg={5}  >
                  <Link to={`/days`} >
                    <div className={`px-1 py-1  ${styles.HomeboxSmEr}`}>
                          <h5 className={`text-center pt-2 ${styles.Title}`}>Schedule</h5>
                          <div className={`${styles.Inner}`}>
                            {admin ? (
                              <p className="mt-2"> Create / View schedule </p>
                            ) : (
                              <p className="mt-2"> View schedule </p>
                            )}
                          </div>
                      </div>
                    </Link>
                  </Col>
                  {/* Callsheets */}
                  <Col md={6} lg={5} >
                    <Link to={`/callsheets`} >
                      <div className={`px-1 py-1 ${styles.HomeboxSmEr}`}>
                      <h5 className={`text-center pt-2 ${styles.Title}`}>Callsheets</h5>
                      <div className={`${styles.Inner}`}>
                      <p className="mt-2">Callsheets for Shoot Days</p>
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
                      <p className="mt-2">All Character Details</p>
                      </div>
                      </div>
                    </Link>
                  </Col>
                  <Col xs={6} lg={5} >
                  <Link to={`/locations`} >
                    <div className={`px-3 py-1  ${styles.HomeboxSmEr}`}>
                          <h5 className={`text-center pt-2 ${styles.Title}`}>Locations</h5>
                          <div className={`${styles.Inner}`}>
                          <p className="mt-2">Filming Addresses and Images </p>
                          </div>
                      </div>
                    </Link>
                  </Col>
              </Row>
              {/* info */}
              <Row className="text-center mb-3 mt-3">
                  {/* Crew Info */}
                  <Col lg={1} ></Col>
                  <Col xs={6} lg={5} >
                    <Link to={`/crewinfo`} >
                      <div className={`px-3 py-1 ${styles.HomeboxSmEr}`}>
                      <h5 className={`text-center pt-2 ${styles.Title}`}>Crew Info</h5>
                      <div className={`${styles.Inner}`}>
                      <p className="mb-0 pt-1"> Crew Info Details</p>
                      </div>
                      </div>
                    </Link>
                  </Col>
                  {/* depts general */}
                  <Col xs={6} lg={5} > 
                  <Link to={`/depts/general`} >
                    <div className={`px-2 py-1  ${styles.HomeboxSmEr}`}>
                          <h5 className={`text-center pt-2 ${styles.Title}`}>Depts-Xtra</h5>
                          <div className={`${styles.Inner}`}>
                          <p className="mb-0 pt-1">Departments Posting Area  </p>
                          </div>
                      </div>
                    </Link>
                  </Col>
              </Row>
            </div>
            {/* mobile view */}
            <div className=" d-md-none mb-5">
              <Row className="text-center">
                  <Col>
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
              <Row className="text-center mt-0">
                <Col >
                <Link to={`/findposts/departments`} >
                    <div className={`py-1 px-2  ${styles.HomeboxFind}`}>
                      <h5 className={`text-center pt-1`}>Find Posts</h5>
                      <p className="pt-1 mb-0">Posts by Department</p>
                      </div>
                    </Link>
                  </Col>
              </Row>
              <Row className="text-center mt-3">
                  {/* Moodshots */}
                  <Col xs={6} >
                  <Link to={`/moodshots`} >
                      <div className={`px-2 py-1 ${styles.HomeboxXs}`}>
                      <h5 className={`text-center pt-2 ${styles.Title}`}>Moodshots</h5>
                      <div className={`${styles.Inner} mt-2 pb-2`}>
                      <p className="mb-0 pt-1">Add / View Moodshots</p>
                      </div>
                      </div>
                    </Link>
                  </Col>  
                  {/* Profiles */}
                  <Col xs={6} >
                    <Link to={`/profiles`} >
                      <div className={`px-2 py-1 ${styles.HomeboxXs}`}>
                      <h5 className={`text-center pt-2 ${styles.Title}`}>Profiles</h5>
                      <div className={`${styles.Inner} mt-2 pb-2`}>
                      <p className="mb-0 pt-1">Create / View Feed</p>
                      </div>
                      </div>
                    </Link>
                  </Col>
              </Row>
              <Row className="text-center mt-2">
                  {/* Schedule */}
                  <Col xs={6} >
                  <Link to={`/days`} >
                    <div className={`px-2 py-1  ${styles.HomeboxXs}`}>
                          <h5 className={`text-center pt-2 ${styles.Title}`}>Schedule</h5>
                          <div className={`${styles.Inner} mt-2 pb-2`}>
                          <p className="mb-0 pt-1"> Add / View Schedule </p>
                          </div>
                      </div>
                    </Link>
                  </Col>
                  {/* Callsheets   */}
                  <Col xs={6} >
                  <Link to={`/moodshots`} >
                      <div className={`px-2 py-1 ${styles.HomeboxXs}`}>
                      <h5 className={`text-center pt-2 ${styles.Title}`}>Callsheets</h5>
                      <div className={`${styles.Inner} mt-2 pb-2`}>
                      <p className="mb-0 pt-1">Add / View Callsheets</p>
                      </div>
                      </div>
                    </Link>
                  </Col> 
              </Row>
              <Row className="text-center mt-2">
                  {/* Characters */}
                  <Col xs={6} >
                    <Link to={`/characters`} >
                      <div className={`px-2 py-1 ${styles.HomeboxXs}`}>
                      <h5 className={`text-center pt-2 ${styles.Title}`}>Characters</h5>
                      <div className={`${styles.Inner} mt-2 pb-2`}>
                      <p className="mb-0 pt-1"> Character Details</p>
                      </div>
                      </div>
                    </Link>
                  </Col>
                  {/* Locations */}
                  <Col xs={6} >
                  <Link to={`/locations`} >
                    <div className={`px-2 py-1  ${styles.HomeboxXs}`}>
                          <h5 className={`text-center pt-2 ${styles.Title}`}>Locations</h5>
                          <div className={`${styles.Inner} mt-2 pb-2`}>
                          <p className="mb-0 pt-1">Addresses and Images </p>
                          </div>
                      </div>
                    </Link>
                  </Col>
              </Row>
              {/* info */}
              <Row className="text-center mt-2">
                  {/* Crew Info */}
                  <Col xs={6} >
                    <Link to={`/crewinfo`} >
                      <div className={`px-2 py-1 ${styles.HomeboxXs}`}>
                      <h5 className={`text-center pt-2 ${styles.Title}`}>Crew Info</h5>
                      <div className={`${styles.Inner} mt-2 pb-2`}>
                      <p className="mb-0 pt-1"> Crew Info Details</p>
                      </div>
                      </div>
                    </Link>
                  </Col>
                  {/* depts general */}
                  <Col xs={6} >
                  <Link to={`/depts/general`} >
                    <div className={`px-2 py-1  ${styles.HomeboxXs}`}>
                          <h5 className={`text-center pt-2 ${styles.Title}`}>Depts-Xtra</h5>
                          <div className={`${styles.Inner} mt-2 pb-2`}>
                          <p className="mb-0 pt-1">Departments Posting Area  </p>
                          </div>
                      </div>
                    </Link>
                  </Col>
              </Row>
            </div>
        </Col>
          ) : (
            <Col className="my-auto py-2 p-md-2" xs={10}>
             <Row>
             <Col md= {3} className="d-nome d-md-block"></Col>
               <Col xs={12} md={6} >
               <Link to={`signin`} >
                 <div className={`px-2  ${styles.Landingbox}`}>
                    <h5 className="py-3 text-center">
                      Sign in
                    </h5>
                 </div>
                 </Link>
                 <Link to={`/signup`} >
                 <div className={`px-2 mt-3 ${styles.Landingbox}`}>
                    <h5 className="py-3 text-center">
                      Sign up
                    </h5>
                 </div>
                 </Link>
               </Col>
             </Row>
          </Col>
          ) }
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

export default Landing
