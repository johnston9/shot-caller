/* Component in the CrewInfo page to display
   the Catering Department crew info */
   import React, { useState } from 'react';
   import { useRedirect } from '../../../../hooks/Redirect';
   import Col from 'react-bootstrap/Col';
   import Row from 'react-bootstrap/Row';
   import styles from "../../../../styles/Callsheets.module.css";
   import Button from 'react-bootstrap/Button';
   import btnStyles from "../../../../styles/Button.module.css";
   import ExtraCrewInfo from '../ExtraCrewInfo';
   
   const InfoCater = ({crewInfoOne, setShowCat }) => {
     useRedirect();
     const [showCater, setShowCater] = useState(false);
     const [showCraft, setShowCraft] = useState(false);
   
     const {craft_service_name, craft_service_email, craft_service_phone,
       crafty_ass_name, crafty_ass_email, crafty_ass_phone,
     } = crewInfoOne || {};
   
     return (
       <div>
         <div className={`mt-0 text-center ${styles.SubTitle }`}>
         <span className={`float-right pt-1 pt-md-2 ${styles.Bold } ${styles.Close }`} onClick={() => setShowCat(false) } >Close</span> 
         <h5 className={`d-none d-md-block pl-5 mb-0 text-center py-1 ${styles.Bold }`} >
         CATERING DEPARTMENT</h5>
          <h5 className={`d-block d-md-none pl-5 mb-0 text-center py-1 ${styles.Bold }`} >
          CATERING</h5>
         </div>
         <div className={`px-md-5 mx-md-5 ${styles.White }`}>
        <p className={`pt-3 text-center`} style={{fontStyle: 'italic'}}>
        Add/View all Catering from the "Non-Callsheet/Extra Catering Dept Positions" tab below.
        </p>
         </div>
         {/* Extra Positions Button */}
         <Row className='mt-3'>
        <Col className='text-center d-none d-md-block'>
        <Button onClick={() => setShowCater(showCater => !showCater)}
          className={`px-5 ${btnStyles.Button} ${btnStyles.Shed}
          ${btnStyles.Wide4}`} style={{ textTransform: 'uppercase'}}>
          Non-Callsheet Extra Catering Dept Positions </Button>
        </Col>
        <Col className='text-center d-block d-md-none'>
        <Button onClick={() => setShowCater(showCater => !showCater)}
          className={`px-5 ${btnStyles.Button} ${btnStyles.Shed} ${btnStyles.Wide3}`}
          style={{ textTransform: 'uppercase'}}>
          Non-Callsheet Extra Catering Dept Positions </Button>
        </Col>
      </Row>
         {!showCater ? (
             ""
                 ) : (
                   <ExtraCrewInfo
                   dept="catering"
                   setShow={setShowCater}  /> 
          ) } 
         {/* CRAFT SERVICES */}
         <div className={`mt-4 mx-md-5 text-center ${styles.SubTitle }`}>
         <h5 className={`mb-0 text-center py-1 ${styles.Bold }`} >
         CRAFT SERVICES </h5></div>
         <div className={`px-md-5 mx-md-5 ${styles.White }`}>
        {/*  Craft Service */}
        {craft_service_name && 
        (<div className={`${styles.CrewInfoRow} pt-3 pb-2`}>
        <div className='d-flex justify-content-center '>
        <p className={`mb-2 mx-4 py-0 text-center ${styles.Width95 }
        ${styles.SubTitle2 }`} style={{ textTransform: 'uppercase'}}>Craft Service</p> 
        </div>
        <Row className='text-center' >
          <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`}>
            <p className={`${styles.CrewInfoP} `}>{craft_service_name}</p>
          </Col>
          <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`}>
          <p className={`${styles.CrewInfop} `}>{craft_service_phone}</p>
          </Col>
          <Col xs={12} md={4}  className='px-0 mx-0 pt-3 pt-md-0'>
            <p className={`${styles.CrewInfop} `}>{craft_service_email}</p>
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
        {/*  Crafty Assistant */}
        {crafty_ass_name && 
        (<div className={`${styles.CrewInfoRow} pt-3 pb-2`}>
        <div className='d-flex justify-content-center '>
        <p className={`mb-2 mx-4 py-0 text-center ${styles.Width95 }
        ${styles.SubTitle2 }`} style={{ textTransform: 'uppercase'}}>Crafty Assistant</p> 
        </div>
        <Row className='text-center' >
          <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`}>
            <p className={`${styles.CrewInfoP} `}>{crafty_ass_name}</p>
          </Col>
          <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`}>
          <p className={`${styles.CrewInfop} `}>{crafty_ass_phone}</p>
          </Col>
          <Col xs={12} md={4}  className='px-0 mx-0 pt-3 pt-md-0'>
            <p className={`${styles.CrewInfop} `}>{crafty_ass_email}</p>
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
        <Col className='text-center d-none d-md-block'>
        <Button onClick={() => setShowCraft(showCraft => !showCraft)}
          className={`px-5 ${btnStyles.Button} ${btnStyles.Shed}
          ${btnStyles.Wide4}`} style={{ textTransform: 'uppercase'}}>
          Non-Callsheet Extra Craft Dept Positions </Button>
        </Col>
        <Col className='text-center d-block d-md-none'>
        <Button onClick={() => setShowCraft(showCraft => !showCraft)}
          className={`px-5 ${btnStyles.Button} ${btnStyles.Shed} ${btnStyles.Wide3}`}
          style={{ textTransform: 'uppercase'}}>
          Non-Callsheet Extra Craft Dept Positions </Button>
        </Col>
      </Row>
         {!showCraft ? (
             ""
                 ) : (
                   <ExtraCrewInfo
                   dept="craft"
                   setShow={setShowCraft}  /> 
          ) } 
       </div>
     )
   }
   
   export default InfoCater