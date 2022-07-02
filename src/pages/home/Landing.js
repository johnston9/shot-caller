import React, { useMemo } from "react";
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
import { useCrewInfoContext } from "../../contexts/BaseCallContext";
import { getRefreshToken, gettoken, shouldRefreshToken } from "../../utils/utils";
import { useHistory } from "react-router-dom";

const Landing = () => {
  const token = getRefreshToken();
    console.log(token);
    const tokenreal = gettoken();
    console.log(tokenreal);
  const currentUser = useCurrentUser();
  const crewInfoOne = useCrewInfoContext();
    const crew = crewInfoOne.results[0];
  console.log(currentUser);
  const history = useHistory();

  useMemo(() => {
    if (shouldRefreshToken()) {
        console.log("token here")
      } 
  }
, [history]);

  const admin = false;
    return (
        <Container className={`px-2 ${styles.Background} px-0`}>
          <TopBox title={`SHOT CALLER 2 `} />
          {tokenreal ? (<p className={`${styles.White}`}>
           {tokenreal}
          </p>) : ("") }
          {token ? (<p className={`${styles.White}`}>
           {token}
          </p>) : ("") }
          {currentUser ? (<p className={`${styles.White}`}>
           {currentUser.username}
          </p>) : ("") }
          {crew ? (<p className={`${styles.White}`}>
           {crew.production_company}
          </p>) : ("") }
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
            <Col className="my-3" xs={10} >
            {/* large */}
            <div className="d-none d-lg-block">
            <Row className="text-center">
              <Col md={1}></Col>
                <Col lg={10} >
                  <Link to={`/scenes`} >
                    <div className={`pt-1  ${styles.Homebox}`}>
                    <h5 className={`text-center pt-2 ${styles.Title}`}>Primary Scenes Workspace </h5>
                    <div className={`${styles.Inner}`}>
                    <p className="mt-2 mb-0">
                      Create Scene Breakdowns. Colloborate  
                      in Scene Department Workspaces. <br/>
                      Create and view Storyboards
                      and Shotlists.
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
            <Col lg={10}>
            <Row>
                {/* Moodshots */}
                <Col md={6} lg={4} >
                  <Link to={`/moodshots`} >
                    <div className={`py-1 ${styles.HomeboxSmEr}`}>
                    <h5 className={`text-center pt-2 ${styles.Title}`}>Moodshots</h5>
                    <div className={`${styles.Inner}`}>
                    {admin ? (
                              <p className="mt-2"> Create / View Moodshots </p>
                            ) : (
                              <p className="mt-2"> View Moodshots </p>
                            )}
                    </div>
                    </div>
                  </Link>
                </Col>   
                {/* Profiles */}
                <Col md={6} lg={4} >
                  <Link to={`/profiles`} >
                    <div className={`py-1 ${styles.HomeboxSmEr}`}>
                    <h5 className={`text-center pt-2 ${styles.Title}`}>Profiles</h5>
                    <div className={`${styles.Inner}`}>
                    <p className="mt-2">Profiles and Feed</p>
                    </div>
                    </div>
                  </Link>
                </Col> 
                <Col xs={6} lg={4} >
                  <Link to={`/crewinfo`} >
                    <div className={`py-1 ${styles.HomeboxSmEr}`}>
                    <h5 className={`text-center pt-2 ${styles.Title}`}>Crew Info</h5>
                    <div className={`${styles.Inner} `}>
                    <p className="mt-2"> Crew Info Details</p>
                    </div>
                    </div>
                  </Link>
                </Col>
              </Row>
            </Col>
            </Row>
            <Row className="mt-3 text-center">
            <Col lg={1}></Col>
            <Col lg={10}>
            <Row>
                <Col md={6} lg={4}  >
                <Link to={`/days`} >
                  <div className={` py-1  ${styles.HomeboxSmEr}`}>
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
                <Col md={6} lg={4} >
                  <Link to={`/callsheets`} >
                    <div className={`py-1 ${styles.HomeboxSmEr}`}>
                    <h5 className={`text-center pt-2 ${styles.Title}`}>Callsheets</h5>
                    <div className={`${styles.Inner}`}>
                    {admin ? (
                              <p className="mt-2"> Create / View Callsheets </p>
                            ) : (
                              <p className="mt-2"> View Callsheets </p>
                            )}
                    </div>
                    </div>
                  </Link>
                </Col> 
                {/* cards  */}
                <Col xs={6} lg={4} >
                  <Link to={`/indexcards`} >
                    <div className={`py-1 ${styles.HomeboxSmEr}`}>
                    <h5 className={`text-center pt-2 ${styles.Title}`}>Index Cards</h5>
                    <div className={`${styles.Inner} `}>
                    <p className="mt-2"> Index Cards for Scenes</p>
                    </div>
                    </div>
                  </Link>
                </Col>
              </Row>
              </Col>
            </Row>
            <Row className="mt-3 text-center">
            <Col lg={1} ></Col>
            <Col lg={10}>
            <Row>
                <Col xs={6} lg={4} >
                  <Link to={`/characters`} >
                    <div className={`py-1 ${styles.HomeboxSmEr}`}>
                    <h5 className={`text-center pt-2 ${styles.Title}`}>Characters</h5>
                    <div className={`${styles.Inner}`}>
                    <p className="mt-2">Character Details</p>
                    </div>
                    </div>
                  </Link>
                </Col>
                <Col xs={6} lg={4} >
                <Link to={`/locations`} >
                  <div className={`py-1  ${styles.HomeboxSmEr}`}>
                        <h5 className={`text-center pt-2 ${styles.Title}`}>Locations</h5>
                        <div className={`${styles.Inner}`}>
                        <p className="mt-2">Addresses and Images</p>
                        </div>
                    </div>
                  </Link>
                </Col>
                {/* Index Shots*/}
                <Col xs={6} lg={4} > 
                <Link to={`/series`} >
                  <div className={`py-1  ${styles.HomeboxSmEr}`}>
                        <h5 className={`text-center pt-2 ${styles.Title}`}>Index Shots</h5>
                        <div className={`${styles.Inner}`}>
                        <p className="mb-0 pt-1">Create Index Shots Series  </p>
                        </div>
                    </div>
                  </Link>
                </Col>
            </Row>
            </Col>
            </Row>
            {/* info depts*/}
            <Row className="text-center mt-3">
                {/* Crew Info */}
                <Col lg={1} ></Col>
                <Col lg={10}>
                <Row>
                <Col lg={3}></Col>
                {/* depts general */}
                <Col xs={6} lg={6} > 
                <Link to={`/depts/general`} >
                  <div className={`py-1  ${styles.HomeboxSmEr}`}>
                        <h5 className={`text-center pt-2 ${styles.Title}`}>Depts-Xtra</h5>
                        <div className={`${styles.Inner}`}>
                        <p className="mb-0 pt-1">Departments Posting Area  </p>
                        </div>
                    </div>
                  </Link>
                </Col>
              </Row>
              </Col>
            </Row>
            </div>
            {/* medium */}
            <div className="d-none d-md-block d-lg-none">
            <Row className="text-center">
              <Col md={1}></Col>
                <Col md={10} >
                  <Link to={`/scenes`} >
                    <div className={`pt-1  ${styles.Homebox}`}>
                    <h5 className={`text-center pt-2 ${styles.Title}`}>Primary Scenes Workspace </h5>
                    <div className={`${styles.Inner}`}>
                    <p className="mt-2 mb-0">
                      Colloborate on Scenes
                      in Department Workspaces.
                    </p>
                    </div>
                    </div>
                  </Link>
                </Col>
            </Row>
            <Row className="mt-0 text-center">
            <Col md={1} ></Col>
              <Col md={10} >
                  <Link to={`/findposts/departments`} >
                  <div className={`px-3 py-1  ${styles.HomeboxFind}`}>
                    <h5 className={`text-center pt-0 `}>Quick Find Posts</h5>
                    <p className="mt-2">All - Archived - Liked - Feed - Posts by Department </p>
                    </div>
                  </Link>
              </Col>
            </Row>
            <Row className="mt-3 text-center">
            <Col md={1} ></Col>
                {/* Moodshots */}
                <Col md={5} lg={5} >
                  <Link to={`/moodshots`} >
                    <div className={`py-1 ${styles.HomeboxSmEr}`}>
                    <h5 className={`text-center pt-2 ${styles.Title}`}>Moodshots</h5>
                    <div className={`${styles.Inner}`}>
                    {admin ? (
                              <p className="mt-2"> Create / View Moodshots </p>
                            ) : (
                              <p className="mt-2"> View Moodshots </p>
                            )}
                    </div>
                    </div>
                  </Link>
                </Col>   
                {/* Profiles */}
                <Col md={5} lg={5} >
                  <Link to={`/profiles`} >
                    <div className={`py-1 ${styles.HomeboxSmEr}`}>
                    <h5 className={`text-center pt-2 ${styles.Title}`}>Profiles</h5>
                    <div className={`${styles.Inner}`}>
                    <p className="mt-2">Profiles and Feed</p>
                    </div>
                    </div>
                  </Link>
                </Col> 
            </Row>
            <Row className="mt-3 text-center">
            <Col md={1}></Col>
                <Col md={5} lg={5}  >
                <Link to={`/days`} >
                  <div className={` py-1  ${styles.HomeboxSmEr}`}>
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
                <Col md={5} lg={5} >
                  <Link to={`/callsheets`} >
                    <div className={`py-1 ${styles.HomeboxSmEr}`}>
                    <h5 className={`text-center pt-2 ${styles.Title}`}>Callsheets</h5>
                    <div className={`${styles.Inner}`}>
                    {admin ? (
                              <p className="mt-2"> Create / View Callsheets </p>
                            ) : (
                              <p className="mt-2"> View Callsheets </p>
                            )}
                    </div>
                    </div>
                  </Link>
                </Col>  
            </Row>
            <Row className="mt-3 text-center">
            <Col md={1} ></Col>
                <Col md={5} lg={5} >
                  <Link to={`/characters`} >
                    <div className={`py-1 ${styles.HomeboxSmEr}`}>
                    <h5 className={`text-center pt-2 ${styles.Title}`}>Characters</h5>
                    <div className={`${styles.Inner}`}>
                    <p className="mt-2">Character Details</p>
                    </div>
                    </div>
                  </Link>
                </Col>
                <Col xs={5} lg={5} >
                <Link to={`/locations`} >
                  <div className={`py-1  ${styles.HomeboxSmEr}`}>
                        <h5 className={`text-center pt-2 ${styles.Title}`}>Locations</h5>
                        <div className={`${styles.Inner}`}>
                        <p className="mt-2">Addresses and Images</p>
                        </div>
                    </div>
                  </Link>
                </Col>
            </Row>
            {/* info depts*/}
            <Row className="text-center mt-3">
                {/* Crew Info */}
                <Col md={1} ></Col>
                <Col md={5} lg={5} >
                  <Link to={`/crewinfo`} >
                    <div className={`py-1 ${styles.HomeboxSmEr}`}>
                    <h5 className={`text-center pt-2 ${styles.Title}`}>Crew Info</h5>
                    <div className={`${styles.Inner} `}>
                    <p className="mb-0 pt-1"> Crew Info Details</p>
                    </div>
                    </div>
                  </Link>
                </Col>
                {/* depts general */}
                <Col md={5} lg={5} > 
                <Link to={`/depts/general`} >
                  <div className={`py-1  ${styles.HomeboxSmEr}`}>
                        <h5 className={`text-center pt-2 ${styles.Title}`}>Depts-Xtra</h5>
                        <div className={`${styles.Inner}`}>
                        <p className="mb-0 pt-1">Departments Posting Area  </p>
                        </div>
                    </div>
                  </Link>
                </Col>
            </Row>
            {/* Index */}
            <Row className="text-center mt-3">
                {/* Index Cards */}
                <Col md={1} ></Col>
                <Col md={5} lg={5} >
                  <Link to={`/indexcards`} >
                    <div className={`py-1 ${styles.HomeboxSmEr}`}>
                    <h5 className={`text-center pt-2 ${styles.Title}`}>Index Cards</h5>
                    <div className={`${styles.Inner} `}>
                    <p className="mb-0 pt-1"> Index Cards for Scenes</p>
                    </div>
                    </div>
                  </Link>
                </Col>
                {/* Index Shots*/}
                <Col md={5} lg={5} > 
                <Link to={`/depts/general`} >
                  <div className={`py-1  ${styles.HomeboxSmEr}`}>
                        <h5 className={`text-center pt-2 ${styles.Title}`}>Index Shots</h5>
                        <div className={`${styles.Inner}`}>
                        <p className="mb-0 pt-1">Create Index Shots Series  </p>
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
                      <div className={`py-2  ${styles.HomeboxXsXs}`}>
                      <h5 className={`text-center ${styles.Title}`}>Scenes Workspace </h5>
                      <div className={`${styles.Inner} mt-2 pb-1`}>
                      <p className="pt-1 mb-0">
                        Collaborate on scenes by department.
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
                      <div className={`py-1 ${styles.HomeboxXs}`}>
                      <h5 className={`text-center pt-2 ${styles.Title}`}>Moodshots</h5>
                      <div className={`${styles.Inner} mt-2 pb-2`}>
                      {admin ? (
                              <p className="mt-2"> Add / View <br/> Moodshots </p>
                            ) : (
                              <p className="mt-2"> View <br/> Moodshots </p>
                            )}
                      </div>
                      </div>
                    </Link>
                  </Col>  
                  {/* Profiles */}
                  <Col xs={6} >
                    <Link to={`/profiles`} >
                      <div className={`py-1 ${styles.HomeboxXs}`}>
                      <h5 className={`text-center pt-2 ${styles.Title}`}>Profiles</h5>
                      <div className={`${styles.Inner} mt-2 pb-2`}>
                      <p className="mb-0 pt-1">Profiles <br/> and Feed</p>
                      </div>
                      </div>
                    </Link>
                  </Col>
              </Row>
              <Row className="text-center mt-2">
                  {/* Schedule */}
                  <Col xs={6} >
                  <Link to={`/days`} >
                    <div className={`py-1  ${styles.HomeboxXs}`}>
                          <h5 className={`text-center pt-2 ${styles.Title}`}>Schedule</h5>
                          <div className={`${styles.Inner} mt-2 pb-2`}>
                          {admin ? (
                              <p className="mt-2"> Add / View <br/> Schedule </p>
                            ) : (
                              <p className="mt-2"> View <br/> Schedule </p>
                            )}
                          </div>
                      </div>
                    </Link>
                  </Col>
                  {/* Callsheets   */}
                  <Col xs={6} >
                  <Link to={`/callsheets`} >
                      <div className={`py-1 ${styles.HomeboxXs}`}>
                      <h5 className={`text-center pt-2 ${styles.Title}`}>Callsheets</h5>
                      <div className={`${styles.Inner} mt-2 pb-2`}>
                      {admin ? (
                              <p className="mt-2"> Add / View <br/> Callsheets </p>
                            ) : (
                              <p className="mt-2"> View <br/> Callsheets </p>
                            )}
                      </div>
                      </div>
                    </Link>
                  </Col> 
              </Row>
              <Row className="text-center mt-2">
                  {/* Characters */}
                  <Col xs={6} >
                    <Link to={`/characters`} >
                      <div className={`py-1 ${styles.HomeboxXs}`}>
                      <h5 className={`text-center pt-2 ${styles.Title}`}>Characters</h5>
                      <div className={`${styles.Inner} mt-2 pb-2`}>
                      <p className="mb-0 pt-1"> Character <br/> Details</p>
                      </div>
                      </div>
                    </Link>
                  </Col>
                  {/* Locations */}
                  <Col xs={6} >
                  <Link to={`/locations`} >
                    <div className={`py-1  ${styles.HomeboxXs}`}>
                          <h5 className={`text-center pt-2 ${styles.Title}`}>Locations</h5>
                          <div className={`${styles.Inner} mt-2 pb-2`}>
                          <p className="mb-0 pt-1">Addresses <br/> and Images </p>
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
                      <div className={`py-1 ${styles.HomeboxXs}`}>
                      <h5 className={`text-center pt-2 ${styles.Title}`}>Crew Info</h5>
                      <div className={`${styles.Inner} mt-2 pb-2`}>
                      <p className="mb-0 pt-1"> Crew Info <br/> Details</p>
                      </div>
                      </div>
                    </Link>
                  </Col>
                  {/* depts general */}
                  <Col xs={6} >
                  <Link to={`/depts/general`} >
                    <div className={`py-1  ${styles.HomeboxXs}`}>
                          <h5 className={`text-center pt-2 ${styles.Title}`}>Depts-Xtra</h5>
                          <div className={`${styles.Inner} mt-2 pb-2`}>
                          <p className="mb-0 pt-1">Departments <br/> Posting Area  </p>
                          </div>
                      </div>
                    </Link>
                  </Col>
              </Row>
              {/* Indexes */}
              <Row className="text-center mt-2">
                  {/* Index cards */}
                  <Col xs={6} >
                    <Link to={`/indexcards`} >
                      <div className={`py-1 ${styles.HomeboxXs}`}>
                      <h5 className={`text-center pt-2 ${styles.Title}`}>Index Cards</h5>
                      <div className={`${styles.Inner} mt-2 pb-2`}>
                      <p className="mb-0 pt-1"> Scene Index Cards</p>
                      </div>
                      </div>
                    </Link>
                  </Col>
                  {/* Index Shots */}
                  <Col xs={6} >
                  <Link to={`/series`} >
                    <div className={`py-1  ${styles.HomeboxXs}`}>
                          <h5 className={`text-center pt-2 ${styles.Title}`}>Index Shots</h5>
                          <div className={`${styles.Inner} mt-2 pb-2`}>
                          <p className="mb-0 pt-1">Index Shots Series </p>
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
                    <Col xs={{span: 8, offset: 2}}>
                    <p className={`${styles.Inner} text-center my-3`}>
                      Guest, please click Sign In and use the login details there
                    </p>
                    </Col>
                  </Row>
                <Row>
                <Col md= {3} className="d-none d-md-block"></Col>
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
