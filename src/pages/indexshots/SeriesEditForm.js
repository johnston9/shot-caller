/* Form Page to edit a Series */
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import styles from "../../styles/Indexes.module.css";
import btnStyles from "../../styles/Button.module.css";
import { Alert} from "react-bootstrap";
import { axiosReq } from "../../api/axiosDefaults";

const SeriesEditForm = (props ) => {
const [errors, setErrors] = useState({});
const {seri, setSeries, id, setShowEdit } = props;
const [postData, setPostData] = useState({
  name: "",
  content: "", });
const { name, content } = postData;

useEffect(() => {
  const handleMount = async () => {
    const { name, content} = seri;
    setPostData({ name, content})
  };

  handleMount();
}, [seri]);

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
      className={`${btnStyles.Button} ${btnStyles.Blue} px-2 mr-3`}
      onClick={() => setShowEdit(false)}
    >
      Cancel
    </Button>
    <Button className={`${btnStyles.Button} ${btnStyles.Blue} px-3 ml-3`} type="submit">
      Edit
    </Button>
  </div>
);

return (
  <div>
  <div className= {`text-center mt-0 ${styles.Editbox} mx-0`} >
  <Form className={` mt-0`} onSubmit={handleSubmit}>
  <h5 className={`text-center mb-0 py-0 ${styles.SubTitle }`}
   style={{ textTransform: 'uppercase'}}>Edit Series
  </h5>
  <Row className="text-center mt-1">
    <Col xs={12} 
      className="p-0  d-flex justify-content-center ">
      <Form.Group controlId="name" className={`${styles.Width} `} >
          <Form.Label className={`${styles.Bold}`} >Name</Form.Label>
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
  <Row className="text-center mt-1">
    <Col xs={12}
    className="p-0 d-flex justify-content-center">
    <Form.Group controlId="content" className={`${styles.Width90} `} >
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
  </Row>
  {/* buttons */}
  <Row>
      <Col>
      <div className= {` my-3`} >{buttons} </div>
      </Col>
  </Row>
</Form>
</div>
</div>
);
}

export default SeriesEditForm