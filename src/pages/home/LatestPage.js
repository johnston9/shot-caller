/* Page to fetch the Latest post's data
 * Contains the Latest component to which it passes the data */
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button"
import btnStyles from "../../styles/Button.module.css";
import { useHistory, useParams } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import { useRedirect } from "../../hooks/Redirect";
import TopBox from "../../components/TopBox";
import Latest from "./Latest";

function LatestPage() {
  useRedirect();
    const { id } = useParams()
    const [post, setPost] = useState({ results: [] });

    const history = useHistory();

    useEffect(() => {
      /* Function to fetch the Latest post's data */
      const handleMount = async () => {
        try {
          const { data } = await axiosReq.get(`/department/posts/${id}`)
          const dept = data.departments
          console.log(dept)
          setPost({ results: [data] });
        } catch (err) {
          console.log(err);
        }
      };
    
        handleMount();
      }, [id]);


  return (
    <div>
      <TopBox work="Latest Buzz"
        title="Post"/>
      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue} my-2`}
        onClick={() => history.goBack()}
      >
        Back
      </Button>
        <Latest {...post.results[0]} setPosts={setPost}/>
    </div>
  );
}

export default LatestPage