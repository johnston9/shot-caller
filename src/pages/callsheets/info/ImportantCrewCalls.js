/* Important Info component on the Add Crew Calls form
   telling users that all Crew members must be registered */
import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../styles/Callsheets.module.css";

const ImportantCrewCalls = () => {
  return (
    <div>
        <Row className='mb-3'>
            <Col className={`text-center px-3 pt-1 ${styles.SubTitle6 }`}
             md={{span: 10, offset: 1 }}>
        <h5 className={`text-center `} >IMPORTANT</h5>  
        <p className="py-2 text-center"> All crew members needed to appear on the Callsheet
        <span className={` ${styles.Red }`}> MUST </span> be added to the Crew Info - "Callsheet/Main Crew".</p>

        </Col>
      </Row>
    </div>
  )
}

export default ImportantCrewCalls