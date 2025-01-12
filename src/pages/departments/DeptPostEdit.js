/* Form page to edit a DeptPost */
import React, { useEffect, useRef, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Asset3 from "../../components/Asset3";

import Upload from "../../assets/upload.png";
import styles from "../../styles/PostCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import Image from "react-bootstrap/Image";
import Alert from "react-bootstrap/Alert";

import { useHistory } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import TopBox from "../../components/TopBox";
import { useRedirect } from "../../hooks/Redirect";
import { useParams } from "react-router-dom";
import { toast } from 'react-toastify';

function DeptPostEdit() {
  useRedirect();
  const [errors, setErrors] = useState({});
    const [postData, setPostData] = useState({
        title: "",
        content: "",
        departments: "",
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

      const history = useHistory();
      const { id } = useParams();

      useEffect(() => {
        const handleMount = async () => {
          try {
            const { data } = await axiosReq.get(`/department/posts/${id}/`);
            const { title, content, departments, 
                image1, image2, image3, image4, image5,} = data;
               setPostData({ title, content, departments, 
                image1, image2, image3, image4, 
                image5 });
          } catch (err) {
            console.log(err);
          }
        };
    
        handleMount();
      }, [history, id]);
    
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
      await axiosReq.put( `/department/posts/${id}`, formData);
      toast.success(`Post Edited`);
      history.push(`/department/posts/${id}`);
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  }

  const textFields = ( 
    <div>
    <Row className="mt-3">
    <Col className="d-flex justify-content-center" xs={12} md={6} >
    <Form.Group controlId="title" className={`${styles.Width2} text-center`} >
    <Form.Label className={`${styles.BoldScene} `} >Title</Form.Label>
          <Form.Control 
          className={styles.Input}
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
    </Col>
    <Col className="d-flex justify-content-center" xs={12} md={6} >
      <Form.Group controlId="content" className={`${styles.Width2} text-center`} >
      <Form.Label className={`${styles.BoldScene} `} >Content</Form.Label>
          <Form.Control 
              className={styles.InputScene}
              type="text"
              name="content"
              as="textarea"
              rows={1}
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
  </div>
    // <div>
    //   <Row className="mt-3">
    //   <Col className="d-flex justify-content-center">
    //     <Form.Group controlId="departments" className={`${styles.Width2} text-center`} >
    //     <Form.Label className={`${styles.BoldScene} `} >Department</Form.Label>
    //           <Form.Control as="select"
    //             name="departments"
    //             className={styles.InputDept}
    //             value={departments}
    //             onChange={handleChange}
    //             aria-label="act select">
    //             <option>Select</option>
    //             <option value="art">Art</option>
    //             <option value="camera">Camera</option>
    //             <option value="casting">Casting</option>
    //             <option value="electric">Electric/Grip</option>
    //             <option value="location">Location</option>
    //             <option value="make-up">Hair/Makeup</option>
    //             <option value="post">Post/VFX</option>
    //             <option value="production">Production</option>
    //             <option value="script">Script</option>
    //             <option value="sound">Sound</option>
    //             <option value="stunts">Stunts</option>
    //             <option value="wardrobe">Wardrobe</option> 
                
    //           </Form.Control>
    //       </Form.Group>
    //       {errors?.departments?.map((message, idx) => (
    //         <Alert variant="warning" key={idx}>
    //           {message}
    //         </Alert>
    //   ))}
    //   </Col>
    //   </Row>
    //   <Row className="mt-3">
    //   <Col className="d-flex justify-content-center">
    //   <Form.Group controlId="title" className={`${styles.Width2} text-center`} >
    //   <Form.Label className={`${styles.BoldScene} `} >Title</Form.Label>
    //         <Form.Control 
    //         className={styles.Input}
    //         type="text"
    //         name="title"
    //         value={title}
    //         onChange={handleChange}
    //             />
    //   </Form.Group>
    //   {errors?.title?.map((message, idx) => (
    //     <Alert variant="warning" key={idx}>
    //       {message}
    //     </Alert>
    //   ))}
    //   </Col>
    //   </Row>
    //   <Row className="mt-3">
    //   <Col className="d-flex justify-content-center">
    //     <Form.Group controlId="content" className={`${styles.Width2} text-center`} >
    //     <Form.Label className={`${styles.BoldScene} `} >Content</Form.Label>
    //         <Form.Control 
    //             className={styles.InputSceneDept}
    //             type="text"
    //             name="content"
    //             as="textarea"
    //             rows={4}
    //             value={content}
    //             onChange={handleChange}
    //             />
    //     </Form.Group>
    //     {errors?.content?.map((message, idx) => (
    //       <Alert variant="warning" key={idx}>
    //         {message}
    //       </Alert>
    //     ))}
    //   </Col>
    //   </Row>
    // </div>
  )

  const buttons = (
    <div className="text-center">    
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
        <TopBox work={`${departments} Department`}
        title="Edit Post" />
    <Button
      className={`${btnStyles.Button} ${btnStyles.Blue} my-2`}
      onClick={() => history.goBack()}
      >
      Back
    </Button>
    <h5 style={{ textTransform: 'uppercase'}} 
    className={`text-center mt-3 py-1 ${styles.SubTitle }`}>
    Edit Post</h5>
    <Form className={` ${styles.White }`}  onSubmit={handleSubmit}>
    <Row>
    <Col className="p-0 p-md-2">
          {textFields}
    </Col>
    </Row>
    <hr className="mt-3 mb-3"/>
    {/* images */}
    <div>
    {/* image 1/2 */}
    <Row>
    <Col className="text-center" md={6}>
    <p className={`${styles.BoldScene} 
                mb-0 text-center mx-3`} >Image 1</p>
      <div className={`mt-3 p-0 d-flex flex-column justify-content-center`}>
        <Form.Group className="text-center">
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
                htmlFor="image-upload"
              >
                <Asset3
                  src={Upload}
                  height={"20px"}
                  width={"20px"}
                  message="Upload Image 1"
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
      </div>
      <hr className={`${styles.Break1} d-block d-md-none mt-4`}/>
    </Col>
    <Col md={6} className="text-center">
    <p className={`${styles.BoldScene} 
                mb-0 text-center mx-3`} >Image 2</p>
    <div className={`mt-3 p-0 d-flex flex-column justify-content-center`}>
          <Form.Group className="text-center" >
            {image2 ? (
              <>
                <figure>
                  <Image className={appStyles.Image} src={image2} rounded />
                </figure>
                <div>
                  <Form.Label
                    className={`${btnStyles.Button} ${btnStyles.Blue}`}
                    htmlFor="image-upload2"
                  >
                    Change the image
                  </Form.Label>
                </div>
              </>
            ) : (
              <Form.Label
                // className="my-1 ml-3"
                htmlFor="image-upload2"
              >
                <Asset3
                  src={Upload}
                  height={"20px"}
                  width={"20px"}
                  message="Upload Image 2"
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
    </div>
      <hr className={`${styles.Break1} d-block d-md-none mt-4`}/>
    </Col>   
    </Row>
    <hr className={`${styles.Break1} mt-3 mb-3 d-none d-md-block`}/>
    {/* image 3/4 */}
    <Row>
    <Col md={6} className="text-center mt-3">
    <p className={`${styles.BoldScene} 
                mb-0 text-center mx-3`} >Image 3</p>
    <Container
              className={`${appStyles.Content} ${styles.Container2} mt-3 p-0 d-flex flex-column justify-content-center`}
              >
          <Form.Group className="text-center" >
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
                htmlFor="image-upload3"
              >
                <Asset3
                  src={Upload}
                  height={"20px"}
                  width={"20px"}
                  message="Upload Image 3"
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
      <hr className={`${styles.Break1} d-block d-md-none mt-4`}/>
    </Col>
    <Col md={6} className="text-center mt-3">
    <p className={`${styles.BoldScene} 
                mb-0 text-center mx-3`} >Image 4</p>
    <Container
              className={`${appStyles.Content} ${styles.Container2} mt-3 p-0 d-flex flex-column justify-content-center`}
              >
          <Form.Group className="text-center">
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
                htmlFor="image-upload4"
              >
                <Asset3
                  src={Upload}
                  height={"20px"}
                  width={"20px"}
                  message="Upload Image 4"
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
    <hr className={`${styles.Break1} d-block d-md-none mt-4`}/>
    </Col>
    </Row>
    <hr className={`${styles.Break1} mt-3 mb-3 d-none d-md-block`}/>
    {/* image 5 */}
    <Row>
    <Col md={{span: 6, offset: 3}} className="text-center mt-3">
    <p className={`${styles.BoldScene} 
                mb-0 text-center mx-3`} >Image 5</p>
    <Container
              className={`${appStyles.Content} ${styles.Container2} mt-3 p-0 d-flex flex-column justify-content-center`}
              >
          <Form.Group className="text-center">
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
                htmlFor="image-upload5"
              >
                <Asset3
                  src={Upload}
                  height={"20px"}
                  width={"20px"}
                  message="Upload Image 5"
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
      <hr className={`${styles.Break1} d-block d-md-none mt-4`}/>
    </Col>
    </Row>
    </div>
    <hr className={`${styles.Break1} mt-3 mb-3 d-none d-md-block`}/>
    <Row>
      <Col>
        <Container className= {`${styles.Container} mt-3`} >{buttons} </Container>
      </Col>
    </Row>
  </Form>
  </div>
  );
}

export default DeptPostEdit;