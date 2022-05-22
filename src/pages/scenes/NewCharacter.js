import React, {useState } from "react";
import { useRedirect } from "../../hooks/Redirect";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../styles/Scene.module.css";
import btnStyles from "../../styles/Button.module.css";
import Alert from "react-bootstrap/Alert";

import { axiosReq } from "../../api/axiosDefaults";
import { useSetCharactersContext } from "../../contexts/Scene_chars_locs";

const NewCharacter = () => {
  const setCharacters = useSetCharactersContext();
    useRedirect("loggedOut")
    const [errors] = useState({});
    const [newCharacter, setNewCharacter] = useState("");
    const [number, setNumber] = useState("");

    const handleChange1 = (event) => {
        setNewCharacter(event.target.value);
      };

      const handleChange2 = (event) => {
        setNumber(event.target.value);
      };

      const cancel = () => {
        setNumber("");
        setNewCharacter("");
      }
    
      const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();    
        formData.append("role", newCharacter);
        formData.append("number", number);
        try {
            const { data } = await axiosReq.post("/characters/", formData);
            setCharacters((prevChars) => ({
                ...prevChars,
                results: [data, ...prevChars.results],
              }));
            setNewCharacter("");
            setNumber("");
          } catch (err) {
            console.log(err);
          }
    }
    
    const buttons = (
        <div className="text-center">    
          <Button
            className={`${btnStyles.Button} ${btnStyles.Blue}`}
            onClick={cancel}
          >
            Cancel
          </Button>
          <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
            Create
          </Button>
        </div>
      );

    return (
        <div className= {` ${styles.Back}`}>
            <p className="mt-3 text-center">Add new Characters here first to enable the dropdown selection. </p>
            <Form onSubmit={handleSubmit}>
            <Row className="mt-3">
                <Col className="d-flex justify-content-center pb-1" xs={6}>
                    <Form.Group controlId="newCharacter" 
                    className={`${styles.Width2} text-center`} >
                    <Form.Label className={` ${styles.Bold} `} >New Character</Form.Label>
                    <Form.Control 
                        // placeholder="Character"
                        className={styles.Input}
                        type="text"
                        name="newCharacter"
                        value={newCharacter}
                        onChange={handleChange1}
                        />
                </Form.Group>
                {errors?.newCharacter?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                    {message}
                </Alert>
                ))}
                </Col>
                <Col xs={6} className="d-flex justify-content-center" >
                <Form.Group controlId="number"
                 className={`${styles.Width2} text-center`} >
                  <Form.Label className={` ${styles.Bold} `} >Number</Form.Label>
                  <Form.Control 
                  className={styles.Input}
                  type="text"
                  name="number"
                  value={number}
                  onChange={handleChange2}
                      />
              </Form.Group>
              {errors?.number?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
                </Col>
                <Col className="mt-2" xs={12}>
                    {buttons}
                </Col>
            </Row>
            </Form>            
        </div>
    )
}

export default NewCharacter
