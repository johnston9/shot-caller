/* Form Page to create a Location */
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import styles from "../../styles/PostCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import Alert from "react-bootstrap/Alert";

import { useHistory } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import TopBox from "../../components/TopBox";
import { useRedirect } from "../../hooks/Redirect";
import { toast } from 'react-toastify';
import Important from "./Important";

const LocationsCreate = () => {
    useRedirect();
    const [errors, setErrors] = useState({});
    const [showImp, setShowImp] = useState(false); 
    const [postData, setPostData] = useState({
        name: "",
        description: "",
      });

      const { name,
              description,
        } = postData;

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
        formData.append("description", description);
      
        try {
          await axiosReq.post("/locations/", formData);
          history.push(`/locations/`);
          toast.success(`Location "${name}" Created`);
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
          Create
        </Button>
      </div>
    );
  
    return (
      <div>
        <TopBox title="Create Location" />
        <Button
        className={`${btnStyles.Button} ${btnStyles.Blue} text-left my-2`}
        onClick={() => history.goBack()}
        >
        Back
        </Button>
        <Button
        className={`float-right my-2 ${btnStyles.Order} ${btnStyles.Button}`}
        onClick={() => setShowImp(showImp => !showImp)} >IMPORTANT
       </Button>
       {!showImp ? (
            ""
                ) : (
                  <Important  /> 
        ) } 
        <Container className= {`px-0 ${appStyles.Content} ${styles.Container} mb-0 pb-0`} >
          <Form className="mt-0 mb-0 pb-0" onSubmit={handleSubmit}>
          <h5 className={`text-center mt-0 mb-4 py-0 ${styles.SubTitle }`}>
          CREATE LOCATION</h5>
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
          <Row className="text-center mt-3">
          <Col xs={12} className="d-flex justify-content-center" >
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
          </Row>
          <Row className="pb-3">
            <Col>
            {buttons}
            </Col>
          </Row>
          </Form>
        </Container>
    </div>
    );
}

export default LocationsCreate
