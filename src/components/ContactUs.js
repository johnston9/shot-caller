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

export const ContactUs = (props ) => {
  const crew = useCrewInfoContext();
  const production_name = crew?.production_name;
  const company = crew?.production_company;
  const companyphone = crew?.company_phone;
  const companyemail = crew?.company_email;

  const day2 = props.day1;
  const date2 = props.date1;
  const castemails1 = props.castEmails;
  const castemails2 = castemails1.toString();
  console.log(castemails1);
  console.log(castemails2);

  console.log(day2)


  const form = useRef();
  const [process, setProcess] = useState(null);
  const [errors, setErrors] = useState({});

  const [proname, setProname] = useState("");
  const [shootday, setShootday] = useState("");
  const [shootdate, setShootdate] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [path, setPath] = useState("");
  const [list, setList] = useState("");

  const list1 = "shotcallerproduction@gmail.com"
  
  useEffect(() => {
    const pathone = window.location.href;
    setList(castemails2);
    setProname(production_name);
    setShootday(day2);
    setShootdate(date2);
    setName(company);
    setPhone(companyphone);
    setEmail(companyemail);
    setPath(pathone);
    console.log(path);
  },[] );

  const sendEmail = (e) => {
    e.preventDefault();
    setProcess("sending");

    emailjs.sendForm('gmailpro', 'call_sheets', form.current, 'user_TZnl6mBgWTUOAkmv8HKrB')
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
    {/*Email list */}
    <Row>
    <Col className="d-flex justify-content-center p-0 p-md-2" xs={{span: 10, offset: 1 }} >
        <Form.Group className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.Bold}`} >Email List</Form.Label>
              <Form.Control 
              className={styles.Input}
              type="text"
              name="list"
              value={list}
                  />
          </Form.Group>
          {errors?.list?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
    </Col>
    </Row>
    <Row>
    {/* Shoot day */}
    <Col className="d-flex justify-content-center p-0 p-md-2" xs={3} >
        <Form.Group className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.Bold}`} >Shoot Day</Form.Label>
              <Form.Control 
              className={styles.Input}
              type="text"
              name="shootday"
              value={shootday}
                  />
          </Form.Group>
          {errors?.shootday?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
    </Col>
    {/* title */}
    <Col className="d-flex justify-content-center p-0 p-md-2" xs={6} >
        <Form.Group className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.Bold}`} >Production Name</Form.Label>
              <Form.Control 
              className={styles.Input}
              type="text"
              name="proname"
              value={proname}
                  />
          </Form.Group>
          {errors?.proname?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
    </Col>
    {/* shoot date */}
    <Col className="d-flex justify-content-center p-0 p-md-2" xs={3} >
        <Form.Group className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.Bold}`} >Shoot Date</Form.Label>
              <Form.Control 
              className={styles.Input}
              type="text"
              name="shootdate"
              value={shootdate}
                  />
          </Form.Group>
          {errors?.shootdate?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
    </Col>
    </Row>
    <Row>
    {/* company name */}
    <Col className="d-flex justify-content-center p-0 p-md-2" xs={4} >
        <Form.Group className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.Bold}`} >Company Name</Form.Label>
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
    {/* company phone */}
    <Col className="d-flex justify-content-center p-0 p-md-2" xs={4} >
        <Form.Group className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.Bold}`} >Company Phone</Form.Label>
              <Form.Control 
              className={styles.Input}
              type="text"
              name="phone"
              value={phone}
                  />
          </Form.Group>
          {errors?.companyphone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
    </Col>
    {/* company email */}
    <Col className="d-flex justify-content-center p-0 p-md-2" xs={4} >
        <Form.Group className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.Bold}`} >Company Email</Form.Label>
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
    {/* message */}
    <Row>
    <Col className="d-flex justify-content-center p-0 p-md-2" xs={{span: 10, offset: 1 }} >
        <Form.Group className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.Bold}`} >Message</Form.Label>
              <Form.Control 
              className={styles.Input}
              type="text"
              name="message"
                  />
          </Form.Group>
          {errors?.message?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
    </Col>
    </Row>
    {/* path */}
    <Row>
    <Col className="d-flex justify-content-center p-0 p-md-2" xs={{span: 10, offset: 1 }} >
        <Form.Group className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.Bold}`} >URL</Form.Label>
              <Form.Control 
              className={styles.Input}
              type="text"
              name="path"
              value={path}
                  />
          </Form.Group>
          {errors?.path?.map((message, idx) => (
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