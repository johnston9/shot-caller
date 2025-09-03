/* Info component on the Scene Component */
import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../styles/Scene.module.css";

const InfoScenePage = () => {
  return (
    <div>
      <Row className="mb-3">
        <Col md={{span: 10, offset: 1}}>
        <div className={`text-center px-3 py-2 ${styles.SubTitle6}`}>
        <p >Collaborate on the Scene by Department in the Scene Workspace, 
          see instructions below.</p>
          <p className="pt-2">
            Add and view Scene info in the Breakdown and 
            Characters/BG sections.</p>
          <p className="pt-2"> Add and view the Scene Script
            and Storyboard.</p>
          <p className="pt-2">
            Create and view the Shotlist. </p>
          <p className="pt-2">
            Add and view Moodshots to explore visual themes.
             </p>
         </div> 
        </Col>
      </Row>
    </div>
  )
}

export default InfoScenePage