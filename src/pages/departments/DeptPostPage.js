import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button"
import btnStyles from "../../styles/Button.module.css";
import { useHistory, useParams } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import { useRedirect } from "../../hooks/Redirect";
import TopBox from "../../components/TopBox";
import DeptPost from "./DepPost";

function DeptPostPage() {
  useRedirect("loggedOut")
    const { id } = useParams()
    const [post, setPost] = useState({ results: [] });
    const [title, setTitle] = useState("");

    const history = useHistory();

    useEffect(() => {
      const handleMount = async () => {
        try {
          const { data } = await axiosReq.get(`/department/posts/${id}`)
          const dept = data.departments
          console.log(dept)
          setPost({ results: [data] });
          setTitle(dept)
        } catch (err) {
          console.log(err);
        }
      };
    
        handleMount();
      }, [id]);


  return (
    <div>
      <TopBox title="Dept Xtra" title2={title} />
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" >
      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue} ml-3 mb-2`}
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