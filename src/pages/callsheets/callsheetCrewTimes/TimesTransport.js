/* Component to display the Transport Department Calltimes
   on the Callsheet */
   import React from "react";
   import Col from 'react-bootstrap/Col';
   import Row from 'react-bootstrap/Row';
   import styles from "../../../styles/Callsheets.module.css";
   
   const TimesTransport = ({crewInfoOne, callsheet, setShowTra }) => {
   
     const {transport_captain_name,
       transport_manager_1_name, 
       transport_manager_2_name, 
       head_driver_name, 
       car1_name, 
       car2_name, 
       car3_name, 
       truck1_name,} = crewInfoOne || {};
   
     const {transport_captain_calltime, transport_manager_1_calltime,
       transport_manager_2_calltime, head_driver_calltime, car1_calltime,
       car2_calltime, car3_calltime, truck1_calltime,} = callsheet;
   
     return (
       <div>
         <div className={`mt-0 mb-2 text-center ${styles.Back3 }`}>
         <span className={`float-right ${styles.Close }`} onClick={() => setShowTra(false) } >Close</span> 
         <h5 className={`d-none d-md-block pl-5 mb-0 text-center ${styles.Bold }`} >
         TRANSPORTATION DEPARTMENT</h5>
          <h5 className={`d-block d-md-none pl-5 mb-0 text-center ${styles.Bold }`} >
          TRANSPORTATION</h5>
         </div>
         <Row>
         {/* Transport Captain */}
         {(transport_captain_calltime && transport_captain_name) &&
          (<Col xs={12} lg={6} className={`${styles.RightPanel}`}>
          <Row className={`mt-1 mx-0 d-flex align-items-center`} >
            <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
              <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
              Transport Captain</p>
              <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
              Transport Captain</p>                    
            </Col>
            <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
              <p className={`my-0 py-0 `}>{transport_captain_name} </p>
            </Col>
            <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
              <p className={`my-0 py-0 `}>{transport_captain_calltime} </p>
            </Col>
          </Row>
          <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
          </Col> )
         }
         {/* Transport Manager 1 */}
         {(transport_manager_1_calltime && transport_manager_1_name) &&
          (<Col xs={12} lg={6} className={`${styles.RightPanel}`}>
          <Row className={`mt-1 mx-0 d-flex align-items-center`} >
            <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
              <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
              Transport Manager 1</p>
              <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
              Transport Manager 1</p>                    
            </Col>
            <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
              <p className={`my-0 py-0 `}>{transport_manager_1_name} </p>
            </Col>
            <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
              <p className={`my-0 py-0 `}>{transport_manager_1_calltime} </p>
            </Col>
          </Row>
          <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
          </Col> )
         }
         {/* Transport Manager 2 */}
         {(transport_manager_2_calltime && transport_manager_2_name) &&
          (<Col xs={12} lg={6} className={`${styles.RightPanel}`}>
          <Row className={`mt-1 mx-0 d-flex align-items-center`} >
            <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
              <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
              Transport Manager 2</p>
              <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
              Transport Manager 2</p>                    
            </Col>
            <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
              <p className={`my-0 py-0 `}>{transport_manager_2_name} </p>
            </Col>
            <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
              <p className={`my-0 py-0 `}>{transport_manager_2_calltime} </p>
            </Col>
          </Row>
          <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
          </Col> )
         }
         {/* Head Driver */}
         {(head_driver_calltime && head_driver_name) &&
          (<Col xs={12} lg={6} className={`${styles.RightPanel}`}>
          <Row className={`mt-1 mx-0 d-flex align-items-center`} >
            <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
              <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
              Head Driver</p>
              <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
              Head Driver</p>                    
            </Col>
            <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
              <p className={`my-0 py-0 `}>{head_driver_name} </p>
            </Col>
            <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
              <p className={`my-0 py-0 `}>{head_driver_calltime} </p>
            </Col>
          </Row>
          <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
          </Col> )
         }
         {/* Driver 1 */}
         {(car1_calltime && car1_name) &&
          (<Col xs={12} lg={6} className={`${styles.RightPanel}`}>
          <Row className={`mt-1 mx-0 d-flex align-items-center`} >
            <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
              <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
              Driver 1</p>
              <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
              Driver 1</p>                    
            </Col>
            <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
              <p className={`my-0 py-0 `}>{car1_name} </p>
            </Col>
            <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
              <p className={`my-0 py-0 `}>{car1_calltime} </p>
            </Col>
          </Row>
          <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
          </Col> )
         }
         {/* Driver 2 */}
         {(car2_calltime && car2_name) &&
          (<Col xs={12} lg={6} className={`${styles.RightPanel}`}>
          <Row className={`mt-1 mx-0 d-flex align-items-center`} >
            <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
              <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
              Driver 2</p>
              <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
              Driver 2</p>                    
            </Col>
            <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
              <p className={`my-0 py-0 `}>{car2_name} </p>
            </Col>
            <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
              <p className={`my-0 py-0 `}>{car2_calltime} </p>
            </Col>
          </Row>
          <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
          </Col> )
         }
         {/* Driver 3 */}
         {(car3_calltime && car3_name) &&
          (<Col xs={12} lg={6} className={`${styles.RightPanel}`}>
          <Row className={`mt-1 mx-0 d-flex align-items-center`} >
            <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
              <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
              Driver 3</p>
              <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
              Driver 3</p>                    
            </Col>
            <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
              <p className={`my-0 py-0 `}>{car3_name} </p>
            </Col>
            <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
              <p className={`my-0 py-0 `}>{car3_calltime} </p>
            </Col>
          </Row>
          <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
          </Col> )
         }
         {/* Driver 4 */}
         {(truck1_calltime && truck1_name) &&
          (<Col xs={12} lg={6} className={`${styles.RightPanel}`}>
          <Row className={`mt-1 mx-0 d-flex align-items-center`} >
            <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
              <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
              Driver 4</p>
              <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
              Driver 4</p>                    
            </Col>
            <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
              <p className={`my-0 py-0 `}>{truck1_name} </p>
            </Col>
            <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
              <p className={`my-0 py-0 `}>{truck1_calltime} </p>
            </Col>
          </Row>
          <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
          </Col> )
         }
         </Row>
       </div>
     )
   }

export default TimesTransport