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
        USE DECIMAL FOR THE PAGES BOX NOT EIGHTS
        </p>     
        <p className={`text-center px-3 py-2 ${styles.SubTitle2 }`}>
        <span className={`${styles.Bold}`}>Converter</span> <br/>
        <Row>
            <Col xs={6}>
            1/8 = .125 <br/>
            2/8 = .25 <br/>
            3/8 = .375 <br/>
            4/8 = .5 <br/>
            </Col>
            <Col xs={6}>
            5/8 = .625 <br/>
            6/8 = .75 <br/>
            7/8 = .875 <br/>
            8/8 = 1 <br/>
            </Col>
        </Row>         
          <span className={`${styles.Bold}`}>Example</span> <br/>
          For 3 3/8 pages put 3.375
        </p>
      </div>
      </Col>
    </Row>
    </div>
  )
}

export default Important