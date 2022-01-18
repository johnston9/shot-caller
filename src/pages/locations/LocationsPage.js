import React, { useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import appStyles from "../../App.module.css";
import styles from "../../styles/PostsPage.module.css";

import { useLocation } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import NoResults from "../../assets/no-results.png";
import btnStyles from "../../styles/Button.module.css";
import { useHistory } from 'react-router-dom';

import Asset from "../../components/Asset";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import { useRedirect } from "../../hooks/Redirect";
import { Button } from "react-bootstrap";
import TopBox from "../../components/TopBox";
import LocationTop from "./LocationTop";
import LocationsCreate from "./LocationsCreate";

const LocationsPage = () => {
    useRedirect("loggedOut");
  const [show, setShow] = useState(false);
  const [locations, setLocations] = useState({ results: [] });
  const [error, setErrors] = useState({});
  const [hasLoaded, setHasLoaded] = useState(false);
  const history = useHistory();
  const [query, setQuery] = useState("");
  const topbox = true;

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const { data } = await axiosReq.get(`/locations/?&search=${query}`);
        console.log(data)
        setLocations(data);
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
        fetchLocations();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [query])

    return (
        <div>
            <TopBox title="Locations" />
            <Button
                className={`${btnStyles.Button} ${btnStyles.Blue} py-0 my-2`}
                onClick={() => history.goBack()}
                >
                Back
            </Button>
            {/* search */}
            <Row>
                <Col className="py-2 text-center" xs={12} md={6} md={{ span: 6, offset: 3 }} >
                <Form
                    className={`${styles.SearchBar} mt-3`}
                    onSubmit={(event) => event.preventDefault()}
                    >
                <Form.Control
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    type="text"
                    className="mr-sm-2"
                    placeholder="Search by Location name"
                />
                </Form>
                </Col>
            </Row>
            {/* add location */}
            <Row>
              <Col className="text-center" >
                <Button onClick={() => setShow(show => !show)} 
                className={`${btnStyles.Button} ${btnStyles.Wide2} ${btnStyles.Bright}`}>
                Add Location</Button>
              </Col>
            </Row>
            {!show ?("") : (<LocationsCreate topbox /> ) }
            {/* Locations */}
            <Row className="h-100">
                <Col>
                    {hasLoaded ? (
                    <>
                    {locations.results.length ? (
                        locations.results.map((location) => (
                        <Col xs={6} md={4} lg={3} className="py-2 p-0 p-lg-2">
                        <LocationTop key={location.id} {...location} />
                        </Col>
                        ))) 
                        : (
                        <Container className={appStyles.Content}>
                            <Asset src={NoResults } />
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

export default LocationsPage
