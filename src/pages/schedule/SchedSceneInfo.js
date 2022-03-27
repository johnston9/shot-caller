import React from 'react';
import { useRedirect } from '../../hooks/Redirect';
import { Col, Row } from 'react-bootstrap';
import styles from "../../styles/ScheduleCreate.module.css";

const SchedSceneInfo = (props) => {
    useRedirect("loggedOut");
     const { title, dramatic_day, location_address,
            equip_set_props, new_info,
            department_info } = props
    return (
        <div className={`mb-2 mx-5 pb-2 px-5 ${styles.SceneBox}`}>
            {/* <p className={`text-center mt-1 mb-0 ${styles.Bold}`}>Day {day} - {date} </p>
            <p className={`mt-1 pl-3 mb-0 py-1 ${styles.SubTitle }`}></p> */}
            <Row className='text-center'>
                <Col className='mx-0 px-0' xs={12} md={6} >
                <span className={`mb-0 mt-2 px-5 ${styles.BoldTitle }`} >Heading - DD </span>
                <p className='mb-0'>{title} - {dramatic_day} </p>
                {/* <hr className='my-0'/> */}
                </Col>
                <Col className='mx-0 px-0' xs={12} md={6} >
                <span className={`mb-0 mt-2 px-5 ${styles.BoldTitle }`} >Shoot Address </span>
                <p className='mb-0'>{location_address} </p>
                </Col>
            </Row>
            <Row className='text-center'>
                <Col className='mx-0 px-0' xs={12} md={6}>
                <span className={`mb-0 mt-2 px-4 ${styles.BoldTitle }`}>Equip Set Props</span>
                <p className='mb-0'><span style={{ textTransform: 'italic' }} >{equip_set_props} </span> </p>
                </Col>
                <Col className='mx-0 px-0' xs={12} md={6}>
                <span className={`mb-0 mt-2 px-5 ${styles.BoldTitle }`}>New Info</span>
                <p className='mb-0'><span style={{ textTransform: 'italic' }} >{new_info} </span> </p>
                </Col>
            </Row>
            <Row className='text-center'>
                <Col className='mx-0 px-0' xs={12} >
                <span className={`mb-0 mt-2 px-3 ${styles.BoldTitle }`} >Department Info </span>
                <p className='mb-0'>{department_info} </p>
                </Col>
            </Row>
        </div>
    )
}

export default SchedSceneInfo
