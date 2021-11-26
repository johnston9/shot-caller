import React from 'react';
import styles from "../../styles/Post.module.css";

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
    return (
        <div>
            <p>placeholder</p>
        </div>
    )
}

export default Post
