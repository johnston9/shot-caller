import React from 'react';
import { useRedirect } from '../../hooks/Redirect';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../styles/Callsheets.module.css";
import { Image } from 'react-bootstrap';

const infoElectric = ({crewInfoOne}) => {
  useRedirect("loggedOut");
  const {gaffer_name, gaffer_email, gaffer_phone,
    best_boy_electric_name, best_boy_electric_email, best_boy_electric_phone,
    electric_3_name, electric_3_email, electric_3_phone,
    electric_4_name, electric_4_email, electric_4_phone,
    keygrip_name, keygrip_email, keygrip_phone,
    best_boy_grip_name, best_boy_grip_email, best_boy_grip_phone,
    dolly_grip_name, dolly_grip_email, dolly_grip_phone,
    swing_ge1_name, swing_ge1_email, swing_ge1_phone,
    swing_ge2_name, swing_ge2_email, swing_ge2_phone,
    swing_ge3_name, swing_ge3_email, swing_ge3_phone,
    swing_ge4_name, swing_ge4_email, swing_ge4_phone,
    swing_ge5_name, swing_ge5_email, swing_ge5_phone,} = crewInfoOne || {};
  return (
    <div>infoElectric</div>
  )
}

export default infoElectric