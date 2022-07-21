import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../styles/Callsheets.module.css";

const InfoScript = () => {
  return (
    <div>
        <Row className="mb-3">
        <Col md={{span: 10, offset: 1}}>
        <div className={`text-center px-3 pt-1 ${styles.SubTitle2 }`}>
        <h5 className={`text-center `} >INFO</h5>  
        <p>Add a PDF file of each scene script, ideally when creating the scene 
            and it's info. Add re-writes of the scene when needed. 
            Only PDF will be accepted.
            Alternatively use the Add Script option on the Homepage to
            uploat the entire script for each re-write.
             </p>
         </div> 
        </Col>
      </Row>
    </div>
  )
}

export default InfoScript