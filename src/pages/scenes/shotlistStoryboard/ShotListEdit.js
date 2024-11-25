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
        scene_id,
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
              notes, } = data;
     
            setPostData({
                scene_id,
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
      });
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
        <div className={`${styles.White} pt-1 px-5`}>
        <h5 className="my-3 text-center">Edit Shot {shot_number} </h5>
        <Form className={`${styles.ShotEditForm} text-center`} onSubmit={handleSubmit}>
        {/* number */}
        <Row>
          <Col xs={{span: 4, offset: 4 }} >
          <Form.Group controlId="shot_number" className="mb-2" >
                <Form.Label className="p-1" >Number</Form.Label>
                <Form.Control 
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
        </Row>
        <hr/>
        {/* size angle movement frame_rate */}
        <Row>
            <Col xs={3}>
            <Form.Group controlId="size" className="mb-2" >
                <Form.Label className="p-1" >Size</Form.Label>
                <Form.Control 
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
                <Form.Label className="p-1" >Angle</Form.Label>
                <Form.Control 
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
                <Form.Label className="p-1" >Movement</Form.Label>
                <Form.Control 
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
            <Col xs={3}>
            <Form.Group controlId="frame_rate" className="mb-2" >
                <Form.Label className="p-1" >Frame Rate</Form.Label>
                <Form.Control 
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
        <hr/>
        {/* camera lens Int/Ext Day/Night*/}
        <Row>
            <Col xs={3} >
            <Form.Group controlId="camera" className="mb-2" >
                <Form.Label className="p-1" >Camera</Form.Label>
                <Form.Control 
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
                <Form.Label className="p-1" >Lens</Form.Label>
                <Form.Control 
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
            <Col xs={3} >         
            <Form.Group controlId="int_ext" className="mb-2" >
                <Form.Label className="p-1">Int-Ext</Form.Label>
                <Form.Control as="select"
                  className={styles.Input}
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
            <Col xs={3} >
            <Form.Group controlId="day_night" className="mb-2" >
                <Form.Label >Day/Night</Form.Label>
                <Form.Control as="select"
                  name="day_night"
                  className={styles.Input}
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
        </Row>
        <hr/>
        {/* lighting focus_pulls fx audio*/}
        <Row>
        <Col xs={3}>
            <Form.Group controlId="lighting" className="mb-2" >
                <Form.Label className="p-1" >Lighting</Form.Label>
                <Form.Control 
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
        <hr/>
        {/* location framing script ref story ref */}
        <Row>
          <Col xs={3} >
          <Form.Group controlId="location" className="mb-2" >
                <Form.Label className="p-1" >Location</Form.Label>
                <Form.Control 
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
          <Col xs={3} >
          <Form.Group controlId="framing" className="mb-2" >
                <Form.Label className="p-1" >Framing</Form.Label>
                <Form.Control 
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
          <Col xs={3} >
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
          </Col>
          <Col xs={3} >
            <Form.Group controlId="storyboard_refs" className="mb-2" >
                <Form.Label className="p-1" >Storyboard Ref</Form.Label>
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
        </Row>
        <hr/>
        {/* actors notes */}
        <Row>
        <Col xs={6}>
            <Form.Group controlId="actors" className="mb-2" >
                <Form.Label className="p-1" >Actors</Form.Label>
                <Form.Control 
                type="text"
                as="textarea"
                rows={2}
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
        <Col xs={6}>
            <Form.Group controlId="notes" className="mb-2" >
                <Form.Label className="p-1" >Notes</Form.Label>
                <Form.Control 
                type="text"
                as="textarea"
                rows={2}
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
        <hr/>  
        {/* image */}
        <Row>
        <Col className="text-center" md={{span: 6, offset: 3 } } >
          <p>Sketch/Image</p>
          <Container
                  className={`${appStyles.Content} mt-3 py-5 d-flex flex-column justify-content-center`}
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
        <hr/>
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
