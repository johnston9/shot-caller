import React, { useEffect, useRef, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Asset from "../../components/Asset";

import Upload from "../../assets/upload.png";

import styles from "../../styles/ScheduleCreate.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import { Alert, Image } from "react-bootstrap";
import { useHistory, useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import TopBox from "../../components/TopBox";
import { useRedirect } from "../../hooks/Redirect";
import Act1List from "./Act1List";
import ActTwoAList from "./ActTwoAList";
import ActTwoBList from "./ActTwoBList";
import ActThreeList from "./ActThreeList";
import LocationList from "./LocationList";

const SceneScheduleCreate = ({xday, xdate} ) => {
  useRedirect("loggedOut");
  const [scenes, setScenes] = useState({ results: [] });
  // const [scene, setScene] = useState({});
  const [errors, setErrors] = useState({});
  const { id } = useParams();
  const history = useHistory();
//   const [hasLoaded, setHasLoaded] = useState(false);
//   const { pathname } = useLocation();
  const [showOne, setShowOne] = useState(false);
  const [showTwoA, setShowTwoA] = useState(false);
  const [showTwoB, setShowTwoB] = useState(false);
  const [showThree, setShowThree] = useState(false);
  const [showLoc, setShowLoc] = useState(false);
  const [startDate, setStartDate] = useState("");

  const [postData, setPostData] = useState({
      // day_id: id,
      day: xday,
      date: xdate,
      day_order_number: "",
      number: "",
      act: "",
      title: "",
      start_time: "",
      end_time: "",
      content: "",
      location: "",
      filming_location: "",
      int_ext: "",
      day_night: "",
      time: "",
      action: "",
      info: "",
      character1: "",
      character1_costume: "",
      character1_calltime: "",
      character1_pickup: "",
      character2: "",
      character2_costume: "",
      character2_calltime: "",
      character2_pickup: "",
      character3: "",
      character3_costume: "",
      character3_calltime: "",
      character3_pickup: "",
      character4: "",
      character4_costume: "",
      character4_calltime: "",
      character4_pickup: "",
      character5_: "",
      character5_costume: "",
      character5_calltime: "",
      character5_pickup: "",
      character6: "",
      character6_costume: "",
      character6_calltime: "",
      character6_pickup: "",
      character7: "",
      character7_costume: "",
      character7_calltime: "",
      character7_pickup: "",
      character8: "",
      character8_costume: "",
      character8_calltime: "",
      character8_pickup: "",
      character9: "",
      character9_costume: "",
      character9_calltime: "",
      character9_pickup: "",
      character10: "",
      character10_costume: "",
      character10_calltime: "",
      character10_pickup: "",
      character11: "",
      character11_costume: "",
      character11_calltime: "",
      character11_pickup: "",
      character12: "",
      character12_costume: "",
      character12_calltime: "",
      character12_pickup: "",
      other_characters: "",
      other_characters_costumes: "",
      other_characters_calltimes: "",
      other_characters_pickups: "",
      background_artists: "",
      background_artists_costumes: "",
      background_artists_calltimes: "",
      background_artists_pickups: "",
      new_info: "",
      new_content: "",
  })

  const { day_order_number, day, date, number, 
    act, title, int_ext, start_time, end_time, content, location,
    filming_location, day_night, time, action, info,
    character1, character1_costume, character2, 
    character2_costume, character3, character3_costume, character4, 
    character4_costume, character5, character5_costume, character6, 
    character6_costume, character7, character7_costume, character8,
    character8_costume, character9, character9_costume, character10,
    character10_costume, character11, character11_costume, character12,
    character12_costume, character1_calltime, character1_pickup,
    character2_calltime, character2_pickup, character3_calltime,
    character3_pickup, character4_calltime, character4_pickup,
    character5_calltime, character5_pickup, character6_calltime, 
    character6_pickup, character7_calltime, character7_pickup,
    character8_calltime, character8_pickup, character9_calltime, 
    character9_pickup, character10_calltime, character10_pickup,
    character11_calltime, character11_pickup, character12_calltime, 
    character12_pickup, other_characters, other_characters_costumes,
    background_artists, background_artists_costumes,
    other_characters_calltimes, other_characters_pickups,
    background_artists_calltimes, background_artists_pickups,
    new_info, new_content} = postData;

    // useEffect(() => {
    //     const fetchScenes = async () => {
    //       try {
    //         const { data } = await axiosReq.get(`/scenes/?act=one`);
    //         setScenes({ results: [data] });
    //         console.log(scenes.results )
    //       } catch(err) {
    //         console.log(err);
    //       }
    //     }
    //     fetchScenes();    
    //   }, [])
    
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
      formData.append("day", day);
      formData.append("date", date);
      formData.append("day_order_number", day_order_number);
      formData.append("number", number);
      formData.append("act", act);
      formData.append("title", title);
      formData.append("start_time", start_time);
      formData.append("end_time", end_time);  
      formData.append("content", content);
      formData.append("location", location);
      formData.append("filming_location", filming_location);
      formData.append("int_ext", int_ext);
      formData.append("day_night", day_night);
      formData.append("time", time);
      formData.append("action", action);
      formData.append("info", info);
      formData.append("character1", character1);
      formData.append("character1_costume", character1_costume);
      formData.append("character1_calltime", character1_calltime);
      formData.append("character1_pickup", character1_pickup);
      formData.append("character2", character2);
      formData.append("character2_costume", character2_costume);
      formData.append("character2_calltime", character2_calltime);
      formData.append("character2_pickup", character2_pickup);
      formData.append("character3", character3);
      formData.append("character3_costume", character3_costume);
      formData.append("character3_calltime", character3_calltime);
      formData.append("character3_pickup", character3_pickup);
      formData.append("character4", character4);
      formData.append("character4_costume", character4_costume);
      formData.append("character4_calltime", character4_calltime);
      formData.append("character4_pickup", character4_pickup);
      formData.append("character5", character5);
      formData.append("character5_costume", character5_costume);
      formData.append("character5_calltime", character5_calltime);
      formData.append("character5_pickup", character5_pickup);
      formData.append("character6", character6);
      formData.append("character6_costume", character6_costume);
      formData.append("character6_calltime", character6_calltime);
      formData.append("character6_pickup", character6_pickup);
      formData.append("character7", character7);
      formData.append("character7_costume", character7_costume);
      formData.append("character7_calltime", character7_calltime);
      formData.append("character7_pickup", character7_pickup);
      formData.append("character8", character8);
      formData.append("character8_costume", character8_costume);
      formData.append("character8_calltime", character8_calltime);
      formData.append("character8_pickup", character8_pickup);
      formData.append("character9", character9);
      formData.append("character9_costume", character9_costume);
      formData.append("character9_calltime", character9_calltime);
      formData.append("character9_pickup", character9_pickup);
      formData.append("character10", character10);
      formData.append("character10_costume", character10_costume);
      formData.append("character10_calltime", character10_calltime);
      formData.append("character10_pickup", character10_pickup);
      formData.append("character11", character11);
      formData.append("character11_costume", character11_costume);
      formData.append("character11_calltime", character11_calltime);
      formData.append("character11_pickup", character11_pickup);
      formData.append("character12", character12);
      formData.append("character12_costume", character12_costume);
      formData.append("character12_calltime", character12_calltime);
      formData.append("character12_pickup", character12_pickup);
      formData.append("other_characters", other_characters);
      formData.append("other_characters_costumes", other_characters_costumes);
      formData.append("other_characters_calltimes", other_characters_calltimes);
      formData.append("other_characters_pickups", other_characters_pickups);
      formData.append("background_artists", background_artists);
      formData.append("background_artists_costumes", background_artists_costumes);
      formData.append("background_artists_calltimes", background_artists_calltimes);
      formData.append("background_artists_pickups", background_artists_pickups);    
      formData.append("new_info", new_info);
      formData.append("new_content", new_content);
      try {
        const { data } = await axiosReq.post("/schedule/scenes/", formData);
        history.push(`/days/`);
      } catch (err) {
        console.log(err);
        if (err.response?.status !== 401) {
          setErrors(err.response?.data);
        }
      }
    }

    const textFields = (
      <div>
        {/* day date */}
        <h5>Day and Date: Change if you have changed the Day or Date on the Day page</h5>
        <Row>
          <Col xs={6}>
          <Form.Group controlId="day" className="mb-2" >
                <Form.Label className="p-1" >Day</Form.Label>
                <Form.Control 
                type="text"
                name="day"
                value={day}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.day?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={6}>
          <Form.Group controlId="date" className="mb-2" >
                <Form.Label className="p-1" >Date</Form.Label>
                <Form.Control 
                type="text"
                name="date"
                value={date}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.date?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
        </Row>
        <Row>
          <Col xs={4} >
          <Form.Group controlId="day_order_number" className="mb-2" >
                <Form.Label className="p-1" >Day Order Number</Form.Label>
                <Form.Control 
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
            <Col xs={4}>
            <Form.Group controlId="start_time" className="mb-2" >
                <Form.Label className="p-1" >Start Time</Form.Label>
                <Form.Control 
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
            <Col xs={4}>
            <Form.Group controlId="end_time" className="mb-2" >
                <Form.Label className="p-1" >End Time</Form.Label>
                <Form.Control 
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
            {/* Filming Location */}
            <Row>
              <Col xs={12}>
            <Form.Group controlId="filming_location" className="mb-2" >
                <Form.Label className="p-1" >Filming Location</Form.Label>
                <Form.Control 
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
            {/* characters */}
            <h3>Characters</h3>            
            <Row>
              <Col xs={6}>
              <h5>Character 1</h5>
                <p>{character1}</p> 
                <p>Costume - {character1_costume}</p> 
              </Col>
            <Col xs={3} >
            <Form.Group controlId="character1_calltime" className="mb-2" >
                <Form.Label className="p-1" >Call Time</Form.Label>
                <Form.Control 
                type="text"
                name="character1_calltime"
                value={character1_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.character1_calltime?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={3} >
            <Form.Group controlId="character1_pickup" className="mb-2" >
                <Form.Label className="p-1" >Pickup </Form.Label>
                <Form.Control 
                type="text"
                name="character1_pickup"
                value={character1_pickup}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.character1_pickup?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            </Row>
            <Row>
              <Col xs={6}>
              <h5>Character 2</h5>
                <p>{character2}</p> 
                <p>Costume - {character2_costume}</p> 
              </Col>
            <Col xs={3} >
            <Form.Group controlId="character2_calltime" className="mb-2" >
                <Form.Label className="p-1" >Call Time</Form.Label>
                <Form.Control 
                type="text"
                name="character2_calltime"
                value={character2_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.character2_calltime?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={3} >
            <Form.Group controlId="character2_pickup" className="mb-2" >
                <Form.Label className="p-1" >Pickup </Form.Label>
                <Form.Control 
                type="text"
                name="character2_pickup"
                value={character2_pickup}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.character2_pickup?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            </Row>
            <Row>
              <Col xs={6}>
              <h5>Character 3</h5>
                <p>{character3}</p> 
                <p>Costume - {character3_costume}</p> 
              </Col>
            <Col xs={3} >
            <Form.Group controlId="character3_calltime" className="mb-2" >
                <Form.Label className="p-1" >Call Time</Form.Label>
                <Form.Control 
                type="text"
                name="character3_calltime"
                value={character3_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.character3_calltime?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={3} >
            <Form.Group controlId="character3_pickup" className="mb-2" >
                <Form.Label className="p-1" >Pickup </Form.Label>
                <Form.Control 
                type="text"
                name="character3_pickup"
                value={character3_pickup}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.character3_pickup?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            </Row>
            <Row>              
              <Col xs={6}>
              <h5>Character 4</h5>
                <p>{character4}</p> 
                <p>Costume - {character4_costume}</p> 
              </Col>
            <Col xs={3} >
            <Form.Group controlId="character4_calltime" className="mb-2" >
                <Form.Label className="p-1" >Call Time</Form.Label>
                <Form.Control 
                type="text"
                name="character4_calltime"
                value={character4_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.character4_calltime?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={3} >
            <Form.Group controlId="character4_pickup" className="mb-2" >
                <Form.Label className="p-1" >Pickup </Form.Label>
                <Form.Control 
                type="text"
                name="character4_pickup"
                value={character4_pickup}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.character4_pickup?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            </Row>
            <Row>
              <Col xs={6}>
                <p>{character5}</p> 
                <p>Costume - {character5_costume}</p> 
              </Col>
            <Col xs={3} >
            <Form.Group controlId="character5_calltime" className="mb-2" >
                <Form.Label className="p-1" >Call Time</Form.Label>
                <Form.Control 
                type="text"
                name="character5_calltime"
                value={character5_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.character5_calltime?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={3} >
            <Form.Group controlId="character5_pickup" className="mb-2" >
                <Form.Label className="p-1" >Pickup </Form.Label>
                <Form.Control 
                type="text"
                name="character5_pickup"
                value={character5_pickup}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.character5_pickup?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            </Row>
            <Row>
              <Col xs={6}>
              <h5>Character 6</h5>
                <p>{character6}</p> 
                <p>Costume - {character6_costume}</p> 
              </Col>
            <Col xs={3} >
            <Form.Group controlId="character6_calltime" className="mb-2" >
                <Form.Label className="p-1" >Call Time</Form.Label>
                <Form.Control 
                type="text"
                name="character6_calltime"
                value={character6_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.character6_calltime?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={3} >
            <Form.Group controlId="character6_pickup" className="mb-2" >
                <Form.Label className="p-1" >Pickup </Form.Label>
                <Form.Control 
                type="text"
                name="character6_pickup"
                value={character6_pickup}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.character6_pickup?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            </Row>
            <Row>
              <Col xs={6}>
              <h5>Character 7</h5>
                <p>{character7}</p> 
                <p>Costume - {character7_costume}</p> 
              </Col>
            <Col xs={3} >
            <Form.Group controlId="character7_calltime" className="mb-2" >
                <Form.Label className="p-1" >Call Time</Form.Label>
                <Form.Control 
                type="text"
                name="character7_calltime"
                value={character7_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.character7_calltime?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={3} >
            <Form.Group controlId="character7_pickup" className="mb-2" >
                <Form.Label className="p-1" >Pickup </Form.Label>
                <Form.Control 
                type="text"
                name="character7_pickup"
                value={character7_pickup}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.character7_pickup?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            </Row>
            <Row>
              <Col xs={6}>
              <h5>Character 8</h5>
                <p>{character8}</p> 
                <p>Costume - {character8_costume}</p> 
              </Col>
            <Col xs={3} >
            <Form.Group controlId="character8_calltime" className="mb-2" >
                <Form.Label className="p-1" >Call Time</Form.Label>
                <Form.Control 
                type="text"
                name="character8_calltime"
                value={character8_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.character8_calltime?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={3} >
            <Form.Group controlId="character8_pickup" className="mb-2" >
                <Form.Label className="p-1" >Pickup </Form.Label>
                <Form.Control 
                type="text"
                name="character8_pickup"
                value={character8_pickup}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.character8_pickup?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            </Row>
            <Row>
              <Col xs={6}>
              <h5>Character 9</h5>
                <p>{character9}</p> 
                <p>Costume - {character9_costume}</p> 
              </Col>
            <Col xs={3} >
            <Form.Group controlId="character9_calltime" className="mb-2" >
                <Form.Label className="p-1" >Call Time</Form.Label>
                <Form.Control 
                type="text"
                name="character9_calltime"
                value={character9_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.character9_calltime?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={3} >
            <Form.Group controlId="character9_pickup" className="mb-2" >
                <Form.Label className="p-1" >Pickup </Form.Label>
                <Form.Control 
                type="text"
                name="character9_pickup"
                value={character9_pickup}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.character9_pickup?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            </Row>
            <Row>
              <Col xs={6}>
              <h5>Character 10</h5>
                <p>{character10}</p> 
                <p>Costume - {character10_costume}</p> 
              </Col>
            <Col xs={3} >
            <Form.Group controlId="character10_calltime" className="mb-2" >
                <Form.Label className="p-1" >Call Time</Form.Label>
                <Form.Control 
                type="text"
                name="character10_calltime"
                value={character10_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.character10_calltime?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={3} >
            <Form.Group controlId="character10_pickup" className="mb-2" >
                <Form.Label className="p-1" >Pickup </Form.Label>
                <Form.Control 
                type="text"
                name="character10_pickup"
                value={character10_pickup}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.character10_pickup?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            </Row>
            <Row>
              <Col xs={6}>
              <h5>Character 11</h5>
                <p>{character11}</p> 
                <p>Costume - {character11_costume}</p> 
              </Col>
            <Col xs={3} >
            <Form.Group controlId="character11_calltime" className="mb-2" >
                <Form.Label className="p-1" >Call Time</Form.Label>
                <Form.Control 
                type="text"
                name="character11_calltime"
                value={character11_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.character11_calltime?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={3} >
            <Form.Group controlId="character11_pickup" className="mb-2" >
                <Form.Label className="p-1" >Pickup </Form.Label>
                <Form.Control 
                type="text"
                name="character11_pickup"
                value={character11_pickup}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.character11_pickup?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            </Row>
            <Row>
              <Col xs={6}>
              <h5>Character 12</h5>
                <p>{character12}</p> 
                <p>Costume - {character12_costume}</p> 
              </Col>
            <Col xs={3} >
            <Form.Group controlId="character12_calltime" className="mb-2" >
                <Form.Label className="p-1" >Call Time</Form.Label>
                <Form.Control 
                type="text"
                name="character12_calltime"
                value={character12_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.character12_calltime?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={3} >
            <Form.Group controlId="character12_pickup" className="mb-2" >
                <Form.Label className="p-1" >Pickup </Form.Label>
                <Form.Control 
                type="text"
                name="character12_pickup"
                value={character12_pickup}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.character12_pickup?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            </Row>
            {/* Other Characters */}
            <Row>
              <Col xs={6}>
              <h5>Other Characters</h5>
                <p>{other_characters}</p> 
                <p>Costumes - {other_characters_costumes}</p> 
              </Col>
            <Col xs={3} >
            <Form.Group controlId="other_characters_calltimes" className="mb-2" >
                <Form.Label className="p-1" >Call Time</Form.Label>
                <Form.Control 
                type="text"
                name="other_characters_calltimes"
                as="textarea"
                rows={2}
                value={other_characters_calltimes}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.other_characters_calltimes?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={3} >
            <Form.Group controlId="other_characters_pickups" className="mb-2" >
                <Form.Label className="p-1" >Pickups </Form.Label>
                <Form.Control 
                type="text"
                name="other_characters_pickups"
                as="textarea"
                rows={2}
                value={other_characters_pickups}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.other_characters_pickups?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            </Row>
            <Row>
              <Col xs={6}>
              <h5>Background Artists</h5>
                <p>{background_artists}</p> 
                <p>Costumes - {background_artists_costumes}</p> 
              </Col>
            <Col xs={3} >
            <Form.Group controlId="background_artists_calltimes" className="mb-2" >
                <Form.Label className="p-1" >Call Times</Form.Label>
                <Form.Control 
                type="text"
                name="background_artists_calltimes"
                as="textarea"
                rows={2}
                value={background_artists_calltimes}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.background_artists_calltimes?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={3} >
            <Form.Group controlId="background_artists_pickups" className="mb-2" >
                <Form.Label className="p-1" >Pickups </Form.Label>
                <Form.Control 
                type="text"
                name="background_artists_pickups"
                as="textarea"
                rows={2}
                value={background_artists_pickups}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.background_artists_pickups?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            </Row>
            {/* end other */}
            {/* end characters */}
            {/* new content info */}
            <Row>
              <Col xs={6}>
            <Form.Group controlId="new_content" className="mb-2" >
                <Form.Label className="p-1" >New Content</Form.Label>
                <Form.Control 
                    className={styles.Input}
                    type="text"
                    name="new_content"
                    as="textarea"
                    rows={2}
                    value={new_content}
                    onChange={handleChange}
                    />
            </Form.Group>
            {errors?.new_content?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={6}>
            <Form.Group controlId="new_info" className="mb-2" >
                <Form.Label className="p-1" >New Info</Form.Label>
                <Form.Control 
                    className={styles.Input}
                    type="text"
                    name="new_info"
                    as="textarea"
                    rows={3}
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
            {/* end info */}
      </div>
  )
  const buttons = (
    <div className="text-center">    
      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue}`}
        onClick={() => history.goBack()}
      >
        cancel
      </Button>
      <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
        create
      </Button>
    </div>
  );
    
    return (
        <div>
          <Container className= {`mt-4 ${styles.FormBox} ${appStyles.Content} ${styles.Container}`} >
          <h5>Day: {xday}  Date: {xdate} {id} </h5>
          <p>SELECT SCENE</p>
          <Row>
              <Col xs={6} md={3} className="text-center">
                <Button onClick={() => setShowOne(showOne => !showOne)} 
                className={`${btnStyles.Button} ${btnStyles.Wide3} ${btnStyles.Bright}`}>
                Act One</Button>               
              </Col>
              <Col xs={6} md={3} className="text-center">
                <Button onClick={() => setShowTwoA(showTwoA => !showTwoA)} 
                className={`${btnStyles.Button} ${btnStyles.Wide3} ${btnStyles.Bright}`}>
                Act Two A</Button>
              </Col>
              <Col xs={6} md={3} className="text-center">
                <Button onClick={() => setShowTwoB(showTwoB => !showTwoB)} 
                className={`${btnStyles.Button} ${btnStyles.Wide3} ${btnStyles.Bright}`}>
                Act Two B</Button>
              </Col>
              <Col xs={6} md={3} className="text-center">
                <Button onClick={() => setShowThree(showThree => !showThree)} 
                className={`${btnStyles.Button} ${btnStyles.Wide3} ${btnStyles.Bright}`}>
                Act Three</Button>
              </Col>
            </Row>
            <Row className="my-3">
            <Col xs={12} className="text-center">
                <Button onClick={() => setShowLoc(showLoc => !showLoc)} 
                className={`${btnStyles.Button} ${btnStyles.Wide2} ${btnStyles.Bright}`}>
                By Location</Button>
              </Col>
            </Row>
            <hr />
          <Row className="my-3">
            <Col>
            {!showOne ?("") : (<Act1List list="one" setShowOne={setShowOne} setPostData={setPostData} /> ) }
            {!showTwoA ?("") : (<ActTwoAList list="two-a" setShowTwoA={setShowTwoA} setPostData={setPostData} /> ) }
            {!showTwoB ?("") : (<ActTwoBList list="two-b" setShowTwoB={setShowTwoB} setPostData={setPostData} /> ) }
            {!showThree ?("") : (<ActThreeList list="three" setShowThree={setShowThree} setPostData={setPostData} /> ) }
            {!showLoc ?("") : (<LocationList list="loc" setShowLoc={setShowLoc} setPostData={setPostData} /> ) }
            </Col>
          </Row>
          
          <p>Scene Number {number} - Act {act} Title {title} </p>
          <p>{location} {int_ext} {day_night} {time} </p>
          <p>Action {action} </p>
          <p>Content {content} </p>
          <p>Info {info} </p>
            <Form onSubmit={handleSubmit}>
              <Row>
              <Col xs={12} className="p-0 p-md-2">
                  <Container className= {`${appStyles.Content} ${styles.Container}`} >{textFields}</Container>
                </Col>
              </Row>
              <Row>
                <Col className="text-center">
                <Container className= {`mt-3 ${styles.Container}`} >{buttons}</Container>
                </Col>
              </Row>
            </Form>
            </Container>
        </div>
    )
}

export default SceneScheduleCreate
