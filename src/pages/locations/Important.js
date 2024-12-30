/* Important Info component for the Locations Create page */
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
        <p className={`text-center pt-1`}>
          Create a Location Name and Description here.
          </p>     
          <p className={`text-center py-2`} >
            Add Filming Adresses and Images on the Edit page
            accessible from the Edit Icon on the Location's page.
          </p>
         </div> 
        </Col>
      </Row>
    </div>
  )
}

export default Important