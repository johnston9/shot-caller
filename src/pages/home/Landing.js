import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import door from "../../assets/door.png";
import doorr from "../../assets/door.png";
import TopBox from '../../components/TopBox';
import { useRedirect } from '../../hooks/Redirect';
import styles from "../../styles/Home.module.css";
import btnStyles from "../../styles/Button.module.css";

import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

const Landing = () => {
    return (
        <Container className={styles.Background}>
          <TopBox title="SHOT CALLER" />
            <Row className={`my-5 ${styles.Row}`}>
            <Col className="my-5 pr-0 pl-3"
              xs={1} md={1}
          >
            <Image
                className={`${styles.FillerImagel}`}
                src={door}
            />
          </Col>
          <Col className="my-5" xs={10}>
          </Col>
          <Col
            xs={1} 
            // className={`my-auto d-none d-md-block p-2`}
            className={`my-5 pl-0 pr-3`}
          >
            <Image
              className={`${styles.FillerImagel}`}
              src={doorr}
            />
          </Col>
            </Row>
        </Container>
    )
}

export default Landing
