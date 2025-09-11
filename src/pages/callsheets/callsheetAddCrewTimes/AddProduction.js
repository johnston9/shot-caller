/* Form to add the Production Department Calltimes to the Callsheet Edit page */
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Alert } from "react-bootstrap";
import styles from "../../../styles/Callsheets.module.css";

const AddProduction = ({crewInfoOne, handleChange, postData, setShowPro }) => {
  // eslint-disable-next-line
  const [errors, setErrors] = useState({});

  const {producer_name, 
    director_name, 
    pro_coordinator_name, 
    upm_name, 
    travel_coordinator_name, 
    production_pa_name, 
    oth_production_pos_1_job, oth_production_pos_1_name,
    oth_production_pos_2_job, oth_production_pos_2_name,
    oth_production_pos_3_job, oth_production_pos_3_name,
    oth_production_pos_4_job, oth_production_pos_4_name,
    oth_production_pos_5_job, oth_production_pos_5_name,
    set_medic_name, 
   } = crewInfoOne || {};

  const { director_calltime, producer_calltime, pro_coordinator_calltime, travel_coordinator_calltime,
    upm_calltime, production_pa_calltime,
    set_medic_calltime, oth_production_pos_1_calltime, oth_production_pos_2_calltime,
    oth_production_pos_3_calltime, oth_production_pos_4_calltime, oth_production_pos_5_calltime, 
    } = postData || {};

  return (
    <div>
      <div className={`mt-0 text-center py-1 ${styles.SubTitle }`}>
      <span className={`float-right pt-md-1 ${styles.Close }`} onClick={() => setShowPro(false) } >Close</span> 
      <h5 className={`d-none d-md-block pl-5 mb-0 text-center ${styles.Bold }`} >
      PRODUCTION DEPARTMENT</h5>
      <h5 className={`d-block d-md-none pl-5 mb-0 text-center ${styles.Bold }`} >
      PRODUCTION</h5>
      </div>
      <div className='mt-3'>
        {/* director */}
        {director_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center d-flex align-items-center' >
            <Col xs={6} md={4} >
              <p className={`${styles.BoldScene} `}>Director</p>
            </Col>
            <Col xs={6} md={4} >
              <p className={`${styles.CrewInfop} `}>{director_name} </p>
            </Col>
            <Col className="d-flex justify-content-center" xs={12} md={4} >
            <Form.Group controlId="director_calltime" className={`${styles.Width} `}>
                <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                placeholder="Call"
                name="director_calltime"
                value={director_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.director_calltime?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
          </Row>
          <hr className="mt-1 mb-0"/>
          </div> )
         }
        {/* Production Manager */}
        {producer_name && 
          (<div className={`${styles.CrewInfoRow} pt-1`}>
          <Row className='text-center d-flex align-items-center' >
            <Col xs={6} md={4} >
              <p className={`${styles.BoldScene} `}>Production Manager</p>
            </Col>
            <Col xs={6} md={4} >
              <p className={`${styles.CrewInfop} `}>{producer_name} </p>
            </Col>
            <Col className="d-flex justify-content-center" xs={12} md={4} >
            <Form.Group controlId="producer_calltime" className={`${styles.Width} `}>
                <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                placeholder="Call"
                name="producer_calltime"
                value={producer_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.producer_calltime?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
          </Row>
          <hr className="mt-1 mb-0"/>
          </div> )
         }
         {/* pro_coordinator */}
        {pro_coordinator_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center d-flex align-items-center ' >
            <Col xs={6} md={4} >
              <p className={`${styles.BoldScene} `}>Production Coordinator</p>
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
          <hr className="mt-0 mb-0"/>
          </div> )
         }
         {/* upm */}
        {upm_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center d-flex align-items-center' >
            <Col xs={6} md={4} >
              <p className={`${styles.BoldScene} `}>UPM</p>
            </Col>
            <Col xs={6} md={4} >
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
          <hr className="mt-0 mb-0"/>
          </div> )
         }
         {/* travel coordinator */}
        {travel_coordinator_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center d-flex align-items-center' >
            <Col xs={6} md={4} >
              <p className={`${styles.BoldScene} `}>Travel Coordinator</p>
            </Col>
            <Col xs={6} md={4} >
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
          <hr className="mt-0 mb-0"/>
          </div> )
         }
         {/* production pa */}
        {production_pa_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center d-flex align-items-center' >
            <Col xs={6} md={4} >
              <p className={`${styles.BoldScene} `}>Production PA</p>
            </Col>
            <Col xs={6} md={4} >
              <p className={`${styles.CrewInfop} `}>{production_pa_name} </p>
            </Col>
            <Col className="d-flex justify-content-center" xs={12} md={4} >
            <Form.Group controlId="production_pa_calltime" className={`my-1 ${styles.Width} `}>
                <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                placeholder="Call"
                name="production_pa_calltime"
                value={production_pa_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.production_pa_calltime?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
          </Row>
          <hr className="mt-0 mb-0"/>
          </div> )
         }
        {/* set medic */}
        {set_medic_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center d-flex align-items-center' >
            <Col xs={6} md={4} >
              <p className={`${styles.BoldScene} `}>Set Medic</p>
            </Col>
            <Col xs={6} md={4} >
              <p className={`${styles.CrewInfop} `}>{set_medic_name} </p>
            </Col>
            <Col className="d-flex justify-content-center" xs={12} md={4} >
            <Form.Group controlId="set_medic_calltime" className={`my-1 ${styles.Width} `}>
                <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                placeholder="Call"
                name="set_medic_calltime"
                value={set_medic_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.set_medic_calltime?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
          </Row>
          <hr className="mt-0 mb-0"/>
          </div> )
         }
         {/* oth production pos 1 */}
        {oth_production_pos_1_job && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center d-flex align-items-center' >
            <Col xs={6} md={4} >
              <p className={`${styles.BoldScene} `}>{oth_production_pos_1_job} </p>
            </Col>
            <Col xs={6} md={4} >
              <p className={`${styles.CrewInfop} `}>{oth_production_pos_1_name} </p>
            </Col>
            <Col className="d-flex justify-content-center" xs={12} md={4} >
            <Form.Group controlId="oth_production_pos_1_calltime" className={`my-1 ${styles.Width} `}>
                <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                placeholder="Call"
                name="oth_production_pos_1_calltime"
                value={oth_production_pos_1_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.oth_production_pos_1_calltime?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
          </Row>
          <hr className="mt-0 mb-0"/>
          </div> )
         }
         {/* oth production pos 2 */}
        {oth_production_pos_2_job && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center d-flex align-items-center' >
            <Col xs={6} md={4} >
              <p className={`${styles.BoldScene} `}>{oth_production_pos_2_job} </p>
            </Col>
            <Col xs={6} md={4} >
              <p className={`${styles.CrewInfop} `}>{oth_production_pos_2_name} </p>
            </Col>
            <Col className="d-flex justify-content-center" xs={12} md={4} >
            <Form.Group controlId="oth_production_pos_2_calltime" className={`my-1 ${styles.Width} `}>
                <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                placeholder="Call"
                name="oth_production_pos_2_calltime"
                value={oth_production_pos_2_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.oth_production_pos_2_calltime?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
          </Row>
          <hr className="mt-0 mb-0"/>
          </div> )
         }
         {/* oth production pos 3 */}
        {oth_production_pos_3_job && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center d-flex align-items-center' >
            <Col xs={6} md={4} >
              <p className={`${styles.BoldScene} `}>{oth_production_pos_3_job} </p>
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
          <hr className="mt-0 mb-0"/>
          </div> )
         }
         {/* oth production pos 4 */}
        {oth_production_pos_4_job && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center d-flex align-items-center' >
            <Col xs={6} md={4} >
              <p className={`${styles.BoldScene} `}>{oth_production_pos_4_job} </p>
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
          <hr className="mt-0 mb-0"/>
          </div> )
         }
         {/* oth production pos 5 */}
        {oth_production_pos_5_job && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center d-flex align-items-center' >
            <Col xs={6} md={4} >
              <p className={`${styles.BoldScene} `}>{oth_production_pos_5_job} </p>
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
          <hr className="mt-0 mb-0"/>
          </div> )
         }
         </div>
    </div>
  )
}

export default AddProduction