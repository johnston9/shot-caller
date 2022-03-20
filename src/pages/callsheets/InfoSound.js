import React from 'react';
import { useRedirect } from '../../hooks/Redirect';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../styles/Callsheets.module.css";
import { Image } from 'react-bootstrap';

const InfoSound = ({crewInfoOne, setShowSou}) => {
  useRedirect("loggedOut");
  const {sound_mixer_name, sound_mixer_email, sound_mixer_phone,
    boom_operator_name, boom_operator_email, boom_operator_phone,
    sound_assistant_1_name, sound_assistant_1_email, sound_assistant_1_phone,
    sound_assistant_2_name, sound_assistant_2_email, sound_assistant_2_phone,
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
    <div>
      <div className={`mt-0 text-center ${styles.SubTitle }`}>
      <span className={`float-right ${styles.Close }`} onClick={() => setShowSou(false) } >Close</span> 
      <h5 className={`pl-5 text-center`} style={{ textTransform: 'uppercase'}} >SOUND </h5>
      </div>
      <div className='mt-3'>
        {/* producer */}
        {/* {producer_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>Producer</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{nnn} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{email}</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{phone}</p>
            </Col>
          </Row>
          </div> )
         } */}
        </div>
    </div>
  )
}

export default InfoSound