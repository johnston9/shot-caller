import React, { useEffect, useState } from 'react';
import { axiosReq } from '../../api/axiosDefaults';
import { useRedirect } from '../../hooks/Redirect';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import btnStyles from "../../styles/Button.module.css";
import TopBox from '../../components/TopBox';
import { useParams, useHistory } from 'react-router-dom';
import CallSheet from './CallSheet';

const CallSheetPage = () => {
    useRedirect("loggedOut");
    const { id } = useParams();
    const [callsheet, setCallsheet] = useState({ results: [] });
    // eslint-disable-next-line
    const [cast, setCast] = useState({ results: [] });
    // eslint-disable-next-line
    const [background, setBackground] = useState({ results: [] });
    const [scenes, setScenes] = useState({ results: [] });
    const [dataDay, setDataDay] = useState("");
    const [dataDate, setDataDate] = useState("");
    const history = useHistory();
    const [hasLoaded, setHasLoaded] = useState(false);
    const admin = true;

    useEffect(() => {
        const handleMount = async () => {
            try {
                const [{ data: callsheetdata }, { data: castcalldata }, 
                    { data: bgcalldata }, { data: scenes }] = await Promise.all([
                    axiosReq.get(`/callsheetsnew/?day_id=${id}`),
                    axiosReq.get(`/castcallsnew/?day_id=${id}`),
                    axiosReq.get(`/backgroundcallsnew/?day_id=${id}`),
                    axiosReq.get(`/schedule/scenes/?day_id=${id}`),
                ])
                setCallsheet(callsheetdata);
                setCast(castcalldata);
                setBackground(bgcalldata);
                setScenes(scenes);
                setDataDay(callsheetdata.results[0].day)
                setDataDate(callsheetdata.results[0].date);
                setHasLoaded(true);
            } catch (err) {
                console.log(err);
              }
        }
        handleMount();
    }, [id])

  return (
    <div >
        <TopBox work={`Call Sheet`}
                title={`Day ${dataDay}`}
                title2={dataDate}  />
        <Button
            className={`${btnStyles.Button} ${btnStyles.Blue} mt-1`}
            onClick={() => history.goBack()}
        >
            Back
        </Button>
        {/* top {...callsheet.results[0]}  */}
        <Row className='mt-3'>
            <Col>
            {hasLoaded ? (
                <CallSheet 
                {...callsheet.results[0]}
                scenes={scenes}
                cast={cast}
                background={background}
                admin={admin}
                />
            ) : (
                ""
            )}
            </Col>
        </Row>
    </div>
  )
}

export default CallSheetPage