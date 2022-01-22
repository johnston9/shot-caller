import React, {  useEffect, useState } from 'react';
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";
import Form from 'react-bootstrap/Form';
import styles from "../../styles/Scene.module.css";

import Asset from "../../components/Asset";
import Profile from './Profile';
import { useProfileData } from '../../contexts/ProfileDataContext';
import { useRedirect } from '../../hooks/Redirect';
import { axiosReq } from '../../api/axiosDefaults';

const PopularProfiles = () => {
  useRedirect("loggedOut");
  const [error, setErrors] = useState({});
  const [hasLoaded, setHasLoaded] = useState(false);
  const [show, setShow] = useState(false);
  const [query, setQuery] = useState("");
  const [profiles, setProfiles] = useState({ results: [] });

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const { data } = await axiosReq.get(`/profiles/?ordering=-followers_count&search=${query}`);
        setProfiles(data);
        console.log(query);
        console.log(data);
        // setHasLoaded(true);
      } catch(err) {
        console.log(err);
      }
    }
    setHasLoaded(false);
    const timer = setTimeout(() => {
      fetchProfiles();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [query])

    return (
        <div>
          <Row>
        <Col className="py-2 text-center" xs={12} md={6} md={{ span: 6, offset: 3 }} >
        {/* <i className={`fas fa-search ${styles.SearchIcon}`} /> */}
        <Form
          className={`${styles.SearchBar} mt-3`}
          onSubmit={(event) => event.preventDefault()}
        >
          <Form.Control
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            type="text"
            className="mr-sm-2"
            placeholder="Search by username or post title"
          />
        </Form>
        </Col>
        </Row>
          {/* <Row>
            <Col className="mt-3" xs={12} md={{ span: 6, offset: 3 }} >
            <Form
                className={styles.SearchBar}
                onSubmit={(event) => event.preventDefault()}
                >
                <Form.Control
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    type="text"
                    className="mr-sm-2"
                    placeholder="Search by name"
                />
                </Form>
            </Col>
          </Row> */}
          {/* <Row>
            <Col className='text-center'>
            <Button onClick={() => setShow(show => !show)} 
              className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright}`}>Profiles</Button>
            </Col>
          </Row> */}
        <Container 
          className={`mt-5 ${appStyles.Content}`}
         >
           {profiles.results.length ? (
        <>
            {profiles.results.map((profile) => (
              <Profile key={profile.id} profile={profile} mobile />
            ))}
      </>
      ) 
        : (
        <Asset spinner />
      )}
            {/* {popularProfiles.results.length ? (
        <>
        {!show ? (
            ""
          ) : (
            popularProfiles.results.map((profile) => (
              <Profile key={profile.id} profile={profile} mobile />
            ))
          )}
      </>
      ) : (
        <Asset spinner />
      )} */}
        </Container>
        </div>
    )
}

export default PopularProfiles
