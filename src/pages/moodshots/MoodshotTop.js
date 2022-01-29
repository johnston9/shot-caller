import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { axiosReq, axiosRes } from '../../api/axiosDefaults';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import { useRedirect } from '../../hooks/Redirect';
import styles from "../../styles/Moodshots.module.css"
import btnStyles from "../../styles/Button.module.css";
import Camera from "../../assets/dep17s.png";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { PostDropdown } from '../../components/PostDropdown';
import Avatar from '../../components/Avatar';

const MoodshotTop = (props) => {  
    useRedirect("loggedOut")
    const {
        id,
        owner,
        is_owner,
        updated_at,
        name,
        position,
        profile_id,
        profile_image,
        scene, 
        number, 
        title, 
        character, 
        location,
    } = props;
    const currentUser = useCurrentUser();
    const history = useHistory();

    const handleEdit = () => { 
        history.push(`/moodshots/${id}/edit`);
        };

    const handleDelete = async () => {
        try {
            await axiosReq.delete(`/moodshots/${id}/`);
            history.push(`/moodshots/`);
        } catch (err) {
            // console.log(err);
        }
        };
        return (
            <div>
                <Card className={`text-center ${styles.Top}`}>
                    <Link to={`/moodshots/${id}`}>
                    <Card.Body className={`pt-2 pb-1 ${styles.Body }`}>
                        <Row className="d-flex align-items-center">
                            <Col xs={12} md={5} className="d-flex align-items-center justify-content-between">
                                <Link to={`/profiles/${profile_id}`}>
                                <Avatar src={profile_image} height={45}  />
                            </Link>
                            <span style={{ fontWeight: '700' }} className='ml-3'>{name}</span>
                            <span className='ml-3'>{updated_at}</span>
                            {is_owner && (
                            <PostDropdown
                                handleEdit={handleEdit}
                                handleDelete={handleDelete}
                            />
                            ) }               
                            </Col>
                    {/* <div className="d-flex align-items-center justify-content-between"> */}
                            <Col xs={12} md={7} >
                                {number && <span style={{  fontWeight: '700' }}>Scene {number} - </span>} {location && <span> {location} - </span>} {character && <span style={{  fontWeight: '700' }}> {character} - </span>} {title && <span style={{ fontStyle: 'italic' }}> {title}</span>}
                            </Col>
                        </Row>
                    {/* </div> */}
                      </Card.Body>
                    </Link>
                </Card>           
            </div>
        )
};

export default MoodshotTop;
