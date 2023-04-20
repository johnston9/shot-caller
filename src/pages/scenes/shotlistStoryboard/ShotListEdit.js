/* Form component in the Shot component to edit a Shot */
import React, { useEffect, useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Upload from "../../../assets/upload.png";
import styles from "../../../styles/Scene.module.css";
import appStyles from "../../../App.module.css";
import btnStyles from "../../../styles/Button.module.css";
import Image from "react-bootstrap/Image";
import Alert from "react-bootstrap/Alert";
import { axiosReq } from "../../../api/axiosDefaults";
import Asset2 from "../../../components/Asset2";

const ShotListEdit = ({handleMount, setShowEditForm, setShotNew, id}) => {
    const [errors, setErrors] = useState({});
    const [postData, setPostData] = useState({
        scene_id: "",
        scene_number: "",
        shot_number: "",
        size: "",
        angle: "",
        movement: "",
        screen_time: "",
        camera: "",
        lens: "",
        script_length: "",
        script_ref: "",
        storyboard_refs: "",
        description: "",
        equipment: "",
        fx: "",
        focus_pulls: "",
        lighting: "",
        audio: "",
        image: "",
    });

    const { 
        scene_id,
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

    const imageInput = useRef(null);

    useEffect(() => {
        const handleMount = async () => {
          try {
            const { data } = await axiosReq.get(`/shotlists/${id}/`);
            console.log(data)
            const { scene_id,
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
                    image, } = data;
     
            setPostData({
                scene_id,
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
                image, });
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

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
    
        formData.append("scene_id", scene_id);
        formData.append("scene_number", scene_number);
        formData.append("shot_number", shot_number);
        formData.append("size", size);
        formData.append("description", description);
        formData.append("angle", angle);
        formData.append("equipment", equipment);
        formData.append("movement", movement);
        formData.append("screen_time", screen_time);
        formData.append("fx", fx);
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
          const { data } = await axiosReq.put(`/shotlists/${id}/`, formData);
          setShowEditForm(false)
          setShotNew(data);
          console.log(data)
          handleMount();
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
            onClick={() => setShowEditForm((showEditForm) => !showEditForm)}
          >
            Cancel
          </Button>
          <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
            Create
          </Button>
        </div>
      );

    return (
        <div className={`${styles.ShotInfo} px-5`}>
          <h5 className="my-3 text-center">Edit Shot {shot_number} </h5>
            <Form className={`${styles.ShotEditForm}`} onSubmit={handleSubmit}>
            {/* number size act movement*/}
        <Row>
          <Col xs={3} >
          <Form.Group controlId="shot_number" className="mb-2" >
                <Form.Label className="p-1 d-none" >Number</Form.Label>
                <Form.Control 
                className={styles.Input}
                placeholder="Number"
                type="text"
                name="shot_number"
                value={shot_number}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.shot_number?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={3}>
            <Form.Group controlId="size" className="mb-2" >
                <Form.Label className="p-1 d-none" >Size</Form.Label>
                <Form.Control 
                className={styles.Input}
                placeholder="Size"
                type="text"
                name="size"
                value={size}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.size?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={3}>
            <Form.Group controlId="angle" className="mb-2" >
                <Form.Label className="p-1 d-none" >Angle</Form.Label>
                <Form.Control 
                className={styles.Input}
                placeholder="Angle"
                type="text"
                name="angle"
                value={angle}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.angle?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={3}>
            <Form.Group controlId="movement" className="mb-2" >
                <Form.Label className="p-1 d-none" >Movement</Form.Label>
                <Form.Control 
                className={styles.Input}
                placeholder="Movement"
                type="text"
                name="movement"
                value={movement}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.movement?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
        </Row>
        {/* description equip */}
        <Row>
        <Col xs={6}>
            <Form.Group controlId="description" className="mb-2" >
                <Form.Label className="p-1 d-none" >Description</Form.Label>
                <Form.Control 
                className={styles.InputArea}
                placeholder="Description"
                type="text"
                as="textarea"
                rows={2}
                name="description"
                value={description}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.description?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
        </Col>
        <Col xs={6}>
            <Form.Group controlId="equipment" className="mb-2" >
                <Form.Label className="d-none p-1" >Equipment</Form.Label>
                <Form.Control 
                className={styles.InputArea}
                placeholder="Equipment"
                type="text"
                as="textarea"
                rows={2}
                name="equipment"
                value={equipment}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.equipment?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
        </Col>
            </Row>
           {/* camera lens screen-time script-length*/}
           <p className="text-center">Extra Info</p>
           <Row>
          <Col xs={3} >
          <Form.Group controlId="camera" className="mb-2" >
                <Form.Label className="d-none p-1" >Camera</Form.Label>
                <Form.Control 
                className={styles.Input}
                placeholder="Camera"
                type="text"
                name="camera"
                value={camera}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.camera?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={3}>
            <Form.Group controlId="lens" className="mb-2" >
                <Form.Label className="d-none p-1" >Lens</Form.Label>
                <Form.Control 
                className={styles.Input}
                placeholder="Lens"
                type="text"
                name="lens"
                value={lens}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.lens?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={3}>
            <Form.Group controlId="screen_time" className="mb-2" >
                <Form.Label className="d-none p-1" >Screen Time</Form.Label>
                <Form.Control 
                className={styles.Input}
                placeholder="Screen Time"
                type="text"
                name="screen_time"
                value={screen_time}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.screen_time?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={3}>
            <Form.Group controlId="script_length" className="mb-2" >
                <Form.Label className="p-1 d-none" >Pages</Form.Label>
                <Form.Control 
                className={styles.Input}
                placeholder="Pages"
                type="text"
                name="script_length"
                value={script_length}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.script_length?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
        </Row>
        {/* lighting focus_pulls fx audio*/}
        <Row>
        <Col xs={3}>
            <Form.Group controlId="lighting" className="mb-2" >
                <Form.Label className="p-1 d-none" >Lighting</Form.Label>
                <Form.Control 
                className={styles.InputArea}
                placeholder="Lighting"
                type="text"
                as="textarea"
                rows={2}
                name="lighting"
                value={lighting}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.lighting?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
        </Col>
        <Col xs={3}>
            <Form.Group controlId="focus_pulls" className="mb-2" >
                <Form.Label className="d-none p-1" >Focus Pulls</Form.Label>
                <Form.Control 
                className={styles.InputArea}
                placeholder="Focus Pulls"
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
                <Form.Label className="d-none p-1" >FX</Form.Label>
                <Form.Control 
                className={styles.InputArea}
                placeholder="FX"
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
                <Form.Label className="p-1 d-none" >Audio</Form.Label>
                <Form.Control 
                className={styles.InputArea}
                placeholder="Audio"
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
                <Form.Label className="p-1 d-none" >Script Ref</Form.Label>
                <Form.Control 
                className={styles.Input}
                placeholder="Script Ref"
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
                <Form.Label className="p-1 d-none" >Storyboard Refs</Form.Label>
                <Form.Control 
                className={styles.Input}
                placeholder="Storyboard Ref"
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
              {/* image */}
              <Container
                      className={`${appStyles.Content} ${styles.Container2} mt-3 p-0 d-flex flex-column justify-content-center text-center`}
                      >
                  <Form.Group>
                    {image ? (
                      <>
                        <figure>
                          <Image className={appStyles.Image} src={image} rounded />
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
                        className=" my-1"
                        htmlFor="image-upload"
                      >
                        <Asset2
                          src={Upload}
                          height={30}
                          width={30}
                          message="Upload image"
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
                  {/* """ end image """" */}
              </Container>
            </Col>
        </Row>
        <Row>
          <Col className="my-3 text-center">
          {buttons}
          </Col>
        </Row>
        </Form>
        <hr className={styles.Blackish}/>
        </div>
    )
}

export default ShotListEdit
