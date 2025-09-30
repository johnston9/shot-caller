/* Page to fetch the Day's data and it's schedule scenes data
 * Contains the ScheduleScene to which it passes the 
   schedule scenes data
 * Also fetches the day's Callsheet data to decide whether to 
   show an Add Callsheet or View Callsheet
 * Contains the Pages component to calculate the days's pages length */
import React, { useEffect, useState } from 'react';
import { axiosReq } from '../../../api/axiosDefaults';
import { useRedirect } from '../../../hooks/Redirect';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import styles from "../../../styles/DayPage.module.css";
import btnStyles from "../../../styles/Button.module.css";
import appStyles from "../../../App.module.css";
import ScheduleSceneCreate from '../scheduleScene/ScheduleSceneCreate';
import ScheduleScene from '../scheduleScene/ScheduleScene';
import TopBox from '../../../components/TopBox';
import Asset from '../../../components/Asset';
import { useParams, useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Pages from '../Pages';
import InfoStrip from '../InfoStrip';

const DayPage = () => {
    useRedirect();
    const [show, setShow] = useState(false);
    const { id } = useParams();
    // eslint-disable-next-line 
    const [dayData, setDayData] = useState({ results: [] });
    const [dayScenes, setDayScenes] = useState({ results: [] });
    const [callsheet, setCallsheet] = useState({ results: [] });
    const [dataDay, setDataDay] = useState("");
    const [dataDate, setDataDate] = useState("");
    const history = useHistory();
    const [hasLoaded, setHasLoaded] = useState(false);
    const [hasOrder, setHasOrder] = useState(false);
    const admin = true;
    const [showInfo, setShowInfo] = useState(false);

    useEffect(() => {
        const handleMount = async () => {
            try {
                const [{ data: dayGet }, { data: scenes }, { data: callsheetdata }] = await Promise.all([
                    axiosReq.get(`/days/${id}`),
                    axiosReq.get(`/schedule/scenes/?day_id=${id}`),
                    axiosReq.get(`/callsheetsnew/?day_id=${id}`),
                ])
                console.log(scenes)
                setDayData({ results: [dayGet] });
                setDayScenes(scenes);
                console.log(scenes);
                setCallsheet(callsheetdata);
                setDataDay(dayGet.day);
                setDataDate(dayGet.date);
                setHasLoaded(true);
                setHasOrder(false)
            } catch (err) {
                console.log(err);
              }
        }
        handleMount();
    }, [id, hasOrder])

    return (
        <div className='mb-5'>
            <TopBox work={`Shoot Day ${dataDay}`}
                    title2={dataDate}  />
            <Button
                className={`${btnStyles.Button} ${btnStyles.Blue} mt-1`}
                onClick={() => history.goBack()}
            >
                Back
            </Button>
            <Button
              className={`float-right py-0 mt-1 ${btnStyles.Order} ${btnStyles.Button}`}
              onClick={() => setShowInfo(showInfo => !showInfo)} >INFO
            </Button>
              {!showInfo ? (
                  ""
                      ) : (
                        <InfoStrip  /> 
                        ) } 
            {hasLoaded ? (
                <>
                {/* add scene - view/add Callsheet*/}
                <Row className='my-4'>
                    <Col xs={6} className="text-center">
                        <Button onClick={() => setShow(show => !show)} 
                        className={`px-2 px-sm-5 ${btnStyles.Button} ${btnStyles.Bright}`} >
                        Add Scene</Button>
                    </Col>
                    {callsheet.results.length ? (
                        <Col xs={6} className="text-center">
                        <Link className={`p-1`} to={`/callsheets/${id}`}>
                            <Button className={`px-1 px-sm-4 ${btnStyles.Button} ${btnStyles.Bright}`} > 
                            View Callsheet</Button>
                        </Link>
                    </Col>
                    ) : (
                        <Col xs={6} className="text-center">
                        <Link className={`p-1`} to={`/callsheet/create/${id}`}>
                            <Button className={`px-1 px-sm-4 ${btnStyles.Button} ${btnStyles.Bright}`} >Create Callsheet</Button>
                        </Link>
                    </Col>
                    )}
                </Row>
                {!show ?("") : (<ScheduleSceneCreate xday={dataDay} 
                setShow={setShow} setHasOrder={setHasOrder} xdate={dataDate} /> ) }
                <Pages scenes={dayScenes.results}/>
                {/* titles*/}
                <div className='d-none d-md-block'>
                <Row style={{ textTransform: 'uppercase' }} 
                className={`text-center mx-0  ${styles.TitleBox}`} >
                    {admin ? (
                        <>
                        <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                        <p className='mb-0 pl-2'>Edit</p>
                        </Col>
                        <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                            <p className='mb-0'>Times</p>
                        </Col>
                        <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                            <p className='mb-0'>Scene</p>
                        </Col>
                        <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={4} md={4}>
                            <p className='mb-0'>Details</p>
                        </Col>
                        </>
                    ) : (
                        <>
                        <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                            <p className='mb-0'>Times</p>
                        </Col>
                        <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                            <p className='mb-0'>Scene</p>
                        </Col>
                        <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={5} md={5}>
                            <p className='mb-0'>Details</p>
                        </Col>
                        </>
                    )}
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
                        <p className='mb-0'>Info</p>
                    </Col>
                </Row>
                </div>
                {/* mobile */}
                <div className='d-block d-md-none'>
                <Row className='text-center mx-0 px-0' >
                <Col className={`mx-0 px-0  ${styles.TitleBox2}`} xs={2}>
                <p style={{ textTransform: 'uppercase' }} className={`mb-0  ${styles.TitleBox}`}>Time</p>
                </Col>
                <Col className={` mx-0 px-0 ${styles.TitleBox2}`} xs={8}>
                <p style={{ textTransform: 'uppercase' }} className={`mb-0 text-center ${styles.TitleBox}`}>Details</p>
                </Col>
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={2}>
                <p style={{ textTransform: 'uppercase' }} className={`mb-0  ${styles.TitleBox}`}>Scene</p>
                </Col>
                </Row>
                </div>
                <Row>
                    <Col >                   
                    {dayScenes.results.length ? (
                        dayScenes.results.map((scene, index) => (
                            <ScheduleScene 
                                admin={admin}
                                style={{ backgroundColor: (index % 3 === 0) 
                                    ? '#dbfaf9' : (index % 2 === 0) ? 
                                    'rgb(223 254 240)' : 'rgb(248 241 249)' }}
                                {...scene} 
                                day_id={id} 
                                sceneAll={scene} 
                                setHasOrder={setHasOrder}
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
    )
}

export default DayPage