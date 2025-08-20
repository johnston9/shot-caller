/* Info component on the Edit Callsheet form
   telling users that the Add Cast and Add Background forms are 
   seperate from the main Callsheet form */
import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../styles/Callsheets.module.css";

const InformationEdit = () => {
  return (
    <div>
        <Row className='mb-3'>
            <Col className={`text-center px-3 pt-1 ${styles.SubTitle6 }`}
             md={{span: 10, offset: 1 }}>
        <p className='pt-2'>The Callsheet Add/Edit page is divided into 2 sections:</p>
        <p className='pt-2'>1. THE CAST & BACKGROUND CALLS FORMS<p/>
        The Add Cast and Add Background forms are seperate from the main 
        Callsheet form below. They allow each cast member 
        or background item to be added individually. The schedule is provided
        to facilitate this and can also be viewed beside these forms.</p>
        <p className='pt-2'>
        2. THE MAIN CALLSHEET FORM<br/> 
        This is comprised of 5 sections, TIMES, INFO, 
        LOCATIONS, WALKIES and CREW CALLS.  </p>
        </Col>
      </Row>
    </div>
  )
}

export default InformationEdit