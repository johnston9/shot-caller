/*Form component in the CrewInfoEdit Form
  component to add/edit the Construction Crew Positions crew info */
  import React, { useState } from "react";
  import { useRedirect } from '../../../../hooks/Redirect';
  import Form from "react-bootstrap/Form";
  import Col from 'react-bootstrap/Col';
  import Row from 'react-bootstrap/Row';
  import { Alert } from "react-bootstrap";
  import styles from "../../../../styles/Callsheets.module.css";

const CrewConstruction = ({handleChange, postData, setShow}) => {
    useRedirect();
        // eslint-disable-next-line
        const [errors, setErrors] = useState({}); 

        const {
            add_pos_11_name, add_pos_11_email, add_pos_11_phone,
            add_pos_12_name, add_pos_12_email, add_pos_12_phone,
            add_pos_13_name, add_pos_13_email, add_pos_13_phone,
            add_pos_14_name, add_pos_14_email, add_pos_14_phone,
              } = postData || {};

  return (
    <div className="pb-3 text-center">
    <div className={`mt-0 text-center ${styles.SubTitle }`}>
    <span className={`float-right pt-2 ${styles.Bold } ${styles.Close }`} onClick={() => setShow(false) } >Close</span> 
    <h5 className={`pl-5 mb-0 text-center py-1 ${styles.Bold }`} >CONSTRUCTION DEPARTMENT</h5>
    </div>
    <div className={`px-2 px-md-5 mx-md-5 pt-3 ${styles.White }`}>
    {/* Standby Carpenter (Using Additional Position 11 keys) */} 
    <div>
        <p className={`mb-3 py-0 mx-md-4 ${styles.SubTitle }` } 
        style={{ textTransform: 'uppercase'}}>Standby Carpenter</p> 
        <div>
        <span className={`py-1 px-3 px-md-5 ${styles.BoldTitleCall }`} >
            CALLNAME: addcrew11</span> 
        </div>
        {/* Position */}
        {/* <Row className="mt-2">
          <Col xs={12} md={{span: 8, offset: 2}} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="add_pos_11_job" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.BoldScene} `} >Position</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_11_job"
              value={add_pos_11_job}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_11_job?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
        </Row> */}
        <Row className="mt-2">
          <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="add_pos_11_name" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_11_name"
              value={add_pos_11_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_11_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="add_pos_11_phone" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_11_phone"
              value={add_pos_11_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_11_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={12} md={4} className="d-flex justify-content-center mt-1 mt-md-0 p-0 p-lg-2">
          <Form.Group controlId="add_pos_11_email" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_11_email"
              value={add_pos_11_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_11_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
    </div>
    {/* Standby Painter (Using Additional Position 12 keys) */} 
    <div>
        <p className={`my-3 py-0 mx-md-4 ${styles.SubTitle }` } 
        style={{ textTransform: 'uppercase'}}>Standby Painter</p> 
        <div>
        <span className={`py-1 px-3 px-md-5 ${styles.BoldTitleCall }`} >
            CALLNAME: addcrew12</span> 
        </div>
        {/* Position */}
        {/* <Row className="mt-2">
          <Col xs={12} md={{span: 8, offset: 2}} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="add_pos_12_job" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.BoldScene} `} >Position</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_12_job"
              value={add_pos_12_job}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_12_job?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
        </Row> */}
        <Row className="mt-2">
          <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="add_pos_12_name" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_12_name"
              value={add_pos_12_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_12_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="add_pos_12_phone" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_12_phone"
              value={add_pos_12_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_12_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={12} md={4} className="d-flex justify-content-center mt-1 mt-md-0 p-0 p-lg-2">
          <Form.Group controlId="add_pos_12_email" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_12_email"
              value={add_pos_12_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_12_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
    </div>
    {/* Standby Rigger (Using Additional Position 13 keys) */} 
    <div>
        <p className={`my-3 py-0 mx-md-4 ${styles.SubTitle }` } 
        style={{ textTransform: 'uppercase'}}>Standby Rigger</p> 
        <div>
        <span className={`py-1 px-3 px-md-5 ${styles.BoldTitleCall }`} >
            CALLNAME: addcrew13</span> 
        </div>
        {/* Position */}
        {/* <Row className="mt-2">
          <Col xs={12} md={{span: 8, offset: 2}} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="add_pos_13_job" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.BoldScene} `} >Position</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_13_job"
              value={add_pos_13_job}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_13_job?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
        </Row> */}
        <Row className="mt-2">
          <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="add_pos_13_name" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_13_name"
              value={add_pos_13_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_13_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="add_pos_13_phone" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_13_phone"
              value={add_pos_13_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_13_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={12} md={4} className="d-flex justify-content-center mt-1 mt-md-0 p-0 p-lg-2">
          <Form.Group controlId="add_pos_13_email" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_13_email"
              value={add_pos_13_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_13_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
    </div>
    {/* Standby Stagehand (Using Additional Position 14 keys) */} 
    <div>
        <p className={`my-3 py-0 mx-md-4 ${styles.SubTitle }` } 
        style={{ textTransform: 'uppercase'}}>Standby Stagehand</p> 
        <div>
        <span className={`py-1 px-3 px-md-5 ${styles.BoldTitleCall }`} >
            CALLNAME: addcrew14</span> 
        </div>
        {/* Position */}
        {/* <Row className="mt-2">
          <Col xs={12} md={{span: 8, offset: 2}} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="add_pos_14_job" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.BoldScene} `} >Position</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_14_job"
              value={add_pos_14_job}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_14_job?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
        </Row> */}
        <Row className="mt-2">
          <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="add_pos_14_name" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_14_name"
              value={add_pos_14_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_14_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="add_pos_14_phone" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_14_phone"
              value={add_pos_14_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_14_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={12} md={4} className="d-flex justify-content-center mt-1 mt-md-0 p-0 p-lg-2">
          <Form.Group controlId="add_pos_14_email" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_14_email"
              value={add_pos_14_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_14_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
    </div>
    </div>
    </div>
  )
}

export default CrewConstruction