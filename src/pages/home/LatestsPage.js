/* Page to fetch all the Latest Posts
 * Latest is a department choice in the Depts-Xtra app
   So all requests are to department */
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
import { Button } from "react-bootstrap";
import TopBox from "../../components/TopBox";
import LatestTop from "./LatestTop";
import LatestCreate from "./LatestCreate";

function LatestsPage() {
  useRedirect();
  const [show, setShow] = useState(false);
  const [posts, setPosts] = useState({ results: [] });
  // eslint-disable-next-line
  const [error, setErrors] = useState({});
  const [hasLoaded, setHasLoaded] = useState(false);
  const history = useHistory();
 
  const [query, setQuery] = useState("");

  const fetchPosts = async () => {
    try {
      const { data } = await axiosReq.get(`/department/posts/?departments=latest&search=${query}`);
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

  useEffect(() => {
    /* Page to fetch all the Latest Posts
     * Latest is a department choice in the Depts-Xtra app
       So all requests are to department */
    setHasLoaded(false);
    const timer = setTimeout(() => {
      fetchPosts();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [query])
  
  return (
    <div>
      <TopBox work="Latest Buzz"/>
      <Button
            className={`${btnStyles.Button} ${btnStyles.Blue} py-0 my-2`}
            onClick={() => history.goBack()}
        >
            Back
        </Button>
        <Row>
          <Col className="text-center">
            <Button onClick={() => setShow(show => !show)} 
            className={`${btnStyles.Button} ${btnStyles.Wide2} ${btnStyles.Bright}`}>
            Add Latest Buzz</Button>
        {!show ?("") : (<LatestCreate setShow={setShow} /> ) }
          </Col>
        </Row>
        <Row>
        <Col className="py-2 text-center" xs={12} md={{ span: 6, offset: 3 }} >
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
        <Row className="mt-3 px-2">
          <Col>
        {hasLoaded ? (
          <>
            {posts.results.length ? (
              <InfiniteScroll
              children={posts.results.map((post) => (
                <LatestTop 
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

export default LatestsPage