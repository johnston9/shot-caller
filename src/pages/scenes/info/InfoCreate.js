/* Info component on the SceneCreateForm */
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../styles/Scene.module.css";

const InfoCreate = () => {
  return (
    <div>
    <Row className="mb-3">
    <Col className="d-none d-md-block" md={2}></Col>     
    <Col xs={12} md={8} >
    <div className={`text-center px-3 py-2 ${styles.SubTitle6 }`}>
    <p className={`text-center px-3 py-2`}>
    Create a Scene simply by giving it a number and submitting.</p>
    <p >
    On the Scene page the Breakdown, Charactes/BG, Scene Script, Storyboard
    and Shotlist can be created and viewed.
    </p>
    </div>
    </Col>
    </Row>
    </div>
  )
}

export default InfoCreate