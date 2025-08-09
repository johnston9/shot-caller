/* Form component in the ShotlistPage component to create a Shot */
import React, { useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Upload from "../../../assets/upload.png";
import styles from "../../../styles/PostCreateEditForm.module.css";
import appStyles from "../../../App.module.css";
import btnStyles from "../../../styles/Button.module.css";
import Alert from "react-bootstrap/Alert";
import { useParams } from "react-router-dom";
import { axiosReq } from "../../../api/axiosDefaults";
import Asset2 from "../../../components/Asset2";
import { toast } from 'react-toastify';

const ShotListCreate = ({setAddShot, scene, setShotlist }) => {
    const { id } = useParams();
    const {number} = scene; 
    const [errors, setErrors] = useState({});
    
    const [postData, setPostData] = useState({
        scene_number: number,
        shot_number: "",
        size: "",
        angle: "",
        movement: "",
        camera: "",
        lens: "",
        description: "",
        equipment: "",
        script_ref: "",
        storyboard_refs: "",
        fx: "",
        focus_pulls: "",
        lighting: "",
        audio: "",
        image: "",
        framing: "",
        int_ext: "",
        day_night: "",
        frame_rate: "",
        location: "",
        actors: "",
        notes: "",
    });

    const { 
        scene_number,
        shot_number,
        size,
        angle,
        movement,
        camera,
        lens,
        script_ref,
        storyboard_refs,
        description,
        equipment,
        fx,
        focus_pulls,
        lighting,
        audio,
        image,
        framing,
        int_ext,
        day_night,
        frame_rate,
        location,
        actors,
        notes,
    } = postData;

    const imageInput = useRef(null);

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
        formData.append("scene_id", id);
        formData.append("scene_number", scene_number);
        formData.append("shot_number", shot_number);
        formData.append("size", size);
        formData.append("description", description);
        formData.append("angle", angle);
        formData.append("equipment", equipment);
        formData.append("movement", movement);
        formData.append("fx", fx);
        formData.append("focus_pulls", focus_pulls);
        formData.append("lighting", lighting);
        formData.append("camera", camera);
        formData.append("lens", lens);
        formData.append("script_ref", script_ref);
        formData.append("storyboard_refs", storyboard_refs);
        formData.append("audio", audio);
        formData.append("framing", framing);
        formData.append("int_ext", int_ext);
        formData.append("day_night", day_night);
        formData.append("frame_rate", frame_rate);
        formData.append("location", location);
        formData.append("actors", actors);
        formData.append("notes", notes);
        if(imageInput.current.files[0]) {
          formData.append("image", imageInput.current.files[0]);
        }
      
        try {
          const { data } = await axiosReq.post("/shotlists/", formData);
          setAddShot((addShot) => !addShot);
          toast.success(`Shot "${shot_number}" Added`);
          setShotlist((prevShotlist) => ({
          /* Update the shotList state */
            ...prevShotlist,
            results: [data, ...prevShotlist.results],
          }));
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
          className={`${btnStyles.Button} ${btnStyles.Blue} px-sm-5 mr-3`}
          onClick={() => setAddShot(false)}
        >
          Cancel
        </Button>
        <Button className={`${btnStyles.Button} ${btnStyles.Blue} px-sm-5 ml-3`} type="submit">
          Create
        </Button>
      </div>
    );

    return (
        <div className={`px-3 mb-0 mt-4 ${styles.White }`} >
        <h5 className={` pl-5 ${styles.SubTitle }`}>
          ADD SHOT
          <span className={`float-right ${styles.Close } pt-1`} 
                onClick={() => setAddShot(false) } >Close</span>
        </h5>
        <Form onSubmit={handleSubmit}className="text-center" >
        {/* number */}
        <Row className="mt-1" >
          <Col xs={{span: 4, offset: 4}} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="shot_number" className="mb-2" >
                <Form.Label className={`${styles.BoldScene}`} >Number</Form.Label>
                <Form.Control 
                type="text"
                className={styles.Input}
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
        </Row>
        {/* hr */}
        <hr className={`mt-2 mb-2`}/>
        {/* description Subject equipment */}
        <Row className="mt-0">
        <Col xs={12} md={4} className="d-flex justify-content-center p-0 p-md-2">
            <Form.Group controlId="description" className={`${styles.Width2}`} >
                <Form.Label className={`${styles.BoldScene}`} >Description</Form.Label>
                <Form.Control 
                className={styles.InputScene}
                type="text"
                as="textarea"
                rows={1}
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
        <Col xs={12} md={4} className="d-flex justify-content-center p-0 p-md-2">
            <Form.Group controlId="actors" className={`${styles.Width2}`} >
                <Form.Label className={`${styles.BoldScene}`}>Subject</Form.Label>
                <Form.Control 
                className={styles.InputScene}
                type="text"
                as="textarea"
                rows={1}
                name="actors"
                value={actors}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.actors?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
        </Col>
        <Col xs={12} md={4} className="d-flex justify-content-center p-0 p-md-2">
            <Form.Group controlId="equipment" className={`${styles.Width2}`} >
                <Form.Label className={`${styles.BoldScene}`} >Equipment</Form.Label>
                <Form.Control 
                className={styles.InputScene}
                type="text"
                as="textarea"
                rows={1}
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
        {/* hr */}
        <hr className={`mt-2 mb-2`}/>
        {/* size framing movement audio */}
        <Row >
        <Col xs={6} md={3} className="d-flex justify-content-center p-0 p-md-2">
        <Form.Group controlId="size" className={`${styles.Width2}`} >
            <Form.Label className={`${styles.BoldScene}`} >Size</Form.Label>
            <Form.Control 
            className={styles.Input}
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
        <Col xs={6} md={3} className="d-flex justify-content-center p-0 p-md-2">
        <Form.Group controlId="framing" className={`${styles.Width2}`} >
              <Form.Label className={`${styles.BoldScene}`} >Framing</Form.Label>
              <Form.Control 
              className={styles.Input}
              type="text"
              name="framing"
              value={framing}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.framing?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
        </Col>
        <Col xs={6} md={3} className="d-flex justify-content-center p-0 p-md-2">
        <Form.Group controlId="angle" className={`${styles.Width2} `} >
            <Form.Label className={`${styles.BoldScene}`} >Angle</Form.Label>
            <Form.Control 
            className={styles.Input}
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
        <Col xs={6} md={3} className="d-flex justify-content-center p-0 p-md-2">
        <Form.Group controlId="movement" className={`${styles.Width2} `}>
            <Form.Label className={`${styles.BoldScene}`} >Movement</Form.Label>
            <Form.Control 
            className={styles.Input}
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
        {/* hr */}
        <hr className={`mt-2 mb-2`}/>
        {/* location Int/Ext Day/Night Audio*/}
        <Row >
        <Col xs={6} md={3} className="d-flex justify-content-center p-0 p-md-2">         
        <Form.Group controlId="int_ext" className={`${styles.Width2}`}>
            <Form.Label className={`${styles.BoldScene}`}>Int-Ext</Form.Label>
            <Form.Control as="select"
              className={styles.InputEx}
              name="int_ext"
              value={int_ext}
              onChange={handleChange}
              aria-label="int ext select">
              <option></option>
              <option value="INT.">Int</option>
              <option value="EXT.">Ext</option>
            </Form.Control>
        </Form.Group>
        {errors?.int_ext?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}
        </Col>
        <Col xs={6} md={3} className="d-flex justify-content-center p-0 p-md-2">
        <Form.Group controlId="day_night" className={`${styles.Width2}`}>
            <Form.Label className={`${styles.BoldScene}`}>Day/Night</Form.Label>
            <Form.Control as="select"
              name="day_night"
              className={styles.InputEx}
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
        <Col xs={6} md={3} className="d-flex justify-content-center p-0 p-md-2">
        <Form.Group controlId="location" className={`${styles.Width2}`} >
                <Form.Label className={`${styles.BoldScene}`} >Location</Form.Label>
                <Form.Control 
                className={styles.Input}
                type="text"
                name="location"
                value={location}
                onChange={handleChange}
                    />
          </Form.Group>
          {errors?.location?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
        </Col>
        <Col xs={6} md={3} className="d-flex justify-content-center p-0 p-md-2">
            <Form.Group controlId="audio" className={`${styles.Width2}`} >
                <Form.Label className={`${styles.BoldScene}`} >Audio</Form.Label>
                <Form.Control 
                className={styles.Input}
                type="text"
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
        {/* hr */}
        <hr className={`mt-2 mb-2`}/>
        {/* camera lens script ref story ref */}
        <Row >
        <Col xs={6} md={3} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="camera" className={`${styles.Width2}`} >
              <Form.Label className={`${styles.BoldScene}`} >Camera</Form.Label>
              <Form.Control 
              className={styles.Input}
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
        <Col xs={6} md={3}className="d-flex justify-content-center p-0 p-md-2">
        <Form.Group controlId="lens" className={`${styles.Width2}`} >
            <Form.Label className={`${styles.BoldScene}`} >Lens</Form.Label>
            <Form.Control 
            className={styles.Input}
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
        <Col xs={6} md={3} className="d-flex justify-content-center p-0 p-md-2">
        <Form.Group controlId="script_ref" className={`${styles.Width2}`}>
              <Form.Label className={`${styles.BoldScene}`} >Script Ref</Form.Label>
              <Form.Control 
              className={styles.Input}
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
        </Col>
        <Col xs={6} md={3} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="storyboard_refs" className={`${styles.Width2}`} >
              <Form.Label className={`${styles.BoldScene}`} >Storyboard Ref</Form.Label>
              <Form.Control 
              className={styles.Input}
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
        </Row>
        {/* hr */}
        <hr className={`mt-1 mb-1`}/>
        {/* lighting focus_pulls fx frame rate*/}
        <Row >
        <Col xs={12} md={3} className="d-flex justify-content-center p-0 p-md-2">
            <Form.Group controlId="lighting" className={`${styles.Width2}`} >
                <Form.Label className={`${styles.BoldScene}`} >Lighting</Form.Label>
                <Form.Control 
                className={styles.InputScene}
                type="text"
                as="textarea"
                rows={1}
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
        <Col xs={12} md={3} className="d-flex justify-content-center p-0 p-md-2">
            <Form.Group controlId="focus_pulls" className={`${styles.Width2}`}>
                <Form.Label className={`${styles.BoldScene}`} >Focus Pulls</Form.Label>
                <Form.Control 
                className={styles.InputScene}
                type="text"
                as="textarea"
                rows={1}
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
        <Col xs={12} md={3} className="d-flex justify-content-center p-0 p-md-2">
            <Form.Group controlId="fx" className={`${styles.Width2}`} >
                <Form.Label className={`${styles.BoldScene}`} >FX/VFX</Form.Label>
                <Form.Control 
                className={styles.InputScene}
                type="text"
                as="textarea"
                rows={1}
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
        <Col xs={12} md={3} className="d-flex justify-content-center p-0 p-md-2">
            <Form.Group controlId="frame_rate" className={`${styles.Width2} `}>
                <Form.Label className={`${styles.BoldScene}`}>Frame Rate</Form.Label>
                <Form.Control 
                className={styles.Input}
                type="text"
                name="frame_rate"
                value={frame_rate}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.frame_rate?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
        </Row>
        {/* hr */}
        <hr className={`mt-2 mb-2`}/>
        {/* notes */}
        <Row >
        <Col xs={12} md={{span: 8, offset: 2}} className="d-flex justify-content-center p-0 p-md-2">
            <Form.Group controlId="notes" className={`${styles.Width2}`} >
                <Form.Label className={`${styles.BoldScene}`} >Notes</Form.Label>
                <Form.Control 
                className={styles.InputScene}
                type="text"
                as="textarea"
                rows={1}
                name="notes"
                value={notes}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.notes?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
        </Col>
        </Row>
        {/* hr */}
        <hr className={`mt-2 mb-2`}/>
        {/* image */}
        <Row >
        <Col className="text-center p-0 p-md-2" xs={12} md={{span: 6, offset: 3 } } >
          <p className={`${styles.BoldScene}`}>Sketch/Image</p>
          <Container
                  className={`${appStyles.Content} px-0 d-flex flex-column justify-content-center`}
                  >
              <Form.Group>
                {image ? (
                  <>
                    <figure>
                      <iframe className={appStyles.iframe} 
                      title="Sketch/Image" alt="Sketch/Image" src={image} rounded />
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
                      height={"50px"}
                      width={"50px"}
                      message="Upload Image"
                    />
                  </Form.Label>
                )}
  
                <Form.Control
                  type="file"
                  id="image-upload"
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
        <hr className="mt-0"/>
        <Row>
        <Col className="text-center mt-3 pb-3">
          {buttons}
        </Col>
        </Row>
        </Form>
        <Row className='mt-5'>
        <Col xs={2} ></Col>
        <Col xs={8}>
        <hr className={`${styles.Break}`}/>
        </Col>
        </Row>  
        </div>
    )
}

export default ShotListCreate
