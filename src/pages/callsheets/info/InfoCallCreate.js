/* Info component on the Create and Callsheet form
   telling users that the Add Cast and Add Background forms are 
   seperate from the main Callsheet form */
   import React from 'react';
   import Row from "react-bootstrap/Row";
   import Col from "react-bootstrap/Col";
   import styles from "../../../styles/Callsheets.module.css";
   
   const InfoCallCreate = () => {
     return (
       <div>
           <Row className="mb-3">
           <Col md={{span: 10, offset: 1}}>
           <div className={`text-center px-3 py-3 ${styles.SubTitle6 }`}>
           <p>
           Create the Callsheet by filling in one or more time inputs and submiting.</p>
           <p>
           Add all other Info from the Edit page where the Cast and Background Calltimes
          are added separately from links on the top.
             </p>
            </div> 
           </Col>
         </Row>
       </div>
     )
   }
   
   export default InfoCallCreate