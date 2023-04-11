/* Page to fetch all Callsheets data and render the display info
 * Contains the CallsheetTop component */
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

const CallsheetsPage = ({ filter="" }) => {
  useRedirect();
  const [callsheets, setCallsheets] = useState({ results: [] });
  // eslint-disable-next-line
  const [error, setErrors] = useState({});
  const [hasLoaded, setHasLoaded] = useState(false);
  const history = useHistory();
  const [query, setQuery] = useState("");
  
  useEffect(() => {
    /* Function to fetch all the Callsheets data */
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
        <h4 style={{ textTransform: 'uppercase'}} className={`mt-1 text-center mt-1 mb-2 pl-3 py-1 ${styles.SubTitle }`}>CALLSHEETS</h4>
        <Row className="text-center d-none d-md-block">
            <Col xs={12} md={{span: 8, offset: 2}} >
            <p>Add all crew members to the Crew Info page. Create Callsheets from their 
              scheduling page. Add to them or edit them from here or their Schedule page.
            </p>
            </Col>
        </Row>
        {/* search  */}
        <Row>
        <Col className="mt-3 text-center" xs={12} md={{ span: 6, offset: 3 }} >
        <Form
          className={`${styles.SearchBar} mt-1`}
          onSubmit={(event) => event.preventDefault()}
        >
          <Form.Control
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            type="text"
            className="mr-sm-2 text-center"
            placeholder="Search by Day or Date"
          />
        </Form>
        </Col>
        </Row>
        {/* callsheets */}
        <Row className="h-100 mt-3 mb-5 mx-2">
        {hasLoaded ? (
            <>
        {callsheets.results.length ? (
            callsheets.results.map((callsheet) => {
              return (
                <Col xs={4} sm={3} lg={2} className="p-0 p-lg-2">
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