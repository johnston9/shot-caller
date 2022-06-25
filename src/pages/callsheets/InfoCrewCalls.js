import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../styles/Callsheets.module.css";

const InfoCrewCalls = () => {
  return (
    <div>
        <Row className="mb-3">
        <Col md={{span: 10, offset: 1}}>
        <div className={`text-center px-3 pt-1 ${styles.SubTitle2 }`}>
        <h5 className={`text-center `} >INFO</h5>  
        <p className="py-2 text-center"> Add all crew members to the Crew Info page located
          on the Callsheets main page first to create "Call Time" input boxes for each member.
          Complete all departments before clicking Create.</p>
         </div> 
        </Col>
      </Row>
    </div>
  )
}

export default InfoCrewCalls