import React, { useState } from 'react'
import { useRedirect } from '../../hooks/Redirect';
import styles from "../../styles/Scene.module.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const SceneCosBack = ({scene}) => {
    const {background_artists_costumes} = scene;
    useRedirect("loggedOut");
    return (
        <div>
            <Row className='pl-1'>
                <Col xs={12} >
                <p className='mb-0'>{background_artists_costumes} </p>
                </Col>
            </Row> 
        </div>
    )
}

export default SceneCosBack
