/* Component containing the Schedule Scene data
 * Contains the ScheduleInfo component that contains each scenes 
   extra data
 * Contains the ScheduleCharacters component that contains
   each scene's characters and BG data */
import React, { useState } from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../../styles/Callsheets.module.css";
import ScheduleInfo from './ScheduleInfo';
import btnStyles from "../../../styles/Button.module.css";
import { Button, } from 'react-bootstrap';
import ScheduleCharacters from './ScheduleCharacters';

const ScheduleScene = (props) => {
    const [showInfo, setShowInfo] = useState(false);
    const [showInfoCast, setShowInfoCast] = useState(false);
    const {showSideBySide, scene, scene_id, style, next,
        filming_location, pages, action, day_night,
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
                    <p style={{ textTransform: 'uppercase'}} className='mb-0'>{int_ext}. {location} - {day_night} </p>
                </Col>
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={3} md={3}>
                <p className='mb-0'>{filming_location} </p>                        
                </Col>
                {/* showSideBySide  used for the add castand schedule
                   are opened side by side*/}
                {showSideBySide ? (
                    <>
                    <Col xs={2} md={2} className={`mx-0 px-0 pb-1 ${styles.TitleBox2}`}>
                    <Button onClick={() => setShowInfoCast(showInfoCast => !showInfoCast)} 
                    className={`${btnStyles.Button} ${btnStyles.Shed}`}>
                    Cast
                    </Button>
                    </Col>
                    <Col className={`mx-0 px-0 `} xs={1} md={1}>
                    <Button onClick={() => setShowInfo(showInfo => !showInfo)} 
                        className={`${btnStyles.Button} ${btnStyles.Shed}`}>
                        I
                    </Button>
                    </Col>
                    </>
                ) : (
                    <>
                    <Col className={`mx-0 px-0 ${styles.TitleBox2}`}xs={1} md={1}>
                    <p >{pages}</p>
                    </Col>
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
                    </>
                ) }
            </Row>
            <Row>
                <Col>
                    {!showInfo ?("") : (                       
                    <ScheduleInfo
                    style={style}
                    {...scene}/> 
                    ) }
                    {/* cast  */}
                    {!showInfoCast ?("") : (                       
                    <ScheduleCharacters 
                    style={style}
                    showSideBySide={showSideBySide}
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
                    <p className='mb-0'>{start_time}</p>
                    {/* <p onClick={() => setShowInfo(showInfo => !showInfo)} 
                    className={`${styles.Info} mt-4`}>INFO</p> */}
                </Col>
                <Col className={` mx-0 px-0 ${styles.TitleBox2}`} xs={8}>
                    <p style={{ textTransform: 'uppercase'}} className='mb-0'>{int_ext}. {location} - {day_night}</p>
                    <hr className={`${styles.HrSched} my-0 mx-3`}></hr>
                    {/* <p className='mb-0'>{action}</p> */}
                    <p className='mb-0'>{filming_location}</p>
                </Col>
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={2}>
                    <p className='mb-0'>{number}</p>
                    {/* <p onClick={() => setShowInfoCast(showInfoCast => !showInfoCast)} 
                    className={`${styles.Info} mt-4`}>CAST</p> */}
                </Col>
                </Row>
                <hr className={`${styles.HrSched} my-0 mx-3`}></hr>
                <Row>
                <Col className={`text-right`} xs={6} >
                <p onClick={() => setShowInfo(showInfo => !showInfo)} 
                    className={`${styles.Info}`}>INFO</p>
                </Col>
                <Col xs={6}>
                <p onClick={() => setShowInfoCast(showInfoCast => !showInfoCast)} 
                    className={`${styles.Info}`}>CAST</p>
                </Col>
               </Row>
            {/* info cast */}
            <Row>
                <Col>
                    {!showInfo ?("") : (                       
                    <ScheduleInfo
                    style={style}
                    {...scene}/> 
                    ) }
                    {/* cast  */}
                    {!showInfoCast ?("") : (                       
                    <ScheduleCharacters 
                    style={style}
                    showSideBySide={showSideBySide}
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