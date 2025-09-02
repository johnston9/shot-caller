/* Form Page to edit a Moodboard 
 * The word moodshots is used through the app in the urls for moodboards */
import React, { useEffect, useRef, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Asset from "../../components/Asset";
import { toast } from 'react-toastify';
import Upload from "../../assets/upload.png";
import styles from "../../styles/Scene.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import Image from "react-bootstrap/Image";
import Alert from "react-bootstrap/Alert";

import { useHistory, useParams } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import TopBox from "../../components/TopBox";
import { useRedirect } from "../../hooks/Redirect";
import Asset2 from "../../components/Asset2";
import { useCharactersContext, useLocationsContext, useScenesContext } from "../../contexts/Scene_chars_locs";

const MoodboardEdit = () => {
  useRedirect();
  const [errors, setErrors] = useState({});

  const scenes = useScenesContext();
  const characters = useCharactersContext();
  const locations = useLocationsContext();
  const [postData, setPostData] = useState({
    scene: "",
    number: "",
    title: "",
    content: "",
    character: "",
    location: "",
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    image5: "",
  });

  const { scene, number, title, content, character, 
    location, image1, image2, image3, image4, image5 } = postData;

  const imageInput1 = useRef(null);
  const imageInput2 = useRef(null);
  const imageInput3 = useRef(null);
  const imageInput4 = useRef(null);
  const imageInput5 = useRef(null);

  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(`/moodshots/${id}/`);
        console.log(data);
        const { scene, number, title, content, character, 
            location, image1, image2, image3, image4, image5 } = data;
 
    setPostData({ scene, number, title, content, character, 
        location, image1, image2, image3, image4, image5 });
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
    console.log(event.target.value)
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

  const handleChangeScene = (event) => {
    const scene = event.target.value.split("_")[0];
    const number = event.target.value.split("_")[1];
    setPostData({
      ...postData,
      scene: scene,
      sceneNumber: number,
    });
  };

const dropfields = (
  <div>
    <Row>
      <Col xs={4} className="text-center" >
      {/* scene */}
      <Form.Group controlId="scenedrop" className="mb-2" >
          <Form.Label className={`${styles.BoldScene} `} >Scene</Form.Label>
          <Form.Control as="select"
              name="scene"
              className={styles.InputChar}
              value={scene.id}
              onChange={handleChangeScene}
              aria-label="scene select">
              <option value="" >{number}</option>
              {scenes.results.length && (
                  scenes.results.map((scene) => (
                  <option key={scene.id}
                   value={`${scene.id}_${scene.number}`}  >
                     {scene.number} - {scene.location} "{scene.title}"</option>
                  ) )) }
              <option ></option>
          </Form.Control>
      </Form.Group>
      {errors?.scene?.map((message, idx) => (
           <Alert variant="warning" key={idx}>
           {message}
           </Alert>
       ))}
      </Col>
      <Col xs={4} className="text-center" >
        {/* location */}
        <Form.Group controlId="locationdrop" className="mb-2" >
            <Form.Label className={`${styles.BoldScene} `} >Location</Form.Label>
            <Form.Control as="select"
                name="location"
                className={styles.InputChar}
                value={location}
                onChange={handleChange}
                aria-label="location select">
              <option  value=""> </option>
                {locations.results.length && (
                    locations.results.map((location) => (
                    <option key={location.id} value={location.name} >{location.name}</option>
                    ) )) }
            </Form.Control>
        </Form.Group>
        {errors?.location?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
            {message}
            </Alert>
        ))}
        </Col>
      <Col xs={4} className="text-center" >
        {/* character */}
        <Form.Group controlId="characterdrop" className="mb-2" >
            <Form.Label className={`${styles.BoldScene} `} >Character</Form.Label>
            <Form.Control as="select"
                name="character"
                className={styles.InputChar}
                value={character}
                onChange={handleChange}
                aria-label="character select">
                <option  value=""></option>
                {characters.results.length && (
                    characters.results.map((character) => (
                    <option key={character.id} value={character.role} >{character.role}</option>
                    ) )) }
            </Form.Control>
        </Form.Group>
        {errors?.character?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}
        </Col>
    </Row>
    <hr/>
  </div>
)

const textFields = (
    <div>
    <Row>
    <Col md={6}>
    <Form.Group controlId="title" className={`${styles.Width95} text-center`} >
    <Form.Label className={`${styles.BoldScene} `} >Title</Form.Label>
    <Form.Control 
    type="text"
    className={styles.Input}
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
    <Col md={6} className="mt-3 mt-md-0">
    <Form.Group controlId="content" className={`${styles.Width95} text-center`} >
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
)

  const handleSubmit = async (event) => {
    event.preventDefault();
    setPostData({
      ...postData
    });
    const formData = new FormData();

    formData.append("scene", scene);
    formData.append("number", number);
    formData.append("title", title);
    formData.append("content", content);
    formData.append("scene", scene);
    formData.append("character", character);
    formData.append("location", location);
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
      await axiosReq.put(`/moodshots/${id}`, formData);
      toast.success(`Moodboard Updated`);
      history.goBack();
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  }

