import React from 'react'
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { axiosReq } from '../../api/axiosDefaults';
import { useRedirect } from '../../hooks/Redirect';
import styles from "../../styles/Moodshots.module.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { PostDropdown } from '../../components/PostDropdown';
import Avatar from '../../components/Avatar';

const MoodshotTop = (props) => {  
    useRedirect("loggedOut")
    const {
        id,
        is_owner,
        updated_at,
        name,
        profile_id,
        profile_image,
        number, 
        title, 
        character, 
        location,
    } = props;
    const history = useHistory();

    const handleEdit = () => { 
        history.push(`/moodshots/${id}/edit`);
        };

    const handleDelete = async () => {
        try {
            await axiosReq.delete(`/moodshots/${id}/`);
            history.push(`/moodshots/`);
        } catch (err) {
        }
        };
        return (
            <div>
                <Card className={ `mt-1 text-center ${styles.MoodTop}`}>
                    <Link to={`/moodshots/${id}`}>
                    <Card.Body className={`py-0 px-0 ${styles.MoodTop}`}>
                        <Row className="d-flex align-items-center pt-0 pb-0 my-0">
                            <Col xs={12} lg={6} className="d-flex align-items-center justify-content-between">
                                <Link to={`/profiles/${profile_id}`}>
                                <Avatar src={profile_image} height={45}  />
                            </Link>
                            <span style={{ fontWeight: '700' }} className='ml-1 ml-md-3'>{name}</span>
                            <span className='ml-5'>{updated_at}</span>
                            {is_owner && (
                            <PostDropdown
                                handleEdit={handleEdit}
                                handleDelete={handleDelete}
                            />
                            ) }               
                            </Col>
                            <Col xs={12} lg={6} className="my-2" >
                                <Row className={`${styles.Content} ml-2 mr-2 `}>
                                    <Col xs={12} sm={7} className={`${styles.Content1} py-sm-2`} >
                                    {number && <span style={{ fontWeight: '700' }}>Scene {number} </span>} {location && <span> {location} </span>} {character && <span style={{  fontWeight: '700' }}> {character} </span>}
                                    </Col>
                                    <Col xs={12} sm={5} className={`px-0 mx-0 py-sm-2 ${styles.Content2}`} >
                                    {title && <span style={{ fontStyle: 'italic' }}> {title}</span>}
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                      </Card.Body>
                    </Link>
                </Card>           
            </div>
        )
};

export default MoodshotTop;
