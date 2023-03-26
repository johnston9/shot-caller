// Email JS
import React, { useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import btnStyles from "../styles/Button.module.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../styles/Scene.module.css";
import { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useCrewInfoContext } from '../contexts/BaseCallContext';

export const ContactUs = () => {
  const crew = useCrewInfoContext();
  const company = crew?.production_company;
  const companyEmail = crew?.company_email;
  const form = useRef();
  const [process, setProcess] = useState(null);
  const [errors, setErrors] = useState({});
  const [path, setPath] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  useEffect(() => {
    const pathone = window.location.href;
    setPath(pathone);
    setName(company);
    setEmail(companyEmail);
    console.log(path);
  },[] );

  const sendEmail = (e) => {
    e.preventDefault();
    setProcess("sending");

    emailjs.sendForm('gmail', 'call_sheet', form.current, 'user_TZnl6mBgWTUOAkmv8HKrB')
      .then((result) => {
          console.log(result.text);
          setProcess("success");
      }, (error) => {
          console.log(error.text);
          setProcess("error");
          if (error.response?.status !== 401) {
            setErrors(error.response?.data);
            }
      });
  };

  return (
    <div className='text-center'>
    <form ref={form} onSubmit={sendEmail}>
    <Row>
    <Col className="d-flex justify-content-center p-0 p-md-2" xs={6} >
        <Form.Group className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.Bold}`} >Name</Form.Label>
              <Form.Control 
              className={styles.Input}
              type="text"
              name="from_name"
              value={name}
                  />
          </Form.Group>
          {errors?.name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
    </Col>
    <Col className="d-flex justify-content-center p-0 p-md-2" xs={6} >
        <Form.Group className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={styles.Input}
              type="text"
              name="email"
              value={email}
                  />
          </Form.Group>
          {errors?.email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
    </Col>
    </Row>
    <Row>
    <Col className="d-flex justify-content-center p-0 p-md-2" xs={{span: 10, offset: 1 }} >
        <Form.Group className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.Bold}`} >Message</Form.Label>
              <Form.Control 
              className={styles.Input}
              type="text"
              name="message"
              value={path}
                  />
          </Form.Group>
          {errors?.message?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
    </Col>
    </Row>
    <Row>
    <Col className='text-center' >
    <Button className={`ml-3 px-5 py-1  ${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
        Send
      </Button>
    </Col>
    </Row>
    </form>

    {/* <Col xs={{span: 10, offset: 1}} md={6}> */}
    {/* <Col xs={6} >
    <label>Name</label>
      <input type="text" name="from_name" />
    </Col> */}
    {/* <Col xs={{span: 10, offset: 1}} md={6}> */}
    {/* <Col xs={6} >
    <label>Email</label>
      <input type="email" name="email" />
    </Col> */}
    {/* <Col xs={{span: 10, offset: 1}} md={6}>
    <label>Message</label>
      <textarea name="message" />
    </Col> */}
    {/* <Row>
    <Col xs={{span: 4, offset: 4}} md={6}>
    <input type="submit" value="Send" />
    </Col>
    </Row> */}

    {process === "sending" && (
        <div style={{ color: "blue" }}>Sending Emails...</div>
        )
    }
    {process === "success" && (
        <div style={{ color: "green" }}>Success! Emails Sent</div>
    )
    }
    {process === "error" && (
        <div style={{ color: "red" }}>Error! Emails Failed to Send.</div>
    )

    }
    </div>
  );
};