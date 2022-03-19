import React from 'react';
import { useRedirect } from '../../hooks/Redirect';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../styles/Callsheets.module.css";
import { Image } from 'react-bootstrap';

const Production = ({crewInfoOne, setShowPro}) => {
  useRedirect("loggedOut");
  const {id, producer_name, producer_email, producer_phone,
    pro_coordinator_name, pro_coordinator_email, pro_coordinator_phone,
    upm_name, upm_email, upm_phone,
    travel_coordinator_name, travel_coordinator_email, travel_coordinator_phone,
    production_pa_name, production_pa_email, production_pa_phone,
    locations_manager_name, locations_manager_email, locations_manager_phone,
    oth_production_pos_1_job, oth_production_pos_1_name, oth_production_pos_1_email, oth_production_pos_1_phone,
    oth_production_pos_2_job, oth_production_pos_2_name, oth_production_pos_2_email, oth_production_pos_2_phone,
    oth_production_pos_3_job, oth_production_pos_3_name, oth_production_pos_3_email, oth_production_pos_3_phone,
    oth_production_pos_4_job, oth_production_pos_4_name, oth_production_pos_4_email, oth_production_pos_4_phone,
    oth_production_pos_5_job, oth_production_pos_5_name, oth_production_pos_5_email, oth_production_pos_5_phone,
    ad_1_name, ad_1_email, ad_1_phone,
    ad_2_name, ad_2_email, ad_2_phone,
    ad_3_name, ad_3_email, ad_3_phone,
    ad_4_name, ad_4_email, ad_4_phone,
    ad_5_name, ad_5_email, ad_5_phone,
    pro_assistant_1_name, pro_assistant_1_email, pro_assistant_1_phone,
    pro_assistant_2_name, pro_assistant_2_email, pro_assistant_2_phone,
    pro_assistant_3_name, pro_assistant_3_email, pro_assistant_3_phone,
    pro_assistant_4_name, pro_assistant_4_email, pro_assistant_4_phone,
    pro_assistant_5_name, pro_assistant_5_email, pro_assistant_5_phone,
    script_supervisor_name, script_supervisor_email, script_supervisor_phone,
    legal_name, legal_email, legal_phone,
    set_medic_name, set_medic_email, set_medic_phone,} = crewInfoOne || {};
  return (
    <div>
      <div className={` ${styles.SubTitle }`}>
      <span className={`text-left ${styles.Close }`} onClick={() => setShowPro(false) } >Close</span> 
      <span className={`text-center`} style={{ textTransform: 'uppercase'}} >PRODUCTION </span>
      </div>
      {/* crew info pro_coordinator_name, pro_coordinator_email, pro_coordinator_phone, */}
      <div className='mt-3'>
        {producer_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>Producer</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{producer_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{producer_email}</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{producer_phone}</p>
            </Col>
          </Row>
          </div> )
         }
         </div>
    </div>
  )
}

export default Production