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
      <div className={`text-center px-3 py-1 ${styles.SubTitle6}`}>
      <h5 className={`text-center ${styles.Red }`} >IMPORTANT</h5>  
      <p className={`text-center px-3 pt-1 ${styles.Red }`}>
        All Crew Members needed to access the app must be registered on the Crew Management tab on the Home page.
      </p>    
      <p className={`text-center px-3 pt-1 ${styles.Red }`}>
        All Crew Members needed to be on the Callsheet must be also added in their Crew Position
        in their Department here and the Position's Calltime must be inputted in their Calltime field
        when registering.
        </p>  
        <p className={`text-center px-3 pt-1 ${styles.Red }`}>
        The Name and Email Fields are mandatory in each Position.
        </p>       
      </div>
      </Col>
    </Row>
    </div>
  )
}

export default Important