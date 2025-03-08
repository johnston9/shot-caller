/*Form component in the CrewInfoCreate and CrewInfoEdit Form
  components to add/edit the Wardrobe Department crew info */
import React, { useState } from "react";
import { useRedirect } from '../../../../hooks/Redirect';
import Form from "react-bootstrap/Form";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Alert } from "react-bootstrap";
import styles from "../../../../styles/Callsheets.module.css";

const CrewWardrobe = ({handleChange, postData, setShow}) => {
  useRedirect();
  // eslint-disable-next-line
  const [errors, setErrors] = useState({});

  const {costume_designer_name, costume_designer_email, costume_designer_phone,
    ass_costume_designer_name, ass_costume_designer_email, ass_costume_designer_phone,
    casting_director_name, casting_director_email, casting_director_phone,
    pro_assistant_4_name, pro_assistant_4_email, pro_assistant_4_phone,
    pro_assistant_5_name, pro_assistant_5_email, pro_assistant_5_phone,
    wardrobe_assistant_1_name, wardrobe_assistant_1_email, wardrobe_assistant_1_phone,
    wardrobe_assistant_2_name, wardrobe_assistant_2_email, wardrobe_assistant_2_phone,
    wardrobe_assistant_3_name, wardrobe_assistant_3_email, wardrobe_assistant_3_phone,
    wardrobe_assistant_4_name, wardrobe_assistant_4_email, wardrobe_assistant_4_phone,
    wardrobe_assistant_5_name, wardrobe_assistant_5_email, wardrobe_assistant_5_phone,
  } = postData || {};

  return (
    <div className="pb-3 text-center">
    <div className={`mt-0 text-center ${styles.SubTitle }`}>
    <span className={`float-right pt-1 ${styles.Bold } ${styles.Close }`} onClick={() => setShow(false) } >Close</span> 
    <h5 className={`d-none d-md-block pl-5 mb-0 text-center py-1 ${styles.Bold }`} >
    WARDROBE DEPARTMENT</h5>
      <h5 className={`d-block d-md-none pl-5 mb-0 text-center py-1 ${styles.Bold }`} >
      WARDROBE</h5>
    </div>
    <div className={`px-2 px-md-5 mx-md-5 pt-3 ${styles.White }`}>
    {/* Costume Designer */} 
    <div>
      <p className={`mb-3 py-0 mx-md-4 ${styles.SubTitle }` } 
      style={{ textTransform: 'uppercase'}}>Costume Designer</p> 
      <div>
      <span className={`py-1 px-3 px-md-5 ${styles.BoldTitleCall }`} >
        CALLNAME: cosdesign</span> 
      </div>
      <Row className="mt-2">
          <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="costume_designer_name" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="costume_designer_name"
              value={costume_designer_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.costume_designer_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="costume_designer_phone" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="costume_designer_phone"
              value={costume_designer_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.costume_designer_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={12} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="costume_designer_email" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="costume_designer_email"
              value={costume_designer_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.costume_designer_email?.map((message, idx) => (
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
    {/* Assistant Costume Designer */} 
    <div>
      <p className={`my-3 py-0 mx-md-4 ${styles.SubTitle }` } 
      style={{ textTransform: 'uppercase'}}>Assistant Costume Designer</p> 
      <div>
      <span className={`py-1 px-3 px-md-5 ${styles.BoldTitleCall }`} >
        CALLNAME: cosdesast</span> 
      </div>
      <Row className="mt-2">
          <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="ass_costume_designer_name" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="ass_costume_designer_name"
              value={ass_costume_designer_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.ass_costume_designer_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="ass_costume_designer_phone" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="ass_costume_designer_phone"
              value={ass_costume_designer_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.ass_costume_designer_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={12} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="ass_costume_designer_email" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="ass_costume_designer_email"
              value={ass_costume_designer_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.ass_costume_designer_email?.map((message, idx) => (
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
    {/* Wardrobe Supervisor - (Using Casting Director keys) */} 
    <div>
      <p className={`my-3 py-0 mx-md-4 ${styles.SubTitle }` } 
      style={{ textTransform: 'uppercase'}}>Wardrobe Supervisor</p> 
      <div>
      <span className={`py-1 px-3 px-md-5 ${styles.BoldTitleCall }`} >
        CALLNAME: castdir</span> 
      </div>
      <Row className="mt-2">
          <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="casting_director_name" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="casting_director_name"
              value={casting_director_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.casting_director_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="casting_director_phone" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="casting_director_phone"
              value={casting_director_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.casting_director_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={12} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="casting_director_email" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="casting_director_email"
              value={casting_director_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.casting_director_email?.map((message, idx) => (
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
    {/* Key Costumer - (Using Production Assistant 4 keys)  */} 
    <div>
      <p className={`my-3 py-0 mx-md-4 ${styles.SubTitle }` } 
      style={{ textTransform: 'uppercase'}}>Key Costumer</p> 
      <div>
      <span className={`py-1 px-3 px-md-5 ${styles.BoldTitleCall }`} >
        CALLNAME: proast4</span> 
      </div>
      <Row className="mt-2">
          <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="pro_assistant_4_name" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="pro_assistant_4_name"
              value={pro_assistant_4_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.pro_assistant_4_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="pro_assistant_4_phone" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="pro_assistant_4_phone"
              value={pro_assistant_4_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.pro_assistant_4_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={12} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="pro_assistant_4_email" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="pro_assistant_4_email"
              value={pro_assistant_4_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.pro_assistant_4_email?.map((message, idx) => (
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
    {/* Truck Costumer - (Using Production Assistant 5 keys)  */} 
    <div>
      <p className={`my-3 py-0 mx-md-4 ${styles.SubTitle }` } 
      style={{ textTransform: 'uppercase'}}>Truck Costumer</p> 
      <div>
      <span className={`py-1 px-3 px-md-5 ${styles.BoldTitleCall }`} >
        CALLNAME: proast5</span> 
      </div>
      <Row className="mt-2">
          <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="pro_assistant_5_name" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="pro_assistant_5_name"
              value={pro_assistant_5_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.pro_assistant_5_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="pro_assistant_5_phone" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="pro_assistant_5_phone"
              value={pro_assistant_5_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.pro_assistant_5_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={12} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="pro_assistant_5_email" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="pro_assistant_5_email"
              value={pro_assistant_5_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.pro_assistant_5_email?.map((message, idx) => (
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
    {/* Set Costumer 1 - (Using Wardrobe Assistant 4 keys) */} 
    <div>
      <p className={`my-3 py-0 mx-md-4 ${styles.SubTitle }` } 
      style={{ textTransform: 'uppercase'}}>Set Costumer 1</p> 
      <div>
      <span className={`py-1 px-3 px-md-5 ${styles.BoldTitleCall }`} >
        CALLNAME: wardrobe4</span> 
      </div>
      <Row className="mt-2">
          <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="wardrobe_assistant_4_name" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="wardrobe_assistant_4_name"
              value={wardrobe_assistant_4_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.wardrobe_assistant_4_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="wardrobe_assistant_4_phone" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="wardrobe_assistant_4_phone"
              value={wardrobe_assistant_4_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.wardrobe_assistant_4_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={12} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="wardrobe_assistant_4_email" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="wardrobe_assistant_4_email"
              value={wardrobe_assistant_4_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.wardrobe_assistant_4_email?.map((message, idx) => (
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
    {/* Set Costumer 2 - (Using Wardrobe Assistant 5 keys) */} 
    <div>
      <p className={`my-3 py-0 mx-md-4 ${styles.SubTitle }` } 
      style={{ textTransform: 'uppercase'}}>Set Costumer 2</p> 
      <div>
      <span className={`py-1 px-3 px-md-5 ${styles.BoldTitleCall }`} >
        CALLNAME: wardrobe5</span> 
      </div>
      <Row className="mt-2">
          <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="wardrobe_assistant_5_name" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="wardrobe_assistant_5_name"
              value={wardrobe_assistant_5_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.wardrobe_assistant_5_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="wardrobe_assistant_5_phone" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="wardrobe_assistant_5_phone"
              value={wardrobe_assistant_5_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.wardrobe_assistant_5_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={12} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="wardrobe_assistant_5_email" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="wardrobe_assistant_5_email"
              value={wardrobe_assistant_5_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.wardrobe_assistant_5_email?.map((message, idx) => (
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
    {/* Wardrobe Assistant 1 */} 
    <div>
      <p className={`my-3 py-0 mx-md-4 ${styles.SubTitle }` } 
      style={{ textTransform: 'uppercase'}}>Wardrobe Assistant 1</p> 
      <div>
      <span className={`py-1 px-3 px-md-5 ${styles.BoldTitleCall }`} >
        CALLNAME: wardrobe1</span> 
      </div>
      <Row className="mt-2">
          <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="wardrobe_assistant_1_name" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="wardrobe_assistant_1_name"
              value={wardrobe_assistant_1_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.wardrobe_assistant_1_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="wardrobe_assistant_1_phone" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="wardrobe_assistant_1_phone"
              value={wardrobe_assistant_1_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.wardrobe_assistant_1_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={12} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="wardrobe_assistant_1_email" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="wardrobe_assistant_1_email"
              value={wardrobe_assistant_1_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.wardrobe_assistant_1_email?.map((message, idx) => (
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
    {/* Wardrobe Assistant 2 */} 
    <div>
      <p className={`my-3 py-0 mx-md-4 ${styles.SubTitle }` } 
      style={{ textTransform: 'uppercase'}}>Wardrobe Assistant 2</p> 
      <div>
      <span className={`py-1 px-3 px-md-5 ${styles.BoldTitleCall }`} >
        CALLNAME: wardrobe2</span> 
      </div>
      <Row className="mt-2">
          <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="wardrobe_assistant_2_name" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="wardrobe_assistant_2_name"
              value={wardrobe_assistant_2_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.wardrobe_assistant_2_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="wardrobe_assistant_2_phone" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="wardrobe_assistant_2_phone"
              value={wardrobe_assistant_2_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.wardrobe_assistant_2_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={12} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="wardrobe_assistant_2_email" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="wardrobe_assistant_2_email"
              value={wardrobe_assistant_2_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.wardrobe_assistant_2_email?.map((message, idx) => (
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
    {/* Wardrobe Assistant 3 */} 
    <div>
      <p className={`my-3 py-0 mx-md-4 ${styles.SubTitle }` } 
      style={{ textTransform: 'uppercase'}}>Wardrobe Assistant 3</p> 
      <div>
      <span className={`py-1 px-3 px-md-5 ${styles.BoldTitleCall }`} >
        CALLNAME: wardrobe3</span> 
      </div>
      <Row className="mt-2">
          <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="wardrobe_assistant_3_name" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="wardrobe_assistant_3_name"
              value={wardrobe_assistant_3_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.wardrobe_assistant_3_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="wardrobe_assistant_3_phone" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="wardrobe_assistant_3_phone"
              value={wardrobe_assistant_3_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.wardrobe_assistant_3_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={12} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="wardrobe_assistant_3_email" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="wardrobe_assistant_3_email"
              value={wardrobe_assistant_3_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.wardrobe_assistant_3_email?.map((message, idx) => (
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

export default CrewWardrobe