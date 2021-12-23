import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button"
import btnStyles from "../../styles/Button.module.css";
import { useHistory, useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Asset from "../../components/Asset";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import { useRedirect } from "../../hooks/Redirect";
import TopBox from "../../components/TopBox";
import DeptPost from "./DepPost";

function DeptPostPage() {
  useRedirect("loggedOut")
    const { id } = useParams()
    const [post, setPost] = useState({ results: [] });

    const currentUser = useCurrentUser();
    const profile_image = currentUser?.profile_image;
    const history = useHistory();

    useEffect(() => {
      const handleMount = async () => {
        try {
          const { data } = await axiosReq.get(`/department/posts/${id}`)
          console.log(data);
          setPost({ results: [data] });
        } catch (err) {
          console.log(err);
        }
      };
    
        handleMount();
      }, [id]);


  return (
    <div>
      <TopBox title="Department Post" />
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" >
      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue} mb-2`}
        onClick={() => history.goBack()}
      >
        Back
      </Button>
        <DeptPost {...post.results[0]} setPosts={setPost}/>
      </Col>
    </Row>
    </div>
  );
}

export default DeptPostPage;