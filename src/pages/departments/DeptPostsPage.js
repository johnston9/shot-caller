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
import DeptPostCreate from "./DeptPostCreate";
import DeptPostTop from "./DeptPostTop";

function DeptPostsPage({ filter = "" }) {
  useRedirect("loggedOut");
  const [show, setShow] = useState(false);
  const [posts, setPosts] = useState({ results: [] });
  const [error, setErrors] = useState({});
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();
  const history = useHistory();
 
  const [query, setQuery] = useState("");

  useEffect(() => {
    console.log(`depart ${filter}`);
    const fetchPosts = async () => {
      try {
        const { data } = await axiosReq.get(`/department/posts/?${filter}&search=${query}`);
        console.log(data)
        setPosts(data);
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
      fetchPosts();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [filter, query, pathname])
  
  return (
    <div>
      <TopBox title=" Department Posts" />
      <Button
            className={`${btnStyles.Button} ${btnStyles.Blue} py-0 my-2`}
            onClick={() => history.goBack()}
        >
            Back
        </Button>
      <Button
            className={`${btnStyles.Button} ${btnStyles.Blue} py-0 my-2`}
            onClick={() => history.push('/departments')}
        >
            Scenes
        </Button>
    <Row className="h-100">
      <Col className="py-2 text-center" >
        {/* {allposts ? (
          <div>
        <h2 className={`mb-1 ${styles.Info} text-center`} >All Posts </h2>
        </div>
        ) : ""} */}
        <Button onClick={() => setShow(show => !show)} >Add Post</Button>
        </Col>
        </Row>
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
        <Row>
          <Col className="text-center">
            <Button onClick={() => setShow(show => !show)} 
            className={`${btnStyles.Button} ${btnStyles.Wide2} ${btnStyles.Bright}`}>
            Add Post</Button>
        {!show ?("") : (<DeptPostCreate /> ) }
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
        {hasLoaded ? (
          <>
            {posts.results.length ? (
              <InfiniteScroll
              children={posts.results.map((post) => (
                <DeptPostTop key={post.id} {...post} setPosts={setPosts} />
              ))}
              dataLength={posts.results.length}
              loader={<Asset spinner />}
              hasMore={!!posts.next}
              next={() => fetchMoreData(posts, setPosts)}
            />
            ) : (
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
  );
}

export default DeptPostsPage;