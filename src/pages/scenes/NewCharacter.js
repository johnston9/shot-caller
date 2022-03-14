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

    const handleChange = (event) => {
        setNewCharacter(event.target.value);
      };
    
      const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();    
        formData.append("role", newCharacter);
        try {
            const { data } = await axiosReq.post("/characters/", formData);
            setCharacters((prevChars) => ({
                ...prevChars,
                results: [data, ...prevChars.results],
              }));
            setNewCharacter("");
          } catch (err) {
            console.log(err);
          }
    }
    
    const buttons = (
        <div className="text-center">    
          <Button
            className={`${btnStyles.Button} ${btnStyles.Blue}`}
            onClick={() => setNewCharacter("")}
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
                    <Form.Group controlId="newCharacter" className={`${styles.Width2} `} >
                    <Form.Label className="d-none p-1" >New Character</Form.Label>
                    <Form.Control 
                        // placeholder="Character"
                        className={styles.InputScene}
                        type="text"
                        name="newCharacter"
                        value={newCharacter}
                        onChange={handleChange}
                        />
                </Form.Group>
                {errors?.newCharacter?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                    {message}
                </Alert>
                ))}
                </Col>
                <Col xs={6}>
                    {buttons}
                </Col>
            </Row>
            </Form>            
        </div>
    )
}

export default NewCharacter
