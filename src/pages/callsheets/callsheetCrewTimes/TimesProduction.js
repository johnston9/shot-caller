/* Component to display the Production Department Calltimes
   on the Callsheet */
import React from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../../styles/Callsheets.module.css";

const TimeCallsProduction = ({crewInfoOne, callsheet, setShowPro }) => {

  const {producer_name,
    director_name, 
    pro_coordinator_name,
    upm_name, 
    travel_coordinator_name, 
    production_pa_name, 
    oth_production_pos_1_job, oth_production_pos_1_name,
    oth_production_pos_2_job, oth_production_pos_2_name,
    oth_production_pos_3_job, oth_production_pos_3_name,
    oth_production_pos_4_job, oth_production_pos_4_name,
    oth_production_pos_5_job, oth_production_pos_5_name,
    script_supervisor_name, 
    legal_name, 
    set_medic_name, 
   } = crewInfoOne || {};

  const { director_calltime, producer_calltime, pro_coordinator_calltime, travel_coordinator_calltime,
    upm_calltime, production_pa_calltime, script_supervisor_calltime, legal_calltime,
    set_medic_calltime, oth_production_pos_1_calltime, oth_production_pos_2_calltime,
    oth_production_pos_3_calltime, oth_production_pos_4_calltime, oth_production_pos_5_calltime, 
    } = callsheet;

  return (
    <div >
      <div className={`mt-0 mb-2 text-center  ${styles.Back3 }`}>
      <span className={`float-right ${styles.Close }`} onClick={() => setShowPro(false) } >Close</span> 
      <h5 className={`pl-5 text-center`} style={{ textTransform: 'uppercase'}} >PRODUCTION </h5>
      </div>
      <div >
        <Row className="px-2">
        {/* director */}
        {(director_calltime && director_name) &&
          (<Col xs={12} lg={6}>
          <Row className={`mt-1 mx-0 d-flex align-items-center`} >
            <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
              <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
                Director</p>
                <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
                Director</p>                    
            </Col>
            <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
              <p className={`my-0 py-0 `}>{director_name} </p>
            </Col>
            <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
              <p className={`my-0 py-0 `}>{director_calltime} </p>
            </Col>
          </Row>
          <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
          </Col> )
        }
        {/* producer */}
        {(producer_calltime && producer_name) &&
          (<Col xs={12} lg={6}>
          <Row className={`mt-1 mx-0 d-flex align-items-center`} >
            <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
              <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
              Producer</p>
                <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
                Producer</p> 
            </Col>
            <Col className={`mx-0 px-0`}  xs={8} sm={4} >
              <p className={`my-0 py-0 ${styles.Borderm}`}>{producer_name} </p>
            </Col>
            <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
              <p className={`my-0 py-0 `}>{producer_calltime} </p>
            </Col>
          </Row>
          <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
          </Col> )
         }
         {/* pro_coordinator */}
        {(pro_coordinator_calltime && pro_coordinator_name) &&
          (<Col xs={12} lg={6}>
          <Row className='mt-1 mx-0 d-flex align-items-center' >
            <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
              <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
              Pro Coordinator</p>
                <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
                Pro Coordinator</p> 
            </Col>
            <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
              <p className={`my-0 py-0 `}>{pro_coordinator_name} </p>
            </Col>
            <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
              <p className={`my-0 py-0 `}>{pro_coordinator_calltime} </p>
            </Col>
          </Row>
          <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
          </Col> )
         }
         {/* upm */}
        {(upm_calltime && upm_name) &&
          (<Col xs={12} lg={6}>
          <Row className='mt-1 mx-0 d-flex align-items-center' >
            <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
              <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
              UPM</p>
                <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
                UPM</p> 
            </Col>
            <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
              <p className={`my-0 py-0 `}>{upm_name} </p>
            </Col>
            <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
              <p className={`my-0 py-0 `}>{upm_calltime} </p>
            </Col>
          </Row>
          <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
          </Col> )
         }
         {/* Travel Coordinator */}
         {(travel_coordinator_calltime && travel_coordinator_name) &&
          (<Col xs={12} lg={6}>
          <Row className='mt-1 mx-0' >
            <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
              <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
              Travel Coordinator </p>
                <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
                Travel Coordinator </p> 
            </Col>
            <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
              <p className={`my-0 py-0 `}>{travel_coordinator_name} </p>
            </Col>
            <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
              <p className={`my-0 py-0 `}>{travel_coordinator_calltime} </p>
            </Col>
          </Row>
          <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
           </Col>)
         }
         {/* Production PA */}
         {(production_pa_calltime && production_pa_name) &&
          (<Col xs={12} lg={6}>
          <Row className='mt-1 mx-0 d-flex align-items-center' >
            <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
              <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
              Production PA </p>
                <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
                Production PA </p> 
            </Col>
            <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
              <p className={`my-0 py-0 `}>{production_pa_name} </p>
            </Col>
            <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
              <p className={`my-0 py-0 `}>{production_pa_calltime} </p>
            </Col>
          </Row>
          <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
        </Col> )
         }
         {/* Set Medic */}
         {(set_medic_calltime && set_medic_name) &&
          (<Col xs={12} lg={6}>
          <Row className='mt-1 mx-0 d-flex align-items-center' >
            <Col className={`mx-0 px-0 ${styles.Border}l`} xs={12} sm={5} >
              <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
              Set Medic</p>
                <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
                Set Medic</p> 
            </Col>
            <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
              <p className={`my-0 py-0 `}>{set_medic_name} </p>
            </Col>
            <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
              <p className={`my-0 py-0 `}>{set_medic_calltime} </p>
            </Col>
          </Row>
          <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
          </Col> )
         }
         {/* oth production pos 1 */}
         {(oth_production_pos_1_calltime && oth_production_pos_1_name) &&
          (<Col xs={12} lg={6}>
          <Row className='mt-1 mx-0 d-flex align-items-center' >
            <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
                <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
                {oth_production_pos_1_job} </p>
                <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
                {oth_production_pos_1_job} </p> 
            </Col>
            <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
              <p className={`my-0 py-0 `}>{oth_production_pos_1_name} </p>
            </Col>
            <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
              <p className={`my-0 py-0 `}>{oth_production_pos_1_calltime} </p>
            </Col>
          </Row>
          <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
          </Col> )
         }
         {/* oth production pos 2 */}
         {(oth_production_pos_2_calltime && oth_production_pos_2_name) &&
          (<Col xs={12} lg={6}>
          <Row className='mt-1 mx-0 d-flex align-items-center' >
            <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
                <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
                {oth_production_pos_2_job}</p>
                <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
                {oth_production_pos_2_job}</p> 
            </Col>
            <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
              <p className={`my-0 py-0 `}>{oth_production_pos_2_name} </p>
            </Col>
            <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
              <p className={`my-0 py-0 `}>{oth_production_pos_2_calltime} </p>
            </Col>
          </Row>
          <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
          </Col> )
         }
         {/* oth production pos 3 */}
         {(oth_production_pos_3_calltime && oth_production_pos_3_name) &&
          (<Col xs={12} lg={6}>
          <Row className='mt-1 mx-0 d-flex align-items-center' >
            <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
              <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
              {oth_production_pos_3_job} </p>
                <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
                {oth_production_pos_3_job} </p> 
            </Col>
            <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
              <p className={`my-0 py-0 `}>{oth_production_pos_3_name} </p>
            </Col>
            <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
              <p className={`my-0 py-0 `}>{oth_production_pos_3_calltime} </p>
            </Col>
          </Row>
          <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
          </Col> )
         }
         {/* oth production pos 4 */}
         {(oth_production_pos_4_calltime && oth_production_pos_4_name) &&
          (<Col xs={12} lg={6}>
          <Row className='mt-1 mx-0 d-flex align-items-center' >
            <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
                <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
                {oth_production_pos_4_job}</p>
                <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
                {oth_production_pos_4_job}</p> 
            </Col>
            <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
              <p className={`my-0 py-0 `}>{oth_production_pos_4_name} </p>
            </Col>
            <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
              <p className={`my-0 py-0 `}>{oth_production_pos_4_calltime} </p>
            </Col>
          </Row>
          <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
          </Col> )
         }
         {/* oth production pos 5 */}
         {(oth_production_pos_5_calltime && oth_production_pos_5_name) &&
          (<Col xs={12} lg={6}>
          <Row className='mt-1 mx-0 d-flex align-items-center' >
            <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
              <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
              {oth_production_pos_5_job}</p>
                <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
                {oth_production_pos_5_job}</p> 
            </Col>
            <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
              <p className={`my-0 py-0 `}>{oth_production_pos_5_name} </p>
            </Col>
            <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
              <p className={`my-0 py-0 `}>{oth_production_pos_5_calltime} </p>
            </Col>
          </Row>
          <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
          </Col> )
         }
        </Row>
         </div>
    </div>
  )
}

export default TimeCallsProduction