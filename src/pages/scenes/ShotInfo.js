import React, { useEffect, useState } from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import styles from "../../styles/ScheduleCreate.module.css";
import { useRedirect } from '../../hooks/Redirect';
import appStyles from "../../App.module.css";

const ShotInfo = (props) => {
    useRedirect("loggedOut");
     const {fx, focus_pulls, lighting, camera, lens, equipment,
        script_length, script_ref, storyboard_refs, audio, } = props
    return (
        <div>
            <Row>
                <Col md={4} >
                <p className='mb-0'>Camera: {camera} </p>
                <p className='mb-0'>Lens: {lens} </p>           
                <p className='mb-0'>Script Length: {script_length} </p>
                <p className='mb-0'>Script Ref: {script_ref} </p>
                <p className='mb-0'>Script Refs: {storyboard_refs} </p>
                </Col>
                <Col className={` ${styles.TitleBox2}`} md={8}>
                    <p className='mb-0'>{equipment}</p> 
                    <p className='mb-2'>Focus Pulls: {focus_pulls}</p>
                    <p className='mb-0'>Lighting: {lighting} </p>
                    <p className='mb-0'>FX: {fx} </p>
                    <p className='mb-0'>Audio: {audio} </p>                     
                </Col>
            </Row>
            <hr className='mt-4'/>    
        </div>
    )
}

export default ShotInfo
