/* Component in IndexShot to edit an IndexShot */
import React, { useEffect, useRef, useState } from "react";

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

import { axiosReq } from "../../api/axiosDefaults";
import { Image } from "react-bootstrap";
import { toast } from 'react-toastify';

const IndexShotEdit = ({setShowEdit, shot, setIndexShots, id, ser_id} ) => {
  const [errors, setErrors] = useState({});

  const [postData, setPostData] = useState({
    // series_id: "",
    // series_name: "",
    number: "",
    content: "",
    image: "",
  });

  const {
    number,
    content,
    image, } = postData;

  useEffect(() => {
    /* Function to set the postData state */
    const handleMount = async () => {
      const { number, content, image } = shot;
      setPostData({ number, content, image})
    };
  
    handleMount();
  }, [shot]);

  const imageInput = useRef(null);

  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
    console.log(event.target.value)
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

    formData.append("series_id", ser_id);
    formData.append("number", number);
    formData.append("content", content);
    if(imageInput.current.files[0]) {
      formData.append("image", imageInput.current.files[0]);
    }
  
    try {
      const {data} = await axiosReq.put(`/indexshots/${id}/`, formData);
      const {number, content, image} = data;
      setIndexShots((prevShots) => ({
        ...prevShots,
        results: prevShots.results.map((shot) => {
          return shot.id === id
            ? {
                ...shot,
                number: number,
                content: content,
                image: image,
              }
            : shot;
        }),
      }));
      toast.success(`Index Shot "${number}" Updated`);
      setShowEdit(false);
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
        className={`${btnStyles.Button} ${btnStyles.Blue} mr-2`}
        onClick={() => setShowEdit(false)}
      >
        Cancel
      </Button>
      <Button 
      className={`${btnStyles.Button} ${btnStyles.Blue} mr-2 px-4`} 
      type="submit">
        Edit
      </Button>
    </div>
  );

  return (
    <div className="mt-0">
    <div className= {`text-center mt-0 ${styles.Editbox}`} >
    <Form className="mt-0 mx-0 px-0" onSubmit={handleSubmit}>
      <h5 className={`text-center mb-0 py-0 ${styles.SubTitle }`}
             style={{ textTransform: 'uppercase'}}>Edit Shot</h5>
      <Row>
      <Col xs={12} className="p-0 d-flex justify-content-center">
        <Container
          className={`${appStyles.Content2} ${styles.Container} 
          d-flex flex-column justify-content-center`}>
          <Form.Group className="text-center p-0 m-0">
              {image ? (
                  <>
                  <figure>
                      <Image className={appStyles.Image} 
                        src={image} rounded />
                  </figure>
                  <div>
                      <Form.Label
                      className={`px-3 m-0 ${btnStyles.Button} ${btnStyles.Blue} btn`}
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
          <Col xs={{span: 6, offset: 3}} className="d-flex justify-content-center" >
          <Form.Group controlId="number" className={`${styles.Width2} text-center`}  >
                  <Form.Label className={`pb-0 mb-0 ${styles.Bold} `} >Number</Form.Label>
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
        </Row>
        <Row>
        <Col xs={12} className="p-0 d-flex justify-content-center">
            <Form.Group controlId="content" className={`${styles.Width100} `} >
                        <Form.Label className={`${styles.Bold}`} >Content</Form.Label>
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
        </Col> 
      </Row>
      <Row>
        <Col>
          <div className= {` my-0`} >{buttons} </div>
        </Col>
      </Row>
    </Form>
    </div>
    </div>
  )
}

export default IndexShotEdit