import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { axiosReq } from '../../api/axiosDefaults';
import { useRedirect } from '../../hooks/Redirect';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import styles from "../../styles/Scene.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";
import ShotListCreate from './ShotListCreate';
import Asset from '../../components/Asset';
import NoResults from "../../assets/no-results.png";
import Shot from './Shot';

const ShotlistPage = ({scene, setShowlist} ) => {
    useRedirect("loggedOut");
    const { id } = useParams();
    const [addShot, setAddShot] = useState(false);
    const [shotlist, setShotlist] =  useState({ results: [] });

    const handleMount = async () => {
        try {
            const { data } = await axiosReq(`/shotlists/?scene_id=${id}&ordering=day_order_number`);
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
        <div>
            <h5 style={{ textTransform: 'uppercase'}} className={` mt-1 mb-4 pl-3 py-1 ${styles.SubTitle }`}>
                Shotlist
                <span style={{ textTransform: 'none'}} className={`float-right ${styles.Close }`} onClick={() => setShowlist(false) } >Close</span>
                </h5>
            <Row>
              <Col className="text-center">
                    <Button onClick={() => setAddShot(addShot => !addShot)} 
                    className={`${btnStyles.Button} ${btnStyles.Wide2} ${btnStyles.Bright}`}>
                    Add Shot
                </Button>
                {!addShot ?("") : (<ShotListCreate setAddShot={setAddShot} setShotlist={setShotlist} handleMount={handleMount} scene={scene} />  ) }
              </Col>
            </Row>
            {/* <h5 className='text-center'>Shots</h5> */}
            {/* titles */}
            <Row style={{ textTransform: 'uppercase' }} className={`mt-5 ${styles.TitleBox}`} >
                <Col className={`px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                    <p className=' mb-0'>Info</p>
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
            {/* shots */}
            <Row className="h-100">
            <Col className='px-0 mx-0'> 
            {/* new */}
            {/* {hasLoaded ? (
                    <>
                    {shotlist.results.length ? (
                        shotlist.results.map((shot) => (
                        <Shot key={shot.id} {...shot} setAddShot={setAddShot} handleMount={handleMount} shotAll={shot} />
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
                    )} */}
            {/* old */}
                <>
                    {shotlist.results.length ? (
                        shotlist.results.map((shot, index) => (
                        <Shot 
                            style={{ backgroundColor: (index % 3 === 0) ? '#F8E5E5' : (index % 2 === 0) ? '#FAF1CF' : '#ecf0f1' }}
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
            <hr/>
        </div>
    )
}

export default ShotlistPage
