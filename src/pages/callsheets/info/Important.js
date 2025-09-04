/* Important Info component on the Crew Info Page
   telling users how to registered crew */
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../styles/Callsheets.module.css";

const Important = () => {
  return (
    <div>
        <Row className="mb-3">
      <Col className="d-none d-md-block" md={1}></Col>     
      <Col xs={12} md={10} >
      {/* ${styles.SubTitle6 } style={{fontStyle: 'italic'}} */}
      <div className={`px-3 py-1 ${styles.SubTitle6}`}>
      <h5 className={`text-center ${styles.Red }`} >IMPORTANT</h5>  
      <p className={`px-3 pt-1`}>
        1. All Crew Members needed to access the app must be registered
         in the Admin section on the Home page.
      </p>
      <p className={`px-3 pt-2`}>
        2. The Crew positions have been divided into Callsheet/Main and Non-Callsheet/Extra.
      </p>
      <p className="px-3 pt-2" >
      3. The Callsheet/Main section contains most primary Production Crew positions 
      and these will appear on the Callsheet.
      </p> 
      <p className="px-3 pt-2" >
      4.  They can be added by clicking the "Add Callsheet/Main Crew" button
      and opening their department.
      </p> 
      <p className="px-3 pt-2" >
      5. Their Name and Email <span className={`${styles.Red}`}>MUST</span> be inputted in their Department's Crew Position.
      </p>     
      <p className={`px-3 pt-2`}>
      6. Their "Calltime", which displays in their Position <span className={`${styles.Red}`}>MUST</span> be
      inputted in the Calltime field when Registering them in Step 1 above.
      </p>  
      <p className="px-3 pt-2" >
      7. They can be viewed by clicking their 
      Department below.
      </p>     
      </div>
      </Col>
    </Row>
    </div>
  )
}

export default Important