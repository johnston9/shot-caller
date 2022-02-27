import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import styles from "../../styles/ScheduleCreate.module.css";
import btnStyles from "../../styles/Button.module.css";
import { Alert } from "react-bootstrap";
import { axiosReq } from "../../api/axiosDefaults";
import { useRedirect } from "../../hooks/Redirect";

const SchedOrder = (props ) => {
    useRedirect("loggedOut");
  const [errors, setErrors] = useState({});
  const {setShowOrder, sceneAll} = props;
  const { day_order_number, start_time, end_time, new_info, id } = sceneAll;

  const [postData, setPostData] = useState({
    day_order_number2: day_order_number,
    start_time2: start_time,
    end_time2: end_time,
    new_info2: new_info,
  })

  const { day_order_number2, start_time2, end_time2, new_info2 } = postData;

  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
    console.log(event.target.name)
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("day_order_number", day_order_number2);
    formData.append("start_time", start_time2);
    formData.append("end_time", end_time2);      
    formData.append("new_info", new_info2);
    try {
      await axiosReq.put(`/schedule/scenes/${id}/`, formData);
      setShowOrder(false); 
      // console.log(formData.day_id);
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  }

  const textFields = (
    <div>
      {/* order start end */}
      <Row className="text-center" >
        <Col className="d-flex justify-content-center" xs={4} >
        <Form.Group controlId="day_order_number" className="mb-2" >
              <Form.Label className="p-1" >Day Order Number</Form.Label>
              <Form.Control 
              className={styles.Input}
              type="text"
              name="day_order_number"
              value={day_order_number}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.day_order_number?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
        </Col>
          <Col className="d-flex justify-content-center" xs={4}>
          <Form.Group controlId="start_time" className="mb-2" >
              <Form.Label className="p-1" >Start Time</Form.Label>
              <Form.Control 
              className={styles.Input}
              type="text"
              name="start_time"
              value={start_time}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.start_time?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col className="d-flex justify-content-center" xs={4}>
          <Form.Group controlId="end_time" className="mb-2" >
              <Form.Label className="p-1" >End Time</Form.Label>
              <Form.Control 
              className={styles.Input}
              type="text"
              name="end_time"
              value={end_time}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.end_time?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
        </Col>
      </Row>
      {/* Next/New-info */}
      <Row className="text-center">
          <Col md={{ span: 6, offset: 2 }}>
            <Form.Group controlId="new_info" className="mb-2" >
                <Form.Label className="p-1" >Next Info</Form.Label>
                <Form.Control 
                    className={styles.InputScene}
                    type="text"
                    name="new_info"
                    as="textarea"
                    rows={2}
                    value={new_info}
                    onChange={handleChange}
                    />
            </Form.Group>
            {errors?.new_info?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
          <Col md={4}>
          <div className="text-center mt-5">    
            <Button
              className={`${btnStyles.Button} ${btnStyles.Blue}`}
              onClick={() => setShowOrder(false)}
            >
              cancel
            </Button>
            <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
              create
            </Button>
          </div>
          </Col>
        </Row>
    </div>
  )

  return (
    <div className={` ${styles.OrderBox}`}>
      <Form onSubmit={handleSubmit}>
          {textFields}
      </Form>
    </div>
  )
}

export default SchedOrder