import React from 'react';
import { useRedirect } from '../../hooks/Redirect';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../styles/Callsheets.module.css";
import { Image } from 'react-bootstrap';

const InfoCamera = ({crewInfoOne}) => {
  useRedirect("loggedOut");
  const {id, dop_name, dop_email, dop_phone,
    camera_operator_name, camera_operator_email, camera_operator_phone,
    camera_ass_1_name, camera_ass_1_email, camera_ass_1_phone,
    camera_ass_2_name, camera_ass_2_email, camera_ass_2_phone,
    dit_name, dit_email, dit_phone,
    steadicam_name, steadicam_email, steadicam_phone,
    camera_pa_name, camera_pa_email, camera_pa_phone,
    oth_camera_pos_1_job, oth_camera_pos_1_name, oth_camera_pos_1_email, oth_camera_pos_1_phone,
    oth_camera_pos_2_job, oth_camera_pos_2_name, oth_camera_pos_2_email, oth_camera_pos_2_phone,
    oth_camera_pos_3_job, oth_camera_pos_3_name, oth_camera_pos_3_email, oth_camera_pos_3_phone,} = crewInfoOne || {};
  return (
    <div>InfoCamera</div>
  )
}

export default InfoCamera