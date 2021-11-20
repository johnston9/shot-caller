import React from "react";
import { Link } from "react-router-dom";
// import door from "../assets/door.png";
import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";

import { Form, Button, Image, Col, Row, Container } from "react-bootstrap";
import TopBox from "../../components/TopBox";

const SignUpForm = () => {
  return (
      <div>
      <Row>
        <TopBox />
      </Row>
    <Row className={styles.Row}>
      <Col
        xs={1}
        className={`my-auto d-none d-md-block p-2 ${appStyles.FillerImagel}`}
      >
        {/* <Image
          className={`${appStyles.FillerImagei}`}
          src={door}
        /> */}
      </Col>
      <Col className="my-auto py-2 p-md-2" md={10}>
        <Container className={`${appStyles.Content} p-4 `}>
          <h1 className={styles.Header}>sign up</h1>
          <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>

        </Container>
        <Container className={`mt-3 ${appStyles.Content}`}>
          <Link className={styles.Link} to="/signin">
            Already have an account? <span>Sign in</span>
          </Link>
        </Container>
      </Col>
      <Col
        xs={1}
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