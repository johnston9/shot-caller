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
        {/* mobile */}
        <div className='mt-1 text-center'>
            <Card className={styles.Back}>
                <Card.Header className={`px-0 ${styles.CardHead}`} >
                <Link to={`/profiles/${id}`}>
                {/* Avatar */}
                <Row>
                <Col xs={12} >
                    <Avatar src={image} height={imageSize}/>
                </Col>
                </Row>
                <Row className='mt-2 text-center'>
                    <Col xs={12} >   
                    <div>
                    <h5 className={`${styles.WordBreakWhite}`}
                    style={{ textTransform: 'capitalize'}}> 
                    {name} 
                    </h5>
                    </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} >  
                    <p style={{ textTransform: 'capitalize'}} 
                    className={` ${styles.WordBreakWhite}`} >
                    {position} </p>
                    </Col>
                </Row>
                </Link>
                </Card.Header>
                <Card.Body className="my-0 py-0 px-0"> 
                <Row>
                    <Col xs={12}>
                    <div className="mt-2" >
                    {currentUser &&
                    !is_owner &&
                    (following_id ? (
                        <Button
                        className={` py-0 ${btnStyles.Button} ${btnStyles.Black}`}
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
                </Card.Body>
            </Card>
        </div>
        {/* small */}
        {/* <div className='mt-1 d-none d-sm-block'>
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
        </div> */}
        </div>
    )
}

export default Profile
