import React from 'react';
import Card from "react-bootstrap/Card";

import styles from "../../styles/Post.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Link, useHistory } from 'react-router-dom';
import Avatar from "../../components/Avatar";
import { axiosRes } from '../../api/axiosDefaults';
import { PostDropdown } from '../../components/PostDropdown';
import { useRedirect } from '../../hooks/Redirect';
import { useDeptGeneralContext } from '../../contexts/DeptCategoryContext';

const DeptPost = (props) => {
  useRedirect("loggedOut")
    const {
        id,
        owner,
        name,
        profile_id,
        profile_image,
        title,
        content,
        image1,
        image2,
        image3,
        image4,
        image5,
        updated_at,
        setPosts,
      } = props;

      const currentUser = useCurrentUser()
      const is_owner = currentUser?.username === owner;
      const history = useHistory();
      const departments = useDeptGeneralContext();

      const handleEdit = () => {
        history.push(`/department/posts/${id}/edit`);
      };
    
      const handleDelete = async () => {
        try {
          await axiosRes.delete(`/department/posts/${id}/`);
          history.goBack();
        } catch (err) {
          // console.log(err);
        }
      };

    return (
        <div>
            <Card className={styles.Post} >
                <Card.Body>
                <Card.Text className={`mb-1 ${styles.Info} text-center`} >{departments.toUpperCase()} DEPARTMENT </Card.Text>
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
                <hr />
                <Card.Body className="pt-1" >
                    {title && <Card.Title className="text-center">{title}</Card.Title>}
                    <hr />
                    {content && <Card.Text>{content}</Card.Text>}
                </Card.Body>
                <hr />
                {image1 && <Card.Img src={image1} alt={title} className="mb-3" />}
                {image2 && <Card.Img src={image2} alt={title} className="mb-3" />}
                {image3 && <Card.Img src={image3} alt={title} className="mb-3" />}
                {image4 && <Card.Img src={image4} alt={title} className="mb-3" />}
                {image5 && <Card.Img src={image5} alt={title} className="mb-3" />}
            </Card>
        </div>
    )
}

export default DeptPost