import React, { useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import appStyles from "../../App.module.css";
import styles from "../../styles/Moodshots.module.css";
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
import MoodshotCreate from "./MoodshotCreate";
import MoodshotTop from "./MoodshotTop";

const MoodshotsPage = ({sceneId="", number="", character="", location="", message, filter="" }) => {
    useRedirect("loggedOut");
  const [moodshots, setMoodshots] = useState({ results: [] });
  const [error, setErrors] = useState({});
  const [show, setShow] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();
  const history = useHistory();
 
  const [query, setQuery] = useState("");

  useEffect(() => {
    // console.log(`depart ${filter}`);
    // console.log(`sceneId ${sceneId}`)
    // console.log(`number ${number}`)

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
  }, [filter, query, pathname])

    return (
        <div>
            <TopBox title="Moodshots" />
            <Button
                    className={`${btnStyles.Button} ${btnStyles.Blue} py-0 my-2`}
                    onClick={() => history.goBack()}
                >
                    Back
            </Button>
            <Row>
                <Col className="text-center">
                    <Button onClick={() => history.push(`/moodshot/create`) }
                    className={`${btnStyles.Button} ${btnStyles.Wide2} ${btnStyles.Bright}`}>
                    Add Moodshot</Button>
                {/* {!show ?("") : (<MoodshotCreate /> ) } */}
                </Col>
            </Row>
            {/* sceneId={sceneId} number={number} character={character} location={location} */}
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
                    placeholder="Search by Scene-number, Location or Character"
                />
                </Form>
                </Col>
            </Row>
            {hasLoaded ? (
          <>
            {moodshots.results.length ? (
                moodshots.results.map((shot) => (
                  <MoodshotTop key={shot.id} {...shot} />
                ))) 
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
        </div>
    )
}

export default MoodshotsPage
