/*Form component in the CrewInfoCreate and CrewInfoEdit Form
  components to add/edit the Sound and Transport Departments crew info */
import React, { useState } from "react";
import { useRedirect } from '../../../../hooks/Redirect';
import Form from "react-bootstrap/Form";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Alert } from "react-bootstrap";
import styles from "../../../../styles/Callsheets.module.css";

const CrewSoundTransport = ({handleChange, postData, setShow}) => {
  useRedirect();
  // eslint-disable-next-line
  const [errors, setErrors] = useState({});

  const {sound_mixer_name, sound_mixer_email, sound_mixer_phone,
    boom_operator_name, boom_operator_email, boom_operator_phone,
    sound_assistant_1_name, sound_assistant_1_email, sound_assistant_1_phone,
    sound_assistant_2_name, sound_assistant_2_email, sound_assistant_2_phone,
      } = postData || {};

  return (
    <div className="pb-3 text-center">
    <div className={`mt-0 text-center ${styles.SubTitle }`}>
    <span className={`float-right pt-2 ${styles.Bold } ${styles.Close }`} onClick={() => setShow(false) } >Close</span> 
    <h5 className={`pl-5 mb-0 text-center py-1 ${styles.Bold }`} >SOUND DEPARTMENT </h5>
    </div>
    <div className={`px-2 px-md-5 mx-md-5 pt-3 ${styles.White }`}>
    {/* Sound Mixer */} 
    <div>
      <p className={`mb-3 py-0 mx-md-4 ${styles.SubTitle }` } 
      style={{ textTransform: 'uppercase'}}>Sound Mixer</p> 
      <div>
      <span className={`py-1 px-3 px-md-5 ${styles.BoldTitleCall }`} >
        CALLNAME: soundmix</span> 
      </div>
      <Row className="mt-2">
          <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="sound_mixer_name" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="sound_mixer_name"
              value={sound_mixer_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.sound_mixer_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="sound_mixer_phone" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="sound_mixer_phone"
              value={sound_mixer_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.sound_mixer_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={12} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="sound_mixer_email" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="sound_mixer_email"
              value={sound_mixer_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.sound_mixer_email?.map((message, idx) => (
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
    {/* Boom Operator */} 
    <div>
      <p className={`my-3 py-0 mx-md-4 ${styles.SubTitle }` } 
      style={{ textTransform: 'uppercase'}}>Boom Operator</p> 
      <div>
      <span className={`py-1 px-3 px-md-5 ${styles.BoldTitleCall }`} >
        CALLNAME: boomop</span> 
      </div>
      <Row className="mt-2">
          <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="boom_operator_name" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="boom_operator_name"
              value={boom_operator_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.boom_operator_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="boom_operator_phone" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="boom_operator_phone"
              value={boom_operator_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.boom_operator_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={12} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="boom_operator_email" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="boom_operator_email"
              value={boom_operator_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.boom_operator_email?.map((message, idx) => (
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
    {/* Boom Operator 2/UTA */} 
    <div>
      <p className={`my-3 py-0 mx-md-4 ${styles.SubTitle }` } 
      style={{ textTransform: 'uppercase'}}>Boom Operator 2/UTA</p> 
      <div>
      <span className={`py-1 px-3 px-md-5 ${styles.BoldTitleCall }`} >
        CALLNAME: sound1</span> 
      </div>
      <Row className="mt-2">
          <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="sound_assistant_1_name" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="sound_assistant_1_name"
              value={sound_assistant_1_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.sound_assistant_1_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="sound_assistant_1_phone" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="sound_assistant_1_phone"
              value={sound_assistant_1_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.sound_assistant_1_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={12} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="sound_assistant_1_email" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="sound_assistant_1_email"
              value={sound_assistant_1_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.sound_assistant_1_email?.map((message, idx) => (
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
    {/* Sound Assistant*/} 
    <div>
      <p className={`my-3 py-0 mx-md-4 ${styles.SubTitle }` } 
      style={{ textTransform: 'uppercase'}}>Sound Assistant</p> 
      <div>
      <span className={`py-1 px-3 px-md-5 ${styles.BoldTitleCall }`} >
        CALLNAME: sound2</span> 
      </div>
      <Row className="mt-2">
          <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="sound_assistant_2_name" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="sound_assistant_2_name"
              value={sound_assistant_2_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.sound_assistant_2_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="sound_assistant_2_phone" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="sound_assistant_2_phone"
              value={sound_assistant_2_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.sound_assistant_2_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={12} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="sound_assistant_2_email" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="sound_assistant_2_email"
              value={sound_assistant_2_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.sound_assistant_2_email?.map((message, idx) => (
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

export default CrewSoundTransport