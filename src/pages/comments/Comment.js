import React, { useState } from "react";
import { Link } from "react-router-dom";
import { axiosRes } from "../../api/axiosDefaults";
import Avatar from "../../components/Avatar";
import { PostDropdown } from "../../components/PostDropdown";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import CommentEditForm from "./CommentEditForm";
import styles from "../../styles/Comment.module.css";
import { useRedirect } from "../../hooks/Redirect";

const Comment = (props) => {
  useRedirect("loggedOut")
    const { profile_id, profile_image, owner, updated_at, 
        content, id, setPost, setComments, } = props;
    
    const [showEditForm, setShowEditForm] = useState(false);

    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;

    const handleDelete = async () => {
        try {
          await axiosRes.delete(`/comments/${id}/`);
          setPost((prevPost) => ({
            results: [
              {
                ...prevPost.results[0],
                comments_count: prevPost.results[0].comments_count - 1,
              },
            ],
          }));
    
          setComments((prevComments) => ({
            ...prevComments,
            results: prevComments.results.filter((comment) => comment.id !== id),
          }));
        } catch (err) {}
      };

    return (
        <div>
            <hr />
            <div className="media">
                <Link to={`/profiles/${profile_id}`} >
                    <Avatar src={profile_image} />
                </Link>
                <div className="media-body align-self-center ml-1">
                    <span className={styles.Owner}>{owner}</span>
                    <span className={styles.Date}>{updated_at}</span>
                    {showEditForm ? (
                        <CommentEditForm
                            id={id}
                            profile_id={profile_id}
                            content={content}
                            profileImage={profile_image}
                            setComments={setComments}
                            setShowEditForm={setShowEditForm}
                        />
                    ) : (
                        <p>{content}</p>
                    )}
                </div>
                {is_owner && !showEditForm && (
                    <PostDropdown
                        handleEdit={() => setShowEditForm(true)}
                        handleDelete={handleDelete}
                    />
                    )}
            </div>  
        </div>
    )
}

export default Comment
