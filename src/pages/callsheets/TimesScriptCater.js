import React from "react";
import { useRedirect } from '../../hooks/Redirect';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../styles/Callsheets.module.css";

const TimesScriptCater = ({crewInfoOne, callsheet, setShowScr }) => {
  useRedirect("loggedOut");

  const {writer_name, 
    catering_co_1_name,
    catering_co_2_name,
    catering_co_3_name,
    craft_service_name,
    crafty_ass_name, 
  } = crewInfoOne || {};

  const { writer_calltime,
    catering_co_1_calltime,
    catering_co_2_calltime,
    catering_co_3_calltime,
    craft_service_calltime,
    crafty_ass_calltime,
    } = callsheet;
    
  return (
    <div>
      <div className={`mt-0 text-center ${styles.Back3 }`}>
      <span className={`float-right ${styles.Close }`} onClick={() => setShowScr(false) } >Close</span> 
      <h5 className={`pl-5 text-center`} style={{ textTransform: 'uppercase'}} >SCRIPT </h5>
      </div>
      {/* addit */}
      <div className={`mx-5 mt-0 text-center ${styles.SubTitle }`}>
          <h5 className={` text-center`} style={{ textTransform: 'uppercase'}} >CATERING / CRAFT </h5>
        </div>
    </div>
  )
}

export default TimesScriptCater