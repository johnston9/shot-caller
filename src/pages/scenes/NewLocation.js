import React, { useState } from "react";
import { useRedirect } from "../../hooks/Redirect";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../styles/Scene.module.css";
import btnStyles from "../../styles/Button.module.css";
import Alert from "react-bootstrap/Alert";
import { axiosReq } from "../../api/axiosDefaults";

const NewLocation = ({setLocations}) => {
    useRedirect("loggedOut")
    const [errors, setErrors] = useState({});
    const [newLocation, setNewLocation] = useState("");

    const handleChange = (event) => {
        setNewLocation(event.target.value);
      };
    
      const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();    
        formData.append("name", newLocation);
        try {
            const { data } = await axiosReq.post("/locations/", formData);
            setLocations((prevLocs) => ({
                ...prevLocs,
                results: [data, ...prevLocs.results],
              }));
              setNewLocation("");
          } catch (err) {
            setErrors(err);
          }
    }
    
    const buttons = (
        <div className="text-center">    
          <Button
            className={`${btnStyles.Button} ${btnStyles.Blue}`}
            onClick={() => setNewLocation("")}
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
            <p className="mt-3 text-center">Add new Locations here first to enable the dropdown selection. </p>
            <Form onSubmit={handleSubmit}>
            <Row className="mt-3">
                <Col className="d-flex justify-content-center pb-1" xs={12}>
                    <Form.Group controlId="newLocation" 
                    className={`${styles.Width2} text-center`} >
                    <Form.Label className={` ${styles.Bold} `} >New Location</Form.Label>
                    <Form.Control 
                        className={styles.Input}
                        type="text"
                        name="newLocation"
                        value={newLocation}
                        onChange={handleChange}
                        />
                </Form.Group>
                {errors?.newLocation?.map((message, idx) => (
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

export default NewLocation
