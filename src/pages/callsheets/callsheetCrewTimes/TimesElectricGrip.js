/* Component to display the Electric and Grip Departments
   Calltimes on the Callsheet */
import React from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../../styles/Callsheets.module.css";

const TimesElectricGrip = ({crewInfoOne, callsheet, setShowEle }) => {

  const {gaffer_name, 
    best_boy_electric_name, 
    electric_3_name,
    electric_4_name,
    keygrip_name, 
    best_boy_grip_name, 
    dolly_grip_name, 
    swing_ge1_name,
    swing_ge2_name,
    swing_ge3_name,
    swing_ge4_name,
    swing_ge5_name,} = crewInfoOne || {};

  const { gaffer_calltime, best_boy_electric_calltime, electric_3_calltime,
    electric_4_calltime, keygrip_calltime, best_boy_grip_calltime,
    dolly_grip_calltime, swing_ge1_calltime, swing_ge2_calltime,
    swing_ge3_calltime, swing_ge4_calltime, swing_ge5_calltime,
    } = callsheet;

  return (
    <div>
      <div className={`mt-0 mb-2 text-center  ${styles.Back3 }`}>
      <span className={`float-right ${styles.Close }`} onClick={() => setShowEle(false) } >Close</span> 
      <h5 className={`d-none d-md-block pl-5 mb-0 text-center ${styles.Bold }`} >
      ELECTRIC DEPARTMENT</h5>
      <h5 className={`d-block d-md-none pl-5 mb-0 text-center ${styles.Bold }`} >
      ELECTRIC</h5>
      </div>
      <Row>
      {/* Gaffer */}
      {(gaffer_calltime && gaffer_name) &&
            (<Col xs={12} lg={6}>
            <Row className={`mt-1 mx-0 d-flex align-items-center`} >
              <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
                <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
                Gaffer</p>
                <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
                Gaffer</p>                    
              </Col>
              <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
                <p className={`my-0 py-0 `}>{gaffer_name} </p>
              </Col>
              <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
                <p className={`my-0 py-0 `}>{gaffer_calltime} </p>
              </Col>
            </Row>
            <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
            </Col> )
      }
      {/* Best Boy Electric */}
      {(best_boy_electric_calltime && best_boy_electric_name) &&
            (<Col xs={12} lg={6}>
            <Row className={`mt-1 mx-0 d-flex align-items-center`} >
              <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
                <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
                Best Boy Electric</p>
                <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
                Best Boy Electric</p>                    
              </Col>
              <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
                <p className={`my-0 py-0 `}>{best_boy_electric_name} </p>
              </Col>
              <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
                <p className={`my-0 py-0 `}>{best_boy_electric_calltime} </p>
              </Col>
            </Row>
            <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
            </Col> )
      }
      {/* 3rd Electric */}
      {(electric_3_calltime && electric_3_name) &&
            (<Col xs={12} lg={6}>
            <Row className={`mt-1 mx-0 d-flex align-items-center`} >
              <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
                <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
                3rd Electric</p>
                <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
                3rd Electric</p>                    
              </Col>
              <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
                <p className={`my-0 py-0 `}>{electric_3_name} </p>
              </Col>
              <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
                <p className={`my-0 py-0 `}>{electric_3_calltime} </p>
              </Col>
            </Row>
            <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
            </Col> )
      }
      {/* Electrician */}
      {(electric_4_calltime && electric_4_name) &&
            (<Col xs={12} lg={6}>
            <Row className={`mt-1 mx-0 d-flex align-items-center`} >
              <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
                <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
                Electrician</p>
                <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
                Electrician</p>                    
              </Col>
              <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
                <p className={`my-0 py-0 `}>{electric_4_name} </p>
              </Col>
              <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
                <p className={`my-0 py-0 `}>{electric_4_calltime} </p>
              </Col>
            </Row>
            <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
            </Col> )
      }
      </Row>
      {/* GRIP */}
      <div className={`mb-2 mt-4 text-center ${styles.Back3 }`}>
        <h5 className={`mb-0 text-center ${styles.Bold }`} >
        GRIP DEPARTMENT</h5>
      </div>
      <Row>
      {/* Keygrip */}
      {(keygrip_calltime && keygrip_name) &&
            (<Col xs={12} lg={6}>
            <Row className={`mt-1 mx-0 d-flex align-items-center`} >
              <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
                <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
                Keygrip</p>
                <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
                Keygrip</p>                    
              </Col>
              <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
                <p className={`my-0 py-0 `}>{keygrip_name} </p>
              </Col>
              <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
                <p className={`my-0 py-0 `}>{keygrip_calltime} </p>
              </Col>
            </Row>
            <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
            </Col> )
      }
      {/* Best Boy Grip */}
      {(best_boy_grip_calltime && best_boy_grip_name) &&
            (<Col xs={12} lg={6}>
            <Row className={`mt-1 mx-0 d-flex align-items-center`} >
              <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
                <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
                Best Boy Grip</p>
                <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
                Best Boy Grip</p>                    
              </Col>
              <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
                <p className={`my-0 py-0 `}>{best_boy_grip_name} </p>
              </Col>
              <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
                <p className={`my-0 py-0 `}>{best_boy_grip_calltime} </p>
              </Col>
            </Row>
            <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
            </Col> )
      }
      {/* Dolly Grip */}
      {(dolly_grip_calltime && dolly_grip_name) &&
            (<Col xs={12} lg={6}>
            <Row className={`mt-1 mx-0 d-flex align-items-center`} >
              <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
                <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
                Dolly Grip</p>
                <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
                Dolly Grip</p>                    
              </Col>
              <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
                <p className={`my-0 py-0 `}>{dolly_grip_name} </p>
              </Col>
              <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
                <p className={`my-0 py-0 `}>{dolly_grip_calltime} </p>
              </Col>
            </Row>
            <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
            </Col> )
      }
      {/* G&E Swing 1 */}
      {(swing_ge1_calltime && swing_ge1_name) &&
            (<Col xs={12} lg={6}>
            <Row className={`mt-1 mx-0 d-flex align-items-center`} >
              <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
                <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
                G&E Swing 1</p>
                <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
                G&E Swing 1</p>                    
              </Col>
              <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
                <p className={`my-0 py-0 `}>{swing_ge1_name} </p>
              </Col>
              <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
                <p className={`my-0 py-0 `}>{swing_ge1_calltime} </p>
              </Col>
            </Row>
            <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
            </Col> )
      }
      {/* G&E Swing 2 */}
      {(swing_ge2_calltime && swing_ge2_name) &&
            (<Col xs={12} lg={6}>
            <Row className={`mt-1 mx-0 d-flex align-items-center`} >
              <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
                <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
                G&E Swing 2</p>
                <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
                G&E Swing 2</p>                    
              </Col>
              <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
                <p className={`my-0 py-0 `}>{swing_ge2_name} </p>
              </Col>
              <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
                <p className={`my-0 py-0 `}>{swing_ge2_calltime} </p>
              </Col>
            </Row>
            <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
            </Col> )
      }
      {/* G&E Swing 3 */}
      {(swing_ge3_calltime && swing_ge3_name) &&
            (<Col xs={12} lg={6}>
            <Row className={`mt-1 mx-0 d-flex align-items-center`} >
              <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
                <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
                G&E Swing 3</p>
                <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
                G&E Swing 3</p>                    
              </Col>
              <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
                <p className={`my-0 py-0 `}>{swing_ge3_name} </p>
              </Col>
              <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
                <p className={`my-0 py-0 `}>{swing_ge3_calltime} </p>
              </Col>
            </Row>
            <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
            </Col> )
      }
      {/* G&E Swing 4 */}
      {(swing_ge4_calltime && swing_ge4_name) &&
            (<Col xs={12} lg={6}>
            <Row className={`mt-1 mx-0 d-flex align-items-center`} >
              <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
                <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
                G&E Swing 4</p>
                <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
                G&E Swing 4</p>                    
              </Col>
              <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
                <p className={`my-0 py-0 `}>{swing_ge4_name} </p>
              </Col>
              <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
                <p className={`my-0 py-0 `}>{swing_ge4_calltime} </p>
              </Col>
            </Row>
            <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
            </Col> )
      }
      {/* G&E Swing 5 */}
      {(swing_ge5_calltime && swing_ge5_name) &&
            (<Col xs={12} lg={6}>
            <Row className={`mt-1 mx-0 d-flex align-items-center`} >
              <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
                <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
                G&E Swing 5</p>
                <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
                G&E Swing 5</p>                    
              </Col>
              <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
                <p className={`my-0 py-0 `}>{swing_ge5_name} </p>
              </Col>
              <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
                <p className={`my-0 py-0 `}>{swing_ge5_calltime} </p>
              </Col>
            </Row>
            <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
            </Col> )
      }
      </Row>
    </div>
  )
}

export default TimesElectricGrip