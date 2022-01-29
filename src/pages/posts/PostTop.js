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
import { useSetCategoryContext, useSetDeptContext, useSetSceneContext } from '../../contexts/DeptCategoryContext';
import { Button } from 'react-bootstrap';
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
        scene,
        number,
        departments,
        category,
        updated_at,
        setPosts,
      } = props;

      const currentUser = useCurrentUser()
      const is_owner = currentUser?.username === owner;
      const history = useHistory();
      const setSceneId = useSetSceneContext();
      const setDept = useSetDeptContext();
      const setCategory = useSetCategoryContext();
      var cat = category.substring(0, 3);

      const handleEdit = () => {
        history.push(`/posts/${id}/edit`);
      };
    
      const handleGoToScene = () => {
        setSceneId(scene);
        setDept(departments);
        setCategory(category);
        history.push(`/dept/category`);
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
        <div>
            <Card className={styles.Post} >
                <Card.Body className="py-1 px-0">
                <Row className="d-flex align-items-center">
                    <Col xs={12} lg={7} >
                      <Row>
                        <Col className="d-flex align-items-center justify-content-center" xs={12} md={8}>
                        <Link to={`/profiles/${profile_id}`}>
                        <Avatar src={profile_image} height={45}  />
                        </Link>
                        <span className='ml-1 ml-md-3'>{name}</span>
                        <span className='ml-1 ml-md-3 d-none d-md-block'>{updated_at}</span>
                        {is_owner && (
                        <PostDropdown
                            handleEdit={handleEdit}
                            handleDelete={handleDelete}
                        />
                        ) } 
                        </Col>
                        <Col xs={12} md={4} className="d-flex align-items-center justify-content-center"> 
                          <div >
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
                        <Col className=' text-center' xs={12} >
                        <span className='d-md-none'>{updated_at}</span> 
                        </Col>
                      </Row>            
                    </Col>  
                    <Col xs={12} lg={5} > 
                    <Link to={`/posts/${id}`} >
                    <Row className={`${styles.Content}`}>                   
                      <Col className="px-0 d-flex align-items-center justify-content-left pl-4"  xs={6}>
                      {departments && <span className={`py-3 ${styles.Info} text-center`} style={{ textTransform: 'capitalize'}}  >{number} - {departments} {cat} </span>}   
                      </Col>
                      <Col className="px-0 d-flex align-items-center justify-content-center" xs={6}>
                      {title && <span className="text-center">{title}</span>}
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