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
import DayPageTop from './DayPageTop';
import SceneScheduleCreate from './SceneScheduleCreate';
import ScheduleScene from './ScheduleScene';

const DayPage = () => {
    useRedirect("loggedOut");
    const [show, setShow] = useState(false);
    const { id } = useParams();
    // const [day_int_id, setDay_int_id] = useState();
    const [dayData, setDayData] = useState({ results: [] });
    const [dayScenes, setDayScenes] = useState({ results: [] });
    const [dataDay, setDataDay] = useState();
    const [dataDate, setDataDate] = useState();
    const currentUser = useCurrentUser();
    const history = useHistory();

    useEffect(() => {
        const handleMount = async () => {
            try {
                const [{ data: dayGet }, { data: scenes }] = await Promise.all([
                    axiosReq.get(`/days/${id}`),
                    axiosReq.get(`/schedule/scenes/?day_id=${id}`),
                ])
                console.log(scenes)
                setDayData({ results: [dayGet] });
                // setDayScenes({ results: [scenes]} )
                setDayScenes(scenes )
                setDataDay(dayGet.day)
                setDataDate(dayGet.date);
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
                    <h3 className='text-center'>Add scenes to schedule</h3>
                    <Button onClick={() => setShow(show => !show)} 
                    className={`${btnStyles.Button} ${btnStyles.Wide2} ${btnStyles.Bright}`}>
                    Add Scene</Button>
                    {!show ?("") : (<SceneScheduleCreate day={dataDay} date={dataDate} /> ) }
                </Col>
            </Row>
            <hr />
            {/* Scenes */}
            <Row>
                <Col>
                <h3 className='text-center'>Day Shooting Scene Order</h3>
                <Container className= {`mt-4`} >
                    {dayScenes.act}
                    {dataDay}
                    {/* {dayScenes.results.length ? (
                        dayScenes.results.map((scene) => (
                            <p>{scene.act} </p>
                            // <ScheduleScene {...scene} key={scene.id} />
                        ))) : ("")} */}
                </Container> 
                </Col>
            </Row>
        </div>
    )
}

export default DayPage
