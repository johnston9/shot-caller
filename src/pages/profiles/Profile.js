import React from 'react';
import styles from "../../styles/Profile.module.css";
import btnStyles from "../../styles/Button.module.css";
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import { Link } from 'react-router-dom';
import Avatar from '../../components/Avatar';
import Button from "react-bootstrap/Button";
import { useSetProfileData } from '../../contexts/ProfileDataContext';
import { useRedirect } from '../../hooks/Redirect';
import Card from "react-bootstrap/Card";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Profile = (props) => {
    useRedirect("loggedOut")
    const { profile, imageSize="40" } = props;
    const { id, following_id, image, owner, name, position } = profile;

    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;

    const {handleFollow, handleUnfollow} = useSetProfileData();

    return (
        <div>
        {/* small */}
        <div className='mt-1 d-none d-sm-block'>
            <Card className={styles.Back}>
                <Card.Body className="py-2 px-0">
                <Link className={styles.Back} to={`/profiles/${id}`}>
                <span>
                    <Avatar src={image} height={imageSize}/>
                <span className={`mx-2 ${styles.WordBreak}`}>
                <strong style={{ textTransform: 'capitalize'}}> {owner} {name} </strong>
                </span>
                <span style={{ textTransform: 'capitalize'}} className={` mx-2 ${styles.WordBreak}`} >{position} </span>
                </span>
                </Link>
                <div className="mt-2 pr-2" style={{float: 'right'}}>
                    {currentUser &&
                    !is_owner &&
                    (following_id ? (
                        <Button
                        className={` py-0 ${btnStyles.Button} ${btnStyles.Grey}`}
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
                </Card.Body>
            </Card>
        </div>
        {/* mobile */}
        <div className='mt-1 d-sm-none '>
            <Card className={styles.Back}>
                <Card.Body className="py-2 px-0"> 
                <Row>
                <Col xs={12} >
                    <Avatar src={image} height={imageSize}/>
                <div className="mt-2 pr-2" style={{float: 'right'}}>
                    {currentUser &&
                    !is_owner &&
                    (following_id ? (
                        <Button
                        className={` py-0 ${btnStyles.Button} ${btnStyles.Grey}`}
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
                </Col>
                </Row>
                <Link to={`/profiles/${id}`}>
                <Row className='text-center'>
                    <Col xs={12} >
                    <span>               
                    <span className={`mx-2 ${styles.WordBreak}`}>
                    <strong style={{ textTransform: 'capitalize'}}> {name} </strong>
                    </span>
                    <span style={{ textTransform: 'capitalize'}} className={` mx-2 ${styles.WordBreak}`} >{position} </span>
                    </span>
                    </Col>
                </Row>
                </Link>
                </Card.Body>
            </Card>
        </div>
        </div>
    )
}

export default Profile
