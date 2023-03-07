import React from 'react';
import { useRedirect } from '../../../hooks/Redirect';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ScheduleScene from '../../schedule/ScheduleScene';
import styles from "../../../styles/DayPage.module.css";

const CallsheetSchedule = ({scenes, showSideBySide, callsheetshed, setShowSchedule}) => {
    useRedirect("loggedOut");    
    
  return (
    <div>
        {/* titles */}
        <div className='d-none d-md-block'>
        <h5 className={`text-center mt-3 py-0 ${styles.SubTitle }`} >SCHEDULE</h5> 
            <Row style={{ textTransform: 'uppercase' }} 
            className={`text-center mx-0  ${styles.TitleBox}`} >
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                    <p className='mb-0'>Time</p>
                </Col>
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                    <p className='mb-0 pl-2'>Scene</p>
                </Col>
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={4} md={4}>
                    <p className='mb-0'>Details</p>
                </Col>
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={2} md={3}>
                <p className='mb-0'>Filming </p>                        
                </Col>
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                    <p className='mb-0'>P</p>
                </Col>
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                    <p className='mb-0'>Cast</p>
                </Col>
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                    <p className='mb-0'>Info</p>
                </Col>
            </Row>
        </div>
        <Row>
            <Col >                   
            {scenes.results.length ? (
                scenes.results.map((scene, index) => (
                    <ScheduleScene
                        style={{ backgroundColor: (index % 3 === 0) 
                            ? '#dbfaf9' : (index % 2 === 0) ? 
                            'rgb(223 254 240)' : 'rgb(248 241 249)' }}
                        {...scene} 
                        callsheetshed={callsheetshed}
                        showSideBySide={showSideBySide}
                        sceneAll={scene} 
                        key={scene.id} />
                ))) : ("")}
            </Col>
        </Row>
    </div>
  )
}

export default CallsheetSchedule