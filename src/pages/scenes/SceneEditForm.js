import React, { useEffect, useRef, useState } from "react";

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
import { useHistory, useParams } from "react-router";
import { axiosReq, axiosRes } from "../../api/axiosDefaults";
import TopBox from "../../components/TopBox";
import { useRedirect } from "../../hooks/Redirect";
import SceneCreateCostumes from "./SceneCreateCostumes";
import NewCharacter from "./NewCharacter";
import SceneEditCostumes from "./SceneEditCostumes";
import { useCharactersContext, useLocationsContext, useSetCharactersContext, useSetLocationsContext } from "../../contexts/Scene_chars_locs";

const SceneEditForm = () => {
    useRedirect("loggedOut");
    const [errors, setErrors] = useState({});
    const [show, setShow] = useState(false);
    const characters = useCharactersContext();
    const locations = useLocationsContext();
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
      other_characters: "",
      other_characters_costumes: "",
      background_artists: "",
      background_artists_costumes: "",
      action: "",
      content: "",
      storyboard: "",
      info: "",
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
        background_artists, background_artists_costumes, shooting_date,
        pages, action, content, storyboard, info, image, location_detail, } = postData;
    
    const imageInput = useRef(null)
    const storyboardInput = useRef(null)

    const history = useHistory();
    const { id } = useParams();

    // useEffect(() => {
    //   const handleMount = async () => {
    //     try {
    //       const { data } = await axiosRes.get("characters/");
    //       setCharacters(data);
    //       console.log(`chars 1 ${characters.results[0].role }`)
    //       console.log(data)
    //     } catch (err) {
    //       console.log(err)
    //     }
    //   }

    //   handleMount();
    // }, [])

    useEffect(() => {
        const handleMount = async () => {
          try {
            const { data } = await axiosReq.get(`/scenes/${id}/`);
            const { number, title, act, int_ext, day_night, time, location,
              filming_location, character1, character1_costume, character2, 
              character2_costume, character3, character3_costume, character4, 
              character4_costume, character5, character5_costume, character6, 
              character6_costume, character7, character7_costume, character8,
              character8_costume, character9, character9_costume, character10, 
              character10_costume, character11, character11_costume, character12,
              character12_costume, other_characters, other_characters_costumes,
              background_artists, background_artists_costumes, shooting_date,
              pages, action, content, storyboard, info, image, location_detail, } = data;
     
        setPostData({ number, title, act, int_ext, day_night, time, location,
          filming_location, character1, character1_costume, character2, 
          character2_costume, character3, character3_costume, character4, 
          character4_costume, character5, character5_costume, character6, 
          character6_costume, character7, character7_costume, character8,
          character8_costume, character9, character9_costume, character10, 
          character10_costume, character11, character11_costume, character12,
          character12_costume, other_characters, other_characters_costumes,
          background_artists, background_artists_costumes, shooting_date,
          pages, action, content, storyboard, info, image, location_detail });
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
        formData.append("location", location);
        formData.append("location_detail", location_detail);
        formData.append("filming_location", filming_location);
        formData.append("shooting_date", shooting_date);
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
        formData.append("other_characters", other_characters);
        formData.append("other_characters_costumes", other_characters_costumes);
        formData.append("background_artists", background_artists);
        formData.append("background_artists_costumes", background_artists_costumes);
        formData.append("action", action);
        formData.append("content", content);
        formData.append("info", info);
        if (imageInput.current.files[0]) {
            formData.append("image", imageInput.current.files[0]);
        }
        if (storyboardInput.current.files[0]) {
            formData.append("storyboard", storyboardInput.current.files[0]); 
        }
            
        try {
            await axiosReq.put(`/scenes/${id}/`, formData);
            history.push(`/scenes/${id}/`);
        } catch (err) {
            console.log(err);
            if (err.response?.status !== 401) {
            setErrors(err.response?.data);
            }
        }
    }

    const textFields = (
      <div className="mt-3">
        {/* number title act */}
        <Row>
          <Col xs={3} >
          <Form.Group controlId="number" className="mb-2" >
                <Form.Label className="d-none p-1" >Number</Form.Label>
                <Form.Control 
                placeholder="Number"
                className={styles.InputScene}
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
            <Col xs={6}>
            <Form.Group controlId="title" className="mb-2" >
                <Form.Label className="d-none p-1" >Title</Form.Label>
                <Form.Control 
                placeholder="Title"
                className={styles.InputScene}
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
            <Col xs={3}>
            <Form.Group controlId="act" className="mb-2" >
                <Form.Label className="d-none p-1" >Act</Form.Label>
                <Form.Control as="select"
                  className={styles.InputScene}
                  name="act"
                  value={act}
                  onChange={handleChange}
                  aria-label="act select">
                  <option>Act</option>
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
        </Row>
        {/* location int-ext day-night */}
        <Row>
        <Col xs={4}>
            {/* <Form.Group controlId="location" className="mb-2" >
                <Form.Label className="d-none p-1" >Location</Form.Label>
                <Form.Control 
                className={styles.InputScene}
                placeholder="Location"
                type="text"
                name="location"
                value={location}
                onChange={handleChange}
                    />
            </Form.Group> */}
            <Form.Group controlId="location" className="mb-2" >
                <Form.Label className="p-1 d-none" >Character 1</Form.Label>
                <Form.Control as="select"
                  name="location"
                  className={styles.InputChar}
                  value={location}
                  onChange={handleChange}
                  aria-label="location select">
                    <option  >Location</option>
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
        <Col xs={4}>
            <Form.Group controlId="location_detail" className="mb-2" >
                <Form.Label className="d-none p-1" >Location Detail</Form.Label>
                <Form.Control 
                className={styles.InputScene}
                placeholder="Location Detail"
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
        <Col xs={2} >         
            <Form.Group controlId="int_ext" className="mb-2" >
                <Form.Label className="d-none p-1" >Int-Ext</Form.Label>
                <Form.Control as="select"
                  className={styles.InputScene}
                  placeholder="Int-Ext"
                  name="int_ext"
                  value={int_ext}
                  onChange={handleChange}
                  aria-label="int ext select">
                  <option>Int-Ext</option>
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
            <Col xs={2} >
            <Form.Group controlId="day_night" className="mb-2" >
                <Form.Label className="p-1 d-none" >Day/Night</Form.Label>
                <Form.Control as="select"
                  name="day_night"
                  className={styles.InputScene}
                  placeholder="Day/Night"
                  value={day_night}
                  onChange={handleChange}
                  aria-label="day or night select">
                  <option>Day/Night</option>
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
            </Row>
            {/* shooting-date time pages*/}
            <Row>
            <Col xs={4}>
            <Form.Group controlId="shooting_date" className="mb-2" >
                <Form.Label className="p-1 d-none" >Shooting Date</Form.Label>
                <Form.Control 
                type="text"
                className={styles.InputScene}
                placeholder="Shooting Date"
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
            <Col xs={4} >
            <Form.Group controlId="time" className="mb-2" >
                <Form.Label className="p-1 d-none" >Time</Form.Label>
                <Form.Control 
                type="text"
                className={styles.InputScene}
                placeholder="Time"
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
            <Col xs={4} >
            <Form.Group controlId="pages" className="mb-2" >
                <Form.Label className="p-1 d-none" >Pages</Form.Label>
                <Form.Control 
                type="text"
                className={styles.InputScene}
                placeholder="Pages"
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
            </Row>
            {/* Filming Location - Action */}
            <Row>
              <Col xs={6}>
            <Form.Group controlId="filming_location" className="mb-2" >
                <Form.Label className="p-1 d-none" >Filming Location</Form.Label>
                <Form.Control 
                type="text"
                className={styles.InputScene}
                placeholder="Filming Location"
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
            <Col xs={6}>
            <Form.Group controlId="action" className="mb-2" >
                <Form.Label className="p-1 d-none" >Action</Form.Label>
                <Form.Control 
                type="text"
                className={styles.InputScene}
                placeholder="Action"
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
            {/* content info */}
            <Row>
              <Col xs={6}>
            <Form.Group controlId="content" className="mb-2" >
                <Form.Label className="p-1 d-none" >Content</Form.Label>
                <Form.Control 
                    className={styles.Input}
                    type="text"
                    placeholder="Content"
                    className={styles.InputScene}
                    name="content"
                    as="textarea"
                    rows={2}
                    value={content}
                    onChange={handleChange}
                    />
            </Form.Group>
            {errors?.content?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={6}>
            <Form.Group controlId="info" className="mb-2" >
                <Form.Label className="p-1 d-none" >Info/Equip/Set</Form.Label>
                <Form.Control 
                    className={styles.InputScene}
                    placeholder="Info/Equip/Set"
                    type="text"
                    name="info"
                    as="textarea"
                    rows={2}
                    value={info}
                    onChange={handleChange}
                    />
            </Form.Group>
            {errors?.info?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            </Row>
            {/* end info */}
            {/* characters */}
            <Row className="mt-3">
            <Col xs={6} md={4} lg={2}>
            <Form.Group controlId="character1" className="mb-2" >
                <Form.Label className="p-1 d-none" >Character 1</Form.Label>
                <Form.Control as="select"
                  name="character1"
                  className={styles.InputChar}
                  value={character1}
                  onChange={handleChange}
                  aria-label="character1 select">
                    <option  >Character 1</option>
                  {characters.results.length && (
                      characters.results.map((character) => (
                        <option key={character.id} value={character.role} >{character.role}</option>
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
                <Form.Label className="p-1 d-none" >Character 2</Form.Label>
                <Form.Control as="select"
                  name="character2"
                  className={styles.InputChar}
                  value={character2}
                  onChange={handleChange}
                  aria-label="character2 select">
                    <option  >Character 2</option>
                  {characters.results.length && (
                      characters.results.map((character) => (
                        <option key={character.id} value={character.role} >{character.role}</option>
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
                <Form.Label className="p-1 d-none" >Character 3</Form.Label>
                <Form.Control as="select"
                  name="character3"
                  className={styles.InputChar}
                  value={character3}
                  onChange={handleChange}
                  aria-label="character3 select">
                    <option  >Character 3</option>
                  {characters.results.length && (
                      characters.results.map((character) => (
                        <option key={character.id} value={character.role} >{character.role}</option>
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
                <Form.Label className="p-1 d-none" >Character 4</Form.Label>
                <Form.Control as="select"
                  name="character4"
                  className={styles.InputChar}
                  value={character4}
                  onChange={handleChange}
                  aria-label="character4 select">
                    <option  >Character 4</option>
                  {characters.results.length && (
                      characters.results.map((character) => (
                        <option key={character.id} value={character.role} >{character.role}</option>
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
                <Form.Label className="p-1 d-none" >Character 5</Form.Label>
                <Form.Control as="select"
                  name="character5"
                  className={styles.InputChar}
                  value={character5}
                  onChange={handleChange}
                  aria-label="character5 select">
                    <option  >Character 5</option>
                  {characters.results.length && (
                      characters.results.map((character) => (
                        <option key={character.id} value={character.role} >{character.role}</option>
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
                <Form.Label className="p-1 d-none" >Character 6</Form.Label>
                <Form.Control as="select"
                  name="character6"
                  className={styles.InputChar}
                  value={character6}
                  onChange={handleChange}
                  aria-label="character6 select">
                    <option  >Character 6</option>
                  {characters.results.length && (
                      characters.results.map((character) => (
                        <option key={character.id} value={character.role} >{character.role}</option>
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
            <Row>
            <Col xs={6} md={4} lg={2}>
            <Form.Group controlId="character7" className="mb-2" >
                <Form.Label className="p-1 d-none" >Character 7</Form.Label>
                <Form.Control as="select"
                  name="character7"
                  className={styles.InputChar}
                  value={character7}
                  onChange={handleChange}
                  aria-label="character7 select">
                    <option  >Character 7</option>
                  {characters.results.length && (
                      characters.results.map((character) => (
                        <option key={character.id} value={character.role} >{character.role}</option>
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
                <Form.Label className="p-1 d-none" >Character 8</Form.Label>
                <Form.Control as="select"
                  name="character8"
                  className={styles.InputChar}
                  value={character8}
                  onChange={handleChange}
                  aria-label="character8 select">
                    <option  >Character 8</option>
                  {characters.results.length && (
                      characters.results.map((character) => (
                        <option key={character.id} value={character.role} >{character.role}</option>
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
                <Form.Label className="p-1 d-none" >Character 9</Form.Label>
                <Form.Control as="select"
                  name="character9"
                  className={styles.InputChar}
                  value={character9}
                  onChange={handleChange}
                  aria-label="character9 select">
                    <option  >Character 9</option>
                  {characters.results.length && (
                      characters.results.map((character) => (
                        <option key={character.id} value={character.role} >{character.role}</option>
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
                <Form.Label className="p-1 d-none" >Character 10</Form.Label>
                <Form.Control as="select"
                  name="character10"
                  className={styles.InputChar}
                  value={character10}
                  onChange={handleChange}
                  aria-label="character10 select">
                    <option  >Character 10</option>
                  {characters.results.length && (
                      characters.results.map((character) => (
                        <option key={character.id} value={character.role} >{character.role}</option>
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
                <Form.Label className="p-1 d-none" >Character 11</Form.Label>
                <Form.Control as="select"
                  name="character11"
                  className={styles.InputChar}
                  value={character11}
                  onChange={handleChange}
                  aria-label="character11 select">
                    <option  >Character 11</option>
                  {characters.results.length && (
                      characters.results.map((character) => (
                        <option key={character.id} value={character.role} >{character.role}</option>
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
                <Form.Label className="p-1 d-none" >Character 12</Form.Label>
                <Form.Control as="select"
                  name="character12"
                  className={styles.InputChar}
                  value={character12}
                  onChange={handleChange}
                  aria-label="character12 select">
                    <option  >Character 12</option>
                  {characters.results.length && (
                      characters.results.map((character) => (
                        <option key={character.id} value={character.role} >{character.role}</option>
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
            <Row>
              <Col xs={6}>
            <Form.Group controlId="other_characters" className="mb-2" >
                <Form.Label className="p-1 d-none" >Other Characters</Form.Label>
                <Form.Control 
                type="text"
                className={styles.InputScene}
                placeholder="Other Characters"
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
                <Form.Label className="p-1 d-none" >Background Artists</Form.Label>
                <Form.Control 
                type="text"
                className={styles.InputScene}
                placeholder="Background Artists"
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
            {/* characters costumes */}
            {/* <Row>
            <Col xs={6} md={4} lg={2}>
            <Form.Group controlId="character1_costume" className="mb-2" >
                <Form.Label className="p-1" >Ch. 1 Costume</Form.Label>
                <Form.Control 
                type="text"
                name="character1_costume"
                value={character1_costume}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.character1_costume?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={6} md={4} lg={2}>
            <Form.Group controlId="character2_costume" className="mb-2" >
                <Form.Label className="p-1" >Ch. 2 Costume</Form.Label>
                <Form.Control 
                type="text"
                name="character2_costume"
                value={character2_costume}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.character2_costume?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={6} md={4} lg={2}>
            <Form.Group controlId="character3_costume" className="mb-2" >
                <Form.Label className="p-1" >Ch. 3 Costume</Form.Label>
                <Form.Control 
                type="text"
                name="character3_costume"
                value={character3_costume}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.character3_costume?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={6} md={4} lg={2}>
            <Form.Group controlId="character4_costume" className="mb-2" >
                <Form.Label className="p-1" >Ch. 4 Costume </Form.Label>
                <Form.Control 
                type="text"
                name="character4_costume"
                value={character4_costume}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.character4_costume?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={6} md={4} lg={2}>
            <Form.Group controlId="character5_costume" className="mb-2" >
                <Form.Label className="p-1" >Ch. 5 Costume</Form.Label>
                <Form.Control 
                type="text"
                name="character5_costume"
                value={character5_costume}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.character5_costume?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={6} md={4} lg={2}>
            <Form.Group controlId="character6_costume" className="mb-2" >
                <Form.Label className="p-1" >Ch. 6 Costume</Form.Label>
                <Form.Control 
                type="text"
                name="character6_costume"
                value={character6_costume}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.character6_costume?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            </Row>
            <Row>
            <Col xs={6} md={4} lg={2}>
            <Form.Group controlId="character7_costume" className="mb-2" >
                <Form.Label className="p-1" >Ch. 7 Costume</Form.Label>
                <Form.Control 
                type="text"
                name="character7_costume"
                value={character7_costume}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.character7_costume?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={6} md={4} lg={2}>
            <Form.Group controlId="character8_costume" className="mb-2" >
                <Form.Label className="p-1" >Ch. 8 Costume</Form.Label>
                <Form.Control 
                type="text"
                name="character8_costume"
                value={character8_costume}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.character8_costume?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={6} md={4} lg={2}>
            <Form.Group controlId="character9_costume" className="mb-2" >
                <Form.Label className="p-1" >Ch. 9 Costume</Form.Label>
                <Form.Control 
                type="text"
                name="character9_costume"
                value={character9_costume}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.character9_costume?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={6} md={4} lg={2}>
            <Form.Group controlId="character10_costume" className="mb-2" >
                <Form.Label className="p-1" >Ch. 10 Costume</Form.Label>
                <Form.Control 
                type="text"
                name="character10_costume"
                value={character10_costume}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.character10_costume?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={6} md={4} lg={2}>
            <Form.Group controlId="character11_costume" className="mb-2" >
                <Form.Label className="p-1" >Ch. 11 Costume</Form.Label>
                <Form.Control 
                type="text"
                name="character11_costume"
                value={character11_costume}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.character11_costume?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={6} md={4} lg={2}>
            <Form.Group controlId="character12_costume" className="mb-2" >
                <Form.Label className="p-1" >Ch. 12 Costume</Form.Label>
                <Form.Control 
                type="text"
                name="character12_costume"
                value={character12_costume}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.character12_costume?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            </Row>
            <Row>
              <Col xs={6}>
            <Form.Group controlId="other_characters_costumes" className="mb-2" >
                <Form.Label className="p-1" >Other Characters Costumes</Form.Label>
                <Form.Control 
                type="text"
                name="other_characters_costumes"
                as="textarea"
                rows={2}
                value={other_characters_costumes}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.other_characters_costumes?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={6}>
            <Form.Group controlId="background_artists_costumes" className="mb-2" >
                <Form.Label className="p-1" >Background Artists Costumes</Form.Label>
                <Form.Control 
                type="text"
                name="background_artists_costumes"
                as="textarea"
                rows={2}
                value={background_artists_costumes}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.background_artists_costumes?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            </Row> */}
            {/* end characters costumes */}
      </div>
  )
    const buttons = (
      <div className="text-center">    
        <Button
          className={`${btnStyles.Button} ${btnStyles.Blue}`}
          onClick={() => history.goBack()}
        >
          Cancel
        </Button>
        <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
          Apply
        </Button>
      </div>
    );

    return (
        <div>
        <TopBox title="Edit Scene" />
        <NewCharacter  />
        <Form onSubmit={handleSubmit}>
        <Row>
        <Col xs={12} className="p-0 p-md-2">
            <Container className= {`${appStyles.Content} ${styles.Container}`} >{textFields}</Container>
          </Col>
        </Row>
        <Row>
          <Col className="py-2 p-0 p-md-2" md={6}>
            {/* image */}
            <Container
              className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center mb-3`}
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
                          Change the image
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
                        height={50}
                        width={50}
                        message="Click or tap to upload an image"
                      />
                    </Form.Label>
                  )}
    
                  <Form.Control
                    type="file"
                    id="image-upload"
                    accept="image/*"
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
            {/* storyboard */}
            <Container
              className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
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
                        height={50}
                        width={50}
                        message="Click or tap to upload a storyboard"
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
        {/* Costumes */}
        <Row className='my-3'>
            <Col className="text-center">
                <Button onClick={() => setShow(show => !show)} 
                className={`${btnStyles.Button} ${btnStyles.Wide2} ${btnStyles.Bright}`}>
                Edit Costumes</Button>
                {!show ?("") : (<SceneEditCostumes postData={postData} handleChange={handleChange} /> ) }
            </Col>
        </Row>
        <Row>
          <Col className="text-center">
          <Container className= {`mt-3 ${styles.Container}`} >{buttons}</Container>
          </Col>
        </Row>
      </Form>
      </div>
      );
}

export default SceneEditForm
