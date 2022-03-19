import React from 'react';
import { useRedirect } from '../../hooks/Redirect';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../styles/Callsheets.module.css";
import { Image } from 'react-bootstrap';

const InfoArt = ({crewInfoOne}) => {
  useRedirect("loggedOut");
  const {art_director_name, art_director_email, art_director_phone,
    art_assistant_name, art_assistant_email, art_assistant_phone,
    set_decorator_name, set_decorator_email, set_decorator_phone,
    set_dresser_name, set_dresser_email, set_dresser_phone,
    lead_man_name, lead_man_email, lead_man_phone,
    dresser_name, dresser_email, dresser_phone,
    prop_master_name, prop_master_email, prop_master_phone,
    ass_prop_master_name, ass_prop_master_email, ass_prop_master_phone,
    prop_buyer_name, prop_buyer_email, prop_buyer_phone,
    armorer_name, armorer_email, armorer_phone,  } = crewInfoOne || {};

  return (
    <div>InfoArt</div>
  )
}

export default InfoArt