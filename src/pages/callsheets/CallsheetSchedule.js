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
import DayPageTop from './DayPageTop';
import SceneScheduleCreate from './SceneScheduleCreate';
import ScheduleScene from './ScheduleScene';
import TopBox from '../../components/TopBox';
import Asset from '../../components/Asset';
import { useParams, useHistory } from 'react-router-dom';
import CallsheetCreate from '../callsheets/CallsheetCreate';
import { Link } from 'react-router-dom';

const CallsheetSchedule = ({scenes}) => {
    useRedirect("loggedOut");
    const [show, setShow] = useState(false);
    const [showCall, setShowCall] = useState(false);
    const { id } = useParams();
    const [dayData, setDayData] = useState({ results: [] });
    const [dayScenes, setDayScenes] = useState({ results: [] });
    const [dataId, setDataId] = useState("");
    const [dataDay, setDataDay] = useState("");
    const [dataDate, setDataDate] = useState("");
    const history = useHistory();
    const [hasLoaded, setHasLoaded] = useState(false);
    const [hasOrder, setHasOrder] = useState(false);
  return (
    <div>
        <Row>
            <Col >                   
            {scenes.results.length ? (
                scenes.results.map((scene, index) => (
                    <ScheduleScene
                        style={{ backgroundColor: (index % 3 === 0) ? '#dbfaf9' : (index % 2 === 0) ? 'rgb(199 245 224)' : 'rgb(244 232 245)' }}
                        {...scene} 
                        dayid={id} 
                        sceneAll={scene} 
                        // setHasOrder={setHasOrder}
                        key={scene.id} />
                ))) : ("")}
            </Col>
        </Row>
    </div>
  )
}

export default CallsheetSchedule