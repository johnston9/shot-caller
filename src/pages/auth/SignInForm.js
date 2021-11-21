import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import door from "../../assets/door.png";
import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";

import { Form, Button, Image, Col, Row, Container, Alert } from "react-bootstrap";
import TopBox from "../../components/TopBox";
import axios from "axios";
import { SetCurrentUserContext } from "../../App";

const SignInForm = () => { 
    const setCurrentUser = useContext(SetCurrentUserContext)

  const [signInData, setSignInData] = useState({
    username: "",
    password2: "",
  })

  const { username, password } = signInData;

  const [errors, setErrors] = useState({});

  const history = useHistory()

  const handleChange = (event) => {
    setSignInData({
      ...signInData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const {data} = await axios.post("/dj-rest-auth/login/", signInData)
      setCurrentUser(data.user);
      history.push("/signin");
    } catch (err) {
      setErrors(err.response?.data);
    }
  }

  return (
    <div className={styles.SignupBox} >
        <TopBox />
        <Row className={styles.Row}>
          <Col
            xs={1} md={1}
          >
            <Image
                className={`${styles.FillerImagel}`}
                src={door}
            />
          </Col>
          <Col className="my-auto py-2 p-md-2" xs={10}
          md={{ span: 8, offset: 1 }}
           >
            <Container>
              <h1 className={styles.Header}>Sign in</h1>
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

                <Form.Group controlId="password" className="mb-2">
                    <Form.Label className="d-none" >Password</Form.Label>
                    <Form.Control 
                      className={styles.Input}
                      type="password" placeholder="Password"
                      name="password" 
                      value={password}
                      onChange={handleChange}
                      />
                </Form.Group>
                {errors.password?.map((message, idx) => (
                  <Alert variant="warning" key={idx}>
                    {message}
                  </Alert>
                ))}
                <div className="text-center" >
                <Button
                  className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright}`}
                  type="submit"
                >
                  Sign in
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
            xs={1} md={1}
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

export default SignInForm;