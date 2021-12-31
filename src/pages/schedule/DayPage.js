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

const DayPage = () => {
    useRedirect("loggedOut");
    const [show, setShow] = useState(false);
    const { id } = useParams();
    const [dayData, setDayData] = useState({ results: [] });
    const [dataDay, setDataDay] = useState("");
    const [dataDate, setDataDate] = useState("");
    const currentUser = useCurrentUser();
    const history = useHistory();

    useEffect(() => {
        const handleMount = async () => {
            try {
                const { data } = await axiosReq(`/days/${id}`);
                setDayData({ results: [data] });
                setDataDay(data.day)
                setDataDate(data.date)
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
                    {!show ?("") : (<SceneScheduleCreate id={id} day={dataDay} date={dataDate} /> ) }
                </Col>
            </Row>
            <hr />
            {/* Scenes */}
            <Row>
                <Col>
                <h3 className='text-center'>Day Shooting Scene Order</h3>
                </Col>
            </Row>
        </div>
    )
}

export default DayPage