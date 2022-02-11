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
import { useSetCategoryContext, useSetDeptContext, useSetSceneContext } from '../../contexts/DeptCategoryContext';
import { useRedirect } from '../../hooks/Redirect';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Post = (props) => {
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
        content,
        scene,
        number,
        departments,
        category,
        image1,
        image2,
        image3,
        image4,
        image5,
        updated_at,
        setPosts,
      } = props;

      const currentUser = useCurrentUser()
      const is_owner = currentUser?.username === owner;
      const history = useHistory();
      const setSceneId = useSetSceneContext();
      const setDept = useSetDeptContext();
      const setCategory = useSetCategoryContext();

      const handleGoToScene = () => {
        setSceneId(scene);
        setDept(departments);
        setCategory(category);
        history.push(`/dept/category`);
        console.log('clicked');
      };

      const handleEdit = () => {
        history.push(`/posts/${id}/edit`);
      };
    
      const handleDelete = async () => {
        try {
          await axiosRes.delete(`/posts/${id}/`);
          history.goBack();
        } catch (err) {
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
        }
      };


    return (
        <div>
            <Card  >
                {/* new */}
              <Card.Body className={`${styles.PostTop2} py-2`} >
                <Row className="d-flex align-items-center">
                    <Col xs={12} lg={8} >
                      <Row>
                        <Col className="d-flex align-items-center justify-content-center" xs={12} md={8}>
                        <Link to={`/profiles/${profile_id}`}>
                        <Avatar src={profile_image} height={45}  />
                        </Link>
                        <span style={{ fontWeight: '700', textTransform: 'capitalize'}} className='ml-1 ml-md-3'>{name}</span>
                        <span className='ml-1 ml-md-3 d-none d-md-block'>{updated_at}</span>
                        {is_owner && (
                        <PostDropdown
                            handleEdit={handleEdit}
                            handleDelete={handleDelete}
                        />
                        ) } 
                        </Col>
                        <Col className="d-flex align-items-center justify-content-center" xs={12} md={4}>
                        <div className={` ${styles.PostBar}`} >
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
                      <Col xs={12} lg={4} className="d-flex align-items-center justify-content-center" >
                        <div className={`${styles.GoToScene} `} onClick={() => handleGoToScene() }>
                      {departments && <span  >Scene {number} - <span style={{ textTransform: 'capitalize'}}>{departments }</span> <span style={{ textTransform: 'capitalize'}}>{category }</span> </span>} 
                      </div>  
                      </Col>
                      <Col className='text-center' xs={12}>
                      <span className='d-md-none'>{updated_at}</span> 
                      </Col>
                      {/* <Col className="d-flex align-items-center justify-content-center" md={4}>
                      <Button className="py-0" onClick={() => handleGoToScene() }>Go to Scene</Button>
                      </Col> */}
                  </Row>
                </Card.Body>
                {/* end new */}
                <Card.Body  >
                    {title && <h4 className="text-center">{title}</h4>}
                    <hr />
                    {content && <Card.Text>{content}</Card.Text>}
                </Card.Body>
                <hr />
                <Row className='mb-2'>
                  {/* image 1/2 */}
                  <Col xs={12} md={6}  >
                      {image1 && <> 
                          <Card.Img src={image1} alt="image1" className="px-3" />
                          </>
                          }
                  </Col>  
                  <Col xs={12} md={6}>
                  {image2 && <> 
                          <Card.Img src={image2} alt="image2" />
                          </>
                          }
                  </Col>
              </Row >
              {/* image 3/4 */}
              <Row className='mb-2'>
                  <Col xs={12} md={6}>
                      {image3 && <> 
                          <Card.Img src={image3} alt="image3" />
                          </>
                          }
                  </Col>  
                  <Col xs={12} md={6}>
                  {image4 && <> 
                          <Card.Img src={image4} alt="image4" />
                          </>
                          }
                  </Col>
              </Row>
              {/* image 5 */}
              <Row>
                  <Col className='d-none d-md-block' md={3} ></Col>
                  <Col xs={12} md={6}>
                      {image5 && <> 
                          <Card.Img src={image5} alt="image5" />
                          </>
                          }
                  </Col>  
              </Row>
            </Card>
        </div>
    )
}

export default Post