import React from 'react';
import { useRedirect } from '../../hooks/Redirect';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../styles/Callsheets.module.css";
import { Image } from 'react-bootstrap';

const InfoPost = ({crewInfoOne}) => {
  useRedirect("loggedOut");
  const {editor_name, editor_email, editor_phone,
    fx_name, fx_email, fx_phone,
    transport_captain_name, transport_captain_email, transport_captain_phone,
    transport_manager_1_name, transport_manager_1_email, transport_manager_1_phone, 
    transport_manager_2_name, transport_manager_2_email, transport_manager_2_phone, 
    head_driver_name, head_driver_email, head_driver_phone,
    car1_name, car1_email, car1_phone,
    car2_name, car2_email, car2_phone,
    car3_name, car3_email, car3_phone,
    truck1_name, truck1_email, truck1_phone,
    truck2_name, truck2_email, truck2_phone,
    truck3_name, truck3_email, truck3_phone,} = crewInfoOne || {};
  return (
    <div>InfoPost</div>
  )
}

export default InfoPost