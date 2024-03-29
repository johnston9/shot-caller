/* Page to fetch the data for each Post and it's Comments
 * Contains the Post Component to which it passes the data */
import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import appStyles from "../../App.module.css";
import { useParams } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import Post from "./Post";
import Comment from "../comments/Comment";
import CommentCreateForm from "../comments/CommentCreateForm";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Asset from "../../components/Asset";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import { useRedirect } from "../../hooks/Redirect";
import TopBox from "../../components/TopBox";

function PostPage() {
  useRedirect();
    const { id } = useParams()
    const [post, setPost] = useState({ results: [] });

    const currentUser = useCurrentUser();
    const profile_image = currentUser?.profile_image;
    const [comments, setComments] = useState({ results: [] });

    useEffect(() => {
      /* Function to fetch the data for each Post and it's Comments */
      const handleMount = async () => {
        try {
          const [{ data: post }, { data: comments }] = await Promise.all([
            axiosReq.get(`/posts/${id}`),
            axiosReq.get(`/comments/?post=${id}`),
          ]);
          setPost({ results: [post] });
          setComments(comments);
        } catch (err) {
          console.log(err);
        }
      };
    
        handleMount();
      }, [id]);


  return (
    <div>
      <TopBox title="Post" />
      <Row className="h-100">
      <Col className="py-2 p-0 p-lg-1" >
        <Post {...post.results[0]} setPosts={setPost} postPage/>
        <Container className={`${appStyles.Content} mt-3 `} >
          <h3 className="my-3 text-center">Comments</h3>
        {currentUser ? (
          <CommentCreateForm
          profile_id={currentUser.profile_id}
          profileImage={profile_image}
          post={id}
          setPost={setPost}
          setComments={setComments}
        />
        ) : comments.results.length ? (
          "Comments"
        ) : null}
        {/* comments */}
        {comments.results.length ? (
          <InfiniteScroll
            children={comments.results.map((comment) => (
              <Comment key={comment.id} 
              {...comment} 
              setPost={setPost}
              setComments={setComments}/>
            ))}
            dataLength={comments.results.length}
            loader={<Asset spinner /> }
            hasMore={!!comments.next}
            next={() => fetchMoreData(comments, setComments)}
            />
            
          ) : currentUser ? (
            <span>No comments yet, be the first to comment!</span>
          ) : (
            <span>No comments... yet</span>
          )}
        </Container>
      </Col>
    </Row>
    </div>
  );
}

export default PostPage;