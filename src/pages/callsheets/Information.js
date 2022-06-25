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
        <p>The Add Cast and Add Background forms are seperate from the
        Callsheet form below and may be used here before submitting the
        Callsheet form or from the Edit page.
        Each item is added individually using the 
        schedule as reference. The "Side By Side" view allows both to be
        viewed together.  </p>
         </div> 
        </Col>
      </Row>
    </div>
  )
}

export default Information