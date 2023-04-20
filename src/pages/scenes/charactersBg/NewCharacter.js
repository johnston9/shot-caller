/* Component in the CharactersAdd Component to add new characters 
   to the project */ 
import React, {useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../styles/Scene.module.css";
import btnStyles from "../../../styles/Button.module.css";
import Alert from "react-bootstrap/Alert";

import { axiosReq } from "../../../api/axiosDefaults";
import { useCharactersContext, useSetCharactersContext } from "../../../contexts/Scene_chars_locs";

const NewCharacter = ({setShowAdd} ) => {
    const characters = useCharactersContext();
    const setCharacters = useSetCharactersContext();
    const [errors] = useState({});
    const [newCharacter, setNewCharacter] = useState("");
    const [number, setNumber] = useState("");
    const [username, setUsername] = useState("");

    const handleChange1 = (event) => {
        setNewCharacter(event.target.value);
      };

      const handleChange2 = (event) => {
        const castnumber = event.target.value;
        const usernamecast = `cast${castnumber}`;
        console.log(usernamecast);
        setNumber(event.target.value);
        setUsername(usernamecast);
      };

      const cancel = () => {
        setNumber("");
        setNewCharacter("");
        setUsername("");
        setShowAdd(false);
      }

      const castNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 
      15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]

      const usedNumbers = characters.results.map((char) => (
      char.number));

      const unusedNumbers = castNumbers.filter(
        number => !usedNumbers.includes(number));
    
      const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();    
        formData.append("role", newCharacter);
        formData.append("number", number);
        formData.append("username", username);
        try {
            const { data } = await axiosReq.post("/characters/", formData);
            setCharacters((prevChars) => ({
                ...prevChars,
                results: [data, ...prevChars.results],
              }));
            setNewCharacter("");
            setNumber("");
            setUsername("");
            console.log(data);
          } catch (err) {
            console.log(err);
          }
    }
    
    const buttons = (
      <div className="mb-2 text-center">    
        <Button
          className={`${btnStyles.Button} ${btnStyles.Blue} px-5 mr-4`}
          onClick={cancel}
        >
          Cancel
        </Button>
        <Button className={`px-5 ml-4 ${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
          Create
        </Button>
      </div>
    );

    return (
          <div >
          <Row >
          <Col className={`px-0 mb-3 ${styles.Back }`} xs={12} md={{span: 8, offset: 2 }} >
          <h5 className={`text-center mb-0 py-0 ${styles.SubTitle }`} >
            ADD NEW CHARACTER</h5> 
            <Form onSubmit={handleSubmit}>
            <Row className="mt-0">
                <Col className="d-flex justify-content-center pb-1" xs={6}>
                    <Form.Group controlId="newCharacter" 
                    className={`${styles.Width2} text-center`} >
                    <Form.Label className={` ${styles.Bold} `} >New Character</Form.Label>
                    <Form.Control 
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
                <Col className="mt-2 pb-2" xs={12}>
                    {buttons}
                </Col>
            </Row>
            </Form> 
          </Col>
          </Row>
          </div>         
    )
}

export default NewCharacter
