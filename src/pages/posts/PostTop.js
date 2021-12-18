import React from 'react';
import Card from "react-bootstrap/Card";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import styles from "../../styles/Post.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Link, useHistory } from 'react-router-dom';
import Avatar from "../../components/Avatar";
import { axiosRes } from '../../api/axiosDefaults';
import { PostDropdown } from '../../components/PostDropdown';
import { useRedirect } from '../../hooks/Redirect';

const PostTop = (props) => {
  useRedirect("loggedOut")
    const {
        id,
        owner,
        profile_id,
        profile_image,
        comments_count,
        likes_count,
        like_id,
        archive_id,
        title,
        scene,
        departments,
        category,
        updated_at,
        setPosts,
      } = props;

      const currentUser = useCurrentUser()
      const is_owner = currentUser?.username === owner;
      const history = useHistory();

      const handleEdit = () => {
        history.push(`/posts/${id}/edit`);
      };
    
      const handleDelete = async () => {
        try {
          await axiosRes.delete(`/posts/${id}/`);
          history.goBack();
        } catch (err) {
          console.log(err);
        }
      };

      const handleArchive = async () => {
        try {
          const { data } = await axiosRes.post("/archives/", { post: id });
          setPosts((prevPosts) => ({
            ...prevPosts,
            results: prevPosts.results.map((post) => {
              return post.id === id
                ? { ...post, archive_id: data.id }
                : post;
            }),
          }));
        } catch (err) {
          console.log(err);
        }
      };

      const handleUnarchive = async () => {
        try {
          await axiosRes.delete(`/archives/${archive_id}/`);
          setPosts((prevPosts) => ({
            ...prevPosts,
            results: prevPosts.results.map((post) => {
              return post.id === id
                ? { ...post, archive_id: null }
                : post;
            }),
          }));
        } catch (err) {
          console.log(err);
        }
      };

      const handleLike = async () => {
        try {
          const { data } = await axiosRes.post("/likes/", { post: id });
          setPosts((prevPosts) => ({
            ...prevPosts,
            results: prevPosts.results.map((post) => {
              return post.id === id
                ? { ...post, likes_count: post.likes_count + 1, like_id: data.id }
                : post;
            }),
          }));
        } catch (err) {
          console.log(err);
        }
      };

      const handleUnlike = async () => {
        try {
          await axiosRes.delete(`/likes/${like_id}/`);
          setPosts((prevPosts) => ({
            ...prevPosts,
            results: prevPosts.results.map((post) => {
              return post.id === id
                ? { ...post, likes_count: post.likes_count - 1, like_id: null }
                : post;
            }),
          }));
        } catch (err) {
          console.log(err);
        }
      };


    return (
        <div>
            <Card className={styles.Post} >
                <Card.Body className="py-1">
                {departments && <Card.Text className={`mb-1 ${styles.Info} text-center`} >SCENE {scene} - {departments.toUpperCase()} - {category.toUpperCase()} </Card.Text>}
                <div className="d-flex align-items-center justify-content-between">
                    <Link to={`/profiles/${profile_id}`}>
                        <Avatar src={profile_image} height={45}  />
                        {owner}
                    </Link>
                    <div className="d-flex align-items-center">
                        <span>{updated_at}</span>
                        {is_owner && (
                          <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>Edit/delete</Tooltip>}
                          >
                          <i className={`fas fa-ellipsis-v ${styles.Edit} p-3 ml-2 mr-0`} />
                        </OverlayTrigger>
                        ) }
                        {is_owner && (
                          <PostDropdown
                            handleEdit={handleEdit}
                            handleDelete={handleDelete}
                        />
                        ) }
                    </div>        
                    <div className={styles.PostBar}>
                      {/* archives */}
                      {archive_id ? (
                            <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>Unarchive</Tooltip>}
                            >
                            <span onClick={handleUnarchive} >
                            <i className={`fas fa-folder ${styles.Heart}`} />
                            </span>
                            </OverlayTrigger>
                        ) : currentUser ? (
                          <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>Archive</Tooltip>}
                          >
                            <span onClick={handleArchive}>
                            <i className={`far fa-folder-open ${styles.HeartOutline}`} />
                            </span>
                            </OverlayTrigger>
                        ) : (
                            <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>Log in please</Tooltip>}
                            >
                            <i className="far fa-folder-open" />
                            </OverlayTrigger>
                        )}
                        {/* like */}
                        {is_owner ? (
                            <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>You can't like your own post!</Tooltip>}
                            >
                            <i className="far fa-heart" />
                            </OverlayTrigger>
                        ) : like_id ? (
                            <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>Unlike</Tooltip>}
                            >
                            <span onClick={handleUnlike} >
                            <i className={`fas fa-heart ${styles.Heart}`} />
                            </span>
                            </OverlayTrigger>
                        ) : currentUser ? (
                            <OverlayTrigger
                              placement="top"
                              overlay={<Tooltip>Like</Tooltip>}
                              >
                            <span onClick={handleLike}>
                            <i className={`far fa-heart ${styles.HeartOutline}`} />
                            </span>
                            </OverlayTrigger>
                        ) : (
                            <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>Log in please</Tooltip>}
                            >
                            <i className="far fa-heart" />
                            </OverlayTrigger>
                        )}
                        {likes_count}
                        <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>Comments</Tooltip>}
                            >
                        <Link to={`/posts/${id}`}>
                            <i className="far fa-comments" />
                        </Link>
                        </OverlayTrigger>
                        {comments_count}
                        </div>
                    </div>
                    </Card.Body>
                    <Link to={`/posts/${id}`}>
                    <Card.Body>
                    <hr className="mb-1" />
                    {title && <Card.Title className="text-center">{title}</Card.Title>}
                </Card.Body>
                </Link>
            </Card>
        </div>
    )
}

export default PostTop