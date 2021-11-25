import React, { useRef, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Asset from "../../components/Asset";

import Upload from "../../assets/upload.png";

import styles from "../../styles/PostCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import { Image } from "react-bootstrap";
import { useHistory } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import TopBox from "../../components/TopBox";

function SceneCreateForm() {
  const [errors, setErrors] = useState({});
    const [postData, setPostData] = useState({
        number: "",
        title: "",
        int_ext: "",
        time: "",
        location: "",
        characters: "",
        action: "",
        content: "",
        shotlist: "",
        storyboard: "",
        info: "",
        image: "",
      });
      const { number, title, int_ext, location,
        characters, action, content, shotlist, 
        storyboard, info, image } = postData;

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("number", number);
    formData.append("title", title);
    formData.append("int_ext", int_ext);
    formData.append("location", location);
    formData.append("characters", characters);
    formData.append("action", action);
    formData.append("content", content);
    formData.append("shotlist", shotlist);
    // formData.append("storyboard", storyboard);
    formData.append("info", info);
    formData.append("image", imageInput.current.files[0]);  
    formData.append("storyboard", storyboardInput.current.files[0]); 
    try {
      const { data } = await axiosReq.post("/scenes/", formData);
      history.push(`/`);
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  }

  const textFields = (
      <div>
          <Form.Group controlId="number" className="mb-2" >
                <Form.Label className="p-1" >Number</Form.Label>
                <Form.Control 
                type="text"
                name="number"
                value={number}
                onChange={handleChange}
                    />
            </Form.Group>
            <Form.Group controlId="title" className="mb-2" >
                <Form.Label className="p-1" >Title</Form.Label>
                <Form.Control 
                type="text"
                name="title"
                value={title}
                onChange={handleChange}
                    />
            </Form.Group>
            <Form.Group controlId="int_ext" className="mb-2" >
                <Form.Label className="p-1" >Int-Ext</Form.Label>
                <Form.Control as="select"
                  name="int_ext"
                  value={int_ext}
                  onChange={handleChange}
                  aria-label="int ext select">
                  <option>Select</option>
                  <option value="int">Int</option>
                  <option value="2">Ext</option>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="location" className="mb-2" >
                <Form.Label className="p-1" >Location</Form.Label>
                <Form.Control 
                type="text"
                name="location"
                value={location}
                onChange={handleChange}
                    />
            </Form.Group>
            <Form.Group controlId="characters" className="mb-2" >
                <Form.Label className="p-1" >Characters</Form.Label>
                <Form.Control 
                type="text"
                name="characters"
                value={characters}
                onChange={handleChange}
                    />
            </Form.Group>
            <Form.Group controlId="action" className="mb-2" >
                <Form.Label className="p-1" >Action</Form.Label>
                <Form.Control 
                type="text"
                name="action"
                value={action}
                onChange={handleChange}
                    />
            </Form.Group>
            <Form.Group controlId="content" className="mb-2" >
                <Form.Label className="p-1" >Content</Form.Label>
                <Form.Control 
                    className={styles.Input}
                    type="text"
                    name="content"
                    as="textarea"
                    rows={6}
                    value={content}
                    onChange={handleChange}
                    />
            </Form.Group>
            <Form.Group controlId="shotlist" className="mb-2" >
                <Form.Label className="p-1" >Shot List</Form.Label>
                <Form.Control 
                    className={styles.Input}
                    type="text"
                    name="shotlist"
                    as="textarea"
                    rows={6}
                    value={shotlist}
                    onChange={handleChange}
                    />
            </Form.Group>
            {/* <Form.Group controlId="storyboard" className="mb-2" >
                <Form.Label className="p-1" >storyboard</Form.Label>
                <Form.Control 
                    className={styles.Input}
                    type="text"
                    name="storyboard"
                    value={storyboard}
                    onChange={handleChange}
                    />
            </Form.Group> */}
            <Form.Group controlId="info" className="mb-2" >
                <Form.Label className="p-1" >Info</Form.Label>
                <Form.Control 
                    className={styles.Input}
                    type="text"
                    name="info"
                    value={info}
                    onChange={handleChange}
                    />
            </Form.Group>

      </div>
  )
  const buttons = (
    <div className="text-center">    
      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue}`}
        onClick={() => {}}
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
    <TopBox title="Create Scene" />
    <Form onSubmit={handleSubmit}>
    <Row>
    <Col md={6} className="d-none d-md-block p-0 p-md-2">
        <Container className= {`${appStyles.Content} ${styles.Container}`} >{textFields}</Container>
        <Container className= {`${styles.Container} mt-3`} >{buttons} </Container>
      </Col>
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
        </Container>
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
            </Container>
      </Col>   
    </Row>
  </Form>
  </div>
  );
}

export default SceneCreateForm;