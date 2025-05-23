/* Component rendered on the ScenesPage to display the 
   cover info for each Scene
 * When clicked on it opens that Scenes's ScenePage */
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Card from "react-bootstrap/Card";
import { Link, useHistory } from 'react-router-dom';
import { axiosReq } from '../../api/axiosDefaults';
import { PostDropdown } from '../../components/PostDropdown';
import styles from "../../styles/Scene.module.css";
import { toast } from 'react-toastify';

const SceneTop = (props) => {
    const {
        id,
        number,
        title,
        action,
        location,
        style,
        fetchScenes,
    } = props;
    const history = useHistory();

    const handleEdit = () => {
        history.push(`/scenes/${id}/edit`);
      };
    
      const handleDelete = async () => {
        try {
          await axiosReq.delete(`/scenes/${id}/`);
          toast.success(`Scene Deleted`);
          fetchScenes();
        } catch (err) {
        }
      };

    return (
        <div>
          <Card className={`text-center ${styles.SceneCard }`} >
            <div className={`mb-0 px-2 py-1`}>
            <Row className='mx-0 d-flex align-items-center '>
              <Col className='mx-0 px-0' xs={1}>
              </Col>
              <Col xs={10} className='mx-0 px-0 text-center'>
              <Link to={`/scenes/${id}`}>
              <div>
              <h5 className={` ${styles.Grey }`}>
                Scene {number} 
              </h5>
              </div>
              </Link>
              </Col >
              <Col xs={1} className={`mx-0 px-0 ${styles.Drop }`}>
              <PostDropdown
                      // className="float-left"
                      handleEdit={handleEdit}
                      handleDelete={handleDelete}
                  />
              </Col>
            </Row>
            <Link to={`/scenes/${id}`}>
            <div className={` ${styles.Div25 }`}>
            <span className={styles.Italics}>{title}</span>
            </div>
            </Link>
            </div>
            {/* Body */}
            <Card.Body style={style} className="py-1 px-0 mx-0" >
                <Link to={`/scenes/${id}`}>
                  <div className={` ${styles.Div50 } px-0`}>
                  {/* <span className={styles.Italics }>{title}</span> */}
                <Card.Text style={{ fontWeight: '700' }} 
                className={`${styles.Grey } px-0`}>{location}</Card.Text>
                </div>
                <div className={`px-0 ${styles.Div50 }`}>
                  <p className={` ${styles.Grey }`}>{action}</p></div>
                </Link>
            </Card.Body>
            </Card>
        </div>
    )
}

export default SceneTop
