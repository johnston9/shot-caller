/* Info component on the LatestScript Component */
import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../styles/Scene.module.css";

const InfoLatestScript = () => {
  return (
    <div>
      <Row className="mb-3">
        <Col md={{span: 10, offset: 1}}>
        <div className={`text-center px-3 py-2 ${styles.SubTitle6 }`}>  
        <p>Upload the latest script here. Only PDF files will be accepted. </p>
        <p className="pt-2">  Individual Scene Scripts can be uploaded on 
          each Scene page but the entire project script is added here.</p>
        <p className="pt-2">If required add change details and notes in their fields.</p>
         </div> 
        </Col>
      </Row>
    </div>
  )
}

export default InfoLatestScript