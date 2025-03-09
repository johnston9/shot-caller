/*Form component in the CrewInfoCreate and CrewInfoEdit Form
  components to add/edit the Wrangling Crew Positions crew info */
  import React, { useState } from "react";
  import { useRedirect } from '../../../../hooks/Redirect';
  import Form from "react-bootstrap/Form";
  import Col from 'react-bootstrap/Col';
  import Row from 'react-bootstrap/Row';
  import { Alert } from "react-bootstrap";
  import styles from "../../../../styles/Callsheets.module.css";

const CrewWrangling = ({handleChange, postData, setShow}) => {
    useRedirect();
        // eslint-disable-next-line
        const [errors, setErrors] = useState({});

        const {legal_name, legal_email, legal_phone,
          add_pos_19_name, add_pos_19_email, add_pos_19_phone,
          makeup_artist_5_name, makeup_artist_5_email, makeup_artist_5_phone,
          truck3_name, truck3_email, truck3_phone,
          truck2_name, truck2_email, truck2_phone,
            } = postData || {};
          
  return (
    <div className="pb-3 text-center">
    <div className={`mt-0 text-center ${styles.SubTitle }`}>
    <span className={`float-right pt-1 ${styles.Bold } ${styles.Close }`} onClick={() => setShow(false) } >Close</span> 
    <h5 className={`d-none d-md-block pl-5 mb-0 text-center py-1 ${styles.SubTitle }`} >
    CONSTRUCTION DEPARTMENT</h5>
    <h5 className={`d-block d-md-none pl-5 mb-0 text-center py-1 ${styles.SubTitle }`} >
    CONSTRUCTION</h5>
    </div>
    <div className={`px-2 px-md-5 mx-md-5 pt-3 ${styles.White }`}>
    {/* Standby Carpenter (using Truck 2 keys) */} 
    <div>
        <p className={`mb-3 py-0 mx-md-4 ${styles.SubTitle }` } 
        style={{ textTransform: 'uppercase'}}>Standby Carpenter</p> 
        <div>
        <span className={`py-1 px-3 px-md-5 ${styles.BoldTitleCall }`} >
            CALLNAME: truck2</span> 
        </div>
        <Row className="mt-2">
            <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
            <Form.Group controlId="truck2_name" className={`${styles.Width2} `}  >
                <Form.Label className={`${styles.BoldScene} `} >Name</Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="truck2_name"
                value={truck2_name}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.truck2_name?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                {message}
                </Alert>
            ))}
            </Col>
            <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
            <Form.Group controlId="truck2_phone" className={`${styles.Width2} `}  >
                <Form.Label className={`${styles.BoldScene}`} >Phone</Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="truck2_phone"
                value={truck2_phone}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.truck2_phone?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                {message}
                </Alert>
            ))}
            </Col>
            <Col xs={12} md={4} className="d-flex justify-content-center p-0 p-lg-2">
            <Form.Group controlId="truck2_email" className={`${styles.Width2} `}  >
                <Form.Label className={`${styles.BoldScene}`} >Email</Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="truck2_email"
                value={truck2_email}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.truck2_email?.map((message, idx) => (
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
    {/* Standby Painter (Using Additional Position 19 keys) */} 
    <div>
        <p className={`my-3 py-0 mx-md-4 ${styles.SubTitle }` } 
        style={{ textTransform: 'uppercase'}}>Standby Painter</p> 
        <div>
        <span className={`py-1 px-3 px-md-5 ${styles.BoldTitleCall }`} >
            CALLNAME: addcrew19</span> 
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
          <Form.Group controlId="add_pos_19_name" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_19_name"
              value={add_pos_19_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_19_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="add_pos_19_phone" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_19_phone"
              value={add_pos_19_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_19_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={12} md={4} className="d-flex justify-content-center mt-1 mt-md-0 p-0 p-lg-2">
          <Form.Group controlId="add_pos_19_email" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_19_email"
              value={add_pos_19_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_19_email?.map((message, idx) => (
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
    {/* Standby Rigger (Using makeup artist 5 keys) */} 
    <div>
      <p className={`my-3 py-0 mx-md-4 ${styles.SubTitle }` } 
      style={{ textTransform: 'uppercase'}}>Standby Rigger</p> 
      <div>
      <span className={`py-1 px-3 px-md-5 ${styles.BoldTitleCall }`} >
        CALLNAME: makeup5</span> 
      </div>
      <Row className="mt-2">
          <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="makeup_artist_5_name" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="makeup_artist_5_name"
              value={makeup_artist_5_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.makeup_artist_5_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="makeup_artist_5_phone" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="makeup_artist_5_phone"
              value={makeup_artist_5_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.makeup_artist_5_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={12} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="makeup_artist_5_email" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="makeup_artist_5_email"
              value={makeup_artist_5_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.makeup_artist_5_email?.map((message, idx) => (
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
    {/* Standby Stagehand (Using truck 3 keys) */} 
    <div>
        <p className={`my-3 py-0 mx-md-4 ${styles.SubTitle }` } 
        style={{ textTransform: 'uppercase'}}>Standby Stagehand</p> 
        <div>
        <span className={`py-1 px-3 px-md-5 ${styles.BoldTitleCall }`} >
            CALLNAME: truck3</span> 
        </div>
        <Row className="mt-2">
            <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
            <Form.Group controlId="truck3_name" className={`${styles.Width2} `}  >
                <Form.Label className={`${styles.BoldScene} `} >Name</Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="truck3_name"
                value={truck3_name}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.truck3_name?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                {message}
                </Alert>
            ))}
            </Col>
            <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
            <Form.Group controlId="truck3_phone" className={`${styles.Width2} `}  >
                <Form.Label className={`${styles.BoldScene}`} >Phone</Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="truck3_phone"
                value={truck3_phone}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.truck3_phone?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                {message}
                </Alert>
            ))}
            </Col>
            <Col xs={12} md={4} className="d-flex justify-content-center p-0 p-lg-2">
            <Form.Group controlId="truck3_email" className={`${styles.Width2} `}  >
                <Form.Label className={`${styles.BoldScene}`} >Email</Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="truck3_email"
                value={truck3_email}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.truck3_email?.map((message, idx) => (
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
    <h5 className={`mt-4 mx-md-5 mb-0 text-center py-1  ${styles.SubTitle }`} >WRANGLING DEPARTMENT </h5>
    <div className={`px-2 px-md-5 mx-md-5 pt-3 ${styles.White }`}>
    {/* Head Wrangler (Using legal keys) */} 
    <div>
      <p className={`mb-3 py-0 mx-md-4 ${styles.SubTitle }` } 
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