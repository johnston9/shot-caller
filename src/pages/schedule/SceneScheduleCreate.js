import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import styles from "../../styles/ScheduleCreate.module.css";
import btnStyles from "../../styles/Button.module.css";
import { Alert, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import { useRedirect } from "../../hooks/Redirect";
import ScheduleSceneItem from "./ScheduleSceneItem";
import InfiniteScroll from "react-infinite-scroll-component";
import Asset from "../../components/Asset";
import { fetchMoreData } from "../../utils/utils";
import Act1List from "./Act1List";
import ActTwoAList from "./ActTwoAList";
import ActTwoBList from "./ActTwoBList";
import ActThreeList from "./ActThreeList";
import LocationList from "./LocationList";

const SceneScheduleCreate = ({xday, xdate, setShow, setHasOrder } ) => {
  useRedirect("loggedOut");
  const [errors, setErrors] = useState({});
  const { id } = useParams();
  const [query, setQuery] = useState("");
  const [scenes, setScenes] = useState({results: [] });
  
  const [postData, setPostData] = useState({
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
      character1: "",
      character1_costume: "",
      character2: "",
      character2_costume: "",
      character3: "",
      character3_costume: "",
      character4: "",
      character4_costume: "",
      character5_: "",
      character5_costume: "",
      character6: "",
      character6_costume: "",
      character7: "",
      character7_costume: "",
      character8: "",
      character8_costume: "",
      character9: "",
      character9_costume: "",
      character10: "",
      character10_costume: "",
      character11: "",
      character11_costume: "",
      character12: "",
      character12_costume: "",
      character1_number: "",
      character2_number: "",
      character3_number: "",
      character4_number: "",
      character5_number: "",
      character6_number: "",
      character7_number: "",
      character8_number: "",
      character9_number: "",
      character10_number: "",
      character11_number: "",
      character12_number: "",
      other_characters: "",
      other_characters_costumes: "",
      other_characters_numbers: "",
      background_artists: "",
      background_artists_costumes: "",
  })

  const { day_order_number, number,
          act, title, int_ext, start_time, end_time, 
          day_night, time, action, pages, dramatic_day,
          location, location_detail, filming_location, location_address,
          equip_set_props, department_info, next, new_info,
          character1_number, character2_number, character3_number,
          character4_number, character5_number, character6_number, 
          character7_number, character8_number, character9_number,
          character10_number, character11_number, character12_number,
          character1, character1_costume, character2, 
          character2_costume, character3, character3_costume, character4, 
          character4_costume, character5, character5_costume, character6, 
          character6_costume, character7, character7_costume, character8,
          character8_costume, character9, character9_costume, character10,
          character10_costume, character11, character11_costume, character12,
          character12_costume, other_characters, other_characters_costumes,
          other_characters_numbers,
          background_artists, background_artists_costumes,} = postData;
    
  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

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
    formData.append("character1", character1);
    formData.append("character1_costume", character1_costume);
    formData.append("character2", character2);
    formData.append("character2_costume", character2_costume);
    formData.append("character3", character3);
    formData.append("character3_costume", character3_costume);
    formData.append("character4", character4);
    formData.append("character4_costume", character4_costume);
    formData.append("character5", character5);
    formData.append("character5_costume", character5_costume);
    formData.append("character6", character6);
    formData.append("character6_costume", character6_costume);
    formData.append("character7", character7);
    formData.append("character7_costume", character7_costume);
    formData.append("character8", character8);
    formData.append("character8_costume", character8_costume);
    formData.append("character9", character9);
    formData.append("character9_costume", character9_costume);
    formData.append("character10", character10);
    formData.append("character10_costume", character10_costume);
    formData.append("character11", character11);
    formData.append("character11_costume", character11_costume);
    formData.append("character12", character12);
    formData.append("character12_costume", character12_costume);
    formData.append("character1_number", character1_number);
    formData.append("character2_number", character2_number);
    formData.append("character3_number", character3_number);
    formData.append("character4_number", character4_number);
    formData.append("character5_number", character5_number);
    formData.append("character6_number", character6_number);
    formData.append("character7_number", character7_number);
    formData.append("character8_number", character8_number);
    formData.append("character9_number", character9_number);
    formData.append("character10_number", character10_number);
    formData.append("character11_number", character11_number);
    formData.append("character12_number", character12_number);
    formData.append("other_characters", other_characters);
    formData.append("other_characters_costumes", other_characters_costumes);
    formData.append("other_characters_numbers", other_characters_numbers);
    formData.append("background_artists", background_artists);
    formData.append("background_artists_costumes", background_artists_costumes);    
    try {
      await axiosReq.post("/schedule/scenes/", formData);
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
      {/* order start end */}
      <Row>
        <Col xs={12} md={4} className="d-flex justify-content-center p-0 p-md-2">
        <Form.Group controlId="day_order_number" className={`${styles.Width2} `}  >
              <Form.Label className="p-1" >
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
              <Form.Label className="p-1" >Start Time</Form.Label>
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
              <Form.Label className="p-1" >End Time</Form.Label>
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
      {/* Filming Location - Location Address */}
      <Row>
        <Col xs={6} className="d-flex justify-content-center p-0 p-md-2">
        <Form.Group controlId="filming_location" className={`${styles.Width2} `}  >
            <Form.Label className="p-1" >Filming Location</Form.Label>
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
      <Col xs={6} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="location_address" className={`${styles.Width2} `}  >
              <Form.Label className="p-1" >Location Address</Form.Label>
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
      </Row>
      {/* Next new info */}
      <Row>
      <Col xs={6} className="d-flex justify-content-center p-0 p-md-2">
      <Form.Group controlId="next" className={`${styles.Width2} `}  >
          <Form.Label className="p-1" >Next</Form.Label>
          <Form.Control 
              className={`${styles.InputScene}`}
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
      <Col xs={6} className="d-flex justify-content-center p-0 p-md-2">
      <Form.Group controlId="new_info" className={`${styles.Width2} `}  >
          <Form.Label className="p-1" >New Info</Form.Label>
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
    </div>
)

const buttons = (  
    <div className="mt-3">
    <Button
      className={`${btnStyles.Button} ${btnStyles.Blue} px-4 px-md-5 mr-2`}
      onClick={() => setShow(show => !show)}
    >
      Cancel
    </Button>
    <Button className={`${btnStyles.Button} ${btnStyles.Blue} px-md-5 ml-2`} type="submit">
      Add Scene
    </Button>
    </div>
);

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

  const handleClickLoc = () => {
    fetchScenesLoc();
  }

  const handleClick1 = () => {
    fetchScenesOne();
  }

  const handleClick2 = () => {
    fetchScenesTwoA();
  }

  const handleClick3 = () => {
    fetchScenesTwoB();
  }

  const handleClick4 = () => {
    fetchScenesThree();
  }
    
    return (
        <div >
            <h4 className={`text-center mx-3 pb-0 mb-3 ${styles.SubTitle }`}>ADD SCENE </h4>
            <div className= {`px-3 mx-3 pb-3 ${styles.ScenesBox} `}>
            <p className="text-center pt-2">
            FIND SCENE BY ACT LOCATION AND OR SEARCH
            </p>
            <Row className="mt-3">
              <Col xs={6} md={3} className="text-center">
                <Button onClick={handleClick1} 
                className={`${btnStyles.Button} ${btnStyles.Wide3} ${btnStyles.Bright}`}>
                Act One</Button>               
              </Col>
              <Col xs={6} md={3} className="text-center">
                <Button onClick={handleClick2} 
                className={`${btnStyles.Button} ${btnStyles.Wide3} ${btnStyles.Bright}`}>
                Act Two A</Button>
              </Col>
              <Col xs={6} md={3} className="text-center pt-2 pt-md-0">
                <Button onClick={handleClick3} 
                className={`${btnStyles.Button} ${btnStyles.Wide3} ${btnStyles.Bright}`}>
                Act Two B</Button>
              </Col>
              <Col xs={6} md={3} className="text-center pt-2 pt-md-0">
                <Button onClick={handleClick4} 
                className={`${btnStyles.Button} ${btnStyles.Wide3} ${btnStyles.Bright}`}>
                Act Three</Button>
              </Col>
            </Row>
            <Row className="my-2">
            <Col xs={12} className="text-center">
                <Button onClick={handleClickLoc} 
                className={`${btnStyles.Button} ${btnStyles.Wide2} ${btnStyles.Bright}`}>
                Location</Button>
              </Col>
            </Row>
          {/* search  */}
          <Row>
            <Col className="mt-2" xs={12} sm={{ span: 6, offset: 3 }} >
            <Form
                className={styles.SearchBar}
                onSubmit={(event) => event.preventDefault()}
                >
                <Form.Control
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    type="text"
                    className="mr-sm-2"
                    placeholder="Search by scene number, title or location"
                />
                </Form>
            </Col>
          </Row>
          </div>
          {/* infinite */}
            {/* {scenes.results.length ? (
              <>
              <div className= {`px-3 mx-3 text-center mt-3 mb-4 pb-3 ${styles.ScenesBox} `}>
              <p className={`text-center pt-2 px-5 mb-3`}>
                SELECT SCENE AND ADD SHOOTING INFO BELOW</p>
              <InfiniteScroll 
               children={scenes.results.map((scene) => {
                return (
                  <div 
                    className='d-inline-flex justify-content-space-between'>
                    <ScheduleSceneItem 
                      setPostData={setPostData} 
                      scene={scene} 
                      {...scene} 
                      key={scene.id} />
                  </div>
              )})}
              dataLength={scenes.results.length}
              loader={<Asset spinner />}
              hasMore={!!scenes.next}
              next={() => fetchMoreData(scenes, setScenes )}
              />
              </div>
              <div className= {`px-3 mx-3 mt-3 mb-4 pb-3 ${styles.ScenesBox} `}>
              <Row className="mt-3 pt-3" >
                <Col>
                  <h4 className={`text-center px-5 mb-0 ${styles.SubTitle }`}>
                    SCENE <span className={`${styles.BlueNumber} `} >{number} </span>SHOOTING INFO </h4>
                </Col>
              </Row>
              <Form className={`text-center px-3 ${styles.FormBox} `} onSubmit={handleSubmit}>
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
          {/* old */}
          {scenes.results.length ? (
              <>
              <div className= {`px-3 mx-3 mt-3 mb-4 pb-3 ${styles.ScenesBox} `}>
              <p className={`text-center pt-2 px-5 mb-3`}>
                SELECT SCENE AND ADD SHOOTING INFO BELOW</p>
              <Row>
              {scenes.results.map((scene) => (
                <Col xs={12} md={6}>
                <ScheduleSceneItem 
                      setPostData={setPostData} 
                      scene={scene} 
                      {...scene} 
                      key={scene.id} />
                </Col>
              ))}
              </Row>
              </div>
              <div className= {`px-3 mx-3 mt-3 mb-4 pb-3 ${styles.ScenesBox} `}>
              <Row className="mt-3 pt-3" >
                <Col>
                <h4 className={`d-none d-md-block text-center px-5 mb-0 ${styles.SubTitle }`}>
                    SCENE <span className={`${styles.BlueNumber} `} >{number} </span>SHOOTING INFO </h4>
                  <h4 className={`d-block d-md-none text-center px-5 mb-0 ${styles.SubTitle }`}>
                    SCENE <span className={`${styles.BlueNumber} `} >{number} </span></h4>
                </Col>
              </Row>
              <Form className={`text-center px-3 ${styles.FormBox} `} onSubmit={handleSubmit}>
              <Row>
              <Col xs={12} className="p-0 p-md-2">
                  {textFields}
                  {buttons}
              </Col>
              </Row>
              </Form>
              </div>
              </>
                ) : ("")}
          </div>
    )
}

export default SceneScheduleCreate
