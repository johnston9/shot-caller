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
            <TopBox work={`Day ${dataDay}`}
                    title={dataDate}  />
            <Button
                className={`${btnStyles.Button} ${btnStyles.Blue} mt-1`}
                onClick={() => history.push('/days')}
            >
                Back
            </Button>
            {hasLoaded ? (
                <>
                <DayPageTop {...dayData.results[0]} 
                  />
                {/* add scene */}
                <Row className='my-4'>
                    <Col className="text-center">
                        <Button onClick={() => setShow(show => !show)} 
                        className={`${btnStyles.Button} ${btnStyles.Wide2} ${btnStyles.Bright}`}>
                        Add Scene</Button>
                        {!show ?("") : (<SceneScheduleCreate xday={dataDay} setShow={setShow} xdate={dataDate} /> ) }
                    </Col>
                </Row>
                {/* titles */}
                <div className='d-none d-md-block'>
                <Row style={{ textTransform: 'uppercase' }} className={`text-center mx-0  ${styles.TitleBox}`} >
                    <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                        <p className='mb-0 pl-2'>Info</p>
                    </Col>
                    <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                        <p className='mb-0'>Times</p>
                    </Col>
                    <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                        <p className='mb-0'>Scene</p>
                    </Col>
                    <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={3} md={3}>
                        <p className='mb-0'>Details</p>
                    </Col>
                    <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                        <p className='mb-0'>D/N</p>
                    </Col>
                    <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={2} md={2}>
                    <p className='mb-0'>Filming</p>                        
                    </Col>
                    <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                        <p className='mb-0'>Pages</p>
                    </Col>
                    <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                        <p className='mb-0'>Cast</p>
                    </Col>
                    <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                        <p className='mb-0'>Edit</p>
                    </Col>
                </Row>
                </div>
                {/* scenes */}
                <Row>
                    <Col >                   
                    {dayScenes.results.length ? (
                        dayScenes.results.map((scene, index) => (
                            <ScheduleScene 
                                style={{ backgroundColor: (index % 3 === 0) ? '#dbfaf9' : (index % 2 === 0) ? 'rgb(219 250 236)' : 'rgb(227 248 241)' }}
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
        // </div>
    )
}

export default DayPage
