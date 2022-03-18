import React, { useEffect, useState } from 'react';
import { axiosReq } from '../../api/axiosDefaults';
import { useRedirect } from '../../hooks/Redirect';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import styles from "../../styles/Callsheets.module.css";
import btnStyles from "../../styles/Button.module.css";
import { useParams, useHistory } from 'react-router-dom';

const CreateOnce = () => {
    useRedirect("loggedOut");
  const history = useHistory();
  return (
    <div className={`${styles.Red} mx-5 my-3`}>
        <h3 className={`text-center ${styles.Important}`}>IMPORTANT</h3>
        <h5 className={`text-center  ${styles.Important}`}>ONLY USE THIS BUTTON ONCE TO CREATE THE CREW INFO BASE</h5>
      {/* crew info create button*/}
      <Row className=" mt-2 text-center">
            <Col >
            <Button onClick={() => history.push("crewinfo/create")}
              className={`mb-2 ${btnStyles.Button} ${btnStyles.Wide2} ${btnStyles.Shed}`}>
              Create Info Base</Button>
            </Col>
        </Row>
    </div>
  )
}

export default CreateOnce