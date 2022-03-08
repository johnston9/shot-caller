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

const CharacterCreate = ({topbox} ) => {
    useRedirect("loggedOut")
    const [errors, setErrors] = useState({});
    const [postData, setPostData] = useState({
        number: "",
        role: "",
        actor: "",
        pickup_address: "",
        pickup_address_2: "",
        make_up_time: "",
        commute_time: "",
        email: "",
        mobile: "",
        agent: "",
        diet: "",
        requirements: "",
        costume1: "",
        costume2: "",
        costume3: "",
        costume4: "",
        costume5: "",
        costume6: "",
        costume7: "",
        makeup: "",
        costume1_image: "",
        costume2_image: "",
        costume3_image: "",
        costume4_image: "",
        costume5_image: "",
        costume6_image: "",
        costume7_image: "",
        makeup_image: "",
      });

      const { number,
              role,
              actor,
              pickup_address,
              pickup_address_2,
              make_up_time,
              commute_time,
              email,
              mobile,
              agent,
              diet,
              requirements,
              costume1,
              costume2,
              costume3,
              costume4,
              costume5,
              costume6,
              costume7,
              makeup,  
              costume1_image,
              costume2_image,
              costume3_image,
              costume4_image,
              costume5_image,
              costume6_image,
              costume7_image,
              makeup_image,
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

    const handleChange = (event) => {
        setPostData({
          ...postData,
          [event.target.name]: event.target.value,
        });
      };
    
    const handleChangeImage1 = (event) => {
    if (event.target.files.length) {
        URL.revokeObjectURL(costume1_image);
        setPostData({
        ...postData,
        costume1_image: URL.createObjectURL(event.target.files[0]),
        });
    }
    };

    const handleChangeImage2 = (event) => {
    if (event.target.files.length) {
        URL.revokeObjectURL(costume2_image);
        setPostData({
        ...postData,
        costume2_image: URL.createObjectURL(event.target.files[0]),
        });
    }
    };

    const handleChangeImage3 = (event) => {
    if (event.target.files.length) {
        URL.revokeObjectURL(costume3_image);
        setPostData({
        ...postData,
        costume3_image: URL.createObjectURL(event.target.files[0]),
        });
    }
    };

    const handleChangeImage4 = (event) => {
    if (event.target.files.length) {
        URL.revokeObjectURL(costume4_image);
        setPostData({
        ...postData,
        costume4_image: URL.createObjectURL(event.target.files[0]),
        });
    }
    };

    const handleChangeImage5 = (event) => {
    if (event.target.files.length) {
        URL.revokeObjectURL(costume5_image);
        setPostData({
        ...postData,
        costume5_image: URL.createObjectURL(event.target.files[0]),
        });
    }
    };

    const handleChangeImage6 = (event) => {
    if (event.target.files.length) {
        URL.revokeObjectURL(costume6_image);
        setPostData({
        ...postData,
        costume6_image: URL.createObjectURL(event.target.files[0]),
        });
    }
    };

    const handleChangeImage7 = (event) => {
    if (event.target.files.length) {
        URL.revokeObjectURL(costume7_image);
        setPostData({
        ...postData,
        costume7_image: URL.createObjectURL(event.target.files[0]),
        });
    }
    };

    const handleChangeImage8 = (event) => {
        if (event.target.files.length) {
            URL.revokeObjectURL(makeup_image);
            setPostData({
            ...postData,
            makeup_image: URL.createObjectURL(event.target.files[0]),
            });
        }
        };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
    
        formData.append("number", number);
        formData.append("role", role);
        formData.append("actor", actor);
        formData.append("pickup_address", pickup_address);
        formData.append("pickup_address_2", pickup_address_2);
        formData.append("make_up_time", make_up_time);
        formData.append("commute_time", commute_time);
        formData.append("email", email);
        formData.append("mobile", mobile);
        formData.append("agent", agent);
        formData.append("diet", diet);
        formData.append("requirements", requirements);
        formData.append("costume1", costume1);
        formData.append("costume2", costume2);
        formData.append("costume3", costume3);
        formData.append("costume4", costume4);
        formData.append("costume5", costume5);
        formData.append("costume6", costume6);
        formData.append("costume7", costume7);
        formData.append("makeup", makeup);
        if(imageInput1.current.files[0]) {
          formData.append("costume1_image", imageInput1.current.files[0]);
        }
        if(imageInput2.current.files[0]) {
          formData.append("costume2_image", imageInput2.current.files[0]);
        }
        if(imageInput3.current.files[0]) {
          formData.append("costume3_image", imageInput3.current.files[0]);
        }
        if(imageInput4.current.files[0]) {
          formData.append("costume4_image", imageInput4.current.files[0]);
        }
        if(imageInput5.current.files[0]) {
          formData.append("costume5_image", imageInput5.current.files[0]);
        }
        if(imageInput6.current.files[0]) {
        formData.append("costume6_image", imageInput6.current.files[0]);
        }
        if(imageInput7.current.files[0]) {
        formData.append("costume7_image", imageInput7.current.files[0]);
        }
        if(imageInput8.current.files[0]) {
            formData.append("makeup_image", imageInput8.current.files[0]);
            }
      
        try {
          const { data } = await axiosReq.post("/characters/", formData);
          history.push(`/characters/${data.id}/`);
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
      <div className="mt-3">
      {topbox ? (
        ""
      ) : (
        <div>
        <TopBox title="Create Character" />
        <Button
        className={`${btnStyles.Button} ${btnStyles.Blue} my-1`}
        onClick={() => history.goBack()}
        >
        Back
        </Button>
        </div>
      ) }
        <Container className= {`${appStyles.Content} ${styles.Container}`} >
      <Form className="mt-1" onSubmit={handleSubmit}>
      <h3 className="text-center">Role</h3>
      <p className="text-center">Quick add for Roles for scene dropdowns</p>
      <Row>
      <Col md={3} ></Col>
          <Col md={6} >
          <Form.Group controlId="role" className="mb-0" >
                  <Form.Label className="d-none p-1" >Role</Form.Label>
                  <Form.Control 
                  type="text"
                  placeholder="Role"
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
      </Row>
      <Row>
        <Col>
          <div className= {` mt-3`} >{buttons} </div>
        </Col>
      </Row>
      <h3 className="text-center">Number</h3>
      <Row>
      <Col md={3} ></Col>
          <Col md={6} >
          <Form.Group controlId="number" className="mb-0" >
                  <Form.Label className="d-none p-1" >Number</Form.Label>
                  <Form.Control 
                  type="text"
                  placeholder="Number"
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
      <p style={{ textTransform: 'uppercase'}} className={`mt-3 pl-3 mb-0 py-1 ${styles.SubTitle }`}></p>
      {/* actor details */}
      <h3 className="text-center my-3">Actor Details</h3>
      <Row>
          <Col xs={6} md={4} >
          <Form.Group controlId="actor" className="mb-2" >
                  <Form.Label className="d-none p-1" >Actor</Form.Label>
                  <Form.Control 
                  type="text"
                  placeholder="Actor"
                  name="actor"
                  value={actor}
                  onChange={handleChange}
                      />
              </Form.Group>
              {errors?.actor?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
          </Col>
          <Col xs={6} md={4} >
          <Form.Group controlId="mobile" className="mb-2" >
                  <Form.Label className="d-none p-1" >Mobile</Form.Label>
                  <Form.Control 
                  placeholder="Mobile"
                  type="text"
                  name="mobile"
                  value={mobile}
                  onChange={handleChange}
                      />
              </Form.Group>
              {errors?.mobile?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
          </Col>
          <Col xs={12} md={4} >
          <Form.Group controlId="email" className="mb-2" >
                  <Form.Label className="d-none p-1" >Email</Form.Label>
                  <Form.Control 
                  placeholder="Email"
                  type="text"
                  name="email"
                  value={email}
                  onChange={handleChange}
                      />
              </Form.Group>
              {errors?.email?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
          </Col>
      </Row>
      {/* times agent */}
      <Row>
          <Col xs={6} md={4} >
          <Form.Group controlId="make_up_time" className="mb-2" >
                  <Form.Label className="d-none p-1" >Makeup Time</Form.Label>
                  <Form.Control 
                  placeholder="Makeup Time"
                  type="text"
                  name="make_up_time"
                  value={make_up_time}
                  onChange={handleChange}
                      />
              </Form.Group>
              {errors?.make_up_time?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
          </Col>
          <Col xs={6} md={4} >
          <Form.Group controlId="commute_time" className="mb-2" >
                  <Form.Label className="d-none p-1" >Commute Time</Form.Label>
                  <Form.Control 
                  placeholder="Commute Time"
                  type="text"
                  name="commute_time"
                  value={commute_time}
                  onChange={handleChange}
                      />
              </Form.Group>
              {errors?.commute_time?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
          </Col>
          <Col xs={12} md={4} >
          <Form.Group controlId="agent" className="mb-2" >
                  <Form.Label className="d-none p-1" >Agent</Form.Label>
                  <Form.Control 
                  placeholder="Agent"
                  type="text"
                  name="agent"
                  value={agent}
                  onChange={handleChange}
                      />
              </Form.Group>
              {errors?.agent?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
          </Col>
      </Row>
      {/* pickups */}
      <Row>
          <Col xs={6} >
          <Form.Group controlId="pickup_address" className="mb-2" >
                  <Form.Label className="d-none p-1" >Pickup Address</Form.Label>
                  <Form.Control 
                  placeholder="Pickup Address"
                  type="text"
                  name="pickup_address"
                  as="textarea"
                  rows={3}
                  value={pickup_address}
                  onChange={handleChange}
                      />
              </Form.Group>
              {errors?.pickup_address?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
          </Col>
          <Col xs={6}>
          <Form.Group controlId="pickup_address_2" className="mb-2" >
                  <Form.Label className="d-none p-1" >Pickup Address 2</Form.Label>
                  <Form.Control 
                  placeholder="Pickup Address 2"
                  type="text"
                  name="pickup_address_2"
                  as="textarea"
                  rows={3}
                  value={pickup_address_2}
                  onChange={handleChange}
                      />
              </Form.Group>
              {errors?.pickup_address_2?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
          </Col>
      </Row>
      {/* Requirements */}
      <Row>
          <Col xs={6} >
          <Form.Group controlId="requirements" className="mb-2" >
                  <Form.Label className="d-none p-1" >Requirements</Form.Label>
                  <Form.Control 
                  placeholder="Requirements"
                  type="text"
                  name="requirements"
                  as="textarea"
                  rows={3}
                  value={requirements}
                  onChange={handleChange}
                      />
              </Form.Group>
              {errors?.requirements?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
          </Col>
          <Col xs={6}>
          <Form.Group controlId="diet" className="mb-2" >
                  <Form.Label className="d-none p-1" >Diet</Form.Label>
                  <Form.Control 
                  placeholder="Diet"
                  type="text"
                  name="diet"
                  as="textarea"
                  rows={3}
                  value={diet}
                  onChange={handleChange}
                      />
              </Form.Group>
              {errors?.diet?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
          </Col>
      </Row>
      <p style={{ textTransform: 'uppercase'}} className={`mt-3 pl-3 mb-0 py-1 ${styles.SubTitle }`}></p>
      <h3 className="text-center my-3">Makeup - Costumes</h3>
      {/* makeup/costume 1 */}
      <Row className="mb-1 text-center">
      <Col xs={12} md={6}>
          <Form.Group controlId="makeup" className="mb-2" >
                  <Form.Label className={styles.Bold} >Makeup</Form.Label>
                  <Form.Control 
                  placeholder="Makeup"
                  type="text"
                  name="makeup"
                  as="textarea"
                  rows={3}
                  value={makeup}
                  onChange={handleChange}
                      />
              </Form.Group>
              {errors?.makeup?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
          {/* makeup image. Used image-upload8, handleChangeImage8 and imageInput8 for this one */}
          <Container
                  className={`${appStyles.Content} ${styles.Container2} mt-3 p-0 d-flex flex-column justify-content-center`}
                  >
              <Form.Group>
                {makeup_image ? (
                  <>
                    <figure>
                      <Image className={appStyles.Image} src={makeup_image} rounded />
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
                      message="Upload image"
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
              {errors?.makeup_image?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
              {/* """ end image 8 """" */}
          </Container>
          </Col>
          <hr/>
          <Col xs={12} md={6} >
          <Form.Group controlId="costume1" className="mb-2" >
                  <Form.Label className={styles.Bold} >Costume 1</Form.Label>
                  <Form.Control 
                  placeholder="Costume 1"
                  type="text"
                  name="costume1"
                  as="textarea"
                  rows={3}
                  value={costume1}
                  onChange={handleChange}
                      />
              </Form.Group>
              {errors?.costume1?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
              {/* costume image1 Used image-upload, handleChangeImage1 and imageInput1 for this one */}
              <Container
            className={`${appStyles.Content} d-flex flex-column justify-content-center`}
          >
            <Form.Group className="text-center pt-3">
                {costume1_image ? (
                  <>
                    <figure>
                      <Image className={appStyles.Image} src={costume1_image} rounded />
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
              {errors?.costume1_image?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
              </Container>
          </Col>
          <hr/>
      </Row>
      <hr/>
      {/* costume 2/3  */}
          <Row className="text-center mt-5">
          <Col xs={12} md={6}>
          <Form.Group controlId="costume2" className="mb-2" >
                  <Form.Label className={styles.Bold} >Costume 2</Form.Label>
                  <Form.Control 
                  placeholder="Costume 2"
                  type="text"
                  name="costume2"
                  as="textarea"
                  rows={2}
                  value={costume2}
                  onChange={handleChange}
                      />
              </Form.Group>
              {errors?.costume2?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
              {/* image 2 */}
              <Container
                  className={`${appStyles.Content} mt-3 p-0 d-flex flex-column justify-content-center`}
                  >
              <Form.Group >
                {costume2_image ? (
                  <>
                    <figure>
                      <Image className={appStyles.Image} src={costume2_image} rounded />
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
              {errors?.costume2_image?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
              {/* """ end image 2 """" */}
          </Container>
          </Col>
          <Col xs={12} md={6} >
          <Form.Group controlId="costume3" className="mb-2" >
                  <Form.Label className={styles.Bold} >Costume 3</Form.Label>
                  <Form.Control 
                  placeholder="Costume 3"
                  type="text"
                  name="costume3"
                  as="textarea"
                  rows={2}
                  value={costume3}
                  onChange={handleChange}
                      />
              </Form.Group>
              {errors?.costume3?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
          {/* image 3 */}
          <Container
                  className={`${appStyles.Content} ${styles.Container2} mt-3 p-0 d-flex flex-column justify-content-center`}
                  >
              <Form.Group>
                {costume3_image ? (
                  <>
                    <figure>
                      <Image className={appStyles.Image} src={costume3_image} rounded />
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
              {errors?.costume3_image?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
              {/* """ end image 3 """" */}
          </Container>
          </Col>
      </Row>
      <hr/>
      {/* costume 4/5  */}
      <Row className="text-center mt-5">          
          <Col xs={12} md={6} >
          <Form.Group controlId="costume4" className="mb-2" >
                  <Form.Label className={styles.Bold} >Costume 4</Form.Label>
                  <Form.Control 
                  placeholder="Costume 4"
                  type="text"
                  name="costume4"
                  as="textarea"
                  rows={2}
                  value={costume4}
                  onChange={handleChange}
                      />
              </Form.Group>
              {errors?.costume4?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
              {/* image 4 */}
          <Container
                  className={`${appStyles.Content} ${styles.Container2} mt-3 p-0 d-flex flex-column justify-content-center`}
                  >
              <Form.Group>
                {costume4_image ? (
                  <>
                    <figure>
                      <Image className={appStyles.Image} src={costume4_image} rounded />
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
              {errors?.costume4_image?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
              {/* """ end image 4 """" */}
          </Container>
          </Col>
          <Col xs={12} md={6} >
          <Form.Group controlId="costume5" className="mb-2" >
                  <Form.Label className={styles.Bold} >Costume 5</Form.Label>
                  <Form.Control 
                  placeholder="Costume 5"
                  type="text"
                  name="costume5"
                  as="textarea"
                  rows={2}
                  value={costume5}
                  onChange={handleChange}
                      />
              </Form.Group>
              {errors?.costume5?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
              {/* image 5 */}
          <Container
                  className={`${appStyles.Content} ${styles.Container2} mt-3 p-0 d-flex flex-column justify-content-center`}
                  >
              <Form.Group>
                {costume5_image ? (
                  <>
                    <figure>
                      <Image className={appStyles.Image} src={costume5_image} rounded />
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
              {errors?.costume5_image?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
              {/* """ end image 5 """" */}
          </Container>
          </Col>
      </Row>
      <hr/>
      {/* costume 6/7  */}
      <Row className="text-center mt-5">
          <Col xs={12} md={6}>
          <Form.Group controlId="costume6" className="mb-2" >
                  <Form.Label className={styles.Bold} >Costume 6</Form.Label>
                  <Form.Control 
                  placeholder="Costume 6"
                  type="text"
                  name="costume6"
                  as="textarea"
                  rows={3}
                  value={costume6}
                  onChange={handleChange}
                      />
              </Form.Group>
              {errors?.costume6?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
          {/* image 6 */}
          <Container
                  className={`${appStyles.Content} ${styles.Container2} mt-3 p-0 d-flex flex-column justify-content-center`}
                  >
              <Form.Group>
                {costume6_image ? (
                  <>
                    <figure>
                      <Image className={appStyles.Image} src={costume6_image} rounded />
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
              {errors?.costume6_image?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
              {/* """ end image 6 """" */}
          </Container>
          </Col>
          <Col xs={12} md={6} >
          <Form.Group controlId="costume7" className="mb-2" >
                  <Form.Label className={styles.Bold} >Costume 7</Form.Label>
                  <Form.Control 
                  placeholder="Costume 7"
                  type="text"
                  name="costume7"
                  as="textarea"
                  rows={3}
                  value={costume7}
                  onChange={handleChange}
                      />
              </Form.Group>
              {errors?.costume7?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
          {/* image 7 */}
          <Container
                  className={`${appStyles.Content} ${styles.Container2} mt-3 p-0 d-flex flex-column justify-content-center`}
                  >
              <Form.Group>
                {costume7_image ? (
                  <>
                    <figure>
                      <Image className={appStyles.Image} src={costume7_image} rounded />
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
              {errors?.costume7_image?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
              {/* """ end image 7 """" */}
          </Container>
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
    );
}

export default CharacterCreate
