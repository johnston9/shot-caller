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
        <p>Find all the scenes below. Click Add Scene to create a new scene. 
            Add all scene information here which can be updated or edited 
            from the scene edit button. This will form the foundation of the
            production process and be passed on to the schedule.
             </p>
         </div> 
        </Col>
      </Row>
    </div>
  )
}

export default Information