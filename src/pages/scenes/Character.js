import React from 'react'
import { useRedirect } from '../../hooks/Redirect';
import styles from "../../styles/Scene.module.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Character = ({cast_number, role, costume}) => {
    console.log(cast_number)
    useRedirect("loggedOut");

    return ( 
        <div className='mx-3 px-2'>
        <Row >
        <Col className='text-center ' xs={2} >
        <p >{cast_number} </p>
        </Col>
        <Col xs={6} className='text-center '>
        <p >{role} </p>
        </Col>
        <Col xs={4} className='text-center '>
        <p >{costume} </p>
        </Col>
        </Row>
        <hr />
        </div>
    )
}

export default Character