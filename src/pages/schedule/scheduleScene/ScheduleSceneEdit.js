/* Form page to edit a Schedule Scene */
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../styles/ScheduleCreate.module.css";
import btnStyles from "../../../styles/Button.module.css";
import { Alert } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import { axiosReq } from "../../../api/axiosDefaults";
import TopBox from "../../../components/TopBox";
import { useRedirect } from "../../../hooks/Redirect";
import { toast } from 'react-toastify';

const SceneScheduleEdit = () => {
  useRedirect();
  const [errors, setErrors] = useState({});
  const { id } = useParams();
  const history = useHistory();

  const [postData, setPostData] = useState({
    scene_id: "",
    day_id: "",
    day_order_number: "",
    number: "",
    act: "",
    title: "",
    start_time: "",
    end_time: "",
    int_ext: "",
    day_night: "",
    time: "",
    pages: "",
    action: "",
    dramatic_day: "",
    location: "",
    location_detail: "",
    filming_location: "",
    location_address: "",
    department_info: "",
    equip_set_props: "",
    next: "",
    new_info: "",
})

const { scene_id, day_id, day_order_number, number,
  act, title, int_ext, start_time, end_time, 
  day_night, time, action, pages, dramatic_day,
  location, location_detail, filming_location, location_address,
  equip_set_props, department_info, next, new_info,
   } = postData;

    useEffect(() => {
        const handleMount = async () => {
          try {
            const { data } = await axiosReq.get(`/schedule/scenes/${id}/`);

            const { scene_id, day_id, day_order_number, number,
              act, title, int_ext, start_time, end_time, 
              day_night, time, action, pages, dramatic_day,
              location, location_detail, filming_location, location_address,
              equip_set_props, department_info, next, new_info,
               } = data;
     
            setPostData({ scene_id, day_id, day_order_number, number,
              act, title, int_ext, start_time, end_time, 
              day_night, time, action, pages, dramatic_day,
              location, location_detail, filming_location, location_address,
              equip_set_props, department_info, next, new_info, });
            } catch (err) {
                console.log(err);
            }
            };
        
            handleMount();
        }, [id]);
    
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
  
      formData.append("scene_id", scene_id);
      formData.append("day_id", day_id);
      formData.append("day_order_number", day_order_number);
      formData.append("number", number);
      formData.append("act", act);
      formData.append("title", title);
      formData.append("start_time", start_time);
      formData.append("end_time", end_time);  
      formData.append("int_ext", int_ext);
      formData.append("day_night", day_night);
      formData.append("time", time);
      formData.append("pages", pages);
      formData.append("action", action);
      formData.append("dramatic_day", dramatic_day);
      formData.append("location", location);
      formData.append("location_detail", location_detail);
      formData.append("filming_location", filming_location);
      formData.append("location_address", location_address);
      formData.append("equip_set_props", equip_set_props);
      formData.append("department_info", department_info);
      formData.append("next", next);
      formData.append("new_info", new_info);
      try {
        await axiosReq.put(`/schedule/scenes/${id}/`, formData);
        toast.success(`Schedule Scene ${day_order_number} Updated`);
        history.goBack();
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
      <Row>
        <Col xs={12} md={4} className="d-flex justify-content-center p-0 p-md-2">
        <Form.Group controlId="day_order_number" className={`${styles.Width3} `}  >
              <Form.Label className={`${styles.BoldScene}`} >
                <span className= "d-md-none">Order Number</span>
                <span className="d-none d-md-block">Day Order Number</span>
                </Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
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
          <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="start_time" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene}`}>Start Time</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
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
          <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="end_time" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene}`} >Est. Time</Form.Label>
              <Form.Control
              className={`${styles.Input}`} 
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
      {/* hr */}
      <hr/>
      {/* filming location */}
      <Row>
      <Col md={{span: 6, offset: 3 } } className="d-flex justify-content-center p-0 p-md-2">
        <Form.Group controlId="filming_location" className={`${styles.Width2} `}  >
            <Form.Label className={`${styles.BoldScene}`} >Filming Location</Form.Label>
            <Form.Control 
            className={`${styles.Input}`}
            type="text"
            name="filming_location"
            value={filming_location}
            onChange={handleChange}
                />
        </Form.Group>
        {errors?.filming_location?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}
        </Col>
      </Row>
      {/* hr */}
      <hr/>
      {/* Location Address New info */}
      <Row>
      <Col xs={6} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="location_address" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene}`}>Location Address</Form.Label>
              <Form.Control 
              className={`${styles.InputScene}`}
              type="text"
              name="location_address"
              as="textarea"
              rows={2}
              value={location_address}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.location_address?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
      </Col> 
      <Col xs={6} className="d-flex justify-content-center p-0 p-md-2">
      <Form.Group controlId="new_info" className={`${styles.Width2} `}  >
          <Form.Label className={`${styles.BoldScene}`} >New Info</Form.Label>
          <Form.Control 
              className={`${styles.InputScene}`}
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
      </Row>
      {/* hr */}
      <hr/>
      {/* next */}
      <Row>
      <Col md={{span: 8, offset: 2 } } className="d-flex justify-content-center p-0 p-md-2">
      <Form.Group controlId="next" className={`${styles.Width2} `}  >
          <Form.Label >
            <p className={`${styles.BoldScene}`}>Next</p>
            <p className={`${styles.BoldSceneNext}`}>Add breaks, moves and meals here</p>
            </Form.Label>
          <Form.Control 
              className={`${styles.InputSceneNext}`}
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
      {/* hr */}
      <hr/>
      </div>
  )

  const buttons = (
    <div className="text-center mt-4">    
      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue} mr-3 px-md-5`}
        onClick={() => history.goBack()}
      >
        Cancel
      </Button>
      <Button className={`ml-3 px-md-5 ${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
        Submit
      </Button>
    </div>
  );
    
    return (
        <div>
            <TopBox title={`Edit Schedule Scene`}/>
            <Button
                className={`${btnStyles.Button} ${btnStyles.Blue} mt-1`}
                onClick={() => history.goBack()}
            >
                Back
            </Button>
            <Form className={`pb-3 mt-5 mb-4 text-center `} onSubmit={handleSubmit}>
            <h5 className={`text-center mb-0 pb-0 ${styles.SubTitle }`}>
              EDIT SCHEDULE SCENE {number} </h5>
            <div className={`px-3 ${styles.FormBox} `}>
            <Row>
              <Col xs={12}>
                  {textFields}
                  {buttons}
              </Col>
              </Row>
            </div>
            </Form>
        </div>
    )
}

export default SceneScheduleEdit
