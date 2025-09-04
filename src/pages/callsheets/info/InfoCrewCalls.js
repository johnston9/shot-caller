/* Info component on the Callsheet form
   telling users how to set the Unit Call to all crew members
   call times */
import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../styles/Callsheets.module.css";

const InfoCrewCalls = () => {
  return (
    <div>
        <Row className="mb-3">
        <Col md={{span: 10, offset: 1}}>
        <div className={`text-center px-3 py-2 ${styles.SubTitle6 }`}>
          <p>Clicking the SET UNIT CALL button will give every Crew member a Calltime
            set to the Unit Call.</p>
            <p className="pt-2"> This can then be changed individually for each 
            Crew member.</p>
         </div> 
        </Col>
      </Row>
    </div>
  )
}

export default InfoCrewCalls