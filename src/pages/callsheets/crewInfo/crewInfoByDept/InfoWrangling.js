/* Component in the CrewInfo page to display
   the Construction and Wrangling Department crew info */
   import React, { useState } from 'react';
   import { useRedirect } from '../../../../hooks/Redirect';
   import Col from 'react-bootstrap/Col';
   import Row from 'react-bootstrap/Row';
   import Button from 'react-bootstrap/Button';
   import btnStyles from "../../../../styles/Button.module.css";
   import styles from "../../../../styles/Callsheets.module.css";
   import ExtraCrewInfo from '../ExtraCrewInfo';

const InfoWrangling = ({crewInfoOne, setShowWra}) => {
    useRedirect();
      const [showWrang, setShowWrang] = useState(false); 
      const [showConst, setShowConst] = useState(false); 

      const {legal_name, legal_email, legal_phone,
        add_pos_11_name, add_pos_11_email, add_pos_11_phone,
        add_pos_12_name, add_pos_12_email, add_pos_12_phone,
        add_pos_13_name, add_pos_13_email, add_pos_13_phone,
        add_pos_14_name, add_pos_14_email, add_pos_14_phone,} = crewInfoOne || {};

  return (
    <div>
    <div className={`mt-0 text-center ${styles.SubTitle }`}>
      <span className={`float-right pt-1 pt-md-2 ${styles.Bold } ${styles.Close }`} onClick={() => setShowWra(false) } >Close</span> 
      <h5 className={`d-none d-md-block pl-5 mb-0 text-center py-1 ${styles.Bold }`} >
      CONSTRUCTION DEPARTMENT</h5>
        <h5 className={`d-block d-md-none pl-5 mb-0 text-center py-1 ${styles.Bold }`} >
        CONSTRUCTION</h5>
    </div>
    <div className={`px-md-5 mx-md-5 ${styles.White }`}>
    {/* Standby Carpenter (Using Additional Position 11 keys) */}
    {add_pos_11_name && 
          (<div className={`${styles.CrewInfoRow} pt-3 pb-2`}>
          <div className='d-flex justify-content-center '>
          <p className={`mb-2 mx-4 py-0 text-center ${styles.Width95 }
      ${styles.SubTitle2 }`} style={{ textTransform: 'uppercase'}}>Standby Carpenter</p>  
          </div>
          <Row className='text-center' >
            <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`} >
              <p className={`${styles.CrewInfoP} `}>{add_pos_11_name}</p>
            </Col>
            <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`} >
            <p className={`${styles.CrewInfop} `}>{add_pos_11_phone}</p>
            </Col>
            <Col xs={12} md={4}  className='px-0 mx-0 pt-3 pt-md-0' >
              <p className={`${styles.CrewInfop} `}>{add_pos_11_email}</p>
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
    {/* Standby Painter (Using Additional Position 12 keys) */}
    {add_pos_12_name && 
          (<div className={`${styles.CrewInfoRow} mt-1 pb-2`}>
          <div className='d-flex justify-content-center '>
          <p className={`mb-2 mx-4 py-0 text-center ${styles.Width95 }
      ${styles.SubTitle2 }`} style={{ textTransform: 'uppercase'}}>Standby Painter</p>  
          </div>
          <Row className='text-center' >
            <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`} >
              <p className={`${styles.CrewInfoP} `}>{add_pos_12_name}</p>
            </Col>
            <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`} >
            <p className={`${styles.CrewInfop} `}>{add_pos_12_phone}</p>
            </Col>
            <Col xs={12} md={4}  className='px-0 mx-0 pt-3 pt-md-0' >
              <p className={`${styles.CrewInfop} `}>{add_pos_12_email}</p>
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
    {/* Standby Rigger (Using Additional Position 13 keys) */}
    {add_pos_13_name && 
          (<div className={`${styles.CrewInfoRow} mt-1 pb-2`}>
          <div className='d-flex justify-content-center '>
          <p className={`mb-2 mx-4 py-0 text-center ${styles.Width95 }
      ${styles.SubTitle2 }`} style={{ textTransform: 'uppercase'}}>Standby Rigger</p>  
          </div>
          <Row className='text-center' >
            <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`} >
              <p className={`${styles.CrewInfoP} `}>{add_pos_13_name}</p>
            </Col>
            <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`} >
            <p className={`${styles.CrewInfop} `}>{add_pos_13_phone}</p>
            </Col>
            <Col xs={12} md={4}  className='px-0 mx-0 pt-3 pt-md-0' >
              <p className={`${styles.CrewInfop} `}>{add_pos_13_email}</p>
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
    {/* Standby Stagehand (Using Additional Position 14 keys) */}
    {add_pos_14_name && 
          (<div className={`${styles.CrewInfoRow} mt-1 pb-2`}>
          <div className='d-flex justify-content-center '>
          <p className={`mb-2 mx-4 py-0 text-center ${styles.Width95 }
      ${styles.SubTitle2 }`} style={{ textTransform: 'uppercase'}}>Standby Stagehand</p>  
          </div>
          <Row className='text-center' >
            <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`} >
              <p className={`${styles.CrewInfoP} `}>{add_pos_14_name}</p>
            </Col>
            <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`} >
            <p className={`${styles.CrewInfop} `}>{add_pos_14_phone}</p>
            </Col>
            <Col xs={12} md={4}  className='px-0 mx-0 pt-3 pt-md-0' >
              <p className={`${styles.CrewInfop} `}>{add_pos_14_email}</p>
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
           <Button onClick={() => setShowConst(showConst => !showConst)}
             className={`px-5 ${btnStyles.Button} ${btnStyles.Shed}`}>
             Extra Construction Dept Positions </Button>
           </Col>
         </Row>
         {!showConst ? (
             ""
                 ) : (
                   <ExtraCrewInfo
                   dept="construction"
                   setShow={setShowConst}  /> 
          ) } 
    {/* WRANGLING */}
    <div className={`mt-4 mx-5 text-center ${styles.SubTitle }`}>
      <h5 className={` mb-0 text-center py-1 ${styles.Bold }`} >WRANGLING DEPARTMENT</h5>
      </div>
      <div className={`px-md-5 mx-md-5 ${styles.White }`}>
      {/* Head Wrangler (Using legal keys) */}
      {legal_name && 
          (<div className={`${styles.CrewInfoRow} pt-3 pb-2`}>
          <div className='d-flex justify-content-center '>
          <p className={`mb-2 mx-4 py-0 text-center ${styles.Width95 }
      ${styles.SubTitle2 }`} style={{ textTransform: 'uppercase'}}>Head Wrangler</p>  
          </div>
          <Row className='text-center' >
            <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`} >
              <p className={`${styles.CrewInfoP} `}>{legal_name}</p>
            </Col>
            <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`} >
            <p className={`${styles.CrewInfop} `}>{legal_phone}</p>
            </Col>
            <Col xs={12} md={4}  className='px-0 mx-0 pt-3 pt-md-0' >
              <p className={`${styles.CrewInfop} `}>{legal_email}</p>
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
           <Button onClick={() => setShowWrang(showWrang => !showWrang)}
             className={`px-5 ${btnStyles.Button} ${btnStyles.Shed}`}>
             Extra Wrangling Dept Positions </Button>
           </Col>
         </Row>
         {!showWrang ? (
             ""
                 ) : (
                   <ExtraCrewInfo
                   dept="wrangling"
                   setShow={setShowWrang}  /> 
          ) } 
    </div>
  )
}

export default InfoWrangling