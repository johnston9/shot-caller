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
    // const [day_int_id, setDay_int_id] = useState();
    const [dayData, setDayData] = useState({ results: [] });
    const [dayScenes, setDayScenes] = useState({ results: [] });
    // const [dayScenes, setDayScenes] = useState();
    const [dataDay, setDataDay] = useState("");
    const [dataDate, setDataDate] = useState("");
    const currentUser = useCurrentUser();
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
                setDataDay(dayGet.day)
                setDataDate(dayGet.date);
                setHasLoaded(true);
                // const id_int = parseInt(id)
                // setDay_int_id(id_int)  
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
            {/* Scenes */}
            <Row>
                <Col>
                <h3 className='text-center mt-3'>Day Schedule</h3>
                {/* add scene */}
                <Row className='my-3'>
                    <Col className="text-center">
                        <Button onClick={() => setShow(show => !show)} 
                        className={`${btnStyles.Button} ${btnStyles.Wide2} ${btnStyles.Bright}`}>
                        Add Scene</Button>
                        {!show ?("") : (<SceneScheduleCreate xday={dataDay} xdate={dataDate} /> ) }
                    </Col>
                </Row>
                <Container className={`mt-4`} >
                    {dayScenes.results.length ? (
                        dayScenes.results.map((scene) => (
                            // <p>{scene.id}...{scene.day}..{scene.day_id}</p>
                            <ScheduleScene {...scene} dayid= {id} key={scene.id} />
                        ))) : ("")}
                </Container> 
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
