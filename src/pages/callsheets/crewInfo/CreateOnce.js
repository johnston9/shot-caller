/* Component in CrewInfo page used to inform the user about 
   creating the initial Crew Info dataset 
 * This component will display only once before the Crew
   Info Create page has been submitted*/
import React from 'react';
import { useRedirect } from '../../../hooks/Redirect';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import styles from "../../../styles/Callsheets.module.css";
import btnStyles from "../../../styles/Button.module.css";
import { useHistory } from 'react-router-dom';

const CreateOnce = () => {
    useRedirect();
  const history = useHistory();
  return (
    <div className={`${styles.SubTitle11 } py-2 mx-5 mt-3 mb-5`}>
        <h4 className={`text-center  ${styles.ImportantText}`}>
          INITIALIZE THE CREWINFO PAGE </h4>
        <p className={`text-center  ${styles.ImportantText}`} >
          Before proceeding click the "Create Crew Info Page" 
          button below to create the Crew Info page. </p>
        {/* crew info create button*/}
        <Row className=" mt-2 text-center">
              <Col >
              <Button onClick={() => history.push("crewinfo/create")}
                className={`mb-2 ${btnStyles.Button} ${btnStyles.Wide2} ${btnStyles.Shed}`}>
                Create Crew Info Page</Button>
              </Col>
          </Row>
    </div>
  )
}

export default CreateOnce