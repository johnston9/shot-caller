import React from 'react';
import Card from "react-bootstrap/Card";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import styles from "../../styles/Post.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Link, useHistory } from 'react-router-dom';
import Avatar from "../../components/Avatar";
import { axiosRes } from '../../api/axiosDefaults';
import { PostDropdown } from '../../components/PostDropdown';
import { useRedirect } from '../../hooks/Redirect';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const PostTop = (props) => {
  useRedirect("loggedOut")
    const {
        id,
        owner,
        name,
        profile_id,
        profile_image,
        comments_count,
        likes_count,
        like_id,
        archive_id,
        title,
        number,
        departments,
        category,
        updated_at,
        setPosts,
      } = props;

      const currentUser = useCurrentUser()
      const is_owner = currentUser?.username === owner;
      const history = useHistory();
      const cat = category.substring(0, 3);
      const title15 = title.substring(0, 15);

      const handleEdit = () => {
        history.push(`/posts/${id}/edit`);
      };

      const handleDelete = async () => {
        try {
          await axiosRes.delete(`/posts/${id}/`);
          history.goBack();
        } catch (err) {
          console.log(err);
        }
      };

      const handleArchive = async () => {
        try {
          const { data } = await axiosRes.post("/archives/", { post: id });
          setPosts((prevPosts) => ({
            ...prevPosts,
            results: prevPosts.results.map((post) => {
              return post.id === id
                ? { ...post, archive_id: data.id }
                : post;
            }),
          }));
        } catch (err) {
          console.log(err);
        }
      };

      const handleUnarchive = async () => {
        try {
          await axiosRes.delete(`/archives/${archive_id}/`);
          setPosts((prevPosts) => ({
            ...prevPosts,
            results: prevPosts.results.map((post) => {
              return post.id === id
                ? { ...post, archive_id: null }
                : post;
            }),
          }));
        } catch (err) {
          console.log(err);
        }
      };

      const handleLike = async () => {
        try {
          const { data } = await axiosRes.post("/likes/", { post: id });
          setPosts((prevPosts) => ({
            ...prevPosts,
            results: prevPosts.results.map((post) => {
              return post.id === id
                ? { ...post, likes_count: post.likes_count + 1, like_id: data.id }
                : post;
            }),
          }));
        } catch (err) {
          console.log(err);
        }
      };

      const handleUnlike = async () => {
        try {
          await axiosRes.delete(`/likes/${like_id}/`);
          setPosts((prevPosts) => ({
            ...prevPosts,
            results: prevPosts.results.map((post) => {
              return post.id === id
                ? { ...post, likes_count: post.likes_count - 1, like_id: null }
                : post;
            }),
          }));
        } catch (err) {
          console.log(err);
        }
      };


    return (
        <div >
          <Card className={styles.PostTop} >
          {/* d-flex align-items-center justify-content-center */}
                <Card.Body className="py-0 px-0">
                <Row className="d-flex align-items-center py-0 my-0">
                    <Col xs={12} lg={6} >
                      <Row>
                        <Col xs={12} sm={8} className="d-flex align-items-center 
                        justify-content-space-between">
                        <Link to={`/profiles/${profile_id}`}>
                        <Avatar src={profile_image} height={45}  />
                        </Link>
                        <span className='ml-1 ml-md-3'>{name}</span>
                        <span className='ml-3 ml-md-3'>{updated_at}</span>
                        {is_owner && (
                        <PostDropdown
                            handleEdit={handleEdit}
                            handleDelete={handleDelete}
                        />
                        ) } 
                        </Col>
                        <Col xs={12} sm={4} className="d-flex align-items-center justify-content-center"> 
                          <div className='d-none d-sm-block' >
                          {/* archives */}
                          {archive_id ? (
                                <OverlayTrigger
                                placement="top"
                                overlay={<Tooltip>Unarchive</Tooltip>}
                                >
                                <span onClick={handleUnarchive} >
                                <i className={`fas fa-folder ${styles.Heart}`} />
                                </span>
                                </OverlayTrigger>
                            ) : currentUser ? (
                              <OverlayTrigger
                              placement="top"
                              overlay={<Tooltip>Archive</Tooltip>}
                              >
                                <span onClick={handleArchive}>
                                <i className={`far fa-folder-open ${styles.HeartOutline}`} />
                                </span>
                                </OverlayTrigger>
                            ) : (
                                <OverlayTrigger
                                placement="top"
                                overlay={<Tooltip>Log in please</Tooltip>}
                                >
                                <i className="far fa-folder-open" />
                                </OverlayTrigger>
                            )}
                            {/* like */}
                            {is_owner ? (
                                <OverlayTrigger
                                placement="top"
                                overlay={<Tooltip>You can't like your own post!</Tooltip>}
                                >
                                <i className="far fa-heart" />
                                </OverlayTrigger>
                            ) : like_id ? (
                                <OverlayTrigger
                                placement="top"
                                overlay={<Tooltip>Unlike</Tooltip>}
                                >
                                <span onClick={handleUnlike} >
                                <i className={`fas fa-heart ${styles.Heart}`} />
                                </span>
                                </OverlayTrigger>
                            ) : currentUser ? (
                                <OverlayTrigger
                                  placement="top"
                                  overlay={<Tooltip>Like</Tooltip>}
                                  >
                                <span onClick={handleLike}>
                                <i className={`far fa-heart ${styles.HeartOutline}`} />
                                </span>
                                </OverlayTrigger>
                            ) : (
                                <OverlayTrigger
                                placement="top"
                                overlay={<Tooltip>Log in please</Tooltip>}
                                >
                                <i className="far fa-heart" />
                                </OverlayTrigger>
                            )}
                            {likes_count}
                            <OverlayTrigger
                                placement="top"
                                overlay={<Tooltip>Comments</Tooltip>}
                                >
                            <Link to={`/posts/${id}`}>
                                <i className="far fa-comments" />
                            </Link>
                            </OverlayTrigger>
                            {comments_count}
                        </div>
                        </Col>
                      </Row>            
                    </Col>  
                    <Col xs={12} lg={6} > 
                    <Link  to={`/posts/${id}`} > 
                    <Row className={`${styles.Content} my-2 ml-0 mr-3`}>   
                      <Col className={`text-center py-2`} 
                      sm={7} xs={12} >
                      {departments && 
                          <span style={{ textTransform: 'capitalize'}} >S {number} - {departments} </span>} 
                          {cat && <span className={`py-1`}  
                        style={{ textTransform: 'capitalize'}} >- {cat}. </span> }  
                      </Col>
                      <Col className={`${styles.Content2} py-2 text-center`} xs={12} sm={5}>
                      {title && <span style={{ fontStyle: 'italic' }}>{title15}</span>}
                      </Col>
                    </Row>
                    </Link>
                    </Col> 
                  </Row>
                </Card.Body>
            </Card>
        </div>
    )
}

export default PostTop