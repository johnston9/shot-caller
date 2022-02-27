import React, { useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import styles from "../../styles/ScheduleCreate.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import { Alert } from "react-bootstrap";
import { useHistory, useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import TopBox from "../../components/TopBox";
import { useRedirect } from "../../hooks/Redirect";

const SceneScheduleEdit = () => {
  useRedirect("loggedOut");
  const [errors, setErrors] = useState({});
  const { id } = useParams();
  const history = useHistory();

  const [postData, setPostData] = useState({
      // day_id: "",
      // day: "",
      // date: "",
      day_order_number: "",
      number: "",
      act: "",
      title: "",
      start_time: "",
      end_time: "",
      content: "",
      location: "",
      filming_location: "",
      location_address: "",
      int_ext: "",
      day_night: "",
      time: "",
      pages: "",
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

  const { day_order_number, number, location_address,
    act, title, int_ext, start_time, end_time, content, location,
    filming_location, day_night, time, action, info, pages,
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
    new_info, new_content } = postData;

    useEffect(() => {
        const handleMount = async () => {
          try {
            const { data } = await axiosReq.get(`/schedule/scenes/${id}/`);

            const { day_order_number, number, info, pages,
                act, title, int_ext, start_time, end_time, content, location,
                filming_location, location_address, day_night, time, action,
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
                new_info, new_content } = data;
     
            setPostData({ day_order_number, number,
                act, title, int_ext, start_time, end_time, content, location,
                filming_location, day_night, time, action, info, pages,
                character1, character1_costume, character2, location_address,
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
                new_info, new_content });
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
  
      // formData.append("day_id", day_id);
      // formData.append("day", day);
      // formData.append("date", date);
      formData.append("day_order_number", day_order_number);
      formData.append("number", number);
      formData.append("act", act);
      formData.append("title", title);
      formData.append("start_time", start_time);
      formData.append("end_time", end_time);  
      formData.append("content", content);
      formData.append("location", location);
      formData.append("filming_location", filming_location);
      formData.append("location_address", location_address);
      formData.append("int_ext", int_ext);
      formData.append("day_night", day_night);
      formData.append("time", time);
      formData.append("pages", pages);
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
        await axiosReq.put(`/schedule/scenes/${id}/`, formData);
        history.goBack();
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
        {/* order pages */}
        <Row>
          <Col xs={6} >
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
            <Col xs={6} >
          <Form.Group controlId="pages" className="mb-2" >
                <Form.Label className="p-1" >Pages</Form.Label>
                <Form.Control 
                type="text"
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
        {/* start end */}
        <Row>
            <Col xs={6}>
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
            <Col xs={6}>
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
        {/* Filming Location - Location address */}
        <Row>
          <Col xs={6}>
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
        <Col xs={6}>
        <Form.Group controlId="location_address" className="mb-2" >
            <Form.Label className="p-1" >Location Address</Form.Label>
            <Form.Control 
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
        {/* new-content Next-info */}
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
                <Form.Label className="p-1" >Next Info</Form.Label>
                <Form.Control 
                    className={styles.Input}
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
            {/* end info */}
            {/* characters */}
            <h3 className="my-4" style={{ textTransform: 'uppercase'}}>Characters</h3> 
            <Row>
              <Col xs={4}>
              <h5 style={{ textTransform: 'uppercase'}}>Character</h5>
              </Col>
              <Col xs={4}>
              <h5 style={{ textTransform: 'uppercase'}}>Call time</h5>
              </Col>
              <Col xs={4}>
              <h5 style={{ textTransform: 'uppercase'}}>Pickup</h5>
              </Col>
              </Row>    
              {/* character1 */}
              {character1 ? (
                <Row className="mt-3">
                <Col xs={4}>
                <h5 className="pt-2" >{character1}</h5> 
                </Col>
              <Col xs={4} >
              <Form.Group controlId="character1_calltime" className="mb-0" >
                  <Form.Label className="p-1 d-none" ></Form.Label>
                  <Form.Control 
                  type="text"
                  className="text-center"
                  placeholder="Call Time"
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
              <Col xs={4} >
              <Form.Group controlId="character1_pickup" className="mb-2" >
                  <Form.Label className="p-1 d-none" ></Form.Label>
                  <Form.Control 
                  className="text-center"
                  type="text"
                  placeholder="Pickup"
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
              ) : (
                ""
              )}
              {/* character2 */}
              {character2 ? (
                <Row className="mt-3">
                <Col xs={4}>
                <h5 className="pt-2" >{character2}</h5> 
                </Col>
              <Col xs={4} >
              <Form.Group controlId="character2_calltime" className="mb-0" >
                  <Form.Label className="p-1 d-none" ></Form.Label>
                  <Form.Control 
                  type="text"
                  className="text-center"
                  placeholder="Call Time"
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
              <Col xs={4} >
              <Form.Group controlId="character2_pickup" className="mb-2" >
                  <Form.Label className="p-1 d-none" ></Form.Label>
                  <Form.Control 
                  className="text-center"
                  type="text"
                  placeholder="Pickup"
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
              ) : (
                ""
              )}
              {/* character3 */}
              {character3 ? (
                <Row className="mt-3">
                <Col xs={4}>
                <h5 className="pt-2" >{character3}</h5> 
                </Col>
              <Col xs={4} >
              <Form.Group controlId="character3_calltime" className="mb-0" >
                  <Form.Label className="p-1 d-none" ></Form.Label>
                  <Form.Control 
                  type="text"
                  className="text-center"
                  placeholder="Call Time"
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
              <Col xs={4} >
              <Form.Group controlId="character3_pickup" className="mb-2" >
                  <Form.Label className="p-1 d-none" ></Form.Label>
                  <Form.Control 
                  className="text-center"
                  type="text"
                  placeholder="Pickup"
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
              ) : (
                ""
              )}
              {/* character4 */}
              {character4 ? (
                <Row className="mt-3">
                <Col xs={4}>
                <h5 className="pt-2" >{character4}</h5> 
                </Col>
              <Col xs={4} >
              <Form.Group controlId="character4_calltime" className="mb-0" >
                  <Form.Label className="p-1 d-none" ></Form.Label>
                  <Form.Control 
                  type="text"
                  className="text-center"
                  placeholder="Call Time"
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
              <Col xs={4} >
              <Form.Group controlId="character4_pickup" className="mb-2" >
                  <Form.Label className="p-1 d-none" ></Form.Label>
                  <Form.Control 
                  className="text-center"
                  type="text"
                  placeholder="Pickup"
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
              ) : (
                ""
              )}
              {/* character5 */}
              {character5 ? (
                <Row className="mt-3">
                <Col xs={4}>
                <h5 className="pt-2" >{character5}</h5> 
                </Col>
              <Col xs={4} >
              <Form.Group controlId="character5_calltime" className="mb-0" >
                  <Form.Label className="p-1 d-none" ></Form.Label>
                  <Form.Control 
                  type="text"
                  className="text-center"
                  placeholder="Call Time"
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
              <Col xs={4} >
              <Form.Group controlId="character5_pickup" className="mb-2" >
                  <Form.Label className="p-1 d-none" ></Form.Label>
                  <Form.Control 
                  className="text-center"
                  type="text"
                  placeholder="Pickup"
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
              ) : (
                ""
              )}
              {/* character6 */}
              {character6 ? (
                <Row className="mt-3">
                <Col xs={4}>
                <h5 className="pt-2" >{character6}</h5> 
                </Col>
              <Col xs={4} >
              <Form.Group controlId="character6_calltime" className="mb-0" >
                  <Form.Label className="p-1 d-none" ></Form.Label>
                  <Form.Control 
                  type="text"
                  className="text-center"
                  placeholder="Call Time"
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
              <Col xs={4} >
              <Form.Group controlId="character6_pickup" className="mb-2" >
                  <Form.Label className="p-1 d-none" ></Form.Label>
                  <Form.Control 
                  className="text-center"
                  type="text"
                  placeholder="Pickup"
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
              ) : (
                ""
              )}
              {/* character7 */}
              {character7 ? (
                <Row className="mt-3">
                <Col xs={4}>
                <h5 className="pt-2" >{character7}</h5> 
                </Col>
              <Col xs={4} >
              <Form.Group controlId="character7_calltime" className="mb-0" >
                  <Form.Label className="p-1 d-none" ></Form.Label>
                  <Form.Control 
                  type="text"
                  className="text-center"
                  placeholder="Call Time"
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
              <Col xs={4} >
              <Form.Group controlId="character7_pickup" className="mb-2" >
                  <Form.Label className="p-1 d-none" ></Form.Label>
                  <Form.Control 
                  className="text-center"
                  type="text"
                  placeholder="Pickup"
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
              ) : (
                ""
              )}
              {/* character8 */}
              {character8 ? (
                <Row className="mt-3">
                <Col xs={4}>
                <h5 className="pt-2" >{character8}</h5> 
                </Col>
              <Col xs={4} >
              <Form.Group controlId="character8_calltime" className="mb-0" >
                  <Form.Label className="p-1 d-none" ></Form.Label>
                  <Form.Control 
                  type="text"
                  className="text-center"
                  placeholder="Call Time"
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
              <Col xs={4} >
              <Form.Group controlId="character8_pickup" className="mb-2" >
                  <Form.Label className="p-1 d-none" ></Form.Label>
                  <Form.Control 
                  className="text-center"
                  type="text"
                  placeholder="Pickup"
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
              ) : (
                ""
              )}
              {/* character9 */}
              {character9 ? (
                <Row className="mt-3">
                <Col xs={4}>
                <h5 className="pt-2" >{character9}</h5> 
                </Col>
              <Col xs={4} >
              <Form.Group controlId="character9_calltime" className="mb-0" >
                  <Form.Label className="p-1 d-none" ></Form.Label>
                  <Form.Control 
                  type="text"
                  className="text-center"
                  placeholder="Call Time"
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
              <Col xs={4} >
              <Form.Group controlId="character9_pickup" className="mb-2" >
                  <Form.Label className="p-1 d-none" ></Form.Label>
                  <Form.Control 
                  className="text-center"
                  type="text"
                  placeholder="Pickup"
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
              ) : (
                ""
              )}
              {/* character10 */}
              {character10 ? (
                <Row className="mt-3">
                <Col xs={4}>
                <h5 className="pt-2" >{character10}</h5> 
                </Col>
              <Col xs={4} >
              <Form.Group controlId="character10_calltime" className="mb-0" >
                  <Form.Label className="p-1 d-none" ></Form.Label>
                  <Form.Control 
                  type="text"
                  className="text-center"
                  placeholder="Call Time"
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
              <Col xs={4} >
              <Form.Group controlId="character10_pickup" className="mb-2" >
                  <Form.Label className="p-1 d-none" ></Form.Label>
                  <Form.Control 
                  className="text-center"
                  type="text"
                  placeholder="Pickup"
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
              ) : (
                ""
              )}
              {/* character11 */}
              {character11 ? (
                <Row className="mt-3">
                <Col xs={4}>
                <h5 className="pt-2" >{character11}</h5> 
                </Col>
              <Col xs={4} >
              <Form.Group controlId="character11_calltime" className="mb-0" >
                  <Form.Label className="p-1 d-none" ></Form.Label>
                  <Form.Control 
                  type="text"
                  className="text-center"
                  placeholder="Call Time"
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
              <Col xs={4} >
              <Form.Group controlId="character11_pickup" className="mb-2" >
                  <Form.Label className="p-1 d-none" ></Form.Label>
                  <Form.Control 
                  className="text-center"
                  type="text"
                  placeholder="Pickup"
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
              ) : (
                ""
              )}
              {/* character12 */}
              {character12 ? (
                <Row className="mt-3">
                <Col xs={4}>
                <h5 className="pt-2" >{character12}</h5> 
                </Col>
              <Col xs={4} >
              <Form.Group controlId="character12_calltime" className="mb-0" >
                  <Form.Label className="p-1 d-none" ></Form.Label>
                  <Form.Control 
                  type="text"
                  className="text-center"
                  placeholder="Call Time"
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
              <Col xs={4} >
              <Form.Group controlId="character12_pickup" className="mb-2" >
                  <Form.Label className="p-1 d-none" ></Form.Label>
                  <Form.Control 
                  className="text-center"
                  type="text"
                  placeholder="Pickup"
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
              ) : (
                ""
              )}
              {/* other_characters */}
              {other_characters ? (
                <Row className="mt-3">
                <Col xs={4}>
                <h5 className="pt-2" >{other_characters}</h5> 
                </Col>
              <Col xs={4} >
              <Form.Group controlId="other_characters_calltimes" className="mb-0" >
                  <Form.Label className="p-1 d-none" ></Form.Label>
                  <Form.Control 
                  type="text"
                  as="textarea"
                  rows={2}
                  className="text-center"
                  placeholder="Call Time"
                  name="other_characters_calltimes"
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
              <Col xs={4} >
              <Form.Group controlId="other_characters_pickups" className="mb-2" >
                  <Form.Label className="p-1 d-none" ></Form.Label>
                  <Form.Control 
                  className="text-center"
                  type="text"
                  as="textarea"
                  rows={2}
                  placeholder="Pickup"
                  name="other_characters_pickups"
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
              ) : (
                ""
              )}
              {/* background_artists */}
              {background_artists ? (
                <Row className="mt-3">
                <Col xs={4}>
                <h5 className="pt-2" >{background_artists}</h5> 
                </Col>
              <Col xs={4} >
              <Form.Group controlId="background_artists_calltimes" className="mb-0" >
                  <Form.Label className="p-1 d-none" ></Form.Label>
                  <Form.Control 
                  type="text"
                  className="text-center"
                  as="textarea"
                  rows={2}
                  placeholder="Call Time"
                  name="background_artists_calltimes"
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
              <Col xs={4} >
              <Form.Group controlId="background_artists_pickups" className="mb-2" >
                  <Form.Label className="p-1 d-none" ></Form.Label>
                  <Form.Control 
                  className="text-center"
                  type="text"
                  as="textarea"
                  rows={2}
                  placeholder="Pickup"
                  name="background_artists_pickups"
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
              ) : (
                ""
              )}             
            {/* end characters */}
      </div>
  )
  const buttons = (
    <div className="text-center mt-4">    
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
            <TopBox title="Edit Schedule Scene"/>
           <Container className= {`text-center mt-4 ${appStyles.Content} ${styles.Container}`} >
            <Form onSubmit={handleSubmit}>
            <Row>
                <Col>
                  <h3>Scene {number} - {title} </h3>
                  <p style={{ textTransform: 'uppercase'}}>{int_ext}. {location} {day_night} </p>
                  <p>{action} </p>
                  <p>{content} </p>
                  <p>Info {info} </p>
                </Col>
              </Row>
              <Row>
              <Col xs={12} className="p-0 p-md-2">
                  <Container className= {`${appStyles.Content} ${styles.Container}`} >
                    {textFields}
                    {buttons}
                    </Container>
                </Col>
              </Row>
            </Form>
            </Container>
        </div>
    )
}

export default SceneScheduleEdit
