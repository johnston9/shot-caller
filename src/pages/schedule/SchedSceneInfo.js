import React from 'react';
import { useRedirect } from '../../hooks/Redirect';
import { Col, Row } from 'react-bootstrap';
import styles from "../../styles/ScheduleCreate.module.css";

const SchedSceneInfo = (props) => {
    useRedirect("loggedOut");
     const { title, dramatic_day, location_address, day_night,
            equip_set_props, new_info, filming_location,
            department_info } = props
    return (
        <div className={`text-center py-2 mb-2 mx-2 mx-md-5 px-2 ${styles.SceneBox}`}>
        <Row className='text-center'>
            <Col className={`mx-0 px-0 mb-0 pb-1 ${styles.TitleBox2 }`} xs={6} >
            <p className={`mb-0 mx-2 ${styles.TitleBox }`} >
                D/N - Heading - DD </p>
            <p style={{ textTransform: 'italic' }} className='mb-0'>
                {day_night} - {title} - {dramatic_day} </p>
            </Col>
            <Col className={`mx-0 px-0 mb-0 pb-1 `} xs={6} >
            <p className={`mb-0 mx-2 ${styles.TitleBox }`} >
                Location Name </p>
            <p className={`mb-0 ${styles.TitleBox3 }`}>{filming_location} </p>
            </Col>
        </Row>
        <Row className='text-center'>
            <Col className={`mx-0 px-0 mb-0 pb-1 ${styles.TitleBox2 }`} xs={6}>
            <p className={`mb-0 mx-2 ${styles.TitleBox }`}>
                Equip Set Props</p>
            <p className='mb-0' >{equip_set_props} </p>
            </Col>
            <Col className='mx-0 px-0 pb-1' xs={6}>
            <p className={`mb-0 mx-2 ${styles.TitleBox }`}>
                Location Address</p>
            <p className={`mb-0 ${styles.TitleBox3 }`} >{location_address} </p>
            </Col>
        </Row>
        <Row className='text-center'>
            <Col className={`mx-0 px-0 mb-0 pb-1 ${styles.TitleBox2 }`} xs={6}>
            <p className={`mb-0 mx-2 ${styles.TitleBox }`} >
                Department Info </p>
            <p className='mb-0'>{department_info} </p>
            </Col>
            <Col className={`mx-0 px-0 mb-0 pb-1`} xs={6}>
            <p className={`mb-0 mx-2 ${styles.TitleBox }`}>New Info</p>
            <p className={`mb-0 mx-2 ${styles.TitleBox3 }`}>{new_info}</p>
            </Col>
        </Row>
        </div>
    )
}

export default SchedSceneInfo
