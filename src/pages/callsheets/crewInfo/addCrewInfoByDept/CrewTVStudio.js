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

const CrewTVStudio = ({handleChange, postData, setShow}) => {
    useRedirect();
    // eslint-disable-next-line
    const [errors, setErrors] = useState({}); 

    const {
            
    } = postData || {};

  return (
    <div className="pb-3 text-center">
    <div className={`mt-0 text-center ${styles.SubTitle }`}>
    <span className={`float-right pt-2 ${styles.Bold } ${styles.Close }`} onClick={() => setShow(false) } >Close</span> 
    <h5 className={`pl-5 mb-0 text-center py-1 ${styles.Bold }`} >TV STUDIO POSITIONS </h5>
    </div>
    <div className={`px-2 px-md-5 mx-md-5 pt-3 ${styles.White }`}>
    {/* Transport Captain */} 
    {/* <div>
        <p className={`mb-3 py-0 mx-md-4 ${styles.SubTitle }` } 
        style={{ textTransform: 'uppercase'}}>Transport Captain</p> 
        <div>
        <span className={`py-1 px-3 px-md-5 ${styles.BoldTitleCall }`} >
            CALLNAME: trancap</span> 
        </div>
        <Row className="mt-2">
            <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
            <Form.Group controlId="transport_captain_name" className={`${styles.Width2} `}  >
                <Form.Label className={`${styles.BoldScene} `} >Name</Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="transport_captain_name"
                value={transport_captain_name}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.transport_captain_name?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                {message}
                </Alert>
            ))}
            </Col>
            <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
            <Form.Group controlId="transport_captain_phone" className={`${styles.Width2} `}  >
                <Form.Label className={`${styles.BoldScene}`} >Phone</Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="transport_captain_phone"
                value={transport_captain_phone}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.transport_captain_phone?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                {message}
                </Alert>
            ))}
            </Col>
            <Col xs={12} md={4} className="d-flex justify-content-center p-0 p-lg-2">
            <Form.Group controlId="transport_captain_email" className={`${styles.Width2} `}  >
                <Form.Label className={`${styles.BoldScene}`} >Email</Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="transport_captain_email"
                value={transport_captain_email}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.transport_captain_email?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                {message}
                </Alert>
            ))}
            </Col>
        </Row>
    </div> */}
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

export default CrewTVStudio