import React from 'react'
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { axiosRes } from '../../api/axiosDefaults';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import { useRedirect } from '../../hooks/Redirect';

const Scene = (props) => {
    useRedirect("loggedOut")
    const { id, number, title, int_ext, time, location,
        characters, action, content, shotlist, 
        storyboard, info, image } = props;
    const currentUser = useCurrentUser();
    const history = useHistory();

    const handleEdit = () => {
        history.push(`/posts/${id}/edit`);
      };
    
      const handleDelete = async () => {
        try {
          await axiosRes.delete(`/posts/${id}/`);
          history.goBack();
        } catch (err) {
          // console.log(err);
        }
      };

    return (
        <div>
            <Card className="styles.Scene">
                  <Card.Header>Scene{number} {location} </Card.Header>
                  <Card.Body>
                      <Link to={`/scenes/${id}`}>

                      </Link>
                  </Card.Body>
            </Card>
        </div>
    )
}

export default Scene
