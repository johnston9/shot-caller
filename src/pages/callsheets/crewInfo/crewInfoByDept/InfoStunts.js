/* Component in the CrewInfo page to display
   the Stunts Department crew info */
import React, { useState } from 'react';
import { useRedirect } from '../../../../hooks/Redirect';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../../../styles/Callsheets.module.css";
import Button from 'react-bootstrap/Button';
import btnStyles from "../../../../styles/Button.module.css";
import ExtraCrewInfo from '../ExtraCrewInfo';

const InfoStunts = ({crewInfoOne, setShowStu}) => {
  useRedirect();
  const [show, setShow] = useState(false);
  const [showSfx, setShowSfx] = useState(false);

  const {stunt_coordinator_name, stunt_coordinator_email, stunt_coordinator_phone,
    stunts_1_name, stunts_1_email, stunts_1_phone,
    stunts_2_name, stunts_2_email, stunts_2_phone,
    stunts_3_name, stunts_3_email, stunts_3_phone,
    stunts_4_name, stunts_4_email, stunts_4_phone,
    stunts_5_name, stunts_5_email, stunts_5_phone,} = crewInfoOne || {};
    
  return (
    <div>
      <div className={`mt-0 text-center ${styles.SubTitle }`}>
      <span className={`float-right pt-1 pt-md-2 ${styles.Close }`} onClick={() => setShowStu(false) } >Close</span> 
      <h5 className={`d-none d-md-block pl-5 mb-0 text-center py-1 ${styles.Bold }`} >
      STUNT DEPARTMENT</h5>
      <h5 className={`d-block d-md-none pl-5 mb-0 text-center py-1 ${styles.Bold }`} >
      STUNTS</h5>
      </div>
      <div className={`px-md-5 mx-md-5 ${styles.White }`}>
      {/* Stunt Coordinator */}
      {stunt_coordinator_name && 
          (<div className={`${styles.CrewInfoRow} pt-3 pb-2`}>
          <div className='d-flex justify-content-center '>
          <p className={`mb-2 mx-4 py-0 text-center ${styles.Width95 }
       ${styles.SubTitle2 }`} style={{ textTransform: 'uppercase'}}>Stunt Coordinator</p>  
          </div>
          <Row className='text-center' >
            <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`} >
              <p className={`${styles.CrewInfoP} `}>{stunt_coordinator_name}</p>
            </Col>
            <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`} >
            <p className={`${styles.CrewInfop} `}>{stunt_coordinator_phone}</p>
            </Col>
            <Col xs={12} md={4}  className='px-0 mx-0 pt-3 pt-md-0' >
              <p className={`${styles.CrewInfop} `}>{stunt_coordinator_email}</p>
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
      {/* Stunt Performer 1 */}
      {stunts_1_name && 
          (<div className={`${styles.CrewInfoRow} mt-1 pb-2`}>
          <div className='d-flex justify-content-center '>
          <p className={`mb-2 mx-4 py-0 text-center ${styles.Width95 }
       ${styles.SubTitle2 }`} style={{ textTransform: 'uppercase'}}>Stunt Performer 1</p>  
          </div>
          <Row className='text-center' >
            <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`} >
              <p className={`${styles.CrewInfoP} `}>{stunts_1_name}</p>
            </Col>
            <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`} >
            <p className={`${styles.CrewInfop} `}>{stunts_1_phone}</p>
            </Col>
            <Col xs={12} md={4}  className='px-0 mx-0 pt-3 pt-md-0' >
              <p className={`${styles.CrewInfop} `}>{stunts_1_email}</p>
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
      {/* Stunt Performer 2 */}
      {stunts_2_name && 
          (<div className={`${styles.CrewInfoRow} mt-1 pb-2`}>
          <div className='d-flex justify-content-center '>
          <p className={`mb-2 mx-4 py-0 text-center ${styles.Width95 }
       ${styles.SubTitle2 }`} style={{ textTransform: 'uppercase'}}>Stunt Performer 2</p>  
          </div>
          <Row className='text-center' >
            <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`} >
              <p className={`${styles.CrewInfoP} `}>{stunts_2_name}</p>
            </Col>
            <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`} >
            <p className={`${styles.CrewInfop} `}>{stunts_2_phone}</p>
            </Col>
            <Col xs={12} md={4}  className='px-0 mx-0 pt-3 pt-md-0' >
              <p className={`${styles.CrewInfop} `}>{stunts_2_email}</p>
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
        <Button onClick={() => setShow(show => !show)}
          className={`px-5 ${btnStyles.Button} ${btnStyles.Shed}
          ${btnStyles.Wide4}`} style={{ textTransform: 'uppercase'}}>
          Non-Callsheet Extra Stunt Dept Positions </Button>
        </Col>
        <Col className='text-center d-block d-md-none'>
        <Button onClick={() => setShow(show => !show)}
          className={`px-5 ${btnStyles.Button} ${btnStyles.Shed} ${btnStyles.Wide3}`}
          style={{ textTransform: 'uppercase'}}>
          Non-Callsheet Extra Stunt Dept Positions </Button>
        </Col>
      </Row>
      {!show ? (
          ""
              ) : (
                <ExtraCrewInfo
                dept="stunt"
                setShow={setShow}  /> 
       ) } 
      <div className={`mt-4 mx-md-5 text-center ${styles.SubTitle }`}>
        <h5 className={`mb-0 text-center py-1 ${styles.Bold }`} >SFX DEPARTMENT</h5>
        </div>
        <div className={`px-md-5 mx-md-5 ${styles.White }`}>
        {/* Special Effects Supervisor - (Using Stunt Performer 3 Keys )*/}
        {stunts_3_name && 
        (<div className={`${styles.CrewInfoRow} mt-3 pb-2`}>
        <div className='d-flex justify-content-center '>
        <p className={`mb-2 mx-4 py-0 text-center ${styles.Width95 }
        ${styles.SubTitle2 }`} style={{ textTransform: 'uppercase'}}>Special Effects Supervisor</p>  
        </div>
        <Row className='text-center' >
          <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`} >
            <p className={`${styles.CrewInfoP} `}>{stunts_3_name}</p>
          </Col>
          <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`} >
          <p className={`${styles.CrewInfop} `}>{stunts_3_phone}</p>
          </Col>
          <Col xs={12} md={4}  className='px-0 mx-0 pt-3 pt-md-0' >
            <p className={`${styles.CrewInfop} `}>{stunts_3_email}</p>
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
        {/* Special Effects Assistant 1 - (Using Stunt Performer 4 Keys) */}
        {stunts_4_name && 
        (<div className={`${styles.CrewInfoRow} mt-1 pb-2`}>
        <div className='d-flex justify-content-center '>
        <p className={`mb-2 mx-4 py-0 text-center ${styles.Width95 }
        ${styles.SubTitle2 }`} style={{ textTransform: 'uppercase'}}>Special Effects Assistant 1</p>  
        </div>
        <Row className='text-center' >
          <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`} >
            <p className={`${styles.CrewInfoP} `}>{stunts_4_name}</p>
          </Col>
          <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`} >
          <p className={`${styles.CrewInfop} `}>{stunts_4_phone}</p>
          </Col>
          <Col xs={12} md={4}  className='px-0 mx-0 pt-3 pt-md-0' >
            <p className={`${styles.CrewInfop} `}>{stunts_4_email}</p>
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
        {/* Special Effects Assistant 2 - (Using Stunt Performer 5 Keys) */}
        {stunts_5_name && 
        (<div className={`${styles.CrewInfoRow} mt-1 pb-2`}>
        <div className='d-flex justify-content-center '>
        <p className={`mb-2 mx-4 py-0 text-center ${styles.Width95 }
        ${styles.SubTitle2 }`} style={{ textTransform: 'uppercase'}}>Special Effects Assistant 2</p>  
        </div>
        <Row className='text-center' >
          <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`} >
            <p className={`${styles.CrewInfoP} `}>{stunts_5_name}</p>
          </Col>
          <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`} >
          <p className={`${styles.CrewInfop} `}>{stunts_5_phone}</p>
          </Col>
          <Col xs={12} md={4}  className='px-0 mx-0 pt-3 pt-md-0' >
            <p className={`${styles.CrewInfop} `}>{stunts_5_email}</p>
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
        {/* Extra SFX Positions Button */}
      <Row className='mt-3'>
        <Col className='text-center d-none d-md-block'>
        <Button onClick={() => setShowSfx(showSfx => !showSfx)}
          className={`px-5 ${btnStyles.Button} ${btnStyles.Shed}
          ${btnStyles.Wide4}`} style={{ textTransform: 'uppercase'}}>
          Non-Callsheet Extra SFX Dept Positions </Button>
        </Col>
        <Col className='text-center d-block d-md-none'>
        <Button onClick={() => setShowSfx(showSfx => !showSfx)}
          className={`px-5 ${btnStyles.Button} ${btnStyles.Shed} ${btnStyles.Wide3}`}
          style={{ textTransform: 'uppercase'}}>
          Non-Callsheet Extra SFX Dept Positions </Button>
        </Col>
      </Row>
      {!showSfx ? (
          ""
              ) : (
                <ExtraCrewInfo
                dept="sfx"
                setShow={setShowSfx}  /> 
       ) } 
    </div>
  )
}

export default InfoStunts