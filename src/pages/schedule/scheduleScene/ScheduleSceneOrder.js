/* Re-order component in ScheduleScene */

import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../styles/ScheduleCreate.module.css";
import btnStyles from "../../../styles/Button.module.css";
import { Alert } from "react-bootstrap";
import { axiosReq } from "../../../api/axiosDefaults";

const SchedOrder = (props ) => {
  const [errors, setErrors] = useState({});
  const {setShowOrder, setHasOrder, scene_id1, day_id1, day_order_number1,
    start_time1, end_time1, next1, id } = props;

  const [postData, setPostData] = useState({
    scene_id: scene_id1,
    day_order_number: day_order_number1,
    start_time: start_time1,
    end_time: end_time1,
    next: next1,
    day_id: day_id1,
  })

  const { next, day_order_number, scene_id, 
    start_time, end_time, day_id } = postData;

  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("day_id", day_id);
    formData.append("scene_id", scene_id);
    formData.append("day_order_number", day_order_number);
    formData.append("start_time", start_time);
    formData.append("end_time", end_time);      
    formData.append("next", next);
    try {
      await axiosReq.put(`/schedule/scenes/${id}/`, formData);
      console.log(formData.day_id);
      console.log(id);
      setShowOrder(false);
      setHasOrder(true);
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
      <Row className="text-center pt-2" >
        <Col className={`d-flex justify-content-center`} xs={6} md={3} >
        <Form.Group controlId="day_order_number" className={`${styles.Width2} `} >
              <Form.Label className={`${styles.BoldScene} d-none d-lg-block `} >
                Day Order Number</Form.Label>
                <Form.Label className={`${styles.BoldScene} d-block d-lg-none `} >
                  Order</Form.Label>
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
        <Col className={`d-flex justify-content-center`} md={3} xs={6}>
          <Form.Group controlId="start_time" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene}`} >Start Time</Form.Label>
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
        <Col xs={12} md={6} className={`d-flex justify-content-center px-0`}>
            <Form.Group controlId="next" className={`${styles.Width2} `} >
                <Form.Label className={`${styles.BoldScene}`}>Next</Form.Label>
                <Form.Control 
                    className={styles.InputScene}
                    type="text"
                    name="next"
                    as="textarea"
                    rows={2}
                    value={next}
                    onChange={handleChange}
                    />
            </Form.Group>
            {errors?.next?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
      </Row>
      {/* buttons */}
      <Row className="text-center">
          <Col xs={12}>
          <div className="text-center pb-2 mt-3 mt-md-5">    
            <Button
              className={`${btnStyles.Button} ${btnStyles.Blue} mr-3 px-4`}
              onClick={() => setShowOrder(false)}
            >
              Cancel
            </Button>
            <Button className={`${btnStyles.Button} ${btnStyles.Blue} ml-3 px-4`} type="submit">
              Reorder
            </Button>
          </div>
          </Col>
        </Row>
        <hr/>
    </div>
  )

  return (
    <div className={` ${styles.OrderBox}`}>
      <h5 className={`text-center pb-0 ${styles.SubTitle }`}>
        Reorder Scene </h5>
      <Form onSubmit={handleSubmit} className={`px-3 ${styles.White}`}>
          {textFields}
      </Form>
    </div>
  )
}

export default SchedOrder