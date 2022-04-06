import React from "react";
import { useRedirect } from '../../hooks/Redirect';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../styles/Callsheets.module.css";

const TimesWardrobe = ({crewInfoOne, callsheet, setShowWar }) => {
  useRedirect("loggedOut");
  // eslint-disable-next-line
  const [errors, setErrors] = useState({});

  const {costume_designer_name, 
    ass_costume_designer_name,
    wardrobe_assistant_1_name,
    wardrobe_assistant_2_name,
    wardrobe_assistant_3_name,
    wardrobe_assistant_4_name,
    wardrobe_assistant_5_name,} = crewInfoOne || {};

  const { costume_designer_calltime, ass_costume_designer_calltime,
    wardrobe_assistant_1_calltime, wardrobe_assistant_2_calltime,
    wardrobe_assistant_3_calltime, wardrobe_assistant_4_calltime,
    wardrobe_assistant_5_calltime,
    } = callsheet;
    
  return (
    <div>
      <div className={`mt-0 text-center ${styles.Back3 }`}>
      <span className={`float-right ${styles.Close }`} onClick={() => setShowWar(false) } >Close</span> 
      <h5 className={`pl-5 text-center`} style={{ textTransform: 'uppercase'}} >WARDROBE </h5>
      </div>
    </div>
  )
}

export default TimesWardrobe