/* Component in the ScheduleScene to display the extra info */
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styles from "../../../styles/ScheduleCreate.module.css";

const SchedSceneInfo = (props) => {
     const { title, dramatic_day, location_address, action,
            equip_set_props, new_info, style, department_info,
             } = props
    return (
        <div className={`text-center py-2 mb-2 mx-2 px-2 ${styles.SceneBox}`}>
        <Row className='text-center mt-3'>
            <Col className={`${styles.BorderRight} mx-0 px-1 mb-0 pb-1`} xs={12} sm={6} >
            <p className={`mb-2 mx-3 mx-sm-5 ${styles.Bold}`} style={style} >
                TITLE - DRAMA. DAY </p>
            <p className='pb-3 pb-sm-0'>{title} - {dramatic_day} </p>
            </Col>
            <Col xs={12} sm={6} className={`mx-0 px-1 mb-0 pb-1`} >
            <p className={`mb-2 mx-3 mx-sm-5 ${styles.Bold}`} style={style}>
            ACTION</p>
            <p className='pb-0 pb-sm-0'>{action} </p>
            </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col xs={12}>
        <hr className={`d-none d-md-block ${styles.Break1} mb-0`}/>
        </Col>
        </Row>
        <Row className='text-center mt-3'>
        <Col xs={12} sm={6} className={`mx-0 px-1 mb-0 pb-1 ${styles.BorderRight}`} >
            <p className={`mb-2 mx-3 mx-sm-5 ${styles.Bold}`} style={style}>
            FILMING ADDRESS </p>
            <p className=''>{location_address} </p>
            </Col>
        <Col className={`mx-0 px-1 mb-0 pb-1 mt-3 mt-md-0`} xs={12} sm={6}>
            <p className={`mb-2 mx-3 mx-sm-5 ${styles.Bold}`} style={style}>
                EQUIP - SET - PROPS</p>
            <p >{equip_set_props} </p>
            </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col xs={12}>
        <hr className={`d-none d-md-block ${styles.Break1} mb-0`}/>
        </Col>
        </Row>
        <Row className='text-center mt-3'>
            <Col className={`mx-0 px-1 mb-0 pb-1`} xs={12}>
            <p className={`mb-2 mx-3 mx-sm-5 ${styles.Bold}`} style={style}>
                DEPARTMENT INFO </p>
            <p >{department_info} </p>
            <p className='mt-2'>{new_info}</p>
            </Col>
        </Row>
        </div>
    )
}

export default SchedSceneInfo
