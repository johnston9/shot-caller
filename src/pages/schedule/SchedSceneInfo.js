import React from 'react';
import { useRedirect } from '../../hooks/Redirect';
import { Col, Row } from 'react-bootstrap';
import styles from "../../styles/ScheduleCreate.module.css";

const SchedSceneInfo = (props) => {
    useRedirect("loggedOut");
     const { title, dramatic_day, location_address,
            equip_set_props, new_info, filming_location,
            department_info } = props
    return (
        <div className={`mb-2 mx-3 pb-2`}>
            <Row className='text-center'>
                <Col className={`mx-0 px-0 mb-0 ${styles.TitleBox2 }`} xs={6} >
                <p className={`mb-0 ${styles.TitleBox }`} >Heading - DD </p>
                <p style={{ textTransform: 'italic' }} className='mb-0'>{title} - {dramatic_day} </p>
                {/* <hr className='my-0'/> */}
                </Col>
                <Col className={`mx-0 px-0 mb-0 `} xs={6} >
                <p className={`mb-0 ${styles.TitleBox }`} >Location Name </p>
                <p className='mb-0'>{filming_location} </p>
                </Col>
            </Row>
            <Row className='text-center'>
                <Col className={`mx-0 px-0 mb-0 ${styles.TitleBox2 }`} xs={6}>
                <p className={`mb-0 ${styles.TitleBox }`}>Equip Set Props</p>
                <p className='mb-0' >{equip_set_props} </p>
                </Col>
                <Col className='mx-0 px-0' xs={6}>
                <p className={`mb-0 ${styles.TitleBox }`}>Location Address</p>
                <p className='mb-0' >{location_address} </p>
                </Col>
            </Row>
            <Row className='text-center'>
                <Col className={`mx-0 px-0 mb-0 ${styles.TitleBox2 }`} xs={6}>
                <p className={`mb-0 mt-2 ${styles.TitleBox }`} >Department Info </p>
                <p className='mb-0'>{department_info} </p>
                </Col>
                <Col className='mx-0 px-0' xs={6}>
                <p className={`mb-0 mt-2 ${styles.TitleBox }`}>New Info</p>
                <p className='mb-0'><span >{new_info} </span> </p>
                </Col>
            </Row>
        </div>
    )
}

export default SchedSceneInfo
