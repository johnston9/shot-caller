/* Page to sign the user in
 * Set the CurrentUser Context
 * Set the TokenTimestamp */
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import door from "../../assets/door.png";
import rightdoor from "../../assets/rightdoor.png";
import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";

import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

import TopBoxSign from "../../components/TopBoxSign";
import axios from "axios";
import { useSetCurrentUser } from "../../contexts/CurrentUserContext";
import { useRedirectSign } from "../../hooks/RedirectSign";
import { setTokenTimestamp } from "../../utils/utils";
import { useCrewInfoContext } from "../../contexts/BaseCallContext";

const SignInForm = () => {
  useRedirectSign();
  const setCurrentUser = useSetCurrentUser();
  const crewInfoOne = useCrewInfoContext();
  const production_name = crewInfoOne.production_name || "";

  const [signInData, setSignInData] = useState({
    username: "",
    password: "",
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
    /* Function to sign the user in
     * Set the CurrentUser Context
     * Set the TokenTimestamp */
    event.preventDefault();
    try {
      const {data} = await axios.post("/dj-rest-auth/login/", signInData);
      console.log(data);
      setCurrentUser(data.user);
      setTokenTimestamp(data);
      history.push("/home");
    } catch (err) {
      setErrors(err.response?.data);
    }
  }

  return (
      <Container className={styles.SignupBox} >
        {production_name ? (
            <TopBoxSign work={production_name}
                        title={"Sign In" } />
          ) : (
            <TopBoxSign work={`SHOT CALLER`}
                        title={"Sign In" } />
          ) }
        <Row className={styles.Row}>
          <Col className="my-3 text-center"
            xs={1} md={1}>
            <Image
                className={`${styles.FillerImagel}`}
                src={door}/>
          </Col>
          <Col className="my-auto py-2 p-md-2" xs={10}>
            <Row>
             <Col md= {3} className="d-none d-md-block"></Col>
               <Col xs={12} md={6} className="text-center" >
                <p className={`${styles.Inner} mb-3`}>
                  GUEST<br/>
                  Username - gaffer<br/>
                  Password - silver77
                </p>
               <Container>
                <h1 className={`${styles.Header}`}>Sign in</h1>
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
                    className={`px-0 ${btnStyles.Button} ${btnStyles.Wide2} ${btnStyles.Bright}`}
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
               </Col>
             </Row>
          </Col>
          <Col className={`my-3 text-center`}
            xs={1} md={1}>
            <Image
              className={`${styles.FillerImagel}`}
              src={rightdoor}
            />
          </Col>
        </Row>
    </Container>
  );
};

export default SignInForm;