import React from 'react';
import { Card, OverlayTrigger, Tooltip } from 'react-bootstrap';
import styles from "../../styles/Post.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Link } from 'react-router-dom';
import Avatar from "../../components/Avatar";

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
      } = props;

      const currentUser = useCurrentUser()
      const is_owner = currentUser?.username === owner;


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
                        {is_owner && postPage && "..."}
                    </div>
        
                    {/* like */}
                    <div className={styles.Post}>
                        {is_owner ? (
                            <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>You can't like your own post!</Tooltip>}
                            >
                            <i className="far fa-heart" />
                            </OverlayTrigger>
                        ) : like_id ? (
                            <span onClick={() => {}}>
                            <i className={`fas fa-heart ${styles.Heart}`} />
                            </span>
                        ) : currentUser ? (
                            <span onClick={() => {}}>
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
                    {<Card.Text className="styles.Info" >SCENE {scene} - {departments.toUpperCase()} - {category.toUpperCase()} </Card.Text>}
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
