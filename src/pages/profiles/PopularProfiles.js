import React, {  useEffect, useState } from 'react';
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import appStyles from "../../App.module.css";
import Form from 'react-bootstrap/Form';
import styles from "../../styles/Scene.module.css";

import Asset from "../../components/Asset";
import NoResults from "../../assets/no-results.png";
import Profile from './Profile';
import { useRedirect } from '../../hooks/Redirect';
import { axiosReq } from '../../api/axiosDefaults';

const PopularProfiles = () => {
  useRedirect("loggedOut");
  const [hasLoaded, setHasLoaded] = useState(false);
  const [query, setQuery] = useState("");
  const [profiles, setProfiles] = useState({ results: [] });

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const { data } = await axiosReq.get(`/profiles/?ordering=-followers_count&search=${query}`);
        setProfiles(data);
        console.log(query);
        console.log(data);
        setHasLoaded(true);
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
            placeholder="Search by name or position"
          />
        </Form>
        </Col>
        </Row>
        <Container 
          className={`mt-5 ${appStyles.Content}`}
         >
           {hasLoaded ? ( 
             <>
           {profiles.results.length ? (
            profiles.results.map((profile) => (
              <Profile key={profile.id} profile={profile}/>
            ))
      ) : (
        <Container className={appStyles.Content}>
          <Asset src={NoResults } message={"No Results"} />
        </Container>
      )}
    </>
      ) : (
        <Asset spinner />
      )}
        </Container>
        </div>
    )
}

export default PopularProfiles
