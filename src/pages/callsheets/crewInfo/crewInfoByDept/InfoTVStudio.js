/* Component in the CrewInfo page to display
   the Construction and Wrangling Department crew info */
   import React, { useState } from 'react';
   import { useRedirect } from '../../../../hooks/Redirect';
   import Col from 'react-bootstrap/Col';
   import Row from 'react-bootstrap/Row';
   import Button from 'react-bootstrap/Button';
   import btnStyles from "../../../../styles/Button.module.css";
   import styles from "../../../../styles/Callsheets.module.css";
   import ExtraCrewInfo from '../ExtraCrewInfo';

const InfoTVStudio = ({crewInfoOne, setShowTv}) => {
    useRedirect();
      const [show, setShow] = useState(false);

      const {add_pos_16_name, add_pos_16_email, add_pos_16_phone,
        add_pos_17_name, add_pos_17_email, add_pos_17_phone,
        add_pos_18_name, add_pos_18_email, add_pos_18_phone,
        add_pos_19_name, add_pos_19_email, add_pos_19_phone,
        add_pos_20_name, add_pos_20_email, add_pos_20_phone,   
        add_pos_15_job, add_pos_15_name, add_pos_15_email, add_pos_15_phone,} = crewInfoOne || {};

  return (
    <div>
    <div className={`mt-0 text-center ${styles.SubTitle }`}>
      <span className={`float-right pt-1 pt-md-2 ${styles.Bold } ${styles.Close }`} onClick={() => setShowTv(false) } >Close</span> 
      <h5 className={`pl-5 mb-0 text-center py-1 ${styles.Bold }`} >TV STUDIO POSITIONS</h5>
    </div>
    <div className={`px-md-5 mx-md-5 ${styles.White }`}>

    </div>

    </div>
  )
}

export default InfoTVStudio