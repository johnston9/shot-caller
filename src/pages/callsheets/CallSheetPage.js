import React, { useEffect, useState } from 'react';
import { axiosReq } from '../../api/axiosDefaults';
import { useRedirect } from '../../hooks/Redirect';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useParams } from 'react-router-dom';
import CallSheet from './CallSheet';

const CallSheetPage = () => {
    useRedirect("loggedOut");
    const { id } = useParams();
    const [callsheet, setCallsheet] = useState({ results: [] });
    const [cast, setCast] = useState({ results: [] });
    const [currentUser, setCurrentUser] = useState(null);
    const [background, setBackground] = useState({ results: [] });
    const [scenes, setScenes] = useState({ results: [] });
    const [hasLoaded, setHasLoaded] = useState(false);
    const admin = true;

    useEffect(() => {
        const handleMount = async () => {
            try {
                const [{ data: callsheetdata }, { data: castcalldata }, 
                    { data: bgcalldata }, { data: scenes },
                    { data: user }] = await Promise.all([
                    axiosReq.get(`/callsheetsnew/?day_id=${id}`),
                    axiosReq.get(`/castcallsnew/?day_id=${id}`),
                    axiosReq.get(`/backgroundcallsnew/?day_id=${id}`),
                    axiosReq.get(`/schedule/scenes/?day_id=${id}`),
                    axiosReq.get("dj-rest-auth/user/"),
                ])
                setCallsheet(callsheetdata);
                setCast(castcalldata);
                setBackground(bgcalldata);
                setScenes(scenes);
                setCurrentUser(user.username);
                setHasLoaded(true);
            } catch (err) {
                console.log(err);
              }
        }
        handleMount();
    }, [id])

  return (
    <div >
        <Row className='mt-0'>
            <Col>
            {hasLoaded ? (
                <CallSheet 
                {...callsheet.results[0]}
                callsheet={callsheet.results[0]}
                currentUser={currentUser}
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