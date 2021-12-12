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

import Asset from "../../components/Asset";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import PopularProfiles from "../profiles/PopularProfiles";
import { useRedirect } from "../../hooks/Redirect";
import PostTop from "./PostTop";
import PostCreateForm from "./PostCreateForm";
import { Button } from "react-bootstrap";

function PostsPage({ message, sceneId, dept, category, filter = "" }) {
  useRedirect("loggedOut");
  const [show, setShow] = useState(false);
  const [posts, setPosts] = useState({ results: [] });
  const [error, setErrors] = useState({});
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();
 
  const [query, setQuery] = useState("");

  useEffect(() => {
    console.log(`depart ${filter}`);
    console.log(`sceneId ${sceneId}`)
    console.log(`dept ${dept}`)
    console.log(`category ${category}`)
    const fetchPosts = async () => {
      try {
        const { data } = await axiosReq.get(`/posts/?${filter}&search=${query}`);
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
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <h3 className={`mb-1 ${styles.Info} text-center`} >Scene {sceneId} Department {dept} Category {category} </h3>
        <Button onClick={() => setShow(show => !show)} >Add Post</Button>
        {!show ?("") : (<PostCreateForm sceneId={sceneId} /> ) }
        <PopularProfiles mobile/>
        <i className={`fas fa-search ${styles.SearchIcon}`} />
        <Form
          className={styles.SearchBar}
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
        {hasLoaded ? (
          <>
            {posts.results.length ? (
              <InfiniteScroll
              children={posts.results.map((post) => (
                <PostTop key={post.id} {...post} setPosts={setPosts} />
              ))}
              dataLength={posts.results.length}
              loader={<Asset spinner />}
              hasMore={!!posts.next}
              next={() => fetchMoreData(posts, setPosts)}
            />
            ) : (
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
      <Col md={4} className="d-none d-lg-block p-0 p-lg-2">
        <PopularProfiles />
      </Col>
    </Row>
  );
}

export default PostsPage;