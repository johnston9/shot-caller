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
    const [dataId, setDataId] = useState("");
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
            <TopBox title={`Day ${dataDay}`} />
            <Button
                className={`${btnStyles.Button} ${btnStyles.Blue} mt-1`}
                onClick={() => history.push('/days')}
            >
                Back
            </Button>
            <div className={`mb-3 mt-2 ${styles.Header }`} >
            {hasLoaded ? (
                <>
                <DayPageTop {...dayData.results[0]} 
                  />
                {/* add scene */}
                <Row >
                    <Col className="text-center">
                        <Button onClick={() => setShow(show => !show)} 
                        className={`${btnStyles.Button} ${btnStyles.Wide2} ${btnStyles.Bright}`}>
                        Add Scene</Button>
                        {!show ?("") : (<SceneScheduleCreate xday={dataDay} xdate={dataDate} /> ) }
                    </Col>
                </Row>
                {/* titles */}
                <Row style={{ textTransform: 'uppercase' }} className={`mt-3 ${styles.TitleBox}`} >
                    <Col className={` ${styles.TitleBox2}`} xs={1} md={1}>
                        <p className='mb-0 pl-2'>Info</p>
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
                <p className={` mb-0 py-1 ${styles.SubTitle }`}></p>
                {/* scenes */}
                <Row>
                    <Col >                   
                    {dayScenes.results.length ? (
                        dayScenes.results.map((scene, index) => (
                            <ScheduleScene 
                                style={{ backgroundColor: (index % 3 === 0) ? '#dbfaf9' : (index % 2 === 0) ? 'rgb(230 232 252)' : 'rgb(230 246 239)' }}
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
            )             
            }
            </div>
        </div>
    )
}

export default DayPage
