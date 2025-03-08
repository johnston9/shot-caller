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
       } = postData || {};
   
     return (
       <div>
         <div className={`mt-0 text-center py-1 ${styles.SubTitle }`}>
         <span className={`float-right ${styles.Close } pt-md-1`} onClick={() => setShowWra(false) } >Close</span> 
         <h5 className={`d-none d-md-block pl-5 text-center`} style={{ textTransform: 'uppercase'}} >
          CONSTRUCTION DEPARTMENT </h5>
          <h5 className={`d-block d-md-none pl-5 text-center`} style={{ textTransform: 'uppercase'}} >
          CONSTRUCTION </h5>
         </div>
         <div className='mt-3'>
          <div>
          {/* Standby Carpenter (Using truck 2 keys)  */}
          {truck2_name && 
            (<div className={`${styles.CrewInfoRow}`}>
            <Row className='text-center d-flex align-items-center' >
              <Col xs={6} md={4} >
                <p className={`${styles.BoldScene} `}>Standby Carpenter</p>
              </Col>
              <Col xs={6} md={4} >
                <p className={`${styles.CrewInfop} `}>{truck2_name} </p>
              </Col>
              <Col className="d-flex justify-content-center" xs={12} md={4} >
              <Form.Group controlId="truck2_calltime" className={`my-1 ${styles.Width} `}>
                  <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
                  <Form.Control 
                  className={`${styles.Input}`}
                  type="text"
                  placeholder="Call"
                  name="truck2_calltime"
                  value={truck2_calltime}
                  onChange={handleChange}
                      />
              </Form.Group>
              {errors?.truck2_calltime?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
              </Col>
            </Row>
            <hr className="mt-0 mb-0"/>
            </div> )
          }
          {/* Standby Painter (Using Additional Position 19 keys) */}
          {add_pos_19_name && 
                 (<div className={`${styles.CrewInfoRow}`}>
                 <Row className='text-center d-flex align-items-center' >
                   <Col xs={6} md={4} >
                     <p className={`${styles.BoldScene} `}>Standby Painter</p>
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
          {/* Standby Rigger (Using makeup artist 5 keys) */}
          {makeup_artist_5_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center d-flex align-items-center' >
            <Col xs={6} md={4} >
              <p className={`${styles.BoldScene} `}>Standby Rigger</p>
            </Col>
            <Col xs={6} md={4} >
              <p className={`${styles.CrewInfop} `}>{makeup_artist_5_name} </p>
            </Col>
            <Col className="d-flex justify-content-center" xs={12} md={4} >
            <Form.Group controlId="makeup_artist_5_calltime" className={`${styles.Width} `}>
                <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                placeholder="Call"
                name="makeup_artist_5_calltime"
                value={makeup_artist_5_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.makeup_artist_5_calltime?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
          </Row>
          <hr className="mt-0 mb-0"/>
          </div> )
          }
          {/* Standby Stagehand (Using Truck 3 keys) */}
          {truck3_name && 
            (<div className={`${styles.CrewInfoRow}`}>
            <Row className='text-center d-flex align-items-center' >
              <Col xs={6} md={4} >
                <p className={`${styles.BoldScene} `}>Standby Stagehand</p>
              </Col>
              <Col xs={6} md={4} >
                <p className={`${styles.CrewInfop} `}>{truck3_name} </p>
              </Col>
              <Col className="d-flex justify-content-center" xs={12} md={4} >
              <Form.Group controlId="truck3_calltime" className={`my-1 ${styles.Width} `}>
                  <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
                  <Form.Control 
                  className={`${styles.Input}`}
                  type="text"
                  placeholder="Call"
                  name="truck3_calltime"
                  value={truck3_calltime}
                  onChange={handleChange}
                      />
              </Form.Group>
              {errors?.truck3_calltime?.map((message, idx) => (
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
          {/* WRANGLING */}
          <div className={`mt-0 text-center ${styles.SubTitle }`}>
          <h5 className={`pr-3 text-center`} style={{ textTransform: 'uppercase'}} >WRANGLING DEPARTMENT</h5>
          </div>
            {/* Head Wrangler (Using legal keys) */}
            {legal_name && 
             (<div className={`${styles.CrewInfoRow}`}>
             <Row className='text-center d-flex align-items-center' >
               <Col xs={6} md={4} >
                 <p className={`${styles.BoldScene} `}>Head Wrangler</p>
               </Col>
               <Col xs={6} md={4} >
                 <p className={`${styles.CrewInfop} `}>{legal_name} </p>
               </Col>
               <Col className="d-flex justify-content-center" xs={12} md={4} >
               <Form.Group controlId="legal_calltime" className={`my-1 ${styles.Width} `}>
                   <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
                   <Form.Control 
                   className={`${styles.Input}`}
                   type="text"
                   placeholder="Call"
                   name="legal_calltime"
                   value={legal_calltime}
                   onChange={handleChange}
                       />
               </Form.Group>
               {errors?.legal_calltime?.map((message, idx) => (
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
   
   export default AddConWrang