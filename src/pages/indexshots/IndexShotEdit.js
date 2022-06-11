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
import InfoCreateShot from "./InfoCreateShot";

import { useHistory, useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import TopBox from "../../components/TopBox";
import { useRedirect } from "../../hooks/Redirect";

const IndexShotEdit = ({setShowEdit, setHasOrder} ) => {
    useRedirect("loggedOut");
  const [errors, setErrors] = useState({});
  const { id } = useParams();
  const [showInfo, setShowInfo] = useState(false);
  const [postData, setPostData] = useState({
    series_id: "",
    series_name: "",
    number: "",
    content: "",
    image: "",
  });

  const {
    series_id,
    series_name,
    number,
    content,
    image, } = postData;

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

    formData.append("series_id", series_id);
    formData.append("series_name", series_name);
    formData.append("number", number);
    formData.append("content", content);
    formData.append("image", image);
  
    try {
      await axiosReq.post("/indexshots/", formData);
      setHasOrder(true);
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
        className={`${btnStyles.Button} ${btnStyles.Blue} mr-3 px-4`}
        onClick={() => setShowEdit(false)}
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
        <TopBox title="Create Index Shot" />
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
                    <InfoCreateShot  /> 
                    ) } 
    <Container className= {`mt-3 ${appStyles.Content} ${styles.Container}`} >
      <Form className="mt-0" onSubmit={handleSubmit}>
      <h5 className={`text-center mb-4 pl-3 py-1 mx-3 ${styles.SubTitle }`}
             style={{ textTransform: 'uppercase'}}>Create Index Shot</h5>
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
            <Form.Group controlId="content" className={`${styles.Width2} `} >
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
        <Col xs={12} md={6} 
            className="p-0 p-md-2 d-flex justify-content-center">
            <Form.Group controlId="image" className={`${styles.Width2} `} >
                        <Form.Label className={`${styles.Bold}`} >Style</Form.Label>
                        <Form.Control 
                        type="text"
                        className={styles.InputScene}
                        as="textarea"
                        name="style"
                        rows={2}
                        value={image}
                        onChange={handleChange}
                            />
                    </Form.Group>
                    {errors?.image?.map((message, idx) => (
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

export default IndexShotEdit