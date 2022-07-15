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
        position,
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
                        <Col xs={12} lg={6} >
                      <div className='d-none d-sm-block'>
                      <Row>
                        <Col xs={2} sm={2}  >
                        <Link to={`/profiles/${profile_id}`}>
                        <Avatar src={profile_image} height={45}  />
                        </Link>
                        </Col>
                        <Col sm={5} 
                        className="" >
                        <p>
                        <span className=''>{name} - {position}</span>
                        </p>
                        <div>
                        <p>
                        <span className='ml-0 '>{name} - {position}</span>
                        </p>
                        </div>
                        {/* <p className='text-center'>{position} </p> */}
                        </Col>
                        <Col sm={3}
                        className="d-flex align-items-center"  >
                        <p>
                        <span className='float-right'>{updated_at}</span>
                        </p>
                        </Col>
                        <Col xs={2} sm={1}
                        className="d-flex align-items-center" >
                        {is_owner && (
                        <PostDropdown
                            handleEdit={handleEdit}
                            handleDelete={handleDelete}
                        />
                        ) } 
                        </Col>
                      </Row>   
                      </div>     
                      {/* mobile */}
                      <div className='d-sm-none'>
                      <Row>
                        <Col className='d-flex align-items-center' xs={2}>
                        <Link to={`/profiles/${profile_id}`}>
                        <Avatar src={profile_image} height={45}  />
                        </Link>
                        </Col>
                        <Col xs={8} className="text-center" >
                        <p className=''>{updated_at}</p>
                        <p>
                        <span className=''>{name} - {position}</span>
                        </p>
                        <p className=''>
                        {name} - {position}
                        </p>
                        {/* <p className='text-center'>{position} </p> */}
                        </Col>
                        <Col xs={2} 
                        className="d-flex align-items-center" >
                        {is_owner && (
                        <PostDropdown
                            handleEdit={handleEdit}
                            handleDelete={handleDelete}
                        />
                        ) } 
                        </Col>
                        <Col xs={12} sm={3} 
                          className="px-0 d-flex align-items-center justify-content-center"> 
                        </Col>
                      </Row>   
                      </div> 
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
