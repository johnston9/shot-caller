import React, { useState } from "react";
import { useRedirect } from '../../hooks/Redirect';
import Form from "react-bootstrap/Form";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Alert } from "react-bootstrap";
import styles from "../../styles/Callsheets.module.css";

const CallsProduction = ({crewInfoOne, callsheet, setShowPro }) => {
  useRedirect("loggedOut");
  const [errors, setErrors] = useState({});

  const {producer_name, producer_email, producer_phone,
    director_name, director_email, director_phone,
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
    set_medic_name, set_medic_email, set_medic_phone,
   } = crewInfoOne || {};

  const { director_calltime, producer_calltime, pro_coordinator_calltime, travel_coordinator_calltime,
    upm_calltime, production_pa_calltime, script_supervisor_calltime, legal_calltime,
    set_medic_calltime, oth_production_pos_1_calltime, oth_production_pos_2_calltime,
    oth_production_pos_3_calltime, oth_production_pos_4_calltime, oth_production_pos_5_calltime, 
    } = callsheet;

  return (
    <div>
      <div className={`mt-0 text-center  ${styles.Back3 }`}>
      <span className={`float-right ${styles.Close }`} onClick={() => setShowPro(false) } >Close</span> 
      <h5 className={`pl-5 text-center`} style={{ textTransform: 'uppercase'}} >PRODUCTION </h5>
      </div>
      {/* titles */}
      {/* <Row className="mt-2">
            <Col>
            <Row style={{ textTransform: 'uppercase' }} className={` mx-0  ${styles.TitleBox}`} >
            <Col className={`mx-0  ${styles.TitleBox2}`} xs={5} >
            <p className='my-0 py-0'>Postition</p>
            </Col>
            <Col className={`${styles.TitleBox2} mx-0`} xs={5}>
            <p className='my-0 py-0'>Name</p>
            </Col>
            <Col className={` mx-0`} xs={2}>
            <p className='my-0 py-0'>Call</p>
            </Col>
            </Row>
            </Col>
            <Col className='d-none d-md-block'>
            <Row style={{ textTransform: 'uppercase' }} className={` mx-0  ${styles.TitleBox}`} >
            <Col className={`mx-0  ${styles.TitleBox2}`} xs={5} >
            <p className='my-0 py-0'>Postition</p>
            </Col>
            <Col className={`${styles.TitleBox2} mx-0`} xs={5}>
            <p className='my-0 py-0'>Name</p>
            </Col>
            <Col className={` mx-0`} xs={2}>
            <p className='my-0 py-0'>Call</p>
            </Col>
            </Row>
            </Col>
      </Row> */}
      <div >
        <Row>
        {/* director_ */}
        {director_calltime && 
          (<Col xs={12} md={6}>
          <Row className={` mx-0 `} >
            <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>Director</p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{director_name} </p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={2} md={2} >
              <p className={`my-0 py-0 `}>{director_calltime} </p>
            </Col>
          </Row>
          </Col> )
         }
        {/* producer */}
        {producer_calltime && 
          (<Col xs={12} md={6}>
          <Row className={` mx-0 `} >
            <Col className={`mx-0 px-1  ${styles.Border}`}  xs={5} md={5} >
              <p className={`my-0 py-0 `}>Producer</p>
            </Col>
            <Col className={`mx-0 px-1 ${styles.Border}`}  xs={5} md={5} >
              <p className={`my-0 py-0 `}>{producer_name} </p>
            </Col>
            <Col className={`mx-0 px-1 ${styles.Border}`}  xs={2} md={2} >
              <p className={`my-0 py-0 `}>{producer_calltime} </p>
            </Col>
          </Row>
          </Col> )
         }
         {/* pro_coordinator */}
        {pro_coordinator_calltime && 
          (<Col xs={12} md={6}>
          <Row className='mx-0 ' >
            <Col className={`mx-0 px-1  ${styles.Border}`}  xs={5} md={5} >
              <p className={`my-0 py-0 `}>Pro Coordinator</p>
            </Col>
            <Col className={`mx-0 px-1 ${styles.Border}`}  xs={5} md={5} >
              <p className={`my-0 py-0 `}>{pro_coordinator_name} </p>
            </Col>
            <Col className={`mx-0 px-1 ${styles.Border}`}  xs={2} md={2} >
              <p className={`my-0 py-0 `}>{pro_coordinator_calltime} </p>
            </Col>
          </Row></Col> )
         }
         {/* upm */}
        {upm_calltime && 
          (<Col xs={12} md={6}>
          <Row className='mx-0' >
            <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>UPM</p>
            </Col>
            <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{upm_name} </p>
            </Col>
            <Col className={`mx-0 px-1 ${styles.Border}`} xs={2} md={2} >
              <p className={`my-0 py-0 `}>{upm_calltime} </p>
            </Col>
          </Row></Col> )
         }
         {/* Travel Coordinator */}
         {travel_coordinator_calltime && 
          (<Col xs={12} md={6}>
          <Row className='mx-0' >
            <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>Travel Coordinator </p>
            </Col>
            <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{travel_coordinator_name} </p>
            </Col>
            <Col className={`mx-0 px-1 ${styles.Border}`} xs={2} md={2} >
              <p className={`my-0 py-0 `}>{travel_coordinator_calltime} </p>
            </Col>
          </Row> </Col>)
         }
         {/* Production PA */}
         {production_pa_calltime && 
          (<Col xs={12} md={6}>
          <Row className='mx-0' >
            <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>Production PA </p>
            </Col>
            <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{production_pa_name} </p>
            </Col>
            <Col className={`mx-0 px-1 ${styles.Border}`} xs={2} md={2} >
              <p className={`my-0 py-0 `}>{production_pa_calltime} </p>
            </Col>
          </Row></Col> )
         }
         {/* Script Supervisor */}
         {script_supervisor_calltime && ( 
             <Col xs={12} md={6}>
          <Row className='mx-0' >
            <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>Script Supervisor</p>
            </Col>
            <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{script_supervisor_name} </p>
            </Col>
            <Col className={`mx-0 px-1 ${styles.Border}`} xs={2} md={2} >
              <p className={`my-0 py-0 `}>{script_supervisor_calltime} </p>
            </Col>
          </Row>
          </Col>
           ) }
         {/* Legal  */}
         {legal_calltime && 
          (<Col xs={12} md={6}>
          <Row className='mx-0' >
            <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>Legal </p>
            </Col>
            <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{legal_name} </p>
            </Col>
            <Col className={`mx-0 px-1 ${styles.Border}`} xs={2} md={2} >
              <p className={`my-0 py-0 `}>{legal_calltime} </p>
            </Col>
          </Row></Col> )
         }
         {/* Set Medic */}
         {set_medic_calltime && 
          (<Col xs={12} md={6}>
          <Row className='mx-0' >
            <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>Set Medic </p>
            </Col>
            <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{set_medic_name} </p>
            </Col>
            <Col className={`mx-0 px-1 ${styles.Border}`} xs={2} md={2} >
              <p className={`my-0 py-0 `}>{set_medic_calltime} </p>
            </Col>
          </Row></Col> )
         }
         {/* oth production pos 1 */}
         {oth_production_pos_1_calltime && 
          (<Col xs={12} md={6}>
          <Row className='mx-0' >
            <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{oth_production_pos_1_job} </p>
            </Col>
            <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{oth_production_pos_1_name} </p>
            </Col>
            <Col className={`mx-0 px-1 ${styles.Border}`} xs={2} md={2} >
              <p className={`my-0 py-0 `}>{oth_production_pos_1_calltime} </p>
            </Col>
          </Row></Col> )
         }
         {/* oth production pos 2 */}
         {oth_production_pos_2_calltime && 
          (<Col xs={12} md={6}>
          <Row className='mx-0' >
            <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{oth_production_pos_2_job}mmm </p>
            </Col>
            <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{oth_production_pos_2_name} </p>
            </Col>
            <Col className={`mx-0 px-1 ${styles.Border}`} xs={2} md={2} >
              <p className={`my-0 py-0 `}>{oth_production_pos_2_calltime} </p>
            </Col>
          </Row></Col> )
         }
         {/* oth production pos 3 */}
         {oth_production_pos_3_calltime && 
          (<Col xs={12} md={6}>
          <Row className='mx-0' >
            <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{oth_production_pos_3_job} </p>
            </Col>
            <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{oth_production_pos_3_name} </p>
            </Col>
            <Col className={`mx-0 px-1 ${styles.Border}`} xs={2} md={2} >
              <p className={`my-0 py-0 `}>{oth_production_pos_3_calltime} </p>
            </Col>
          </Row></Col> )
         }
         {/* oth production pos 4 */}
         {oth_production_pos_4_calltime && 
          (<Col xs={12} md={6}>
          <Row className='mx-0' >
            <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{oth_production_pos_4_job} </p>
            </Col>
            <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{oth_production_pos_4_name} </p>
            </Col>
            <Col className={`mx-0 px-1 ${styles.Border}`} xs={2} md={2} >
              <p className={`my-0 py-0 `}>{oth_production_pos_4_calltime} </p>
            </Col>
          </Row></Col> )
         }
         {/* oth production pos 5 */}
         {oth_production_pos_5_calltime && 
          (<Col xs={12} md={6}>
          <Row className='mx-0' >
            <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{oth_production_pos_5_job} </p>
            </Col>
            <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{oth_production_pos_5_name} </p>
            </Col>
            <Col className={`mx-0 px-1 ${styles.Border}`} xs={2} md={2} >
              <p className={`my-0 py-0 `}>{oth_production_pos_5_calltime} </p>
            </Col>
          </Row></Col> )
         }
        </Row>
         </div>
    </div>
  )
}

export default CallsProduction