import React, { useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import styles from "../../styles/Indexes.module.css";
import btnStyles from "../../styles/Button.module.css";
import { Alert} from "react-bootstrap";
import { useHistory } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import appStyles from "../../App.module.css";
import { useRedirect } from "../../hooks/Redirect";
import Container from "react-bootstrap/Container";

const SeriesEditForm = (props ) => {
  useRedirect("loggedOut")
const [errors, setErrors] = useState({});
const {seri, setSeries, id, setShowEdit, setHasOrder, name1 } = props;
const [postData, setPostData] = useState({
  name: "",
  content: "", });
const { name, content } = postData;

const history = useHistory();

useEffect(() => {
  const handleMount = async () => {
    const { name, content} = seri;
    setPostData({ name, content})
  };

  handleMount();
}, [id]);

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
    const {data} = await axiosReq.put(`/series/${id}/`, formData);
    const {name, content} = data;
    setSeries((series) => ({
      ...series,
      results: series.results.map((seri) => {
        return seri.id === id
          ? {
              ...seri,
              name: name,
              content: content,
            }
          : seri;
      }),
    }));
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
      className={`${btnStyles.Button} ${btnStyles.Blue} px-3 pr-3 `}
      onClick={() => history.goBack()}
    >
      Cancel
    </Button>
    <Button className={`${btnStyles.Button} ${btnStyles.Blue} px-3 pl-3`} type="submit">
      Edit
    </Button>
  </div>
);

return (
  <div>
  <Container className= {`text-center mt-0 ${appStyles.Content} ${styles.Container}`} >
  <Form className={` mt-0`} onSubmit={handleSubmit}>
  <h5 className={`text-center mb-0 pl-3 py-0 ${styles.SubTitle }`}
   style={{ textTransform: 'uppercase'}}>Edit Series
  </h5>
  <Row className="text-center">
    <Col xs={12} 
      className="p-0  d-flex justify-content-center ">
      <Form.Group controlId="name" className={`${styles.Width95} `} >
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
    <Col xs={12}
    className="p-0 d-flex justify-content-center">
    <Form.Group controlId="content" className={`${styles.Width95} `} >
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
</Container>
</div>
);
}

export default SeriesEditForm