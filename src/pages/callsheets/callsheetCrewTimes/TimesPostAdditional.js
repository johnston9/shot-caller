/* Component to display the Post Department
   Calltimes on the Callsheet */
import React from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../../styles/Callsheets.module.css";

const TimesPostAdditional = ({crewInfoOne, callsheet, setShowPos }) => {

  const {editor_name,
    fx_name, 
    add_pos_1_job, add_pos_1_name,
    add_pos_2_job, add_pos_2_name,
    add_pos_3_job, add_pos_3_name,
    add_pos_4_job, add_pos_4_name,
    add_pos_5_job, add_pos_5_name,
    add_pos_6_job, add_pos_6_name,
    add_pos_7_job, add_pos_7_name,
    add_pos_8_job, add_pos_8_name,
    add_pos_9_job, add_pos_9_name,
    add_pos_10_job, add_pos_10_name,
    add_pos_11_job, add_pos_11_name,
    add_pos_12_job, add_pos_12_name,
    add_pos_13_job, add_pos_13_name,
    add_pos_14_job, add_pos_14_name,
    add_pos_15_job, add_pos_15_name,
    add_pos_16_job, add_pos_16_name,
    add_pos_17_job, add_pos_17_name,
    add_pos_18_job, add_pos_18_name,
    add_pos_19_job, add_pos_19_name,
    add_pos_20_job, add_pos_20_name,
     } = crewInfoOne || {};

  const { editor_calltime, fx_calltime,
    add_pos_1_calltime,
    add_pos_2_calltime,
    add_pos_3_calltime,
    add_pos_4_calltime,
    add_pos_5_calltime,
    add_pos_6_calltime,
    add_pos_7_calltime,
    add_pos_8_calltime,
    add_pos_9_calltime,
    add_pos_10_calltime,
    add_pos_11_calltime,
    add_pos_12_calltime,
    add_pos_13_calltime,
    add_pos_14_calltime,
    add_pos_15_calltime,
    add_pos_16_calltime,
    add_pos_17_calltime,
    add_pos_18_calltime,
    add_pos_19_calltime,
    add_pos_20_calltime,
    } = callsheet;
  return (
    <div>
      <div className={`mt-0 text-center ${styles.Back3 }`}>
      <span className={`float-right ${styles.Close }`} onClick={() => setShowPos(false) } >Close</span> 
      <h5 className={`d-none d-md-block pl-5 mb-0 text-center py-1 ${styles.Bold }`} >
        POST PRODUCTION/VFX </h5>
        <h5 className={`d-block d-md-none pl-5 mb-0 text-center py-1 ${styles.Bold }`} >
        POST/VFX </h5>
      </div>
      <div>
      <Row>     
      {/* Editor */}
      {editor_calltime && 
          (<Col xs={12} md={6}>
          <Row className={` mx-0 `} >
            <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>Editor</p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{editor_name} </p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={2} md={2} >
              <p className={`my-0 py-0 `}>{editor_calltime} </p>
            </Col>
          </Row>
          </Col> )
      }
      {/* FX */}
      {fx_calltime && 
          (<Col xs={12} md={6}>
          <Row className={` mx-0 `} >
            <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>FX</p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{fx_name} </p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={2} md={2} >
              <p className={`my-0 py-0 `}>{fx_calltime} </p>
            </Col>
          </Row>
          </Col> )
      }
      </Row>
      </div>
    </div>
  )
}

export default TimesPostAdditional