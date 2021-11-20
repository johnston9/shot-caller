import React from "react";
import door from "../assets/door.png";
import styles from "../styles/TopBox.module.css";
import { Col, Row, Container} from "react-bootstrap";

function TopBox() {
    return (
        <Row className={styles.Row}>
        <Col
            xs={{ span: 1, offset: 1 }} md={{ span: 1, offset: 3 }}
            className={`my-auto ${styles.Longboxl}`}
        >    
        <p>S</p> 
        <p>H</p>
        <p>O</p>
        <p>T</p> 
        </Col>

        <Col className="my-auto py-2 p-md-2" xs={8} md={4}>
            <Container className={`${styles.Titlebox} p-4 `}>
            <Row>
                <Col xs={1} >
                    {/* <Image
                        className={styles.Door}
                        src={door}
                    /> */}
                </Col>
                <Col xs={11} >
                    <h1>sign up</h1>
                </Col>
            </Row>
            </Container>
            </Col>

            <Col
            xs={{ span: 1, offset: 1 }} md={1}
            className={`my-auto ${styles.Longboxr}`}
        >    
        <p>C</p> 
        <p>A</p>
        <p>L</p>
        <p>L</p> 
        <p>E</p>
        <p>R</p> 
        </Col>
    </Row>
    )
}

export default TopBox
