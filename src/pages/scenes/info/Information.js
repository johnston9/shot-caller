/* Info component on the ScenesPage */
import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../styles/Scene.module.css";

const Information = () => {
  return (
    <div>
      <Row className="mb-3">
        <Col md={{span: 8, offset: 2}}>
        <div className={`text-center px-3 py-2 ${styles.SubTitle6 }`}>
        <p>Click the Create Scene tab to create Scenes.</p>
        <p className="pt-2"> Click on a Scene to work
        in its Breakdown, Characters & BG, Shotlist, Scene Script, Storboard,
        and Workspace.
             </p>
            <p className="pt-2">
            Scene Numbers may be changed up to a certain point in production when
            the production department decides to freeze them.</p>
         </div> 
        </Col>
      </Row>
    </div>
  )
}

export default Information