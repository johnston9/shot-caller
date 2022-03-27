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
            <Card  >
                <Card.Body className={styles.PostTop}>
                <Row>
                  <Col className="d-flex align-items-center justify-content-space-between" xs={12} >
                  <Link to={`/profiles/${profile_id}`}>
                  <Avatar src={profile_image} height={45}  />
                  </Link>
                  <span className='ml-1'>{name}</span>
                  <span className='ml-3'>{updated_at}</span>
                  <span style={{ textTransform: 'capitalize'}}  className='d-none d-md-block ml-5'>{departments}</span>
                  {is_owner && (
                  <PostDropdown
                      handleEdit={handleEdit}
                      handleDelete={handleDelete}
                  />
                  ) } 
                  </Col>
                </Row> 
                </Card.Body>
                <hr />
                <Card.Body className="pt-1" >
                    {title && <Card.Title className="text-center">{title}</Card.Title>}
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