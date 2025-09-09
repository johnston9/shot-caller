/* Component to create the Company and Crew Info 
 * It will be available only once to initialize the Company and Crew
   Info dataset. After that all info will be added by the Edit page
 * Contains the CrewCompany, CrewProduction, CrewCastingAD,
   CrewLocations, CrewScript, CrewCatering CrewElecGrip, CrewMakeup,
   CrewSoundTransport, CrewStunts, CrewArt, CrewCamera,
   CrewPostAdditional and CrewWardrobe Form components which are
   held in the addCrewInfoByDept folder to add info by department */
import React, { useRef, useState } from "react";
import Alert from "react-bootstrap/Alert";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../styles/Callsheets.module.css";
import btnStyles from "../../../styles/Button.module.css";
import { useHistory } from "react-router-dom";
import { axiosReq } from "../../../api/axiosDefaults";
import TopBox from "../../../components/TopBox";
import { useRedirect } from "../../../hooks/Redirect";
import { useSetEditCrewInfoContext } from "../../../contexts/BaseCallContext";

import Important from "../info/Important";
import { toast } from 'react-toastify';

const CrewInfoCreate = () => {
  useRedirect();
  // eslint-disable-next-line
  const [errors, setErrors] = useState({});
  const history = useHistory();
  const setEditCrewInfo = useSetEditCrewInfoContext();

  const [postData, setPostData] = useState({
    production_name: "",
  })

  const { production_name, } = postData;

  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
  };
    
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("production_name", production_name);
    try {
      const {data} = await axiosReq.post("/crewinfonew/", formData);
      setEditCrewInfo(true);
      history.goBack();
      toast.success(`CrewInfo Created`);
      console.log(data);
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  }

  const buttons = (
  <div className="text-center mt-4 mb-4">    
    <Button
      className={`${btnStyles.Button} ${btnStyles.Blue} px-3 px-md-5 mr-3`}
      onClick={() => history.goBack()}
    >
      Cancel
    </Button>
    <Button className={`${btnStyles.Button} ${btnStyles.Blue} px-3 px-md-5 ml-3`} type="submit">
      Create
    </Button>
  </div>
  );

  return (
    <div>
    <TopBox work="Crew Info"
            title="Create"/>
    <Button
        className={`${btnStyles.Button} ${btnStyles.Blue} py-0 mt-1`}
        onClick={() => history.goBack()}
    >
        Back
    </Button>
    <div >
    <Row>
    <Col xs={12} md={{span: 8, offset: 2}}>
    <div className= {`my-3 ${styles.White}`}>
      <h5 className={`text-center py-1 ${styles.SubTitle }`}>
       CREATE CREW INFO</h5>
      <Row className="text-center mt-3">
        <Col md={{span: 8, offset: 2}}>
        <p className={`text-center  ${styles.ImportantText}`}>
          To Initialize the Crew Info page add the Production Name and submit.
        </p>
        <p className={`text-center pt-2 ${styles.ImportantText}`}> 
          Use the "Important" buttons on the Crew Info page for all further Information.</p>
        </Col>
    </Row>
    <Form onSubmit={handleSubmit}>
    {/* Production Name - Production Company */}
    <Row className="text-center mt-3">
    <Col xs={12} md={{span: 6, offset: 3}} className="d-flex justify-content-center p-0 p-lg-2">
    <Form.Group controlId="production_name" className={`${styles.Width2} `}>
        <Form.Label className={`${styles.BoldScene}`} >Production Name</Form.Label>
        <Form.Control 
          className={`${styles.Input}`}
          type="text"
          name="production_name"
          value={production_name}
          onChange={handleChange}
            />
    </Form.Group>
    {errors?.production_name?.map((message, idx) => (
      <Alert variant="warning" key={idx}>
        {message}
      </Alert>
    ))}
    </Col>
    </Row>
    {buttons}
    </Form>
    </div>
    </Col>
    </Row>
    </div>
    </div>
  )
}

export default CrewInfoCreate