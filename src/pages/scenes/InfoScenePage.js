import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../styles/Callsheets.module.css";

const InfoScenePage = () => {
  return (
    <div>
        <Row className="mb-3">
        <Col md={{span: 10, offset: 1}}>
        <div className={`text-center px-3 pt-1 ${styles.SubTitle2 }`}>
        <h5 className={`text-center `} >INFO</h5>  
        <p>Collaborate on the scene in the Scene Workspace. Click
            the Instructions button below for instructions.
            Find all scene info in the Breakdown which can be edited by the Edit 
            button. The Moodshots
            feature can be used to upload and view image suggestions. Use the 
            Storyboard feature to upload and view storyboards. The scene
            shotlist can be created and viewed in the Shotlist feature which 
            can be created side by side with the Storyboard.
             </p>
         </div> 
        </Col>
      </Row>
    </div>
  )
}

export default InfoScenePage