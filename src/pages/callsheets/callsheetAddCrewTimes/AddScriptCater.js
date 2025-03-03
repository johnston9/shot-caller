/* Form to add the Script Calltimes to the Callsheet
   From the Callsheet Create and Edit pages */
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Alert } from "react-bootstrap";
import styles from "../../../styles/Callsheets.module.css";

const AddScriptCater = ({crewInfoOne, handleChange, postData, setShowScr }) => {
  // eslint-disable-next-line
  const [errors, setErrors] = useState({});

  const {script_supervisor_name,
    writer_name, 
  } = crewInfoOne || {};

  const { script_supervisor_calltime,
    writer_calltime,
    } = postData || {};

  return (
    <div>
      <div className={`mt-0 text-center py-1 ${styles.SubTitle }`}>
      <span className={`float-right pt-md-1 ${styles.Close }`} onClick={() => setShowScr(false) } >Close</span> 
      <h5 className={`pl-5 text-center`} style={{ textTransform: 'uppercase'}} >SCRIPT DEPARTMENT</h5>
      </div>
      <div className='mt-3'>
        {/* script supervisor */}
        {script_supervisor_name && 
        (<div className={`${styles.CrewInfoRow}`}>
        <Row className='text-center d-flex align-items-center' >
          <Col xs={6} md={4} >
            <p className={`${styles.BoldScene} `}>Script Supervisor</p>
          </Col>
          <Col xs={6} md={4} >
            <p className={`${styles.CrewInfop} `}>{script_supervisor_name} </p>
          </Col>
          <Col className="d-flex justify-content-center" xs={12} md={4} >
          <Form.Group controlId="script_supervisor_calltime" className={`my-1 ${styles.Width} `}>
              <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              placeholder="Call"
              name="script_supervisor_calltime"
              value={script_supervisor_calltime}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.script_supervisor_calltime?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
        </Row>
        <hr className="mt-0 mb-0"/>
        </div> )
        }
        {/* Scriptwiter */}
        {writer_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center d-flex align-items-center' >
            <Col xs={6} md={4} >
              <p className={`${styles.BoldScene} `}>Scriptwiter</p>
            </Col>
            <Col xs={6} md={4} >
              <p className={`${styles.CrewInfop} `}>{writer_name} </p>
            </Col>
            <Col className="d-flex justify-content-center" xs={12} md={4} >
            <Form.Group controlId="writer_calltime" className={`${styles.Width} `}>
                <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                placeholder="Call"
                name="writer_calltime"
                value={writer_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.writer_calltime?.map((message, idx) => (
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

export default AddScriptCater