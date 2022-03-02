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
    </div>
  )
}

export default CallSheet