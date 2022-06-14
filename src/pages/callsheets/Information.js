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
        <p>The Add Cast and Add Background forms here are seperate from the main 
        Callsheet Info and Crew Calls form below. They allow each cast member 
        or background item to be added individually. The schedule is provided
        to facilitate this and can also be viewed beside these forms. These forms
        can be done here on this page before clicking the "Create" button for the 
        main Callsheet below or from the Edit page.  </p>
         </div> 
        </Col>
      </Row>
    </div>
  )
}

export default Information