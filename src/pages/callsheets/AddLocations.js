import React, { useState } from "react";
import { useRedirect } from '../../hooks/Redirect';
import Form from "react-bootstrap/Form";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Alert } from "react-bootstrap";
import styles from "../../styles/Callsheets.module.css";

const AddLocations = ({crewInfoOne, handleChange, postData, setShowCas }) => {
  useRedirect("loggedOut");
  const [errors, setErrors] = useState({});

  const {location_mngr_name, location_mngr_email, location_mngr_phone,
    location_ass_1_name, location_ass_1_email, location_ass_1_phone,
    location_ass_2_name, location_ass_2_email, location_ass_2_phone,
    location_ass_3_name, location_ass_3_email, location_ass_3_phone,
    location_ass_4_name, location_ass_4_email, location_ass_4_phone,
    location_security_name, location_security_email, location_security_phone,} = crewInfoOne || {};

  const { location_mngr_calltime,
    } = postData;

  return (
    <div>
      <div className={`mt-0 text-center pb-2 ${styles.SubTitle }`}>
      <span className={`float-right ${styles.Close }`} onClick={() => setShowPro(false) } >Close</span> 
      <h5 className={`pl-5 text-center`} style={{ textTransform: 'uppercase'}} >PRODUCTION </h5>
      </div>
      <div className='mt-3'>
        {/* location mngr */}
        {location_mngr_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center d-flex align-items-center' >
            <Col xs={6} md={4} >
              <p className={`${styles.CrewInfoP} `}>Location Mngr</p>
            </Col>
            <Col xs={6} md={4} >
              <p className={`${styles.CrewInfop} `}>{location_mngr_name} </p>
            </Col>
            <Col className="d-flex justify-content-center" xs={12} md={4} >
            <Form.Group controlId="location_mngr_calltime" className={`${styles.Width} `}>
                <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                placeholder="Call"
                name="location_mngr_calltime"
                value={location_mngr_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.location_mngr_calltime?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
          </Row>
          </div> )
         }
         {/* pro_coordinator */}
        {pro_coordinator_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center d-flex align-items-center ' >
            <Col xs={6} md={4} >
              <p className={`${styles.CrewInfoP} `}>Pro Coordinator</p>
            </Col>
            <Col xs={6} md={4} >
              <p className={`${styles.CrewInfop} `}>{pro_coordinator_name} </p>
            </Col>
            <Col className="d-flex justify-content-center" xs={12} md={4} >
            <Form.Group controlId="pro_coordinator_calltime" className={`my-1 ${styles.Width} `}>
                <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                placeholder="Call"
                name="pro_coordinator_calltime"
                value={pro_coordinator_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.pro_coordinator_calltime?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
          </Row>
          </div> )
         }
         {/* upm */}
        {upm_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center d-flex align-items-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>UPM</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{upm_name} </p>
            </Col>
            <Col className="d-flex justify-content-center" xs={12} md={4} >
            <Form.Group controlId="upm_calltime" className={`my-1 ${styles.Width} `}>
                <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                placeholder="Call"
                name="upm_calltime"
                value={upm_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.upm_calltime?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
          </Row>
          </div> )
         }
         {/* travel coordinator */}
        {travel_coordinator_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center d-flex align-items-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>Travel Coordinator</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{travel_coordinator_name} </p>
            </Col>
            <Col className="d-flex justify-content-center" xs={12} md={4} >
            <Form.Group controlId="travel_coordinator_calltime" className={`my-1 ${styles.Width} `}>
                <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                placeholder="Call"
                name="travel_coordinator_calltime"
                value={travel_coordinator_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.travel_coordinator_calltime?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
          </Row>
          </div> )
         }
         {/* oth production pos 3 */}
        {oth_production_pos_3_job && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center d-flex align-items-center' >
            <Col xs={6} md={4} >
              <p className={`${styles.CrewInfoP} `}>{oth_production_pos_3_job} </p>
            </Col>
            <Col xs={6} md={4} >
              <p className={`${styles.CrewInfop} `}>{oth_production_pos_3_name} </p>
            </Col>
            <Col className="d-flex justify-content-center" xs={12} md={4} >
            <Form.Group controlId="oth_production_pos_3_calltime" className={`my-1 ${styles.Width} `}>
                <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                placeholder="Call"
                name="oth_production_pos_3_calltime"
                value={oth_production_pos_3_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.oth_production_pos_3_calltime?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
          </Row>
          </div> )
         }
         {/* oth production pos 4 */}
        {oth_production_pos_4_job && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center d-flex align-items-center' >
            <Col xs={6} md={4} >
              <p className={`${styles.CrewInfoP} `}>{oth_production_pos_4_job} </p>
            </Col>
            <Col xs={6} md={4} >
              <p className={`${styles.CrewInfop} `}>{oth_production_pos_4_name} </p>
            </Col>
            <Col className="d-flex justify-content-center" xs={12} md={4} >
            <Form.Group controlId="oth_production_pos_4_calltime" className={`my-1 ${styles.Width} `}>
                <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                placeholder="Call"
                name="oth_production_pos_4_calltime"
                value={oth_production_pos_4_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.oth_production_pos_4_calltime?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
          </Row>
          </div> )
         }
         {/* oth production pos 5 */}
        {oth_production_pos_5_job && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center d-flex align-items-center' >
            <Col xs={6} md={4} >
              <p className={`${styles.CrewInfoP} `}>{oth_production_pos_5_job} </p>
            </Col>
            <Col xs={6} md={4} >
              <p className={`${styles.CrewInfop} `}>{oth_production_pos_5_name} </p>
            </Col>
            <Col className="d-flex justify-content-center" xs={12} md={4} >
            <Form.Group controlId="oth_production_pos_5_calltime" className={`my-1 ${styles.Width} `}>
                <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                placeholder="Call"
                name="oth_production_pos_5_calltime"
                value={oth_production_pos_5_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.oth_production_pos_5_calltime?.map((message, idx) => (
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

export default AddLocations