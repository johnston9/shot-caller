import React, { useState } from "react";
import { useRedirect } from '../../hooks/Redirect';
import Form from "react-bootstrap/Form";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Alert } from "react-bootstrap";
import styles from "../../styles/Callsheets.module.css";

const AddProduction = ({crewInfoOne, handleChange, postData, setShowPro }) => {
  useRedirect("loggedOut");
  const [errors, setErrors] = useState({});

  const {producer_name, producer_email, producer_phone,
    pro_coordinator_name, pro_coordinator_email, pro_coordinator_phone,
    upm_name, upm_email, upm_phone,
    travel_coordinator_name, travel_coordinator_email, travel_coordinator_phone,
    production_pa_name, production_pa_email, production_pa_phone,
    oth_production_pos_1_job, oth_production_pos_1_name, oth_production_pos_1_email, oth_production_pos_1_phone,
    oth_production_pos_2_job, oth_production_pos_2_name, oth_production_pos_2_email, oth_production_pos_2_phone,
    oth_production_pos_3_job, oth_production_pos_3_name, oth_production_pos_3_email, oth_production_pos_3_phone,
    oth_production_pos_4_job, oth_production_pos_4_name, oth_production_pos_4_email, oth_production_pos_4_phone,
    oth_production_pos_5_job, oth_production_pos_5_name, oth_production_pos_5_email, oth_production_pos_5_phone,
    script_supervisor_name, script_supervisor_email, script_supervisor_phone,
    legal_name, legal_email, legal_phone,
    set_medic_name, set_medic_email, set_medic_phone,
   } = crewInfoOne || {};

  const { producer_calltime, pro_coordinator_calltime, travel_coordinator_calltime,
    upm_calltime, production_pa_calltime, script_supervisor_calltime, legal_calltime,
    set_medic_calltime, oth_production_pos_1_calltime, oth_production_pos_2_calltime,
    oth_production_pos_3_calltime, oth_production_pos_4_calltime, oth_production_pos_5_calltime, 
    } = postData;

  return (
    <div>
      <div className={`mt-0 text-center pb-2 ${styles.SubTitle }`}>
      <span className={`float-right ${styles.Close }`} onClick={() => setShowPro(false) } >Close</span> 
      <h5 className={`pl-5 text-center`} style={{ textTransform: 'uppercase'}} >PRODUCTION </h5>
      </div>
      <div className='mt-3'>
        {/* producer */}
        {producer_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center d-flex align-items-center' >
            <Col xs={6} md={4} >
              <p className={`${styles.CrewInfoP} `}>Producer</p>
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
            <Col xs={6} md={4} >
              <p className={`${styles.CrewInfoP} `}>UPM</p>
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
          </div> )
         }
         {/* travel coordinator */}
        {travel_coordinator_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center d-flex align-items-center' >
            <Col xs={6} md={4} >
              <p className={`${styles.CrewInfoP} `}>Travel Coordinator</p>
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
          </div> )
         }
         {/* production pa */}
        {production_pa_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center d-flex align-items-center' >
            <Col xs={6} md={4} >
              <p className={`${styles.CrewInfoP} `}>Production PA</p>
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
          </div> )
         }
         {/* script supervisor */}
        {script_supervisor_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center d-flex align-items-center' >
            <Col xs={6} md={4} >
              <p className={`${styles.CrewInfoP} `}>Script Supervisor</p>
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
          </div> )
         }
         {/* legal */}
        {legal_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center d-flex align-items-center' >
            <Col xs={6} md={4} >
              <p className={`${styles.CrewInfoP} `}>Legal</p>
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
          </div> )
         }
         {/* set medic */}
        {set_medic_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center d-flex align-items-center' >
            <Col xs={6} md={4} >
              <p className={`${styles.CrewInfoP} `}>Set Medic</p>
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
          </div> )
         }
         {/* oth production pos 1 */}
        {oth_production_pos_1_job && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center d-flex align-items-center' >
            <Col xs={6} md={4} >
              <p className={`${styles.CrewInfoP} `}>{oth_production_pos_1_job} </p>
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
          </div> )
         }
         {/* oth production pos 2 */}
        {oth_production_pos_2_job && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center d-flex align-items-center' >
            <Col xs={6} md={4} >
              <p className={`${styles.CrewInfoP} `}>{oth_production_pos_2_job} </p>
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

export default AddProduction