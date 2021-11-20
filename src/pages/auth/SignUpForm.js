import React from "react";
import { Link } from "react-router-dom";
import door from "../../assets/door.png";
import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";

import { Form, Button, Image, Col, Row, Container } from "react-bootstrap";
import TopBox from "../../components/TopBox";

const SignUpForm = () => { 
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
            <Container className={`${appStyles.Content} p-4 `}>
              <h1 className={styles.Header}>sign up</h1>
              <Form className={styles.Form} >
                <Form.Group controlId="username" className="mb-2" >
                    <Form.Label className="d-none" >Username</Form.Label>
                    <Form.Control 
                      className={styles.Input}
                      type="text" placeholder="Username"
                      name="username" />
                </Form.Group>

                <Form.Group controlId="password1" className="mb-2">
                    <Form.Label className="d-none" >Password</Form.Label>
                    <Form.Control 
                      className={styles.Input}
                      type="password" placeholder="Password1"
                      name="password1" />
                </Form.Group>

                <Form.Group controlId="password2" className="mb-2">
                    <Form.Label className="d-none" >Confirm Password</Form.Label>
                    <Form.Control 
                      className={styles.Input}
                      type="password2" placeholder="Confirm Password"
                      name="password2" />
                </Form.Group>

                <Form.Group controlId="key" className="mb-2">
                    <Form.Label className="d-none" >Enter Key</Form.Label>
                    <Form.Control 
                      className={styles.Input}
                      type="key" placeholder="Enter Key"
                      name="key" />
                </Form.Group>

                <div className="text-center" >
                <Button
                  className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright}`}
                  type="submit"
                >
                  Sign up
                </Button>
                </div>
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

export default SignUpForm;