/* Component to display the Transport Department Calltimes
   on the Callsheet */
   import React from "react";
   import Col from 'react-bootstrap/Col';
   import Row from 'react-bootstrap/Row';
   import styles from "../../../styles/Callsheets.module.css";
   
   const TimesTransport = ({crewInfoOne, callsheet, setShowTra }) => {
   
     const {sound_mixer_name,
       boom_operator_name, 
       sound_assistant_1_name,
       sound_assistant_2_name,
       transport_captain_name,
       transport_manager_1_name, 
       transport_manager_2_name, 
       head_driver_name, 
       car1_name, 
       car2_name, 
       car3_name, 
       truck1_name,
       truck2_name,
       truck3_name, } = crewInfoOne || {};
   
     const { sound_mixer_calltime, boom_operator_calltime, sound_assistant_1_calltime,
       sound_assistant_2_calltime, transport_captain_calltime, transport_manager_1_calltime,
       transport_manager_2_calltime, head_driver_calltime, car1_calltime,
       car2_calltime, car3_calltime, truck1_calltime, truck2_calltime,
       truck3_calltime,
       } = callsheet;
   
     return (
       <div>
         <div className={`mt-0 mb-2 text-center ${styles.Back3 }`}>
         <span className={`float-right ${styles.Close }`} onClick={() => setShowTra(false) } >Close</span> 
         <h5 className={`pl-5 ml-3 text-center`} style={{ textTransform: 'uppercase'}} >TRANSPORT DEPARTMENT </h5>
         </div>
         <Row>
         {/* Transport Captain */}
         {transport_captain_calltime && 
             (<Col xs={12} md={6}>
             <Row className={` mx-0 `} >
               <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
                 <p className={`my-0 py-0 `}>Transport Captain</p>
               </Col>
               <Col className={`mx-0 px-1  ${styles.Border}`} xs={5} md={5} >
                 <p className={`my-0 py-0 `}>{transport_captain_name} </p>
               </Col>
               <Col className={`mx-0 px-1  ${styles.Border}`} xs={2} md={2} >
                 <p className={`my-0 py-0 `}>{transport_captain_calltime} </p>
               </Col>
             </Row>
             </Col> )
         }
         {/* Transport Mngr 1 */}
         {transport_manager_1_calltime && 
             (<Col xs={12} md={6}>
             <Row className={` mx-0 `} >
               <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
                 <p className={`my-0 py-0 `}>Transport Mngr 1</p>
               </Col>
               <Col className={`mx-0 px-1  ${styles.Border}`} xs={5} md={5} >
                 <p className={`my-0 py-0 `}>{transport_manager_1_name} </p>
               </Col>
               <Col className={`mx-0 px-1  ${styles.Border}`} xs={2} md={2} >
                 <p className={`my-0 py-0 `}>{transport_manager_1_calltime} </p>
               </Col>
             </Row>
             </Col> )
         }
         {/* Transport Mngr 2 */}
         {transport_manager_2_calltime && 
             (<Col xs={12} md={6}>
             <Row className={` mx-0 `} >
               <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
                 <p className={`my-0 py-0 `}>Transport Mngr 2</p>
               </Col>
               <Col className={`mx-0 px-1  ${styles.Border}`} xs={5} md={5} >
                 <p className={`my-0 py-0 `}>{transport_manager_2_name} </p>
               </Col>
               <Col className={`mx-0 px-1  ${styles.Border}`} xs={2} md={2} >
                 <p className={`my-0 py-0 `}>{transport_manager_2_calltime} </p>
               </Col>
             </Row>
             </Col> )
         }
         {/* Head Driver */}
         {head_driver_calltime && 
           (<Col xs={12} md={6}>
           <Row className={` mx-0 `} >
             <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
               <p className={`my-0 py-0 `}>Head Driver</p>
             </Col>
             <Col className={`mx-0 px-1  ${styles.Border}`} xs={5} md={5} >
               <p className={`my-0 py-0 `}>{head_driver_name} </p>
             </Col>
             <Col className={`mx-0 px-1  ${styles.Border}`} xs={2} md={2} >
               <p className={`my-0 py-0 `}>{head_driver_calltime} </p>
             </Col>
           </Row>
           </Col> )
         }
         {/* Car 1 */}
         {car1_calltime && 
           (<Col xs={12} md={6}>
           <Row className={` mx-0 `} >
             <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
               <p className={`my-0 py-0 `}>Car 1</p>
             </Col>
             <Col className={`mx-0 px-1  ${styles.Border}`} xs={5} md={5} >
               <p className={`my-0 py-0 `}>{car1_name} </p>
             </Col>
             <Col className={`mx-0 px-1  ${styles.Border}`} xs={2} md={2} >
               <p className={`my-0 py-0 `}>{car1_calltime} </p>
             </Col>
           </Row>
           </Col> )
         }
         {/* Car 2 */}
         {car2_calltime && 
           (<Col xs={12} md={6}>
           <Row className={` mx-0 `} >
             <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
               <p className={`my-0 py-0 `}>Car 2</p>
             </Col>
             <Col className={`mx-0 px-1  ${styles.Border}`} xs={5} md={5} >
               <p className={`my-0 py-0 `}>{car2_name} </p>
             </Col>
             <Col className={`mx-0 px-1  ${styles.Border}`} xs={2} md={2} >
               <p className={`my-0 py-0 `}>{car2_calltime} </p>
             </Col>
           </Row>
           </Col> )
         }
         {/* Car 3 */}
         {car3_calltime && 
           (<Col xs={12} md={6}>
           <Row className={` mx-0 `} >
             <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
               <p className={`my-0 py-0 `}>Car 3</p>
             </Col>
             <Col className={`mx-0 px-1  ${styles.Border}`} xs={5} md={5} >
               <p className={`my-0 py-0 `}>{car3_name} </p>
             </Col>
             <Col className={`mx-0 px-1  ${styles.Border}`} xs={2} md={2} >
               <p className={`my-0 py-0 `}>{car3_calltime} </p>
             </Col>
           </Row>
           </Col> )
         }
         {/* Truck 1 */}
         {truck1_calltime && 
           (<Col xs={12} md={6}>
           <Row className={` mx-0 `} >
             <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
               <p className={`my-0 py-0 `}>Truck 1</p>
             </Col>
             <Col className={`mx-0 px-1  ${styles.Border}`} xs={5} md={5} >
               <p className={`my-0 py-0 `}>{truck1_name} </p>
             </Col>
             <Col className={`mx-0 px-1  ${styles.Border}`} xs={2} md={2} >
               <p className={`my-0 py-0 `}>{truck1_calltime} </p>
             </Col>
           </Row>
           </Col> )
         }
         {/* Truck 2 */}
         {truck2_calltime && 
           (<Col xs={12} md={6}>
           <Row className={` mx-0 `} >
             <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
               <p className={`my-0 py-0 `}>Truck 2</p>
             </Col>
             <Col className={`mx-0 px-1  ${styles.Border}`} xs={5} md={5} >
               <p className={`my-0 py-0 `}>{truck2_name} </p>
             </Col>
             <Col className={`mx-0 px-1  ${styles.Border}`} xs={2} md={2} >
               <p className={`my-0 py-0 `}>{truck2_calltime} </p>
             </Col>
           </Row>
           </Col> )
         }
         {/* Truck 3 */}
         {truck3_calltime && 
           (<Col xs={12} md={6}>
           <Row className={` mx-0 `} >
             <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
               <p className={`my-0 py-0 `}>Truck 3</p>
             </Col>
             <Col className={`mx-0 px-1  ${styles.Border}`} xs={5} md={5} >
               <p className={`my-0 py-0 `}>{truck3_name} </p>
             </Col>
             <Col className={`mx-0 px-1  ${styles.Border}`} xs={2} md={2} >
               <p className={`my-0 py-0 `}>{truck3_calltime} </p>
             </Col>
           </Row>
           </Col> )
         }
         </Row>
       </div>
     )
   }

export default TimesTransport