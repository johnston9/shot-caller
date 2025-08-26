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
        <div className={`text-center px-3 py-2 ${styles.SubTitle6 }`}>
        <p>Add Scene Characters by the Select Dropdown which contains all the Characters added
          to the project.</p>
          <p className={`pt-1`}>
            New Characters can be added here below by clicking the Add New Characters 
          tab or on the Characters page.
            </p>
        <p className={`pt-1`}>
          All Characters must be assigned a number.
          </p>     
         </div>
      </Col>
    </Row>
    </div>
  )
}

export default InfoChar