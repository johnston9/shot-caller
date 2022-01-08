import React, { useEffect, useState } from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import styles from "../../styles/ScheduleCreate.module.css";
import { useRedirect } from '../../hooks/Redirect';
import appStyles from "../../App.module.css";

const ShotInfo = () => {
    useRedirect("loggedOut");
     const {fx, focus_pulls, lighting, camera, lens,
        script_length, script_ref, storyboard_refs, audio, } = props
    return (
        <div>
            <hr className='mt-4'/>
            <p >Day {day} {date} </p>
            <p className='mb-0'>Camera: {camera} </p>
            <p className='mb-0'>Lens: {lens} </p>
            <p className='mb-2'>Focus Pulls: {focus_pulls}</p>
            <p className='mb-0'>Lighting: {lighting} </p>
            <p className='mb-0'>FX: {fx} </p>
            <p className='mb-0'>Audio: {audio} </p>
            <p className='mb-0'>Script Length: {script_length} </p>
            <p className='mb-0'>Script Ref: {script_ref} </p>
            <p className='mb-0'>Script Refs: {storyboard_refs} </p>    
        </div>
    )
}

export default ShotInfo
