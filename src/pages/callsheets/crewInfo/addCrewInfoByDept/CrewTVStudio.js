/*Form component in the CrewInfoEdit Form
  component to add/edit the TV Studio Crew Positions crew info */
  import React, { useState } from "react";
  import { useRedirect } from '../../../../hooks/Redirect';
  import Form from "react-bootstrap/Form";
  import Col from 'react-bootstrap/Col';
  import Row from 'react-bootstrap/Row';
  import { Alert } from "react-bootstrap";
  import styles from "../../../../styles/Callsheets.module.css";

const CrewTVStudio = ({handleChange, postData, setShow}) => {
    useRedirect();
    // eslint-disable-next-line
    const [errors, setErrors] = useState({}); 

    const {add_pos_16_name, add_pos_16_email, add_pos_16_phone,
        add_pos_17_name, add_pos_17_email, add_pos_17_phone,
        add_pos_18_name, add_pos_18_email, add_pos_18_phone,
        add_pos_20_name, add_pos_20_email, add_pos_20_phone,   
    } = postData || {};

  return (
    <div className="pb-3 text-center">
    <div className={`mt-0 text-center ${styles.SubTitle }`}>
    <span className={`float-right pt-1 ${styles.Bold } ${styles.Close }`} onClick={() => setShow(false) } >Close</span> 
    <h5 className={`d-none d-md-block pl-5 mb-0 text-center py-1 ${styles.SubTitle }`} >
    TV STUDIO POSITIONS</h5>
    <h5 className={`d-block d-md-none pl-5 mb-0 text-center py-1 ${styles.SubTitle }`} >
    TV STUDIO</h5>
    </div>
    <div className={`px-2 px-md-5 mx-md-5 pt-3 ${styles.White }`}>
    {/* Technical Director - (Using Additional Position 16 keys) */} 
    <div>
        <p className={`mb-3 py-0 mx-md-4 ${styles.SubTitle }` } 
        style={{ textTransform: 'uppercase'}}>Technical Director</p> 
        <div>
        <span className={`py-1 px-3 px-md-5 ${styles.BoldTitleCall }`} >
            CALLNAME: addcrew16</span> 
        </div>
        {/* Position */}
        {/* <Row className="mt-2">
          <Col xs={12} md={{span: 8, offset: 2}} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="add_pos_16_job" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.BoldScene} `} >Position</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_16_job"
              value={add_pos_16_job}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_16_job?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
        </Row> */}
        <Row className="mt-2">
          <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="add_pos_16_name" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_16_name"
              value={add_pos_16_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_16_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="add_pos_16_phone" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_16_phone"
              value={add_pos_16_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_16_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={12} md={4} className="d-flex justify-content-center mt-1 mt-md-0 p-0 p-lg-2">
          <Form.Group controlId="add_pos_16_email" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_16_email"
              value={add_pos_16_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_16_email?.map((message, idx) => (
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
    {/* Floor Manager - (Using Additional Position 17 keys) */} 
    <div>
        <p className={`my-3 py-0 mx-md-4 ${styles.SubTitle }` } 
        style={{ textTransform: 'uppercase'}}>Floor Manager</p> 
        <div>
        <span className={`py-1 px-3 px-md-5 ${styles.BoldTitleCall }`} >
            CALLNAME: addcrew17</span> 
        </div>
        {/* Position */}
        {/* <Row className="mt-2">
          <Col xs={12} md={{span: 8, offset: 2}} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="add_pos_17_job" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.BoldScene} `} >Position</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_17_job"
              value={add_pos_17_job}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_17_job?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
        </Row> */}
        <Row className="mt-2">
          <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="add_pos_17_name" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_17_name"
              value={add_pos_17_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_17_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="add_pos_17_phone" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_17_phone"
              value={add_pos_17_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_17_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={12} md={4} className="d-flex justify-content-center mt-1 mt-md-0 p-0 p-lg-2">
          <Form.Group controlId="add_pos_17_email" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_17_email"
              value={add_pos_17_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_17_email?.map((message, idx) => (
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
    {/* A1 - (Using Additional Position 18 keys) */} 
    <div>
        <p className={`my-3 py-0 mx-md-4 ${styles.SubTitle }` } 
        style={{ textTransform: 'uppercase'}}>A1/Audio</p> 
        <div>
        <span className={`py-1 px-3 px-md-5 ${styles.BoldTitleCall }`} >
            CALLNAME: addcrew18</span> 
        </div>
        {/* Position */}
        {/* <Row className="mt-2">
          <Col xs={12} md={{span: 8, offset: 2}} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="add_pos_18_job" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.BoldScene} `} >Position</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_18_job"
              value={add_pos_18_job}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_18_job?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
        </Row> */}
        <Row className="mt-2">
          <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="add_pos_18_name" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_18_name"
              value={add_pos_18_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_18_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="add_pos_18_phone" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_18_phone"
              value={add_pos_18_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_18_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={12} md={4} className="d-flex justify-content-center mt-1 mt-md-0 p-0 p-lg-2">
          <Form.Group controlId="add_pos_18_email" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_18_email"
              value={add_pos_18_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_18_email?.map((message, idx) => (
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
    {/* Stage Manager - (Using Additional Position 20 keys) */} 
    <div>
        <p className={`my-3 py-0 mx-md-4 ${styles.SubTitle }` } 
        style={{ textTransform: 'uppercase'}}>Stage Manager</p> 
        <div>
        <span className={`py-1 px-3 px-md-5 ${styles.BoldTitleCall }`} >
            CALLNAME: addcrew20</span> 
        </div>
        {/* Position */}
        {/* <Row className="mt-2">
          <Col xs={12} md={{span: 8, offset: 2}} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="add_pos_20_job" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.BoldScene} `} >Position</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_20_job"
              value={add_pos_20_job}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_20_job?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
        </Row> */}
        <Row className="mt-2">
          <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="add_pos_20_name" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_20_name"
              value={add_pos_20_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_20_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="add_pos_20_phone" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_20_phone"
              value={add_pos_20_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_20_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={12} md={4} className="d-flex justify-content-center mt-1 mt-md-0 p-0 p-lg-2">
          <Form.Group controlId="add_pos_20_email" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_20_email"
              value={add_pos_20_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_20_email?.map((message, idx) => (
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
    <Row>
    <Col className="text-center">
    <p style={{fontStyle: 'italic'}}>
    For all other TV Studio Specific Positions appearing on the Callsheet
    please use the Additional Positions.
    </p>
    </Col>
    </Row>
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