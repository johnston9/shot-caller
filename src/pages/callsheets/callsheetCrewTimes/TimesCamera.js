/* Component to display the Camera Department Calltimes
   on the Callsheet */
import React from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../../styles/Callsheets.module.css";

const TimesCamera = ({crewInfoOne, callsheet, setShowCam }) => {

  const { dop_name, 
    camera_operator_name, 
    camera_ass_1_name, 
    camera_ass_2_name,
    dit_name, 
    steadicam_name, 
    camera_pa_name, 
    oth_camera_pos_1_job, oth_camera_pos_1_name, 
    oth_camera_pos_2_job, oth_camera_pos_2_name, 
    oth_camera_pos_3_job, oth_camera_pos_3_name,
    oth_camera_pos_4_job, oth_camera_pos_4_name, 
        } = crewInfoOne || {};

  const { dop_calltime, camera_operator_calltime, camera_ass_1_calltime,
    camera_ass_2_calltime, dit_calltime, steadicam_calltime, camera_pa_calltime,
    oth_camera_pos_1_calltime, oth_camera_pos_2_calltime, 
    oth_camera_pos_3_calltime, oth_camera_pos_4_calltime,} = callsheet ;

  return (
    <div className="">
      <div className={`mt-0 text-center  ${styles.Back3 }`}>
      <span className={`float-right ${styles.Close }`} onClick={() => setShowCam(false) } >Close</span> 
      <h5 className={`pl-5 text-center`} style={{ textTransform: 'uppercase'}} >CAMERA DEPARTMENT</h5>
      </div>
      <Row>
      {/* DOP */}
      {(dop_calltime && dop_name) &&
          (<Col xs={12} lg={6}>
          <Row className={`mt-1 mx-0 d-flex align-items-center`} >
            <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
              <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
              DOP</p>
              <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
              DOP</p>                    
            </Col>
            <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
              <p className={`my-0 py-0 `}>{dop_name} </p>
            </Col>
            <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
              <p className={`my-0 py-0 `}>{dop_calltime} </p>
            </Col>
          </Row>
          <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
          </Col> )
      }
      {/* Camera Operator */}
      {(camera_operator_calltime && camera_operator_name) &&
          (<Col xs={12} lg={6}>
          <Row className={`mt-1 mx-0 d-flex align-items-center`} >
            <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
              <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
              Camera Operator</p>
              <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
              Camera Operator</p>                    
            </Col>
            <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
              <p className={`my-0 py-0 `}>{camera_operator_name} </p>
            </Col>
            <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
              <p className={`my-0 py-0 `}>{camera_operator_calltime} </p>
            </Col>
          </Row>
          <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
          </Col> )
      }
      {/* 1st AC */}
      {(camera_ass_1_calltime && camera_ass_1_name) &&
          (<Col xs={12} lg={6}>
          <Row className={`mt-1 mx-0 d-flex align-items-center`} >
            <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
              <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
              1st AC</p>
              <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
              1st AC</p>                    
            </Col>
            <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
              <p className={`my-0 py-0 `}>{camera_ass_1_name} </p>
            </Col>
            <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
              <p className={`my-0 py-0 `}>{camera_ass_1_calltime} </p>
            </Col>
          </Row>
          <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
          </Col> )
      }
      {/* 2nd AC */}
      {(camera_ass_2_calltime && camera_ass_2_name) &&
          (<Col xs={12} lg={6}>
          <Row className={`mt-1 mx-0 d-flex align-items-center`} >
            <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
              <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
              2nd AC</p>
              <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
              2nd AC</p>                    
            </Col>
            <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
              <p className={`my-0 py-0 `}>{camera_ass_2_name} </p>
            </Col>
            <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
              <p className={`my-0 py-0 `}>{camera_ass_2_calltime} </p>
            </Col>
          </Row>
          <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
          </Col> )
      }
      {/* DIT */}
      {(dit_calltime && dit_name) &&
          (<Col xs={12} lg={6}>
          <Row className={`mt-1 mx-0 d-flex align-items-center`} >
            <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
              <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
              DIT</p>
              <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
              DIT</p>                    
            </Col>
            <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
              <p className={`my-0 py-0 `}>{dit_name} </p>
            </Col>
            <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
              <p className={`my-0 py-0 `}>{dit_calltime} </p>
            </Col>
          </Row>
          <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
          </Col> )
      }
      {/* Steadicam */}
      {(steadicam_calltime && steadicam_name) &&
          (<Col xs={12} lg={6}>
          <Row className={`mt-1 mx-0 d-flex align-items-center`} >
            <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
              <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
              Steadicam</p>
              <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
              Steadicam</p>                    
            </Col>
            <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
              <p className={`my-0 py-0 `}>{steadicam_name} </p>
            </Col>
            <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
              <p className={`my-0 py-0 `}>{steadicam_calltime} </p>
            </Col>
          </Row>
          <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
          </Col> )
      }
      {/* Camera PA */}
      {(camera_pa_calltime && camera_pa_name) &&
          (<Col xs={12} lg={6}>
          <Row className={`mt-1 mx-0 d-flex align-items-center`} >
            <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
              <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
              Camera PA</p>
              <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
              Camera PA</p>                    
            </Col>
            <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
              <p className={`my-0 py-0 `}>{camera_pa_name} </p>
            </Col>
            <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
              <p className={`my-0 py-0 `}>{camera_pa_calltime} </p>
            </Col>
          </Row>
          <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
          </Col> )
      }
      {/* Other Camera Pos 1 */}
      {(oth_camera_pos_1_calltime && oth_camera_pos_1_name) &&
          (<Col xs={12} lg={6}>
          <Row className={`mt-1 mx-0 d-flex align-items-center`} >
            <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
              <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
              {oth_camera_pos_1_job}</p>
              <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
              {oth_camera_pos_1_job}</p>                    
            </Col>
            <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
              <p className={`my-0 py-0 `}>{oth_camera_pos_1_name} </p>
            </Col>
            <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
              <p className={`my-0 py-0 `}>{oth_camera_pos_1_calltime} </p>
            </Col>
          </Row>
          <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
          </Col> )
      }
      {/* Other Camera Pos 2 */}
      {(oth_camera_pos_2_calltime && oth_camera_pos_2_name) &&
          (<Col xs={12} lg={6}>
          <Row className={`mt-1 mx-0 d-flex align-items-center`} >
            <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
              <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
              {oth_camera_pos_2_job}</p>
              <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
              {oth_camera_pos_2_job}</p>                    
            </Col>
            <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
              <p className={`my-0 py-0 `}>{oth_camera_pos_2_name} </p>
            </Col>
            <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
              <p className={`my-0 py-0 `}>{oth_camera_pos_2_calltime} </p>
            </Col>
          </Row>
          <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
          </Col> )
      }
      {/* Other Camera Pos 3 */}
      {(oth_camera_pos_3_calltime && oth_camera_pos_3_name) &&
          (<Col xs={12} lg={6}>
          <Row className={`mt-1 mx-0 d-flex align-items-center`} >
            <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
              <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
              {oth_camera_pos_3_job}</p>
              <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
              {oth_camera_pos_3_job}</p>                    
            </Col>
            <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
              <p className={`my-0 py-0 `}>{oth_camera_pos_3_name} </p>
            </Col>
            <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
              <p className={`my-0 py-0 `}>{oth_camera_pos_3_calltime} </p>
            </Col>
          </Row>
          <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
          </Col> )
      }
      {/* Other Camera Pos 4 */}
      {(oth_camera_pos_4_calltime && oth_camera_pos_4_name) &&
          (<Col xs={12} lg={6}>
          <Row className={`mt-1 mx-0 d-flex align-items-center`} >
            <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
              <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
              {oth_camera_pos_4_job}</p>
              <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
              {oth_camera_pos_4_job}</p>                    
            </Col>
            <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
              <p className={`my-0 py-0 `}>{oth_camera_pos_4_name} </p>
            </Col>
            <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
              <p className={`my-0 py-0 `}>{oth_camera_pos_4_calltime} </p>
            </Col>
          </Row>
          <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
          </Col> )
      }
      </Row>
    </div>
  )
}

export default TimesCamera