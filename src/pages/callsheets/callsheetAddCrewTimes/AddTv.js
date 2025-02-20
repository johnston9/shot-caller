/* Form to add the TV Studio Calltimes to the Callsheet
   From the Callsheet Edit page */
   import React, { useState } from "react";
   import Form from "react-bootstrap/Form";
   import Col from 'react-bootstrap/Col';
   import Row from 'react-bootstrap/Row';
   import { Alert } from "react-bootstrap";
   import styles from "../../../styles/Callsheets.module.css";
   
   const AddTv = ({crewInfoOne, handleChange, postData, setShowStu }) => {
     // eslint-disable-next-line
     const [errors, setErrors] = useState({});
   
     const {add_pos_16_name,
      add_pos_17_name,
      add_pos_18_name,
      add_pos_19_name,
      add_pos_20_name,
      add_pos_15_job, add_pos_15_name,}
       = crewInfoOne || {};
   
     const {
       } = postData || {};
   
     return (
       <div>
         <div className={`mt-0 text-center py-1 ${styles.SubTitle }`}>
         <span className={`float-right pt-1 ${styles.Close }`} onClick={() => setShowStu(false) } >Close</span> 
         <h5 className={`pl-5 text-center`} style={{ textTransform: 'uppercase'}} >TV STUDIO POSITIONS</h5>
         </div>
         <div className="mt-3"></div>

       </div>
     )
   }
   
   export default AddTv