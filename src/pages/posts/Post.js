/* Component in PostPage to display the Post data */
import React from 'react';
import Card from "react-bootstrap/Card";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import appStyles from "../../App.module.css";
import Image from 'react-bootstrap/Image';
import styles from "../../styles/Post.module.css";
import Button from "react-bootstrap/Button"
import btnStyles from "../../styles/Button.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Link, useHistory } from 'react-router-dom';
import Avatar from "../../components/Avatar";
import { axiosRes } from '../../api/axiosDefaults';
import { PostDropdown } from '../../components/PostDropdown';
import { useSetCategoryContext, useSetDeptContext, useSetNumberContext, useSetSceneContext } from '../../contexts/DeptCategoryContext';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useSetImageContext } from '../../contexts/ImageContext';

const Post = (props) => {
  const setImage = useSetImageContext();
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

      const handleClickFull1 = () => {
        setImage(image1); 
        history.push(`/fullshot`);  
      };

      const handleClickFull2 = () => {
        setImage(image2); 
        history.push(`/fullshot`);  
      };

      const handleClickFull3 = () => {
        setImage(image3); 
        history.push(`/fullshot`);  
      };

      const handleClickFull4 = () => {
        setImage(image4); 
        history.push(`/fullshot`);  
      };

      const handleClickFull5 = () => {
        setImage(image5); 
        history.push(`/fullshot`);  
      };

      const handleGoToScene = () => {
        /* Function to go to the post's Scene page 
           and it's Department Category
        *  Sets the Contexts SceneId, Number, Category 
           ans Dept to be read in App.js*/
        setSceneId(scene);
        setNumber(number);
        setDept(departments);
        setCategory(category);
        history.push(`/dept/category`);
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

      const handleStar = async () => {
        /* Function to Star a Post 
         * Creates an archives instance for the Post as the 
           Archives App in Shot Caller DRF is used for the Star feature */
        try {
          const { data } = await axiosRes.post("/archives/", { post: id });
          setPosts((prevPosts) => ({
            // Update the post in the posts state with the archives_id
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

      const handleUnStar = async () => {
        /* Function to unStar a Post 
         * Deletes an archives instance for the Post as the 
           Archives App in Shot Caller DRF is used for the Star feature */
        try {
          await axiosRes.delete(`/archives/${archive_id}/`);
          setPosts((prevPosts) => ({
            // Delete the archives_id for the post in the posts state
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
        /* Function to create a likes instance for a Post */
        try {
          const { data } = await axiosRes.post("/likes/", { post: id });
          setPosts((prevPosts) => ({
            // Update the post in the posts state with the likes_id
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
        /* Function to delete a likes instance for a Post */
        try {
          await axiosRes.delete(`/likes/${like_id}/`);
          setPosts((prevPosts) => ({
            // Delete the likes_id for the post in the posts state
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
        <div className='px-3'>
          <Button
            className={`${btnStyles.Button} ${btnStyles.Blue} ml-1 mb-2`}
            onClick={() => history.goBack()}
          >
            Back
          </Button>
          <Card className={ `py-0 mt-1 mb-0`}>
            <Card.Body className={`py-0 px-0 ${styles.PostTop}`}>
            <Row className={`d-flex align-items-center pt-0 pb-0 my-0 `}>
            <Col xs={12} md={3} className="my-0" >
                {/* small */}
                <div className='d-none d-md-block'>
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
                <div className='d-md-none'>
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
                      overlay={<Tooltip>UnStar</Tooltip>}
                      >
                      <span onClick={handleUnStar} >
                      <i className={`fas fa-star ${styles.Star}`} />
                      </span>
                      </OverlayTrigger>
                  ) : currentUser ? (
                    <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip>Star</Tooltip>}
                    >
                      <span onClick={handleStar}>
                      <i className={`far fa-star ${styles.Star}`} />
                      </span>
                      </OverlayTrigger>
                  ) : (
                      <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip>Log in please</Tooltip>}
                      >
                      <i className={`far fa-star ${styles.Star}`} />
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
            <Col xs={12} md={6} className={`${styles.ContentOpened} mb-2 mb-md-1 mt-1`} >
            <OverlayTrigger
               className="px-0 mx-0"
                      placement="top"
                      overlay={<Tooltip>Go to Scene</Tooltip>}>
            <div className={`${styles.GoToScene}`} onClick={() => handleGoToScene() }>
            <Row className={` py-md-2 my-0 px-3 d-flex align-items-center text-center`}>
            <Col xs={12} 
              className={` text-center`} >
              <Row>
                <Col className='px-0 mx-0 pt-1' xs={4}>
                {number && <p style={{ fontWeight: '700' }}>Scene {number} </p>}
                </Col>
                <Col className='px-0 mx-0 pt-1' xs={4}>
                  {departments && <p style={{ textTransform: 'capitalize'}}>
                    {departments}</p>}
                </Col>
                <Col className='px-0 mx-0 pt-1' xs={3}>
                  {category && <p style={{ textTransform: 'capitalize'}}>
                        {category} </p>}  
                </Col>
                <Col xs={1} className='px-0' >
                      <i className="navicon fas fa-play"></i>
                      {/* </OverlayTrigger> */}
                </Col>
              </Row>
              </Col>
            </Row>
            </div>
            </OverlayTrigger>
            </Col>
            {/* edit and date icons small */}
            <Col xs={12} md={3} className="my-0 " >
            <div className='d-none d-md-block'>
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
                      overlay={<Tooltip>UnStar</Tooltip>}
                      >
                      <span onClick={handleUnStar} >
                      <i className={`fas fa-star ${styles.Star}`} />
                      </span>
                      </OverlayTrigger>
                  ) : currentUser ? (
                    <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip>Star</Tooltip>}
                    >
                      <span onClick={handleStar}>
                      <i className={`far fa-star ${styles.Star}`} />
                      </span>
                      </OverlayTrigger>
                  ) : (
                      <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip>Log in please</Tooltip>}
                      >
                      <i className={`far fa-star ${styles.Star}`} />
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
              {/* title */}
              <Card.Body className='pt-2 px-md-5'>
                  {title && <h5 style={{ fontStyle: 'italic' }}
                  className="text-center">{title}</h5>}
                  <hr className={`mt-2 mb-0`} />
                  {content && <Card.Text>{content}</Card.Text>}
              </Card.Body>
              <hr />
              {image1 || image2 || image3 || image4 || image5 ? (
              <h5 className={`text-center py-0 mx-5 my-3 ${styles.SubTitle }`}
              >IMAGES</h5>
              ) : ("") }
              <Row className='mb-2 px-0'>
                  {/* image 1/2 */}
                  <Col xs={12} md={6}  >
                  {image1 && <>
                  <Card className='mx-0 mx-md-5' >
                  <Card.Body className={`text-center px-md-5 `}  >
                    <p className={`${styles.BoldTitle} mb-md-3`}>
                        IMAGE 1</p>
                    <div className='px-0 mb-0'>
                        <Image className={styles.ImagesIndex} 
                        src={image1} alt="image" onClick={() => handleClickFull1() } />
                        {/* <iframe title="Image1" src={image1}
                          className={appStyles.iframeIm} alt="Image"  /> */}
                          <p className={`text-center mb-0 pb-0 float-right ${styles.FullsizeText }`}
                        onClick={() => handleClickFull1() }>FULLSIZE</p> 
                    </div>
                  </Card.Body>
                  </Card>
                  </>}
                  </Col>  
                  <Col xs={12} md={6}>
                  {image2 && <>
                  <Card className='mx-0 mx-md-5' >
                  <Card.Body className={`text-center px-md-5 `}  >
                    <p className={`${styles.BoldTitle} mb-md-3`}>
                        IMAGE 2</p>
                    <div className='px-0 mb-0'>
                        <Image className={styles.ImagesIndex} 
                        src={image2} alt="image" onClick={() => handleClickFull2() } />
                        {/* <iframe title="Image2" src={image2}
                          className={appStyles.iframeIm} alt="Image"  /> */}
                          <p className={`text-center mb-0 pb-0 float-right ${styles.FullsizeText }`}
                        onClick={() => handleClickFull2() }>FULLSIZE</p> 
                    </div>
                </Card.Body>
                  </Card>
                  </>}
                  </Col>
              </Row >
              {/* break */}
              {image3 ? (
              <Row>
              <Col xs={12}>
              <hr className={`mt-0 mb-5 d-none d-md-block`}/>
              </Col>
              </Row>
              ) : ("") }
              {/* image 3/4 */}
              <Row className='mb-2 px-5'>
                  <Col xs={12} md={6}  >
                  {image3 && <> 
                  <Card className='mx-0 mx-md-5' >
                  <Card.Body className={`text-center px-md-5 `}  >
                    <p className={`${styles.BoldTitle} mb-md-3`}>
                        IMAGE 3</p>
                    <div className='px-0 mb-0'>
                        <Image className={styles.ImagesIndex} 
                        src={image3} alt="image3" onClick={() => handleClickFull3() } />
                        {/* <iframe title="Image3" src={image3}
                          className={appStyles.iframeIm} alt="Image"  /> */}
                          <p className={`text-center mb-0 pb-0 float-right ${styles.FullsizeText }`}
                        onClick={() => handleClickFull3() }>FULLSIZE</p> 
                    </div>
                  </Card.Body>
                  </Card>
                  </>}
                  </Col>  
                  <Col xs={12} md={6}>
                  {image4 && <>
                  <Card className='mx-0 mx-md-5' >
                  <Card.Body className={`text-center px-md-5 `}  >
                    <p className={`${styles.BoldTitle} mb-md-3`}>
                        IMAGE 4</p>
                    <div className='px-0 mb-0'>
                        <Image className={styles.ImagesIndex} 
                        src={image4} alt="image4" onClick={() => handleClickFull4() } />
                        {/* <iframe title="Image4" src={image4}
                          className={appStyles.iframeIm} alt="Image"  /> */}
                          <p className={`text-center mb-0 pb-0 float-right ${styles.FullsizeText }`}
                        onClick={() => handleClickFull4() }>FULLSIZE</p> 
                    </div>
                  </Card.Body>
                  </Card>
                  </>}
                  </Col>
              </Row >
              {/* break */}
              {image5 ? (
              <Row>
              <Col xs={12}>
              <hr className={`mt-0 mb-5 d-none d-md-block`}/>
              </Col>
              </Row>
              ) : ("") }
              {/* image 5 */}
              <Row>
                  <Col className='d-none d-md-block' md={3} ></Col>
                  <Col xs={12} md={6}>
                  {image5 && <> 
                  <Card className='mx-0 mx-md-5' >
                  <Card.Body className={`text-center px-md-5 `}  >
                    <p className={`${styles.BoldTitle} mb-md-3`}>
                        IMAGE 5</p>
                    <div className='px-0 mb-0'>
                        <Image className={styles.ImagesIndex} 
                        src={image5} alt="image5" onClick={() => handleClickFull5() } />
                        {/* <iframe title="Image5" src={image5}
                          className={appStyles.iframeIm} alt="Image"  /> */}
                          <p className={`text-center mb-0 pb-0 float-right ${styles.FullsizeText }`}
                        onClick={() => handleClickFull5() }>FULLSIZE</p> 
                    </div>
                  </Card.Body>
                  </Card>
                  </>}
                  </Col>  
              </Row>
            </Card>
          </div>
    )
}

export default Post