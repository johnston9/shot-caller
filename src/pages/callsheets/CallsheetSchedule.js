import React, { useEffect, useState } from 'react';
import { axiosReq } from '../../api/axiosDefaults';
import { useRedirect } from '../../hooks/Redirect';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useParams, useHistory } from 'react-router-dom';
import ScheduleScene from '../schedule/ScheduleScene';
import styles from "../../styles/DayPage.module.css";

const CallsheetSchedule = ({scenes, showSideBySide}) => {
    useRedirect("loggedOut");
    const { id } = useParams();
  return (
    <div>
        {/* titles */}
        <div className='d-none d-md-block'>
        <h5 className={`text-center my-3 py-0 ${styles.SubTitle }`} >SCHEDULE</h5> 
            <Row style={{ textTransform: 'uppercase' }} className={` mx-0  ${styles.TitleBox}`} >
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                    <p className='mb-0 pl-2'>Ed</p>
                </Col>
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                    <p className='mb-0'>Tms</p>
                </Col>
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                    <p className='mb-0 pl-2'>S</p>
                </Col>
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={3} md={3}>
                    <p className='mb-0'>Details</p>
                </Col>
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                    <p className='mb-0'>D/N</p>
                </Col>
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={2} md={2}>
                <p className='mb-0'>Filming</p>                        
                </Col>
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                    <p className='mb-0'>P</p>
                </Col>
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                    <p className='mb-0'>C</p>
                </Col>
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                    <p className='mb-0'>In</p>
                </Col>
            </Row>
        </div>
        <Row>
            <Col >                   
            {scenes.results.length ? (
                scenes.results.map((scene, index) => (
                    <ScheduleScene
                        style={{ backgroundColor: (index % 3 === 0) ? '#dbfaf9' : (index % 2 === 0) ? 'rgb(199 245 224)' : 'rgb(244 232 245)' }}
                        {...scene} 
                        dayid={id} 
                        sceneAll={scene} 
                        showSideBySide={showSideBySide}
                        // setHasOrder={setHasOrder}
                        key={scene.id} />
                ))) : ("")}
            </Col>
        </Row>
    </div>
  )
}

export default CallsheetSchedule