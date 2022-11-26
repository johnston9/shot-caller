import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../styles/Callsheets.module.css";

const Info = () => {
  return (
    <div>
        <Row className="mb-3">
      <Col className="d-none d-md-block" md={1}></Col>     
      <Col xs={12} md={10} >
        <div className={`text-center px-3 pt-1 ${styles.SubTitle2 }`}>
        <h5 className={`text-center`} >INFO</h5>  
        <p className={`text-center px-3 pt-1`}>
          New Locations must be added first on Locations Page or
          in Add Location box below.<br/>
          </p>     
         </div>
      </Col>
    </Row>
    </div>
  )
}

export default Info