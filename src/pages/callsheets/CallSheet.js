import React, { useEffect, useState } from 'react';
import { axiosReq } from '../../api/axiosDefaults';
import { useRedirect } from '../../hooks/Redirect';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import styles from "../../styles/DayPage.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";
import DayPageTop from '../schedule/DayPageTop';
import SceneScheduleCreate from '../schedule/SceneScheduleCreate';
import ScheduleScene from '../schedule/ScheduleScene';
import TopBox from '../../components/TopBox';
import Asset from '../../components/Asset';
import { useParams, useHistory } from 'react-router-dom';

const CallSheet = () => {
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
    const [hasOrder, setHasOrder] = useState(false);

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
                setHasOrder(false)
            } catch (err) {
                console.log(err);
              }
        }
        handleMount();
    }, [id, hasOrder])

  return (
    <div>
        <TopBox work={`Call Sheet`}
                title={`Day ${dataDay}`}
                title2={dataDate}  />
        <Button
            className={`${btnStyles.Button} ${btnStyles.Blue} mt-1`}
            onClick={() => history.goBack()}
        >
            Back
        </Button>
        {/* top */}
        <Row>
            <Col xs={4} >
            <div>
            <h5>Production Company</h5>
            <h5>Production Company Address</h5>
            <h5>Production Company Phone</h5>
            <h5>Production Company email</h5>
            </div>
            <div>
            <h5>Producer</h5>
            <h5>Coordinator</h5>
            <h5>Director</h5>
            <h5>1st AD</h5>
            <h5>DoP</h5>
            </div>
            </Col>
            <Col xs={4} >
            <div>
            <h5>Production Name</h5>
            <h5>Production Company Logo</h5>
            </div>
            <div>
            <h3>Unit Call Time</h3>
            <h5>First Location Address</h5>
            </div>
            </Col>
            <Col>
            <div>
            <h5>Weather</h5>
            <h5>Sunrise</h5>
            <h5>Sunset</h5>
            </div>
            <div>
            <h5>Nearest Hospital</h5>
            <h5>Hospital Address</h5>
            <h5>Sunset</h5>
            </div>
            <div>
            <h5>Talent Call</h5>
            <h5>Furst Shot</h5>
            <h5>Lunch</h5>
            <h5>Est. Wrap</h5>
            </div>
            </Col>
        </Row>
        {/* Locations */}
        <h4>Locations</h4>
        {/* Titles */}
        <Row>
            <Col>
            <h5>Basecamp</h5>
            </Col>
            <Col>
            <h5>Crew Park</h5>
            </Col>
            <Col>
            <h5>Teck Trucks</h5>
            </Col>
            <Col>
            <h5>BG holding</h5>
            </Col>
            <Col>
            <h5>BG Parking</h5>
            </Col>
            <Col>
            <h5>Parking and Notes Name</h5>
            </Col>
            <Col>
            <h5>Nearest Hostipal</h5>
            </Col>
            <Col>
            <h5>Google Maps</h5>
            </Col>
        </Row>
        {/* Locations */}
        <h4>Locations</h4>
        {/* Titles */}
        <Row>
            <Col>
            <h5>Number</h5>
            </Col>
            <Col>
            <h5>Location Name</h5>
            </Col>
            <Col>
            <h5>Location Address</h5>
            </Col>
            <Col>
            <h5>Parking and Notes Name</h5>
            </Col>
            <Col>
            <h5>Nearest Hostipal</h5>
            </Col>
            <Col>
            <h5>Google Maps</h5>
            </Col>
        </Row>
        {/* actual */}
        <Row>
            <Col>
            <h5>Number</h5>
            </Col>
            <Col>
            <h5>Location Name</h5>
            </Col>
            <Col>
            <h5>Location Address</h5>
            </Col>
            <Col>
            <h5>Parking and Notes Name</h5>
            </Col>
            <Col>
            <h5>Nearest Hostipal</h5>
            </Col>
            <Col>
            <h5>Google Maps</h5>
            </Col>
        </Row>
        {/* Important Notes */}
        <Row>
            <Col>
            <h5>Important Notes</h5>
            </Col>
        </Row>
        {/* Schedule - add (1/8 and Dramatic Day) */}
        <Row>
            <Col>
            <h5>Schedule</h5>
            </Col>
        </Row>
        {/* Crew Contacts */}
        <Row>
            <Col>
            <h5>Role</h5>
            </Col>
            <Col>
            <h5>Name</h5>
            </Col>
            <Col>
            <h5>Contact Info</h5>
            </Col>
            <Col>
            <h5>Call Time</h5>
            </Col>
        </Row>
        {/* Talent */}
        <Row>
        <Col>
            <h5>Number</h5>
            </Col>
            <Col>
            <h5>Role</h5>
            </Col>
            <Col>
            <h5>Artist</h5>
            </Col>
            <Col>
            <h5>Contact Info</h5>
            </Col>
            <Col>
            <h5>SWF</h5>
            </Col>
            <Col>
            <h5>Pickup</h5>
            </Col>
            <Col>
            <h5>Call</h5>
            </Col>
            <Col>
            <h5>H/M/W</h5>
            </Col>
            <Col>
            <h5>On Set</h5>
            </Col>
            <Col>
            <h5>Inst. misc.</h5>
            </Col>
        </Row>
        {/* BG */}
        <Row>
        <Col>
            <h5>Number</h5>
            </Col>
            <Col>
            <h5>Role</h5>
            </Col>
            <Col>
            <h5>Artist</h5>
            </Col>
            <Col>
            <h5>Contact Info</h5>
            </Col>
            <Col>
            <h5>SWF</h5>
            </Col>
            <Col>
            <h5>Pickup</h5>
            </Col>
            <Col>
            <h5>Call</h5>
            </Col>
            <Col>
            <h5>H/M/W</h5>
            </Col>
            <Col>
            <h5>On Set</h5>
            </Col>
            <Col>
            <h5>Inst. misc.</h5>
            </Col>
        </Row>
        {/* Transport Notes */}
        <Row>
            <Col>
            <h5>Transport Notes</h5>
            </Col>
        </Row>
        {/* Department Notes */}
        <Row>
            <Col>
            <h5>Department Notes</h5>
            </Col>
        </Row>
        {/* Advanced Callsheet */}
        <Row>
            <Col>
            <h5>Advanced Callsheet</h5>
            </Col>
        </Row>
    </div>
  )
}

export default CallSheet