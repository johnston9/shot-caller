/*Form component in the CrewInfoEdit Form
  component to add/edit the Stunts Department crew info */
import React, { useState } from "react";
import { useRedirect } from '../../../../hooks/Redirect';
import Form from "react-bootstrap/Form";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Alert } from "react-bootstrap";
import styles from "../../../../styles/Callsheets.module.css";

const CrewStunts = ({handleChange, postData, setShow}) => {
  useRedirect();
  // eslint-disable-next-line
  const [errors, setErrors] = useState({});

  const {stunt_coordinator_name, stunt_coordinator_email, stunt_coordinator_phone,
    stunts_1_name, stunts_1_email, stunts_1_phone,
    stunts_2_name, stunts_2_email, stunts_2_phone,
    stunts_3_name, stunts_3_email, stunts_3_phone,
    stunts_4_name, stunts_4_email, stunts_4_phone,
    stunts_5_name, stunts_5_email, stunts_5_phone,
  } = postData || {};

  return (
    <div className="pb-3 text-center">
      <div className={`mt-0 text-center ${styles.SubTitle }`}>
      <span className={`float-right pt-1 ${styles.Bold } ${styles.Close }`} onClick={() => setShow(false) } >Close</span> 
      <h5 className={`d-none d-md-block pl-5 mb-0 text-center py-1 ${styles.Bold }`} >
      STUNT DEPARTMENT</h5>
      <h5 className={`d-block d-md-none pl-5 mb-0 text-center py-1 ${styles.Bold }`} >
      STUNTS</h5>
      </div>
      <div className={`px-2 px-md-5 mx-md-5 pt-3 ${styles.White }`}>
      {/* stunts */}
      <div>
      {/* Stunt Coordinator */} 
      <div>
      <p className={`mb-3 py-0 mx-md-4 ${styles.SubTitle }` } 
      style={{ textTransform: 'uppercase'}}>Stunt Coordinator</p> 
      <div>
      <span className={`py-1 px-3 px-md-5 ${styles.BoldTitleCall }`} >
        CALLNAME: stuntco</span> 
      </div>
      <Row className="mt-2">
          <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="stunt_coordinator_name" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="stunt_coordinator_name"
              value={stunt_coordinator_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.stunt_coordinator_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="stunt_coordinator_phone" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="stunt_coordinator_phone"
              value={stunt_coordinator_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.stunt_coordinator_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={12} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="stunt_coordinator_email" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="stunt_coordinator_email"
              value={stunt_coordinator_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.stunt_coordinator_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      </div>
      {/* break */}
      <Row>
      <Col xs={12}>
      <hr className={`mt-3 mb-3`}/>
      </Col>
      </Row>
      {/* Stunt Performer 1 */} 
      <div>
      <p className={`my-3 py-0 mx-md-4 ${styles.SubTitle }` } 
      style={{ textTransform: 'uppercase'}}>Stunt Performer 1</p> 
      <div>
      <span className={`py-1 px-3 px-md-5 ${styles.BoldTitleCall }`} >
        CALLNAME: stunts1</span> 
      </div>
      <Row className="mt-2">
          <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="stunts_1_name" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="stunts_1_name"
              value={stunts_1_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.stunts_1_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="stunts_1_phone" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="stunts_1_phone"
              value={stunts_1_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.stunts_1_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={12} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="stunts_1_email" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="stunts_1_email"
              value={stunts_1_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.stunts_1_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      </div>
      {/* break */}
      <Row>
      <Col xs={12}>
      <hr className={`mt-3 mb-3`}/>
      </Col>
      </Row>
      {/* Stunt Performer 2 */} 
      <div>
      <p className={`my-3 py-0 mx-md-4 ${styles.SubTitle }` } 
      style={{ textTransform: 'uppercase'}}>Stunt Performer 2</p> 
      <div>
      <span className={`py-1 px-3 px-md-5 ${styles.BoldTitleCall }`} >
        CALLNAME: stunts2</span> 
      </div>
      <Row className="mt-2">
          <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="stunts_2_name" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="stunts_2_name"
              value={stunts_2_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.stunts_2_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="stunts_2_phone" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="stunts_2_phone"
              value={stunts_2_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.stunts_2_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={12} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="stunts_2_email" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="stunts_2_email"
              value={stunts_2_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.stunts_2_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      </div>
      {/* break */}
      <Row>
      <Col xs={12}>
      <hr className={`mt-3 mb-3`}/>
      </Col>
      </Row>
      </div>
      </div>
      {/* SFX */}
      <h5 className={`mt-5 mx-md-5 mb-0 py-1 ${styles.SubTitle }`} >SFX DEPARTMENT</h5> 
      <div className={`px-2 px-md-5 mx-md-5 pt-3 ${styles.White }`}>
      {/* Special Effects Supervisor - (Using Stunt Performer 3 Keys) */} 
      <div>
      <p className={`mb-3 py-0 mx-md-4 ${styles.SubTitle }` } 
      style={{ textTransform: 'uppercase'}}>Special Effects Supervisor</p> 
      <div>
      <span className={`py-1 px-3 px-md-5 ${styles.BoldTitleCall }`} >
        CALLNAME: stunts3</span> 
      </div>
      <Row className="mt-2">
          <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="stunts_3_name" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="stunts_3_name"
              value={stunts_3_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.stunts_3_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="stunts_3_phone" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="stunts_3_phone"
              value={stunts_3_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.stunts_3_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={12} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="stunts_3_email" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="stunts_3_email"
              value={stunts_3_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.stunts_3_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      </div>
      {/* break */}
      <Row>
      <Col xs={12}>
      <hr className={`mt-3 mb-3`}/>
      </Col>
      </Row>
      {/* Special Effects Assistant 1 - (Using Stunt Performer 4 Keys) */} 
      <div>
      <p className={`my-3 py-0 mx-md-4 ${styles.SubTitle }` } 
      style={{ textTransform: 'uppercase'}}>Special Effects Assistant 1</p> 
      <div>
      <span className={`py-1 px-3 px-md-5 ${styles.BoldTitleCall }`} >
        CALLNAME: stunts4</span> 
      </div>
      <Row className="mt-2">
          <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="stunts_4_name" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="stunts_4_name"
              value={stunts_4_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.stunts_4_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="stunts_4_phone" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="stunts_4_phone"
              value={stunts_4_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.stunts_4_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={12} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="stunts_4_email" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="stunts_4_email"
              value={stunts_4_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.stunts_4_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      </div>
      {/* break */}
      <Row>
      <Col xs={12}>
      <hr className={`mt-3 mb-3`}/>
      </Col>
      </Row>
      {/* Special Effects Assistant 2 - (Using Stunt Performer 5 Keys) */} 
      <div>
      <p className={`my-3 py-0 mx-md-4 ${styles.SubTitle }` } 
      style={{ textTransform: 'uppercase'}}>Special Effects Assistant 2</p> 
      <div>
      <span className={`py-1 px-3 px-md-5 ${styles.BoldTitleCall }`} >
        CALLNAME: stunts5</span> 
      </div>
      <Row className="mt-2">
          <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="stunts_5_name" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="stunts_5_name"
              value={stunts_5_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.stunts_5_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="stunts_5_phone" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="stunts_5_phone"
              value={stunts_5_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.stunts_5_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={12} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="stunts_5_email" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="stunts_5_email"
              value={stunts_5_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.stunts_5_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      </div>
      {/* break */}
      <Row>
      <Col xs={12}>
      <hr className={`mt-3 mb-3`}/>
      </Col>
      </Row> 
      </div>
      </div>  
  )
}

export default CrewStunts