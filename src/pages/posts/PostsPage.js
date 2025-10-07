/* Page to fetch all Workspace Scene Posts data and render the cover info 
 * Contains the PostTop component to which it passes the data
   for each Post cover */
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import appStyles from "../../App.module.css";
import styles from "../../styles/PostsPage.module.css";
import { axiosReq } from "../../api/axiosDefaults";
import NoResults from "../../assets/no-results.png";
import btnStyles from "../../styles/Button.module.css";
import { useHistory } from 'react-router-dom';

import Asset from "../../components/Asset";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import { useRedirect } from "../../hooks/Redirect";
import PostTop from "./PostTop";
import PostCreateForm from "./PostCreateForm";
import { Button } from "react-bootstrap";
import TopBox from "../../components/TopBox";

function PostsPage({ feed, archived, allposts, liked, message, sceneId="", number="", dept, category="" , filter="" }) {
  useRedirect();
  const [show, setShow] = useState(false);
  const [posts, setPosts] = useState({ results: [] });
  // eslint-disable-next-line
  const [error, setErrors] = useState({});
  const [hasLoaded, setHasLoaded] = useState(false);
  const history = useHistory();
  console.log("postpage")
  const [query, setQuery] = useState("");

  const fetchPosts = async () => {
      try {
        const { data } = await axiosReq.get(`/posts/?${filter}&search=${query}`);
        if (category === 'requirements') {
          const reqData = data.results.sort((a, b) => a.number - b.number);
          setPosts(reqData);
        }
        setPosts(data);
        setHasLoaded(true);
        console.log(data);
      } catch(err) {
        console.log(err);
        if (err.response?.status !== 401) {
          setErrors(err.response?.data);
          setHasLoaded(true);
        }
      }
    }

  useEffect(() => {
    setHasLoaded(false);
    const timer = setTimeout(() => {
      fetchPosts();
    }, 500);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [filter, query]);
  
  return (
    <div>      
      {!dept && !allposts && !feed && !archived && !liked? (
        <>
        <TopBox work="All Posts"/>
        <p className={`${styles.Blueback} text-center mt-3`}> 
          Click the Back button or the Workspace Navlink to select Scenes or Posts</p>
        </>
      ) : ("") }
      {dept ? (
        <TopBox 
          scene={number}
          title2={dept}
          title3={category} />
        ) :  ("") }
      {allposts ? (
        <TopBox work="All Posts"/>
      ) : ("")}
      {feed ? (
        <TopBox work="Feed"/>
      ) : ("")}
      {archived ? (
        <TopBox work="Archived Posts"/>
      ) : ("")} 
      {liked ? (
        <TopBox work="Liked Posts"/>
      ) : ("")} 
        <Button
            className={`${btnStyles.Button} ${btnStyles.Blue} py-0 mt-1`}
            onClick={() => history.goBack()}
        >
            Back
        </Button>
        {!show ?(
          <Row>
          <Col className="text-center">
            {sceneId ? (
              <Button onClick={() => setShow(show => !show)} 
              className={`${btnStyles.Button} ${btnStyles.Wide2} ${btnStyles.Bright}`}>
              Add Post</Button>
            ) : (
              ""
            )}
          </Col>
        </Row>
        ) : (
        <PostCreateForm setShow={setShow} sceneId={sceneId} number={number} dept={dept} category={category} /> 
        ) }
        {/* search */}
        <Row>
        <Col className="mt-2 text-center" xs={12} md={{ span: 6, offset: 3 }} >
        <Form
          className={`${styles.SearchBar} mt-3`}
          onSubmit={(event) => event.preventDefault()}
        >
          <Form.Control
            value={query}
            className={`${styles.InputBar}`}
            onChange={(event) => setQuery(event.target.value)}
            type="text"
            placeholder="Search by username or post title"
          />
        </Form>
        </Col>
        </Row>
        {/* posts */}
        <Row className="mb-3 mt-2 px-2">
          <Col >
        {hasLoaded ? (
          <>
            {posts.results?.length ? (
              <InfiniteScroll
              className="pb-5"
              children={posts.results.map((post) => (
                <PostTop 
                fetchPosts={fetchPosts}
                key={post.id} 
                {...post} 
                setPosts={setPosts} />
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
    <hr/>
    </div>
  );
}

export default PostsPage;