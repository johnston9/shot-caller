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
           <div className={`text-center px-3 pt-1 ${styles.SubTitle7 }`}>
           <h5 className={`text-center `} >INFO</h5>  
           <p>
           Create the Callsheet by filling in one or more time inputs and submiting. 
           Add all other Info from the Edit page. 
           <br /> 
           Here the Cast and Background Calls are added seperatley from from links on the top section
          of the page underneath which is the main Callsheet Edit form.
             </p>
            </div> 
           </Col>
         </Row>
       </div>
     )
   }
   
   export default InfoCallCreate