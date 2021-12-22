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
import PopularProfiles from "../profiles/PopularProfiles";
import { useRedirect } from "../../hooks/Redirect";
import PostTop from "./PostTop";
import PostCreateForm from "./PostCreateForm";
import { Button } from "react-bootstrap";
import TopBox from "../../components/TopBox";

function PostsPage({ feed, archived, allposts, liked, message, sceneId, number, dept, category, filter = "" }) {
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
    console.log(`sceneId ${sceneId}`)
    console.log(`number ${number}`)
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
    <div>
      <TopBox title="Posts" />
      <Button
            className={`${btnStyles.Button} ${btnStyles.Blue} py-0 my-2`}
            onClick={() => history.goBack()}
        >
            Back
        </Button>
      <Button
            className={`${btnStyles.Button} ${btnStyles.Blue} py-0 my-2`}
            onClick={() => history.push('/scenes')}
        >
            Scenes
        </Button>
    <Row className="h-100">
      <Col className="py-2 text-center" >
        {sceneId ? (
          <div>
        <h2 className={`mb-1 ${styles.Info}`} >Scene {number}</h2><span>SceneId {sceneId}</span>
        </div>
        ) : ""}
        {dept ? (
          <div>
        <h2 className={`mb-1 ${styles.Info} text-center`} >
        <span style={{ textTransform: 'capitalize'}}> {dept} department - {category}</span> </h2>
        </div>
        ) : ""}
        {allposts ? (
          <div>
        <h2 className={`mb-1 ${styles.Info} text-center`} >All Posts </h2>
        </div>
        ) : ""}
        {feed ? (
          <div>
        <h2 className={`mb-1 ${styles.Info} text-center`} >Feed </h2>
        </div>
        ) : ""}
        {archived ? (
          <div>
        <h2 className={`mb-1 ${styles.Info} text-center`} >Archived Posts </h2>
        </div>
        ) : ""}
        {liked ? (
          <Button onClick={() => setShow(show => !show)} >Liked Posts</Button>
        ) : (
          ""
        )}  
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
            {sceneId ? (
              <Button onClick={() => setShow(show => !show)} 
              className={`${btnStyles.Button} ${btnStyles.Wide2} ${btnStyles.Bright}`}>
              Add Post</Button>
            ) : (
              ""
            )}
        {!show ?("") : (<PostCreateForm sceneId={sceneId} number={number} dept={dept} category={category} /> ) }
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
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
    </Row>
    </div>
  );
}

export default PostsPage;