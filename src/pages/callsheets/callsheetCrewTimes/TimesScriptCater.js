/* Component to display the Script Department Calltimes
   on the Callsheet */
import React from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../../styles/Callsheets.module.css";

const TimesScriptCater = ({crewInfoOne, callsheet, setShowScr }) => {

  const {writer_name,
    script_supervisor_name,
  } = crewInfoOne || {};

  const { writer_calltime,
    script_supervisor_calltime,
    } = callsheet;
    
  return (
    <div>
      <div className={`mt-0 mb-2 text-center ${styles.Back3 }`}>
      <span className={`float-right ${styles.Close }`} onClick={() => setShowScr(false) } >Close</span> 
      <h5 className={`d-none d-md-block pl-5 mb-0 text-center ${styles.Bold }`} >
      SCRIPT DEPARTMENT</h5>
      <h5 className={`d-block d-md-none pl-5 mb-0 text-center ${styles.Bold }`} >
      SCRIPT</h5>
      </div>
      <Row>
      {/* Script Supervisor */}
      {(script_supervisor_calltime && script_supervisor_name) && ( 
          <Col xs={12} lg={6}>
          <Row className='mt-1 mx-0 d-flex align-items-center' >
            <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
                <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
                Script Supervisor</p>
                <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
                Script Supervisor</p> 
            </Col>
            <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
              <p className={`my-0 py-0 `}>{script_supervisor_name} </p>
            </Col>
            <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
              <p className={`my-0 py-0 `}>{script_supervisor_calltime} </p>
            </Col>
          </Row>
          <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
          </Col>
      ) }
      {/* Scriptwiter */}
      {(writer_calltime && writer_name) && ( 
          <Col xs={12} lg={6}>
          <Row className='mt-1 mx-0 d-flex align-items-center' >
            <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
                <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
                Scriptwiter</p>
                <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
                Scriptwiter</p> 
            </Col>
            <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
              <p className={`my-0 py-0 `}>{writer_name} </p>
            </Col>
            <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
              <p className={`my-0 py-0 `}>{writer_calltime} </p>
            </Col>
          </Row>
          <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
          </Col>
      ) }
      </Row>
    </div>
  )
}

export default TimesScriptCater