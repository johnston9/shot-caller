/* Info Component on the Day component */
import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../styles/Callsheets.module.css";

const InfoStrip = () => {
  return (
    <div>
        <Row className='mb-3'>
            <Col className={`text-center px-3 pt-1 ${styles.SubTitle2 }`} md={{span: 10, offset: 1 }}>
            <p>Find the Stripboard containing all the Shooting Day's Scenes below.
            Click on the "Cast" tab to view the Scene's Cast and Background. Click on the 
            "Info" tab to view Departments or new Scheduling info and the "Filming Location".
            </p>
            <p>
            Create the Stripboard by clicking "Add Scene" tab below to open the Scenes menu
            which allows the selection of Scenes by Act or Location. For a more precise choice
            enter a Scene Number, Title or Location in the Search bar before clicking
            on an Acts tab.
            </p>
            <p>Click on a Scene to select it and automatically fetch the Info from its 
            Scene breakdown page. Enter the scheduling information in the Schedule form
            that opens below, primarily the Day Order Number and click "Add Scene".
              The Scene, containing the Scene info from the Scene breakdown along with the
              newly added Schedule Info, is now added to the Stripboard.
              <p>
              Use the "Next" input field in the Schedule form to create a row below the Scene containing
              information involving moves, breaks or meals.
              </p>
            </p>
            <p> To edit the Scene click on the Three dots under Edit. To Re-Order
              the Scene quickly click in the Re-Order button, containing the present 
              Shooting Order, under Edit. A "Next" field can be added or edited quickly from 
              the Re-Order button also.



            </p>
            </Col>
        </Row>
    </div>
  )
}

export default InfoStrip