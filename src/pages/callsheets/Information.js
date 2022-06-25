import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../styles/Callsheets.module.css";

const Information = () => {
  return (
    <div>
        <Row className="mb-3">
        <Col md={{span: 10, offset: 1}}>
        <div className={`text-center px-3 pt-1 ${styles.SubTitle2 }`}>
        <h5 className={`text-center `} >INFO</h5>  
        <p>The Add Cast and Add Background forms are seperate from the
        Callsheet form and may be used here before submitting the
        Callsheet form or from the Edit page. Add each item individually
        using the schedule as reference. The "Side By Side" view allows 
        the forms to be viewed beside the schedule. The Callsheet 
        is divided into FIVE sections, INFO, TIMES, LOCATIONS, WALKIES and 
        CREW CALLS.  </p>
         </div> 
        </Col>
      </Row>
    </div>
  )
}

export default Information