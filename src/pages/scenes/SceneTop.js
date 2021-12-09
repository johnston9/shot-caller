import React from 'react';
import Card from "react-bootstrap/Card";
import { Link, useHistory } from 'react-router-dom';
import { axiosReq } from '../../api/axiosDefaults';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import { useRedirect } from '../../hooks/Redirect';

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
        history.push(`/posts/${id}/edit`);
      };
    
      const handleDelete = async () => {
        try {
          await axiosReq.delete(`/posts/${id}/`);
          history.goBack();
        } catch (err) {
          // console.log(err);
        }
      };

    return (
        <div>
            <Card className="styles.Scene" border="info" >
                  <Card.Header className="text-center">Scene {number} </Card.Header>
                  <Card.Body className="p-1" >
                      <Link to={`/scenes/${id}`}>
                      <Card.Text style={{ fontWeight: '700' }} className="mb-1">{location}</Card.Text>
                        <p className="mb-1">{characters}</p>

                      </Link>
                  </Card.Body>
            </Card>
        </div>
    )
}

export default SceneTop
