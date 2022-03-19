import React from 'react';
import { useRedirect } from '../../hooks/Redirect';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../styles/Callsheets.module.css";
import { Image } from 'react-bootstrap';

const InfoSsript = ({crewInfoOne}) => {
  useRedirect("loggedOut");
  const {writer_name, writer_email, writer_phone,
    catering_co_1_name, catering_co_1_email, catering_co_1_phone,
    catering_co_2_name, catering_co_2_email, catering_co_2_phone,
    catering_co_3_name, catering_co_3_email, catering_co_3_phone,
    craft_service_name, craft_service_email, craft_service_phone,
    crafty_ass_name, crafty_ass_email, crafty_ass_phone,
  } = crewInfoOne || {};
  return (
    <div>InfoSsript</div>
  )
}

export default InfoSsript