/* Component rendered on the MoodboardsPage to display the 
   cover info for each Moodboard
 * When clicked on it opens that Moodboard's MoodboardPage
 * The word moodshot is used through the app in the urls for moodboard */
import React from 'react'
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { axiosReq } from '../../api/axiosDefaults';
import styles from "../../styles/Moodboards.module.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { PostDropdown } from '../../components/PostDropdown';
import Avatar from '../../components/Avatar';

const MoodboardTop = (props) => {  
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
            {/* card */}
            <Card className={ `py-0 mt-1 mb-0 ${styles.Card} `}>
            <Link to={`/moodshots/${id}`}>
            <Card.Header className={`py-0 px-0 ${styles.MoodTop}`}>
            <Row className={`d-flex align-items-center py-1 my-0 pl-3`}>
                <Col xs={2} className="pl-0 pr-0" >
                <Link to={`/profiles/${profile_id}`}>
                <Avatar src={profile_image} height={30}/>
                </Link>
                </Col>
                <Col xs={8} className="text-center px-0" >
                {title && <p 
                className={`${styles.Bold }`}
                style={{ fontStyle: 'italic' }}> {title}</p>}
                </Col>
                <Col xs={2}
                className="d-flex align-items-center px-0 float-right" >
                {is_owner && (
                <PostDropdown
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                />
                ) } 
                </Col>
            </Row> 
            </Card.Header>  
            <Card.Body className={`py-0 pr-3 pl-4`} >
            <Row>
            <Col className='px-0 mx-0 text-center' xs={12}>
            <div className={`${styles.DivSize } text-center px-1 py-2`}>
            {number && <h5 className={`${styles.Title } mb-0 pb-0 py-auto`}>Scene {number} </h5>}
            <h5 className={`${styles.Title } mb-0 pb-0 py-auto`}> {location}</h5>
            <h5 className={`${styles.Title } mb-0 pb-0 py-auto`}>{character} </h5>  
            {!number && !location && !character && <p style={{ fontStyle: 'italic' }}
            className={`${styles.Title } mb-0 pb-0 py-auto`}>Title Only Moodboard</p>  }
            </div>
            </Col>
            </Row>
            {/* date */}
            <Row className='px-0'>     
            <Col xs={9} className='px-0'>
            <p className={`${styles.Date2}`}>
            {name} - {position}
            </p>
            </Col>       
            <Col className="px-0" xs={3} >
            <p className={` ${styles.Date2}`}>{updated_at}</p>
            </Col>
            </Row>  
            </Card.Body> 
            </Link>
            </Card> 
            </div>
        )
};

export default MoodboardTop;
