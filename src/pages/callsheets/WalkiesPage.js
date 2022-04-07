import React from 'react';
import { useRedirect } from '../../hooks/Redirect';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../styles/Callsheets.module.css";

const WalkiesPage = (props ) => {
    useRedirect("loggedOut");
    const {callsheet, setShow} = props;

    const {walkie_channel_production,
        walkie_channel_open,
        walkie_channel_transportation,
        walkie_channel_art_dept,
        walkie_channel_rollover,
        walkie_channel_camera,
        walkie_channel_electric,
        walkie_channel_grip} = callsheet;
  return (
        <div className='mt-3'>
            <div className={`mt-0 text-center ${styles.SubTitle }`}>
            <span className={`float-right ${styles.Close }`} onClick={() => setShow(false) } >Close</span> 
            <h5 className={`pl-5 text-center`} style={{ textTransform: 'uppercase'}} >Walkie Channels </h5>
            </div>
            <Row>
                <Col xs={2} ></Col>
                <Col xs={4}>Production: {walkie_channel_production}</Col>
                <Col xs={4}>Open: {walkie_channel_open}</Col>
            </Row>
            <Row>
                <Col xs={4}>Transport: {walkie_channel_transportation}</Col>
                <Col xs={4}>Art Dept: {walkie_channel_art_dept}</Col>
                <Col xs={4}>Camera: {walkie_channel_camera}</Col>
                <Col xs={4}>Electric: {walkie_channel_electric}</Col>
                <Col xs={4}>Grip: {walkie_channel_grip}</Col>
                <Col xs={4}>Rollover: {walkie_channel_rollover}</Col>
            </Row>
        </div>
  )
}

export default WalkiesPage