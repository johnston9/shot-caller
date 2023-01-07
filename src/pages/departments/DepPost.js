import React from 'react';
import Card from "react-bootstrap/Card";

import styles from "../../styles/Post.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Link, useHistory } from 'react-router-dom';
import Avatar from "../../components/Avatar";
import { axiosRes } from '../../api/axiosDefaults';
import { PostDropdown } from '../../components/PostDropdown';
import { useRedirect } from '../../hooks/Redirect';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const DeptPost = (props) => {
  useRedirect("loggedOut")
    const {
        id,
        owner,
        name,
        profile_id,
        profile_image,
        departments,
        position,
        title,
        content,
        image1,
        image2,
        image3,
        image4,
        image5,
        updated_at,
      } = props;

      const currentUser = useCurrentUser()
      const is_owner = currentUser?.username === owner;
      const history = useHistory();

      const handleEdit = () => {
        history.push(`/department/posts/${id}/edit`);
      };
    
      const handleDelete = async () => {
        try {
          await axiosRes.delete(`/department/posts/${id}/`);
          history.goBack();
        } catch (err) {
        }
      };

    return (
        <div>
            <Card className='px-3'>
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
                <div className={`${styles.Content4} pl-2 ml-3`}>
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
                <Col className='text-center' xs={12}>
                <p> {updated_at}</p>
                {/* icons */}
                {/* <div className='px-0 py-0 d-flex align-items-center justify-content-center' >
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
                </div> */}
                </Col>
                </Row>  
                </div> 
          </Col>    
          <Col xs={12} sm={6} className="my-1" >
            <Row className={`${styles.Content3} pt-1 my-0 mr-1 ml-1`}>
                <Col xs={12} 
                className={` text-center`} >
                <Row>
                <Col className='px-0 mx-0 py-2' xs={12}>
                  {departments && <p style={{ textTransform: 'capitalize'}}>
                    {departments}</p>}
                </Col>
                </Row>
                </Col>
            </Row>
          </Col> 
          {/* edit and date small */}
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
            {/* <div className='px-0 py-0 d-flex align-items-center justify-content-center' >
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
            </div> */}
            </Col>
            </Row>   
            </div>     
            </Col>                
          {/* <Col xs={12} lg={6} > 
          <Link to={`/department/posts/${id}`}>
            <Row className={`${styles.Content} mx-0`}>                   
            <Col className={`${styles.Content1} px-0 d-flex align-items-center justify-content-center`}  xs={4}>
            {departments && <span className={`py-2 text-center`} style={{ textTransform: 'capitalize'}}  >{departments} </span>}  
            </Col>
            <Col className={`${styles.Content2} px-0 d-flex align-items-center justify-content-center`} 
              style={{ fontStyle: 'italic' }} xs={8} >
            {title && <span className="d-md-none text-center">{tit}</span>}
            {title && <span className="d-none d-md-block text-center">{tit2}</span>}
            </Col>
          </Row>
          </Link>
          </Col>  */}
          </Row>
          </Card.Body>
                <hr />
                <Card.Body className="pt-1" >
                    {title && <Card.Title style={{ fontStyle: 'italic' }}
                     className="text-center">{title}</Card.Title>}
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

export default DeptPost