/* Form to add the Transport Departments Calltimes to the Callsheet Edit page */
   import React, { useState } from "react";
   import Form from "react-bootstrap/Form";
   import Col from 'react-bootstrap/Col';
   import Row from 'react-bootstrap/Row';
   import { Alert } from "react-bootstrap";
   import styles from "../../../styles/Callsheets.module.css";
   
   const AddTransport = ({crewInfoOne, handleChange, postData, setShowTra }) => {
     // eslint-disable-next-line
     const [errors, setErrors] = useState({});
   
     const {transport_captain_name,
       transport_manager_1_name, 
       transport_manager_2_name, 
       head_driver_name, 
       car1_name, 
       car2_name, 
       car3_name, 
       truck1_name, } = crewInfoOne || {};
   
     const {transport_captain_calltime, transport_manager_1_calltime,
       transport_manager_2_calltime, head_driver_calltime, car1_calltime,
       car2_calltime, car3_calltime, truck1_calltime,
       } = postData || {};
   
     return (
       <div>
         <div className={`mt-0 text-center py-1 ${styles.SubTitle }`}>
         <span className={`float-right pt-md-1 ${styles.Close }`} onClick={() => setShowTra(false) } >Close</span> 
         <h5 className={`d-none d-md-block pl-5 mb-0 text-center ${styles.Bold }`} >
         TRANSPORTATION DEPARTMENT</h5>
        <h5 className={`d-block d-md-none pl-5 mb-0 text-center ${styles.Bold }`} >
        TRANSPORTATION</h5>
         </div>
         <div className='mt-3'>
            {/* transport captain */}
            {transport_captain_name && 
             (<div className={`${styles.CrewInfoRow}`}>
             <Row className='text-center d-flex align-items-center' >
               <Col xs={6} md={4} >
                 <p className={`${styles.BoldScene} `}>Transport Captain</p>
               </Col>
               <Col xs={6} md={4} >
                 <p className={`${styles.CrewInfop} `}>{transport_captain_name} </p>
               </Col>
               <Col className="d-flex justify-content-center" xs={12} md={4} >
               <Form.Group controlId="transport_captain_calltime" className={`my-1 ${styles.Width} `}>
                   <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
                   <Form.Control 
                   className={`${styles.Input}`}
                   type="text"
                   placeholder="Call"
                   name="transport_captain_calltime"
                   value={transport_captain_calltime}
                   onChange={handleChange}
                       />
               </Form.Group>
               {errors?.transport_captain_calltime?.map((message, idx) => (
                 <Alert variant="warning" key={idx}>
                   {message}
                 </Alert>
               ))}
               </Col>
             </Row>
             <hr className="mt-1 mb-0"/>
             </div> )
            }
            {/* transport manager 1 */}
            {transport_manager_1_name && 
             (<div className={`${styles.CrewInfoRow}`}>
             <Row className='text-center d-flex align-items-center' >
               <Col xs={6} md={4} >
                 <p className={`${styles.BoldScene} `}>Transport Manager 1</p>
               </Col>
               <Col xs={6} md={4} >
                 <p className={`${styles.CrewInfop} `}>{transport_manager_1_name} </p>
               </Col>
               <Col className="d-flex justify-content-center" xs={12} md={4} >
               <Form.Group controlId="transport_manager_1_calltime" className={`my-1 ${styles.Width} `}>
                   <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
                   <Form.Control 
                   className={`${styles.Input}`}
                   type="text"
                   placeholder="Call"
                   name="transport_manager_1_calltime"
                   value={transport_manager_1_calltime}
                   onChange={handleChange}
                       />
               </Form.Group>
               {errors?.transport_manager_1_calltime?.map((message, idx) => (
                 <Alert variant="warning" key={idx}>
                   {message}
                 </Alert>
               ))}
               </Col>
             </Row>
             <hr className="mt-0 mb-0"/>
             </div> )
            }
            {/* transport manager 2 */}
            {transport_manager_2_name && 
             (<div className={`${styles.CrewInfoRow}`}>
             <Row className='text-center d-flex align-items-center' >
               <Col xs={6} md={4} >
                 <p className={`${styles.BoldScene} `}>Transport Manager 2</p>
               </Col>
               <Col xs={6} md={4} >
                 <p className={`${styles.CrewInfop} `}>{transport_manager_2_name} </p>
               </Col>
               <Col className="d-flex justify-content-center" xs={12} md={4} >
               <Form.Group controlId="transport_manager_2_calltime" className={`my-1 ${styles.Width} `}>
                   <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
                   <Form.Control 
                   className={`${styles.Input}`}
                   type="text"
                   placeholder="Call"
                   name="transport_manager_2_calltime"
                   value={transport_manager_2_calltime}
                   onChange={handleChange}
                       />
               </Form.Group>
               {errors?.transport_manager_2_calltime?.map((message, idx) => (
                 <Alert variant="warning" key={idx}>
                   {message}
                 </Alert>
               ))}
               </Col>
             </Row>
             <hr className="mt-0 mb-0"/>
             </div> )
            }
            {/* head driver */}
            {head_driver_name && 
             (<div className={`${styles.CrewInfoRow}`}>
             <Row className='text-center d-flex align-items-center' >
               <Col xs={6} md={4} >
                 <p className={`${styles.BoldScene} `}>Head Driver</p>
               </Col>
               <Col xs={6} md={4} >
                 <p className={`${styles.CrewInfop} `}>{head_driver_name} </p>
               </Col>
               <Col className="d-flex justify-content-center" xs={12} md={4} >
               <Form.Group controlId="head_driver_calltime" className={`my-1 ${styles.Width} `}>
                   <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
                   <Form.Control 
                   className={`${styles.Input}`}
                   type="text"
                   placeholder="Call"
                   name="head_driver_calltime"
                   value={head_driver_calltime}
                   onChange={handleChange}
                       />
               </Form.Group>
               {errors?.head_driver_calltime?.map((message, idx) => (
                 <Alert variant="warning" key={idx}>
                   {message}
                 </Alert>
               ))}
               </Col>
             </Row>
             <hr className="mt-0 mb-0"/>
             </div> )
            }
            {/* Driver 1 */}
            {car1_name && 
             (<div className={`${styles.CrewInfoRow}`}>
             <Row className='text-center d-flex align-items-center' >
               <Col xs={6} md={4} >
                 <p className={`${styles.BoldScene} `}>Driver 1</p>
               </Col>
               <Col xs={6} md={4} >
                 <p className={`${styles.CrewInfop} `}>{car1_name} </p>
               </Col>
               <Col className="d-flex justify-content-center" xs={12} md={4} >
               <Form.Group controlId="car1_calltime" className={`my-1 ${styles.Width} `}>
                   <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
                   <Form.Control 
                   className={`${styles.Input}`}
                   type="text"
                   placeholder="Call"
                   name="car1_calltime"
                   value={car1_calltime}
                   onChange={handleChange}
                       />
               </Form.Group>
               {errors?.car1_calltime?.map((message, idx) => (
                 <Alert variant="warning" key={idx}>
                   {message}
                 </Alert>
               ))}
               </Col>
             </Row>
             <hr className="mt-0 mb-0"/>
             </div> )
            }
            {/* Driver 2 */}
            {car2_name && 
             (<div className={`${styles.CrewInfoRow}`}>
             <Row className='text-center d-flex align-items-center' >
               <Col xs={6} md={4} >
                 <p className={`${styles.BoldScene} `}>Driver 2</p>
               </Col>
               <Col xs={6} md={4} >
                 <p className={`${styles.CrewInfop} `}>{car2_name} </p>
               </Col>
               <Col className="d-flex justify-content-center" xs={12} md={4} >
               <Form.Group controlId="car2_calltime" className={`my-1 ${styles.Width} `}>
                   <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
                   <Form.Control 
                   className={`${styles.Input}`}
                   type="text"
                   placeholder="Call"
                   name="car2_calltime"
                   value={car2_calltime}
                   onChange={handleChange}
                       />
               </Form.Group>
               {errors?.car2_calltime?.map((message, idx) => (
                 <Alert variant="warning" key={idx}>
                   {message}
                 </Alert>
               ))}
               </Col>
             </Row>
             <hr className="mt-0 mb-0"/>
             </div> )
            }
            {/* Driver 3 */}
            {car3_name && 
             (<div className={`${styles.CrewInfoRow}`}>
             <Row className='text-center d-flex align-items-center' >
               <Col xs={6} md={4} >
                 <p className={`${styles.BoldScene} `}>Driver 3</p>
               </Col>
               <Col xs={6} md={4} >
                 <p className={`${styles.CrewInfop} `}>{car3_name} </p>
               </Col>
               <Col className="d-flex justify-content-center" xs={12} md={4} >
               <Form.Group controlId="car3_calltime" className={`my-1 ${styles.Width} `}>
                   <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
                   <Form.Control 
                   className={`${styles.Input}`}
                   type="text"
                   placeholder="Call"
                   name="car3_calltime"
                   value={car3_calltime}
                   onChange={handleChange}
                       />
               </Form.Group>
               {errors?.car3_calltime?.map((message, idx) => (
                 <Alert variant="warning" key={idx}>
                   {message}
                 </Alert>
               ))}
               </Col>
             </Row>
             <hr className="mt-0 mb-0"/>
             </div> )
            }
            {/* Driver 4 */}
            {truck1_name && 
             (<div className={`${styles.CrewInfoRow}`}>
             <Row className='text-center d-flex align-items-center' >
               <Col xs={6} md={4} >
                 <p className={`${styles.BoldScene} `}>Driver 4</p>
               </Col>
               <Col xs={6} md={4} >
                 <p className={`${styles.CrewInfop} `}>{truck1_name} </p>
               </Col>
               <Col className="d-flex justify-content-center" xs={12} md={4} >
               <Form.Group controlId="truck1_calltime" className={`my-1 ${styles.Width} `}>
                   <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
                   <Form.Control 
                   className={`${styles.Input}`}
                   type="text"
                   placeholder="Call"
                   name="truck1_calltime"
                   value={truck1_calltime}
                   onChange={handleChange}
                       />
               </Form.Group>
               {errors?.truck1_calltime?.map((message, idx) => (
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
   
   export default AddTransport