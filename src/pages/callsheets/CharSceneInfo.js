import React from 'react';
import { useRedirect } from '../../hooks/Redirect';
import { Col, Row } from 'react-bootstrap';
import styles from "../../styles/ScheduleCreate.module.css";

const CharSceneInfo = props => {
    useRedirect("loggedOut");
    const {number, int_ext, start_time,
        location, filming_location, day_night, action, pages,
        new_info, style, 
        character1_number, character2_number, character3_number,
        character4_number, character5_number, character6_number, 
        character7_number, character8_number, character9_number,
        character10_number, character11_number, character12_number,
        other_characters_numbers, } = props
  return (
    <div>CharSceneInfo</div>
  )
}

export default CharSceneInfo