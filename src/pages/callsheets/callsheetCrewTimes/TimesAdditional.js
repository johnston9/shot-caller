/* Component to display the Additional Crew
   Calltimes on the Callsheet */
   import React from "react";
   import Col from 'react-bootstrap/Col';
   import Row from 'react-bootstrap/Row';
   import styles from "../../../styles/Callsheets.module.css";
   
   const TimesAdditional = ({crewInfoOne, callsheet, setShowAdd }) => {
   
     const {add_pos_1_job, add_pos_1_name,
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
        } = crewInfoOne || {};
   
     const {add_pos_1_calltime,
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
       } = callsheet;

     return (
       <div className="text-center">
         <div className={`mt-0 text-center ${styles.Back3 }`}>
         <span className={`float-right ${styles.Close }`} onClick={() => setShowAdd(false) } >Close</span> 
         <h5 className={`d-block d-md-none pl-5 text-center`} 
         style={{ textTransform: 'uppercase'}} >ADDITIONAL </h5>
          <h5 className={`d-none d-md-block pl-5 text-center`} style={{ textTransform: 'uppercase'}} >
          ADDITIONAL POSITIONS </h5>
         </div>
         <Row>
         {/* additional position 1 */}
         {(add_pos_1_calltime && add_pos_1_name) &&
            (<Col xs={12} lg={6}>
            <Row className={`mt-1 mx-0 d-flex align-items-center`} >
              <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
                <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
                {add_pos_1_job}</p>
                <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
                {add_pos_1_job}</p>                    
              </Col>
              <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
                <p className={`my-0 py-0 `}>{add_pos_1_name} </p>
              </Col>
              <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
                <p className={`my-0 py-0 `}>{add_pos_1_calltime} </p>
              </Col>
            </Row>
            <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
            </Col> )
          }
          {/* additional position 2 */}
          {(add_pos_2_calltime && add_pos_2_name) &&
            (<Col xs={12} lg={6}>
            <Row className={`mt-1 mx-0 d-flex align-items-center`} >
              <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
                <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
                {add_pos_2_job}</p>
                <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
                {add_pos_2_job}</p>                    
              </Col>
              <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
                <p className={`my-0 py-0 `}>{add_pos_2_name} </p>
              </Col>
              <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
                <p className={`my-0 py-0 `}>{add_pos_2_calltime} </p>
              </Col>
            </Row>
            <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
            </Col> )
          }
          {/* additional position 3 */}
          {(add_pos_3_calltime && add_pos_3_name) &&
            (<Col xs={12} lg={6}>
            <Row className={`mt-1 mx-0 d-flex align-items-center`} >
              <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
                <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
                {add_pos_3_job}</p>
                <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
                {add_pos_3_job}</p>                    
              </Col>
              <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
                <p className={`my-0 py-0 `}>{add_pos_3_name} </p>
              </Col>
              <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
                <p className={`my-0 py-0 `}>{add_pos_3_calltime} </p>
              </Col>
            </Row>
            <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
            </Col> )
          }
          {/* additional position 4 */}
          {(add_pos_4_calltime && add_pos_4_name) &&
            (<Col xs={12} lg={6}>
            <Row className={`mt-1 mx-0 d-flex align-items-center`} >
              <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
                <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
                {add_pos_4_job}</p>
                <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
                {add_pos_4_job}</p>                    
              </Col>
              <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
                <p className={`my-0 py-0 `}>{add_pos_4_name} </p>
              </Col>
              <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
                <p className={`my-0 py-0 `}>{add_pos_4_calltime} </p>
              </Col>
            </Row>
            <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
            </Col> )
          }
          {/* additional position 5 */}
          {(add_pos_5_calltime && add_pos_5_name) &&
            (<Col xs={12} lg={6}>
            <Row className={`mt-1 mx-0 d-flex align-items-center`} >
              <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
                <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
                {add_pos_5_job}</p>
                <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
                {add_pos_5_job}</p>                    
              </Col>
              <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
                <p className={`my-0 py-0 `}>{add_pos_5_name} </p>
              </Col>
              <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
                <p className={`my-0 py-0 `}>{add_pos_5_calltime} </p>
              </Col>
            </Row>
            <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
            </Col> )
          }
          {/* additional position 6 */}
          {(add_pos_6_calltime && add_pos_6_name) &&
            (<Col xs={12} lg={6}>
            <Row className={`mt-1 mx-0 d-flex align-items-center`} >
              <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
                <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
                {add_pos_6_job}</p>
                <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
                {add_pos_6_job}</p>                    
              </Col>
              <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
                <p className={`my-0 py-0 `}>{add_pos_6_name} </p>
              </Col>
              <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
                <p className={`my-0 py-0 `}>{add_pos_6_calltime} </p>
              </Col>
            </Row>
            <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
            </Col> )
          }
          {/* additional position 7 */}
          {(add_pos_7_calltime && add_pos_7_name) &&
            (<Col xs={12} lg={6}>
            <Row className={`mt-1 mx-0 d-flex align-items-center`} >
              <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
                <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
                {add_pos_7_job}</p>
                <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
                {add_pos_7_job}</p>                    
              </Col>
              <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
                <p className={`my-0 py-0 `}>{add_pos_7_name} </p>
              </Col>
              <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
                <p className={`my-0 py-0 `}>{add_pos_7_calltime} </p>
              </Col>
            </Row>
            <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
            </Col> )
          }
          {/* additional position 8 */}
          {(add_pos_8_calltime && add_pos_8_name) &&
            (<Col xs={12} lg={6}>
            <Row className={`mt-1 mx-0 d-flex align-items-center`} >
              <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
                <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
                {add_pos_8_job}</p>
                <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
                {add_pos_8_job}</p>                    
              </Col>
              <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
                <p className={`my-0 py-0 `}>{add_pos_8_name} </p>
              </Col>
              <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
                <p className={`my-0 py-0 `}>{add_pos_8_calltime} </p>
              </Col>
            </Row>
            <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
            </Col> )
          }
          {/* additional position 9 */}
          {(add_pos_9_calltime && add_pos_9_name) &&
            (<Col xs={12} lg={6}>
            <Row className={`mt-1 mx-0 d-flex align-items-center`} >
              <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
                <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
                {add_pos_9_job}</p>
                <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
                {add_pos_9_job}</p>                    
              </Col>
              <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
                <p className={`my-0 py-0 `}>{add_pos_9_name} </p>
              </Col>
              <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
                <p className={`my-0 py-0 `}>{add_pos_9_calltime} </p>
              </Col>
            </Row>
            <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
            </Col> )
          }
          {/* additional position 10 */}
          {(add_pos_10_calltime && add_pos_10_name) &&
            (<Col xs={12} lg={6}>
            <Row className={`mt-1 mx-0 d-flex align-items-center`} >
              <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
                <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
                {add_pos_10_job}</p>
                <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
                {add_pos_10_job}</p>                    
              </Col>
              <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
                <p className={`my-0 py-0 `}>{add_pos_10_name} </p>
              </Col>
              <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
                <p className={`my-0 py-0 `}>{add_pos_10_calltime} </p>
              </Col>
            </Row>
            <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
            </Col> )
          }
          {/* additional position 11 */}
          {(add_pos_11_calltime && add_pos_11_name) &&
            (<Col xs={12} lg={6}>
            <Row className={`mt-1 mx-0 d-flex align-items-center`} >
              <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
                <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
                {add_pos_11_job}</p>
                <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
                {add_pos_11_job}</p>                    
              </Col>
              <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
                <p className={`my-0 py-0 `}>{add_pos_11_name} </p>
              </Col>
              <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
                <p className={`my-0 py-0 `}>{add_pos_11_calltime} </p>
              </Col>
            </Row>
            <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
            </Col> )
          }
          {/* additional position 12 */}
          {(add_pos_12_calltime && add_pos_12_name) &&
            (<Col xs={12} lg={6}>
            <Row className={`mt-1 mx-0 d-flex align-items-center`} >
              <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
                <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
                {add_pos_12_job}</p>
                <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
                {add_pos_12_job}</p>                    
              </Col>
              <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
                <p className={`my-0 py-0 `}>{add_pos_12_name} </p>
              </Col>
              <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
                <p className={`my-0 py-0 `}>{add_pos_12_calltime} </p>
              </Col>
            </Row>
            <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
            </Col> )
          }
          {/* additional position 13 */}
          {(add_pos_13_calltime && add_pos_13_name) &&
            (<Col xs={12} lg={6}>
            <Row className={`mt-1 mx-0 d-flex align-items-center`} >
              <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
                <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
                {add_pos_13_job}</p>
                <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
                {add_pos_13_job}</p>                    
              </Col>
              <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
                <p className={`my-0 py-0 `}>{add_pos_13_name} </p>
              </Col>
              <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
                <p className={`my-0 py-0 `}>{add_pos_13_calltime} </p>
              </Col>
            </Row>
            <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
            </Col> )
          }
          {/* additional position 14 */}
          {(add_pos_14_calltime && add_pos_14_name) &&
            (<Col xs={12} lg={6}>
            <Row className={`mt-1 mx-0 d-flex align-items-center`} >
              <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
                <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
                {add_pos_14_job}</p>
                <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
                {add_pos_14_job}</p>                    
              </Col>
              <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
                <p className={`my-0 py-0 `}>{add_pos_14_name} </p>
              </Col>
              <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
                <p className={`my-0 py-0 `}>{add_pos_14_calltime} </p>
              </Col>
            </Row>
            <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
            </Col> )
          }
          {/* additional position 15 */}
          {(add_pos_15_calltime && add_pos_15_name) &&
            (<Col xs={12} lg={6}>
            <Row className={`mt-1 mx-0 d-flex align-items-center`} >
              <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
                <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
                {add_pos_15_job}</p>
                <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
                {add_pos_15_job}</p>                    
              </Col>
              <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
                <p className={`my-0 py-0 `}>{add_pos_15_name} </p>
              </Col>
              <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
                <p className={`my-0 py-0 `}>{add_pos_15_calltime} </p>
              </Col>
            </Row>
            <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
            </Col> )
          }
         </Row>
       </div>
     )
   }

export default TimesAdditional