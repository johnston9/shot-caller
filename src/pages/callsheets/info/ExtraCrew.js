/* Info component on the Crew Info Page
   telling users about Extar Crew */
   import React from "react";
   import Row from "react-bootstrap/Row";
   import Col from "react-bootstrap/Col";
   import styles from "../../../styles/Callsheets.module.css";
   
   const ExtraCrew = () => {
     return (
       <div>
           <Row className="mb-3">
         <Col className="d-none d-md-block" md={1}></Col>     
         <Col xs={12} md={10} >
         {/* ${styles.SubTitle6 } */}
         <div className={`text-center px-3 py-1 ${styles.SubTitle6}`}>
         <h5 className={`text-center ${styles.Red }`} >NON/CALLSHEET/EXTRA CREW MEMBERS</h5>       
         <p>
         Crew members not needed to be on the Callsheet may be added in the ExtraCrewInfo
         section in each Department page. They may be optionally Registered</p>
         <p>E.G. Producers, Pre and Post Production Crew and the extra crew members that would traditionally
         get call times from ther department heads. 
         </p>
         </div>
         </Col>
       </Row>
       </div>
     )
   }
   
   export default ExtraCrew