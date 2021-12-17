import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
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
            <Card className="styles.Scene" border="info" >
                  <Card.Header className="d-flex align-items-center mb-0 px-2">
                    <span>Scene {number} </span> 
                          {/* <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>Edit/delete</Tooltip>}
                          >
                          <i className={`fas fa-ellipsis-v ${styles.Edit} p-3 ml-2 mr-0`} />
                        </OverlayTrigger> */}
                          <PostDropdown
                            handleEdit={handleEdit}
                            handleDelete={handleDelete}
                        />
                  </Card.Header>
                  <Card.Body className="p-1" >
                      <Link to={`/scenes/${id}`}>
                      <Card.Text style={{ fontWeight: '700' }} className="mb-1">{location}</Card.Text>
                        <p className="mb-1">{characters}</p>
                        <p>SceneId {id}</p>
                      </Link>
                  </Card.Body>
            </Card>
        </div>
    )
}

export default SceneTop
