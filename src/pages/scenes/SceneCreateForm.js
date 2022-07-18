import React, { useRef, useState} from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Asset from "../../components/Asset";

import Upload from "../../assets/upload.png";

import styles from "../../styles/Scene.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import { Alert, Image } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import TopBox from "../../components/TopBox";
import SceneCreateCostumes from "./SceneCreateCostumes";
import NewCharacter from "./NewCharacter";
import NewLocation from "./NewLocation";
import { useCharactersContext, useLocationsContext, useSetCharactersContext, useSetLocationsContext } from "../../contexts/Scene_chars_locs";
import Important from "./Important";
import Info from "./Info";
import useRedirect from "../../hooks/Redirect";

function SceneCreateForm({topbox}) {
  useRedirect("loggedOut");
  const [errors, setErrors] = useState({});
  const [show, setShow] = useState(false);
  const characters = useCharactersContext();
  const setCharacters = useSetCharactersContext();
  const locations = useLocationsContext();
  const setLocations = useSetLocationsContext();
  const [showImp, setShowImp] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const [postData, setPostData] = useState({
      number: "",
      title: "",
      act: "",
      int_ext: "",
      day_night: "",
      time: "",
      pages: "",
      location: "",
      location_detail: "",
      filming_location: "",
      shooting_date: "",
      action: "",
      department_info: "",
      equip_set_props: "",
      dramatic_day: "",
      character1: "",
      character1_costume: "",
      character2: "",
      character2_costume: "",
      character3: "",
      character3_costume: "",
      character4: "",
      character4_costume: "",
      character5: "",
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
      background_artists: "",
      background_artists_costumes: "",
      storyboard: "",
      image: "",
    });

  const { number, title, act, int_ext, day_night, time, location,
    filming_location, character1, character1_costume, character2, 
    character2_costume, character3, character3_costume, character4, 
    character4_costume, character5, character5_costume, character6, 
    character6_costume, character7, character7_costume, character8,
    character8_costume, character9, character9_costume, character10, 
    character10_costume, character11, character11_costume, character12,
    character12_costume, other_characters, other_characters_costumes,
    character1_number, character2_number, character3_number,
    character4_number, character5_number, character6_number, 
    character7_number, character8_number, character9_number,
    character10_number, character11_number, character12_number,
    background_artists, background_artists_costumes, shooting_date,
    dramatic_day, equip_set_props, department_info,
    pages, action, storyboard, image, location_detail } = postData;

    const imageInput = useRef(null)
    const storyboardInput = useRef(null)

    const history = useHistory()
  
    const handleChange = (event) => {
      setPostData({
        ...postData,
        [event.target.name]: event.target.value,
      });
    };

    const handleChangeImage = (event) => {
      if (event.target.files.length) {
        URL.revokeObjectURL(image);
        setPostData({
          ...postData,
          image: URL.createObjectURL(event.target.files[0]),
        });
        console.log(`image ${image}`)
      }
    };

    const handleChangeStoryboard = (event) => {
      if (event.target.files.length) {
        URL.revokeObjectURL(storyboard);
        setPostData({
          ...postData,
          storyboard: URL.createObjectURL(event.target.files[0]),
        });
        console.log(`storyboard ${storyboard}`)
      }
    };

  const infoFields = (
    <div className="mt-3 text-center px-2">
      {/* number title act */}
      <Row>
        <Col className="d-flex justify-content-center p-0 p-md-2" xs={4} >
        <Form.Group controlId="number" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.Bold}`} >Number</Form.Label>
              <Form.Control 
              className={styles.Input}
              type="text"
              name="number"
              value={number}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.number?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col className="d-flex justify-content-center p-0 p-md-2" xs={4}>
          <Form.Group controlId="title" className={`${styles.Width2} `} >
              <Form.Label className={`${styles.Bold}`}>Title</Form.Label>
              <Form.Control 
              // placeholder="Title"
              className={styles.Input}
              type="text"
              name="title"
              value={title}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.title?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col className="d-flex justify-content-center p-0 p-md-2" xs={4} >
          <Form.Group controlId="dramatic_day" className={`${styles.Width2} `} >
              <Form.Label className={`${styles.Bold}`} >Dramatic Day</Form.Label>
              <Form.Control 
              type="text"
              className={styles.Input}
              // placeholder="Dramatic Day"
              name="dramatic_day"
              value={dramatic_day}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.dramatic_day?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* Int-Ext Day/Night Dramatic-day  */}
      <Row className="mt-3">
      <Col className="d-flex justify-content-center p-0 p-md-2" xs={4} >         
          <Form.Group controlId="int_ext" className={`${styles.Width2} `} >
              <Form.Label className={`${styles.Bold}`} >Int-Ext</Form.Label>
              <Form.Control as="select"
                className={styles.Input}
                // placeholder="Int-Ext"
                name="int_ext"
                value={int_ext}
                onChange={handleChange}
                aria-label="int ext select">
                <option></option>
                <option value="int">Int</option>
                <option value="ext">Ext</option>
              </Form.Control>
          </Form.Group>
          {errors?.int_ext?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      <Col className="d-flex justify-content-center p-0 p-md-2" xs={4} >
      <Form.Group controlId="day_night" className={`${styles.Width2} `} >
          <Form.Label className={`${styles.Bold}`} >Day/Night</Form.Label>
          <Form.Control as="select"
            name="day_night"
            className={styles.Input}
            // placeholder="Day/Night"
            value={day_night}
            onChange={handleChange}
            aria-label="day or night select">
            <option></option>
            <option value="DAY">Day</option>
            <option value="NIGHT">Night</option>
          </Form.Control>
      </Form.Group>
      {errors?.day_night?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      </Col>
      <Col className="d-flex justify-content-center p-0 p-md-2" xs={4}>
          <Form.Group controlId="act" className={`${styles.Width2} `} >
              <Form.Label className={`${styles.Bold}`} >Act</Form.Label>
              <Form.Control as="select"
                className={styles.Input}
                name="act"
                value={act}
                onChange={handleChange}
                aria-label="act select">
                <option></option>
                <option value="one">One</option>
                <option value="two-a">Two - First Half</option>
                <option value="two-b">Two - Second Half</option>
                <option value="three">Three</option>
              </Form.Control>
          </Form.Group>
          {errors?.act?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
        </Col>
      </Row  >
      {/* shooting-date time pages*/}
      <Row className="mt-3">
      <Col className="d-flex justify-content-center p-0 p-md-2" xs={4}>
      <Form.Group controlId="shooting_date" className={`${styles.Width2} `} >
          <Form.Label className={`${styles.Bold}`} >Shooting Date</Form.Label>
          <Form.Control 
          type="text"
          className={styles.Input}
          // placeholder="Shooting Date"
          name="shooting_date"
          value={shooting_date}
          onChange={handleChange}
              />
      </Form.Group>
      {errors?.shooting_date?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      </Col>
      <Col className="d-flex justify-content-center p-0 p-md-2" xs={4} >
      <Form.Group controlId="time" className={`${styles.Width2} `} >
          <Form.Label className={`${styles.Bold}`} >Scene Time</Form.Label>
          <Form.Control 
          type="text"
          className={styles.Input}
          // placeholder="Time"
          name="time"
          value={time}
          onChange={handleChange}
              />
      </Form.Group>
      {errors?.time?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      </Col>
      <Col className="d-flex justify-content-center p-0 p-md-2" xs={4} >
      <Form.Group controlId="pages" className={`${styles.Width2} `} >
          <Form.Label className={`${styles.Bold}`} >Pages</Form.Label>
          <Form.Control 
          type="text"
          className={styles.Input}
          placeholder="Decimal only"
          name="pages"
          value={pages}
          onChange={handleChange}
              />
      </Form.Group>
      {errors?.pages?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      </Col>
      </Row >
      {/* location location-detail  */}
      <Row className="mt-3">
      <Col className="d-flex justify-content-center p-0 p-md-2" xs={6}>
          <Form.Group controlId="location" className={`${styles.Width2} `} >
              <Form.Label className={`${styles.Bold}`} >Location</Form.Label>
              <Form.Control as="select"
                name="location"
                className={styles.Input}
                value={location}
                onChange={handleChange}
                aria-label="location select">
                  <option  ></option>
                {locations.results.length && (
                    locations.results.map((location) => (
                      <option key={location.id} value={location.name} >{location.name}</option>
                    ) )) }
              </Form.Control>
          </Form.Group>
          {errors?.location?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
      </Col>
      <Col className="d-flex justify-content-center p-0 p-md-2" xs={6}>
          <Form.Group controlId="location_detail" className={`${styles.Width2} `} >
              <Form.Label className={`${styles.Bold}`} >Location Detail</Form.Label>
              <Form.Control 
              className={styles.Input}
              // placeholder="Location Detail"
              type="text"
              name="location_detail"
              value={location_detail}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.location_detail?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
      </Col>
      </Row>
      {/* Filming Location - Action */}
      <Row className="mt-3">
        <Col className="d-flex justify-content-center p-0 p-md-2" xs={6}>
        <Form.Group controlId="filming_location" className={`${styles.Width2} `} >
            <Form.Label className={`${styles.Bold}`} >Filming Location</Form.Label>
            <Form.Control 
            type="text"
            className={styles.Input}
            // placeholder="Filming Location"
            name="filming_location"
            as="textarea"
            rows={2}
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
        <Col className="d-flex justify-content-center p-0 p-md-2" xs={6}>
        <Form.Group controlId="action" className={`${styles.Width2} `} >
            <Form.Label className={`${styles.Bold}`} >Action</Form.Label>
            <Form.Control 
            type="text"
            className={styles.Input}
            // placeholder="Action"
            name="action"
            as="textarea"
            rows={2}
            value={action}
            onChange={handleChange}
                />
        </Form.Group>
        {errors?.action?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}
        </Col>
      </Row>
      {/* department-info equip_set_props  */}
      <Row>
        <Col className="d-flex justify-content-center p-0 p-md-2" xs={6}>
        <Form.Group controlId="content" className={`${styles.Width2} `} >
            <Form.Label className={`${styles.Bold}`} >Department Info</Form.Label>
            <Form.Control 
                type="text"
                // placeholder="Department Info"
                className={styles.InputScene}
                name="department_info"
                as="textarea"
                rows={2}
                value={department_info}
                onChange={handleChange}
                />
        </Form.Group>
        {errors?.department_info?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}
      </Col>
      <Col className="d-flex justify-content-center p-0 p-md-2" xs={6}>
      <Form.Group controlId="equip_set_props" className={`${styles.Width2} `} >
          <Form.Label className={`${styles.Bold}`} >Info/Equip/Set</Form.Label>
          <Form.Control 
              className={styles.InputScene}
              // placeholder="Info/Equip/Set"
              type="text"
              name="equip_set_props"
              as="textarea"
              rows={2}
              value={equip_set_props}
              onChange={handleChange}
              />
      </Form.Group>
      {errors?.equip_set_props?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      </Col>
      </Row>       
    </div>
  )

  const handleChangeChar1 = (event) => {
    const role = event.target.value.split("_")[0];
    const number = event.target.value.split("_")[1];
    setPostData({
      ...postData,
      character1: role,
      character1_number: number,
    });
  };

  const handleChangeChar2 = (event) => {
    const role = event.target.value.split("_")[0];
    const number = event.target.value.split("_")[1];
    setPostData({
      ...postData,
      character2: role,
      character2_number: number,
    });
  };

  const handleChangeChar3 = (event) => {
    const role = event.target.value.split("_")[0];
    const number = event.target.value.split("_")[1];
    setPostData({
      ...postData,
      character3: role,
      character3_number: number,
    });
  };

  const handleChangeChar4 = (event) => {
    const role = event.target.value.split("_")[0];
    const number = event.target.value.split("_")[1];
    setPostData({
      ...postData,
      character4: role,
      character4_number: number,
    });
  };

  const handleChangeChar5 = (event) => {
    const role = event.target.value.split("_")[0];
    const number = event.target.value.split("_")[1];
    setPostData({
      ...postData,
      character5: role,
      character5_number: number,
    });
  };

  const handleChangeChar6 = (event) => {
    const role = event.target.value.split("_")[0];
    const number = event.target.value.split("_")[1];
    setPostData({
      ...postData,
      character6: role,
      character6_number: number,
    });
  };

  const handleChangeChar7 = (event) => {
    const role = event.target.value.split("_")[0];
    const number = event.target.value.split("_")[1];
    setPostData({
      ...postData,
      character7: role,
      character7_number: number,
    });
  };

  const handleChangeChar8 = (event) => {
    const role = event.target.value.split("_")[0];
    const number = event.target.value.split("_")[1];
    setPostData({
      ...postData,
      character8: role,
      character8_number: number,
    });
  };

  const handleChangeChar9 = (event) => {
    const role = event.target.value.split("_")[0];
    const number = event.target.value.split("_")[1];
    setPostData({
      ...postData,
      character9: role,
      character9_number: number,
    });
  };

  const handleChangeChar10 = (event) => {
    const role = event.target.value.split("_")[0];
    const number = event.target.value.split("_")[1];
    setPostData({
      ...postData,
      character10: role,
      character10_number: number,
    });
  };

  const handleChangeChar11 = (event) => {
    const role = event.target.value.split("_")[0];
    const number = event.target.value.split("_")[1];
    setPostData({
      ...postData,
      character11: role,
      character11_number: number,
    });
  };

  const handleChangeChar12 = (event) => {
    const role = event.target.value.split("_")[0];
    const number = event.target.value.split("_")[1];
    setPostData({
      ...postData,
      character12: role,
      character12_number: number,
    });
  };

const charFields = (
  <div className="mt-3 px-5 text-center">
    {/* characters */}
    <Row className="mt-3">
    <Col xs={6} md={4} lg={2}>
    <Form.Group controlId="character1" className="mb-2" >
        <Form.Label className={`${styles.Bold}`} >Character 1</Form.Label>
        <Form.Control as="select"
          name="character1"
          className={styles.InputChar}
          value={character1}
          onChange={handleChangeChar1}
          aria-label="character1 select">
            <option  >{character1} </option>
            {characters.results.length && (
              characters.results.map((character) => (
                <option key={character.id} 
                  value={`${character.role}_${character.number}`} >
                  {character.role}</option>
              ) )) }
        </Form.Control>
    </Form.Group>
    {errors?.character1?.map((message, idx) => (
      <Alert variant="warning" key={idx}>
        {message}
      </Alert>
    ))}
    </Col>
    <Col xs={6} md={4} lg={2}>
    <Form.Group controlId="character2" className="mb-2" >
        <Form.Label className={`${styles.Bold}`} >Character 2</Form.Label>
        <Form.Control as="select"
          name="character2"
          className={styles.InputChar}
          value={character2}
          onChange={handleChangeChar2}
          aria-label="character2 select">
            <option  >{character2} </option>
          {characters.results.length && (
              characters.results.map((character) => (
                <option key={character.id} 
                  value={`${character.role}_${character.number}`} >
                  {character.role}</option>
              ) )) }
        </Form.Control>
    </Form.Group>
    {errors?.character2?.map((message, idx) => (
      <Alert variant="warning" key={idx}>
        {message}
      </Alert>
    ))}
    </Col>
    <Col xs={6} md={4} lg={2}>
    <Form.Group controlId="character3" className="mb-2" >
        <Form.Label className={`${styles.Bold}`} >Character 3</Form.Label>
        <Form.Control as="select"
          name="character3"
          className={styles.InputChar}
          value={character3}
          onChange={handleChangeChar3}
          aria-label="character3 select">
            <option >{character3} </option>
            {characters.results.length && (
              characters.results.map((character) => (
                <option key={character.id} 
                  value={`${character.role}_${character.number}`} >
                  {character.role}</option>
              ) )) }
        </Form.Control>
    </Form.Group>
    {errors?.character3?.map((message, idx) => (
      <Alert variant="warning" key={idx}>
        {message}
      </Alert>
    ))}
    </Col>
    <Col xs={6} md={4} lg={2}>
    <Form.Group controlId="character4" className="mb-2" >
        <Form.Label className={`${styles.Bold}`} >Character 4</Form.Label>
        <Form.Control as="select"
          name="character4"
          className={styles.InputChar}
          value={character4}
          onChange={handleChangeChar4}
          aria-label="character4 select">
            <option  ></option>
          {characters.results.length && (
            characters.results.map((character) => (
              <option key={character.id} 
                value={`${character.role}_${character.number}`} >
                {character.role}</option>
            ) )) }
        </Form.Control>
    </Form.Group>
    {errors?.character4?.map((message, idx) => (
      <Alert variant="warning" key={idx}>
        {message}
      </Alert>
    ))}
    </Col>
    <Col xs={6} md={4} lg={2}>
    <Form.Group controlId="character5" className="mb-2" >
        <Form.Label className={`${styles.Bold}`}>Character 5</Form.Label>
        <Form.Control as="select"
          name="character5"
          className={styles.InputChar}
          value={character5}
          onChange={handleChangeChar5}
          aria-label="character5 select">
            <option  ></option>
            {characters.results.length && (
              characters.results.map((character) => (
                <option key={character.id} 
                  value={`${character.role}_${character.number}`} >
                  {character.role}</option>
              ) )) }
        </Form.Control>
    </Form.Group>
    {errors?.character5?.map((message, idx) => (
      <Alert variant="warning" key={idx}>
        {message}
      </Alert>
    ))}
    </Col>
    <Col xs={6} md={4} lg={2}>
    <Form.Group controlId="character6" className="mb-2" >
        <Form.Label className={`${styles.Bold}`} >Character 6</Form.Label>
        <Form.Control as="select"
          name="character6"
          className={styles.InputChar}
          value={character6}
          onChange={handleChangeChar6}
          aria-label="character6 select">
            <option  ></option>
            {characters.results.length && (
              characters.results.map((character) => (
                <option key={character.id} 
                  value={`${character.role}_${character.number}`} >
                  {character.role}</option>
              ) )) }
        </Form.Control>
    </Form.Group>
    {errors?.character6?.map((message, idx) => (
      <Alert variant="warning" key={idx}>
        {message}
      </Alert>
    ))}
    </Col>
    </Row>
    <Row className="mt-3">
    <Col xs={6} md={4} lg={2}>
    <Form.Group controlId="character7" className="mb-2" >
        <Form.Label className={`${styles.Bold}`} >Character 7</Form.Label>
        <Form.Control as="select"
          name="character7"
          className={styles.InputChar}
          value={character7}
          onChange={handleChangeChar7}
          aria-label="character7 select">
            <option  ></option>
            {characters.results.length && (
              characters.results.map((character) => (
                <option key={character.id} 
                  value={`${character.role}_${character.number}`} >
                  {character.role}</option>
              ) )) }
        </Form.Control>
    </Form.Group>
    {errors?.character7?.map((message, idx) => (
      <Alert variant="warning" key={idx}>
        {message}
      </Alert>
    ))}
    </Col>
    <Col xs={6} md={4} lg={2}>
    <Form.Group controlId="character8" className="mb-2" >
        <Form.Label className={`${styles.Bold}`} >Character 8</Form.Label>
        <Form.Control as="select"
          name="character8"
          className={styles.InputChar}
          value={handleChangeChar8}
          onChange={handleChange}
          aria-label="character8 select">
            <option  ></option>
            {characters.results.length && (
              characters.results.map((character) => (
                <option key={character.id} 
                  value={`${character.role}_${character.number}`} >
                  {character.role}</option>
              ) )) }
        </Form.Control>
    </Form.Group>
    {errors?.character8?.map((message, idx) => (
      <Alert variant="warning" key={idx}>
        {message}
      </Alert>
    ))}
    </Col>
    <Col xs={6} md={4} lg={2}>
    <Form.Group controlId="character9" className="mb-2" >
        <Form.Label className={`${styles.Bold}`} >Character 9</Form.Label>
        <Form.Control as="select"
          name="character9"
          className={styles.InputChar}
          value={character9}
          onChange={handleChangeChar9}
          aria-label="character9 select">
            <option  ></option>
          {characters.results.length && (
            characters.results.map((character) => (
              <option key={character.id} 
                value={`${character.role}_${character.number}`} >
                {character.role}</option>
            ) )) }
        </Form.Control>
    </Form.Group>
    {errors?.character9?.map((message, idx) => (
      <Alert variant="warning" key={idx}>
        {message}
      </Alert>
    ))}
    </Col>
    <Col xs={6} md={4} lg={2}>
    <Form.Group controlId="character10" className="mb-2" >
        <Form.Label className={`${styles.Bold}`} >Character 10</Form.Label>
        <Form.Control as="select"
          name="character10"
          className={styles.InputChar}
          value={character10}
          onChange={handleChangeChar10}
          aria-label="character10 select">
            <option  ></option>
          {characters.results.length && (
            characters.results.map((character) => (
              <option key={character.id} 
                value={`${character.role}_${character.number}`} >
                {character.role}</option>
            ) )) }
        </Form.Control>
    </Form.Group>
    {errors?.character10?.map((message, idx) => (
      <Alert variant="warning" key={idx}>
        {message}
      </Alert>
    ))}
    </Col>
    <Col xs={6} md={4} lg={2}>
    <Form.Group controlId="character11" className="mb-2" >
        <Form.Label className={`${styles.Bold}`} >Character 11</Form.Label>
        <Form.Control as="select"
          name="character11"
          className={styles.InputChar}
          value={character11}
          onChange={handleChangeChar11}
          aria-label="character11 select">
            <option  ></option>
          {characters.results.length && (
          characters.results.map((character) => (
            <option key={character.id} 
              value={`${character.role}_${character.number}`} >
              {character.role}</option>
          ) )) }
        </Form.Control>
    </Form.Group>
    {errors?.character11?.map((message, idx) => (
      <Alert variant="warning" key={idx}>
        {message}
      </Alert>
    ))}
    </Col>
    <Col xs={6} md={4} lg={2}>
    <Form.Group controlId="character12" className="mb-2" >
        <Form.Label className={`${styles.Bold}`} >Character 12</Form.Label>
        <Form.Control as="select"
          name="character12"
          className={styles.InputChar}
          value={character12}
          onChange={handleChangeChar12}
          aria-label="character12 select">
            <option  ></option>
          {characters.results.length && (
          characters.results.map((character) => (
            <option key={character.id} 
              value={`${character.role}_${character.number}`} >
              {character.role}</option>
          ) )) }
        </Form.Control>
    </Form.Group>
    {errors?.character12?.map((message, idx) => (
      <Alert variant="warning" key={idx}>
        {message}
      </Alert>
    ))}
    </Col>
    </Row>
    <Row className="mt-3">
      <Col xs={6}>
    <Form.Group controlId="other_characters" className="mb-2" >
        <Form.Label className={`${styles.Bold}`}>Other Characters</Form.Label>
        <Form.Control 
        type="text"
        className={styles.InputScene}
        name="other_characters"
        as="textarea"
        rows={2}
        value={other_characters}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.other_characters?.map((message, idx) => (
      <Alert variant="warning" key={idx}>
        {message}
      </Alert>
    ))}
    </Col>
    <Col xs={6}>
    <Form.Group controlId="background_artists" className="mb-2" >
        <Form.Label className={`${styles.Bold}`} >Background Artists</Form.Label>
        <Form.Control 
        type="text"
        className={styles.InputScene}
        name="background_artists"
        as="textarea"
        rows={2}
        value={background_artists}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.background_artists?.map((message, idx) => (
      <Alert variant="warning" key={idx}>
        {message}
      </Alert>
    ))}
    </Col>
    </Row>
    {/* end characters */}          
  </div>
)

  const buttons = (
    <div className={`text-center pt-3 mb-3 pb-2 ${styles.White }`} >    
      <Button
        className={`mr-3 px-5 py-1 ${btnStyles.Button} ${btnStyles.Blue}`}
        onClick={() => history.goBack()}
      >
        Cancel
      </Button>
      <Button className={`ml-3 px-5 py-1  ${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
        Create
      </Button>
    </div>
  );

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("number", number);
    formData.append("title", title);
    formData.append("act", act);
    formData.append("int_ext", int_ext);
    formData.append("day_night", day_night);
    formData.append("time", time);
    formData.append("pages", pages);
    formData.append("dramatic_day", dramatic_day);
    formData.append("location", location);
    formData.append("location_detail", location_detail);
    formData.append("filming_location", filming_location);
    formData.append("shooting_date", shooting_date);
    formData.append("action", action);
    formData.append("equip_set_props", equip_set_props);
    formData.append("department_info", department_info);
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
    formData.append("background_artists", background_artists);
    formData.append("background_artists_costumes", background_artists_costumes);
    if (imageInput.current.files[0]) {
      formData.append("image", imageInput.current.files[0]);
    }
    if (storyboardInput.current.files[0]) {
      formData.append("storyboard", storyboardInput.current.files[0]); 
    }
      
    try {
      const { data } = await axiosReq.post("/scenes/", formData);
      history.push(`/scenes/${data.id}`);
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  }

  return (
    <div >
      {topbox ? (
        ""
      ) : (
        <TopBox title="Create Scene" />
      ) }
      <Button
            className={`${btnStyles.Button} ${btnStyles.Blue} py-0 mt-2`}
            onClick={() => history.goBack()}
        >
            Back
      </Button>  
      <Button
      className={`float-right py-0 mt-2 ${btnStyles.Order} ${btnStyles.Button}`}
      onClick={() => setShowInfo(showInfo => !showInfo)} >INFO
      </Button> 
      <Button
      className={`float-right py-0 mt-2 ${btnStyles.Order} ${btnStyles.Button}`}
      onClick={() => setShowImp(showImp => !showImp)} >IMPORTANT
      </Button>
      {!showImp ? (
          ""
              ) : (
                <Important  /> 
              ) } 
      <Row>
        <Col>
      {!showInfo ? (
          ""
              ) : (
                <Info  /> 
              ) } 
        </Col>
      </Row>
      <Row className="mt-3">
        <Col xs={{span: 10, offset: 1} } md={{span: 6, offset: 0}}>
        <h5 className={`mt-3 text-center py-1 ${styles.SubTitle }`}>
          New Characters</h5>
          <NewCharacter setCharacters={setCharacters} />
        </Col>
      <Col xs={{span: 10, offset: 1} } md={{span: 6, offset: 0}}>
        <h5 className={`mt-3 text-center py-1 ${styles.SubTitle }`}>New Locations</h5>
          <NewLocation setLocations={setLocations} />
        </Col>
      </Row>
      <h3 className={`text-center mt-5 mb-0 py-0 ${styles.SubTitle }`} >SCENE INFO</h3> 
    <Form className= {`mb-3 ${styles.Back}`} onSubmit={handleSubmit}>
    <Row>
    <Col xs={12} className="px-0 px-md-2">
        {infoFields}
      </Col>
      </Row>
      <Row>
      <Col className="py-2 p-0 p-md-2" md={6}>
        <p className={`${styles.Bold} text-center mb-1`}>Script</p>
        <Container
          className={`${appStyles.Content} ${styles.Width2}  ${styles.Container}
           d-flex flex-column justify-content-center mb-3`}
        >
          <Form.Group className="text-center pt-3">
              {image ? (
                <>
                  <figure>
                    <Image className={appStyles.Image} src={image} />
                  </figure>
                  <div>
                    <Form.Label
                      className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                      htmlFor="image-upload"
                    >
                      Change the Script
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
                    height={40}
                    width={40}
                    message="Upload Script"
                  />
                </Form.Label>
              )}

              <Form.Control
                type="file"
                id="image-upload"
                // accept="image/*"
                onChange={handleChangeImage}
                ref={imageInput}
              />
            </Form.Group>
            {errors?.image?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
        </Container>
        </Col>
        <Col className="py-2 p-0 p-md-2" md={6}>
        <p className={`${styles.Bold} text-center mb-1`}>Storyboard</p>
        {/* storyboard */}
        <Container
          className={`${appStyles.Content} ${styles.Width2}  ${styles.Container}
          d-flex flex-column justify-content-center`}
        >
          <Form.Group className="text-center pt-3">
              {storyboard ? (
                <>
                  <figure>
                    <Image className={appStyles.Image} src={storyboard} />
                  </figure>
                  <div>
                    <Form.Label
                      className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                      htmlFor="storyboard-upload"
                    >
                      Change the storyboard
                    </Form.Label>
                  </div>
                </>
              ) : (
                <Form.Label
                  className="d-flex justify-content-center"
                  htmlFor="storyboard-upload"
                >
                  <Asset
                    src={Upload}
                    height={40}
                    width={40}
                    message="Upload Storyboard"
                  />
                </Form.Label>
              )}

              <Form.Control
                type="file"
                id="storyboard-upload"
                accept="image/*"
                onChange={handleChangeStoryboard}
                ref={storyboardInput}
              />
            </Form.Group>
            {errors?.storyboard?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Container>
      </Col>   
    </Row> 
    <h5 className={`text-center mt-5 mb-3 py-0 mx-5 ${styles.SubTitle }`} >Characters</h5> 
    {charFields}
    {/* Costumes */}
    <Row className='my-3'>
        <Col className="text-center">
        <p className={`text-center ${styles.Bold}`}>
          Add Character Costumes here
        </p>
            <Button onClick={() => setShow(show => !show)} 
            className={`mt-3 ${btnStyles.Button} ${btnStyles.Wide2} ${btnStyles.Bright}`}>
            Add Costumes</Button>
            {!show ?("") : (<SceneCreateCostumes postData={postData} handleChange={handleChange} /> ) }
        </Col>
    </Row>
    <Row>
      <Col className="text-center">
      <div className= {`mt-3 ${styles.Container}`} >{buttons}</div>
      </Col>
    </Row>
  </Form>
  </div>
  );
}

export default SceneCreateForm;