import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../styles/Callsheets.module.css";

const Info = () => {
  return (
    <div>
        <Row className="mb-3">
      <Col className="d-none d-md-block" md={1}></Col>     
      <Col xs={12} md={10} >
        <div className={`text-center px-3 pt-1 ${styles.SubTitle2 }`}>
        <h5 className={`text-center`} >INFO</h5>  
        <p className={`text-center px-3 pt-1`}>
          Scene Info may be added at any time on the Scene
          Page Edit button. New Characters and Locations must be 
          created first on the Add Character or Add Location Pages or
          in the Add Character or Add Location boxes below.<br/>
          All Characters must be assigned a number. This cannot be changed.
          If necessary the character can be deleted and given a new number.
          </p>     
         </div>
      </Col>
    </Row>
    </div>
  )
}

export default Info