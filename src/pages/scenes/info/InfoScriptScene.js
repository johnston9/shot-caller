/* Info component on the ScriptScene Component */
import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../styles/Scene.module.css";

const InfoScriptScene = () => {
  return (
    <div>
      <Row className="mb-3">
        <Col md={{span: 10, offset: 1}}>
        <div className={`text-center px-3 py-3 mt-3 ${styles.SubTitle6 } `}>
        <p>Upload the Scene Script pages here.
          Only PDF files will be accepted.
        </p>
         </div> 
        </Col>
      </Row>
    </div>
  )
}

export default InfoScriptScene