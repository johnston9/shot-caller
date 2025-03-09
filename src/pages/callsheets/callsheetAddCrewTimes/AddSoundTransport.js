/* Form to add the Transport Departments Calltimes to the Callsheet
   From the Callsheet Edit page */
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Alert } from "react-bootstrap";
import styles from "../../../styles/Callsheets.module.css";

const AddSoundTransport = ({crewInfoOne, handleChange, postData, setShowSou }) => {
  // eslint-disable-next-line
  const [errors, setErrors] = useState({});

  const {sound_mixer_name,
    boom_operator_name, 
    sound_assistant_1_name,
    sound_assistant_2_name, } = crewInfoOne || {};

  const { sound_mixer_calltime, boom_operator_calltime, sound_assistant_1_calltime,
    sound_assistant_2_calltime,
    } = postData || {};

  return (
    <div>
      <div className={`mt-0 text-center py-1 ${styles.SubTitle }`}>
      <span className={`float-right pt-md-1 ${styles.Close }`} onClick={() => setShowSou(false) } >Close</span> 
      <h5 className={`d-none d-md-block pl-5 mb-0 text-center ${styles.Bold }`} >
      SOUND DEPARTMENT</h5>
      <h5 className={`d-block d-md-none pl-5 mb-0 text-center ${styles.Bold }`} >
      SOUND</h5>
      </div>
      <div className='mt-3'>
        {/* sound_mixer */}
        {sound_mixer_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center d-flex align-items-center' >
            <Col xs={6} md={4} >
              <p className={`${styles.BoldScene} `}>Sound Mixer</p>
            </Col>
            <Col xs={6} md={4} >
              <p className={`${styles.CrewInfop} `}>{sound_mixer_name} </p>
            </Col>
            <Col className="d-flex justify-content-center" xs={12} md={4} >
            <Form.Group controlId="sound_mixer_calltime" className={`${styles.Width} `}>
                <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                placeholder="Call"
                name="sound_mixer_calltime"
                value={sound_mixer_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.sound_mixer_calltime?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
          </Row>
          <hr className="mt-1 mb-0"/>
          </div> )
         }
         {/* boom operator */}
        {boom_operator_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center d-flex align-items-center ' >
            <Col xs={6} md={4} >
              <p className={`${styles.BoldScene} `}>Boom Operator</p>
            </Col>
            <Col xs={6} md={4} >
              <p className={`${styles.CrewInfop} `}>{boom_operator_name} </p>
            </Col>
            <Col className="d-flex justify-content-center" xs={12} md={4} >
            <Form.Group controlId="boom_operator_calltime" className={`my-1 ${styles.Width} `}>
                <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                placeholder="Call"
                name="boom_operator_calltime"
                value={boom_operator_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.boom_operator_calltime?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
          </Row>
          <hr className="mt-0 mb-0"/>
          </div> )
         }
         {/* Boom Operator 2/UTA - (Using Sound Assistant 1 keys) */}
         {sound_assistant_1_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center d-flex align-items-center' >
            <Col xs={6} md={4} >
              <p className={`${styles.BoldScene} `}>Boom Operator 2/UTA</p>
            </Col>
            <Col xs={6} md={4} >
              <p className={`${styles.CrewInfop} `}>{sound_assistant_1_name} </p>
            </Col>
            <Col className="d-flex justify-content-center" xs={12} md={4} >
            <Form.Group controlId="sound_assistant_1_calltime" className={`my-1 ${styles.Width} `}>
                <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                placeholder="Call"
                name="sound_assistant_1_calltime"
                value={sound_assistant_1_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.sound_assistant_1_calltime?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
          </Row>
          <hr className="mt-0 mb-0"/>
          </div> )
         }
         {/* Sound Assistant - (Using Sound Assistant 2 keys) */}
         {sound_assistant_2_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center d-flex align-items-center' >
            <Col xs={6} md={4} >
              <p className={`${styles.BoldScene} `}>Sound Assistant</p>
            </Col>
            <Col xs={6} md={4} >
              <p className={`${styles.CrewInfop} `}>{sound_assistant_2_name} </p>
            </Col>
            <Col className="d-flex justify-content-center" xs={12} md={4} >
            <Form.Group controlId="sound_assistant_2_calltime" className={`my-1 ${styles.Width} `}>
                <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                placeholder="Call"
                name="sound_assistant_2_calltime"
                value={sound_assistant_2_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.sound_assistant_2_calltime?.map((message, idx) => (
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

export default AddSoundTransport