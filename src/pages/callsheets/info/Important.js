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
      {/* ${styles.SubTitle6 } */}
      <div className={`px-3 py-1 ${styles.SubTitle6}`}>
      <h5 className={`text-center ${styles.Red }`} >IMPORTANT</h5>  
      <p className={`px-3 pt-1 ${styles.Red1 }`}>
        1. All Crew Members needed to access the app must be registered
         by clicking the Crew Management tab on the Home page.
      </p>    
      <p className={`px-3 pt-2 ${styles.Red1 }`}>
        2. All Crew Members needed to be on the Callsheet, who will actually be the Main 
        Production Crew, must:</p>
      <p className={`px-5 pt-1 ${styles.Red1 }`}>
      a. Have their Name and Email inputted in their Department's Crew Position
      by clicking the "Add Callsheet Crew" tab below.
      </p> 
      <p className={`px-5 pt-1 ${styles.Red1 }`}>
      b. Have their "Calltime", which displays in each Position, inputted in the Calltime 
      field of Crew Management's Registration form in Step 1 above.
      </p>     
      <p className="px-3 pt-3" style={{fontStyle: 'italic'}}>
        For the most part most of the Main Production Crew will be contained in the Departments 
        but because some Main positions may be Producer or Pre/Post positions and not needed on the Callsheet
      the Crew have been divided this way, Callsheet/Main and Non-Callsheet/Extra.
      </p> 

      </div>
      </Col>
    </Row>
    </div>
  )
}

export default Important