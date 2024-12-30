/* Important Info component for the Character Create page */
import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../styles/PostCreateEditForm.module.css";

const Important = () => {
  return (
    <div>
        <Row className="mb-3">
        <Col md={{span: 8, offset: 2}}>
        <div className={`text-center px-3 pt-1 ${styles.SubTitle2 }`}>
        <h5 className={`text-center ${styles.golddark }`} >IMPORTANT</h5>  
        <p className={`text-center pt-1 ${styles.Red }`}>
          All Characters must be assigned a Number.<br/> 
          The Email of the Actor playing the Character
          must be added on the Edit Character page
          accessible from the Edit Icon on the Character's Page.
          This is imperative to the actor to receiving their Personal Calltimes on
          their Callsheets.
          </p>     
          <p className={`text-center py-2`}>
            The other Actor's Details and their Costume details are to be added on the Edit page too.
          </p>
         </div> 
        </Col>
      </Row>
    </div>
  )
}

export default Important