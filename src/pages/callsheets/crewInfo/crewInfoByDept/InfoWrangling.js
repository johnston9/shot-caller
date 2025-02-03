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

const InfoWrangling = ({crewInfoOne, setShowWra}) => {
    useRedirect();
      const [show, setShow] = useState(false);
      const [showWrang, setShowWrang] = useState(false); 

      const {legal_name, legal_email, legal_phone,
        add_pos_11_name, add_pos_11_email, add_pos_11_phone,
        add_pos_12_name, add_pos_12_email, add_pos_12_phone,
        add_pos_13_name, add_pos_13_email, add_pos_13_phone,
        add_pos_14_name, add_pos_14_email, add_pos_14_phone,} = crewInfoOne || {};

  return (
    <div>
    <div className={`mt-0 text-center ${styles.SubTitle }`}>
      <span className={`float-right pt-1 pt-md-2 ${styles.Bold } ${styles.Close }`} onClick={() => setShowWra(false) } >Close</span> 
      <h5 className={`d-none d-md-block pl-5 mb-0 text-center py-1 ${styles.Bold }`} >
      CONSTRUCTION DEPARTMENT</h5>
        <h5 className={`d-block d-md-none pl-5 mb-0 text-center py-1 ${styles.Bold }`} >
        CONSTRUCTION</h5>
    </div>
    <div className={`px-md-5 mx-md-5 ${styles.White }`}>

    </div>
    {/* WRANGLING */}
    <div className={`mt-4 mx-5 text-center ${styles.SubTitle }`}>
      <h5 className={` mb-0 text-center py-1 ${styles.Bold }`} >WRANGLING DEPARTMENT</h5>
      </div>
      <div className={`px-md-5 mx-md-5 ${styles.White }`}>
      </div>

    </div>
  )
}

export default InfoWrangling