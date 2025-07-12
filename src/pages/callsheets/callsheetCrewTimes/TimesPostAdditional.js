/* Component to display the Post Department
   Calltimes on the Callsheet */
import React from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../../styles/Callsheets.module.css";

const TimesPostAdditional = ({crewInfoOne, callsheet, setShowPos }) => {

  const {editor_name, fx_name, } = crewInfoOne || {};

  const { editor_calltime, fx_calltime,
    } = callsheet;

  return (
    <div>
      <div className={`mt-0 mb-2 text-center ${styles.Back3 }`}>
      <span className={`float-right pt-md-1 ${styles.Close }`} onClick={() => setShowPos(false) } >Close</span> 
      <h5 className={`d-none d-md-block pl-5 mb-0 text-center ${styles.Bold }`} >
      POST PRODUCTION/VFX</h5>
      <h5 className={`d-block d-md-none pl-5 mb-0 text-center ${styles.Bold }`} >
      POST/VFX</h5>
      </div>
      <div>
      <Row>
      {/* On Set Editor */}
      {(editor_calltime && editor_name) &&
            (<Col xs={12} lg={6} className={`${styles.RightPanel}`}>
            <Row className={`mt-1 mx-0 d-flex align-items-center`} >
              <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
                <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
                On Set Editor</p>
                <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
                On Set Editor</p>                    
              </Col>
              <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
                <p className={`my-0 py-0 `}>{editor_name} </p>
              </Col>
              <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
                <p className={`my-0 py-0 `}>{editor_calltime} </p>
              </Col>
            </Row>
            <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
            </Col> )
      }
      {/* VFX Supervisor */}
      {(fx_calltime && fx_name) &&
            (<Col xs={12} lg={6} className={`${styles.RightPanel}`}>
            <Row className={`mt-1 mx-0 d-flex align-items-center`} >
              <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
                <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
                VFX Supervisor</p>
                <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
                VFX Supervisor</p>                    
              </Col>
              <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
                <p className={`my-0 py-0 `}>{fx_name} </p>
              </Col>
              <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
                <p className={`my-0 py-0 `}>{fx_calltime} </p>
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

export default TimesPostAdditional