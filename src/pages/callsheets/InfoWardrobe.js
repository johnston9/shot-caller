import React from 'react';
import { useRedirect } from '../../hooks/Redirect';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../styles/Callsheets.module.css";
import { Image } from 'react-bootstrap';

const InfoWardrobe = ({crewInfoOne, setShowWar}) => {
  useRedirect("loggedOut");
  const {costume_designer_name, costume_designer_email, costume_designer_phone,
    ass_costume_designer_name, ass_costume_designer_email, ass_costume_designer_phone,
    wardrobe_assistant_1_name, wardrobe_assistant_1_email, wardrobe_assistant_1_phone,
    wardrobe_assistant_2_name, wardrobe_assistant_2_email, wardrobe_assistant_2_phone,
    wardrobe_assistant_3_name, wardrobe_assistant_3_email, wardrobe_assistant_3_phone,
    wardrobe_assistant_4_name, wardrobe_assistant_4_email, wardrobe_assistant_4_phone,
    wardrobe_assistant_5_name, wardrobe_assistant_5_email, wardrobe_assistant_5_phone,} = crewInfoOne || {};
  return (
    <div>
      <div className={`mt-0 text-center ${styles.SubTitle }`}>
      <span className={`float-right ${styles.Close }`} onClick={() => setShowWar(false) } >Close</span> 
      <h5 className={`pl-5 text-center`} style={{ textTransform: 'uppercase'}} >WARDROBE </h5>
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

export default InfoWardrobe