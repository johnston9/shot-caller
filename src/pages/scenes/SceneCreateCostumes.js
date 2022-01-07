import React, { useRef, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Asset from "../../components/Asset";

import Upload from "../../assets/upload.png";

import styles from "../../styles/PostCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import { Alert, Image } from "react-bootstrap";
import { useHistory } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import TopBox from "../../components/TopBox";
import { useRedirect } from "../../hooks/Redirect";

const SceneCreateCostumes = ({handleChange, postData}) => {
    useRedirect("loggedOut")
  const [errors, setErrors] = useState({});
  const history = useHistory();

  const { character1_costume, 
    character2_costume,  character3_costume, 
    character4_costume, character5_costume,
    character6_costume, character7_costume,
    character8_costume, character9_costume,
    character10_costume,character11_costume,
    character12_costume, other_characters_costumes,
    background_artists_costumes, } = postData;
    
    return (
        <div>
            {/* characters costumes */}
            <Row>
            <Col xs={6} md={4} lg={2}>
            <Form.Group controlId="character1_costume" className="mb-2" >
                <Form.Label className="p-1" >Ch. 1 Costume</Form.Label>
                <Form.Control 
                type="text"
                name="character1_costume"
                value={character1_costume}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.character1_costume?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={6} md={4} lg={2}>
            <Form.Group controlId="character2_costume" className="mb-2" >
                <Form.Label className="p-1" >Ch. 2 Costume</Form.Label>
                <Form.Control 
                type="text"
                name="character2_costume"
                value={character2_costume}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.character2_costume?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={6} md={4} lg={2}>
            <Form.Group controlId="character3_costume" className="mb-2" >
                <Form.Label className="p-1" >Ch. 3 Costume</Form.Label>
                <Form.Control 
                type="text"
                name="character3_costume"
                value={character3_costume}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.character3_costume?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={6} md={4} lg={2}>
            <Form.Group controlId="character4_costume" className="mb-2" >
                <Form.Label className="p-1" >Ch. 4 Costume </Form.Label>
                <Form.Control 
                type="text"
                name="character4_costume"
                value={character4_costume}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.character4_costume?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={6} md={4} lg={2}>
            <Form.Group controlId="character5_costume" className="mb-2" >
                <Form.Label className="p-1" >Ch. 5 Costume</Form.Label>
                <Form.Control 
                type="text"
                name="character5_costume"
                value={character5_costume}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.character5_costume?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={6} md={4} lg={2}>
            <Form.Group controlId="character6_costume" className="mb-2" >
                <Form.Label className="p-1" >Ch. 6 Costume</Form.Label>
                <Form.Control 
                type="text"
                name="character6_costume"
                value={character6_costume}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.character6_costume?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            </Row>
            <Row>
            <Col xs={6} md={4} lg={2}>
            <Form.Group controlId="character7_costume" className="mb-2" >
                <Form.Label className="p-1" >Ch. 7 Costume</Form.Label>
                <Form.Control 
                type="text"
                name="character7_costume"
                value={character7_costume}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.character7_costume?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={6} md={4} lg={2}>
            <Form.Group controlId="character8_costume" className="mb-2" >
                <Form.Label className="p-1" >Ch. 8 Costume</Form.Label>
                <Form.Control 
                type="text"
                name="character8_costume"
                value={character8_costume}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.character8_costume?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={6} md={4} lg={2}>
            <Form.Group controlId="character9_costume" className="mb-2" >
                <Form.Label className="p-1" >Ch. 9 Costume</Form.Label>
                <Form.Control 
                type="text"
                name="character9_costume"
                value={character9_costume}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.character9_costume?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={6} md={4} lg={2}>
            <Form.Group controlId="character10_costume" className="mb-2" >
                <Form.Label className="p-1" >Ch. 10 Costume</Form.Label>
                <Form.Control 
                type="text"
                name="character10_costume"
                value={character10_costume}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.character10_costume?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={6} md={4} lg={2}>
            <Form.Group controlId="character11_costume" className="mb-2" >
                <Form.Label className="p-1" >Ch. 11 Costume</Form.Label>
                <Form.Control 
                type="text"
                name="character11_costume"
                value={character11_costume}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.character11_costume?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={6} md={4} lg={2}>
            <Form.Group controlId="character12_costume" className="mb-2" >
                <Form.Label className="p-1" >Ch. 12 Costume</Form.Label>
                <Form.Control 
                type="text"
                name="character12_costume"
                value={character12_costume}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.character12_costume?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            </Row>
            <Row>
              <Col xs={6}>
            <Form.Group controlId="other_characters_costumes" className="mb-2" >
                <Form.Label className="p-1" >Other Characters Costumes</Form.Label>
                <Form.Control 
                type="text"
                name="other_characters_costumes"
                as="textarea"
                rows={2}
                value={other_characters_costumes}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.other_characters_costumes?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={6}>
            <Form.Group controlId="background_artists_costumes" className="mb-2" >
                <Form.Label className="p-1" >Background Artists Costumes</Form.Label>
                <Form.Control 
                type="text"
                name="background_artists_costumes"
                as="textarea"
                rows={2}
                value={background_artists_costumes}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.background_artists_costumes?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            </Row>
            {/* end characters costumes */}
            
        </div>
    )
}

export default SceneCreateCostumes
