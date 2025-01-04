/* Page to fetch the data for each DeptPost
 * Contains the DeptPost Component to which it passes the data */
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
  useRedirect();
    const { id } = useParams()
    const [post, setPost] = useState({ results: [] });
    const [title, setTitle] = useState("");

    const history = useHistory();

    useEffect(() => {
      /* Function to fetch the deptPost data */
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
    <TopBox work={title} title="Department" />
      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue} my-2`}
        onClick={() => history.goBack()}
      >
        Back
      </Button>
        <DeptPost {...post.results[0]} setPosts={setPost}/>
    </div>
  );
}

export default DeptPostPage;