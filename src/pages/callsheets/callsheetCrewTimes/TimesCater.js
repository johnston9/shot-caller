/* Component to display the Craft Services Calltimes
   on the Callsheet */
   import React from "react";
   import Col from 'react-bootstrap/Col';
   import Row from 'react-bootstrap/Row';
   import styles from "../../../styles/Callsheets.module.css";
   
   const TimesCater = ({crewInfoOne, callsheet, setShowScr }) => {
   
     const {craft_service_name,
       crafty_ass_name, 
     } = crewInfoOne || {};
   
     const { craft_service_calltime,
       crafty_ass_calltime,
       } = callsheet;
       
     return (
       <div>
         <div className={`mt-0 text-center ${styles.Back3 }`}>
         <span className={`float-right ${styles.Close }`} onClick={() => setShowScr(false) } >Close</span> 
         <h5 className={`pl-5 text-center`} style={{ textTransform: 'uppercase'}} >CATERING</h5>
         </div>
         <Row>
          <Col className="text-center pt-2">
          <p>
          All Catering to be handled seperatly.
          </p>
          </Col>
         </Row>
         {/* CRAFT SERVICES */}
         <div className={`mt-0 text-center ${styles.Back3 }`}>
           <h5 className={` text-center`} style={{ textTransform: 'uppercase'}} >CRAFT SERVICES  </h5>
         </div>
         <Row>
          {/* Craft Service */}
          {(craft_service_calltime && craft_service_name) &&
            (<Col xs={12} lg={6}>
            <Row className={`mt-1 mx-0 d-flex align-items-center`} >
              <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
                <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
                Craft Service</p>
                <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
                Craft Service</p>                    
              </Col>
              <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
                <p className={`my-0 py-0 `}>{craft_service_name} </p>
              </Col>
              <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
                <p className={`my-0 py-0 `}>{craft_service_calltime} </p>
              </Col>
            </Row>
            <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
            </Col> )
          }
          {/* Crafty Assistant */}
          {(crafty_ass_calltime && crafty_ass_name) &&
          (<Col xs={12} lg={6}>
          <Row className={`mt-1 mx-0 d-flex align-items-center`} >
            <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
              <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
              Crafty Assistant</p>
              <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
              Crafty Assistant</p>                    
            </Col>
            <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
              <p className={`my-0 py-0 `}>{crafty_ass_name} </p>
            </Col>
            <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
              <p className={`my-0 py-0 `}>{crafty_ass_calltime} </p>
            </Col>
          </Row>
          <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
          </Col> )
         }
          </Row>
       </div>
     )
   }

export default TimesCater