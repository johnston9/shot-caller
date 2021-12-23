import React from "react";
import door from "../assets/door.png";
import styles from "../styles/TopBox.module.css";
import { Col, Row, Image } from "react-bootstrap";

function TopBox(props) {
    return (
        <div className={styles.RegBox}>
        <Row className={styles.Row}>
        <Col
            xs={{ span: 1, offset: 1 }} lg={{ span: 1, offset: 3 }}
            md={{ span: 1, offset: 2 }}
            className={`text-center ${styles.Longboxl}`}
        >    
        <p>S</p> 
        <p>H</p>
        <p>O</p>
        <p>T</p> 
        </Col>

        <Col className="pb-1" xs={8} md={6} lg={4}>
            <div className={`${styles.Titlebox}`}>
            <Row>
                <Col xs={1}>
                    <Image
                        className={styles.SmallPanel}
                        src={door}
                    />
                </Col>
                <Col xs={10} className={` ${styles.Alignme}`} >
                    <h2 className={`mt-4 pt-3 text-center ${styles.Title}`}>{props.title} </h2>
                </Col>
            </Row>
            </div>
            </Col>

            <Col
            xs={{ span: 1, offset: 0 }} lg={{ span: 1, offset: 1 }}
            md={{ span: 1, offset: 0 }}
            className={`text-center px-0 mx-0 ${styles.Longboxr}`}
        >    
        <p>C</p> 
        <p>A</p>
        <p>L</p>
        <p>L</p> 
        <p>E</p>
        <p>R</p> 
        </Col>
        {/* <Col xs={2}
            className={`text-center mt-5 ${styles.Longboxr}`}
        >    
        <p className="mt-4">C A L L E R</p>
        </Col> */}
    </Row>
    </div>
    )
}

export default TopBox
