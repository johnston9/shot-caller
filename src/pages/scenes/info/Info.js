/* Important Info component on the BreakdownAddEditForm
   telling users where to add new locations */
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../styles/Scene.module.css";

const Info = () => {
  return (
    <div>
    <Row className="mb-3">
      <Col className="d-none d-md-block" md={1}></Col>     
      <Col xs={12} md={10} >
        <div className={`text-center px-3 py-2 mt-2 ${styles.SubTitle6}`}>
        <p className={`text-center px-3`}>
          New Locations can be added here by clicking the "Add New Location" tab
          or on Locations Page.</p>
          <p className="pt-2">
          The Storyboard and Script may also be added/updated here or on 
          their own pages.
          </p>     
         </div>
      </Col>
    </Row>
    </div>
  )
}

export default Info