/* Important Info component for the Character Cr eate page */
import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../styles/PostCreateEditForm.module.css";

const Important = () => {
  return (
    <div>
        <Row className="mb-3">
        <Col md={{span: 8, offset: 2}}>
        <div className={`px-3 py-2 ${styles.SubTitle6 }`}>
          <p className={`${styles.Red} text-center`}>IMPORTANT</p>
        <p className={`pt-1`}>
          1. All Characters <span className={`${styles.Red}`}>MUST</span> be assigned a Number.</p>
          <p className={`pt-2`}>
          2. The actor playing the Character <span className={`${styles.Red}`}>MUST</span> be registered
          in the "Manage Users" section on the Home page in order to access the app.
        </p>
        <p className={`pt-2`}>
          3. When registering the actor their name and email <span className={`${styles.Red}`}>MUST ALSO</span> be
          added on the Character Edit page, accessible from the Edit Icon on the Character's page,
          in order for them to receive Callsheets.
        </p>
        <p className={`pt-2`}>
          The Character Costume Details and Images are added on the Edit Character page.
          </p>
         </div> 
        </Col>
      </Row>
    </div>
  )
}

export default Important