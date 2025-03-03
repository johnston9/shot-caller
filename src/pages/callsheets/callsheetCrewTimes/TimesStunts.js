/* Component to display the Stunts Department Calltimes
   on the Callsheet */
import React from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../../styles/Callsheets.module.css";

const TimesStunts = ({crewInfoOne, callsheet, setShowStu }) => {
  const {stunt_coordinator_name, 
    stunts_1_name,
    stunts_2_name,
    stunts_3_name,
    stunts_4_name,
    stunts_5_name,} = crewInfoOne || {};

  const { stunt_coordinator_calltime, stunts_1_calltime, stunts_2_calltime,
    stunts_3_calltime, stunts_4_calltime, stunts_5_calltime,
    } = callsheet;
    
  return (
    <div>
      <div className={`mt-0 text-center ${styles.Back3 }`}>
      <span className={`float-right ${styles.Close }`} onClick={() => setShowStu(false) } >Close</span> 
      <h5 className={`pl-5 text-center`} style={{ textTransform: 'uppercase'}} >STUNT DEPARTMENT </h5>
      </div>
      <Row>
      {/* Stunt Coordinator */}
      {(stunt_coordinator_calltime && stunt_coordinator_name) && ( 
          <Col xs={12} lg={6}>
          <Row className='mt-1 mx-0 d-flex align-items-center' >
            <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
                <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
                Stunt Coordinator</p>
                <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
                Stunt Coordinator</p> 
            </Col>
            <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
              <p className={`my-0 py-0 `}>{stunt_coordinator_name} </p>
            </Col>
            <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
              <p className={`my-0 py-0 `}>{stunt_coordinator_calltime} </p>
            </Col>
          </Row>
          <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
          </Col>
      ) }
      {/* Stunt Performer 1 */}
      {(stunts_1_calltime && stunts_1_name) && ( 
          <Col xs={12} lg={6}>
          <Row className='mt-1 mx-0 d-flex align-items-center' >
            <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
                <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
                Stunt Performer 1</p>
                <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
                Stunt Performer 1</p> 
            </Col>
            <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
              <p className={`my-0 py-0 `}>{stunts_1_name} </p>
            </Col>
            <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
              <p className={`my-0 py-0 `}>{stunts_1_calltime} </p>
            </Col>
          </Row>
          <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
          </Col>
      ) }
      {/* Stunt Performer 2 */}
      {(stunts_2_calltime && stunts_2_name) && ( 
          <Col xs={12} lg={6}>
          <Row className='mt-1 mx-0 d-flex align-items-center' >
            <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
                <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
                Stunt Performer 2</p>
                <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
                Stunt Performer 2</p> 
            </Col>
            <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
              <p className={`my-0 py-0 `}>{stunts_2_name} </p>
            </Col>
            <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
              <p className={`my-0 py-0 `}>{stunts_2_calltime} </p>
            </Col>
          </Row>
          <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
          </Col>
      ) }
      </Row>
      <div className={`my-3 mt-0 text-center ${styles.SubTitle }`}>
         <h5 className={`pr-3 text-center`} style={{ textTransform: 'uppercase'}} >
          SFX DEPARTMENT </h5>
      </div>
      <Row>
      {/* Stunt Performer 2 */}
      {(stunts_2_calltime && stunts_2_name) && ( 
          <Col xs={12} lg={6}>
          <Row className='mt-1 mx-0 d-flex align-items-center' >
            <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
                <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
                Stunt Performer 2</p>
                <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
                Stunt Performer 2</p> 
            </Col>
            <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
              <p className={`my-0 py-0 `}>{stunts_2_name} </p>
            </Col>
            <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
              <p className={`my-0 py-0 `}>{stunts_2_calltime} </p>
            </Col>
          </Row>
          <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
          </Col>
      ) }
      </Row>
    </div>
  )
}

export default TimesStunts