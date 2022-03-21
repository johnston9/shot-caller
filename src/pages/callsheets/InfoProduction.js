import React from 'react';
import { useRedirect } from '../../hooks/Redirect';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../styles/Callsheets.module.css";

const Production = ({crewInfoOne, setShowPro}) => {
  useRedirect("loggedOut");
  const {producer_name, producer_email, producer_phone,
    pro_coordinator_name, pro_coordinator_email, pro_coordinator_phone,
    upm_name, upm_email, upm_phone,
    travel_coordinator_name, travel_coordinator_email, travel_coordinator_phone,
    production_pa_name, production_pa_email, production_pa_phone,
    oth_production_pos_1_job, oth_production_pos_1_name, oth_production_pos_1_email, oth_production_pos_1_phone,
    oth_production_pos_2_job, oth_production_pos_2_name, oth_production_pos_2_email, oth_production_pos_2_phone,
    oth_production_pos_3_job, oth_production_pos_3_name, oth_production_pos_3_email, oth_production_pos_3_phone,
    oth_production_pos_4_job, oth_production_pos_4_name, oth_production_pos_4_email, oth_production_pos_4_phone,
    oth_production_pos_5_job, oth_production_pos_5_name, oth_production_pos_5_email, oth_production_pos_5_phone,
    script_supervisor_name, script_supervisor_email, script_supervisor_phone,
    legal_name, legal_email, legal_phone,
    set_medic_name, set_medic_email, set_medic_phone,} = crewInfoOne || {};
  return (
    <div>
      <div className={`mt-0 text-center ${styles.SubTitle }`}>
      <span className={`float-right ${styles.Close }`} onClick={() => setShowPro(false) } >Close</span> 
      <h5 className={`pl-5 text-center`} style={{ textTransform: 'uppercase'}} >PRODUCTION </h5>
      </div>
      <div className='mt-3'>
        {/* producer */}
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
         {/* pro_coordinator */}
        {pro_coordinator_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>Pro Coordinator</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{pro_coordinator_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{pro_coordinator_email}</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{pro_coordinator_phone}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* upm */}
        {upm_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>UPM</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{upm_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{upm_email}</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{upm_phone}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* travel coordinator */}
        {travel_coordinator_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>Travel Coordinator</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{travel_coordinator_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{travel_coordinator_email}</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{travel_coordinator_phone}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* production pa */}
        {production_pa_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>Production PA</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{production_pa_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{production_pa_email}</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{production_pa_phone}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* script supervisor */}
        {script_supervisor_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>Script Supervisor</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{script_supervisor_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{script_supervisor_email}</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{script_supervisor_phone}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* legal */}
        {legal_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>Legal</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{legal_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{legal_email}</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{legal_phone}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* set medic */}
        {set_medic_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>Set Medic</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{set_medic_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{set_medic_email}</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{set_medic_phone}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* oth production pos 1 */}
        {oth_production_pos_1_job && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{oth_production_pos_1_job} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{oth_production_pos_1_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{oth_production_pos_1_email}</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{oth_production_pos_1_phone}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* oth production pos 2 */}
        {oth_production_pos_2_job && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{oth_production_pos_2_job} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{oth_production_pos_2_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{oth_production_pos_2_email}</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{oth_production_pos_2_phone}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* oth production pos 3 */}
        {oth_production_pos_3_job && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{oth_production_pos_3_job} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{oth_production_pos_3_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{oth_production_pos_3_email}</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{oth_production_pos_3_phone}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* oth production pos 4 */}
        {oth_production_pos_4_job && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{oth_production_pos_4_job} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{oth_production_pos_4_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{oth_production_pos_4_email}</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{oth_production_pos_4_phone}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* oth production pos 5 */}
        {oth_production_pos_5_job && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{oth_production_pos_5_job} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{oth_production_pos_5_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{oth_production_pos_5_email}</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{oth_production_pos_5_phone}</p>
            </Col>
          </Row>
          </div> )
         }
         </div>
    </div>
  )
}

export default Production