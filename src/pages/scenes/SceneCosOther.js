import React, { useState } from 'react'
import { useRedirect } from '../../hooks/Redirect';
import styles from "../../styles/Scene.module.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const SceneCosOther = ({scene}) => {
    useRedirect("loggedOut");
    const {other_characters_costumes } = scene;
    return (
        <div>
            <Row className='pl-1'>
                <Col  xs={12} >
                <p >{other_characters_costumes} </p>
                </Col>
            </Row>           
        </div>
    )
}

export default SceneCosOther
