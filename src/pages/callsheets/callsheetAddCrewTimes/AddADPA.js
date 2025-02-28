/* Form to add the Casting and AD Departments Calltimes to the Callsheet
   From the Callsheet Create and Edit pages */
   import React, { useState } from "react";
   import Form from "react-bootstrap/Form";
   import Col from 'react-bootstrap/Col';
   import Row from 'react-bootstrap/Row';
   import { Alert } from "react-bootstrap";
   import styles from "../../../styles/Callsheets.module.css";
   
   const AddADPA = ({crewInfoOne, handleChange, postData, setShowAD }) => {
     // eslint-disable-next-line
     const [errors, setErrors] = useState({});
   
     const {
       ad_1_name,
       ad_2_name,
       ad_3_name,
       ad_4_name,
       ad_5_name,
       pro_assistant_1_name,
       pro_assistant_2_name,
       pro_assistant_3_name,}
        = crewInfoOne || {};
   
     const { ad_1_calltime,
       ad_2_calltime, ad_3_calltime, ad_4_calltime, ad_5_calltime, pro_assistant_1_calltime,
       pro_assistant_2_calltime, pro_assistant_3_calltime,
       } = postData || {};
   
     return (
       <div>
         <div className={`mt-0 text-center py-1 ${styles.SubTitle }`}>
         <span className={`float-right pt-1 ${styles.Close }`} onClick={() => setShowAD(false) } >Close</span> 
         <h5 className={`pl-5 text-center`} style={{ textTransform: 'uppercase'}} >AD POSITIONS </h5>
         </div>
         <div className='mt-3'>      
            {/* 1st AD */}
            {ad_1_name && 
             (<div className={`${styles.CrewInfoRow}`}>
             <Row className='text-center d-flex align-items-center' >
               <Col xs={6} md={4} >
                 <p className={`${styles.BoldScene} `}>1st AD</p>
               </Col>
               <Col xs={6} md={4} >
                 <p className={`${styles.CrewInfop} `}>{ad_1_name} </p>
               </Col>
               <Col className="d-flex justify-content-center" xs={12} md={4} >
               <Form.Group controlId="ad_1_calltime" className={`my-1 ${styles.Width} `}>
                   <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
                   <Form.Control 
                   className={`${styles.Input}`}
                   type="text"
                   placeholder="Call"
                   name="ad_1_calltime"
                   value={ad_1_calltime}
                   onChange={handleChange}
                       />
               </Form.Group>
               {errors?.ad_1_calltime?.map((message, idx) => (
                 <Alert variant="warning" key={idx}>
                   {message}
                 </Alert>
               ))}
               </Col>
             </Row>
             <hr className="mt-0 mb-0"/>
             </div> )
            }
            {/* 2nd AD */}
            {ad_2_name && 
             (<div className={`${styles.CrewInfoRow}`}>
             <Row className='text-center d-flex align-items-center' >
               <Col xs={6} md={4} >
                 <p className={`${styles.BoldScene} `}>2nd AD</p>
               </Col>
               <Col xs={6} md={4} >
                 <p className={`${styles.CrewInfop} `}>{ad_2_name} </p>
               </Col>
               <Col className="d-flex justify-content-center" xs={12} md={4} >
               <Form.Group controlId="ad_2_calltime" className={`my-1 ${styles.Width} `}>
                   <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
                   <Form.Control 
                   className={`${styles.Input}`}
                   type="text"
                   placeholder="Call"
                   name="ad_2_calltime"
                   value={ad_2_calltime}
                   onChange={handleChange}
                       />
               </Form.Group>
               {errors?.ad_2_calltime?.map((message, idx) => (
                 <Alert variant="warning" key={idx}>
                   {message}
                 </Alert>
               ))}
               </Col>
             </Row>
             <hr className="mt-0 mb-0"/>
             </div> )
            }
            {/* 3rd AD */}
            {ad_3_name && 
             (<div className={`${styles.CrewInfoRow}`}>
             <Row className='text-center d-flex align-items-center' >
               <Col xs={6} md={4} >
                 <p className={`${styles.BoldScene} `}>3rd AD</p>
               </Col>
               <Col xs={6} md={4} >
                 <p className={`${styles.CrewInfop} `}>{ad_3_name} </p>
               </Col>
               <Col className="d-flex justify-content-center" xs={12} md={4} >
               <Form.Group controlId="ad_3_calltime" className={`my-1 ${styles.Width} `}>
                   <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
                   <Form.Control 
                   className={`${styles.Input}`}
                   type="text"
                   placeholder="Call"
                   name="ad_3_calltime"
                   value={ad_3_calltime}
                   onChange={handleChange}
                       />
               </Form.Group>
               {errors?.ad_3_calltime?.map((message, idx) => (
                 <Alert variant="warning" key={idx}>
                   {message}
                 </Alert>
               ))}
               </Col>
             </Row>
             <hr className="mt-0 mb-0"/>
             </div> )
            }
            {/* 4th AD */}
            {ad_4_name && 
             (<div className={`${styles.CrewInfoRow}`}>
             <Row className='text-center d-flex align-items-center' >
               <Col xs={6} md={4} >
                 <p className={`${styles.BoldScene} `}>4th AD</p>
               </Col>
               <Col xs={6} md={4} >
                 <p className={`${styles.CrewInfop} `}>{ad_4_name} </p>
               </Col>
               <Col className="d-flex justify-content-center" xs={12} md={4} >
               <Form.Group controlId="ad_4_calltime" className={`my-1 ${styles.Width} `}>
                   <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
                   <Form.Control 
                   className={`${styles.Input}`}
                   type="text"
                   placeholder="Call"
                   name="ad_4_calltime"
                   value={ad_4_calltime}
                   onChange={handleChange}
                       />
               </Form.Group>
               {errors?.ad_4_calltime?.map((message, idx) => (
                 <Alert variant="warning" key={idx}>
                   {message}
                 </Alert>
               ))}
               </Col>
             </Row>
             <hr className="mt-0 mb-0"/>
             </div> )
            }
            {/* 2nd 2nd AD */}
            {ad_5_name && 
             (<div className={`${styles.CrewInfoRow}`}>
             <Row className='text-center d-flex align-items-center' >
               <Col xs={6} md={4} >
                 <p className={`${styles.BoldScene} `}>2nd 2nd AD</p>
               </Col>
               <Col xs={6} md={4} >
                 <p className={`${styles.CrewInfop} `}>{ad_5_name} </p>
               </Col>
               <Col className="d-flex justify-content-center" xs={12} md={4} >
               <Form.Group controlId="ad_5_calltime" className={`my-1 ${styles.Width} `}>
                   <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
                   <Form.Control 
                   className={`${styles.Input}`}
                   type="text"
                   placeholder="Call"
                   name="ad_5_calltime"
                   value={ad_5_calltime}
                   onChange={handleChange}
                       />
               </Form.Group>
               {errors?.ad_5_calltime?.map((message, idx) => (
                 <Alert variant="warning" key={idx}>
                   {message}
                 </Alert>
               ))}
               </Col>
             </Row>
             <hr className="mt-0 mb-0"/>
             </div> )
            }
            <div className={`my-3 mt-0 text-center ${styles.SubTitle }`}>
             <h5 className={` text-center`} style={{ textTransform: 'uppercase'}} >PA POSITIONS </h5>
           </div>
            {/* Production assistant 1 */}
            {pro_assistant_1_name && 
             (<div className={`${styles.CrewInfoRow}`}>
             <Row className='text-center d-flex align-items-center' >
               <Col xs={6} md={4} >
                 <p className={`${styles.BoldScene} `}>Production Assistant 1</p>
               </Col>
               <Col xs={6} md={4} >
                 <p className={`${styles.CrewInfop} `}>{pro_assistant_1_name} </p>
               </Col>
               <Col className="d-flex justify-content-center" xs={12} md={4} >
               <Form.Group controlId="pro_assistant_1_calltime" className={`my-1 ${styles.Width} `}>
                   <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
                   <Form.Control 
                   className={`${styles.Input}`}
                   type="text"
                   placeholder="Call"
                   name="pro_assistant_1_calltime"
                   value={pro_assistant_1_calltime}
                   onChange={handleChange}
                       />
               </Form.Group>
               {errors?.pro_assistant_1_calltime?.map((message, idx) => (
                 <Alert variant="warning" key={idx}>
                   {message}
                 </Alert>
               ))}
               </Col>
             </Row>
             <hr className="mt-0 mb-0"/>
             </div> )
            }
            {/* Production assistant 2*/}
            {pro_assistant_2_name && 
             (<div className={`${styles.CrewInfoRow}`}>
             <Row className='text-center d-flex align-items-center' >
               <Col xs={6} md={4} >
                 <p className={`${styles.BoldScene} `}>Production Assistant 2</p>
               </Col>
               <Col xs={6} md={4} >
                 <p className={`${styles.CrewInfop} `}>{pro_assistant_2_name} </p>
               </Col>
               <Col className="d-flex justify-content-center" xs={12} md={4} >
               <Form.Group controlId="pro_assistant_2_calltime" className={`my-1 ${styles.Width} `}>
                   <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
                   <Form.Control 
                   className={`${styles.Input}`}
                   type="text"
                   placeholder="Call"
                   name="pro_assistant_2_calltime"
                   value={pro_assistant_2_calltime}
                   onChange={handleChange}
                       />
               </Form.Group>
               {errors?.pro_assistant_2_calltime?.map((message, idx) => (
                 <Alert variant="warning" key={idx}>
                   {message}
                 </Alert>
               ))}
               </Col>
             </Row>
             <hr className="mt-0 mb-0"/>
             </div> )
            }
            {/* Production assistant 3 */}
            {pro_assistant_3_name && 
             (<div className={`${styles.CrewInfoRow}`}>
             <Row className='text-center d-flex align-items-center' >
               <Col xs={6} md={4} >
                 <p className={`${styles.BoldScene} `}>Production Assistant 3</p>
               </Col>
               <Col xs={6} md={4} >
                 <p className={`${styles.CrewInfop} `}>{pro_assistant_3_name} </p>
               </Col>
               <Col className="d-flex justify-content-center" xs={12} md={4} >
               <Form.Group controlId="pro_assistant_3_calltime" className={`my-1 ${styles.Width} `}>
                   <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
                   <Form.Control 
                   className={`${styles.Input}`}
                   type="text"
                   placeholder="Call"
                   name="pro_assistant_3_calltime"
                   value={pro_assistant_3_calltime}
                   onChange={handleChange}
                       />
               </Form.Group>
               {errors?.pro_assistant_3_calltime?.map((message, idx) => (
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
   
   export default AddADPA