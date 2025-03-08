/* Component in the CrewInfo page to display
   the Camera Department crew info */
   import React, { useState } from 'react';
   import { useRedirect } from '../../../../hooks/Redirect';
   import Col from 'react-bootstrap/Col';
   import Row from 'react-bootstrap/Row';
   import Button from 'react-bootstrap/Button';
   import styles from "../../../../styles/Callsheets.module.css";
   import btnStyles from "../../../../styles/Button.module.css";
   import ExtraCrewInfo from '../ExtraCrewInfo';
   
   const InfoCasting = ({crewInfoOne, setShowCas }) => {
     useRedirect();
     const [show, setShow] = useState(false);
   
     const {extras_casting_name, extras_casting_email, extras_casting_phone,} = crewInfoOne || {};
   
     return (
       <div>
         <div className={`mt-0 text-center ${styles.SubTitle }`}>
         <span className={`float-right pt-1 pt-md-2 ${styles.Bold } ${styles.Close }`} onClick={() => setShowCas(false) } >Close</span> 
          <h5 className={`d-none d-md-block pl-5 mb-0 text-center py-1 ${styles.Bold }`} >
          CASTING DEPARTMENT</h5>
          <h5 className={`d-block d-md-none pl-5 mb-0 text-center py-1 ${styles.Bold }`} >
          CASTING</h5>
         </div>
         <div className={`px-md-5 mx-md-5 ${styles.White }`}>
        {/*  Extras Casting */}
        {extras_casting_name && 
        (<div className={`${styles.CrewInfoRow} pt-3 pb-2`}>
        <div className='d-flex justify-content-center '>
        <p className={`mb-2 mx-4 py-0 text-center ${styles.Width95 }
        ${styles.SubTitle2 }`} style={{ textTransform: 'uppercase'}}>Extras Casting</p> 
        </div>
        <Row className='text-center' >
          <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`}>
            <p className={`${styles.CrewInfoP} `}>{extras_casting_name}</p>
          </Col>
          <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`}>
          <p className={`${styles.CrewInfop} `}>{extras_casting_phone}</p>
          </Col>
          <Col xs={12} md={4}  className='px-0 mx-0 pt-3 pt-md-0'>
            <p className={`${styles.CrewInfop} `}>{extras_casting_email}</p>
          </Col>
        </Row>
        {/* break */}
        <Row>
        <Col xs={12}>
        <hr className={`mt-3 mb-0 mx-5`}/>
        </Col>
        </Row>
        </div> )
        }
         </div>
         {/* Extra Positions Button */}
         <Row className='mt-3'>
           <Col className='text-center'>
           <Button onClick={() => setShow(show => !show)}
             className={`px-5 ${btnStyles.Button} ${btnStyles.Shed}`}>
             Extra Casting Dept Positions </Button>
           </Col>
         </Row>
         {!show ? (
             ""
                 ) : (
                   <ExtraCrewInfo
                   dept="casting"
                   setShow={setShow}  /> 
          ) } 
       </div>
     )
   }
   
   export default InfoCasting