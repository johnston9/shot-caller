/* Important Info component on the CharactersAdd component
   telling users how to add Characters */
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../styles/Scene.module.css";

const InfoChar = () => {
  return (
    <div>
    <Row className="mb-3">
      <Col className="d-none d-md-block" md={1}></Col>     
      <Col xs={12} md={10} >
        <div className={`text-center px-3 pt-1 ${styles.SubTitle2 }`}>
        <p>
            New Characters can be added here by clicking the Add New Characters 
          tab or on the Characters page. This will add them to the Add Scene Character dropdown.
            </p>
        <p className={`text-center px-3 pt-1`}>
          All Characters must be assigned a number. This cannot be changed.
          </p>     
         </div>
      </Col>
    </Row>
    </div>
  )
}

export default InfoChar