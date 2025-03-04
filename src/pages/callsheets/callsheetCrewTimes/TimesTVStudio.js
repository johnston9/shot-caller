/* Component to display the TVStudio Department Calltimes
   on the Callsheet */
   import React from "react";
   import Col from 'react-bootstrap/Col';
   import Row from 'react-bootstrap/Row';
   import styles from "../../../styles/Callsheets.module.css";
   
   const TimesTVStudio = ({crewInfoOne, callsheet, setShowTv }) => {

    const {
      add_pos_16_name,
      add_pos_17_name,
      add_pos_18_name,
      add_pos_20_name,}
       = crewInfoOne || {};
   
     const {add_pos_16_calltime,
      add_pos_17_calltime,
      add_pos_18_calltime,
      add_pos_20_calltime,
       } = callsheet;
       
     return (
       <div>
         <div className={`mt-0 text-center ${styles.Back3 }`}>
         <span className={`float-right ${styles.Close }`} onClick={() => setShowTv(false) } >Close</span> 
         <h5 className={`pl-5 text-center`} style={{ textTransform: 'uppercase'}} >TV STUDIO POSITIONS </h5>
         </div>
         <div>
         <Row>
         {/* Technical Director - (Using Additional Position 16 keys) add_pos_16_job */}
         {(add_pos_16_calltime && add_pos_16_name) &&
          (<Col xs={12} lg={6}>
          <Row className={`mt-1 mx-0 d-flex align-items-center`} >
            <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
              <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
              Technical Director</p>
              <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
              Technical Director</p>                    
            </Col>
            <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
              <p className={`my-0 py-0 `}>{add_pos_16_name} </p>
            </Col>
            <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
              <p className={`my-0 py-0 `}>{add_pos_16_calltime} </p>
            </Col>
          </Row>
          <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
          </Col> )
         }
         {/* Floor Manager - (Using Additional Position 17 keys) add_pos_17_job */}
         {(add_pos_17_calltime && add_pos_17_name) &&
          (<Col xs={12} lg={6}>
          <Row className={`mt-1 mx-0 d-flex align-items-center`} >
            <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
              <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
              Floor Manager</p>
              <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
              Floor Manager</p>                    
            </Col>
            <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
              <p className={`my-0 py-0 `}>{add_pos_17_name} </p>
            </Col>
            <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
              <p className={`my-0 py-0 `}>{add_pos_17_calltime} </p>
            </Col>
          </Row>
          <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
          </Col> )
         }
         {/* A1/Audio - (Using Additional Position 18 keys) add_pos_18_job */}
         {(add_pos_18_calltime && add_pos_18_name) &&
          (<Col xs={12} lg={6}>
          <Row className={`mt-1 mx-0 d-flex align-items-center`} >
            <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
              <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
              A1/Audio</p>
              <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
              A1/Audio</p>                    
            </Col>
            <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
              <p className={`my-0 py-0 `}>{add_pos_18_name} </p>
            </Col>
            <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
              <p className={`my-0 py-0 `}>{add_pos_18_calltime} </p>
            </Col>
          </Row>
          <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
          </Col> )
         }
         {/* Stage Manager - (Using Additional Position 20 keys) add_pos_20_job */}
         {(add_pos_20_calltime && add_pos_20_name) &&
          (<Col xs={12} lg={6}>
          <Row className={`mt-1 mx-0 d-flex align-items-center`} >
            <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
              <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
              Stage Manager</p>
              <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
              Stage Manager</p>                    
            </Col>
            <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
              <p className={`my-0 py-0 `}>{add_pos_20_name} </p>
            </Col>
            <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
              <p className={`my-0 py-0 `}>{add_pos_20_calltime} </p>
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

export default TimesTVStudio