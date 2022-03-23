import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import appStyles from "../../App.module.css";
import styles from "../../styles/Callsheets.module.css";
import { axiosReq } from "../../api/axiosDefaults";
import NoResults from "../../assets/no-results.png";
import btnStyles from "../../styles/Button.module.css";
import { useHistory } from 'react-router-dom';

import Asset from "../../components/Asset";
import { useRedirect } from "../../hooks/Redirect";
import { Button, Image } from "react-bootstrap";
import TopBox from "../../components/TopBox";
import CallsheetTop from "./CallsheetTop";
import CrewInfo from "./CrewInfo";
import { useCrewInfoContext } from "../../contexts/BaseCallContext";

const CallsheetsPage = ({ filter="" }) => {
  useRedirect("loggedOut");
  const [showCrewInfo, setShowCrewInfo] = useState(false);
  const [callsheets, setCallsheets] = useState({ results: [] });
  const [error, setErrors] = useState({});
  const [hasLoaded, setHasLoaded] = useState(false);
  const history = useHistory();
  const [query, setQuery] = useState("");
  
  useEffect(() => {
    const fetchCallsheets = async () => {
      try {
        const { data } = await axiosReq.get(`/callsheetsnew/?${filter}&search=${query}`);
        setCallsheets(data);
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
        fetchCallsheets();
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [filter, query])

  return (
    <div>
        <TopBox work="Callsheets" />
        <Button
            className={`${btnStyles.Button} ${btnStyles.Blue} py-0 mt-1`}
            onClick={() => history.goBack()}
        >
            Back
        </Button>      
        {/* crew info */}
        <Row className="text-center">
            <Col >
            <Button onClick={() => setShowCrewInfo(showCrewInfo => !showCrewInfo ) }
              className={`${btnStyles.Button} ${btnStyles.Shed}`}>
              Company and Crew Info</Button>
            </Col>
        </Row>
        {/* CrewInfo */}
        {showCrewInfo ? (
          <CrewInfo setShowCrewInfo={setShowCrewInfo}  />
        ) : ("") }
        <h4 style={{ textTransform: 'uppercase'}} className={`mt-4 text-center mt-1 mb-4 pl-3 py-1 ${styles.SubTitle }`}>CALLSHEETS</h4>
        {/* search  */}
        <Row>
        <Col className="mt-0 text-center" xs={12} md={{ span: 6, offset: 3 }} >
        <Form
          className={`${styles.SearchBar} mt-1`}
          onSubmit={(event) => event.preventDefault()}
        >
          <Form.Control
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            type="text"
            className="mr-sm-2 text-center"
            placeholder="Search by Day"
          />
        </Form>
        </Col>
        </Row>
        {/* callsheets */}
        {/* <p style={{ textTransform: 'uppercase'}} className={`mt-2 pl-3 mb-0 py-1 ${styles.SubTitle }`}></p> */}
            <Row className="h-100 mt-3">
            {hasLoaded ? (
                <>
            {callsheets.results.length ? (
                callsheets.results.map((callsheet) => {
                  return (
                    <Col xs={4} sm={3} lg={2} className="px-2 py-2 p-0 p-lg-2">
                      <CallsheetTop
                        key={callsheet.id}
                        {...callsheet} 
                        />
                      </Col>
                )}
                ))
             : (
              <Container className={appStyles.Content}>
                <Asset src={NoResults } message="No Results" />
              </Container>
            )}
          </>
        ) : (
          <Container className={appStyles.Content}>
            <Asset spinner />
          </Container>
        )}
            </Row> 
    </div>
  )
}

export default CallsheetsPage