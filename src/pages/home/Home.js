/* Hope Page containing links to all features 
 * Contains all links in large, medium and mobile views */
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
import { useCrewInfoContext } from "../../contexts/BaseCallContext";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

const Home = () => {
    useRedirect();
    const currentUser = useCurrentUser();
    const crewInfoOne = useCrewInfoContext();
  const production_name = crewInfoOne.production_name || "";
    const admin = true;

    return (
      <Container className={`px-2  ${styles.Background}`}>
      {production_name ? (
            <TopBox work={production_name} />
          ) : (
            <TopBox work={`SHOT CALLER`} />
          ) }
      {currentUser ? (<p className={`${styles.White}`}>
           {currentUser.username}
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
      <Col className="my-3" xs={10} >
      {/* large */}
      <div className="d-none d-lg-block">
      <Row className="mt-0 mb-3 text-center">
      <Col lg={2} ></Col>
        <Col lg={8} >
            <Link to={`/latest`} >
            <div className={`px-3 py-1  ${styles.HomeboxFind}`}>
              <h5 className={`text-center pt-0 `}>Latest Buzz</h5>
              <div className={`${styles.Inner}`}>
              <p className="mt-2">All the Latest News and Updates </p>
              </div>
              </div>
            </Link>
        </Col>
      </Row>
      <Row className="text-center mb-3">
        <Col md={1}></Col>
          <Col lg={10} >
            <Link to={`/scenes`} >
              <div className={`pt-1  ${styles.HomeboxSmEr}`}>
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
      <Col lg={1} ></Col>
        <Col lg={10} >
            <Link to={`/findposts/departments`} >
            <div className={`px-3 py-1  ${styles.HomeboxFind}`}>
              <h5 className={`text-center pt-0 `}>Quick Find Posts</h5>
              <div className={`${styles.Inner}`}>
              <p className="mt-2">All - Archived - Liked - Feed - Posts by Department </p>
              </div>
              </div>
            </Link>
        </Col>
      </Row>
      <Row className="mt-3 text-center">
      <Col lg={1} ></Col>
      <Col lg={10}>
      <Row>
          {/* Moodboards */}
          <Col md={6} lg={4} >
            <Link to={`/moodshots`} >
              <div className={`py-1 ${styles.HomeboxSmEr}`}>
              <h5 className={`text-center pt-2 ${styles.Title}`}>Moodboards</h5>
              <div className={`${styles.Inner}`}>
              {admin ? (
                        <p className="mt-2"> Create/View Moodboards </p>
                      ) : (
                        <p className="mt-2"> View Moodboards </p>
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
                  <p className="mt-2">Create Index Shots Series  </p>
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
                  <p className="mt-2">Collaborate by Department</p>
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
      <Row className="mt-0 mb-3 text-center">
      <Col md={2} ></Col>
        <Col md={8} >
            <Link to={`/latest`} >
            <div className={`px-3 py-1  ${styles.HomeboxFind}`}>
              <h5 className={`text-center pt-0 `}>Latest Buzz</h5>
              <div className={`${styles.Inner}`}>
              <p className="mt-2">All the Latest News and Updates </p>
              </div>
              </div>
            </Link>
        </Col>
      </Row>
      <Row className="text-center mb-3">
        <Col md={1}></Col>
          <Col md={10} >
            <Link to={`/scenes`} >
              <div className={`pt-1  ${styles.HomeboxSmEr}`}>
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
              <div className={`${styles.Inner}`}>
              <p className="mt-2">All - Archived - Liked - Feed - Posts by Department </p>
              </div>
              </div>
            </Link>
        </Col>
      </Row>
      <Row className="mt-3 text-center">
      <Col md={1} ></Col>
          {/* Moodboards */}
          <Col md={5} lg={5} >
            <Link to={`/moodshots`} >
              <div className={`py-1 ${styles.HomeboxSmEr}`}>
              <h5 className={`text-center pt-2 ${styles.Title}`}>Moodboards</h5>
              <div className={`${styles.Inner}`}>
              {admin ? (
                        <p className="mt-2"> Create / View Moodboards </p>
                      ) : (
                        <p className="mt-2"> View Moodboards </p>
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
              <p className="mt-2"> Crew Info Details</p>
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
                  <p className="mt-2">Collaborate by Department  </p>
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
              <p className="mt-2"> Index Cards for Scenes</p>
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
                  <p className="mt-2">Create Index Shots Series  </p>
                  </div>
              </div>
            </Link>
          </Col>
      </Row>
      </div>
      {/* mobile view */}
      <div className=" d-md-none mb-5 px-2">
      <Row className="mt-0 mb-3 text-center">
      <Col xs={2} ></Col>
        <Col xs={8} >
            <Link to={`/latest`} >
            <div className={`px-0 py-1  ${styles.HomeboxFind}`}>
              <h5 className={`text-center pt-0 `}>Latest Buzz</h5>
              <div className={`${styles.Inner}`}>
              <p className="mt-2">The Latest News </p>
              </div>
              </div>
            </Link>
        </Col>
      </Row>
        <Row className="text-center mb-3">
            <Col>
              <Link to={`/scenes`} >
                <div className={`py-2  ${styles.HomeboxXsXs}`}>
                <h5 className={`text-center ${styles.Title}`}>Scenes Workspace </h5>
                <div className={`${styles.Inner} mt-2 pb-1`}>
                <p className="pt-1 mb-0">
                  Collaborate on Scenes
                </p>
                </div>
                </div>
              </Link>
            </Col>
        </Row>
        <Row className="text-center mt-0">
          <Col >
          <Link to={`/findposts/departments`} >
              <div className={`py-1 ${styles.HomeboxFind}`}>
                <h5 className={`text-center pt-1`}>Find Posts</h5>
                <div className={`${styles.Inner}`}>
                <p className="pt-1 mb-0">Quick Find Posts</p>
                </div>
                </div>
              </Link>
            </Col>
        </Row>
        <Row className="text-center mt-3">
            {/* Moodshots */}
            <Col xs={6} className="pr-1" >
            <Link to={`/moodboards`} >
                <div className={`py-1 ${styles.HomeboxXs}`}>
                <h5 className={`text-center pt-2 ${styles.Title}`}>Moodboards</h5>
                <div className={`${styles.Inner} mt-2 pb-2`}>
                </div>
                </div>
              </Link>
            </Col>  
            {/* Profiles */}
            <Col xs={6} className="pl-1" >
              <Link to={`/profiles`} >
                <div className={`py-1 ${styles.HomeboxXs}`}>
                <h5 className={`text-center pt-2 ${styles.Title}`}>Profiles</h5>
                <div className={`${styles.Inner} mt-2 pb-2`}>
                </div>
                </div>
              </Link>
            </Col>
        </Row>
        <Row className="text-center mt-2">
            {/* Schedule */}
            <Col xs={6} className="pr-1" >
            <Link to={`/days`} >
              <div className={`py-1  ${styles.HomeboxXs}`}>
                    <h5 className={`text-center pt-2 ${styles.Title}`}>Schedule</h5>
                    <div className={`${styles.Inner} mt-2 pb-2`}>
                    </div>
                </div>
              </Link>
            </Col>
            {/* Callsheets */}
            <Col xs={6} className="pl-1" >
            <Link to={`/callsheets`} >
                <div className={`py-1 ${styles.HomeboxXs}`}>
                <h5 className={`text-center pt-2 ${styles.Title}`}>Callsheets</h5>
                <div className={`${styles.Inner} mt-2 pb-2`}>
                </div>
                </div>
              </Link>
            </Col> 
        </Row>
        <Row className="text-center mt-2">
            {/* Characters */}
            <Col xs={6} className="pr-1">
              <Link to={`/characters`} >
                <div className={`py-1 ${styles.HomeboxXs}`}>
                <h5 className={`text-center pt-2 ${styles.Title}`}>Characters</h5>
                <div className={`${styles.Inner} mt-2 pb-2`}>
                </div>
                </div>
              </Link>
            </Col>
            {/* Locations */}
            <Col xs={6} className="pl-1">
            <Link to={`/locations`} >
              <div className={`py-1  ${styles.HomeboxXs}`}>
                    <h5 className={`text-center pt-2 ${styles.Title}`}>Locations</h5>
                    <div className={`${styles.Inner} mt-2 pb-2`}>
                    </div>
                </div>
              </Link>
            </Col>
        </Row>
        {/* info */}
        <Row className="text-center mt-2">
            {/* Crew Info */}
            <Col xs={6} className="pr-1" >
              <Link to={`/crewinfo`} >
                <div className={`py-1 ${styles.HomeboxXs}`}>
                <h5 className={`text-center pt-2 ${styles.Title}`}>Crew Info</h5>
                <div className={`${styles.Inner} mt-2 pb-2`}>
                </div>
                </div>
              </Link>
            </Col>
            {/* depts general */}
            <Col xs={6} className="pl-1" >
            <Link to={`/depts/general`} >
              <div className={`py-1  ${styles.HomeboxXs}`}>
                    <h5 className={`text-center pt-2 ${styles.Title}`}>Depts-Xtra</h5>
                    <div className={`${styles.Inner} mt-2 pb-2`}>
                    </div>
                </div>
              </Link>
            </Col>
        </Row>
        {/* Indexes */}
        <Row className="text-center mt-2">
            {/* Index cards */}
            <Col xs={6} className="pr-1" >
              <Link to={`/indexcards`} >
                <div className={`py-1 ${styles.HomeboxXs}`}>
                <h5 className={`text-center pt-2 ${styles.Title}`}>Index Cards</h5>
                <div className={`${styles.Inner} mt-2 pb-2`}>
                </div>
                </div>
              </Link>
            </Col>
            {/* Index Shots */}
            <Col xs={6} className="pl-1" >
            <Link to={`/series`} >
              <div className={`py-1  ${styles.HomeboxXs}`}>
                    <h5 className={`text-center pt-2 ${styles.Title}`}>Index Shots</h5>
                    <div className={`${styles.Inner} mt-2 pb-2`}>
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
