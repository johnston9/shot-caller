import React from 'react';
import { Card, OverlayTrigger, Tooltip } from 'react-bootstrap';
import styles from "../../styles/Post.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Link, useHistory } from 'react-router-dom';
import Avatar from "../../components/Avatar";
import { axiosRes } from '../../api/axiosDefaults';
import { PostDropdown } from '../../components/PostDropdown';

const Post = (props) => {
    const {
        id,
        owner,
        profile_id,
        profile_image,
        comments_count,
        likes_count,
        like_id,
        title,
        content,
        scene,
        departments,
        category,
        image1,
        image2,
        image3,
        image4,
        image5,
        updated_at,
        postPage,
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
                <Card.Body>
                <div className="d-flex align-items-center justify-content-between">
                    <Link to={`/profiles/${profile_id}`}>
                        <Avatar src={profile_image} height={45}  />
                        {owner}
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
        
                    {/* like */}
                    <div className={styles.PostBar}>
                        {is_owner ? (
                            <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>You can't like your own post!</Tooltip>}
                            >
                            <i className="far fa-heart" />
                            </OverlayTrigger>
                        ) : like_id ? (
                            <span onClick={handleUnlike} >
                            <i className={`fas fa-heart ${styles.Heart}`} />
                            </span>
                        ) : currentUser ? (
                            <span onClick={handleLike}>
                            <i className={`far fa-heart ${styles.HeartOutline}`} />
                            </span>
                        ) : (
                            <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>Log in please</Tooltip>}
                            >
                            <i className="far fa-heart" />
                            </OverlayTrigger>
                        )}
                        {likes_count}
                        <Link to={`/posts/${id}`}>
                            <i className="far fa-comments" />
                        </Link>
                        {comments_count}
                        </div>
                    </div>
                     {departments && <Card.Text className={`${styles.Info} text-center`} >SCENE {scene} - {departments.toUpperCase()} - {category.toUpperCase()} </Card.Text>}
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

export default Post
