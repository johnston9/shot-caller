/* Component to display the deptPost data */
import React from 'react';
import Card from "react-bootstrap/Card";
import styles from "../../styles/Post.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Link, useHistory } from 'react-router-dom';
import Avatar from "../../components/Avatar";
import { axiosRes } from '../../api/axiosDefaults';
import { PostDropdown } from '../../components/PostDropdown';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { toast } from 'react-toastify';

const DeptPost = (props) => {
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
          toast.success(`Post" Deleted`);
          history.goBack();
        } catch (err) {
        }
      };

    return (
        <div >
          <Card className={`${styles.PostCard}`}>
          <Card.Body className={`py-0 px-0 ${styles.PostTop}`}>
          <Row className={`d-flex align-items-center pt-0 pb-0 my-0`}>
          <Col xs={12} sm={3} className="my-0" >
          {/* small */}
          <div className='d-none d-sm-block'>
          <Row className="mt-1">
          <Col xs={3} className="pl-3 pr-0" >
          <Link to={`/profiles/${profile_id}`}>
          <Avatar src={profile_image} height={45}/>
          </Link>
          </Col>
          <Col xs={9} className="pl-2 pr-0" >
          <div className={`${styles.Content4} pl-2 ml-3`}>
          <p>
          <span >{name} </span>
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
          <Col xs={8} className="text-center mb-0 pb-0" >
          <p>
          <span >{name}</span>
          </p>
          <p className='mb-0 pb-0'>
          {position}
          </p>
          <p className={ `${styles.Date}`}> {updated_at}</p>
          </Col>
          <Col xs={2}>
          <div className={`${styles.Icon}`} >
            {is_owner && (
            <PostDropdown
                handleEdit={handleEdit}
                handleDelete={handleDelete}
            />
            ) } 
          </div>
          </Col>
          </Row>
          </div> 
          </Col>    
          <Col xs={12} sm={6} className="my-0" >
            <Row className={`${styles.Content3} pt-0 my-0 mr-1 ml-1`}>
                <Col className='px-0 mx-0 py-0 text-center' xs={12}>
                  {departments && <p className={`${styles.DeptTitle}`}
                  style={{ textTransform: 'capitalize'}}>
                    {departments}</p>}
                </Col>
            </Row>
          </Col> 
          {/* edit and date small */}
          <Col xs={12} sm={3} className="my-0 " >
            <div className='d-none d-sm-block'>
            <Row className='d-flex align-items-center' >
            <Col className="pl-0 pr-0" sm={9} >
            <p className={ `text-center  ${styles.Date}`}>{updated_at}
            </p>
            </Col>
            <Col sm={3}
            className="d-flex align-items-center px-0" >
            <div className={`${styles.Icon}`} >
            {is_owner && (
            <PostDropdown
                handleEdit={handleEdit}
                handleDelete={handleDelete}
            />
            ) } 
            </div>
            </Col>
            </Row>   
            </div>     
            </Col>                
          </Row>
          </Card.Body>
              <Card.Body className="pt-3" >
                    {title && <Card.Title style={{ fontStyle: 'italic' }}
                     className="text-center">{title}</Card.Title>}
                    <hr />
                    {content && <Card.Text className={`${styles.Role}`}>{content}</Card.Text>}
              </Card.Body>
              <hr className="mt-0"/>
              {/* images */}
              <div className='px-3'>
              {/* image 1/2  */}
              <Row className='mb-0'>
                <Col xs={12} md={6} className={`text-center px-0 mx-0 mb-5`} >
                <div className={`${styles.ImageBox} px-sm-2 px-md-5`}>
                <p className={`${styles.BoldTitle} mb-md-3 mx-md-5`}>IMAGE 1</p>
                      {image1 && <> 
                        <div className={`${styles.ImageBox2} px-1 px-md-2 mb-md-3`}>
                          <Card.Img src={image1} alt="image1" 
                          className={`${styles.Images}`} />
                          </div>
                          </>
                          }
                </div>
                  </Col>  
                  <Col  xs={12} md={6} className={`text-center px-0 mx-0 mb-5`} >
                  <div className={`${styles.ImageBox} px-sm-2 px-md-5`}>
                  <p className={`${styles.BoldTitle} mb-md-3 mx-md-5`}>IMAGE 2</p>
                  {image2 && <> 
                    <div className={`${styles.ImageBox2} px-1 px-md-2 mb-md-3`}>
                          <Card.Img src={image2} alt="image2" className={`${styles.Images}`}/>
                    </div>
                          </>
                          }
                  </div>
                  </Col>
              </Row >
              {/* break */}
              <Row>
              <Col xs={12}>
              <hr className={`${styles.Break1} mt-0 mb-5 d-none d-md-block`}/>
              </Col>
              </Row>
              {/* image 3/4  */}
              <Row className='mb-2'>
              <Col xs={12} md={6} className={`text-center px-0 mx-0 mb-5`} >
                <div className={`${styles.ImageBox} px-sm-2 px-md-5`}>
                <p className={`${styles.BoldTitle} mb-md-3 mx-md-5`}>IMAGE 3</p>
                      {image3 && <> 
                        <div className={`${styles.ImageBox2} py-md-3 px-1 px-md-3 mb-md-3`}>
                          <Card.Img src={image3} alt="image3" className={`${styles.Images}`}/>
                          </div>
                          </>
                          }
                      </div>
                  </Col>  
                  <Col xs={12} md={6} className={`text-center px-0 mx-0 mb-5`} >
                  <div className={`${styles.ImageBox} px-sm-2 px-md-5`}>
                  <p className={`${styles.BoldTitle} mb-md-3 mx-md-5`}>IMAGE 4</p>
                  {image4 && <> 
                    <div className={`${styles.ImageBox2} px-1 px-md-2 mb-md-3`}>
                          <Card.Img src={image4} alt="image4" className={`${styles.Images}`}/>
                          </div>
                          </>
                          }
                  </div>
                  </Col>
              </Row>
              {/* break */}
              <Row>
              <Col xs={12}>
              <hr className={`${styles.Break1} mt-0 mb-5 d-none d-md-block`}/>
              </Col>
              </Row>
              {/* image 5 */}
              <Row>
                  <Col className='d-none d-md-block' md={3} ></Col>
                  <Col className={`text-center px-0 mx-0 mb-5`} xs={12} md={6}>
                  <div className={`${styles.ImageBox} px-sm-2 px-md-5`}>
                  <p className={`${styles.BoldTitle} mb-md-3 mx-md-5`}>IMAGE 5</p>
                      {image5 && <> 
                        <div className={`${styles.ImageBox2} px-1 px-md-2 mb-md-3`}>
                          <Card.Img src={image5} alt="image5" className={`${styles.Images}`}/>
                          </div>
                          </>
                          }
                    </div>
                  </Col>  
              </Row>
              </div>
            </Card>
        </div>
    )
}

export default DeptPost