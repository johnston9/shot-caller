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
import CharacterCreate from "./CharacterCreate";
import CharacterTop from "./CharacterTop";

const Characters = ({message}) => {
    useRedirect("loggedOut");
  const [show, setShow] = useState(false);
  const [characters, setCharacters] = useState({ results: [] });
  const [error, setErrors] = useState({});
  const [hasLoaded, setHasLoaded] = useState(false);
  const history = useHistory();
  const [query, setQuery] = useState("");
  const topbox = true

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const { data } = await axiosReq.get(`/characters/?&search=${query}`);
        console.log(data)
        setCharacters(data);
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
        fetchCharacters();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [query])

    return (
        <div>
            <TopBox title="Characters" />
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
                    placeholder="Search by Role"
                />
                </Form>
                </Col>
            </Row>
            {/* add char */}
            <Row>
              <Col className="text-center" >
                <Button onClick={() => setShow(show => !show)} 
                className={`${btnStyles.Button} ${btnStyles.Wide2} ${btnStyles.Bright}`}>
                Add Character</Button>
              </Col>
            </Row>
            {!show ?("") : (<CharacterCreate topbox /> ) }
            {/* characters */}
            <Row className="h-100">
                <Col>
                    {hasLoaded ? (
                    <>
                    {characters.results.length ? (
                        characters.results.map((character) => (
                        <Col xs={6} md={4} lg={3} className="py-2 p-0 p-lg-2">
                        <CharacterTop key={character.id} {...character} />
                        </Col>
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
                </Col>
            </Row>               
        </div>
    )
}

export default Characters
