import React, { useRef, useState } from "react";
import { useRedirect } from "../../hooks/Redirect";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Asset from "../../components/Asset";

import Upload from "../../assets/upload.png";
import styles from "../../styles/Scene.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import Image from "react-bootstrap/Image";
import Alert from "react-bootstrap/Alert";

import { useHistory } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";

const NewCharacter = ({setCharacters}) => {
    useRedirect("loggedOut")
    const [errors, setErrors] = useState({});
    const [newCharacter, setNewCharacter] = useState("");
    // const {role} = postData;
    const history = useHistory();

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
        <div className= {` ${styles.NewChar}`}>
            <p className="mt-3 text-center">Add new characters here first to avail of the dropdown quick selection. </p>
            <Form onSubmit={handleSubmit}>
            <Row className="mt-3">
                <Col xs={3}></Col>
                <Col xs={3}>
                    <Form.Group controlId="newCharacter" className="mb-2" >
                    <Form.Label className="d-none p-1" >New Character</Form.Label>
                    <Form.Control 
                        placeholder="New Character"
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
