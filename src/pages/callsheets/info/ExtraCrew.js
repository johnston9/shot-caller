/* Info component on the Crew Info Page
   telling users about Extra Crew */
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
         <div className={`px-3 py-1 ${styles.SubTitle6}`}>
         <h5 className={`text-center ${styles.Red }`} >IMPORTANT</h5>   
         <p className="px-3 pt-2" >
          1. The Non-Callsheet/Extra section contain positions 
          that will <span className={`${styles.Red}`}>NOT</span> appear on the Callsheet.
        </p>    
        <p className="px-3 pt-2" >
          2. These may include primary Pre and Post Production positions 
          and various Producers.
        </p>  
        <p className="px-3 pt-2" >
          3. These may also include extra crew positions that would traditionally
          get their Call Times from their department heads.
        </p> 
         <p className="px-3 pt-2" >
         4. They can be added by clicking the "Non-Callsheet/Extra Dept Positions"
         button at the bottom of each Department page. 
         </p>
         <p className="px-3 pt-2" >
         4. They <span className={`${styles.Red}`}>MUST</span> be Registered in the Admin section on the Home page
         if they are needed to access the app.</p>
         </div>
         </Col>
       </Row>
       </div>
     )
   }
   
   export default ExtraCrew