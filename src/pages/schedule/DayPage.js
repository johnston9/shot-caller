import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router';
import { axiosReq } from '../../api/axiosDefaults';
import { useRedirect } from '../../hooks/Redirect';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import styles from "../../styles/DayPage.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";
import DayPageTop from './DayPageTop';
import SceneScheduleCreate from './SceneScheduleCreate';
import ScheduleScene from './ScheduleScene';
import TopBox from '../../components/TopBox';
import Asset from '../../components/Asset';

const DayPage = () => {
    useRedirect("loggedOut");
    const [show, setShow] = useState(false);
    const { id } = useParams();
    const [dayData, setDayData] = useState({ results: [] });
    const [dayScenes, setDayScenes] = useState({ results: [] });
    const [dataDay, setDataDay] = useState("");
    const [dataDate, setDataDate] = useState("");
    const history = useHistory();
    const [hasLoaded, setHasLoaded] = useState(false);

    useEffect(() => {
        const handleMount = async () => {
            try {
                const [{ data: dayGet }, { data: scenes }] = await Promise.all([
                    axiosReq.get(`/days/${id}`),
                    axiosReq.get(`/schedule/scenes/?day_id=${id}`),
                ])
                setDayData({ results: [dayGet] });
                setDayScenes(scenes)
                console.log(scenes);
                setDataDay(dayGet.day)
                setDataDate(dayGet.date);
                setHasLoaded(true);
            } catch (err) {
                console.log(err);
              }
        }
        handleMount();
    }, [id])

    return (
        <div>
            <TopBox title="Day"/>
            {hasLoaded ? (
                <>
                <Row className="pt-1">
                <Col className="mt-4">
                <Button
                    className={`${btnStyles.Button} ${btnStyles.Blue} mb-2`}
                    onClick={() => history.push('/days')}
                >
                    Back to Days
                </Button>
                <DayPageTop {...dayData.results[0]} 
                  />
                </Col>
            </Row>
                {/* add scene */}
                <Row className='my-3'>
                    <Col className="text-center">
                        <Button onClick={() => setShow(show => !show)} 
                        className={`${btnStyles.Button} ${btnStyles.Wide2} ${btnStyles.Bright}`}>
                        Add Scene</Button>
                        {!show ?("") : (<SceneScheduleCreate xday={dataDay} xdate={dataDate} /> ) }
                    </Col>
                </Row>
                <hr />
                <h3>Running Order</h3>
                {/* titles */}
                <Row style={{ textTransform: 'uppercase' }} className={`mt-5 ${styles.TitleBox}`} >
                    <Col className={` ${styles.TitleBox2}`} xs={1} md={1}>
                        <p className='mb-0'>Info</p>
                    </Col>
                    <Col className={` ${styles.TitleBox2}`} xs={1} md={1}>
                        <p className='mb-0'>Times</p>
                    </Col>
                    <Col className={`${styles.TitleBox2}`} xs={1} md={1}>
                        <p className='mb-0'>Scene</p>
                    </Col>
                    <Col className={` ${styles.TitleBox2}`} xs={3} md={3}>
                        <p className='mb-0'>Details</p>
                    </Col>
                    <Col className={` ${styles.TitleBox2}`} xs={1} md={1}>
                        <p className='mb-0'>D/N</p>
                    </Col>
                    <Col className={`${styles.TitleBox2}`} xs={2} md={2}>
                    <p className='mb-0'>Filming</p>                        
                    </Col>
                    <Col className={` ${styles.TitleBox2}`} xs={1} md={1}>
                        <p className='mb-0'>Pages</p>
                    </Col>
                    <Col className={` ${styles.TitleBox2}`} xs={1} md={1}>
                        <p className='mb-0'>Cast</p>
                    </Col>
                    <Col className={` ${styles.TitleBox2}`} xs={1} md={1}>
                        <p className='mb-0'>Edit</p>
                    </Col>
                </Row>
                {/* scenes */}
                <Row>
                    <Col className='px-0 mx-0'>                   
                    {dayScenes.results.length ? (
                        dayScenes.results.map((scene, index) => (
                            <ScheduleScene 
                                style={{ backgroundColor: (index % 3 === 0) ? '#F8E5E5' : (index % 2 === 0) ? '#FAF1CF' : '#ecf0f1' }}
                                {...scene} 
                                dayid={id} 
                                sceneAll={scene} 
                                key={scene.id} />
                        ))) : ("")}
                </Col>
                </Row>
                </>
            ) : (
                <Container className={appStyles.Content}>
                    <Asset spinner />
                </Container>
            ) }
        </div>
    )
}

export default DayPage
