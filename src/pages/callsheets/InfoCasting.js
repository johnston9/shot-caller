import React from 'react';
import { useRedirect } from '../../hooks/Redirect';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../styles/Callsheets.module.css";
import { Image } from 'react-bootstrap';

const InfoCasting = ({crewInfoOne}) => {
  useRedirect("loggedOut");
  const {casting_director_name, casting_director_email, casting_director_phone,
    extras_casting_name, extras_casting_email, extras_casting_phone,} = crewInfoOne || {};
  return (
    <div>InfoCasting</div>
  )
}

export default InfoCasting