/*Form component in the CrewInfoCreate and CrewInfoEdit Form
  components to add/edit the X-tra Camera Department crew info */
  import React, { useState } from "react";
  import { useRedirect } from '../../../../hooks/Redirect';
  import Form from "react-bootstrap/Form";
  import Col from 'react-bootstrap/Col';
  import Row from 'react-bootstrap/Row';
  import { Alert } from "react-bootstrap";
  import styles from "../../../../styles/Callsheets.module.css";
  
  const XtraCrewCamera = ({handleChange, postData, setShow}) => {
    useRedirect();
    // eslint-disable-next-line
    const [errors, setErrors] = useState({});
  
    const {
        xtra_camera_pos_1_job, xtra_camera_pos_1_name, xtra_camera_pos_1_email, xtra_camera_pos_1_phone,
          xtra_camera_pos_2_job, xtra_camera_pos_2_name, xtra_camera_pos_2_email, xtra_camera_pos_2_phone,
          xtra_camera_pos_3_job, xtra_camera_pos_3_name, xtra_camera_pos_3_email, xtra_camera_pos_3_phone,
          xtra_camera_pos_4_job, xtra_camera_pos_4_name, xtra_camera_pos_4_email, xtra_camera_pos_4_phone,
          xtra_camera_pos_5_job, xtra_camera_pos_5_name, xtra_camera_pos_5_email, xtra_camera_pos_5_phone,
          xtra_camera_pos_6_job, xtra_camera_pos_6_name, xtra_camera_pos_6_email, xtra_camera_pos_6_phone,
          xtra_camera_pos_7_job, xtra_camera_pos_7_name, xtra_camera_pos_7_email, xtra_camera_pos_7_phone,
          xtra_camera_pos_8_job, xtra_camera_pos_8_name, xtra_camera_pos_8_email, xtra_camera_pos_8_phone,
          xtra_camera_pos_9_job, xtra_camera_pos_9_name, xtra_camera_pos_9_email, xtra_camera_pos_9_phone,
          xtra_camera_pos_10_job, xtra_camera_pos_10_name, xtra_camera_pos_10_email, xtra_camera_pos_10_phone,
    } = postData || {};
  
    return (
      <div className="pb-3 text-center">
        <div className={`mt-0 text-center ${styles.SubTitle }`}>
        <span className={`float-right pt-2 ${styles.Bold } ${styles.Close }`} onClick={() => setShow(false) } >Close</span> 
        <h3 className={`pl-5 mb-0 text-center py-1 ${styles.Bold }`} >XTRA CAMERA POSITIONS </h3>
        </div>
        <div className={`py-2 ${styles.White }`}>
        </div>
        {/* Xtra Camera Position 1 */}
        <h5 className={`mb-3 py-1 ${styles.SubTitle2 }`} >Xtra Camera Position 1</h5> 
        <div>
        <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: xtracam1</span> 
        </div>
        <Row>
            <Col xs={{span: 4, offset: 4 }} className="d-flex justify-content-center p-0 p-md-2">
            <Form.Group controlId="xtra_camera_pos_1_job" className={`${styles.Width} `}  >
                <Form.Label className={`${styles.Bold} `} >Position</Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="xtra_camera_pos_1_job"
                value={xtra_camera_pos_1_job}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.xtra_camera_pos_1_job?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
        </Row>
        <Row>
            <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
            <Form.Group controlId="xtra_camera_pos_1_name" className={`${styles.Width} `}  >
                <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="xtra_camera_pos_1_name"
                value={xtra_camera_pos_1_name}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.xtra_camera_pos_1_name?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
            <Form.Group controlId="xtra_camera_pos_1_email" className={`${styles.Width} `}  >
                <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="email"
                name="xtra_camera_pos_1_email"
                value={xtra_camera_pos_1_email}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.xtra_camera_pos_1_email?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
            <Form.Group controlId="xtra_camera_pos_1_phone" className={`${styles.Width} `}  >
                <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="xtra_camera_pos_1_phone"
                value={xtra_camera_pos_1_phone}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.xtra_camera_pos_1_phone?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
        </Row>
        {/* Xtra Camera Position 2 */}
        <h5 className={`mb-3 py-1 ${styles.SubTitle2 }`} >Xtra Camera Position 2</h5> 
        <div>
        <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: xtracam2</span> 
        </div>
        <Row>
            <Col xs={{span: 4, offset: 4 }} className="d-flex justify-content-center p-0 p-md-2">
            <Form.Group controlId="xtra_camera_pos_2_job" className={`${styles.Width} `}  >
                <Form.Label className={`${styles.Bold} `} >Position</Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="xtra_camera_pos_2_job"
                value={xtra_camera_pos_2_job}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.xtra_camera_pos_2_job?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
        </Row>
        <Row>
            <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
            <Form.Group controlId="xtra_camera_pos_2_name" className={`${styles.Width} `}  >
                <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="xtra_camera_pos_2_name"
                value={xtra_camera_pos_2_name}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.xtra_camera_pos_2_name?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
            <Form.Group controlId="xtra_camera_pos_2_email" className={`${styles.Width} `}  >
                <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="email"
                name="xtra_camera_pos_2_email"
                value={xtra_camera_pos_2_email}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.xtra_camera_pos_2_email?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
            <Form.Group controlId="xtra_camera_pos_2_phone" className={`${styles.Width} `}  >
                <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="email"
                name="xtra_camera_pos_2_phone"
                value={xtra_camera_pos_2_phone}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.xtra_camera_pos_2_phone?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
        </Row> 
        {/* Xtra Camera Position 3 */}
        <h5 className={`mb-3 py-1 ${styles.SubTitle2 }`} >Xtra Camera Position 3</h5> 
        <div>
        <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: xtracam3</span> 
        </div>
        <Row>
            <Col xs={{span: 4, offset: 4 }} className="d-flex justify-content-center p-0 p-md-2">
            <Form.Group controlId="xtra_camera_pos_3_job" className={`${styles.Width} `}  >
                <Form.Label className={`${styles.Bold} `} >Position</Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="xtra_camera_pos_3_job"
                value={xtra_camera_pos_3_job}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.xtra_camera_pos_3_job?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
        </Row>
        <Row>
            <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
            <Form.Group controlId="xtra_camera_pos_3_name" className={`${styles.Width} `}  >
                <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="xtra_camera_pos_3_name"
                value={xtra_camera_pos_3_name}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.xtra_camera_pos_3_name?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
            <Form.Group controlId="xtra_camera_pos_3_email" className={`${styles.Width} `}  >
                <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="email"
                name="xtra_camera_pos_3_email"
                value={xtra_camera_pos_3_email}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.xtra_camera_pos_3_email?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
            <Form.Group controlId="xtra_camera_pos_3_phone" className={`${styles.Width} `}  >
                <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="xtra_camera_pos_3_phone"
                value={xtra_camera_pos_3_phone}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.xtra_camera_pos_3_phone?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
        </Row> 
        {/* Xtra Camera Position 4 */}
        <h5 className={`mb-3 py-1 ${styles.SubTitle2 }`} >Xtra Camera Position 4</h5> 
        <div>
        <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: xtracam4</span> 
        </div>
        <Row>
            <Col xs={{span: 4, offset: 4 }} className="d-flex justify-content-center p-0 p-md-2">
            <Form.Group controlId="xtra_camera_pos_4_job" className={`${styles.Width} `}  >
                <Form.Label className={`${styles.Bold} `} >Position</Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="xtra_camera_pos_4_job"
                value={xtra_camera_pos_4_job}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.xtra_camera_pos_4_job?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
        </Row>
        <Row>
            <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
            <Form.Group controlId="xtra_camera_pos_4_name" className={`${styles.Width} `}  >
                <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="xtra_camera_pos_4_name"
                value={xtra_camera_pos_4_name}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.xtra_camera_pos_4_name?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
            <Form.Group controlId="xtra_camera_pos_4_email" className={`${styles.Width} `}  >
                <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="email"
                name="xtra_camera_pos_4_email"
                value={xtra_camera_pos_4_email}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.xtra_camera_pos_4_email?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
            <Form.Group controlId="xtra_camera_pos_4_phone" className={`${styles.Width} `}  >
                <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="xtra_camera_pos_4_phone"
                value={xtra_camera_pos_4_phone}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.xtra_camera_pos_4_phone?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
        </Row> 
        {/* Xtra Camera Position 5 */}
        <h5 className={`mb-3 py-1 ${styles.SubTitle2 }`} >Xtra Camera Position 5</h5> 
        <div>
        <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: xtracam5</span> 
        </div>
        <Row>
            <Col xs={{span: 4, offset: 4 }} className="d-flex justify-content-center p-0 p-md-2">
            <Form.Group controlId="xtra_camera_pos_5_job" className={`${styles.Width} `}  >
                <Form.Label className={`${styles.Bold} `} >Position</Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="xtra_camera_pos_5_job"
                value={xtra_camera_pos_5_job}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.xtra_camera_pos_5_job?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
        </Row>
        <Row>
            <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
            <Form.Group controlId="xtra_camera_pos_5_name" className={`${styles.Width} `}  >
                <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="xtra_camera_pos_5_name"
                value={xtra_camera_pos_5_name}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.xtra_camera_pos_5_name?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
            <Form.Group controlId="xtra_camera_pos_5_email" className={`${styles.Width} `}  >
                <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="email"
                name="xtra_camera_pos_5_email"
                value={xtra_camera_pos_5_email}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.xtra_camera_pos_5_email?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
            <Form.Group controlId="xtra_camera_pos_5_phone" className={`${styles.Width} `}  >
                <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="xtra_camera_pos_5_phone"
                value={xtra_camera_pos_5_phone}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.xtra_camera_pos_5_phone?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
        </Row> 
        {/* Xtra Camera Position 6 */}
        <h5 className={`mb-3 py-1 ${styles.SubTitle2 }`} >Xtra Camera Position 6</h5> 
        <div>
        <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: xtracam6</span> 
        </div>
        <Row>
            <Col xs={{span: 4, offset: 4 }} className="d-flex justify-content-center p-0 p-md-2">
            <Form.Group controlId="xtra_camera_pos_6_job" className={`${styles.Width} `}  >
                <Form.Label className={`${styles.Bold} `} >Position</Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="xtra_camera_pos_6_job"
                value={xtra_camera_pos_6_job}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.xtra_camera_pos_6_job?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
        </Row>
        <Row>
            <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
            <Form.Group controlId="xtra_camera_pos_6_name" className={`${styles.Width} `}  >
                <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="xtra_camera_pos_6_name"
                value={xtra_camera_pos_6_name}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.xtra_camera_pos_6_name?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
            <Form.Group controlId="xtra_camera_pos_6_email" className={`${styles.Width} `}  >
                <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="email"
                name="xtra_camera_pos_6_email"
                value={xtra_camera_pos_6_email}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.xtra_camera_pos_6_email?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
            <Form.Group controlId="xtra_camera_pos_6_phone" className={`${styles.Width} `}  >
                <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="xtra_camera_pos_6_phone"
                value={xtra_camera_pos_6_phone}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.xtra_camera_pos_6_phone?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
        </Row> 
        {/* Xtra Camera Position 7 */}
        <h5 className={`mb-3 py-1 ${styles.SubTitle2 }`} >Xtra Camera Position 7</h5> 
        <div>
        <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: xtracam7</span> 
        </div>
        <Row>
            <Col xs={{span: 4, offset: 4 }} className="d-flex justify-content-center p-0 p-md-2">
            <Form.Group controlId="xtra_camera_pos_7_job" className={`${styles.Width} `}  >
                <Form.Label className={`${styles.Bold} `} >Position</Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="xtra_camera_pos_7_job"
                value={xtra_camera_pos_7_job}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.xtra_camera_pos_7_job?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
        </Row>
        <Row>
            <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
            <Form.Group controlId="xtra_camera_pos_7_name" className={`${styles.Width} `}  >
                <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="xtra_camera_pos_7_name"
                value={xtra_camera_pos_7_name}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.xtra_camera_pos_7_name?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
            <Form.Group controlId="xtra_camera_pos_7_email" className={`${styles.Width} `}  >
                <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="email"
                name="xtra_camera_pos_7_email"
                value={xtra_camera_pos_7_email}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.xtra_camera_pos_7_email?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
            <Form.Group controlId="xtra_camera_pos_7_phone" className={`${styles.Width} `}  >
                <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="xtra_camera_pos_7_phone"
                value={xtra_camera_pos_7_phone}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.xtra_camera_pos_7_phone?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
        </Row>
        {/* Xtra Camera Position 8 */}
        <h5 className={`mb-3 py-1 ${styles.SubTitle2 }`} >Xtra Camera Position 8</h5> 
        <div>
        <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: xtracam8</span> 
        </div>
        <Row>
            <Col xs={{span: 4, offset: 4 }} className="d-flex justify-content-center p-0 p-md-2">
            <Form.Group controlId="xtra_camera_pos_8_job" className={`${styles.Width} `}  >
                <Form.Label className={`${styles.Bold} `} >Position</Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="xtra_camera_pos_8_job"
                value={xtra_camera_pos_8_job}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.xtra_camera_pos_8_job?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
        </Row>
        <Row>
            <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
            <Form.Group controlId="xtra_camera_pos_8_name" className={`${styles.Width} `}  >
                <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="xtra_camera_pos_8_name"
                value={xtra_camera_pos_8_name}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.xtra_camera_pos_8_name?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
            <Form.Group controlId="xtra_camera_pos_8_email" className={`${styles.Width} `}  >
                <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="email"
                name="xtra_camera_pos_8_email"
                value={xtra_camera_pos_8_email}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.xtra_camera_pos_8_email?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
            <Form.Group controlId="xtra_camera_pos_8_phone" className={`${styles.Width} `}  >
                <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="xtra_camera_pos_8_phone"
                value={xtra_camera_pos_8_phone}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.xtra_camera_pos_8_phone?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
        </Row>
        {/* Xtra Camera Position 9 */}
        <h5 className={`mb-3 py-1 ${styles.SubTitle2 }`} >Xtra Camera Position 9</h5> 
        <div>
        <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: xtracam9</span> 
        </div>
        <Row>
            <Col xs={{span: 4, offset: 4 }} className="d-flex justify-content-center p-0 p-md-2">
            <Form.Group controlId="xtra_camera_pos_9_job" className={`${styles.Width} `}  >
                <Form.Label className={`${styles.Bold} `} >Position</Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="xtra_camera_pos_9_job"
                value={xtra_camera_pos_9_job}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.xtra_camera_pos_9_job?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
        </Row>
        <Row>
            <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
            <Form.Group controlId="xtra_camera_pos_9_name" className={`${styles.Width} `}  >
                <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="xtra_camera_pos_9_name"
                value={xtra_camera_pos_9_name}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.xtra_camera_pos_9_name?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
            <Form.Group controlId="xtra_camera_pos_9_email" className={`${styles.Width} `}  >
                <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="email"
                name="xtra_camera_pos_9_email"
                value={xtra_camera_pos_9_email}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.xtra_camera_pos_9_email?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
            <Form.Group controlId="xtra_camera_pos_9_phone" className={`${styles.Width} `}  >
                <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="xtra_camera_pos_9_phone"
                value={xtra_camera_pos_9_phone}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.xtra_camera_pos_9_phone?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
        </Row>
        {/* Xtra Camera Position 10 */}
        <h5 className={`mb-3 py-1 ${styles.SubTitle2 }`} >Xtra Camera Position 10</h5> 
        <div>
        <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: xtracam10</span> 
        </div>
        <Row>
            <Col xs={{span: 4, offset: 4 }} className="d-flex justify-content-center p-0 p-md-2">
            <Form.Group controlId="xtra_camera_pos_10_job" className={`${styles.Width} `}  >
                <Form.Label className={`${styles.Bold} `} >Position</Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="xtra_camera_pos_10_job"
                value={xtra_camera_pos_10_job}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.xtra_camera_pos_10_job?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
        </Row>
        <Row>
            <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
            <Form.Group controlId="xtra_camera_pos_10_name" className={`${styles.Width} `}  >
                <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="xtra_camera_pos_10_name"
                value={xtra_camera_pos_10_name}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.xtra_camera_pos_10_name?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
            <Form.Group controlId="xtra_camera_pos_10_email" className={`${styles.Width} `}  >
                <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="email"
                name="xtra_camera_pos_10_email"
                value={xtra_camera_pos_10_email}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.xtra_camera_pos_10_email?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
            <Form.Group controlId="xtra_camera_pos_10_phone" className={`${styles.Width} `}  >
                <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="xtra_camera_pos_10_phone"
                value={xtra_camera_pos_10_phone}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.xtra_camera_pos_10_phone?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
        </Row>
        </div>
    )
  }

export default XtraCrewCamera