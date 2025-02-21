/* Form to add the Post Department Crew Calltimes to the Callsheet
   From the Callsheet Edit page */
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Alert } from "react-bootstrap";
import styles from "../../../styles/Callsheets.module.css";

const AddPostAdditional = ({crewInfoOne, handleChange, postData, setShowPos,}) => {
  // eslint-disable-next-line
  const [errors, setErrors] = useState({});

  const {editor_name,
    fx_name, 
    // add_pos_1_job, add_pos_1_name,
    // add_pos_2_job, add_pos_2_name,
    // add_pos_3_job, add_pos_3_name,
    // add_pos_4_job, add_pos_4_name,
    // add_pos_5_job, add_pos_5_name,
    // add_pos_6_job, add_pos_6_name,
    // add_pos_7_job, add_pos_7_name,
    // add_pos_8_job, add_pos_8_name,
    // add_pos_9_job, add_pos_9_name,
    // add_pos_10_job, add_pos_10_name,
    // add_pos_11_job, add_pos_11_name,
    // add_pos_12_job, add_pos_12_name,
    // add_pos_13_job, add_pos_13_name,
    // add_pos_14_job, add_pos_14_name,
     } = crewInfoOne || {};

  const { editor_calltime, fx_calltime,
    // add_pos_1_calltime,
    // add_pos_2_calltime,
    // add_pos_3_calltime,
    // add_pos_4_calltime,
    // add_pos_5_calltime,
    // add_pos_6_calltime,
    // add_pos_7_calltime,
    // add_pos_8_calltime,
    // add_pos_9_calltime,
    // add_pos_10_calltime,
    // add_pos_11_calltime,
    // add_pos_12_calltime,
    // add_pos_13_calltime,
    // add_pos_14_calltime,
    } = postData || {};

  return (
    <div>
      <div className={`mt-0 text-center py-1 ${styles.SubTitle }`}>
      <span className={`float-right pt-1 ${styles.Close }`} onClick={() => setShowPos(false) } >Close</span> 
      <h5 className={`d-none d-md-block pl-5 mb-0 text-center py-1 ${styles.Bold }`} >
        POST PRODUCTION/VFX </h5>
        <h5 className={`d-block d-md-none pl-5 mb-0 text-center py-1 ${styles.Bold }`} >
        POST/VFX </h5>
      </div>
      <div className='mt-3'>
        {/* On Set editor */}
        {editor_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center d-flex align-items-center' >
            <Col xs={6} md={4} >
              <p className={`${styles.BoldScene} `}>On Set Editor</p>
            </Col>
            <Col xs={6} md={4} >
              <p className={`${styles.CrewInfop} `}>{editor_name} </p>
            </Col>
            <Col className="d-flex justify-content-center" xs={12} md={4} >
            <Form.Group controlId="editor_calltime" className={`${styles.Width} `}>
                <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                placeholder="Call"
                name="editor_calltime"
                value={editor_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.editor_calltime?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
          </Row>
          <hr className="mt-1 mb-0"/>
          </div> )
         }
         {/* VFX Supervisor */}
        {fx_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center d-flex align-items-center ' >
            <Col xs={6} md={4} >
              <p className={`${styles.BoldScene} `}>VFX Supervisor</p>
            </Col>
            <Col xs={6} md={4} >
              <p className={`${styles.CrewInfop} `}>{fx_name} </p>
            </Col>
            <Col className="d-flex justify-content-center" xs={12} md={4} >
            <Form.Group controlId="fx_calltime" className={`my-1 ${styles.Width} `}>
                <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                placeholder="Call"
                name="fx_calltime"
                value={fx_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.fx_calltime?.map((message, idx) => (
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

export default AddPostAdditional