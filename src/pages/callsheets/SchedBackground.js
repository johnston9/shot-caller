import React from 'react'
import { useRedirect } from '../../hooks/Redirect';
import styles from "../../styles/ScheduleSceneItem.module.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const SchedBackground = ({quantity, role, costume,}) => {
    useRedirect("loggedOut");

    return ( 
        <div className='mr-3 px-2'>
        <Row >
        <Col className='px-0 mx-0' xs={2} >
        <p className={`${styles.v} text-center` } >{quantity} </p>
        </Col>
        <Col xs={5} className='px-0 mx-0'>
        <p className={`${styles.v} text-center` } >{role} </p>
        </Col>
        <Col xs={5} className='px-0 mx-0'>
        <p className={`${styles.v} text-center` }>{costume} </p>
        </Col>
        </Row>
        <hr className='py-0 my-0'/>
        </div>
    )
}

export default SchedBackground