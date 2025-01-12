/* Form Page to edit a Location */
import React, { useEffect, useRef, useState } from "react";
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

import { useHistory, useParams } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import TopBox from "../../components/TopBox";
import { useRedirect } from "../../hooks/Redirect";
import { toast } from 'react-toastify';
import dep10 from "../../assets/dep10.png";

const LocationsEdit = () => {
    useRedirect();
    const [errors, setErrors] = useState({});
    const [postData, setPostData] = useState({
        name: "",
        description: "",
        filming_address_primary: "",
        filming_address2: "",
        filming_address3: "",
        image1_description: "",
        image1: "",
        image2_description: "",
        image2: "",
        image3_description: "",
        image3: "",
        image4_description: "",
        image4: "",
        image5_description: "",
        image5: "",
        image6_description: "",
        image6: "",
        image7_description: "",
        image7: "",
        image8_description: "",
        image8: "",
      });

      const { name,
              description,
              filming_address_primary,
              filming_address2,
              filming_address3,
              image1_description,
              image1,
              image2_description,
              image2,
              image3_description,
              image3,
              image4_description,
              image4,
              image5_description,
              image5,
              image6_description,
              image6,
              image7_description,
              image7,
              image8_description,
              image8,
        } = postData;

    const imageInput1 = useRef(null);
    const imageInput2 = useRef(null);
    const imageInput3 = useRef(null);
    const imageInput4 = useRef(null);
    const imageInput5 = useRef(null);
    const imageInput6 = useRef(null);
    const imageInput7 = useRef(null);
    const imageInput8 = useRef(null);

    const history = useHistory();
    const {id} = useParams();

    useEffect(() => {
        const handleMount = async () => {
          try {
            const { data } = await axiosReq.get(`/locations/${id}/`);
            const { name,
                description,
                filming_address_primary,
                filming_address2,
                filming_address3,
                image1_description,
                image1,
                image2_description,
                image2,
                image3_description,
                image3,
                image4_description,
                image4,
                image5_description,
                image5,
                image6_description,
                image6,
                image7_description,
                image7,
                image8_description,
                image8, } = data;
     
        setPostData({ name,
            description,
            filming_address_primary,
            filming_address2,
            filming_address3,
            image1_description,
            image1,
            image2_description,
            image2,
            image3_description,
            image3,
            image4_description,
            image4,
            image5_description,
            image5,
            image6_description,
            image6,
            image7_description,
            image7,
            image8_description,
            image8, });
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

    const handleChangeImage1 = (event) => {
    if (event.target.files.length) {
        URL.revokeObjectURL(image1);
        setPostData({
        ...postData,
        image1: URL.createObjectURL(event.target.files[0]),
        });
        console.log(imageInput1.current.files[0]);
    }
    };

    const handleChangeImage2 = (event) => {
    if (event.target.files.length) {
        URL.revokeObjectURL(image2);
        setPostData({
        ...postData,
        image2: URL.createObjectURL(event.target.files[0]),
        });
    }
    };

    const handleChangeImage3 = (event) => {
    if (event.target.files.length) {
        URL.revokeObjectURL(image3);
        setPostData({
        ...postData,
        image3: URL.createObjectURL(event.target.files[0]),
        });
    }
    };

    const handleChangeImage4 = (event) => {
    if (event.target.files.length) {
        URL.revokeObjectURL(image4);
        setPostData({
        ...postData,
        image4: URL.createObjectURL(event.target.files[0]),
        });
    }
    };

    const handleChangeImage5 = (event) => {
    if (event.target.files.length) {
        URL.revokeObjectURL(image5);
        setPostData({
        ...postData,
        image5: URL.createObjectURL(event.target.files[0]),
        });
    }
    };

    const handleChangeImage6 = (event) => {
    if (event.target.files.length) {
        URL.revokeObjectURL(image6);
        setPostData({
        ...postData,
        image6: URL.createObjectURL(event.target.files[0]),
        });
    }
    };

    const handleChangeImage7 = (event) => {
    if (event.target.files.length) {
        URL.revokeObjectURL(image7);
        setPostData({
        ...postData,
        image7: URL.createObjectURL(event.target.files[0]),
        });
    }
    };

    const handleChangeImage8 = (event) => {
        if (event.target.files.length) {
            URL.revokeObjectURL(image8);
            setPostData({
            ...postData,
            image8: URL.createObjectURL(event.target.files[0]),
            });
        }
        };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(formData); 
        const formData = new FormData();
    
        formData.append("name", name);
        formData.append("description", description);
        formData.append("filming_address_primary", filming_address_primary);
        formData.append("filming_address2", filming_address2);
        formData.append("filming_address3", filming_address3);
        formData.append("image1_description", image1_description);
        formData.append("image2_description", image2_description);
        formData.append("image3_description", image3_description);
        formData.append("image4_description", image4_description);
        formData.append("image5_description", image5_description);
        formData.append("image6_description", image6_description);
        formData.append("image7_description", image7_description);
        formData.append("image8_description", image8_description);
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
        if(imageInput6.current.files[0]) {
        formData.append("image6", imageInput6.current.files[0]);
        }
        if(imageInput7.current.files[0]) {
        formData.append("image7", imageInput7.current.files[0]);
        }
        if(imageInput8.current.files[0]) {
            formData.append("image8", imageInput8.current.files[0]);
            }
      
        try {
          await axiosReq.put(`/locations/${id}/`, formData);
          history.push(`/locations/${id}/`);
          toast.success(`Location "${name}" Updated`);
        } catch (err) {
          console.log(err);
          if (err.response?.status !== 401) {
            setErrors(err.response?.data);
          }
        }
      }

      const buttons = (
        <div className="text-center mt-5">    
          <Button
            className={`${btnStyles.Button} ${btnStyles.Blue} px-3 px-md-5 mr-3`}
            onClick={() => history.goBack()}
          >
            Cancel
          </Button>
          <Button className={`${btnStyles.Button} ${btnStyles.Blue} px-3 px-md-5 ml-3`} type="submit">
            Update
          </Button>
        </div>
      );

    return (
        <div>
          <TopBox title={`Edit ${name}`} />
          <Button
              className={`${btnStyles.Button} ${btnStyles.Blue} text-left my-2`}
              onClick={() => history.goBack()}
              >
              Back
          </Button>
          <Container className= {`px-0 ${appStyles.Content} ${styles.Container}`} >
          <Form className="mt-3" onSubmit={handleSubmit}>
          <h5 className={`text-center mt-0 mb-2 py-0 ${styles.SubTitle }`}
          style={{ textTransform: 'uppercase'}}>EDIT LOCATION - {name}</h5>
          <Row>
          <Col md={3} ></Col>
          <Col md={6} className="d-flex justify-content-center">
          <Form.Group controlId="name" className={`${styles.Width} text-center`} >
                  <Form.Label className={`${styles.BoldScene} `} >Name</Form.Label>
                  <Form.Control 
                  type="text"
                  className={styles.Input}
                  name="name"
                  value={name}
                  onChange={handleChange}
                      />
              </Form.Group>
              {errors?.name?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
          </Col>
          </Row>
          {/* break */}
          <Row>
            <Col xs={12}>
            <hr className={`d-none d-md-block mt-3 mb-3`}/>
            </Col>
          </Row>
          <Row className="text-center mt-3 mt-md-3">
          <Col xs={12} md={6} className="d-flex justify-content-center" >
          <Form.Group controlId="description" className={`${styles.Width2}`} >
                  <Form.Label className={styles.BoldScene} >Description</Form.Label>
                  <Form.Control 
                  type="text"
                  className={styles.InputScene}
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
          <Col xs={12} md={6} className="mt-3 mt-md-3 d-flex justify-content-center"  >
              <Form.Group controlId="filming_address_primary" className={`${styles.Width2}`} >
                      <Form.Label className={styles.BoldScene} >Primary Filming Address</Form.Label>
                      <Form.Control 
                      as="textarea"
                      rows={2}
                      type="text"
                      className={styles.InputScene}
                      name="filming_address_primary"
                      value={filming_address_primary}
                      onChange={handleChange}
                          />
                  </Form.Group>
                  {errors?.filming_address_primary?.map((message, idx) => (
                    <Alert variant="warning" key={idx}>
                      {message}
                    </Alert>
                  ))}
          </Col>
          </Row>
          {/* break */}
          <Row>
            <Col xs={12}>
            <hr className={`d-none d-md-block mt-3 mb-3`}/>
            </Col>
          </Row>
          <Row className="text-center pt-3 pt-md-0">
              <Col xs={12} md={6} className="d-flex justify-content-center"  >
              <Form.Group controlId="filming_address2" className={`${styles.Width2}`} >
                      <Form.Label className={styles.BoldScene} >Filming Address 2</Form.Label>
                      <Form.Control 
                      className={styles.InputScene}
                      as="textarea"
                      rows={2}
                      type="text"
                      name="filming_address2"
                      value={filming_address2}
                      onChange={handleChange}
                          />
                  </Form.Group>
                  {errors?.filming_address2?.map((message, idx) => (
                    <Alert variant="warning" key={idx}>
                      {message}
                    </Alert>
                  ))}
              </Col>
              <Col xs={12} md={6} className="mt-3 mt-md-3 d-flex justify-content-center"  >
              <Form.Group controlId="filming_address3" className={`${styles.Width2}`} >
                      <Form.Label className={styles.BoldScene} >Filming Address 3</Form.Label>
                      <Form.Control 
                      className={styles.InputScene}
                      type="text"
                      as="textarea"
                      rows={2}
                      name="filming_address3"
                      value={filming_address3}
                      onChange={handleChange}
                          />
                  </Form.Group>
                  {errors?.filming_address3?.map((message, idx) => (
                    <Alert variant="warning" key={idx}>
                      {message}
                    </Alert>
                  ))}
              </Col>
          </Row>
          {/* images */}
          <h5 className={`text-center mt-5 mb-3 mb-0 py-0 ${styles.SubTitle }`}>
               IMAGES</h5>
          {/* location 1/2 */}
          <Row className="text-center">
              <Col xs={12} md={6} >
              <p className={`${styles.BoldScene} 
                  mb-0 text-center mx-3`} >IMAGE 1</p>
              {/* image1 */}
              <Container
                className={`${appStyles.Content} d-flex flex-column justify-content-center`}
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
                          message="Upload Image"
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
              <div className="d-flex justify-content-center">
              <Form.Group controlId="image1_description" className={`${styles.Width2}`} >
                      <Form.Label className={styles.Bold} ></Form.Label>
                      <Form.Control 
                      className={styles.InputScene}
                      type="text"
                      name="image1_description"
                      as="textarea"
                      rows={1}
                      value={image1_description}
                      onChange={handleChange}
                          />
              </Form.Group>
              {errors?.image1_description?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
              </div>
              <hr className={`${styles.Break1Cos} mt-4`}/>
              </Col>
              <Col xs={12} md={6}>
              <p className={`${styles.BoldScene} 
                  mb-0 text-center mx-3`} >IMAGE 2</p>
              {/* image 2 */}
              <Container
                      className={`${appStyles.Content} mt-3 p-0 d-flex flex-column justify-content-center`}
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
                        <Asset
                          src={Upload}
                          message="Upload Image"
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
              <div className="d-flex justify-content-center">
              <Form.Group controlId="image2_description" className={`${styles.Width2}`} >
                      <Form.Label className={styles.Bold} ></Form.Label>
                      <Form.Control 
                      className={styles.InputScene}
                      type="text"
                      name="image2_description"
                      as="textarea"
                      rows={1}
                      value={image2_description}
                      onChange={handleChange}
                          />
                  </Form.Group>
                  {errors?.image2_description?.map((message, idx) => (
                    <Alert variant="warning" key={idx}>
                      {message}
                    </Alert>
                  ))}
              </div>
              <hr className={`${styles.Break1Cos} mt-4`}/>
              </Col>
          </Row>
          {/* location 3/4  */}
          <Row className="text-center">
              <Col xs={12} md={6} >
              <p className={`${styles.BoldScene} 
                  mb-0 text-center mx-3`} >IMAGE 3</p>
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
                        <Asset
                          src={Upload}
                          message="Upload Image"
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
              </Container>
              <div className="d-flex justify-content-center">
              <Form.Group controlId="image3_description" className={`${styles.Width2}`} >
                      <Form.Label className={styles.Bold} ></Form.Label>
                      <Form.Control 
                      className={styles.InputScene}
                      type="text"
                      name="image3_description"
                      as="textarea"
                      rows={1}
                      value={image3_description}
                      onChange={handleChange}
                          />
                  </Form.Group>
                  {errors?.image3_description?.map((message, idx) => (
                    <Alert variant="warning" key={idx}>
                      {message}
                    </Alert>
                  ))}
              </div>
              <hr className={`${styles.Break1Cos} mt-4`}/>
              </Col>
              <Col xs={12} md={6} >
              <p className={`${styles.BoldScene} 
              mb-0 text-center mx-3`} >IMAGE 4</p>
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
                        <Asset
                      src={Upload}
                      message="Upload Image"
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
              </Container>
              <div className="d-flex justify-content-center">
              <Form.Group controlId="image4_description" className={`${styles.Width2}`} >
                      <Form.Label className={styles.Bold} ></Form.Label>
                      <Form.Control 
                      className={styles.InputScene}
                      type="text"
                      name="image4_description"
                      as="textarea"
                      rows={1}
                      value={image4_description}
                      onChange={handleChange}
                          />
                  </Form.Group>
                  {errors?.image4_description?.map((message, idx) => (
                    <Alert variant="warning" key={idx}>
                      {message}
                    </Alert>
                  ))}
              </div>
              <hr className={`${styles.Break1Cos} mt-4`}/>
              </Col>
          </Row >
          {/* location 5/6 */}
          <Row className="text-center">
              <Col xs={12} md={6} >
              <p className={`${styles.BoldScene} 
              mb-0 text-center mx-3`} >IMAGE 5</p>
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
                        <Asset
                          src={Upload}
                          message="Upload Image"
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
              </Container>
              <div className="d-flex justify-content-center">
              <Form.Group controlId="image5_description" className={`${styles.Width2}`} >
                      <Form.Label className={styles.Bold} ></Form.Label>
                      <Form.Control 
                      className={styles.InputScene}
                      type="text"
                      name="image5_description"
                      as="textarea"
                      rows={1}
                      value={image5_description}
                      onChange={handleChange}
                          />
                  </Form.Group>
                  {errors?.image5_description?.map((message, idx) => (
                    <Alert variant="warning" key={idx}>
                      {message}
                    </Alert>
                  ))}
              </div>
              <hr className={`${styles.Break1Cos} mt-4`}/>
              </Col>
              <Col xs={12} md={6}>
              <p className={`${styles.BoldScene} 
              mb-0 text-center mx-3`} >IMAGE 6</p>
              {/* image 6 */}
              <Container
                      className={`${appStyles.Content} ${styles.Container2} mt-3 p-0 d-flex flex-column justify-content-center`}
                      >
                  <Form.Group>
                    {image6 ? (
                      <>
                        <figure>
                          <Image className={appStyles.Image} src={image6} rounded />
                        </figure>
                        <div>
                          <Form.Label
                            className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                            htmlFor="image-upload6"
                          >
                            Change the image
                          </Form.Label>
                        </div>
                      </>
                    ) : (
                      <Form.Label
                        className=" my-1"
                        htmlFor="image-upload6"
                      >
                        <Asset
                          src={Upload}
                          message="Upload Image"
                        />
                      </Form.Label>
                    )}
      
                    <Form.Control
                      type="file"
                      id="image-upload6"
                      accept="image/*"
                      onChange={handleChangeImage6}
                      ref={imageInput6}
                    />
                  </Form.Group>
                  {errors?.image6?.map((message, idx) => (
                    <Alert variant="warning" key={idx}>
                      {message}
                    </Alert>
                  ))}
              </Container>
              <div className="d-flex justify-content-center">
              <Form.Group controlId="image6_description" className={`${styles.Width2}`} >
                      <Form.Label className={styles.Bold} ></Form.Label>
                      <Form.Control 
                      className={styles.InputScene}
                      type="text"
                      name="image6_description"
                      as="textarea"
                      rows={1}
                      value={image6_description}
                      onChange={handleChange}
                          />
                  </Form.Group>
                  {errors?.image6_description?.map((message, idx) => (
                    <Alert variant="warning" key={idx}>
                      {message}
                    </Alert>
                  ))}
              </div>
              <hr className={`${styles.Break1Cos} mt-4`}/>
              </Col>
          </Row>
          {/* location 7/8 */}
          <Row className="text-center">
              <Col xs={12} md={6} >
              <p className={`${styles.BoldScene} 
                  mb-0 text-center mx-3`} >IMAGE 7</p>
              {/* image 7 */}
              <Container
                      className={`${appStyles.Content} ${styles.Container2} mt-3 p-0 d-flex flex-column justify-content-center`}
                      >
                  <Form.Group>
                    {image7 ? (
                      <>
                        <figure>
                          <Image className={appStyles.Image} src={image7} rounded />
                        </figure>
                        <div>
                          <Form.Label
                            className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                            htmlFor="image-upload7"
                          >
                            Change the image
                          </Form.Label>
                        </div>
                      </>
                    ) : (
                      <Form.Label
                        className=" my-1"
                        htmlFor="image-upload7"
                      >
                        <Asset
                          src={Upload}
                          message="Upload Image"
                        />
                      </Form.Label>
                    )}
      
                    <Form.Control
                      type="file"
                      id="image-upload7"
                      accept="image/*"
                      onChange={handleChangeImage7}
                      ref={imageInput7}
                    />
                  </Form.Group>
                  {errors?.image7?.map((message, idx) => (
                    <Alert variant="warning" key={idx}>
                      {message}
                    </Alert>
                  ))}
              </Container>
              <div className="d-flex justify-content-center">
              <Form.Group controlId="image7_description" className={`${styles.Width2}`} >
                      <Form.Label className={styles.Bold} ></Form.Label>
                      <Form.Control 
                      className={styles.InputScene}
                      type="text"
                      name="image7_description"
                      as="textarea"
                      rows={1}
                      value={image7_description}
                      onChange={handleChange}
                          />
                  </Form.Group>
                  {errors?.image7_description?.map((message, idx) => (
                    <Alert variant="warning" key={idx}>
                      {message}
                    </Alert>
                  ))}
              </div>
              <hr className={`${styles.Break1Cos} mt-4`}/>
              </Col>
              <Col xs={12} md={6}>
              <p className={`${styles.BoldScene} 
                  mb-0 text-center mx-3`} >IMAGE 8</p>
              {/* image 8 */}
              <Container
                      className={`${appStyles.Content} ${styles.Container2} mt-3 p-0 d-flex flex-column justify-content-center`}
                      >
                  <Form.Group>
                    {image8 ? (
                      <>
                        <figure>
                          <Image className={appStyles.Image} src={image8} rounded />
                        </figure>
                        <div>
                          <Form.Label
                            className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                            htmlFor="image-upload8"
                          >
                            Change the image
                          </Form.Label>
                        </div>
                      </>
                    ) : (
                      <Form.Label
                        className=" my-1"
                        htmlFor="image-upload8"
                      >
                        <Asset
                          src={Upload}
                          message="Upload Image"
                        />
                      </Form.Label>
                    )}
      
                    <Form.Control
                      type="file"
                      id="image-upload8"
                      accept="image/*"
                      onChange={handleChangeImage8}
                      ref={imageInput8}
                    />
                  </Form.Group>
                  {errors?.image8?.map((message, idx) => (
                    <Alert variant="warning" key={idx}>
                      {message}
                    </Alert>
                  ))}
              </Container>
              <div className="d-flex justify-content-center">
              <Form.Group controlId="image8_description" className={`${styles.Width2}`}>
                      <Form.Label className={styles.Bold} ></Form.Label>
                      <Form.Control 
                      className={styles.InputScene}
                      type="text"
                      name="image8_description"
                      as="textarea"
                      rows={1}
                      value={image8_description}
                      onChange={handleChange}
                          />
                  </Form.Group>
                  {errors?.image8_description?.map((message, idx) => (
                    <Alert variant="warning" key={idx}>
                      {message}
                    </Alert>
                  ))}
              </div>
              <hr className={`${styles.Break1Cos} mt-4`}/>
              </Col>
          </Row>
          <Row>
            <Col>
              <Container className= {`${styles.Container} mt-3`} >{buttons} </Container>
            </Col>
          </Row>
          </Form>
        </Container>
        </div>
    )
}

export default LocationsEdit
