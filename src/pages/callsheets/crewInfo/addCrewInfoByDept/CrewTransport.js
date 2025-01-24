/*Form component in the CrewInfoCreate and CrewInfoEdit Form
  components to add/edit the Sound and Transport Departments crew info */
  import React, { useState } from "react";
  import { useRedirect } from '../../../../hooks/Redirect';
  import Form from "react-bootstrap/Form";
  import Col from 'react-bootstrap/Col';
  import Row from 'react-bootstrap/Row';
  import { Alert } from "react-bootstrap";
  import styles from "../../../../styles/Callsheets.module.css";
  
  const CrewTransport = ({handleChange, postData, setShow}) => {
    useRedirect();
    // eslint-disable-next-line
    const [errors, setErrors] = useState({});
  
    const {transport_captain_name, transport_captain_email, transport_captain_phone,
      transport_manager_1_name, transport_manager_1_email, transport_manager_1_phone, 
      transport_manager_2_name, transport_manager_2_email, transport_manager_2_phone, 
      head_driver_name, head_driver_email, head_driver_phone,
      car1_name, car1_email, car1_phone,
      car2_name, car2_email, car2_phone,
      car3_name, car3_email, car3_phone,
      truck1_name, truck1_email, truck1_phone,
      truck2_name, truck2_email, truck2_phone,
      truck3_name, truck3_email, truck3_phone,
      
    } = postData || {};
  
    return (
        <div className="pb-3 text-center">
        <div className={`mt-0 text-center ${styles.SubTitle }`}>
        <span className={`float-right pt-2 ${styles.Bold } ${styles.Close }`} onClick={() => setShow(false) } >Close</span> 
        <h5 className={`pl-5 mb-0 text-center py-1 ${styles.Bold }`} >TRANSPORTATION DEPARTMENT </h5>
        </div>
        <div className={`px-2 px-md-5 mx-md-5 pt-3 ${styles.White }`}>
        {/* Transport Captain */} 
        <div>
        <p className={`m-b3 py-0 mx-md-4 ${styles.SubTitle }` } 
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
        </div>
        {/* break */}
        <Row>
        <Col xs={12}>
        <hr className={`mt-3 mb-3`}/>
        </Col>
        </Row>
        {/* Transport Manager 1 */} 
        <div>
        <p className={`my-3 py-0 mx-md-4 ${styles.SubTitle }` } 
        style={{ textTransform: 'uppercase'}}>Transport Manager 1</p> 
        <div>
        <span className={`py-1 px-3 px-md-5 ${styles.BoldTitleCall }`} >
            CALLNAME: transpo1</span> 
        </div>
        <Row className="mt-2">
            <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
            <Form.Group controlId="transport_manager_1_name" className={`${styles.Width2} `}  >
                <Form.Label className={`${styles.BoldScene} `} >Name</Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="transport_manager_1_name"
                value={transport_manager_1_name}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.transport_manager_1_name?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                {message}
                </Alert>
            ))}
            </Col>
            <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
            <Form.Group controlId="transport_manager_1_phone" className={`${styles.Width2} `}  >
                <Form.Label className={`${styles.BoldScene}`} >Phone</Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="transport_manager_1_phone"
                value={transport_manager_1_phone}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.transport_manager_1_phone?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                {message}
                </Alert>
            ))}
            </Col>
            <Col xs={12} md={4} className="d-flex justify-content-center p-0 p-lg-2">
            <Form.Group controlId="transport_manager_1_email" className={`${styles.Width2} `}  >
                <Form.Label className={`${styles.BoldScene}`} >Email</Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="transport_manager_1_email"
                value={transport_manager_1_email}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.transport_catransport_manager_1_emailptain_email?.map((message, idx) => (
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
  
  export default CrewTransport