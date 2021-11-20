import React from "react";
import door from "../assets/door.png";
import styles from "../styles/TopBox.module.css";
import { Col, Row, Container, Image } from "react-bootstrap";

function TopBox() {
    return (
        <div className={styles.RegBox}>
        <Row className={styles.Row}>
        <Col
            xs={{ span: 1, offset: 1 }} md={{ span: 1, offset: 3 }}
            className={`text-center ${styles.Longboxl}`}
        >    
        <p>S</p> 
        <p>H</p>
        <p>O</p>
        <p>T</p> 
        </Col>

        <Col className="pb-1" xs={8} md={4}>
            <div className={`${styles.Titlebox}`}>
            <Row>
                <Col xs={1}>
                    <Image
                        className={styles.SmallPanel}
                        src={door}
                    />
                </Col>
                <Col xs={10} className={`${styles.Alignme}`} >
                    <h2 className="mx-auto">Sign up</h2>
                </Col>
            </Row>
            </div>
            </Col>

            <Col
            xs={{ span: 1, offset: 0 }} md={{ span: 1, offset: 0 }}
            className={`text-center ${styles.Longboxr}`}
        >    
        <p>C</p> 
        <p>A</p>
        <p>L</p>
        <p>L</p> 
        <p>E</p>
        <p>R</p> 
        </Col>
    </Row>
    </div>
    )
}

export default TopBox
