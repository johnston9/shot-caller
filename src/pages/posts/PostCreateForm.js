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

function PostCreateForm() {
    const [postData, setPostData] = useState({
        title: "",
        content: "",
        image1: "",
        image2: "",
      });
      const { title, content, image1, image2 } = postData;
      const imageInput1 = useRef(null)
      const imageInput2 = useRef(null)
    
      const handleChange = (event) => {
        setPostData({
          ...postData,
          [event.target.name]: event.target.value,
        });
      };

      const handleChangeImage1 = (event) => {
        if (event.target.files.length) {
          URL.revokeObjectURL(image1);
          setPostData({
            ...postData,
            image1: URL.createObjectURL(event.target.files[0]),
          });
          console.log(`image11 ${image1}`)
        }
      };

      const ge2 = (event) => {
        if (event.target.files.length) {
          URL.revokeObjectURL(image2);
          setPostData({
            ...postData,
            image2: URL.createObjectURL(event.target.files[0]),
          });
          console.log(`image21 ${image2}`)
        }
      };

  const [errors, setErrors] = useState({});

  const textFields = (
      <div>
          <Form.Group controlId="title" className="mb-2" >
                <Form.Label className="p-1" >Title</Form.Label>
                <Form.Control 
                type="text"
                name="title"
                value={title}
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
    <Form>
    <Row>
    <Col md={6} className="d-none d-md-block p-0 p-md-2">
        <Container className= {`${appStyles.Content} ${styles.Container}`} >{textFields}</Container>
        <Container className= {`${styles.Container} mt-3`} >{buttons} </Container>
      </Col>
      <Col className="py-2 p-0 p-md-2" md={6}>
        <Container
          className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
        >
          <Form.Group className="text-center pt-3">
              {image1 ? (
                <>
                  <figure>
                    <Image className={appStyles.Image} src={image1} rounded />
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
                onChange={handleChangeImage1}
                ref={imageInput1}
              />
            </Form.Group>
            </Container>
                {/* image 2 */}
            <Container
                className={`${appStyles.Content} ${styles.Container2} mt-3 p-0 d-flex flex-column justify-content-center`}
                >
            <Form.Group className="text-center">
              {image2 ? (
                <>
                  <figure>
                    <Image className={appStyles.Image} src={image2} rounded />
                  </figure>
                  <div>
                    <Form.Label
                      className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                      htmlFor="image-upload2"
                    >
                      Change the image
                    </Form.Label>
                  </div>
                </>
              ) : (
                <Form.Label
                  className="d-flex justify-content-center"
                  htmlFor="image-upload2"
                >
                  <Asset
                    src={Upload}
                    height={"20px"}
                    width={"20px"}
                    message="Click or tap to upload an image"
                  />
                </Form.Label>
              )}

              <Form.Control
                type="file"
                id="image-upload2"
                accept="image/*"
                onChange={ge2}
                ref={imageInput2}
              />
            </Form.Group>
            {/* """ end image 2 """" */}
        </Container>
      </Col>   
    </Row>
  </Form>
  );
}

export default PostCreateForm;