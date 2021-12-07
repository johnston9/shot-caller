import React from 'react';
import styles from "../../styles/Profile.module.css";
import btnStyles from "../../styles/Button.module.css";
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import { Link } from 'react-router-dom';
import Avatar from '../../components/Avatar';
import Button from "react-bootstrap/Button";
import { useSetProfileData } from '../../contexts/ProfileDataContext';
import { useRedirect } from '../../hooks/Redirect';

const Profile = (props) => {
    useRedirect("loggedOut")
    const { profile, imageSize = 40 } = props;
    const { id, following_id, image, owner } = profile;

    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;

    const {handleFollow, handleUnfollow} = useSetProfileData();

    return (
        <div className={`my-3`}>
            <div>
                <span>
                <Link to={`/profiles/${id}`}>
                    <Avatar src={image} height={imageSize}/>
                </Link>
                <span className={`mx-2 ${styles.WordBreak}`}>
                <strong>{owner}</strong>
                </span>
                </span>
                <div className="mt-2" style={{float: 'right'}}>
                    {currentUser &&
                    !is_owner &&
                    (following_id ? (
                        <Button
                        className={` py-0 ${btnStyles.Button} ${btnStyles.BlackOutline}`}
                        onClick={() => handleUnfollow(profile)}
                        >
                        unfollow
                        </Button>
                    ) : (
                        <Button
                        className={`py-0 ${btnStyles.Button} ${btnStyles.Black}`}
                        onClick={() => handleFollow(profile) }
                        >
                        follow
                        </Button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Profile
