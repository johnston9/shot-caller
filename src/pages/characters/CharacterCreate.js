import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import styles from "../../styles/PostCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import Alert from "react-bootstrap/Alert";

import { useHistory } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import TopBox from "../../components/TopBox";
import { useRedirect } from "../../hooks/Redirect";
import Important from "./Important";
import { useCharactersContext, useScenesContext, useSetCharactersContext } from "../../contexts/Scene_chars_locs";

const CharacterCreate = ({topbox} ) => {
    useRedirect("loggedOut")
    const [errors, setErrors] = useState({});
    const characters = useCharactersContext();
    // eslint-disable-next-line
    const setCharacters = useSetCharactersContext();
    // eslint-disable-next-line
    const scenes = useScenesContext();
    const [showImp, setShowImp] = useState(false);

    const [postData, setPostData] = useState({
        number: "",
        role: "",
        username: "",
      });

      const { number,
              role,
              username,
        } = postData;

        const cancel = () => {
          setPostData({
            number: "",
            role: "",
          })
        }

      const history = useHistory();

      const castNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
      "11", "12", "13", "14", "15", "16", "17", "18", "19", "20",
      "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"]

      const usedNumbers = characters.results.map((char) => (
       char.number));

      const unusedNumbers = castNumbers.filter(
        number => !usedNumbers.includes(number));

    const handleChange = (event) => {
        setPostData({
          ...postData,
          role: event.target.value,
        });
      };

      const handleChange2 = (event) => {
        const castnumber = event.target.value;
        const usernamecast = `cast${castnumber}`;
        setPostData({
          ...postData,
          number: event.target.value,
          username: usernamecast,
        });
      };
    
    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
    
        formData.append("number", number);
        formData.append("role", role);
        formData.append("username", username);
      
        try {
          const { data } = await axiosReq.post("/characters/", formData);
          history.push(`/characters/${data.id}/`);
          console.log(data);
        } catch (err) {
          console.log(err);
          if (err.response?.status !== 401) {
            setErrors(err.response?.data);
          }
        }
      }

    const buttons = (
      <div className="text-center">    
        <Button
          className={`${btnStyles.Button} ${btnStyles.Blue} mr-3 px-4`}
          onClick={cancel}
        >
          Cancel
        </Button>
        <Button className={`${btnStyles.Button} ${btnStyles.Blue} mr-3 px-4`} type="submit">
          Create
        </Button>
      </div>
    );
  
    return (
      <div className="mt-3">
      {topbox ? (
        ""
      ) : (
        <div>
        <TopBox title="Create Character" />
        <Button
        className={`${btnStyles.Button} ${btnStyles.Blue} my-1`}
        onClick={() => history.goBack()}
        >
        Back
        </Button>
        <Button
          className={`float-right py-0 mt-1 ${btnStyles.Order} ${btnStyles.Button}`}
          onClick={() => setShowImp(showImp => !showImp)} >IMPORTANT
        </Button>
        {/* <p>{unusedNumbers}</p>  
        {usedNumbers} */}
          {!showImp ? (
              ""
                  ) : (
                    <Important  /> 
                    ) }   
            </div>
          ) }
        <Container className= {`mt-3 ${appStyles.Content} ${styles.Container}`} >
      <Form className="mt-0" onSubmit={handleSubmit}>
      <h5 className={`text-center mb-4 pl-3 py-1 mx-3 ${styles.SubTitle }`}
             style={{ textTransform: 'uppercase'}}>Character Info</h5>
      <Row>
          <Col xs={6} className="d-flex justify-content-center" >
          <Form.Group controlId="role" className={`${styles.Width2} text-center`}  >
                  <Form.Label className={`${styles.Bold} `} >Role</Form.Label>
                  <Form.Control 
                  className={styles.Input}
                  type="text"
                  name="role"
                  value={role}
                  onChange={handleChange}
                      />
              </Form.Group>
              {errors?.role?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
          </Col>
          <Col xs={6} className="d-flex justify-content-center" >
          <Form.Group controlId="number" className={`${styles.Width2} text-center`} >
                  <Form.Label className={` ${styles.Bold} `} >Number</Form.Label>
                  <Form.Control as="select"
                  className={styles.InputChar}
                  type="text"
                  name="number"
                  value={number}
                  onChange={handleChange2}
                  aria-label="character1 select">
                    <option  ></option>
                    { (unusedNumbers.map((number) => (
                      <option key={number} value={number} >
                        {number}</option>
                    ) )) }
                  </Form.Control>
              </Form.Group>
              {errors?.number?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
          </Col>
      </Row>
      <Row>
        <Col>
          <div className= {` my-3`} >{buttons} </div>
        </Col>
      </Row>
    </Form>
    </Container>
    </div>
    );
}

export default CharacterCreate
