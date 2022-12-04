import React from 'react'
import { useRedirect } from '../../hooks/Redirect';
import styles from "../../styles/ScheduleSceneItem.module.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
const Character = ({cast_number, role, costume}) => {
    useRedirect("loggedOut");

    return ( 
        <div className={`${styles.n} mx-3 px-2` }>
        <Row >
        <Col className='text-center ' xs={2} >
        <p >{cast_number} </p>
        </Col>
        <Col xs={6} className='text-center '>
        <p >{role} </p>
        </Col>
        <Col xs={4} className='text-center '>
        {costume ? (<p >{costume} </p>) : ("") }
        </Col>
        </Row>
        <hr className='py-0 my-0' />
        </div>
    )
}

export default Character