/* Page to fetch all Moodboard data and render the cover info 
 * Contains the MoodboardTop component to which it passes the data
   for each Moodboard cover
 * Contains a search for Moodboards function
 * The word moodshots is used through the app in the urls for 
   Moodboards as it connects with the MootShot App in 
   Shot Caller API in DRF */
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import appStyles from "../../App.module.css";
import styles from "../../styles/Moodboards.module.css";
import { axiosReq } from "../../api/axiosDefaults";
import NoResults from "../../assets/no-results.png";
import btnStyles from "../../styles/Button.module.css";
import { useHistory } from 'react-router-dom';

import Asset from "../../components/Asset";
import { useRedirect } from "../../hooks/Redirect";
import { Button } from "react-bootstrap";
import TopBox from "../../components/TopBox";
import MoodboardTop from "./MoodboardTop";
import Info from "./Info";
import Moodboards from "./Moodboards";

const MoodboardsPage = ({sceneId="", number="", characterRole="", locationPlace="", message, filter="" }) => {
    useRedirect();
  const [moodshots, setMoodshots] = useState({ results: [] });
  // eslint-disable-next-line
  const [error, setErrors] = useState({});
  const [showInfo, setShowInfo] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  // const [hasOrder, setHasOrder] = useState(false); 
  const history = useHistory();
  // for testing only
  console.log(sceneId);
  console.log(locationPlace);
  console.log(characterRole);
  console.log(filter);
 
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchShots = async () => {
      try {
        const { data } = await axiosReq.get(`/moodshots/?${filter}&search=${query}`);
        console.log(data)
        setMoodshots(data);
        setHasLoaded(true);
      } catch(err) {
        console.log(err);
        if (err.response?.status !== 401) {
          setErrors(err.response?.data);
          setHasLoaded(true);
        }
      }
    }
    setHasLoaded(false);
    const timer = setTimeout(() => {
        fetchShots();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [filter, query])

    return (
        <div>
            <TopBox 
              scene={number}
              title={characterRole}
              title4={locationPlace}
              work="Moodboards"
              />
            <Button
                    className={`${btnStyles.Button} ${btnStyles.Blue} py-0 my-2`}
                    onClick={() => history.goBack()}
                >
                    Back
            </Button>
            <Button
              className={`float-right py-0 my-2 ${btnStyles.Order} ${btnStyles.Button}`}
              onClick={() => setShowInfo(showInfo => !showInfo)} >INFO
            </Button>
            {!showInfo ? (
                ""
                    ) : (
                      <Info  /> 
            ) } 
            {/* title */}
            <h5 className={`mt-1 mb-3 py-1 text-center ${styles.SubTitle }`}
                  style={{ textTransform: 'uppercase'}}>Moodboards</h5>
            {/* <div>
                {sceneId ? (
                  <>
                  <h5 className={`mt-1 mb-3 py-1 text-center ${styles.SubTitle }`}
                  style={{ textTransform: 'uppercase'}}>Scene {number} Moodboards</h5>
                    </>
                  ) : characterRole ? (
                    <>
                    <h5 className={`mt-1 mb-4 pl-3 py-1 text-center ${styles.SubTitle }`}
                    style={{ textTransform: 'uppercase'}}>
                      character Moodboards</h5>
                      </>
                  ) : locationPlace ? (
                    <>
                  <h5 className={`mt-1 mb-4 pl-3 py-1 text-center ${styles.SubTitle }`}
                  style={{ textTransform: 'uppercase'}}>
                    location Moodboards</h5>
                    </>
                  ) : (
                    <h5 className={`mt-1 mb-4 pl-3 py-1 text-center ${styles.SubTitle }`}>
                     MOODBOARDS
                    </h5>
                  ) }
            </div> */}
            <div>
            {sceneId ? (
              <Row className="mb-3">
              <Col className="text-center">
              <>
              <Button onClick={() => history.push(`/scene/moodshot/create`) }
              className={`px-5 py-1 ${btnStyles.Button} ${btnStyles.Bright}`}>
              Add Scene {number} Moodboard</Button>
              </>
              </Col>
              </Row >
            ) : characterRole ? (
              <Row className="mb-3">
              <Col className="text-center">
              <>
              <Button onClick={() => history.push(`/character/moodshot/create`) }
              className={`px-5 py-1 ${btnStyles.Button} ${btnStyles.Bright}`}>
              Add {characterRole} Moodboard</Button>
              </>
              </Col>
              </Row>
            ) : locationPlace ? (
              <Row className="mb-3">
              <Col className="text-center">
              <>
              <Button onClick={() => history.push(`/location/moodshot/create`) }
              className={`px-5 py-1 ${btnStyles.Button} ${btnStyles.Bright}`}>
              Add {locationPlace} Moodboard</Button>
              </>
              </Col>
              </Row>
            ) : (
              <>
              <Row>
              <Col className="text-center">
                <Button onClick={() => history.push(`/moodshot/create`) }
                  className={`${btnStyles.Button} ${btnStyles.Wide2} ${btnStyles.Bright}`}>
                  Add Moodboard</Button>
                </Col>
              </Row>           
              <Row>
              <Col className="py-2 text-center" xs={12} md={{ span: 6, offset: 3 }} >
              <Form
                  className={`${styles.SearchBar} mt-3`}
                  onSubmit={(event) => event.preventDefault()}
                  >
              <Form.Control
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  type="text"
                  className="mr-sm-2"
                  placeholder="Search by Scene Number, Location or Character"
              />
              </Form>
              </Col>
              </Row>
              </>
              ) }
              </div>
              {/* moodboards */}
              <Row className="mt-3 px-2">
              <Col>
              {hasLoaded ? (
                <>
                  {moodshots.results.length ? (
                    <Moodboards
                    setMoodshots={setMoodshots}
                    moodshots={moodshots}
                    />
                  ) 
                  : (
                    <Container className={appStyles.Content}>
                      <Asset src={NoResults } message={message} />
                    </Container>
                  )}
                </>
              ) : (
                <Container className={appStyles.Content}>
                  <Asset spinner />
                </Container>
              )}  
              </Col>
              </Row>
        </div>
    )
}

export default MoodboardsPage
