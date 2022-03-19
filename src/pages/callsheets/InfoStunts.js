import React from 'react';
import { useRedirect } from '../../hooks/Redirect';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../styles/Callsheets.module.css";
import { Image } from 'react-bootstrap';

const InfoStunts = ({crewInfoOne}) => {
  useRedirect("loggedOut");
  const {stunt_coordinator_name, stunt_coordinator_email, stunt_coordinator_phone,
    stunts_1_name, stunts_1_email, stunts_1_phone,
    stunts_2_name, stunts_2_email, stunts_2_phone,
    stunts_3_name, stunts_3_email, stunts_3_phone,
    stunts_4_name, stunts_4_email, stunts_4_phone,
    stunts_5_name, stunts_5_email, stunts_5_phone,} = crewInfoOne || {};
  return (
    <div>InfoStunts</div>
  )
}

export default InfoStunts