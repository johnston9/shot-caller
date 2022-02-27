import React from 'react';
import { useRedirect } from '../../hooks/Redirect';
import { Col, Row } from 'react-bootstrap';
import Card from "react-bootstrap/Card";
import styles from "../../styles/ScheduleCreate.module.css";

const SchedSceneInfo = (props) => {
    useRedirect("loggedOut");
     const {day, date, info,
            act, title, content, location_address,
            time, new_content, pages } = props
    return (
        <div className={`px-3 pb-3 ${styles.SceneBox}`}>
            <p className={`text-center mt-1 mb-0 ${styles.Bold}`}>Day {day} - {date} </p>
            <p className={`mt-1 pl-3 mb-0 py-1 ${styles.SubTitle }`}></p>
            <Row className='text-center'>
                <Col xs={12} md={6} >
                <p className={`mb-0 mt-2 mx-5 ${styles.BoldTitle }`} >Act/Pages/Time </p>
                <p className='mb-0'>{act} / {pages} / {time} </p>
                <hr className='my-0'/>
                </Col>
                <Col xs={12} md={6}>
                <p className={`mb-0 mt-2 mx-5 ${styles.BoldTitle }`}>Scene Heading </p>
                <p className='mb-0'><span style={{ textTransform: 'italic' }} >{title} </span> </p>
                <hr className='my-0'/>
                </Col>
            </Row>
            <Row className='text-center'>
                <Col xs={12} md={6} >
                <p className={`mb-0 mt-2 mx-5 ${styles.BoldTitle }`} >Shoot Address </p>
                <p className='mb-0'>{location_address} </p>
                <hr className='my-0'/>
                </Col>
                <Col xs={12} md={6}>
                <p className={`mb-0 mt-2 mx-5 ${styles.BoldTitle }`}>Equip/Set</p>
                <p className='mb-0'><span style={{ textTransform: 'italic' }} >{info} </span> </p>
                <hr className='my-0'/>
                </Col>
            </Row>
            <Row className='text-center'>
                <Col xs={12} md={6} >
                <p className={`mb-0 mt-2 mx-5 ${styles.BoldTitle }`} >Scene Content </p>
                <p className='mb-0'>{content} </p>
                <hr className='my-0'/>
                </Col>
                <Col xs={12} md={6}>
                <p className={`mb-0 mt-2 mx-5 ${styles.BoldTitle }`}>New Content</p>
                <p className='mb-0'>{new_content} </p>
                </Col>
            </Row>
        </div>
    )
}

export default SchedSceneInfo
