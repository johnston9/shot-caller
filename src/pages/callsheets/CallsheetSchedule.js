import React, { useEffect, useState } from 'react';
import { axiosReq } from '../../api/axiosDefaults';
import { useRedirect } from '../../hooks/Redirect';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useParams, useHistory } from 'react-router-dom';
import ScheduleScene from '../schedule/ScheduleScene';

const CallsheetSchedule = ({scenes}) => {
    useRedirect("loggedOut");
    const { id } = useParams();
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