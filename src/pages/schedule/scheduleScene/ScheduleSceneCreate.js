/* Form Component in the DayPage to create a Schedule Scene 
   both from prefilled data from the Scene and from a number of new inputs 
 * Contains functions to display scenes by Act or Location Order
 * Once a Scene is selected it passes the scene data and the postData state
   to ScheduleSceneItem component
 * The ScheduleSceneItem component prefills the postData state
   with the main Scene data  */
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import styles from "../../../styles/ScheduleCreate.module.css";
import btnStyles from "../../../styles/Button.module.css";
import { Alert } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { axiosReq } from "../../../api/axiosDefaults";
import ScheduleSceneItem from "./ScheduleSceneItem";
import { toast } from 'react-toastify';

const SceneScheduleCreate = ({xday, xdate, setShow, setHasOrder } ) => {
  const [errors, setErrors] = useState({});
  const { id } = useParams();
  const [query, setQuery] = useState("");
  const [scenes, setScenes] = useState({results: [] });
  const [click, setClick] = useState(false);
  
  const [postData, setPostData] = useState({
      scene_id: "",
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

  const { day_order_number, scene_id, number,
          act, title, int_ext, start_time, end_time, 
          day_night, time, action, pages, dramatic_day,
          location, location_detail, filming_location, location_address,
          equip_set_props, department_info, next, new_info,
          } = postData;
    
  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("scene_id", scene_id);
    formData.append("day_id", id);
    formData.append("day", xday);
    formData.append("date", xdate);
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
      await axiosReq.post("/schedule/scenes/", formData);
      toast.success(`Schedule Scene ${day_order_number} Created`);
      setShow(false);
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
      {/* order start est */}
      <Row>
        <Col xs={12} md={4} className="d-flex justify-content-center p-0 p-md-2">
        <Form.Group controlId="day_order_number" className={`${styles.Width2} `}  >
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
              <Form.Label className={`${styles.BoldScene}`} >Start Time</Form.Label>
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
      <Row>
        <Col xs={12}>
        <hr className={` mt-1 mb-1`}/>
        </Col>
      </Row>
      {/* filming location */}
      <Row>
      <Col md={{span: 8, offset: 2 } }className="d-flex justify-content-center p-0 p-md-2">
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
      <Row>
        <Col xs={12}>
        <hr className={` mt-1 mb-1`}/>
        </Col>
      </Row>
      {/* Location Address new info */}
      <Row>
      <Col md={6} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="location_address" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene}`} >Location Address</Form.Label>
              <Form.Control 
              className={`${styles.InputScene}`}
              type="text"
              name="location_address"
              as="textarea"
              rows={1}
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
      <Col md={6} className="d-flex justify-content-center p-0 p-md-2">
      <Form.Group controlId="new_info" className={`${styles.Width2} `}  >
          <Form.Label className={`${styles.BoldScene}`}>New Info</Form.Label>
          <Form.Control 
              className={`${styles.InputScene}`}
              type="text"
              name="new_info"
              as="textarea"
              rows={1}
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
      <Row>
        <Col xs={12}>
        <hr className={` mt-1 mb-1`}/>
        </Col>
      </Row>
      {/* Next  */}
      <Row>
      <Col md={{span: 10, offset: 1 } } className="d-flex justify-content-center p-0 p-md-2">
      <Form.Group controlId="next" className={`${styles.Width2} `}  >
          <Form.Label >
            <p className={`${styles.BoldScene}`}>Next</p>
            <p className={`${styles.Para3}`}>Add breaks, moves and meals here</p>
            </Form.Label>
          <Form.Control 
              className={`${styles.InputSceneNext}`}
              type="text"
              name="next"
              as="textarea"
              rows={1}
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
    </div>
)

const buttons = (  
    <div className="mt-4">
    <Button
      className={`${btnStyles.Button} ${btnStyles.Blue} px-md-5 mr-3`}
      onClick={() => setShow(show => !show)}
    >
      Cancel
    </Button>
    <Button className={`${btnStyles.Button} ${btnStyles.Blue} px-md-5 ml-3`} type="submit">
      Submit
    </Button>
    </div>
);

  /* The following 5 function fetch scenes by Act or Location order */
  const fetchScenesLoc = async () => {
    try {
      const { data } = await axiosReq.get(`/scenes/?ordering=location&search=${query}`);
      setScenes(data);
    } catch(err) {
      console.log(err);
    }
  }

  const fetchScenesOne = async () => {
    try {
      const { data } = await axiosReq.get(`/scenes/?act=one&search=${query}`);
      setScenes(data);
    } catch(err) {
      console.log(err);
    }
  }

  const fetchScenesTwoA = async () => {
    try {
      const { data } = await axiosReq.get(`/scenes/?act=two-a&search=${query}`);
      setScenes(data);
    } catch(err) {
    }
  }

  const fetchScenesTwoB = async () => {
    try {
      const { data } = await axiosReq.get(`/scenes/?act=two-b&search=${query}`);
      setScenes(data);
    } catch(err) {
      console.log(err);
    }
  }

  const fetchScenesThree = async () => {
    try {
      const { data } = await axiosReq.get(`/scenes/?act=three&search=${query}`);
      setScenes(data);
    } catch(err) {
      console.log(err);
    }
  }

  /* The following 5 function handle the click to the
     above functions to fetch scenes by Act or Location order */
  const handleClickLoc = () => {
    fetchScenesLoc();
    setClick(false);
  }

  const handleClick1 = () => {
    fetchScenesOne();
    setClick(false);
  }

  const handleClick2 = () => {
    fetchScenesTwoA();
    setClick(false);
  }

  const handleClick3 = () => {
    fetchScenesTwoB();
    setClick(false);
  }

  const handleClick4 = () => {
    fetchScenesThree();
    setClick(false);
  }
    
    return (
        <div >
        <Row>
        <Col md={{span: 10, offset: 1}} className={` ${styles.White} px-0`}>
            <h5 className={`text-center pb-0 ${styles.SubTitle }`}>ADD SCENE </h5>
            <div>
            <p className={`text-center py-2 ${styles.Para3} `}>
            FIND SCENE BY ACT OR LOCATION
            </p>
            <div>
            <Row>
            <Col md={{span: 10, offset: 1}} >
            <Row className="mt-2">
              <Col xs={6} md={3} className="text-center px-0">
                <Button onClick={handleClick1} 
                className={`px-md-4 ${btnStyles.Button} ${btnStyles.Shed}`}>
                ACT ONE</Button>               
              </Col>
              <Col xs={6} md={3} className="text-center px-0">
                <Button onClick={handleClick2} 
                className={`${btnStyles.Button} ${btnStyles.Shed}`}>
                ACT TWO A</Button>
              </Col>
              <Col xs={6} md={3} className="text-center pt-2 pt-md-0 px-0">
                <Button onClick={handleClick3} 
                className={`${btnStyles.Button} ${btnStyles.Shed}`}>
                ACT TWO B</Button>
              </Col>
              <Col xs={6} md={3} className="text-center pt-2 pt-md-0 mx-0 px-0">
                <Button onClick={handleClick4} 
                className={`${btnStyles.Button} ${btnStyles.Shed} px-md-4`}>
                ACT THREE</Button>
              </Col>
            </Row>
            <Row className="my-2">
            <Col xs={12} className="text-center px-0">
                <Button onClick={handleClickLoc} 
                className={`${btnStyles.Button} ${btnStyles.Wide2} ${btnStyles.Shed}`}>
                LOCATION</Button>
              </Col>
            </Row>
            </Col>
            </Row>
            </div>
          {/* search  */}
          <p className={`text-center pt-2 ${styles.Para2} `} style={{ textTransform: 'uppercase'}}>
            For precise search enter Scene "Number", 
            "Title" or "Location" before clicking a tab above</p>
          <Row>
            <Col className="mt-2" xs={12} sm={{ span: 6, offset: 3 }} >
            <Form
                className={styles.SearchBar}
                onSubmit={(event) => event.preventDefault()}
                >
                <Form.Control
                    value={query}
                    className={`${styles.InputBar}`}
                    onChange={(event) => setQuery(event.target.value)}
                    type="text"
                    placeholder="Search by scene number, title or location"
                />
                </Form>
            </Col>
          </Row>
          </div>
          {/* scenes */}
          {scenes.results.length ? (
          <>
          {click ? (
          <div className= {`mt-3 mb-4 pb-3`}>
            <Row>
            <Col>
            <p className= {`text-center ${styles.BoldScene }`} 
            style={{ textTransform: 'uppercase', fontStyle: 'italic'}}>
              SCENE {number} - {title} - "{int_ext} {location} - {day_night}" SELECTED </p>
            </Col>
            </Row>
          <Row className="mt-3 pt-3" >
            <Col>
            <h5 className={`d-none d-md-block text-center px-5 mb-0 ${styles.SubTitle }`}>
                SCENE {number} SHOOTING INFO </h5>
              <h5 className={`d-block d-md-none text-center px-5 mb-0 ${styles.SubTitle }`}>
                SCENE {number} </h5>
            </Col>
          </Row>
          <Form className={`text-center ${styles.White }`} onSubmit={handleSubmit}>
          <Row>
          <Col xs={12} className="p-0 p-md-2">
              {textFields}
              {buttons}
          </Col>
          </Row>
          </Form>
          </div>
      ) : (
        <>
        <div className= {`mb-4 pb-3 ${styles.ScenesBox} `}>
        <p className={`text-center py-2 ${styles.Para3} `}>
          SELECT SCENE THEN ADD SHOOTING INFO BELOW</p>
        <Row>
        {scenes.results.map((scene) => (
          <Col xs={12} md={6}>
          <ScheduleSceneItem 
                setPostData={setPostData} 
                setScenes={setScenes}
                scene={scene} 
                setClick={setClick}
                {...scene} 
                key={scene.id} />
          </Col>
        ))}
        </Row>
        </div>
        {/* FORM */}
        <div className= {`mt-3 mb-4 pb-3`}>
        <Row className="mt-3 pt-3" >
          <Col>
          <h5 className={`d-none d-md-block text-center px-5 mb-0 ${styles.SubTitle }`}>
             SCENE {number} SHOOTING INFO </h5>
            <h5 className={`d-block d-md-none text-center px-5 mb-0 ${styles.SubTitle }`}>
              SCENE {number} </h5>
          </Col>
        </Row>
        <Form className={`text-center px-3 ${styles.White }`} onSubmit={handleSubmit}>
        <Row>
        <Col xs={12} className="p-0 p-md-2">
            {textFields}
            {buttons}
        {/* hr */}
        </Col>
        </Row>
        </Form>
        </div>
        </>
      )}
          </>) : (
              <>
              <p></p>
              </>
         ) }  
          {/* old */}
          {/* {scenes.results.length ? (
              <>
              <div className= {`px-3 mx-3 mt-3 mb-4 pb-3 ${styles.ScenesBox} `}>
              <p className={`text-center pt-2 px-5 mb-3`}>
                SELECT SCENE AND ADD SHOOTING INFO BELOW</p>
              <Row>
              {scenes.results.map((scene) => (
                <Col xs={12} md={6}>
                <ScheduleSceneItem 
                      setPostData={setPostData} 
                      setScenes={setScenes}
                      scene={scene} 
                      {...scene} 
                      key={scene.id} />
                </Col>
              ))}
              </Row>
              </div>
              <div className= {`px-3 mx-3 mt-3 mb-4 pb-3`}>
              <Row className="mt-3 pt-3" >
                <Col>
                <h5 className={`d-none d-md-block text-center px-5 mb-0 ${styles.SubTitle }`}>
                    SCHEDULE SCENE {number} SHOOTING INFO </h5>
                  <h5 className={`d-block d-md-none text-center px-5 mb-0 ${styles.SubTitle }`}>
                    SCENE {number} </h5>
                </Col>
              </Row>
              <Form className={`text-center px-3 ${styles.White }`} onSubmit={handleSubmit}>
              <Row>
              <Col xs={12} className="p-0 p-md-2">
                  {textFields}
                  {buttons}
              </Col>
              </Row>
              </Form>
              </div>
              </>
                ) : ("")} */}
          </Col>
          </Row>
          <Row>
          <Col className="d-none d-sm-block" md={2}></Col>
          <Col xs={12} md={8} >
          <hr className={`${styles.Break2} mt-3 mb-3`}/>
          </Col>
          </Row>
          </div>
    )
}

export default SceneScheduleCreate
