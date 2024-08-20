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
        <div className={`text-center px-3 pt-1 ${styles.SubTitle2 }`}>
        <h5 className={`text-center `} >INFO</h5>  
        <p>Upload the Scene script pages here.
          Only PDF will be accepted.
        </p>
        <p>
        Click on te Download or Print Icons to download or print the Script.
        </p>
        <p>Click on the "View Script as PDF" link at the bottom of the page to view the Script in it's 
          original PDF format.
        </p>
         </div> 
        </Col>
      </Row>
    </div>
  )
}

export default InfoScriptScene