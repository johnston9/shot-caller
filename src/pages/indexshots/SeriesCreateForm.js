import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import styles from "../../styles/PostCreateEditForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import { Alert} from "react-bootstrap";
import { useHistory } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import TopBox from "../../components/TopBox";
import { useRedirect } from "../../hooks/Redirect";

const SeriesCreateForm = ({topbox} ) => {
    useRedirect("loggedOut")
  const [errors, setErrors] = useState({});

  const [postData, setPostData] = useState({
    name: "",
    content: "", });
  const { name, content } = postData;

  const history = useHistory();

  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("name", name);
    formData.append("content", content);
      
    try {
      await axiosReq.post("/series/", formData);
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
        className={`${btnStyles.Button} ${btnStyles.Blue} px-3 pr-3 `}
        onClick={() => history.goBack()}
      >
        Cancel
      </Button>
      <Button className={`${btnStyles.Button} ${btnStyles.Blue} px-3 pl-3`} type="submit">
        Create
      </Button>
    </div>
  );

  return (
    <div>
      {topbox ? (
        ""
      ) : (
        <TopBox title="Create Series" />
      ) }
    <Button
      className={`${btnStyles.Button} ${btnStyles.Blue} my-1`}
      onClick={() => history.goBack()}
      >
      Back
    </Button>
    <Form className={`${styles.Back} mt-4`} onSubmit={handleSubmit}>
      <h4 className="text-center mt-3">Create Series</h4>
      <p className={` mb-0 py-1 ${styles.SubTitle }`}></p>
    <Row className="text-center">
      <Col xs={12} md={{span: 6, offset: 3 }} 
        className="p-0 p-md-2 d-flex justify-content-center ">
        <Form.Group controlId="name" className={`${styles.Width2} `} >
            <Form.Label className={`${styles.Bold}`} >Series Name</Form.Label>
            <Form.Control 
            type="text"
            name="name"
            value={name}
            className={`${styles.Input}`}
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
    <Row>
      <Col xs={12} md={{span: 8, offset: 2 }} 
      className="p-0 p-md-2 d-flex justify-content-center">
      <Form.Group controlId="content" className={`${styles.Width2} `} >
                <Form.Label className={`${styles.Bold}`} >Series Content</Form.Label>
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
    {/* buttons */}
    <Row>
        <Col>
        <div className= {` my-3`} >{buttons} </div>
        </Col>
    </Row>
  </Form>
  </div>
  );
}

export default SeriesCreateForm