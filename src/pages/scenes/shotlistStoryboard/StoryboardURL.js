import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../../styles/Scene.module.css";
import btnStyles from "../../../styles/Button.module.css";
import appStyles from "../../../App.module.css";

const StoryboardURL = () => {
  return (
    <div>
    <Row className="mt-2">
    <Col xs={12} className='text-center'>
    <h5 className={`mb-3 py-1 ${styles.SubTitle }`}>
    STORYBOARD URL
    </h5>
    </Col>
    </Row>
    <Row>
    <Col xs={2} ></Col>
    <Col xs={8}>
    <hr/>
    </Col>
    </Row>
    </div>
  )
}

export default StoryboardURL