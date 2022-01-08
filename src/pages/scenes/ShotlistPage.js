import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router';
import { axiosReq } from '../../api/axiosDefaults';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import { useRedirect } from '../../hooks/Redirect';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import styles from "../../styles/DayPage.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";
import TopBox from '../../components/TopBox';
import ShotListCreate from './ShotListCreate';
import Asset from '../../components/Asset';
import NoResults from "../../assets/no-results.png";
import Shot from './Shot';

const ShotlistPage = () => {
    useRedirect("loggedOut");
    const { id } = useParams();
    const [addShot, setAddShot] = useState(false);
    const [shotlist, setShotlist] =  useState({ results: [] });
    const currentUser = useCurrentUser();
    const history = useHistory();
    const [hasLoaded, setHasLoaded] = useState(false);


    useEffect(() => {
        const handleMount = async () => {
            try {
                const { data } = await axiosReq(`/shotlists/?scene_id=${id}`);
                setShotlist({ results: [data] });
            } catch (err) {
                console.log(err);
              }
        }
        handleMount();
    }, [id])

    return (
        <div>
            <h3>Shotlist</h3>
            <Row>
              <Col className="text-center">
                    <Button onClick={() => setAddShot(addShot => !addShot)} 
                    className={`${btnStyles.Button} ${btnStyles.Wide2} ${btnStyles.Bright}`}>
                    Add Shot
                </Button>
                {!addShot ?("") : (<ShotListCreate handleMount={handleMount} /> ) }
              </Col>
            </Row>
            <h5>Shots</h5>
            {/* titles */}
            <Row style={{ textTransform: 'uppercase' }} className={`mt-5 ${styles.TitleBox}`} >
                <Col className={` ${styles.TitleBox2}`} xs={1} md={1}>
                    <p className='mb-0'>Info</p>
                </Col>
                <Col className={` ${styles.TitleBox2}`} xs={1} md={1}>
                    <p className='mb-0'>Shot </p>
                </Col>
                <Col className={`${styles.TitleBox2}`} xs={1} md={1}>
                    <p className='mb-0'>Size</p>
                </Col>
                <Col className={` ${styles.TitleBox2}`} xs={3} md={3}>
                    <p className='mb-0'>Description</p>
                </Col>
                <Col className={` ${styles.TitleBox2}`} xs={1} md={1}>
                    <p className='mb-0'>Angle</p>
                </Col>
                <Col className={`${styles.TitleBox2}`} xs={2} md={2}>
                <p className='mb-0'>Equipment</p>                        
                </Col>
                <Col className={` ${styles.TitleBox2}`} xs={1} md={1}>
                    <p className='mb-0'>Movement</p>
                </Col>
                <Col className={` ${styles.TitleBox2}`} xs={1} md={1}>
                    <p className='mb-0'>Image</p>
                </Col>
                <Col className={` ${styles.TitleBox2}`} xs={1} md={1}>
                    <p className='mb-0'>Edit</p>
                </Col>
            </Row>
            {/* shots */}
            <Row className="h-100">
            <Col className='px-0 mx-0'> 
            {hasLoaded ? (
                <>
                    {shotlist.results.length ? (
                        shotlist.results.map((shot) => (
                        <Shot key={shot.id} {...shot} handleMount={handleMount} shotAll={shot} />
                        ))) 
                    : (
                    <Container className={appStyles.Content}>
                        <Asset src={NoResults } message="Add Shots" />
                    </Container>
                    )}
                </>
                ) : (
                <Container className={appStyles.Content}>
                    <Asset spinner />
                </Container>
                )}
            </Col>
            </Row>  
            
        </div>
    )
}

export default ShotlistPage
