/*Form component in the CrewInfoCreate and CrewInfoEdit Form
  components to add/edit the Wrangling Crew Positions crew info */
  import React, { useState } from "react";
  import { useRedirect } from '../../../../hooks/Redirect';
  import Form from "react-bootstrap/Form";
  import Col from 'react-bootstrap/Col';
  import Row from 'react-bootstrap/Row';
  import { Alert } from "react-bootstrap";
  import Button from 'react-bootstrap/Button';
  import styles from "../../../../styles/Callsheets.module.css";
  import btnStyles from "../../../../styles/Button.module.css";

const CrewWrangling = ({handleChange, postData, setShow}) => {
    useRedirect();
        // eslint-disable-next-line
        const [errors, setErrors] = useState({});

        const {legal_name, legal_email, legal_phone,
            } = postData || {};
          
  return (
    <div className="pb-3 text-center">
    <div className={`mt-0 text-center ${styles.SubTitle }`}>
    <span className={`float-right pt-2 ${styles.Bold } ${styles.Close }`} onClick={() => setShow(false) } >Close</span> 
    <h5 className={`pl-5 mb-0 text-center py-1 ${styles.Bold }`} >WRANGLING DEPARTMENT </h5>
    </div>
    <div className={`px-2 px-md-5 mx-md-5 pt-3 ${styles.White }`}>
    {/* Head Wrangler */} 
    <div>
      <p className={`my-3 py-0 mx-md-4 ${styles.SubTitle }` } 
      style={{ textTransform: 'uppercase'}}>Head Wrangler</p> 
      <div>
      <span className={`py-1 px-3 px-md-5 ${styles.BoldTitleCall }`} >
        CALLNAME: legalcon</span> 
      </div>
      <Row className="mt-2">
          <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="legal_name" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="legal_name"
              value={legal_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.legal_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="legal_phone" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="legal_phone"
              value={legal_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.legal_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={12} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="legal_email" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="legal_email"
              value={legal_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.legal_email?.map((message, idx) => (
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

export default CrewWrangling