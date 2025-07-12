/* Component to display the Construction and Wrangling Departments Calltimes
   on the Callsheet */
   import React from "react";
   import Col from 'react-bootstrap/Col';
   import Row from 'react-bootstrap/Row';
   import styles from "../../../styles/Callsheets.module.css";
   
   const TimesConWrang = ({crewInfoOne, callsheet, setShowWra }) => {
   
    const { legal_name,
      add_pos_19_name,
      makeup_artist_5_name,
      truck3_name,
      truck2_name,
     } = crewInfoOne || {};
   
     const { legal_calltime,
      add_pos_19_calltime,
      makeup_artist_5_calltime,
      truck3_calltime,
      truck2_calltime,
       } = callsheet;
     return (
       <div>
         <div className={`mt-0 mb-2 text-center ${styles.Back3 }`}>
         <span className={`float-right ${styles.Close }`} onClick={() => setShowWra(false) } >Close</span> 
         <h5 className={`d-none d-md-block pl-5 text-center`} style={{ textTransform: 'uppercase'}} >
          CONSTRUCTION DEPARTMENT </h5>
          <h5 className={`d-block d-md-none pl-5 text-center`} style={{ textTransform: 'uppercase'}} >
          CONSTRUCTION </h5>
         </div>
         <div>
         <Row>
         {/* Standby Carpenter (Using truck 2 keys) */}
         {(truck2_calltime && truck2_name) &&
            (<Col xs={12} lg={6} className={`${styles.RightPanel}`}>
            <Row className={`mt-1 mx-0 d-flex align-items-center`} >
              <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
                <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
                Standby Carpenter</p>
                <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
                Standby Carpenter</p>                    
              </Col>
              <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
                <p className={`my-0 py-0 `}>{truck2_name} </p>
              </Col>
              <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
                <p className={`my-0 py-0 `}>{truck2_calltime} </p>
              </Col>
            </Row>
            <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
            </Col> )
          }
          {/* Standby Painter (Using Additional Position 19 keys) */}
          {(add_pos_19_calltime && add_pos_19_name) &&
            (<Col xs={12} lg={6} className={`${styles.RightPanel}`}>
            <Row className={`mt-1 mx-0 d-flex align-items-center`} >
              <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
                <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
                Standby Painter</p>
                <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
                Standby Painter</p>                    
              </Col>
              <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
                <p className={`my-0 py-0 `}>{add_pos_19_name} </p>
              </Col>
              <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
                <p className={`my-0 py-0 `}>{add_pos_19_calltime} </p>
              </Col>
            </Row>
            <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
            </Col> )
          }
          {/* Standby Rigger (Using makeup artist 5 keys) */}
          {(makeup_artist_5_calltime && makeup_artist_5_name) &&
            (<Col xs={12} lg={6} className={`${styles.RightPanel}`}>
            <Row className={`mt-1 mx-0 d-flex align-items-center`} >
              <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
                <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
                Standby Rigger</p>
                <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
                Standby Rigger</p>                    
              </Col>
              <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
                <p className={`my-0 py-0 `}>{makeup_artist_5_name} </p>
              </Col>
              <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
                <p className={`my-0 py-0 `}>{makeup_artist_5_calltime} </p>
              </Col>
            </Row>
            <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
            </Col> )
          }
          {/* Standby Stagehand (Using Truck 3 keys) */}
          {(truck3_calltime && truck3_name) &&
            (<Col xs={12} lg={6} className={`${styles.RightPanel}`}>
            <Row className={`mt-1 mx-0 d-flex align-items-center`} >
              <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
                <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
                Standby Stagehand</p>
                <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
                Standby Stagehand</p>                    
              </Col>
              <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
                <p className={`my-0 py-0 `}>{truck3_name} </p>
              </Col>
              <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
                <p className={`my-0 py-0 `}>{truck3_calltime} </p>
              </Col>
            </Row>
            <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
            </Col> )
          }
          </Row>
          {/* WRANGLING */}
          <div className={`mt-4 mb-2 text-center ${styles.SubTitle }`}>
            <h5 className={`d-none d-md-block mb-0 text-center ${styles.Bold }`} >
            WRANGLING DEPARTMENT</h5>
          <h5 className={`d-block d-md-none mb-0 text-center ${styles.Bold }`} >
          WRANGLING</h5>
          </div>
          <Row>
          {/* Head Wrangler (Using legal keys) */}
          {(legal_calltime && legal_name) &&
            (<Col xs={12} lg={6} className={`${styles.RightPanel}`}>
            <Row className={`mt-1 mx-0 d-flex align-items-center`} >
              <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
                <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
                Head Wrangler</p>
                <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
                Head Wrangler</p>                    
              </Col>
              <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
                <p className={`my-0 py-0 `}>{legal_name} </p>
              </Col>
              <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
                <p className={`my-0 py-0 `}>{legal_calltime} </p>
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

export default TimesConWrang