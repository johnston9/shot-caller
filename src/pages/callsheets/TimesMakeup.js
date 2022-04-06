import React from "react";
import { useRedirect } from '../../hooks/Redirect';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../styles/Callsheets.module.css";

const TimesMakeup = ({crewInfoOne, callsheet, setShowMak }) => {
  useRedirect("loggedOut");

  const {key_hairmakeup_name,
    key_hairstylist_name,
    sfx_makeup_name, 
    sfx_makeup_assistant_name,
    makeup_artist_1_name,
    makeup_artist_2_name,
    makeup_artist_3_name,
    makeup_artist_4_name,
    makeup_artist_5_name, } = crewInfoOne || {};

  const { key_hairmakeup_calltime, key_hairstylist_calltime, sfx_makeup_calltime,
    sfx_makeup_assistant_calltime, makeup_artist_1_calltime, makeup_artist_2_calltime,
    makeup_artist_3_calltime, makeup_artist_4_calltime, makeup_artist_5_calltime,
    } = callsheet;
    
  return (
    <div>
      <div className={`mt-0 text-center ${styles.Back3 }`}>
      <span className={`float-right ${styles.Close }`} onClick={() => setShowMak(false) } >Close</span> 
      <h5 className={`pl-5 text-center`} style={{ textTransform: 'uppercase'}} >MAKEUP </h5>
      </div>
    </div>
  )
}

export default TimesMakeup