/* Info Component in MoodboardsPage */
import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../styles/Callsheets.module.css";

const Info = () => {
  return (
    <div>
        <Row className='mb-3'>
            <Col className={`text-center px-3 pt-1 ${styles.SubTitle6 }`}
             md={{span: 10, offset: 1 }}>
            <p>
              Create Moodboards for Scenes, Locations and Characters on the Moodboards 
              page or from that element's page.<br/>
              Each element may have numerous Moodboards.<br/> 
              Moodboard may be solely for a Scene, Location or Character 
              or any combination of the three.<br/>
              Moodboards by be used to explore other themes using the title solely. 
            </p>
            </Col>
        </Row>
    </div>
  )
}

export default Info