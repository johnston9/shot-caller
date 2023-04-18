/* Form Page to create a Scene by giving it a number */
import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import styles from "../../styles/Scene.module.css";
import btnStyles from "../../styles/Button.module.css";
import { Alert } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import TopBox from "../../components/TopBox";
import useRedirect from "../../hooks/Redirect";
import InfoCreate from "./info/InfoCreate";
import ImportCreate from "./info/ImportCreate";

function SceneCreateForm({topbox}) {
  useRedirect();
  const [errors, setErrors] = useState({});
  const [showImp, setShowImp] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const [postData, setPostData] = useState({
      number: "",
    });

  const { number } = postData;

    const history = useHistory()
  
    const handleChange = (event) => {
      setPostData({
        ...postData,
        [event.target.name]: event.target.value,
      });
    };

  const buttons = (
    <div className={`text-center pt-3 mb-3 pb-2 ${styles.White }`} >    
      <Button
        className={`mr-3 px-5 py-1 ${btnStyles.Button} ${btnStyles.Blue}`}
        onClick={() => history.goBack()}
      >
        Cancel
      </Button>
      <Button className={`ml-3 px-5 py-1  ${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
        Create
      </Button>
    </div>
  );

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("number", number);
      
    try {
      const { data } = await axiosReq.post("/scenes/", formData);
      history.push(`/scenes/${data.id}`);
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  }

  return (
    <div >
      {topbox ? (
        ""
      ) : (
        <TopBox title="Create Scene" />
      ) }
      <Row>
      {/* back bit */}
      <Col xs={4} >
      <Button
            className={`${btnStyles.Button} ${btnStyles.Blue} py-0 mt-2`}
            onClick={() => history.goBack()}
        >
            Back
      </Button> 
      </Col>
      {/* imp but */}
      <Col xs={4}  className="text-center" >
      <Button
          className={`py-0 my-2 ${btnStyles.Shed} ${btnStyles.Button}`}
          onClick={() => setShowImp(showImp => !showImp)} >IMPORTANT
      </Button> 
    </Col>
      {/* info but */}
      <Col className="float-right" xs={4}>
      <Button
          className={`float-right py-0 my-2 ${btnStyles.Blue} ${btnStyles.Button}`}
          onClick={() => setShowInfo(showInfo => !showInfo)} >INFO
      </Button> 
      </Col>
      </Row>
      {/* showInfo */}
      <Row>
          <Col>
          {!showInfo ? (
              ""
                  ) : (
                      <InfoCreate  /> 
                  ) } 
          </Col>
      </Row>
      {/* showImp */}
      <Row>
      <Col>
      {!showImp ? (
          ""
              ) : (
                  <ImportCreate  /> 
              ) } 
      </Col>
      </Row>
    <h3 className="text-center" >Create Scene</h3>
    <Form className= {`mb-3 ${styles.Back}`} onSubmit={handleSubmit}>
    <Row className="text-center">
    <Col className="d-flex justify-content-center p-0 p-md-2" xs={{span: 4, offset: 4}} >
        <Form.Group controlId="number" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.Bold}`} >Number</Form.Label>
              <Form.Control 
              className={styles.Input}
              type="text"
              name="number"
              value={number}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.number?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
    </Row>
    <Row>
      <Col className="text-center">
      <div className= {`mt-3 ${styles.Container}`} >{buttons}</div>
      </Col>
    </Row>
  </Form>
  </div>
  );
}

export default SceneCreateForm;