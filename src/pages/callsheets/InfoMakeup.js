import React from 'react';
import { useRedirect } from '../../hooks/Redirect';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../styles/Callsheets.module.css";
import { Image } from 'react-bootstrap';

const InfoMakeup = ({crewInfoOne}) => {
  useRedirect("loggedOut");
  const {key_hairmakeup_name, key_hairmakeup_email, key_hairmakeup_phone,
    key_hairstylist_name, key_hairstylist_email, key_hairstylist_phone,
    sfx_makeup_name, sfx_makeup_email, sfx_makeup_phone,
    sfx_makeup_assistant_name, sfx_makeup_assistant_email, sfx_makeup_assistant_phone,
    makeup_artist_1_name, makeup_artist_1_email, makeup_artist_1_phone,
    makeup_artist_2_name, makeup_artist_2_email, makeup_artist_2_phone,
    makeup_artist_3_name, makeup_artist_3_email, makeup_artist_3_phone,
    makeup_artist_4_name, makeup_artist_4_email, makeup_artist_4_phone,
    makeup_artist_5_name, makeup_artist_5_email, makeup_artist_5_phone,} = crewInfoOne || {};
  return (
    <div>InfoMakeup</div>
  )
}

export default InfoMakeup