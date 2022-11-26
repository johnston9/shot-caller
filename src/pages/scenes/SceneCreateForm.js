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
import Important from "./Important";
import Info from "./Info";
import useRedirect from "../../hooks/Redirect";

function SceneCreateForm({topbox}) {
  useRedirect("loggedOut");
  const [errors, setErrors] = useState({});
  const [show, setShow] = useState(false);
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
      <Button
            className={`${btnStyles.Button} ${btnStyles.Blue} py-0 mt-2`}
            onClick={() => history.goBack()}
        >
            Back
      </Button>  
    <p className="text-center" >First create the Scene by giving it a number</p>
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