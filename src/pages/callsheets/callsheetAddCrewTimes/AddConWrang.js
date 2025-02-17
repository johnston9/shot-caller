/* Form to add the Construction and Wrangling Departments Calltimes to the Callsheet
   From the Callsheet Edit pages */
   import React, { useState } from "react";
   import Form from "react-bootstrap/Form";
   import Col from 'react-bootstrap/Col';
   import Row from 'react-bootstrap/Row';
   import { Alert } from "react-bootstrap";
   import styles from "../../../styles/Callsheets.module.css";
   
   const AddConWrang = ({crewInfoOne, handleChange, postData, setShowWra }) => {
     // eslint-disable-next-line
     const [errors, setErrors] = useState({});
   
     const { legal_name,
      add_pos_11_name,
      add_pos_12_name,
      add_pos_13_name,
      add_pos_14_name,
     } = crewInfoOne || {};
   
     const { legal_calltime,
      add_pos_11_calltime,
      add_pos_12_calltime,
      add_pos_13_calltime,
      add_pos_14_calltime,
       } = postData || {};
   
     return (
       <div>
         <div className={`mt-0 text-center py-1 ${styles.SubTitle }`}>
         <span className={`float-right ${styles.Close }`} onClick={() => setShowWra(false) } >Close</span> 
         <h5 className={`pl-5 text-center`} style={{ textTransform: 'uppercase'}} >CONSTRUCTION DEPARTMENT </h5>
         </div>
         <div className='mt-3'>
          <div>
          {/* Standby Carpenter (Using Additional Position 11 keys)  */}
          {add_pos_11_job && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center d-flex align-items-center' >
            <Col xs={6} md={4} >
              <p className={`${styles.CrewInfoP} `}>{add_pos_11_job} </p>
            </Col>
            <Col xs={6} md={4} >
              <p className={`${styles.CrewInfop} `}>{add_pos_11_name} </p>
            </Col>
            <Col className="d-flex justify-content-center" xs={12} md={4} >
            <Form.Group controlId="add_pos_11_calltime" className={`my-1 ${styles.Width} `}>
                <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                placeholder="Call"
                name="add_pos_11_calltime"
                value={add_pos_11_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.add_pos_11_calltime?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
          </Row>
          </div> )
          }
          {/* add pos 12 */}
          {add_pos_12_job && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center d-flex align-items-center' >
            <Col xs={6} md={4} >
              <p className={`${styles.CrewInfoP} `}>{add_pos_12_job} </p>
            </Col>
            <Col xs={6} md={4} >
              <p className={`${styles.CrewInfop} `}>{add_pos_12_name} </p>
            </Col>
            <Col className="d-flex justify-content-center" xs={12} md={4} >
            <Form.Group controlId="add_pos_12_calltime" className={`my-1 ${styles.Width} `}>
                <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                placeholder="Call"
                name="add_pos_12_calltime"
                value={add_pos_12_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.add_pos_12_calltime?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
          </Row>
          </div> )
          }
          {/* add pos 13 */}
          {add_pos_13_job && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center d-flex align-items-center' >
            <Col xs={6} md={4} >
              <p className={`${styles.CrewInfoP} `}>{add_pos_13_job} </p>
            </Col>
            <Col xs={6} md={4} >
              <p className={`${styles.CrewInfop} `}>{add_pos_13_name} </p>
            </Col>
            <Col className="d-flex justify-content-center" xs={12} md={4} >
            <Form.Group controlId="add_pos_13_calltime" className={`my-1 ${styles.Width} `}>
                <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                placeholder="Call"
                name="add_pos_13_calltime"
                value={add_pos_13_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.add_pos_13_calltime?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
          </Row>
          </div> )
          }
          {/* add pos 14 */}
          {add_pos_14_job && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center d-flex align-items-center' >
            <Col xs={6} md={4} >
              <p className={`${styles.CrewInfoP} `}>{add_pos_14_job} </p>
            </Col>
            <Col xs={6} md={4} >
              <p className={`${styles.CrewInfop} `}>{add_pos_14_name} </p>
            </Col>
            <Col className="d-flex justify-content-center" xs={12} md={4} >
            <Form.Group controlId="add_pos_14_calltime" className={`my-1 ${styles.Width} `}>
                <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                placeholder="Call"
                name="add_pos_14_calltime"
                value={add_pos_14_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.add_pos_14_calltime?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
          </Row>
          </div> )
          }
          </div>
            {/* CRAFT SERVICES */}
            <div className={`mx-5 mt-0 text-center ${styles.SubTitle }`}>
            <h5 className={`pr-3 text-center`} style={{ textTransform: 'uppercase'}} >WRANGLING DEPARTMENT</h5>
            </div>
            {/* craft service */}
            {craft_service_name && 
             (<div className={`${styles.CrewInfoRow}`}>
             <Row className='text-center d-flex align-items-center' >
               <Col xs={6} md={4} >
                 <p className={`${styles.CrewInfoP} `}>Craft Service</p>
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
             </div> )
            }
            {/* crafty ass */}
            {crafty_ass_name && 
             (<div className={`${styles.CrewInfoRow}`}>
             <Row className='text-center d-flex align-items-center' >
               <Col xs={6} md={4} >
                 <p className={`${styles.CrewInfoP} `}>Crafty Assistant</p>
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
             </div> )
            }
          </div>
       </div>
     )
   }
   
   export default AddConWrang