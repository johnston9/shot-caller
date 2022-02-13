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
import Image from "react-bootstrap/Image";
import Alert from "react-bootstrap/Alert";

import { useHistory } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import TopBox from "../../components/TopBox";
import { useRedirect } from "../../hooks/Redirect";
import Asset2 from "../../components/Asset2";

function DeptPostCreate({deptGeneral="" } ) {
  useRedirect("loggedOut")
  const [errors, setErrors] = useState({});
    const [postData, setPostData] = useState({
        title: "",
        content: "",
        departments: deptGeneral,
        image1: "",
        image2: "",
        image3: "",
        image4: "",
        image5: "",
      });
      const { title, content, departments, 
        image1, image2, image3, image4, image5 } = postData;
      const imageInput1 = useRef(null)
      const imageInput2 = useRef(null)
      const imageInput3 = useRef(null)
      const imageInput4 = useRef(null)
      const imageInput5 = useRef(null)

      const history = useHistory()
    
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
          console.log(`image1 ${image1}`)
        }
      };

      const handleChangeImage2 = (event) => {
        if (event.target.files.length) {
          URL.revokeObjectURL(image2);
          setPostData({
            ...postData,
            image2: URL.createObjectURL(event.target.files[0]),
          });
          console.log(`image2 ${image2}`)
        }
      };

      const handleChangeImage3 = (event) => {
        if (event.target.files.length) {
          URL.revokeObjectURL(image3);
          setPostData({
            ...postData,
            image3: URL.createObjectURL(event.target.files[0]),
          });
          console.log(`image3 ${image3}`)
        }
      };

      const handleChangeImage4 = (event) => {
        if (event.target.files.length) {
          URL.revokeObjectURL(image4);
          setPostData({
            ...postData,
            image4: URL.createObjectURL(event.target.files[0]),
          });
          console.log(`image4 ${image4}`)
        }
      };

      const handleChangeImage5 = (event) => {
        if (event.target.files.length) {
          URL.revokeObjectURL(image5);
          setPostData({
            ...postData,
            image5: URL.createObjectURL(event.target.files[0]),
          });
          console.log(`image5 ${image5}`)
        }
      };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setPostData({
      ...postData
    });
    const formData = new FormData();

    formData.append("title", title);
    formData.append("content", content);
    formData.append("departments", departments);
    if(imageInput1.current.files[0]) {
      formData.append("image1", imageInput1.current.files[0]);
    }
    if(imageInput2.current.files[0]) {
      formData.append("image2", imageInput2.current.files[0]);
    }
    if(imageInput3.current.files[0]) {
      formData.append("image3", imageInput3.current.files[0]);
    }
    if(imageInput4.current.files[0]) {
      formData.append("image4", imageInput4.current.files[0]);
    }
    if(imageInput5.current.files[0]) {
      formData.append("image5", imageInput5.current.files[0]);
    }
  
    try {
      const { data } = await axiosReq.post("/department/posts/", formData);
      history.push(`/department/posts/${data.id}`);
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  }

  const textFields = (
      <div>
          <Form.Group controlId="departments" className="mb-2" >
                <Form.Label className="p-1" >Departments</Form.Label>
                <Form.Control as="select"
                  name="departments"
                  value={departments}
                  onChange={handleChange}
                  aria-label="act select">
                  <option>Select</option>
                  <option value="art">Art</option>
                  <option value="camera">Camera</option>
                  <option value="casting">Casting</option>
                  <option value="electric">Electric/Grip</option>
                  <option value="location">Location</option>
                  <option value="make-up">Hair/Make-up</option>
                  <option value="post">Post/VSF</option>
                  <option value="production">Production</option>
                  <option value="script">Script</option>
                  <option value="sound">Sound</option>
                  <option value="stunts">Stunts</option>
                  <option value="wardrobe">Wardrobe</option> 
                  
                </Form.Control>
            </Form.Group>
            {errors?.departments?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
          <Form.Group controlId="title" className="mb-2" >
                <Form.Label className="p-1" >Title</Form.Label>
                <Form.Control 
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
            {errors?.content?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
      </div>
  )
  const buttons = (
    <div className="text-center">    
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
      {deptGeneral ? (
        ""
      ) : (
        <TopBox title="Departments Create Post" />
      ) }
    <Form className="mt-3" onSubmit={handleSubmit}>
    <Row>
    <Col md={6} className="p-0 p-md-2">
        <Container className= {`${appStyles.Content} ${styles.Container}`} >
          {textFields}
          </Container>
      </Col>
      <Col className="pt-2 p-0 p-md-2" md={6}>
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
            {errors?.image1?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Container>
                {/* image 2 */}
            <Container
                className={`${appStyles.Content} ${styles.Container2} mt-3 p-0 d-flex flex-column justify-content-center`}
                >
            <Form.Group >
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
                  className="my-1"
                  htmlFor="image-upload2"
                >
                  <Asset2
                    src={Upload}
                    height={"20px"}
                    width={"20px"}
                    message="Upload second image"
                  />
                </Form.Label>
              )}

              <Form.Control
                type="file"
                id="image-upload2"
                accept="image/*"
                onChange={handleChangeImage2}
                ref={imageInput2}
              />
            </Form.Group>
            {errors?.image2?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            {/* """ end image 2 """" */}
        </Container>
        {/* image 3 */}
        <Container
                className={`${appStyles.Content} ${styles.Container2} mt-3 p-0 d-flex flex-column justify-content-center`}
                >
            <Form.Group>
              {image3 ? (
                <>
                  <figure>
                    <Image className={appStyles.Image} src={image3} rounded />
                  </figure>
                  <div>
                    <Form.Label
                      className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                      htmlFor="image-upload3"
                    >
                      Change the image
                    </Form.Label>
                  </div>
                </>
              ) : (
                <Form.Label
                  className=" my-1"
                  htmlFor="image-upload3"
                >
                  <Asset2
                    src={Upload}
                    height={"20px"}
                    width={"20px"}
                    message="Upload third image"
                  />
                </Form.Label>
              )}

              <Form.Control
                type="file"
                id="image-upload3"
                accept="image/*"
                onChange={handleChangeImage3}
                ref={imageInput3}
              />
            </Form.Group>
            {errors?.image3?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            {/* """ end image 3 """" */}
        </Container>
        {/* image 4 */}
        <Container
                className={`${appStyles.Content} ${styles.Container2} mt-3 p-0 d-flex flex-column justify-content-center`}
                >
            <Form.Group>
              {image4 ? (
                <>
                  <figure>
                    <Image className={appStyles.Image} src={image4} rounded />
                  </figure>
                  <div>
                    <Form.Label
                      className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                      htmlFor="image-upload4"
                    >
                      Change the image
                    </Form.Label>
                  </div>
                </>
              ) : (
                <Form.Label
                  className=" my-1"
                  htmlFor="image-upload4"
                >
                  <Asset2
                    src={Upload}
                    height={"20px"}
                    width={"20px"}
                    message="Upload fourth image"
                  />
                </Form.Label>
              )}

              <Form.Control
                type="file"
                id="image-upload4"
                accept="image/*"
                onChange={handleChangeImage4}
                ref={imageInput4}
              />
            </Form.Group>
            {errors?.image4?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            {/* """ end image 4 """" */}
        </Container>
        {/* image 5 */}
        <Container
                className={`${appStyles.Content} ${styles.Container2} mt-3 p-0 d-flex flex-column justify-content-center`}
                >
            <Form.Group>
              {image5 ? (
                <>
                  <figure>
                    <Image className={appStyles.Image} src={image5} rounded />
                  </figure>
                  <div>
                    <Form.Label
                      className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                      htmlFor="image-upload5"
                    >
                      Change the image
                    </Form.Label>
                  </div>
                </>
              ) : (
                <Form.Label
                  className=" my-1"
                  htmlFor="image-upload5"
                >
                  <Asset2
                    src={Upload}
                    height={"20px"}
                    width={"20px"}
                    message="Upload last image"
                  />
                </Form.Label>
              )}

              <Form.Control
                type="file"
                id="image-upload5"
                accept="image/*"
                onChange={handleChangeImage5}
                ref={imageInput5}
              />
            </Form.Group>
            {errors?.image5?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            {/* """ end image 5 """" */}
        </Container>
      </Col>   
    </Row>
    <Row>
      <Col>
        <Container className= {`${styles.Container} mt-3`} >{buttons} </Container>
      </Col>
    </Row>
  </Form>
  </div>
  );
}

export default DeptPostCreate;