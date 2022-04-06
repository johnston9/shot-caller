import React from "react";
import { useRedirect } from '../../hooks/Redirect';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../styles/Callsheets.module.css";

const TimesSoundTransport = ({crewInfoOne, callsheet, setShowSou }) => {
  useRedirect("loggedOut");

  const {sound_mixer_name,
    boom_operator_name, 
    sound_assistant_1_name,
    sound_assistant_2_name,
    transport_captain_name,
    transport_manager_1_name, 
    transport_manager_2_name, 
    head_driver_name, 
    car1_name, 
    car2_name, 
    car3_name, 
    truck1_name,
    truck2_name,
    truck3_name, } = crewInfoOne || {};

  const { sound_mixer_calltime, boom_operator_calltime, sound_assistant_1_calltime,
    sound_assistant_2_calltime, transport_captain_calltime, transport_manager_1_calltime,
    transport_manager_2_calltime, head_driver_calltime, car1_calltime,
    car2_calltime, car3_calltime, truck1_calltime, truck2_calltime,
    truck3_calltime,
    } = callsheet;

  return (
    <div>
      <div className={`mt-0 text-center ${styles.Back3 }`}>
      <span className={`float-right ${styles.Close }`} onClick={() => setShowSou(false) } >Close</span> 
      <h5 className={`pl-5 text-center`} style={{ textTransform: 'uppercase'}} >SOUND </h5>
      </div>
      {/* addit */}
      <div className={`mx-5 mt-0 text-center ${styles.SubTitle }`}>
          <h5 className={` text-center`} style={{ textTransform: 'uppercase'}} >TRANSPORT </h5>
        </div>
    </div>
  )
}

export default TimesSoundTransport