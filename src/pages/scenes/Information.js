import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../styles/Callsheets.module.css";

const Information = () => {
  return (
    <div>
        <Row className="mb-3">
        <Col md={{span: 8, offset: 2}}>
        <div className={`text-center px-3 pt-1 ${styles.SubTitle2 }`}>
        <h5 className={`text-center `} >INFO</h5>  
        <p>Click Add Scene to create a new scene.
            Scene information can be added then or later
            from the scene edit button. This will be passed on to the schedule.
             </p>
         </div> 
        </Col>
      </Row>
    </div>
  )
}

export default Information