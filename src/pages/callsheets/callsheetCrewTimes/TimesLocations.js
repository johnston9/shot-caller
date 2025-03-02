/* Component to display the Locations Department Calltimes
   on the Callsheet */
import React from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../../styles/Callsheets.module.css";

const TimesLocations = ({crewInfoOne, callsheet, setShowLoc }) => {

  const {location_mngr_name, 
    location_ass_1_name,
    location_ass_2_name,
    location_ass_3_name,
    location_ass_4_name,
    location_security_name, } = crewInfoOne || {};

  const { location_mngr_calltime, location_ass_1_calltime, location_ass_2_calltime,
    location_ass_3_calltime, location_ass_4_calltime,
    location_security_calltime,
    } = callsheet;
  return (
    <div>
      <div className={`mt-0 mb-2 text-center ${styles.Back3 }`}>
      <span className={`float-right ${styles.Close }`} onClick={() => setShowLoc(false) } >Close</span> 
      <h5 className={`pl-5 text-center`} style={{ textTransform: 'uppercase'}} >LOCATIONS DEPARTMENT</h5>
      </div>
      <Row>
      {/* Location Manager */}
      {(location_mngr_calltime && location_mngr_name) &&
            (<Col xs={12} lg={6}>
            <Row className={`mt-1 mx-0 d-flex align-items-center`} >
              <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
                <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
                Location Manager</p>
                <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
                Location Manager</p>                    
              </Col>
              <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
                <p className={`my-0 py-0 `}>{location_mngr_name} </p>
              </Col>
              <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
                <p className={`my-0 py-0 `}>{location_mngr_calltime} </p>
              </Col>
            </Row>
            <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
            </Col> )
      }
      {/* Location Manager 2/Other - (using Location Assistant 1 keys for this) */}
      {(location_ass_1_calltime && location_ass_1_name) &&
            (<Col xs={12} lg={6}>
            <Row className={`mt-1 mx-0 d-flex align-items-center`} >
              <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
                <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
                Location Manager 2/Other</p>
                <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
                Location Manager 2/Other</p>                    
              </Col>
              <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
                <p className={`my-0 py-0 `}>{location_ass_1_name} </p>
              </Col>
              <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
                <p className={`my-0 py-0 `}>{location_ass_1_calltime} </p>
              </Col>
            </Row>
            <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
            </Col> )
      }
      {/* Assistant Location Manager - (using "Location Assistant 2" keys for this) */}
      {(location_ass_2_calltime && location_ass_2_name) &&
            (<Col xs={12} lg={6}>
            <Row className={`mt-1 mx-0 d-flex align-items-center`} >
              <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
                <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
                Assistant Location Manager</p>
                <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
                Assistant Location Manager</p>                    
              </Col>
              <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
                <p className={`my-0 py-0 `}>{location_ass_2_name} </p>
              </Col>
              <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
                <p className={`my-0 py-0 `}>{location_ass_2_calltime} </p>
              </Col>
            </Row>
            <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
            </Col> )
      }
      {/* Location Assistant 1 - (using "Location Assistant 3" keys for this) */}
      {(location_ass_3_calltime && location_ass_3_name) &&
            (<Col xs={12} lg={6}>
            <Row className={`mt-1 mx-0 d-flex align-items-center`} >
              <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
                <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
                Location Assistant 1</p>
                <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
                Location Assistant 1</p>                    
              </Col>
              <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
                <p className={`my-0 py-0 `}>{location_ass_3_name} </p>
              </Col>
              <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
                <p className={`my-0 py-0 `}>{location_ass_3_calltime} </p>
              </Col>
            </Row>
            <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
            </Col> )
      }
      {/* Location Assistant 2 - (using "Location Assistant 4" keys for this) */}
      {(location_ass_4_calltime && location_ass_4_name) &&
            (<Col xs={12} lg={6}>
            <Row className={`mt-1 mx-0 d-flex align-items-center`} >
              <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
                <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
                Location Assistant 2</p>
                <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
                Location Assistant 2</p>                    
              </Col>
              <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
                <p className={`my-0 py-0 `}>{location_ass_4_name} </p>
              </Col>
              <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
                <p className={`my-0 py-0 `}>{location_ass_4_calltime} </p>
              </Col>
            </Row>
            <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
            </Col> )
      }
      {/* Location Security/Other */}
      {(location_security_calltime && location_security_name) &&
            (<Col xs={12} lg={6}>
            <Row className={`mt-1 mx-0 d-flex align-items-center`} >
              <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
                <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
                Location Security/Other</p>
                <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
                Location Security/Other</p>                    
              </Col>
              <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
                <p className={`my-0 py-0 `}>{location_security_name} </p>
              </Col>
              <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
                <p className={`my-0 py-0 `}>{location_security_calltime} </p>
              </Col>
            </Row>
            <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
            </Col> )
      }
      </Row>
    </div>
  )
}

export default TimesLocations