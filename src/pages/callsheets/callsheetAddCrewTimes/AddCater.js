/* Form to add the Craft Services Calltimes to the Callsheet
   From the Callsheet Edit pages */
   import React, { useState } from "react";
   import Form from "react-bootstrap/Form";
   import Col from 'react-bootstrap/Col';
   import Row from 'react-bootstrap/Row';
   import { Alert } from "react-bootstrap";
   import styles from "../../../styles/Callsheets.module.css";
   
   const AddCater = ({crewInfoOne, handleChange, postData, setShowCat }) => {
     // eslint-disable-next-line
     const [errors, setErrors] = useState({});
   
     const { craft_service_name,
       crafty_ass_name, 
     } = crewInfoOne || {};
   
     const { craft_service_calltime,
       crafty_ass_calltime,
       } = postData || {};
   
     return (
       <div>
         <div className={`mt-0 text-center py-1 ${styles.SubTitle }`}>
         <span className={`float-right pt-md-1 ${styles.Close }`} onClick={() => setShowCat(false) } >Close</span> 
         <h5 className={`d-none d-md-block pl-5 mb-0 text-center ${styles.Bold }`} >
         CATERING DEPARTMENT</h5>
          <h5 className={`d-block d-md-none pl-5 mb-0 text-center ${styles.Bold }`} >
          CATERING</h5>
         </div>
         <Row>
          <Col className="text-center pt-2">
          <p style={{fontStyle: 'italic'}}>
          All Catering to be handled seperatly.
          </p>
          </Col>
         </Row>
         <div className='mt-3'>
            {/* CRAFT SERVICES */}
            <div className={`mt-0 text-center ${styles.SubTitle }`}>
            <h5 className={`mb-0 text-center ${styles.Bold }`} >
            CRAFT SERVICES</h5>
            </div>
            {/* craft service */}
            {craft_service_name && 
             (<div className={`${styles.CrewInfoRow}`}>
             <Row className='text-center d-flex align-items-center' >
               <Col xs={6} md={4} >
                 <p className={`${styles.BoldScene} `}>Craft Service</p>
               </Col>
               <Col xs={6} md={4} >
                 <p className={`${styles.CrewInfop} `}>{craft_service_name} </p>
               </Col>
               <Col className="d-flex justify-content-center" xs={12} md={4} >
               <Form.Group controlId="craft_service_calltime" className={`my-1 ${styles.Width} `}>
                   <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
                   <Form.Control 
                   className={`${styles.Input}`}
                   type="text"
                   placeholder="Call"
                   name="craft_service_calltime"
                   value={craft_service_calltime}
                   onChange={handleChange}
                       />
               </Form.Group>
               {errors?.craft_service_calltime?.map((message, idx) => (
                 <Alert variant="warning" key={idx}>
                   {message}
                 </Alert>
               ))}
               </Col>
             </Row>
             <hr className="mt-0 mb-0"/>
             </div> )
            }
            {/* crafty ass */}
            {crafty_ass_name && 
             (<div className={`${styles.CrewInfoRow}`}>
             <Row className='text-center d-flex align-items-center' >
               <Col xs={6} md={4} >
                 <p className={`${styles.BoldScene} `}>Crafty Assistant</p>
               </Col>
               <Col xs={6} md={4} >
                 <p className={`${styles.CrewInfop} `}>{crafty_ass_name} </p>
               </Col>
               <Col className="d-flex justify-content-center" xs={12} md={4} >
               <Form.Group controlId="crafty_ass_calltime" className={`my-1 ${styles.Width} `}>
                   <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
                   <Form.Control 
                   className={`${styles.Input}`}
                   type="text"
                   placeholder="Call"
                   name="crafty_ass_calltime"
                   value={crafty_ass_calltime}
                   onChange={handleChange}
                       />
               </Form.Group>
               {errors?.crafty_ass_calltime?.map((message, idx) => (
                 <Alert variant="warning" key={idx}>
                   {message}
                 </Alert>
               ))}
               </Col>
             </Row>
             <hr className="mt-0 mb-0"/>
             </div> )
            }
          </div>
       </div>
     )
   }
   
   export default AddCater