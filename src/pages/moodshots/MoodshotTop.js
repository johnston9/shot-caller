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
                <Card className={ `mt-1 ${styles.MoodTop}`}>
                    <Link to={`/moodshots/${id}`}>
                    <Card.Body className={`py-0 px-0 ${styles.MoodTop}`}>
                    <Row className={`d-flex align-items-center pt-0 pb-0 my-0 pl-3`}>
                    <Col xs={12} lg={4} className="my-2 " >
                      <div className='d-none d-sm-block'>
                      <Row >
                        <Col xs={2} sm={2} className="pl-0 pr-0" >
                        <Link to={`/profiles/${profile_id}`}>
                        <Avatar src={profile_image} height={45}/>
                        </Link>
                        </Col>
                        <Col sm={6} className="pl-0 pr-0" >
                        <div className={`${styles.Content4} pl-2 ml-2`}>
                        <p>
                        <span className=''>{name} </span>
                        </p>
                        <p>
                        <span className='ml-0 '>{position}</span>
                        </p>
                        </div>
                        <div>
                        </div>
                        </Col>
                        <Col className="pl-0 pr-0" sm={3} >
                        <div className={`${styles.Content4} `}>
                        <p>
                        <span className={ ` text-center ${styles.Date}`}>{updated_at}</span>
                        </p>
                        </div>
                        </Col>
                        <Col xs={2} sm={1}
                        className="d-flex align-items-center px-0 float-right" >
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
                        <span className=''>{name}</span>
                        </p>
                        <p className=''>
                        {position}
                        </p>
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
                    <Col xs={12} lg={8} className="my-2" >
                        <Row className={`${styles.Content3} text-center py-1 pl-2 mr-2 `}>
                            {/* <Col xs={12} sm={7} className={`${styles.Content3} py-sm-2`} >
                            {number && <span style={{ fontWeight: '700' }}>Scene {number} </span>} 
                            {location && <span> {location} </span>} 
                            {character && <span style={{  fontWeight: '700' }}> {character} </span>}
                            </Col> */}
                            <Col xs={12} sm={8} 
                            className={` ${styles.Content4} py-sm-2`} >
                            <Row>
                            <Col className='px-0 mx-0' xs={4}>
                            {number && <h5 style={{ fontWeight: '700' }}>Scene {number} </h5>}
                            </Col>
                            <Col className='px-0 mx-0' sm={4}>{location && <h5> {location}</h5>}
                            </Col>
                            <Col className='px-0 mx-0' sm={4}>{character && 
                                 <h5 style={{  fontWeight: '700' }}>
                                    {character} </h5>}  
                            </Col>
                            </Row>
                            </Col>
                            <Col xs={12} sm={4} className={`px-0 mx-0 py-sm-2 ${styles.Content4}`} >
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
