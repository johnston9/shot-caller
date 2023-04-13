/* Page to fetch the data for each Moodboard
 * Contains the Moodboard Component to which it passes the data 
 * The word moodshots is used through the app in the urls for 
    Moodboards as it connects with the MootShot App in 
   Shot Caller API in DRF */
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { axiosReq } from '../../api/axiosDefaults';
import { useRedirect } from '../../hooks/Redirect';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Moodshot from './Moodboard';

const MoodboardPage = () => {
    useRedirect();
    const { id } = useParams();
    const [moodshot, setMoodshot] = useState({ results: [] });

    useEffect(() => {
        const handleMount = async () => {
            try {
                const { data } = await axiosReq(`/moodshots/${id}`);
                setMoodshot({ results: [data] });
            } catch (err) {
                console.log(err);
              }
        }
        handleMount();
    }, [id])

    return (
        <div>
            <Row className="h-100">
                <Col>
                <Moodshot {...moodshot.results[0]}
                  moodshot={moodshot.results[0]} />
                </Col>
            </Row>
        </div>
    )
}

export default MoodboardPage
