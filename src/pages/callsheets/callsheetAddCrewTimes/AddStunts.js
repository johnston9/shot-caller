/* Form to add the Stunts Department Calltimes to the Callsheet
   From the Callsheet Create and Edit pages */
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Alert } from "react-bootstrap";
import styles from "../../../styles/Callsheets.module.css";

const AddStunts = ({crewInfoOne, handleChange, postData, setShowStu }) => {
  // eslint-disable-next-line
  const [errors, setErrors] = useState({});

  const {stunt_coordinator_name, 
    stunts_1_name,
    stunts_2_name,
    stunts_3_name,
    stunts_4_name,
    stunts_5_name,
    catering_co_1_name,
    catering_co_2_name,
    catering_co_3_name,} = crewInfoOne || {};

  const { stunt_coordinator_calltime, stunts_1_calltime, stunts_2_calltime,
    stunts_3_calltime, stunts_4_calltime, stunts_5_calltime,
    catering_co_1_calltime, catering_co_2_calltime, catering_co_3_calltime,
    } = postData || {};

  return (
    <div>
      <div className={`mt-0 text-center py-1 ${styles.SubTitle }`}>
      <span className={`float-right pt-1 ${styles.Close }`} onClick={() => setShowStu(false) } >Close</span> 
      <h5 className={`pl-5 text-center`} style={{ textTransform: 'uppercase'}} >STUNTS/SFX DEPARTMENTS</h5>
      </div>
      <div className='mt-3'>
        {/* stunt coordinator */}
        {stunt_coordinator_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center d-flex align-items-center' >
            <Col xs={6} md={4} >
              <p className={`${styles.BoldScene} `}>Stunt Coordinator</p>
            </Col>
            <Col xs={6} md={4} >
              <p className={`${styles.CrewInfop} `}>{stunt_coordinator_name} </p>
            </Col>
            <Col className="d-flex justify-content-center" xs={12} md={4} >
            <Form.Group controlId="stunt_coordinator_calltime" className={`${styles.Width} `}>
                <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                placeholder="Call"
                name="stunt_coordinator_calltime"
                value={stunt_coordinator_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.stunt_coordinator_calltime?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
          </Row>
          <hr className="mt-1 mb-0"/>
          </div> )
         }
         {/* stunts 1 */}
         {stunts_1_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center d-flex align-items-center ' >
            <Col xs={6} md={4} >
              <p className={`${styles.BoldScene} `}>Stunt Performer 1</p>
            </Col>
            <Col xs={6} md={4} >
              <p className={`${styles.CrewInfop} `}>{stunts_1_name} </p>
            </Col>
            <Col className="d-flex justify-content-center" xs={12} md={4} >
            <Form.Group controlId="stunts_1_calltime" className={`my-1 ${styles.Width} `}>
                <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                placeholder="Call"
                name="stunts_1_calltime"
                value={stunts_1_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.stunts_1_calltime?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
          </Row>
          <hr className="mt-0 mb-0"/>
          </div> )
         }
         {/* stunts 2 */}
         {stunts_2_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center d-flex align-items-center ' >
            <Col xs={6} md={4} >
              <p className={`${styles.BoldScene} `}>Stunt Performer 2</p>
            </Col>
            <Col xs={6} md={4} >
              <p className={`${styles.CrewInfop} `}>{stunts_2_name} </p>
            </Col>
            <Col className="d-flex justify-content-center" xs={12} md={4} >
            <Form.Group controlId="stunts_2_calltime" className={`my-1 ${styles.Width} `}>
                <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                placeholder="Call"
                name="stunts_2_calltime"
                value={stunts_2_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.stunts_2_calltime?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
          </Row>
          <hr className="mt-0 mb-0"/>
          </div> )
         }
         {/* stunts 3 */}
         {stunts_3_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center d-flex align-items-center ' >
            <Col xs={6} md={4} >
              <p className={`${styles.BoldScene} `}>Stunt Performer 3</p>
            </Col>
            <Col xs={6} md={4} >
              <p className={`${styles.CrewInfop} `}>{stunts_3_name} </p>
            </Col>
            <Col className="d-flex justify-content-center" xs={12} md={4} >
            <Form.Group controlId="stunts_3_calltime" className={`my-1 ${styles.Width} `}>
                <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                placeholder="Call"
                name="stunts_3_calltime"
                value={stunts_3_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.stunts_3_calltime?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
          </Row>
          <hr className="mt-0 mb-0"/>
          </div> )
         }
         {/* stunts 4 */}
         {stunts_4_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center d-flex align-items-center ' >
            <Col xs={6} md={4} >
              <p className={`${styles.BoldScene} `}>Stunt Performer 4</p>
            </Col>
            <Col xs={6} md={4} >
              <p className={`${styles.CrewInfop} `}>{stunts_4_name} </p>
            </Col>
            <Col className="d-flex justify-content-center" xs={12} md={4} >
            <Form.Group controlId="stunts_4_calltime" className={`my-1 ${styles.Width} `}>
                <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                placeholder="Call"
                name="stunts_4_calltime"
                value={stunts_4_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.stunts_4_calltime?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
          </Row>
          <hr className="mt-0 mb-0"/>
          </div> )
         }
         {/* stunts 5 */}
         {stunts_5_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center d-flex align-items-center ' >
            <Col xs={6} md={4} >
              <p className={`${styles.BoldScene} `}>Stunt Performer 5</p>
            </Col>
            <Col xs={6} md={4} >
              <p className={`${styles.CrewInfop} `}>{stunts_5_name} </p>
            </Col>
            <Col className="d-flex justify-content-center" xs={12} md={4} >
            <Form.Group controlId="stunts_5_calltime" className={`my-1 ${styles.Width} `}>
                <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                placeholder="Call"
                name="stunts_5_calltime"
                value={stunts_5_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.stunts_5_calltime?.map((message, idx) => (
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
         <div className={`my-3 mt-0 text-center ${styles.SubTitle }`}>
         <h5 className={`pr-3 text-center`} style={{ textTransform: 'uppercase'}} >
          SFX DEPARTMENT </h5>
         </div>
         <div>
        {/* Special Effects Supervisor - (Using Catering Company 1 keys) */}
        {catering_co_1_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center d-flex align-items-center ' >
            <Col xs={6} md={4} >
              <p className={`${styles.BoldScene} `}>Special Effects Supervisor</p>
            </Col>
            <Col xs={6} md={4} >
              <p className={`${styles.CrewInfop} `}>{catering_co_1_name} </p>
            </Col>
            <Col className="d-flex justify-content-center" xs={12} md={4} >
            <Form.Group controlId="catering_co_1_calltime" className={`my-1 ${styles.Width} `}>
                <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                placeholder="Call"
                name="catering_co_1_calltime"
                value={catering_co_1_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.catering_co_1_calltime?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
          </Row>
          <hr className="mt-0 mb-0"/>
          </div> )
         }
         {/* Special Effects Assistant 1 */}
        {catering_co_2_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center d-flex align-items-center ' >
            <Col xs={6} md={4} >
              <p className={`${styles.BoldScene} `}>Special Effects Assistant 1</p>
            </Col>
            <Col xs={6} md={4} >
              <p className={`${styles.CrewInfop} `}>{catering_co_2_name} </p>
            </Col>
            <Col className="d-flex justify-content-center" xs={12} md={4} >
            <Form.Group controlId="catering_co_2_calltime" className={`my-1 ${styles.Width} `}>
                <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                placeholder="Call"
                name="catering_co_2_calltime"
                value={catering_co_2_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.catering_co_2_calltime?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
          </Row>
          <hr className="mt-0 mb-0"/>
          </div> )
         }
         {/* Special Effects Assistant */}
        {catering_co_3_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center d-flex align-items-center ' >
            <Col xs={6} md={4} >
              <p className={`${styles.BoldScene} `}>Special Effects Assistant 2</p>
            </Col>
            <Col xs={6} md={4} >
              <p className={`${styles.CrewInfop} `}>{catering_co_3_name} </p>
            </Col>
            <Col className="d-flex justify-content-center" xs={12} md={4} >
            <Form.Group controlId="catering_co_3_calltime" className={`my-1 ${styles.Width} `}>
                <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                placeholder="Call"
                name="catering_co_3_calltime"
                value={catering_co_3_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.catering_co_3_calltime?.map((message, idx) => (
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

export default AddStunts