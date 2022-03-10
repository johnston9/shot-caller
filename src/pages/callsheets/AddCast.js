import React, { useRef, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import Upload from "../../assets/upload.png";
import styles from "../../styles/PostCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import Image from "react-bootstrap/Image";
import Alert from "react-bootstrap/Alert";

import { useHistory, useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import { useRedirect } from "../../hooks/Redirect";
import Asset2 from "../../components/Asset2";

const AddCast = ({setShowAddCast}) => {
    useRedirect("loggedOut");
    const { id } = useParams();
    const {number} = scene; 
    const [errors, setErrors] = useState({});

    const [postData, setPostData] = useState({
        scene_number: number,
        shot_number: "",
        size: "",
        angle: "",
        movement: "",
        screen_time: "",
        camera: "",
        lens: "",
        script_length: "",
        description: "",
        equipment: "",
        script_ref: "",
        storyboard_refs: "",
        fx: "",
        focus_pulls: "",
        lighting: "",
        audio: "",
        image: "",
    });

    const { 
        scene_number,
        shot_number,
        size,
        angle,
        movement,
        screen_time,
        camera,
        lens,
        script_length,
        script_ref,
        storyboard_refs,
        description,
        equipment,
        fx,
        focus_pulls,
        lighting,
        audio,
        image,
    } = postData;

    const history = useHistory();

    const handleChange = (event) => {
        setPostData({
          ...postData,
          [event.target.name]: event.target.value,
        });
      };

      const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
    
        formData.append("scene_id", id);
        formData.append("cast_number", cast_number);
        formData.append("role", role);
        formData.append("artist", artist);
        formData.append("contact", contact);
        formData.append("swf", swf);
        formData.append("pickup", pickup);
        formData.append("call", vall);
        formData.append("hmw", hmw);
        formData.append("on_set", on_set);
        formData.append("inst", inst);
        formData.append("focus_pulls", focus_pulls);
        formData.append("lighting", lighting);
        formData.append("camera", camera);
        formData.append("lens", lens);
        formData.append("script_length", script_length);
        formData.append("script_ref", script_ref);
        formData.append("storyboard_refs", storyboard_refs);
        formData.append("audio", audio);
        if(imageInput.current.files[0]) {
          formData.append("image", imageInput.current.files[0]);
        }
      
        try {
          const { data } = await axiosReq.post("/castcalls/", formData);
          setShowAddCast((showAddCast) => !showAddCast)
        //   setShotlist((prevShotlist) => ({
        //     ...prevShotlist,
        //     results: [data, ...prevShotlist.results],
        //   }));
        } catch (err) {
          console.log(err);
          if (err.response?.status !== 401) {
            setErrors(err.response?.data);
          }
        }
      }
    const buttons = (
      <div className="text-center">    
        <Button
          className={`${btnStyles.Button} ${btnStyles.Blue}`}
          onClick={() => setShowAddCast(showAddCast => !showAddCast)}
        >
          Cancel
        </Button>
        <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
          Create
        </Button>
      </div>
    );

  return (
    <div>
      <h3 className="text-center mt-3"> Add Cast</h3>
      <p>Enter each cast member from their first scheduled scene</p>
      <Form onSubmit={handleSubmit}>
            {/* number size act movement*/}
        <Row>
          <Col xs={1} >
          <Form.Group controlId="cast_number" className="mb-2" >
                <Form.Label className="p-1" >Number</Form.Label>
                <Form.Control 
                type="text"
                name="cast_number"
                value={cast_number}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.cast_number?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={2}>
            <Form.Group controlId="role" className="mb-2" >
                <Form.Label className="p-1" >Role</Form.Label>
                <Form.Control 
                type="text"
                name="role"
                value={role}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.role?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={2}>
            <Form.Group controlId="artist" className="mb-2" >
                <Form.Label className="p-1" >Artist</Form.Label>
                <Form.Control 
                type="text"
                name="artist"
                value={artist}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.artist?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={2}>
            <Form.Group controlId="contact" className="mb-2" >
                <Form.Label className="p-1" >Contact</Form.Label>
                <Form.Control 
                type="text"
                name="contact"
                value={contact}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.contact?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
        </Row>
        {/* swf equip */}
        <Row>
        <Col xs={2}>
            <Form.Group controlId="swf" className="mb-2" >
                <Form.Label className="p-1" >SWF</Form.Label>
                <Form.Control 
                type="text"
                name="swf"
                value={swf}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.swf?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
        </Col>
        <Col xs={2}>
            <Form.Group controlId="pickup" className="mb-2" >
                <Form.Label className="p-1" >Pickup</Form.Label>
                <Form.Control 
                type="text"
                name="pickup"
                value={pickup}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.pickup?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
        </Col>
          <Col xs={2} >
          <Form.Group controlId="call" className="mb-2" >
                <Form.Label className="p-1" >Call</Form.Label>
                <Form.Control 
                type="text"
                name="call"
                value={call}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.call?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={2}>
            <Form.Group controlId="hmw" className="mb-2" >
                <Form.Label className="p-1" >H/M/W</Form.Label>
                <Form.Control 
                type="text"
                name="hmw"
                value={hmw}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.hmw?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={2}>
            <Form.Group controlId="on_set" className="mb-2" >
                <Form.Label className="p-1" >On Set</Form.Label>
                <Form.Control 
                type="text"
                name="on_set"
                value={on_set}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.on_set?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>

        <Col xs={2}>
            <Form.Group controlId="inst" className="mb-2" >
                <Form.Label className="p-1" >Inst. misc.</Form.Label>
                <Form.Control 
                type="text"
                name="inst"
                value={inst}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.inst?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
        </Col>
        <Col xs={3}>
            <Form.Group controlId="focus_pulls" className="mb-2" >
                <Form.Label className="p-1" >Focus Pulls</Form.Label>
                <Form.Control 
                type="text"
                as="textarea"
                rows={2}
                name="focus_pulls"
                value={focus_pulls}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.focus_pulls?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
        </Col>
        <Col xs={3}>
            <Form.Group controlId="fx" className="mb-2" >
                <Form.Label className="p-1" >FX</Form.Label>
                <Form.Control 
                type="text"
                as="textarea"
                rows={2}
                name="fx"
                value={fx}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.fx?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
        </Col>
        <Col xs={3}>
            <Form.Group controlId="audio" className="mb-2" >
                <Form.Label className="p-1" >Audio</Form.Label>
                <Form.Control 
                type="text"
                as="textarea"
                rows={2}
                name="audio"
                value={audio}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.audio?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
        </Col>
            </Row>
            <Row>
          <Col xs={6} >
          <Form.Group controlId="script_ref" className="mb-2" >
                <Form.Label className="p-1" >Script Ref</Form.Label>
                <Form.Control 
                type="text"
                name="script_ref"
                value={script_ref}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.script_ref?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            <Form.Group controlId="storyboard_refs" className="mb-2" >
                <Form.Label className="p-1" >Storyboard Refs</Form.Label>
                <Form.Control 
                type="text"
                name="storyboard_refs"
                value={storyboard_refs}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.storyboard_refs?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={6}>
            </Col>
        </Row>
        <Row>
          <Col md={6} className='text-center'>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
          <div className= {`mt-3 `} >{buttons}</div>
          </Col>
        </Row>
        </Form>

    </div>
  )
}

export default AddCast