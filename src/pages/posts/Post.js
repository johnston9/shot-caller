import React from 'react';
import Card from "react-bootstrap/Card";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

import styles from "../../styles/Post.module.css";
import Button from "react-bootstrap/Button"
import btnStyles from "../../styles/Button.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Link, useHistory } from 'react-router-dom';
import Avatar from "../../components/Avatar";
import { axiosRes } from '../../api/axiosDefaults';
import { PostDropdown } from '../../components/PostDropdown';
import { useSetCategoryContext, useSetDeptContext, useSetNumberContext, useSetSceneContext } from '../../contexts/DeptCategoryContext';
import { useRedirect } from '../../hooks/Redirect';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Post = (props) => {
  useRedirect("loggedOut")
    const {
        id,
        owner,
        name,
        position,
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

      const currentUser = useCurrentUser();
      const is_owner = currentUser?.username === owner;
      const history = useHistory();
      const setSceneId = useSetSceneContext();
      const setDept = useSetDeptContext();
      const setCategory = useSetCategoryContext();
      const setNumber = useSetNumberContext();

      const handleGoToScene = () => {
        setSceneId(scene);
        setNumber(number);
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
        <div className='px-3'>
          <Button
            className={`${btnStyles.Button} ${btnStyles.Blue} ml-1 mb-2`}
            onClick={() => history.goBack()}
          >
            Back
          </Button>
          <Card className={ `py-0 mt-1 mb-0`}>
          {archive_id ? (
            <Card.Body className={`py-0 px-0 ${styles.PostTopA}`}>
            <Row className={`d-flex align-items-center pt-0 pb-0 my-0`}>
            <Col xs={12} sm={3} className="my-0" >
                {/* small */}
                <div className='d-none d-sm-block'>
                <Row >
                <Col xs={3} className="pl-3 pr-0" >
                <Link to={`/profiles/${profile_id}`}>
                <Avatar src={profile_image} height={45}/>
                </Link>
                </Col>
                <Col xs={9} className="pl-2 pr-0" >
                <div className={`${styles.Content4} pl-2 ml-2`}>
                <p>
                <span className=''>{name} </span>
                </p>
                <p>
                <span className='ml-0 '>{position}</span>
                </p>
                </div>
                <div>
                </div>
                </Col>
                </Row>   
                </div>     
                {/* mobile */}
                <div className='d-sm-none'>
                <Row className='pb-0 mb-0'>
                <Col className='d-flex align-items-center pt-2 pb-0' xs={2}>
                <Link to={`/profiles/${profile_id}`}>
                <Avatar src={profile_image} height={45}  />
                </Link>
                </Col>
                <Col xs={8} className="text-center" >
                <p>
                <span className=''>{name}</span>
                </p>
                <p className=''>
                {position}
                </p>
                </Col>
                <Col xs={2} 
                className="d-flex align-items-center" >
                {is_owner && (
                <PostDropdown
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                />
                ) } 
                </Col>
                </Row> 
                <Row>
                <Col xs={12}>
                {/* icons */}
                <div className='px-0 py-0 d-flex align-items-center justify-content-center' >
                {archive_id ? (
                      <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip>Unarchive</Tooltip>}
                      >
                      <span onClick={handleUnarchive} >
                      <i className={`fas fa-folder ${styles.Archive}`} />
                      </span>
                      </OverlayTrigger>
                  ) : currentUser ? (
                    <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip>Archive</Tooltip>}
                    >
                      <span onClick={handleArchive}>
                      <i className={`far fa-folder-open ${styles.Archive}`} />
                      </span>
                      </OverlayTrigger>
                  ) : (
                      <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip>Log in please</Tooltip>}
                      >
                      <i className={`far fa-folder-open ${styles.Archive}`} />
                      </OverlayTrigger>
                  )}
                  {is_owner ? (
                      <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip>You can't like your own post!</Tooltip>}
                      >
                      <i className={`far fa-heart ${styles.Heart}`} />
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
                      <i className={`far fa-heart ${styles.Heart}`} />
                      </span>
                      </OverlayTrigger>
                  ) : (
                      <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip>Log in please</Tooltip>}
                      >
                      <i className={`far fa-heart ${styles.Heart}`} />
                      </OverlayTrigger>
                  )}
                  <span className='pt-0'>{likes_count}</span>
                  <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip>Comments</Tooltip>}
                      >
                  <Link to={`/posts/${id}`}>
                  <i className={`far fa-comments ${styles.Comment}`} />
                  </Link>
                  </OverlayTrigger>
                  <span className='pt-0'>{comments_count}</span>
                  <span className='ml-5'> {updated_at}</span>
                </div>
                </Col>
                </Row>  
                </div> 
            </Col> 
            <Col xs={12} sm={6} className="my-1" >
            <div onClick={() => handleGoToScene() }>
            <Row className={`${styles.Content3} py-2 my-0 mr-1 ml-1`}>
                <Col xs={12} 
                className={` text-center`} >
                <Row>
                <Col className='px-0 mx-0' xs={4}>
                {number && <p style={{ fontWeight: '700' }}>Scene {number} </p>}
                </Col>
                <Col className='px-0 mx-0' xs={4}>
                  {departments && <p style={{ textTransform: 'capitalize'}}>
                    {departments}</p>}
                </Col>
                <Col className='px-0 mx-0' xs={4}>
                  {category && <p style={{ textTransform: 'capitalize'}}>
                        {category} </p>}  
                </Col>
                </Row>
                </Col>
            </Row>
            </div>
            </Col>
            {/* edit and date icons small */}
            <Col xs={12} sm={3} className="my-0 " >
            <div className='d-none d-sm-block'>
            <Row >
            <Col sm={3}
            className="d-flex align-items-center px-0 float-right" >
            {is_owner && (
            <PostDropdown
                handleEdit={handleEdit}
                handleDelete={handleDelete}
            />
            ) } 
            </Col>
            <Col className="pl-0 pr-0" sm={9} >
            <p className={ `text-center  ${styles.Date}`}>{updated_at}
            </p>
            {/* icons */}
            <div className='px-0 py-0 d-flex align-items-center justify-content-center' >
                {archive_id ? (
                      <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip>Unarchive</Tooltip>}
                      >
                      <span onClick={handleUnarchive} >
                      <i className={`fas fa-folder ${styles.Archive}`} />
                      </span>
                      </OverlayTrigger>
                  ) : currentUser ? (
                    <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip>Archive</Tooltip>}
                    >
                      <span onClick={handleArchive}>
                      <i className={`far fa-folder-open ${styles.Archive}`} />
                      </span>
                      </OverlayTrigger>
                  ) : (
                      <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip>Log in please</Tooltip>}
                      >
                      <i className={`far fa-folder-open ${styles.Archive}`} />
                      </OverlayTrigger>
                  )}
                  {is_owner ? (
                      <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip>You can't like your own post!</Tooltip>}
                      >
                      <i className={`far fa-heart ${styles.Heart}`} />
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
                      <i className={`far fa-heart ${styles.Heart}`} />
                      </span>
                      </OverlayTrigger>
                  ) : (
                      <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip>Log in please</Tooltip>}
                      >
                      <i className={`far fa-heart ${styles.Heart}`} />
                      </OverlayTrigger>
                  )}
                  <span className='pt-0'>{likes_count}</span>
                  <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip>Comments</Tooltip>}
                      >
                  <Link to={`/posts/${id}`}>
                  <i className={`far fa-comments ${styles.Comment}`} />
                  </Link>
                  </OverlayTrigger>
                  <span className='pt-0'>{comments_count}</span>
                </div>
            </Col>
            </Row>   
            </div>     
            </Col>
            </Row>
            </Card.Body>
          ) : (
            <Card.Body className={`py-0 px-0 ${styles.PostTop}`}>
            <Row className={`d-flex align-items-center pt-0 pb-0 my-0`}>
            <Col xs={12} sm={3} className="my-0" >
                {/* small */}
                <div className='d-none d-sm-block'>
                <Row >
                <Col xs={3} className="pl-3 pr-0" >
                <Link to={`/profiles/${profile_id}`}>
                <Avatar src={profile_image} height={45}/>
                </Link>
                </Col>
                <Col xs={9} className="pl-2 pr-0" >
                <div className={`${styles.Content4} pl-2 ml-2`}>
                <p>
                <span className=''>{name} </span>
                </p>
                <p>
                <span className='ml-0 '>{position}</span>
                </p>
                </div>
                <div>
                </div>
                </Col>
                </Row>   
                </div>     
                {/* mobile */}
                <div className='d-sm-none'>
                <Row className='pb-0 mb-0'>
                <Col className='d-flex align-items-center pt-2 pb-0' xs={2}>
                <Link to={`/profiles/${profile_id}`}>
                <Avatar src={profile_image} height={45}  />
                </Link>
                </Col>
                <Col xs={8} className="text-center" >
                <p>
                <span className=''>{name}</span>
                </p>
                <p className=''>
                {position}
                </p>
                </Col>
                <Col xs={2} 
                className="d-flex align-items-center" >
                {is_owner && (
                <PostDropdown
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                />
                ) } 
                </Col>
                </Row> 
                <Row>
                <Col xs={12}>
                {/* icons */}
                <div className='px-0 py-0 d-flex align-items-center justify-content-center' >
                {archive_id ? (
                      <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip>Unarchive</Tooltip>}
                      >
                      <span onClick={handleUnarchive} >
                      <i className={`fas fa-folder ${styles.Archive}`} />
                      </span>
                      </OverlayTrigger>
                  ) : currentUser ? (
                    <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip>Archive</Tooltip>}
                    >
                      <span onClick={handleArchive}>
                      <i className={`far fa-folder-open ${styles.Archive}`} />
                      </span>
                      </OverlayTrigger>
                  ) : (
                      <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip>Log in please</Tooltip>}
                      >
                      <i className={`far fa-folder-open ${styles.Archive}`} />
                      </OverlayTrigger>
                  )}
                  {is_owner ? (
                      <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip>You can't like your own post!</Tooltip>}
                      >
                      <i className={`far fa-heart ${styles.Heart}`} />
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
                      <i className={`far fa-heart ${styles.Heart}`} />
                      </span>
                      </OverlayTrigger>
                  ) : (
                      <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip>Log in please</Tooltip>}
                      >
                      <i className={`far fa-heart ${styles.Heart}`} />
                      </OverlayTrigger>
                  )}
                  <span className='pt-0'>{likes_count}</span>
                  <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip>Comments</Tooltip>}
                      >
                  <Link to={`/posts/${id}`}>
                  <i className={`far fa-comments ${styles.Comment}`} />
                  </Link>
                  </OverlayTrigger>
                  <span className='pt-0'>{comments_count}</span>
                  <span className='ml-5'> {updated_at}</span>
                </div>
                </Col>
                </Row>  
                </div> 
            </Col> 
            <Col xs={12} sm={6} className="my-1" >
            <div className={`${styles.GoToScene} `} onClick={() => handleGoToScene() }>
            <Row className={`${styles.Content3} py-2 my-0 mr-1 ml-1`}>
                <Col xs={12} 
                className={` text-center`} >
                <Row>
                <Col className='px-0 mx-0' xs={4}>
                {number && <p style={{ fontWeight: '700' }}>Scene {number} </p>}
                </Col>
                <Col className='px-0 mx-0' xs={4}>
                  {departments && <p style={{ textTransform: 'capitalize'}}>
                    {departments}</p>}
                </Col>
                <Col className='px-0 mx-0' xs={4}>
                  {category && <p style={{ textTransform: 'capitalize'}}>
                        {category} </p>}  
                </Col>
                </Row>
                </Col>
            </Row>
            </div>
            </Col>
            {/* edit and date icons small */}
            <Col xs={12} sm={3} className="my-0 " >
            <div className='d-none d-sm-block'>
            <Row >
            <Col sm={3}
            className="d-flex align-items-center px-0 float-right" >
            {is_owner && (
            <PostDropdown
                handleEdit={handleEdit}
                handleDelete={handleDelete}
            />
            ) } 
            </Col>
            <Col className="pl-0 pr-0" sm={9} >
            <p className={ `text-center  ${styles.Date}`}>{updated_at}
            </p>
            {/* icons */}
            <div className='px-0 py-0 d-flex align-items-center justify-content-center' >
                {archive_id ? (
                      <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip>Unarchive</Tooltip>}
                      >
                      <span onClick={handleUnarchive} >
                      <i className={`fas fa-folder ${styles.Archive}`} />
                      </span>
                      </OverlayTrigger>
                  ) : currentUser ? (
                    <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip>Archive</Tooltip>}
                    >
                      <span onClick={handleArchive}>
                      <i className={`far fa-folder-open ${styles.Archive}`} />
                      </span>
                      </OverlayTrigger>
                  ) : (
                      <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip>Log in please</Tooltip>}
                      >
                      <i className={`far fa-folder-open ${styles.Archive}`} />
                      </OverlayTrigger>
                  )}
                  {is_owner ? (
                      <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip>You can't like your own post!</Tooltip>}
                      >
                      <i className={`far fa-heart ${styles.Heart}`} />
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
                      <i className={`far fa-heart ${styles.Heart}`} />
                      </span>
                      </OverlayTrigger>
                  ) : (
                      <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip>Log in please</Tooltip>}
                      >
                      <i className={`far fa-heart ${styles.Heart}`} />
                      </OverlayTrigger>
                  )}
                  <span className='pt-0'>{likes_count}</span>
                  <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip>Comments</Tooltip>}
                      >
                  <Link to={`/posts/${id}`}>
                  <i className={`far fa-comments ${styles.Comment}`} />
                  </Link>
                  </OverlayTrigger>
                  <span className='pt-0'>{comments_count}</span>
                </div>
            </Col>
            </Row>   
            </div>     
            </Col>
            </Row>
            </Card.Body>
          )}
              {/* title */}
              <Card.Body className='py-1 px-5 text-center'  >
                  {title && <h4 style={{ fontStyle: 'italic' }}
                  className="mb-0 pb-0">{title}</h4>}
                  <hr />
                  {content && <Card.Text>{content}</Card.Text>}
              </Card.Body>
              <hr />
              <Row className='mb-2 px-5'>
                  {/* image 1/2 */}
                  <Col xs={12} md={6}  >
                      {image1 && <> 
                        <div className='px-2 px-md-4 mb-3'>
                          <Card.Img src={image1} alt="image1" className={styles.Images} />
                        </div>
                          </>
                          }
                  </Col>  
                  <Col xs={12} md={6}>
                  {image2 && <> 
                    <div className='px-2 px-md-4 mb-3'>
                          <Card.Img src={image2} alt="image2" className={styles.Images} />
                        </div>
                          </>
                          }
                  </Col>
              </Row >
              {/* image 3/4 */}
              <Row className='mb-2 px-5'>
                  <Col xs={12} md={6}  >
                      {image3 && <> 
                        <div className='px-2 px-md-4 mb-3'>
                          <Card.Img src={image3} alt="image3" className={styles.Images} />
                        </div>
                          </>
                          }
                  </Col>  
                  <Col xs={12} md={6}>
                  {image4 && <> 
                    <div className='px-2 px-md-4 mb-3'>
                          <Card.Img src={image4} alt="image4" className={styles.Images} />
                        </div>
                          </>
                          }
                  </Col>
              </Row >
              {/* image 5 */}
              <Row>
                  <Col className='d-none d-md-block' md={3} ></Col>
                  <Col xs={12} md={6}>
                  {image5 && <> 
                    <div className='px-2 px-md-4 mb-3'>
                          <Card.Img src={image5} alt="image5" className={styles.Images} />
                        </div>
                          </>
                          }
                  </Col>  
              </Row>
            </Card>
        </div>
    )
}

export default Post