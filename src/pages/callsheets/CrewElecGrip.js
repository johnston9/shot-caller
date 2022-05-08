import React, { useState } from "react";
import { useRedirect } from '../../hooks/Redirect';
import Form from "react-bootstrap/Form";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Alert } from "react-bootstrap";
import styles from "../../styles/Callsheets.module.css";

const CrewElecGrip = ({handleChange, postData, setShow}) => {
  useRedirect("loggedOut");
  // eslint-disable-next-line
  const [errors, setErrors] = useState({});

  const {gaffer_name, gaffer_email, gaffer_phone,
    best_boy_electric_name, best_boy_electric_email, best_boy_electric_phone,
    electric_3_name, electric_3_email, electric_3_phone,
    electric_4_name, electric_4_email, electric_4_phone,
    keygrip_name, keygrip_email, keygrip_phone,
    best_boy_grip_name, best_boy_grip_email, best_boy_grip_phone,
    dolly_grip_name, dolly_grip_email, dolly_grip_phone,
    swing_ge1_name, swing_ge1_email, swing_ge1_phone,
    swing_ge2_name, swing_ge2_email, swing_ge2_phone,
    swing_ge3_name, swing_ge3_email, swing_ge3_phone,
    swing_ge4_name, swing_ge4_email, swing_ge4_phone,
    swing_ge5_name, swing_ge5_email, swing_ge5_phone,
  } = postData || {};

  return (
    <div className="text-center">
      {/* ELECTRIC */}
      <div>
      <div className={`mt-0 text-center ${styles.SubTitle }`}>
      <span className={`float-right py-1 ${styles.Bold } ${styles.Close }`} onClick={() => setShow(false) } >Close</span> 
      <h3 className={`pl-5 text-center py-1 ${styles.Bold }`} >ELECTRIC </h3>
      </div>
      {/* Gaffer */} 
      <h5 className="mt-1" >Gaffer</h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="gaffer_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="gaffer_name"
              value={gaffer_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.gaffer_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="gaffer_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="gaffer_email"
              value={gaffer_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.gaffer_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="gaffer_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="gaffer_phone"
              value={gaffer_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.gaffer_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* Best Boy Electric */}
      <h5 className="mt-1" >Best Boy Electric</h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="best_boy_electric_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="best_boy_electric_name"
              value={best_boy_electric_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.best_boy_electric_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="best_boy_electric_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="best_boy_electric_email"
              value={best_boy_electric_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.best_boy_electric_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="best_boy_electric_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="best_boy_electric_phone"
              value={best_boy_electric_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.best_boy_electric_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* 3rd Electric */} 
      <h5 className="mt-1" >3rd Electric</h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="electric_3_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="electric_3_name"
              value={electric_3_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.electric_3_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="electric_3_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="electric_3_email"
              value={electric_3_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.electric_3_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="electric_3_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="electric_3_phone"
              value={electric_3_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.electric_3_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* 4th Electric */}
      <h5 className="mt-1" >4th Electric</h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="electric_4_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="electric_4_name"
              value={electric_4_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.electric_4_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="electric_4_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="electric_4_email"
              value={electric_4_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.electric_4_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="electric_4_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="electric_4_phone"
              value={electric_3_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.electric_4_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      </div>

      {/* GRIP */}
      <div className="pb-3">
      <h3 className={` my-3 py-1 ${styles.SubTitle }`} >GRIP</h3> 
      {/* Key Grip< */} 
      <h5 className="mt-1" >Key Grip</h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="keygrip_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="keygrip_name"
              value={keygrip_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.keygrip_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="keygrip_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="keygrip_email"
              value={keygrip_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.keygrip_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="keygrip_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="keygrip_phone"
              value={keygrip_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.keygrip_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* Best Boy Grip */}
      <h5 className="mt-1" >Best Boy Grip</h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="best_boy_grip_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="best_boy_grip_name"
              value={best_boy_grip_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.best_boy_grip_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="best_boy_grip_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="best_boy_grip_email"
              value={best_boy_grip_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.best_boy_grip_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="best_boy_grip_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="best_boy_grip_phone"
              value={best_boy_grip_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.best_boy_grip_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* Dolly Grip */} 
      <h5 className="mt-1" >Dolly Grip </h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="dolly_grip_name " className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="dolly_grip_name"
              value={dolly_grip_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.dolly_grip_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="dolly_grip_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="dolly_grip_email"
              value={dolly_grip_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.dolly_grip_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="dolly_grip_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="dolly_grip_phone"
              value={dolly_grip_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.dolly_grip_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* Swing G&E 1 */}
      <h5 className="mt-1" >Swing G/E 1</h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="swing_ge1_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="swing_ge1_name"
              value={swing_ge1_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.swing_ge1_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="swing_ge1_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="swing_ge1_email"
              value={swing_ge1_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.swing_ge1_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="swing_ge1_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="swing_ge1_phone"
              value={swing_ge1_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.swing_ge1_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* Swing G&E 2 */}
      <h5 className="mt-1" >Swing G/E 2</h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="swing_ge2_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="swing_ge2_name"
              value={swing_ge2_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.swing_ge2_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="swing_ge2_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="swing_ge2_email"
              value={swing_ge2_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.swing_ge2_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="swing_ge2_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="swing_ge2_phone"
              value={swing_ge2_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.swing_ge2_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* Swing G&E 3 */}
      <h5 className="mt-1" >Swing G/E 3</h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="swing_ge3_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="swing_ge3_name"
              value={swing_ge3_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.swing_ge3_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="swing_ge3_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="swing_ge3_email"
              value={swing_ge3_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.swing_ge3_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="swing_ge3_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="swing_ge3_phone"
              value={swing_ge3_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.swing_ge3_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* Swing G&E 4 */}
      <h5 className="mt-1" >Swing G/E 4</h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="swing_ge4_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="swing_ge4_name"
              value={swing_ge4_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.swing_ge4_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="swing_ge4_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="swing_ge4_email"
              value={swing_ge1_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.swing_ge4_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="swing_ge4_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="swing_ge4_phone"
              value={swing_ge4_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.swing_ge4_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* Swing G&E 5 */}
      <h5 className="mt-1" >Swing G/E 5</h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="swing_ge5_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="swing_ge5_name"
              value={swing_ge5_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.swing_ge5_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="swing_ge5_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="swing_ge5_email"
              value={swing_ge5_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.swing_ge5_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="swing_ge5_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="swing_ge5_phone"
              value={swing_ge5_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.swing_ge5_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      </div>
    </div>
  )
}

export default CrewElecGrip