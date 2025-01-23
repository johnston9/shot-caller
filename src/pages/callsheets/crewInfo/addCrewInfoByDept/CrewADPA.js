/*Form component in the CrewInfoCreate and CrewInfoEdit Form
  components to add/edit the Casting and AD Departments crew info */
import React, { useState } from "react";
import { useRedirect } from '../../../../hooks/Redirect';
import Form from "react-bootstrap/Form";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Alert } from "react-bootstrap";
import styles from "../../../../styles/Callsheets.module.css";

const CrewADPA = ({handleChange, postData, setShow}) => {
  useRedirect();
  // eslint-disable-next-line
  const [errors, setErrors] = useState({});

  const {ad_1_name, ad_1_email, ad_1_phone,
    ad_2_name, ad_2_email, ad_2_phone,
    ad_3_name, ad_3_email, ad_3_phone,
    ad_4_name, ad_4_email, ad_4_phone,
    ad_5_name, ad_5_email, ad_5_phone,
    pro_assistant_1_name, pro_assistant_1_email, pro_assistant_1_phone,
    pro_assistant_2_name, pro_assistant_2_email, pro_assistant_2_phone,
    pro_assistant_3_name, pro_assistant_3_email, pro_assistant_3_phone,
  } = postData || {};

  return (
    <div className="pb-3 text-center">
        <div className={`mt-0 text-center ${styles.SubTitle }`}>
        <span className={`float-right pt-2 ${styles.Bold } ${styles.Close }`} onClick={() => setShow(false) } >Close</span> 
        <h5 className={`pl-5 mb-0 text-center py-1 ${styles.Bold }`} >AD/PA POSITIONS </h5>
        </div>
        <div className={`px-2 px-md-5 mx-md-5 pt-3 ${styles.White }`}>
        {/* 1st Assistant Director */} 
        <div>
          <p className={`mb-3 py-0 mx-md-4 ${styles.SubTitle }` } 
          style={{ textTransform: 'uppercase'}}>1st Assistant Director</p> 
          <div>
          <span className={`py-1 px-3 px-md-5 ${styles.BoldTitleCall }`} >
            CALLNAME: astdir1</span> 
          </div>
          <Row className="mt-2">
              <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
              <Form.Group controlId="ad_1_name" className={`${styles.Width2} `}  >
                  <Form.Label className={`${styles.BoldScene} `} >Name</Form.Label>
                  <Form.Control 
                  className={`${styles.Input}`}
                  type="text"
                  name="ad_1_name"
                  value={ad_1_name}
                  onChange={handleChange}
                      />
              </Form.Group>
              {errors?.ad_1_name?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
              </Col>
              <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
              <Form.Group controlId="ad_1_phone" className={`${styles.Width2} `}  >
                  <Form.Label className={`${styles.BoldScene}`} >Phone</Form.Label>
                  <Form.Control 
                  className={`${styles.Input}`}
                  type="text"
                  name="ad_1_phone"
                  value={ad_1_phone}
                  onChange={handleChange}
                      />
              </Form.Group>
              {errors?.ad_1_phone?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
              </Col>
              <Col xs={12} md={4} className="d-flex justify-content-center p-0 p-lg-2">
              <Form.Group controlId="ad_1_email" className={`${styles.Width2} `}  >
                  <Form.Label className={`${styles.BoldScene}`} >Email</Form.Label>
                  <Form.Control 
                  className={`${styles.Input}`}
                  type="text"
                  name="ad_1_email"
                  value={ad_1_email}
                  onChange={handleChange}
                      />
              </Form.Group>
              {errors?.ad_1_email?.map((message, idx) => (
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
        {/* 2nd Assistant Director */} 
        <div>
          <p className={`my-3 py-0 mx-md-4 ${styles.SubTitle }` } 
          style={{ textTransform: 'uppercase'}}>2nd Assistant Director</p> 
          <div>
          <span className={`py-1 px-3 px-md-5 ${styles.BoldTitleCall }`} >
            CALLNAME: astdir2</span> 
          </div>
          <Row className="mt-2">
              <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
              <Form.Group controlId="ad_2_name" className={`${styles.Width2} `}  >
                  <Form.Label className={`${styles.BoldScene} `} >Name</Form.Label>
                  <Form.Control 
                  className={`${styles.Input}`}
                  type="text"
                  name="ad_2_name"
                  value={ad_2_name}
                  onChange={handleChange}
                      />
              </Form.Group>
              {errors?.ad_2_name?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
              </Col>
              <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
              <Form.Group controlId="ad_2_phone" className={`${styles.Width2} `}  >
                  <Form.Label className={`${styles.BoldScene}`} >Phone</Form.Label>
                  <Form.Control 
                  className={`${styles.Input}`}
                  type="text"
                  name="ad_2_phone"
                  value={ad_2_phone}
                  onChange={handleChange}
                      />
              </Form.Group>
              {errors?.ad_2_phone?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
              </Col>
              <Col xs={12} md={4} className="d-flex justify-content-center p-0 p-lg-2">
              <Form.Group controlId="ad_2_email" className={`${styles.Width2} `}  >
                  <Form.Label className={`${styles.BoldScene}`} >Email</Form.Label>
                  <Form.Control 
                  className={`${styles.Input}`}
                  type="text"
                  name="ad_2_email"
                  value={ad_2_email}
                  onChange={handleChange}
                      />
              </Form.Group>
              {errors?.ad_2_email?.map((message, idx) => (
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
        {/* 3rd Assistant Director */} 
        <div>
          <p className={`my-3 py-0 mx-md-4 ${styles.SubTitle }` } 
          style={{ textTransform: 'uppercase'}}>3rd Assistant Director</p> 
          <div>
          <span className={`py-1 px-3 px-md-5 ${styles.BoldTitleCall }`} >
            CALLNAME: astdir3</span> 
          </div>
          <Row className="mt-2">
              <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
              <Form.Group controlId="ad_3_name" className={`${styles.Width2} `}  >
                  <Form.Label className={`${styles.BoldScene} `} >Name</Form.Label>
                  <Form.Control 
                  className={`${styles.Input}`}
                  type="text"
                  name="ad_3_name"
                  value={ad_3_name}
                  onChange={handleChange}
                      />
              </Form.Group>
              {errors?.ad_3_name?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
              </Col>
              <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
              <Form.Group controlId="ad_3_phone" className={`${styles.Width2} `}  >
                  <Form.Label className={`${styles.BoldScene}`} >Phone</Form.Label>
                  <Form.Control 
                  className={`${styles.Input}`}
                  type="text"
                  name="ad_3_phone"
                  value={ad_3_phone}
                  onChange={handleChange}
                      />
              </Form.Group>
              {errors?.ad_3_phone?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
              </Col>
              <Col xs={12} md={4} className="d-flex justify-content-center p-0 p-lg-2">
              <Form.Group controlId="ad_3_email" className={`${styles.Width2} `}  >
                  <Form.Label className={`${styles.BoldScene}`} >Email</Form.Label>
                  <Form.Control 
                  className={`${styles.Input}`}
                  type="text"
                  name="ad_3_email"
                  value={ad_3_email}
                  onChange={handleChange}
                      />
              </Form.Group>
              {errors?.ad_3_email?.map((message, idx) => (
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
        {/* 4th Assistant Director */} 
        <div>
          <p className={`my-3 py-0 mx-md-4 ${styles.SubTitle }` } 
          style={{ textTransform: 'uppercase'}}>4th Assistant Director</p> 
          <div>
          <span className={`py-1 px-3 px-md-5 ${styles.BoldTitleCall }`} >
            CALLNAME: astdir4</span> 
          </div>
          <Row className="mt-2">
              <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
              <Form.Group controlId="ad_4_name" className={`${styles.Width2} `}  >
                  <Form.Label className={`${styles.BoldScene} `} >Name</Form.Label>
                  <Form.Control 
                  className={`${styles.Input}`}
                  type="text"
                  name="ad_4_name"
                  value={ad_4_name}
                  onChange={handleChange}
                      />
              </Form.Group>
              {errors?.ad_4_name?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
              </Col>
              <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
              <Form.Group controlId="ad_4_phone" className={`${styles.Width2} `}  >
                  <Form.Label className={`${styles.BoldScene}`} >Phone</Form.Label>
                  <Form.Control 
                  className={`${styles.Input}`}
                  type="text"
                  name="ad_4_phone"
                  value={ad_4_phone}
                  onChange={handleChange}
                      />
              </Form.Group>
              {errors?.ad_4_phone?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
              </Col>
              <Col xs={12} md={4} className="d-flex justify-content-center p-0 p-lg-2">
              <Form.Group controlId="ad_4_email" className={`${styles.Width2} `}  >
                  <Form.Label className={`${styles.BoldScene}`} >Email</Form.Label>
                  <Form.Control 
                  className={`${styles.Input}`}
                  type="text"
                  name="ad_4_email"
                  value={ad_4_email}
                  onChange={handleChange}
                      />
              </Form.Group>
              {errors?.ad_4_email?.map((message, idx) => (
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
        {/* 2nd 2nd Assistant Director */} 
        <div>
          <p className={`my-3 py-0 mx-md-4 ${styles.SubTitle }` } 
          style={{ textTransform: 'uppercase'}}>2nd 2nd Assistant Director</p> 
          <div>
          <span className={`py-1 px-3 px-md-5 ${styles.BoldTitleCall }`} >
            CALLNAME: astdir5</span> 
          </div>
          <Row className="mt-2">
              <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
              <Form.Group controlId="ad_5_name" className={`${styles.Width2} `}  >
                  <Form.Label className={`${styles.BoldScene} `} >Name</Form.Label>
                  <Form.Control 
                  className={`${styles.Input}`}
                  type="text"
                  name="ad_5_name"
                  value={ad_5_name}
                  onChange={handleChange}
                      />
              </Form.Group>
              {errors?.ad_5_name?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
              </Col>
              <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
              <Form.Group controlId="ad_5_phone" className={`${styles.Width2} `}  >
                  <Form.Label className={`${styles.BoldScene}`} >Phone</Form.Label>
                  <Form.Control 
                  className={`${styles.Input}`}
                  type="text"
                  name="ad_5_phone"
                  value={ad_5_phone}
                  onChange={handleChange}
                      />
              </Form.Group>
              {errors?.ad_5_phone?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
              </Col>
              <Col xs={12} md={4} className="d-flex justify-content-center p-0 p-lg-2">
              <Form.Group controlId="ad_5_email" className={`${styles.Width2} `}  >
                  <Form.Label className={`${styles.BoldScene}`} >Email</Form.Label>
                  <Form.Control 
                  className={`${styles.Input}`}
                  type="text"
                  name="ad_5_email"
                  value={ad_5_email}
                  onChange={handleChange}
                      />
              </Form.Group>
              {errors?.ad_5_email?.map((message, idx) => (
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
        {/* Production Assistant 1 */} 
        <div>
          <p className={`my-3 py-0 mx-md-4 ${styles.SubTitle }` } 
          style={{ textTransform: 'uppercase'}}>Production Assistant 1</p> 
          <div>
          <span className={`py-1 px-3 px-md-5 ${styles.BoldTitleCall }`} >
            CALLNAME: proast1</span> 
          </div>
          <Row className="mt-2">
              <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
              <Form.Group controlId="pro_assistant_1_name" className={`${styles.Width2} `}  >
                  <Form.Label className={`${styles.BoldScene} `} >Name</Form.Label>
                  <Form.Control 
                  className={`${styles.Input}`}
                  type="text"
                  name="pro_assistant_1_name"
                  value={pro_assistant_1_name}
                  onChange={handleChange}
                      />
              </Form.Group>
              {errors?.pro_assistant_1_name?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
              </Col>
              <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
              <Form.Group controlId="pro_assistant_1_phone" className={`${styles.Width2} `}  >
                  <Form.Label className={`${styles.BoldScene}`} >Phone</Form.Label>
                  <Form.Control 
                  className={`${styles.Input}`}
                  type="text"
                  name="pro_assistant_1_phone"
                  value={pro_assistant_1_phone}
                  onChange={handleChange}
                      />
              </Form.Group>
              {errors?.pro_assistant_1_phone?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
              </Col>
              <Col xs={12} md={4} className="d-flex justify-content-center p-0 p-lg-2">
              <Form.Group controlId="pro_assistant_1_email" className={`${styles.Width2} `}  >
                  <Form.Label className={`${styles.BoldScene}`} >Email</Form.Label>
                  <Form.Control 
                  className={`${styles.Input}`}
                  type="text"
                  name="pro_assistant_1_email"
                  value={pro_assistant_1_email}
                  onChange={handleChange}
                      />
              </Form.Group>
              {errors?.pro_assistant_1_email?.map((message, idx) => (
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
        {/* Production Assistant 2 */} 
        <div>
          <p className={`my-3 py-0 mx-md-4 ${styles.SubTitle }` } 
          style={{ textTransform: 'uppercase'}}>Production Assistant 2</p> 
          <div>
          <span className={`py-1 px-3 px-md-5 ${styles.BoldTitleCall }`} >
            CALLNAME: proast2</span> 
          </div>
          <Row className="mt-2">
              <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
              <Form.Group controlId="pro_assistant_2_name" className={`${styles.Width2} `}  >
                  <Form.Label className={`${styles.BoldScene} `} >Name</Form.Label>
                  <Form.Control 
                  className={`${styles.Input}`}
                  type="text"
                  name="pro_assistant_2_name"
                  value={pro_assistant_2_name}
                  onChange={handleChange}
                      />
              </Form.Group>
              {errors?.pro_assistant_2_name?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
              </Col>
              <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
              <Form.Group controlId="pro_assistant_2_phone" className={`${styles.Width2} `}  >
                  <Form.Label className={`${styles.BoldScene}`} >Phone</Form.Label>
                  <Form.Control 
                  className={`${styles.Input}`}
                  type="text"
                  name="pro_assistant_2_phone"
                  value={pro_assistant_2_phone}
                  onChange={handleChange}
                      />
              </Form.Group>
              {errors?.pro_assistant_2_phone?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
              </Col>
              <Col xs={12} md={4} className="d-flex justify-content-center p-0 p-lg-2">
              <Form.Group controlId="pro_assistant_2_email" className={`${styles.Width2} `}  >
                  <Form.Label className={`${styles.BoldScene}`} >Email</Form.Label>
                  <Form.Control 
                  className={`${styles.Input}`}
                  type="text"
                  name="pro_assistant_2_email"
                  value={pro_assistant_2_email}
                  onChange={handleChange}
                      />
              </Form.Group>
              {errors?.pro_assistant_2_email?.map((message, idx) => (
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
        {/* Production Assistant 3 */} 
        <div>
          <p className={`my-3 py-0 mx-md-4 ${styles.SubTitle }` } 
          style={{ textTransform: 'uppercase'}}>Production Assistant 3</p> 
          <div>
          <span className={`py-1 px-3 px-md-5 ${styles.BoldTitleCall }`} >
            CALLNAME: proast3</span> 
          </div>
          <Row className="mt-2">
              <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
              <Form.Group controlId="pro_assistant_3_name" className={`${styles.Width2} `}  >
                  <Form.Label className={`${styles.BoldScene} `} >Name</Form.Label>
                  <Form.Control 
                  className={`${styles.Input}`}
                  type="text"
                  name="pro_assistant_3_name"
                  value={pro_assistant_3_name}
                  onChange={handleChange}
                      />
              </Form.Group>
              {errors?.pro_assistant_3_name?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
              </Col>
              <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
              <Form.Group controlId="pro_assistant_3_phone" className={`${styles.Width2} `}  >
                  <Form.Label className={`${styles.BoldScene}`} >Phone</Form.Label>
                  <Form.Control 
                  className={`${styles.Input}`}
                  type="text"
                  name="pro_assistant_3_phone"
                  value={pro_assistant_3_phone}
                  onChange={handleChange}
                      />
              </Form.Group>
              {errors?.pro_assistant_3_phone?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
              </Col>
              <Col xs={12} md={4} className="d-flex justify-content-center p-0 p-lg-2">
              <Form.Group controlId="pro_assistant_3_email" className={`${styles.Width2} `}  >
                  <Form.Label className={`${styles.BoldScene}`} >Email</Form.Label>
                  <Form.Control 
                  className={`${styles.Input}`}
                  type="text"
                  name="pro_assistant_3_email"
                  value={pro_assistant_3_email}
                  onChange={handleChange}
                      />
              </Form.Group>
              {errors?.pro_assistant_3_email?.map((message, idx) => (
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

export default CrewADPA