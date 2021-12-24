import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import door from "../../assets/door.png";
import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";

import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

import TopBox from "../../components/TopBox";
import axios from "axios";
import { useRedirect } from "../../hooks/Redirect";

const SignUpForm = () => { 
  useRedirect("loggedIn");
  const [signUpData, setSignUpData] = useState({
    username: "",
    password1: "",
    password2: "",
    key: "",
  })

  const { username, password1, password2, key } = signUpData;

  const [errors, setErrors] = useState({});

  const history = useHistory()

  const handleChange = (event) => {
    setSignUpData({
      ...signUpData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/dj-rest-auth/registration/", signUpData)
      history.push("/signin");
    } catch (err) {
      setErrors(err.response?.data);
    }
  }

  return (
    <div className={styles.SignupBox} >
        <TopBox title="Sign Up"/>
        <Row className={styles.Row}>
          <Col
            xs={1} md={3}
          >
            {/* <Image
                className={`${styles.FillerImagel}`}
                src={door}
            /> */}
          </Col>
          <Col className="my-auto py-2 p-md-2" xs={10}
          md={6}
           >
            <Container >
              <h1 className={styles.Header}>sign up</h1>
              <Form onSubmit={handleSubmit} className={styles.Form} >
                <Form.Group controlId="username" className="mb-2" >
                    <Form.Label className="d-none" >Username</Form.Label>
                    <Form.Control 
                      className={styles.Input}
                      type="text" placeholder="Username"
                      name="username"
                      value={username}
                      onChange={handleChange}
                       />
                </Form.Group>
                {errors.username?.map((message, idx) => (
                  <Alert variant="warning" key={idx}>
                    {message}
                  </Alert>
                ))}

                <Form.Group controlId="password1" className="mb-2">
                    <Form.Label className="d-none" >Password</Form.Label>
                    <Form.Control 
                      className={styles.Input}
                      type="password" placeholder="Password1"
                      name="password1" 
                      value={password1}
                      onChange={handleChange}
                      />
                </Form.Group>
                {errors.password1?.map((message, idx) => (
                  <Alert variant="warning" key={idx}>
                    {message}
                  </Alert>
                ))}

                <Form.Group controlId="password2" className="mb-2">
                    <Form.Label className="d-none" >Confirm Password</Form.Label>
                    <Form.Control 
                      className={styles.Input}
                      type="password2" placeholder="Confirm Password"
                      name="password2" 
                      value={password2}
                      onChange={handleChange}
                      />
                </Form.Group>
                {errors.password2?.map((message, idx) => (
                  <Alert variant="warning" key={idx}>
                    {message}
                  </Alert>
                ))}

                <Form.Group controlId="key" className="mb-2">
                    <Form.Label className="d-none" >Enter Key</Form.Label>
                    <Form.Control 
                      className={styles.Input}
                      type="key" placeholder="Enter Key"
                      name="key" 
                      value={key}
                      onChange={handleChange}
                      />
                </Form.Group>
                {errors.key?.map((message, idx) => (
                  <Alert variant="warning" key={idx}>
                    {message}
                  </Alert>
                ))}

                <div className="text-center" >
                <Button
                  className={`${btnStyles.Button} ${btnStyles.Wide2} ${btnStyles.Bright}`}
                  type="submit"
                >
                  Sign up
                </Button>
                </div>
                {errors.non_field_errors?.map((message, idx) => (
                  <Alert key={idx} variant="warning" className="mt-3">
                    {message}
                  </Alert>
                ))}
                </Form>

            </Container>
            <Container className="mt-3" >
              <Link className={styles.Link} to="/signin">
                Already have an account? <span>Sign in</span>
              </Link>
            </Container>
          </Col>
          <Col
            xs={1} md={3}
            className={`my-auto d-none d-md-block p-2`}
          >
            {/* <Image
              className={`${appStyles.FillerImager}`}
              src={door}
            /> */}
          </Col>
        </Row>
    </div>
  );
};

export default SignUpForm;