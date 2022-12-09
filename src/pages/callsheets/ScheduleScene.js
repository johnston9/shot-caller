import React, { useState } from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../styles/Callsheets.module.css";
import { useRedirect } from '../../hooks/Redirect';
import SchedSceneInfo from './SchedSceneInfo';
import btnStyles from "../../styles/Button.module.css";
import { Button, } from 'react-bootstrap';
import ScheduleCharacters from './ScheduleCharacters';

const ScheduleScene = (props) => {
    useRedirect("loggedOut");
    const [show, setShow] = useState(false);
    const [showInfo, setShowInfo] = useState(false);
    const [showInfoCast, setShowInfoCast] = useState(false);
    const {scene, scene_id, style, next,
        filming_location, action, pages,
        start_time, number, int_ext, location } = props

    return (
        <div style={style} className={` ${styles.Bold}`} > 
        <div className='d-none d-md-block'>
            <Row className='pt-2 text-center mx-0' >
                <Col className={`mx-0 px-0  ${styles.TitleBox2}`} xs={1} md={1}>
                    <p className='mb-0'>{start_time}</p>
                </Col>
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                    <p className='mb-0'>{number}</p>
                </Col>
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={4} md={4}>
                    <p style={{ textTransform: 'uppercase'}} className='mb-0'>{int_ext}. {location}</p>
                </Col>
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={3} md={3}>
                <p className='mb-0'>{filming_location}</p>                        
                </Col>
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`}xs={1} md={1}>
                    <p >{pages}</p>
                </Col>
                {/* all */}
                    <Col xs={1} md={1} className={`mx-0 px-0 pb-1 ${styles.TitleBox2}`}>
                    <Button onClick={() => setShowInfoCast(showInfoCast => !showInfoCast)} 
                    className={`${btnStyles.Button} ${btnStyles.Shed}`}>
                    Cast
                    </Button>
                </Col>
                    <Col className={`mx-0 px-0 `} xs={1} md={1}>
                    <Button onClick={() => setShowInfo(showInfo => !showInfo)} 
                        className={`${btnStyles.Button} ${btnStyles.Shed}`}>
                        Info
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    {!showInfo ?("") : (                       
                    <SchedSceneInfo
                    {...scene}/> 
                    ) }
                    {/* cast  */}
                    {!showInfoCast ?("") : (                       
                    <ScheduleCharacters 
                    scene_id={scene_id}
                    /> 
                    ) }
                </Col>
            </Row>
            {/* next */}
            {next ? (
            <Row className='px-3'>
                <Col className={`mb-0 py-2 ${styles.NextCall}`}>
                <p className="mb-0" >Next: {next} </p>
                </Col>
            </Row> 
            ) : ("") }     
        </div>
        {/* mobile */}
        <div className='d-block d-md-none'>
            <Row className='text-center mx-0 px-0' >
                <Col className={`mx-0 px-0  ${styles.TitleBox2}`} xs={2}>
                {/* <p style={{ textTransform: 'uppercase' }} className={`  ${styles.TitleBox}`}>Time</p> */}
                    <p className='mb-0'>{start_time}</p>
                </Col>
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={2}>
                {/* <p style={{ textTransform: 'uppercase' }} className={`  ${styles.TitleBox}`}>Scene</p> */}
                    <p className='mb-0'>{number}</p>
                </Col>
                <Col className={` mx-0 px-0 ${styles.TitleBox2}`} xs={6}>
                {/* <p style={{ textTransform: 'uppercase' }} className={`text-center ${styles.TitleBox}`}>Details</p> */}
                    {/* <p style={{ textTransform: 'uppercase'}} className='mb-0'>{int_ext} - {location} - {day_night}</p> */}
                    <p style={{ textTransform: 'uppercase'}} className='mb-0'>{location}</p>
                    <p className='mb-0'>{action}</p>
                </Col>
                <Col className={`mx-0 px-0 `} xs={2} md={1}>
                {/* <p style={{ textTransform: 'uppercase' }} className={`text-center ${styles.TitleBox}`}>Info</p> */}
                    <Button onClick={() => setShowInfo(showInfo => !showInfo)} 
                        className={`${btnStyles.Button} ${btnStyles.Shed}`}>
                        I
                    </Button>
                </Col>
            </Row>
            {/* info */}
            <Row>
                <Col>
                    {/* cast  */}
                    {!setShowInfo ?("") : (                       
                    <ScheduleCharacters
                    {...scene}
                    scene_id={scene_id}
                    /> 
                    ) }
                </Col>
            </Row>
            {/* next */}
            {next ? (
                <Row>
                <Col className={`mb-0 py-2 ${styles.NextCall}`}>
                <p className="mb-0" >Next: {next} </p>
                </Col>
            </Row> 
            ) : (
                <Row>
                <Col className={`mb-0 pt-1 ${styles.NextCall}`}>
                </Col>
            </Row> 
            ) }     
        </div>
        </div>
    )
}

export default ScheduleScene