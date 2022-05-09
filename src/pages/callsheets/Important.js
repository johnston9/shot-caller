import React, { useEffect, useRef, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Alert from "react-bootstrap/Alert";
import Asset from "../../components/Asset";
import Upload from "../../assets/upload.png";
import appStyles from "../../App.module.css";
import styles from "../../styles/Callsheets.module.css";
import btnStyles from "../../styles/Button.module.css";

const Important = () => {
  return (
    <div>
        <Row className="mb-3">
      <Col className="d-none d-md-block" md={2}></Col>     
      <Col xs={12} md={8} >
      <div className={`text-center px-3 pt-1 ${styles.SubTitle2 }`}>
      <h5 className={`text-center ${styles.Red }`} >IMPORTANT</h5>  
      <p className={`text-center px-3 pt-1 ${styles.Red }`}>
        All Crew Members MUST BE Registered
        </p>     
        <p className={`text-center px-3 py-2 ${styles.SubTitle2 }`}>
          Register an account for each crew member 
          using their position's Username.
          Send the Shot Caller link to them with the Username 
          and whatever password you used instructing them 
          to sign in and change their password.
        </p>
      </div>
      </Col>
    </Row>
    </div>
  )
}

export default Important