const buttons = (
  <div className="text-center mb-3">    
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
          <TopBox title="Edit Moodboard"/>
            <Button
                className={`${btnStyles.Button} ${btnStyles.Blue} my-2`}
                onClick={() => history.goBack()}
                >
                Back
            </Button>
            {/* <Button
              className={`float-right py-0 my-2 ${btnStyles.Order} ${btnStyles.Button}`}
              onClick={() => setShowInfo(showInfo => !showInfo)} >INFO
            </Button>
              {!showInfo ? (
                  ""
                      ) : (
                        <Info  /> 
                        ) }  */}
            {/* titles  */}
            <Row>
              <Col className="text-center" >
              {!number && !location && !character ? (
              <h5 className={`mt-1 mb-2 py-1 ${styles.SubTitleMood }`}
              style={{ textTransform: 'uppercase'}}>
              <span className={`${styles.Span100 }`} 
              style={{ fontStyle: 'italic' }}>{title} - </span>Moodboard</h5>
              ) : (
                <h5 className={`mt-1 mb-2 py-1 ${styles.SubTitleMood }`}
              style={{ textTransform: 'uppercase'}}>
                {number && <span className={`${styles.Span100 }`} style={{ fontStyle: 'italic' }}>
                  Scene {number} - </span> }
              {location && <span className={`${styles.Span100 }`} style={{ fontStyle: 'italic' }}> 
                {location} - </span> }
              {character && <span className={`${styles.Span100 }`} style={{ fontStyle: 'italic' }}> 
                {character} - </span> }
              Moodboard
              </h5>
                )}
              </Col>
            </Row>
            <Form onSubmit={handleSubmit} className={`pt-3 px-3 ${styles.White }`}>
                {textFields}
                <hr/>
                {/* image 1 2 */}
                <Row className="d-flex align-items-center">
                <Col xs={12} md={6} className={`pr-md-2`}>
                <p className={`${styles.BoldScene} text-center mb-2 mt-md-0 mt-2`} >
                  Image 1</p>
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
                            height={"35px"}
                            width={"35px"}
                            message="Click or tap to Upload Image"
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
                <hr className="d-block d-md-none"/>
                </Col>
                <Col xs={12} md={6} className={`pr-md-2`}>
                <p className={`${styles.BoldScene} text-center mb-2 mt-md-0 mt-2`} >
                  Image 2</p>
                <Form.Group className="text-center pt-3">
                    {image2 ? (
                        <>
                        <figure>
                            <Image className={appStyles.Image} 
                            src={image2} rounded />
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
                        className="my-1"
                        htmlFor="image-upload2"
                        >
                        <Asset
                            src={Upload}
                            height={"35px"}
                            width={"35px"}
                            message="Click or tap to Upload Image"
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
                <hr className="d-block d-md-none"/>
                </Col>
                </Row>
                <hr className="d-none d-md-block"/>
                {/* image 3 4 */}
                <Row className="d-flex align-items-center">
                <Col xs={12} md={6} className={`pr-md-2`}>
                <p className={`${styles.BoldScene} text-center mb-2 mt-md-0 mt-2`} >
                  Image 3</p>
                <Form.Group className="text-center pt-3">
                    {image3 ? (
                        <>
                        <figure>
                            <Image className={appStyles.Image} src={image3} rounded />
                        </figure>
                        <div>
                            <Form.Label
                            className={`${btnStyles.Button} ${btnStyles.Blue}`}
                            htmlFor="image-upload3"
                            >
                            Change the image
                            </Form.Label>
                        </div>
                        </>
                    ) : (
                        <Form.Label
                        className="my-1"
                        htmlFor="image-upload3"
                        >
                        <Asset
                            src={Upload}
                            height={"35px"}
                            width={"35px"}
                            message="Click or tap to Upload Image"
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
                <hr className="d-block d-md-none"/>
                </Col>
                <Col xs={12} md={6} className={`pr-md-2`}>
                <p className={`${styles.BoldScene} text-center mb-2 mt-md-0 mt-2`} >
                  Image 4</p>
                <Form.Group className="text-center pt-3">
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
                            className="my-1"
                            htmlFor="image-upload4"
                            >
                            <Asset
                            src={Upload}
                            height={"35px"}
                            width={"35px"}
                            message="Click or tap to Upload Image"
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
                <hr className="d-block d-md-none"/>
                </Col>
                </Row>
                <hr className="d-none d-md-block"/>
                {/* image 5 */}
                <Row>
                <Col xs={12} md={{span: 6, offset: 3}} className={`pr-md-2`}>
                <p className={`${styles.BoldScene} text-center mb-2 mt-md-0 mt-2`} >
                  Image 5</p>
                <Form.Group className="text-center pt-3">
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
                            className="my-1"
                            htmlFor="image-upload5"
                            >
                            <Asset
                            src={Upload}
                            height={"35px"}
                            width={"35px"}
                            message="Click or tap to Upload Image"
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
                <hr className="d-block d-md-none"/>
                </Col>   
                </Row>
                <hr className="d-none d-md-block"/>
                <Row>
                <Col>
                    <Container className= {`${styles.Container} mt-3`} >{buttons} </Container>
                </Col>
                </Row>
            </Form> 
        </div>
    )
}

export default MoodboardEdit