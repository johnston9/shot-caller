import React from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../../styles/Scene.module.css";
import { useRedirect } from '../../../hooks/Redirect';

const ShotInfo = (props) => {
    useRedirect("loggedOut");
     const {fx, focus_pulls, lighting, camera, lens, equipment,
        script_length, script_ref, storyboard_refs, audio,
        movement } = props
    return (
        <div className={`${styles.InfoBack} mx-3 pt-3 pl-5`}>
            <Row>
                <Col xs={12} md={4} className="" >
                <p className='mb-0'><span className={`${styles.Bold}`}>Camera/Lens:</span> {camera} {lens} </p>         
                <p className='mb-0'><span className={`${styles.Bold}`}>Focus Pulls:</span> {focus_pulls}</p>
                <p className='mb-0'><span className={`${styles.Bold}`}>Equipment:</span> {equipment}</p>
                <p className='mb-0 d-block d-md-none'><span className={`${styles.Bold}`}>Equipment:</span> {movement}</p>
                </Col>
                <Col xs={12} md={4} className="" >        
                <p className='mb-0'><span className={`${styles.Bold}`}>Script Length:</span> {script_length} </p>
                <p className='mb-0'><span className={`${styles.Bold}`}>Script Ref:</span> {script_ref} </p>
                <p className='mb-0'><span className={`${styles.Bold}`}>Storyboard Ref:</span> {storyboard_refs} </p>
                </Col>
                <Col className="" xs={12} md={4}>
                    <p className='mb-0'><span className={`${styles.Bold}`}>Lighting:</span> {lighting} </p>
                    <p className='mb-0'><span className={`${styles.Bold}`}>FX:</span> {fx} </p>
                    <p className='mb-0'><span className={`${styles.Bold}`}>Audio:</span> {audio} </p>                   
                </Col>
            </Row>
            <hr className='mt-4'/>    
        </div>
    )
}

export default ShotInfo
