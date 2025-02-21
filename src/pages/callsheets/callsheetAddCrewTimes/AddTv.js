/* Form to add the TV Studio Calltimes to the Callsheet
   From the Callsheet Edit page */
   import React, { useState } from "react";
   import Form from "react-bootstrap/Form";
   import Col from 'react-bootstrap/Col';
   import Row from 'react-bootstrap/Row';
   import { Alert } from "react-bootstrap";
   import styles from "../../../styles/Callsheets.module.css";
   
   const AddTv = ({crewInfoOne, handleChange, postData, setShowTv }) => {
     // eslint-disable-next-line
     const [errors, setErrors] = useState({});
   
     const {
      // add_pos_16_job, 
      // add_pos_17_job, 
      // add_pos_18_job, 
      // add_pos_19_job,
      // add_pos_20_job, 
      add_pos_16_name,
      add_pos_17_name,
      add_pos_18_name,
      add_pos_19_name,
      add_pos_20_name,
      add_pos_15_job, add_pos_15_name,}
       = crewInfoOne || {};
   
     const {add_pos_15_calltime,
      add_pos_16_calltime,
      add_pos_17_calltime,
      add_pos_18_calltime,
      add_pos_19_calltime,
      add_pos_20_calltime,
       } = postData || {};
   
     return (
       <div>
         <div className={`mt-0 text-center py-1 ${styles.SubTitle }`}>
         <span className={`float-right pt-1 ${styles.Close }`} onClick={() => setShowTv(false) } >Close</span> 
         <h5 className={`pl-5 text-center`} style={{ textTransform: 'uppercase'}} >TV STUDIO POSITIONS</h5>
         </div>
         <div className="mt-3">
         {/* Technical Director - (Using Additional Position 16 keys) add_pos_16_job */}
                 {add_pos_16_name && 
                 (<div className={`${styles.CrewInfoRow}`}>
                 <Row className='text-center d-flex align-items-center' >
                   <Col xs={6} md={4} >
                     <p className={`${styles.BoldScene} `}>Technical Director</p>
                   </Col>
                   <Col xs={6} md={4} >
                     <p className={`${styles.CrewInfop} `}>{add_pos_16_name} </p>
                   </Col>
                   <Col className="d-flex justify-content-center" xs={12} md={4} >
                   <Form.Group controlId="add_pos_16_calltime" className={`my-1 ${styles.Width} `}>
                       <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
                       <Form.Control 
                       className={`${styles.Input}`}
                       type="text"
                       placeholder="Call"
                       name="add_pos_16_calltime"
                       value={add_pos_16_calltime}
                       onChange={handleChange}
                           />
                   </Form.Group>
                   {errors?.add_pos_16_calltime?.map((message, idx) => (
                     <Alert variant="warning" key={idx}>
                       {message}
                     </Alert>
                   ))}
                   </Col>
                 </Row>
                 <hr className="mt-1 mb-0"/>
                 </div> )
                 }
                 {/* Floor Manager - (Using Additional Position 17 keys) add_pos_17_job */}
                 {add_pos_17_name && 
                 (<div className={`${styles.CrewInfoRow}`}>
                 <Row className='text-center d-flex align-items-center' >
                   <Col xs={6} md={4} >
                     <p className={`${styles.BoldScene} `}>Floor Manager</p>
                   </Col>
                   <Col xs={6} md={4} >
                     <p className={`${styles.CrewInfop} `}>{add_pos_17_name} </p>
                   </Col>
                   <Col className="d-flex justify-content-center" xs={12} md={4} >
                   <Form.Group controlId="add_pos_17_calltime" className={`my-1 ${styles.Width} `}>
                       <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
                       <Form.Control 
                       className={`${styles.Input}`}
                       type="text"
                       placeholder="Call"
                       name="add_pos_17_calltime"
                       value={add_pos_17_calltime}
                       onChange={handleChange}
                           />
                   </Form.Group>
                   {errors?.add_pos_17_calltime?.map((message, idx) => (
                     <Alert variant="warning" key={idx}>
                       {message}
                     </Alert>
                   ))}
                   </Col>
                 </Row>
                 <hr className="mt-0 mb-0"/>
                 </div> )
                 }
                 {/* A1 - (Using Additional Position 18 keys) add_pos_18_job */}
                 {add_pos_18_name && 
                 (<div className={`${styles.CrewInfoRow}`}>
                 <Row className='text-center d-flex align-items-center' >
                   <Col xs={6} md={4} >
                     <p className={`${styles.BoldScene} `}>A1/Audio</p>
                   </Col>
                   <Col xs={6} md={4} >
                     <p className={`${styles.CrewInfop} `}>{add_pos_18_name} </p>
                   </Col>
                   <Col className="d-flex justify-content-center" xs={12} md={4} >
                   <Form.Group controlId="add_pos_18_calltime" className={`my-1 ${styles.Width} `}>
                       <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
                       <Form.Control 
                       className={`${styles.Input}`}
                       type="text"
                       placeholder="Call"
                       name="add_pos_18_calltime"
                       value={add_pos_18_calltime}
                       onChange={handleChange}
                           />
                   </Form.Group>
                   {errors?.add_pos_18_calltime?.map((message, idx) => (
                     <Alert variant="warning" key={idx}>
                       {message}
                     </Alert>
                   ))}
                   </Col>
                 </Row>
                 <hr className="mt-0 mb-0"/>
                 </div> )
                 }
                 {/* Assistant Floor Manager - (Using Additional Position 19 keys) add_pos_18_job */}
                 {add_pos_19_name && 
                 (<div className={`${styles.CrewInfoRow}`}>
                 <Row className='text-center d-flex align-items-center' >
                   <Col xs={6} md={4} >
                     <p className={`${styles.BoldScene} `}>Assistant Floor Manager</p>
                   </Col>
                   <Col xs={6} md={4} >
                     <p className={`${styles.CrewInfop} `}>{add_pos_19_name} </p>
                   </Col>
                   <Col className="d-flex justify-content-center" xs={12} md={4} >
                   <Form.Group controlId="add_pos_19_calltime" className={`my-1 ${styles.Width} `}>
                       <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
                       <Form.Control 
                       className={`${styles.Input}`}
                       type="text"
                       placeholder="Call"
                       name="add_pos_19_calltime"
                       value={add_pos_19_calltime}
                       onChange={handleChange}
                           />
                   </Form.Group>
                   {errors?.add_pos_19_calltime?.map((message, idx) => (
                     <Alert variant="warning" key={idx}>
                       {message}
                     </Alert>
                   ))}
                   </Col>
                 </Row>
                 <hr className="mt-0 mb-0"/>
                 </div> )
                 }
                 {/* Stage Manager - (Using Additional Position 20 keys) add_pos_20_job */}
                 {add_pos_20_name && 
                 (<div className={`${styles.CrewInfoRow}`}>
                 <Row className='text-center d-flex align-items-center' >
                   <Col xs={6} md={4} >
                     <p className={`${styles.BoldScene} `}>Stage Manager</p>
                   </Col>
                   <Col xs={6} md={4} >
                     <p className={`${styles.CrewInfop} `}>{add_pos_20_name} </p>
                   </Col>
                   <Col className="d-flex justify-content-center" xs={12} md={4} >
                   <Form.Group controlId="add_pos_20_calltime" className={`my-1 ${styles.Width} `}>
                       <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
                       <Form.Control 
                       className={`${styles.Input}`}
                       type="text"
                       placeholder="Call"
                       name="add_pos_20_calltime"
                       value={add_pos_20_calltime}
                       onChange={handleChange}
                           />
                   </Form.Group>
                   {errors?.add_pos_20_calltime?.map((message, idx) => (
                     <Alert variant="warning" key={idx}>
                       {message}
                     </Alert>
                   ))}
                   </Col>
                 </Row>
                 <hr className="mt-0 mb-0"/>
                 </div> )
                 }
                 {/* Additional Position TV Studio 1 - (Using Additional Position 15 keys)  */}
                 {add_pos_15_job && 
                 (<div className={`${styles.CrewInfoRow}`}>
                 <Row className='text-center d-flex align-items-center' >
                   <Col xs={6} md={4} >
                     <p className={`${styles.BoldScene} `}>{add_pos_15_job}</p>
                   </Col>
                   <Col xs={6} md={4} >
                     <p className={`${styles.CrewInfop} `}>{add_pos_15_name} </p>
                   </Col>
                   <Col className="d-flex justify-content-center" xs={12} md={4} >
                   <Form.Group controlId="add_pos_15_calltime" className={`my-1 ${styles.Width} `}>
                       <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
                       <Form.Control 
                       className={`${styles.Input}`}
                       type="text"
                       placeholder="Call"
                       name="add_pos_15_calltime"
                       value={add_pos_15_calltime}
                       onChange={handleChange}
                           />
                   </Form.Group>
                   {errors?.add_pos_15_calltime?.map((message, idx) => (
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
   
   export default AddTv