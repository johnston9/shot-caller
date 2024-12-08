/* Info component on the ScriptScene Component */
import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../styles/Callsheets.module.css";

const InfoScriptScene = () => {
  return (
    <div>
      <Row className="mb-3">
        <Col md={{span: 10, offset: 1}}>
        <div className={`text-center px-3 pt-1 ${styles.SubTitle2 } pb-2`}>
        <h5 className={`text-center `} >INFO</h5>  
        <p>Upload the Scene Script Pages here.
          Only PDF files will be accepted.
        </p>
         </div> 
        </Col>
      </Row>
    </div>
  )
}

export default InfoScriptScene