import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import styles from "../../styles/Scene.module.css";
import { Alert } from "react-bootstrap";
import { useRedirect } from "../../hooks/Redirect";

const SceneEditCostumes = ({handleChange, postData}) => {
    useRedirect("loggedOut")
  const [errors, setErrors] = useState({});

  const { character1_costume, 
    character2_costume,  character3_costume, 
    character4_costume, character5_costume,
    character6_costume, character7_costume,
    character8_costume, character9_costume,
    character10_costume,character11_costume,
    character12_costume, other_characters_costumes,
    background_artists_costumes, } = postData;
    return (
        <div className="mt-3 px-3">
            {/* characters costumes */}
            <Row className="mt-3">
            <Col xs={6} md={4} lg={2}>
            <Form.Group controlId="character1_costume" className="mb-2" >
                <Form.Label className="p-1 d-none" >Ch. 1 Costume</Form.Label>
                <Form.Control 
                type="text"
                placeholder="C 1 Costume"
                className={styles.InputChar}
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
                <Form.Label className="p-1 d-none" >Ch 2 Costume</Form.Label>
                <Form.Control 
                type="text"
                className={styles.InputChar}
                placeholder="C 2 Costume"
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
                <Form.Label className="p-1 d-none" >Ch. 3 Costume</Form.Label>
                <Form.Control 
                type="text"
                className={styles.InputChar}
                placeholder="C 3 Costume"
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
                <Form.Label className="p-1 d-none" >Ch. 4 Costume </Form.Label>
                <Form.Control 
                type="text"
                className={styles.InputChar}
                placeholder="C 4 Costume"
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
                <Form.Label className="p-1 d-none" >Ch. 5 Costume</Form.Label>
                <Form.Control 
                type="text"
                className={styles.InputChar}
                placeholder="C 5 Costume"
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
                <Form.Label className="p-1 d-none" >Ch. 6 Costume</Form.Label>
                <Form.Control 
                type="text"
                className={styles.InputChar}
                placeholder="C 6 Costume"
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
                <Form.Label className="p-1 d-none" >Ch. 7 Costume</Form.Label>
                <Form.Control 
                type="text"
                className={styles.InputChar}
                placeholder="C 7 Costume"
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
                <Form.Label className="p-1 d-none" >Ch. 8 Costume</Form.Label>
                <Form.Control 
                type="text"
                className={styles.InputChar}
                placeholder="C 8 Costume"
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
                <Form.Label className="p-1 d-none" >Ch. 9 Costume</Form.Label>
                <Form.Control 
                type="text"
                className={styles.InputChar}
                placeholder="C 9 Costume"
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
                <Form.Label className="p-1 d-none" >Ch. 10 Costume</Form.Label>
                <Form.Control 
                type="text"
                className={styles.InputChar}
                placeholder="C 10 Costume"
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
                <Form.Label className="p-1 d-none" >Ch. 11 Costume</Form.Label>
                <Form.Control 
                type="text"
                className={styles.InputChar}
                placeholder="C 11 Costume"
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
                <Form.Label className="p-1 d-none" >Ch. 12 Costume</Form.Label>
                <Form.Control 
                type="text"
                className={styles.InputChar}
                placeholder="C 12 Costume"
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
                <Form.Label className="p-1 d-none" >Other Characters Costumes</Form.Label>
                <Form.Control 
                type="text"
                className={styles.InputScene}
                placeholder="Other Characters Costumes"
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
                <Form.Label className="p-1 d-none" >Background Artists Costumes</Form.Label>
                <Form.Control 
                type="text"
                className={styles.InputScene}
                placeholder="Background Artists Costumes"
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

export default SceneEditCostumes
