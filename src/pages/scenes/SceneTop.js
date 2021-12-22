import React from 'react';
import { Col, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import Card from "react-bootstrap/Card";
import { Link, useHistory } from 'react-router-dom';
import { axiosReq } from '../../api/axiosDefaults';
import { PostDropdown } from '../../components/PostDropdown';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import { useRedirect } from '../../hooks/Redirect';
import styles from "../../styles/Scene.module.css";

const SceneTop = (props) => {
    useRedirect("loggedOut")
    const {
        id,
        number,
        act,
        title,
        action,
        characters,
        location
    } = props;
    const currentUser = useCurrentUser();
    const history = useHistory();

    const handleEdit = () => {
        history.push(`/scenes/${id}/edit`);
      };
    
      const handleDelete = async () => {
        try {
          await axiosReq.delete(`/scenes/${id}/`);
          history.goBack();
        } catch (err) {
          // console.log(err);
        }
      };

    return (
        <div>
            <Card className={`text-center ${styles.Scene }`} border="info" >
                  <Card.Header className="mb-0 px-2">
                  <Row className='mx-0 d-flex align-items-center'>
                    <Col className='mx-0 px-0' xs={1}></Col>
                    <Col xs={10} className='mx-0 px-0 text-center'>
                    <h5 className={` ${styles.Titlelist }`}>Scene {number} 
                    </h5>
                    <p>Act {act} </p>
                    <p>scene Id {id} </p>
                    </Col >
                    <Col xs={1} className=' mx-0 px-0'>
                    <PostDropdown
                            handleEdit={handleEdit}
                            handleDelete={handleDelete}
                        />
                    </Col>
                    </Row>
                    <div className={` ${styles.Div25 }`}>
                    <span className={styles.Italics }>{title}</span>
                    </div>
                    {/* <span>Scene {number} </span> 
                          <PostDropdown
                            handleEdit={handleEdit}
                            handleDelete={handleDelete}
                        /> */}
                  </Card.Header>
                  <Card.Body className="p-1" >
                      <Link to={`/scenes/${id}`}>
                        <div className={` ${styles.Div50 }`}>
                      <Card.Text style={{ fontWeight: '700' }} className="mb-1">{location}</Card.Text>
                      </div>
                      <div className={` ${styles.Div50 }`}><p className="mb-1">{characters}</p></div>
                      <hr className='m-0'/>
                      <div className={` ${styles.Div50 }`}><p>{action}</p></div>
                      </Link>
                  </Card.Body>
            </Card>
        </div>
    )
}

export default SceneTop
