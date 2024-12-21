/* Component in IndexShotsPage to create an IndexShot */
import React, { useState, useRef } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import styles from "../../styles/Indexes.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";

import Upload from "../../assets/upload.png";
import Alert from "react-bootstrap/Alert";
import Asset from "../../components/Asset";
import { useParams } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import { Image } from "react-bootstrap";
import { toast } from 'react-toastify';

const IndexShotCreate = ({setShow, setHasOrder, seriesName} ) => {
  const [errors, setErrors] = useState({});
  const { id } = useParams();
  const [postData, setPostData] = useState({
    number: "",
    content: "",
    image: "",
  });

  const {
    number,
    content,
    image, } = postData;

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

    formData.append("series_id", id);
    formData.append("series_name", seriesName);
    formData.append("number", number);
    formData.append("content", content);
    if(imageInput.current.files[0]) {
      formData.append("image", imageInput.current.files[0]);
    }
  
    try {
      await axiosReq.post("/indexshots/", formData);
      console.log(formData);
      setHasOrder(true);
      toast.success(`Index Shot "${number}" Added`);
      setShow(false);
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
        className={`${btnStyles.Button} ${btnStyles.Blue} mr-3 px-4`}
        onClick={() => setShow(false)}
      >
        Cancel
      </Button>
      <Button className={`${btnStyles.Button} ${btnStyles.Blue} ml-3 px-4`} type="submit">
        Create
      </Button>
    </div>
  );

  return (
    <div className="mt-3">
    <Row>
    <Col xs={12} md={{span: 8, offset: 2}}>
    <h5 className={`text-center ${styles.SubTitle }`}
             style={{ textTransform: 'uppercase'}}>Create Index Shot</h5>
      <Form className={`text-center mb-4 px-3 ${styles.Back }`} 
      onSubmit={handleSubmit}>
      <Row>
          <Col xs={12} md={6}  >
          <div className="d-flex justify-content-center">
          <Form.Group controlId="number" className={`${styles.Width} text-center`}  >
                  <Form.Label className={`${styles.BoldScene} `} >Number</Form.Label>
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
          </div>
          <div className="d-flex justify-content-center">
          <Form.Group controlId="content" className={`${styles.Width90}  text-center`} >
                        <Form.Label className={`${styles.BoldScene}`} >Content</Form.Label>
                        <Form.Control 
                        type="text"
                        className={styles.InputScene}
                        as="textarea"
                        name="content"
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
          </div>
          </Col>
        <Col xs={12} md={6} >
        <Container
          className={`${appStyles.Content2} ${styles.Container} 
          d-flex flex-column justify-content-center mt-2`}>
          <Form.Group className="text-center pt-3">
              {image ? (
                  <>
                  <figure>
                      <Image className={appStyles.Image} 
                        src={image} rounded />
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
                      message="Upload Image"
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
      </Row>
      <Row>
        <Col>
          <div className= {` my-3`} >{buttons} </div>
        </Col>
      </Row>
    </Form>
    </Col>
    </Row>
    </div>
  )
}

export default IndexShotCreate