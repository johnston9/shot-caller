/*Form component in the CrewInfoEdit Form
  component to add/edit and Catering/Craft Departments crew info */
  import React, { useState } from "react";
  import { useRedirect } from '../../../../hooks/Redirect';
  import Form from "react-bootstrap/Form";
  import Col from 'react-bootstrap/Col';
  import Row from 'react-bootstrap/Row';
  import { Alert } from "react-bootstrap";
  import styles from "../../../../styles/Callsheets.module.css";
  
  const CrewCater = ({handleChange, postData, setShow}) => {
    useRedirect();
    // eslint-disable-next-line
    const [errors, setErrors] = useState({});
  
    const {craft_service_name, craft_service_email, craft_service_phone,
      crafty_ass_name, crafty_ass_email, crafty_ass_phone,
    } = postData || {};
  
    return (
      <div className="pb-3 text-center">
        <div className={`mt-0 text-center ${styles.SubTitle }`}>
        <span className={`float-right pt-1 ${styles.Bold } ${styles.Close }`} onClick={() => setShow(false) } >Close</span> 
        <h5 className={`d-none d-md-block pl-5 mb-0 text-center py-1 ${styles.SubTitle }`} >
        CATERING DEPARTMENT</h5>
      <h5 className={`d-block d-md-none pl-5 mb-0 text-center py-1 ${styles.SubTitle }`} >
      CATERING</h5>
        </div>
        <div className={`px-2 px-md-5 mx-md-5 pt-3 ${styles.White }`}>
        <p className={`pt-md-3 text-center`} style={{fontStyle: 'italic'}}>
        Add all Catering from the "Non-Callsheet/Extra Catering Dept Positions" 
        tab on the Catering Crew Info page.
        </p>
        </div>
        {/* CRAFT SERVICES */}
         <h5 className={`mt-4 mx-md-5 mb-3 py-1 ${styles.SubTitle }`} >CRAFT SERVICES</h5> 
         <div className={`px-2 px-md-5 mx-md-5 pt-3 ${styles.White }`}>
        {/* Craft Service */} 
        <div>
        <p className={`mb-3 py-0 mx-md-4 ${styles.SubTitle }` } 
        style={{ textTransform: 'uppercase'}}>Craft Service</p> 
        <div>
        <span className={`py-1 px-3 px-md-5 ${styles.BoldTitleCall }`} >
          CALLNAME: crafts</span> 
        </div>
        <Row className="mt-2">
            <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
            <Form.Group controlId="craft_service_name" className={`${styles.Width2} `}  >
                <Form.Label className={`${styles.BoldScene} `} >Name</Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="craft_service_name"
                value={craft_service_name}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.craft_service_name?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
            <Form.Group controlId="craft_service_phone" className={`${styles.Width2} `}  >
                <Form.Label className={`${styles.BoldScene}`} >Phone</Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="craft_service_phone"
                value={craft_service_phone}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.craft_service_phone?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={12} md={4} className="d-flex justify-content-center p-0 p-lg-2">
            <Form.Group controlId="craft_service_email" className={`${styles.Width2} `}  >
                <Form.Label className={`${styles.BoldScene}`} >Email</Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="craft_service_email"
                value={craft_service_email}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.craft_service_email?.map((message, idx) => (
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
        {/* Crafty Assistant */} 
        <div>
        <p className={`my-3 py-0 mx-md-4 ${styles.SubTitle }` } 
        style={{ textTransform: 'uppercase'}}>Crafty Assistant</p> 
        <div>
        <span className={`py-1 px-3 px-md-5 ${styles.BoldTitleCall }`} >
          CALLNAME: crafty</span> 
        </div>
        <Row className="mt-2">
            <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
            <Form.Group controlId="crafty_ass_name" className={`${styles.Width2} `}  >
                <Form.Label className={`${styles.BoldScene} `} >Name</Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="crafty_ass_name"
                value={crafty_ass_name}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.crafty_ass_name?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
            <Form.Group controlId="crafty_ass_phone" className={`${styles.Width2} `}  >
                <Form.Label className={`${styles.BoldScene}`} >Phone</Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="crafty_ass_phone"
                value={crafty_ass_phone}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.crafty_ass_phone?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={12} md={4} className="d-flex justify-content-center p-0 p-lg-2">
            <Form.Group controlId="crafty_ass_email" className={`${styles.Width2} `}  >
                <Form.Label className={`${styles.BoldScene}`} >Email</Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="crafty_ass_email"
                value={crafty_ass_email}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.crafty_ass_email?.map((message, idx) => (
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
  
  export default CrewCater