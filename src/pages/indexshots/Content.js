import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../styles/Indexes.module.css";

const Content = ({content}) => {
  return (
    <div className={` ${styles.Content }`}>
    <Row>
    <Col>
    <p>{content}</p>
    </Col>
    </Row>
    </div>
  )
}

export default Content