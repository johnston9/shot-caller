/* Component in the Scene Component to fetch 
   all ShotList data for a Scene
    <Row>
    <Col xs={6}>
    <hr className={`${styles.Break1} my-0`}/>
    </Col>
    </Row>
 * Contains the Shot component to which it passes the data
   for each Shot in the Shotlist
 * Contains the ShotListCreate component  */
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { axiosReq } from '../../../api/axiosDefaults';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import styles from "../../../styles/Scene.module.css";
import btnStyles from "../../../styles/Button.module.css";
import appStyles from "../../../App.module.css";
import ShotListCreate from './ShotListCreate';
import Asset from '../../../components/Asset';
import NoResults from "../../../assets/no-results.png";
import Shot from './Shot';

const ShotlistPage = ({scene, setShowlist} ) => {
    const { id } = useParams();
    const [addShot, setAddShot] = useState(false);
    const [shotlist, setShotlist] =  useState({ results: [] });

    const handleMount = async () => {
        try {
            const { data } = await axiosReq(`/shotlists/?scene_id=${id}&ordering=shot_number`);
            setShotlist(data);
        } catch (err) {
            console.log(`err ${err}`);
          }
    }

    useEffect(() => {
        handleMount();
        // eslint-disable-next-line
    }, [id,])

    return (
        <div className='mb-5'>
            <Row>
            <Col xs={12} className='text-center'>
            <h5 className={`mb-3 mt-2 pl-5 py-1 ${styles.SubTitle }`}>SHOTLIST
            <span style={{ textTransform: 'none'}} className={`float-right ${styles.Close } pt-1`} 
            onClick={() => setShowlist(false) } >Close</span>
            </h5>
            </Col>
            </Row>
            <Row>
              <Col className="text-center">
                <Button onClick={() => setAddShot(addShot => !addShot)} 
                className={`px-5 ${btnStyles.Button} ${btnStyles.Bright}`}>
                Add Shot
                </Button>
                {!addShot ?("") : (<ShotListCreate setAddShot={setAddShot} setShotlist={setShotlist} handleMount={handleMount} scene={scene} />  ) }
              </Col>
            </Row>
            {/* titles */}
            <div className='d-none d-md-block'>
            <Row style={{ textTransform: 'uppercase' }} className={`mt-3 ${styles.TitleBox}`} >
                <Col className={`px-0 ${styles.TitleBox2} `} xs={1} md={1}>
                    <p className='pl-2 mb-0'>Info</p>
                </Col>
                <Col className={`px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                    <p className='mb-0'>Shot </p>
                </Col>
                <Col className={`px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                    <p className='mb-0'>Size</p>
                </Col>
                <Col className={`px-0 ${styles.TitleBox2}`} xs={3} md={3}>
                    <p className='mb-0'>Description</p>
                </Col>
                <Col className={`px-0 ${styles.TitleBox2}`} xs={2} md={2}>
                    <p className='mb-0'>Angle</p>
                </Col>
                <Col className={`px-0  ${styles.TitleBox2}`} xs={2} md={2}>
                    <p className='mb-0'>Movement</p>
                </Col>
                <Col className={`px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                    <p className='mb-0'>Image</p>
                </Col>
                <Col className={`px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                    <p className='mb-0'>Edit</p>
                </Col>
            </Row>
            </div>
            {/* mobile */}
            <div className='d-block d-md-none'>
            <Row style={{ textTransform: 'uppercase' }} className={`mt-3 ${styles.TitleBox}`} >
                <Col className={`px-0 ${styles.TitleBox2} `} xs={1} md={1}>
                    <p className='pl-1 mb-0'>I</p>
                </Col>
                <Col className={`px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                    <p className='mb-0'># </p>
                </Col>
                <Col className={`px-0 ${styles.TitleBox2}`} xs={2} md={1}>
                    <p className='mb-0'>Sz</p>
                </Col>
                <Col className={`px-0 ${styles.TitleBox2}`} xs={3} md={3}>
                    <p className='mb-0'>Detail</p>
                </Col>
                <Col className={`px-0 ${styles.TitleBox2}`} xs={2} md={2}>
                    <p className='mb-0'>Ang</p>
                </Col>
                <Col className={`px-0 ${styles.TitleBox2}`} xs={2} md={1}>
                    <p className='mb-0 pl-2'>Im</p>
                </Col>
                <Col className={`px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                    <p className='mb-0'>E</p>
                </Col>
            </Row>
            </div>
            {/* shots */}
            <Row className="h-100">
            <Col className='px-0 mx-0'> 
            <>
            {shotlist.results.length ? (
                shotlist.results.map((shot, index) => (
                <Shot 
                style={{ backgroundColor: (index % 3 === 0) 
                    ? '#dbfaf9' : (index % 2 === 0) ? 
                    'rgb(223 254 240)' : 'rgb(248 241 249)' }}
                    key={shot.id} 
                    handleMount={handleMount} 
                    shotAll={shot} />
                ))) 
            : (
            <Container className={appStyles.Content}>
                <Asset src={NoResults } message="Add Shots" />
            </Container>
            )}
            </>
            </Col>
            </Row>  
            <Row>
            <Col xs={2} ></Col>
            <Col xs={8}>
            <hr className={`${styles.Break1}`}/>
            </Col>
            </Row>  
        </div>
    )
}

export default ShotlistPage
