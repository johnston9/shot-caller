/*Form component in the CrewInfoCreate and CrewInfoEdit Form
  components to add/edit the Company info */
import React, {useState } from "react";
import { useRedirect } from '../../../../hooks/Redirect';
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import Asset from "../../../../components/Asset";
import Upload from "../../../../assets/upload.png";
import btnStyles from "../../../../styles/Button.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import styles from "../../../../styles/Callsheets.module.css";
import appStyles from "../../../../App.module.css";

const CrewCompany = ({handleChange, handleChangeLogo, postData, 
  setShow, imageInput1}) => {

  useRedirect();
  // eslint-disable-next-line
  const [errors, setErrors] = useState({});

  const { production_name, production_company, company_phone, company_email,
    company_address_line_1, company_address_line_2, company_address_line_3,
    company_address_line_4, total_shoot_days, company_logo,
  } = postData || {};

  return (
    <div className="pb-3 text-center">
    <div className={`mt-0 text-center ${styles.SubTitle }`}>
    <span className={`float-right pt-2 ${styles.Bold } ${styles.Close }`} onClick={() => setShow(false) } >Close</span> 
    <h5 className={`pl-5 mb-0 text-center py-1 ${styles.Bold }`} >PRODUCTION COMPANY INFO</h5>
    </div>
    <div className={`px-2 px-md-5 mx-md-5 pt-3 ${styles.White }`}>
    {/* Company logo */}
    {/* <Row className={`my-4`}>
    <Col className='text-center'>
    <Button
      className={`py-0 mb-0 ${btnStyles.Blue}`}
      onClick={() => handleClick() }>Add / Change Company Logo
    </Button>
    </Col>
    </Row> */}
    {/* logo */}
    <Row>
    <Col md={{span:6, offset:3}}>
    <div className={` ${appStyles.Content} d-flex flex-column justify-content-center`}>
    <p className={`text-center ${styles.BoldScene}`}>Company Logo</p>      
    <Form.Group className="text-center pt-3">
        {company_logo ? (
        <>
            <figure>
            <Image className={styles.Logo} src={company_logo} rounded />
            </figure>
            <div>
            <Form.Label
                className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                htmlFor="image-upload"
            >
                Change the logo
            </Form.Label>
            </div>
        </>
        ) : (
        <Form.Label
            className="d-flex justify-content-center"
            htmlFor="image-upload"
        >
            <Asset
            src={Upload}
            message="Upload Image"
            />
        </Form.Label>
        )}

        <Form.Control
        type="file"
        id="image-upload"
        accept="image/*"
        onChange={handleChangeLogo}
        ref={imageInput1}
        />
    </Form.Group>
    {errors?.company_logo?.map((message, idx) => (
    <Alert variant="warning" key={idx}>
        {message}
    </Alert>
    ))}
    {/* {buttons} */}
    </div>
    </Col>
    </Row>  
    <hr/>
    {/* Production Name - Production Company */}
    <Row>
    <Col xs={12} md={6} className="d-flex justify-content-center p-0 p-lg-2">
    <Form.Group controlId="production_name" className={`${styles.Width2} `}>
        <Form.Label className={`${styles.BoldScene}`} >Production Name</Form.Label>
        <Form.Control 
          className={`${styles.Input}`}
          type="text"
          name="production_name"
          value={production_name}
          onChange={handleChange}
            />
    </Form.Group>
    {errors?.production_name?.map((message, idx) => (
      <Alert variant="warning" key={idx}>
        {message}
      </Alert>
    ))}
    </Col>
    <Col xs={12} md={6} className="d-flex justify-content-center mt-3 mt-md-0 p-0 p-lg-2">
    <Form.Group controlId="production_company" className={`${styles.Width2} `}>
        <Form.Label className={`${styles.BoldScene}`}>Production Company</Form.Label>
        <Form.Control 
          className={`${styles.Input}`}
          type="text"
          name="production_company"
          value={production_company}
          onChange={handleChange}
            />
    </Form.Group>
    {errors?.production_company?.map((message, idx) => (
      <Alert variant="warning" key={idx}>
        {message}
      </Alert>
    ))}
    </Col>
    </Row>
    <hr/>
    {/* phone - email */}
    <Row>
    <Col xs={12} md={6} className="d-flex justify-content-center p-0 p-lg-2">
    <Form.Group controlId="company_phone" className={`${styles.Width2} `}>
        <Form.Label className={`${styles.BoldScene} `} >Company Phone</Form.Label>
        <Form.Control 
        className={`${styles.Input}`}
        type="text"
        name="company_phone"
        value={company_phone}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.company_phone?.map((message, idx) => (
      <Alert variant="warning" key={idx}>
        {message}
      </Alert>
    ))}
    </Col>
    <Col xs={12} md={6} className="d-flex justify-content-center mt-3 mt-md-0 p-0 p-lg-2">
    <Form.Group controlId="company_email" className={`${styles.Width2} `}>
        <Form.Label className={`${styles.BoldScene}`} >Company Email</Form.Label>
        <Form.Control 
        className={`${styles.Input}`}
        type="text"
        name="company_email"
        value={company_email}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.company_email?.map((message, idx) => (
      <Alert variant="warning" key={idx}>
        {message}
      </Alert>
    ))}
    </Col>
    </Row>
    <hr/>
    {/* Address */}
    {/* lines 1/2 */}
    <Row>
    <Col xs={12} md={6} className="d-flex justify-content-center p-0 p-lg-2">
    <Form.Group controlId="company_address_line_1" className={`${styles.Width2} `}>
            <Form.Label className={`${styles.BoldScene}`} >Company Address Line 1</Form.Label>
            <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="company_address_line_1"
                value={company_address_line_1}
                onChange={handleChange}
                />
        </Form.Group>
        {errors?.company_address_line_1?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}
    </Col>
    <Col xs={12} md={6} className="d-flex justify-content-center mt-3 mt-md-0 p-0 p-lg-2">
        <Form.Group controlId="company_address_line_2" className={`${styles.Width2} `}  >
            <Form.Label className={`${styles.BoldScene}`} >Company Address Line 2</Form.Label>
            <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="company_address_line_2"
                value={company_address_line_2}
                onChange={handleChange}
                />
        </Form.Group>
        {errors?.company_address_line_2?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}
    </Col>
    </Row>
    <hr/>
    {/* lines 3/4 */}
    <Row>
    <Col xs={12} md={6} className="d-flex justify-content-center p-0 p-lg-2">
    <Form.Group controlId="company_address_line_3" className={`${styles.Width2} `}  >
        <Form.Label className={`${styles.BoldScene}`} >Company Address Line 3</Form.Label>
        <Form.Control 
            className={`${styles.Input}`}
            type="text"
            name="company_address_line_3"
            value={company_address_line_3}
            onChange={handleChange}
            />
    </Form.Group>
    {errors?.company_address_line_3?.map((message, idx) => (
      <Alert variant="warning" key={idx}>
        {message}
      </Alert>
    ))}
    </Col>
    <Col xs={12} md={6} className="d-flex justify-content-center mt-3 mt-md-0 p-0 p-lg-2">
    <Form.Group controlId="company_address_line_4" className={`${styles.Width2} `}  >
        <Form.Label className={`${styles.BoldScene}`} >Company Address Line 4 </Form.Label>
        <Form.Control 
            className={`${styles.Input}`}
            type="text"
            name="company_address_line_4"
            value={company_address_line_4}
            onChange={handleChange}
            />
    </Form.Group>
    {errors?.company_address_line_4?.map((message, idx) => (
      <Alert variant="warning" key={idx}>
        {message}
      </Alert>
    ))}
    </Col>
    </Row>
    <hr/>
    <Row>
      <Col md={{span: 6, offset: 3 }} >
      <div className="mt-3 d-flex justify-content-center text-center">
          <Form.Group controlId="total_shoot_days" className={`${styles.Width2} `}  >
        <Form.Label className={`${styles.BoldScene}`} >Total Shoot Days</Form.Label>
        <Form.Control 
            className={`${styles.Input}`}
            type="text"
            name="total_shoot_days"
            value={total_shoot_days}
            onChange={handleChange}
            />
          </Form.Group>
          {errors?.total_shoot_days?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </div>
      </Col>
    </Row>    
    </div>
    </div>
  )
}

export default CrewCompany