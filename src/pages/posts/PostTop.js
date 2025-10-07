/* Component rendered on the PostsPage to display the 
   cover info for each Post
 * When clicked on it opens that Post's PostPage */
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
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { toast } from 'react-toastify';

const PostTop = (props) => {

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
        opened_id,
        archive_id,
        title,
        number,
        departments,
        category,
        updated_at,
        setPosts,
        fetchPosts,
      } = props;

      const currentUser = useCurrentUser()
      const is_owner = currentUser?.username === owner;
      const history = useHistory();

      const handleEdit = () => {
        history.push(`/posts/${id}/edit`);
      };

      const handleDelete = async () => {
        try {
          await axiosRes.delete(`/posts/${id}/`);
          toast.success(`Post Deleted`);
          // history.goBack();
          fetchPosts(); 
        } catch (err) {
          console.log(err);
        }
      };

      const handleOpened = async () => {
        /* Function to create an opened instance
           for the Post */
        try {
          const { data } = await axiosRes.post("/opened/", { post: id });
          setPosts((prevPosts) => ({
            // Update the post in the posts state with the opened_id
            ...prevPosts,
            results: prevPosts.results.map((post) => {
              return post.id === id
                ? { ...post, opened_id: data.id }
                : post;
            }),
          }));
        } catch (err) {
          console.log(err);
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
        <div >
          <Card className={ `py-0 mt-0 mb-0`}>
            <Card.Body className={`py-0 px-0 ${styles.PostTop}`}>
            <Row className={`d-flex align-items-center pt-0 pb-0 my-0`}>
            <Col xs={12} md={3} className="my-0" >
                {/* small */}
                <div className='d-none d-md-block'>
                <Row className={`d-flex align-items-center pt-0 pb-0 my-0`}>
                {/* mine */}
                <Col xs={3} className="pl-3 pr-0" >
                <Link to={`/profiles/${profile_id}`}>
                <Avatar src={profile_image} height={45}/>
                </Link>
                </Col>
                {/* theirs */}
                {/* <Col xs={3} className="pl-3 pr-0">
                    <Link
                      to={`/${localStorage.getItem(
                        "projectSlug"
                      )}/profiles/${profile_id}`}
                    >
                      <Avatar src={profile_image} height={45} />
                    </Link>
                </Col> */}

                <Col xs={9} className="pl-2 pr-0" >
                <div className={`${styles.Content4} pl-2 ml-2`}>
                <p>{name}
                </p>
                <p>
                <span >{position}</span>
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
                  {/* mine */}
                <Col className='d-flex align-items-center pt-2 pb-0' xs={2}>
                <Link to={`/profiles/${profile_id}`}>
                <Avatar src={profile_image} height={45}  />
                </Link>
                </Col>
                {/* theirs */}
                {/* <Col className="d-flex align-items-center pt-2 pb-0" xs={2}>
                    <Link
                      to={`/${localStorage.getItem(
                        "projectSlug"
                      )}/profiles/${profile_id}`}
                    >
                      <Avatar src={profile_image} height={45} />
                    </Link>
                </Col> */}


                <Col xs={8} className="text-center" >
                <p className={`${styles.Italic}`}>{name}
                </p>
                <p className=''>
                {position}
                </p>
                {/* icons mine */}
                <div className='px-0 py-0 mt-2 d-flex align-items-center justify-content-center' >
                {/* star uses archive_id from drf */}
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
                  <span className='ml-3 ml-md-5'> {updated_at}</span>
                </div>
                {/* icons theirs for mobile*/}
                {/* <div className="px-0 py-0 d-flex align-items-center justify-content-center">
                {archive_id ? (
                  <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip>UnStar</Tooltip>}
                  >
                    <span onClick={handleUnStar}>
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
                {Loggedinuserid === owner || is_owner === true ? (
                  <OverlayTrigger
                    placement="top"
                    overlay={
                      <Tooltip>You can't like your own post!</Tooltip>
                    }
                  >
                    <i className={`far fa-heart ${styles.Heart}`} />
                  </OverlayTrigger>
                ) : like_id ? (
                  <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip>Unlike</Tooltip>}
                  >
                    <span onClick={handleUnlike}>
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
                <span className="pt-0">{likes_count}</span>
                {showActionMenu && (
                  <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip>Comments</Tooltip>}
                  >
                    <Link
                      to={`/${localStorage.getItem(
                        "projectSlug"
                      )}/posts/${id}${
                        epi && project && episodeTitle && number
                          ? `?episode=${epi}&project=${project}&episodeTitle=${episodeTitle}&sceneID=${number}`
                          : ""
                      }`}
                    >
                      <i
                        className={`far fa-comments ${styles.Comment}`}
                      />
                    </Link>
                  </OverlayTrigger>
                )}
                {showActionMenu && (
                  <span className="pt-0">{comments_count}</span>
                )}
                <span className="ml-5"> {updated_at}</span>
                </div> */}
                {/* icons theirs for desktop */}
                {/* <div className="px-0 py-0 d-flex align-items-center justify-content-center">
                {archive_id ? (
                  <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip>UnStar</Tooltip>}
                  >
                    <span onClick={handleUnStar}>
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
                {Loggedinuserid === owner || is_owner === true ? (
                  <OverlayTrigger
                    placement="top"
                    overlay={
                      <Tooltip>You can't like your own post!</Tooltip>
                    }
                  >
                    <i className={`far fa-heart ${styles.Heart}`} />
                  </OverlayTrigger>
                ) : like_id ? (
                  <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip>Unlike</Tooltip>}
                  >
                    <span onClick={handleUnlike}>
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
                <span className="pt-0">{likes_count}</span>
                  <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip>Comments</Tooltip>}
                  >
                    <Link
                      to={`/${localStorage.getItem(
                        "projectSlug"
                      )}/posts/${id}${
                        epi && project && episodeTitle && number
                          ? `?episode=${epi}&project=${project}&episodeTitle=${episodeTitle}&sceneID=${number}`
                          : ""
                      }`}
                    >
                      <i
                        className={`far fa-comments ${styles.Comment}`}
                      />
                    </Link>
                  </OverlayTrigger>
                  <span className="pt-0">{comments_count}</span>
                </div> */}


                </Col>
                {/* mine */}
                <Col xs={2} 
                className="d-flex align-items-center" >
                {is_owner && (
                <PostDropdown
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                />
                ) } 
                </Col>
                {/* theirs */}
                {/* <Col xs={2} className="d-flex align-items-center">
                  {showActionMenu && (
                    <PostDropdown
                      handleEdit={handleEdit}
                      handleDelete={handleDelete}
                    />
                  )}
                </Col> */}


                </Row> 
                </div> 
            </Col> 
            {/* Dept and Title small and mobile */}
            <Col xs={12} md={6} className="my-1" >
            {/* mine */}
            <Link to={`/posts/${id}`}>
            {/* theirs */}
            {/* <Link
              to={`/${localStorage.getItem("projectSlug")}/posts/${id}${
                epi && project && episodeTitle && number
                  ? `?episode=${epi}&project=${project}&episodeTitle=${episodeTitle}&sceneID=${number}`
                  : ""
              }`}
            > */}


            {opened_id ? (
              <Row className={`${styles.ContentOpened} py-0 my-0 mr-1 ml-1`}>
              <Col xs={12} 
              className={` text-center`} >
              <Row>
              <Col className='px-0 mx-0' xs={4}>
              {number && <p style={{ fontWeight: '700' }}>Scene {number} </p>}
              </Col>
              {/* theirs */}
              {/* <Col className="px-0 mx-0" xs={4}>
                {episode_number && (
                  <p style={{ fontWeight: "700" }}>
                    Episode {episode_number}{" "}
                  </p>
                )}
              </Col> */}


              <Col className='px-0 mx-0' xs={4}>
                {departments && <p style={{ textTransform: 'capitalize'}}>
                  {departments}</p>}
              </Col>
              <Col className='px-0 mx-0' xs={4}>
                {category && <p style={{ textTransform: 'capitalize'}}>
                      {category} </p>}  
              </Col>
              </Row>
              <Row>
              <Col xs={12} className={`text-center px-0 mx-0 ${styles.Content4}`} >
              {title ? (
                <span className={`text-center px-0 mx-0 ${styles.ContentTitleOpened}`}
                 style={{ fontStyle: 'italic' }}> {title}</span>
              ) : (
                <span className={`text-center px-0 mx-0 ${styles.ContentTitleOpened}`}
                 style={{ fontStyle: 'italic' }}>Post</span>
              )}
              </Col>
              </Row>
              </Col>
              </Row>
            ) : (
              <Row onClick={handleOpened}
                 className={`${styles.ContentUnOpen} py-0 my-0 mr-1 ml-1`}>
                <Col xs={12} 
                className={` text-center`} >
                <Row>
                <Col className='px-0 mx-0' xs={4}>
                {number && <p style={{ fontWeight: '700' }}>Scene {number} </p>}
                </Col>
                {/* theirs */}
                {/* <Col className="px-0 mx-0" xs={4}>
                  {episode_number && (
                    <p style={{ fontWeight: "700" }}>
                      Episode {episode_number}{" "}
                    </p>
                  )}
                </Col> */}


                <Col className='px-0 mx-0' xs={4}>
                  {departments && <p style={{ textTransform: 'capitalize'}}>
                    {departments}</p>}
                </Col>
                <Col className='px-0 mx-0' xs={4}>
                  {category && <p style={{ textTransform: 'capitalize'}}>
                        {category} </p>}  
                </Col>
                </Row>
                <Row>
                <Col xs={12} className={`text-center px-0 mx-0 ${styles.Content4}`} >
                {title ? (
                title && <span className={`text-center px-0 mx-0 ${styles.ContentTitleUnOpen}`}
                 style={{ fontStyle: 'italic' }}> {title}</span>
                ) : (
                <span className={`text-center px-0 mx-0 ${styles.ContentTitleUnOpen}`}
                 style={{ fontStyle: 'italic' }}>Post</span>
                )}
                </Col>
                </Row>
                </Col>
                </Row>
            )}
            </Link>
            </Col>
            {/* edit and date small */}
            <Col xs={12} md={3} className="my-0 " >
            <div className='d-none d-md-block'>
            <Row >
            <Col className="pl-0 pr-0" sm={9} >
            <p className={ `text-center  ${styles.Date}`}>{updated_at}
            </p>
            {/* icons mine */}
            <div className='px-0 py-0 d-flex align-items-center justify-content-center' >
                {/* star uses archive_id from drf */}
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
            {/* icons theirs */}
            {/* <div className="px-0 py-0 d-flex align-items-center justify-content-center">
            {archive_id ? (
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>UnStar</Tooltip>}
              >
                <span onClick={handleUnStar}>
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
            {Loggedinuserid === owner || is_owner === true ? (
              <OverlayTrigger
                placement="top"
                overlay={
                  <Tooltip>You can't like your own post!</Tooltip>
                }
              >
                <i className={`far fa-heart ${styles.Heart}`} />
              </OverlayTrigger>
            ) : like_id ? (
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>Unlike</Tooltip>}
              >
                <span onClick={handleUnlike}>
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
            <span className="pt-0">{likes_count}</span>
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>Comments</Tooltip>}
              >
                <Link
                  to={`/${localStorage.getItem(
                    "projectSlug"
                  )}/posts/${id}${
                    epi && project && episodeTitle && number
                      ? `?episode=${epi}&project=${project}&episodeTitle=${episodeTitle}&sceneID=${number}`
                      : ""
                  }`}
                >
                  <i
                    className={`far fa-comments ${styles.Comment}`}
                  />
                </Link>
              </OverlayTrigger>
              <span className="pt-0">{comments_count}</span>
            </div> */}


            </Col>
            {/* mine */}
            <Col sm={3}
            className="d-flex align-items-center px-0 float-right" >
            {is_owner && (
            <PostDropdown
                handleEdit={handleEdit}
                handleDelete={handleDelete}
            />
            ) } 
            </Col>
            {/* theirs */}
            {/* <Col sm={3} className="d-flex align-items-center px-0 float-right">
              {showActionMenu && (
                <PostDropdown
                  handleEdit={handleEdit}
                  handleDelete={handleDelete}
                />
              )}
            </Col> */}


            </Row>   
            </div>     
            </Col>
            </Row>
            </Card.Body>
          </Card> 
        </div>
    )
}

export default PostTop