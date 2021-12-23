import React from 'react';
import Card from "react-bootstrap/Card";
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
        setPosts,
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
          console.log(err);
        }
      };

    return (
        <div>
            <Card className={styles.Post} >
                <Card.Body className="py-1">
                <Card.Text className={`mb-1 ${styles.Info} text-center`} >{departments.toUpperCase()} DEPARTMENT</Card.Text>
                <div className="d-flex align-items-center justify-content-between">
                    <Link to={`/profiles/${profile_id}`}>
                        <Avatar src={profile_image} height={45}  />
                        {owner} {name}
                    </Link>
                    <div className="d-flex align-items-center">
                        <span>{updated_at}</span>
                        {is_owner && (
                          <PostDropdown
                            handleEdit={handleEdit}
                            handleDelete={handleDelete}
                        />
                        ) }
                    </div>         
                </div>
                </Card.Body>
                  <Link to={`/department/posts/${id}`}>
                    <Card.Body>
                    <hr className="mb-1" />
                    {title && <Card.Title className="text-center">{title}</Card.Title>}
                </Card.Body>
                </Link>
            </Card>
        </div>
    )
}

export default DeptPostTop