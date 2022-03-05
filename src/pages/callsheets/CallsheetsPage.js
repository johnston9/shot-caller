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
import { Button } from "react-bootstrap";
import TopBox from "../../components/TopBox";
import CallsheetTop from "./CallsheetTop";
import CallsheetsBase from "./CallsheetsBase";

const CallsheetsPage = ({ filter="" }) => {
  useRedirect("loggedOut");
  const [showBase, setShowBase] = useState(false);
  const [callsheets, setCallsheets] = useState({ results: [] });
  const [error, setErrors] = useState({});
  const [hasLoaded, setHasLoaded] = useState(false);
  const history = useHistory();
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchCallsheets = async () => {
      try {
        const { data } = await axiosReq.get(`/callsheets/?${filter}&search=${query}`);
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
        {/* title={`Shoot Day ${day}`} 
            title3={`${date}`}*/}
        <Button
            className={`${btnStyles.Button} ${btnStyles.Blue} py-0 mt-1`}
            onClick={() => history.goBack()}
        >
            Back
        </Button>
        {/* Add base callsheet */}
        <h3 className="text-center">Callsheet Base Info</h3>
        <Row className="text-center">
            <Col xs={4} >
            <Button onClick={() => history.push("base/callsheets/create")}
              className={`${btnStyles.Button} ${btnStyles.Wide2} ${btnStyles.Shed}`}>
              Add Info</Button>
            </Col>
            <Col xs={4}>
            <Button onClick={() => setShowBase(showBase => !showBase ) }
              className={`${btnStyles.Button} ${btnStyles.Wide2} ${btnStyles.Shed}`}>
              View Info</Button>
            </Col>
            <Col xs={4}>
            <Button onClick={() => history.push("base/callsheets/edit")}
              className={`${btnStyles.Button} ${btnStyles.Wide2} ${btnStyles.Shed}`}>
              Edit Info</Button>
            </Col>
        </Row>
        {/* Base */}
        {showBase ? (
          <CallsheetsBase />
        ) : ("") }
        {/* search  */}
        <Row>
        <Col className="mt-2 text-center" xs={12} md={{ span: 6, offset: 3 }} >
        <Form
          className={`${styles.SearchBar} mt-3`}
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
        <p style={{ textTransform: 'uppercase'}} className={`mt-2 pl-3 mb-0 py-1 ${styles.SubTitle }`}></p>
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