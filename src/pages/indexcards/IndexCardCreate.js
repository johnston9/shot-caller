import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import styles from "../../styles/Scene.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import Alert from "react-bootstrap/Alert";
import Info from "./Info";

import { useHistory } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import TopBox from "../../components/TopBox";
import { useRedirect } from "../../hooks/Redirect";

const IndexCardCreate = ({setShow} ) => {
    useRedirect("loggedOut");
  const [errors, setErrors] = useState({});
  const [showInfo, setShowInfo] = useState(false);
  const [postData, setPostData] = useState({
    number: "",
    story: "",
    style: "",
  });

  const { number, story, style } = postData;

  const history = useHistory();

  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
    console.log(event.target.value)
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("number", number);
    formData.append("story", story);
    formData.append("style", style);
  
    try {
      await axiosReq.post("/indexcards/", formData);
      history.goBack();
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
      <Button className={`${btnStyles.Button} ${btnStyles.Blue} mr-3 px-4`} type="submit">
        Create
      </Button>
    </div>
  );

  return (
    <div className="mt-3">
        <TopBox title="Create Index Card" />
        <Button
        className={`${btnStyles.Button} ${btnStyles.Blue} my-1`}
        onClick={() => history.goBack()}
        >
        Back
        </Button>
        <Button
                className={`float-right py-0 mt-1 ${btnStyles.Order} ${btnStyles.Button}`}
                onClick={() => setShowInfo(showInfo => !showInfo)} >INFO
        </Button>
        {!showInfo ? (
            ""
                ) : (
                    <Info  /> 
                    ) } 
    <Container className= {`mt-3 ${appStyles.Content} ${styles.Container}`} >
      <Form className="mt-0" onSubmit={handleSubmit}>
      <h5 className={`text-center mb-4 pl-3 py-1 mx-3 ${styles.SubTitle }`}
             style={{ textTransform: 'uppercase'}}>Create Index Card</h5>
      <Row>
          <Col xs={{span: 6, offsset: 3}} className="d-flex justify-content-center" >
          <Form.Group controlId="number" className={`${styles.Width2} text-center`}  >
                  <Form.Label className={`${styles.Bold} `} >Number</Form.Label>
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
        <Col xs={12} md={6} 
            className="p-0 p-md-2 d-flex justify-content-center">
            <Form.Group controlId="story" className={`${styles.Width2} `} >
                        <Form.Label className={`${styles.Bold}`} >Story</Form.Label>
                        <Form.Control 
                        type="text"
                        className={styles.InputScene}
                        as="textarea"
                        name="story"
                        rows={2}
                        value={story}
                        onChange={handleChange}
                            />
                    </Form.Group>
                    {errors?.story?.map((message, idx) => (
                    <Alert variant="warning" key={idx}>
                        {message}
                    </Alert>
                    ))}
        </Col> 
        <Col xs={12} md={6} 
            className="p-0 p-md-2 d-flex justify-content-center">
            <Form.Group controlId="style" className={`${styles.Width2} `} >
                        <Form.Label className={`${styles.Bold}`} >Style</Form.Label>
                        <Form.Control 
                        type="text"
                        className={styles.InputScene}
                        as="textarea"
                        name="style"
                        rows={2}
                        value={style}
                        onChange={handleChange}
                            />
                    </Form.Group>
                    {errors?.style?.map((message, idx) => (
                    <Alert variant="warning" key={idx}>
                        {message}
                    </Alert>
                    ))}
        </Col> 
      </Row>
      <Row>
        <Col>
          <div className= {` my-3`} >{buttons} </div>
        </Col>
      </Row>
    </Form>
    </Container>
    </div>
  )
}

export default IndexCardCreate