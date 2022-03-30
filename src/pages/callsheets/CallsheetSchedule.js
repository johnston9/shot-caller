import React from 'react';
import { useRedirect } from '../../hooks/Redirect';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// import ScheduleScene from '../schedule/ScheduleScene';
import styles from "../../styles/DayPage.module.css";
import CharScheduleScene from './CharScheduleScene';

const CallsheetSchedule = ({scenes}) => {
    useRedirect("loggedOut");
  return (
    <div>
        {/* titles */}
        <div className='d-none d-md-block'>
        <h5 className={`text-center mt-3 py-0 ${styles.SubTitle }`} >SCHEDULE</h5> 
            <Row style={{ textTransform: 'uppercase' }} className={`text-center mx-0  ${styles.TitleBox}`} >
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                    <p className='mb-0 pl-2'>Edit</p>
                </Col>
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                    <p className='mb-0'>Time</p>
                </Col>
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                    <p className='mb-0 pl-2'>Scene</p>
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
                    <CharScheduleScene
                    {...scene} 
                        sceneAll={scene} 
                        key={scene.id} />
                    // <ScheduleScene
                    //     style={{ backgroundColor: (index % 3 === 0) ? '#dbfaf9' : (index % 2 === 0) ? 'rgb(199 245 224)' : 'rgb(244 232 245)' }}
                    //     {...scene} 
                    //     sceneAll={scene} 
                    //     key={scene.id} />
                ))) : ("")}
            </Col>
        </Row>
    </div>
  )
}

export default CallsheetSchedule