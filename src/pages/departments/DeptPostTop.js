import React from 'react';
import Card from "react-bootstrap/Card";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../styles/Post.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Link, useHistory } from 'react-router-dom';
import Avatar from "../../components/Avatar";
import { axiosRes } from '../../api/axiosDefaults';
import { PostDropdown } from '../../components/PostDropdown';
import { useRedirect } from '../../hooks/Redirect';

const DeptPostTop = (props) => {
  useRedirect("loggedOut")
    const {
        id,
        owner,
        name,
        profile_id,
        profile_image,
        title,
        departments,
        updated_at,
      } = props;

      const currentUser = useCurrentUser()
      const is_owner = currentUser?.username === owner;
      const history = useHistory();
      const tit = title.substring(0, 12);
      const tit2 = title.substring(0, 20);

      const handleEdit = () => {
        history.push(`/department/posts/${id}/edit`);
      };

      const handleDelete = async () => {
        try {
          await axiosRes.delete(`/department/posts/${id}/`);
          history.goBack();
        } catch (err) {
          console.log(err);
        }
      };

    return (
        <div>
          <Card className={styles.PostTop} >
                <Card.Body className="py-1 px-0">
                <Row className="d-flex align-items-center">
                    <Col xs={12} lg={6} >
                      <Row>
                        <Col className="d-flex align-items-center justify-content-center" xs={12} >
                        <Link to={`/profiles/${profile_id}`}>
                        <Avatar src={profile_image} height={45}  />
                        </Link>
                        <span className='ml-1 ml-md-3'>{name}</span>
                        <span className='ml-1 ml-md-3'>{updated_at}</span>
                        {is_owner && (
                        <PostDropdown
                            handleEdit={handleEdit}
                            handleDelete={handleDelete}
                        />
                        ) } 
                        </Col>
                      </Row>            
                    </Col>                      
                    <Col xs={12} lg={6} > 
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
                    </Col> 
                  </Row>
                </Card.Body>
            </Card>
        </div>
    )
}

export default DeptPostTop