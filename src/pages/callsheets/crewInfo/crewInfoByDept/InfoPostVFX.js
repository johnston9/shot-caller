/* Component in the CrewInfo page to display
   the Post Department and Additional Crew Positions crew info */
import React, { useState } from 'react';
import { useRedirect } from '../../../../hooks/Redirect';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../../../styles/Callsheets.module.css";
import Button from 'react-bootstrap/Button';
import btnStyles from "../../../../styles/Button.module.css";
import ExtraCrewInfo from '../ExtraCrewInfo';

const InfoPostVFX = ({crewInfoOne, setShowPos}) => {
  useRedirect();
  const [show, setShow] = useState(false);

  const {editor_name, editor_email, editor_phone,
    fx_name, fx_email, fx_phone,
    add_pos_1_job, add_pos_1_name, add_pos_1_email, add_pos_1_phone,
    add_pos_2_job, add_pos_2_name, add_pos_2_email, add_pos_2_phone,
    add_pos_3_job, add_pos_3_name, add_pos_3_email, add_pos_3_phone,
    add_pos_4_job, add_pos_4_name, add_pos_4_email, add_pos_4_phone,
    add_pos_5_job, add_pos_5_name, add_pos_5_email, add_pos_5_phone,
    add_pos_6_job, add_pos_6_name, add_pos_6_email, add_pos_6_phone,
    add_pos_7_job, add_pos_7_name, add_pos_7_email, add_pos_7_phone,
    add_pos_8_job, add_pos_8_name, add_pos_8_email, add_pos_8_phone,
    add_pos_9_job, add_pos_9_name, add_pos_9_email, add_pos_9_phone,
    add_pos_10_job, add_pos_10_name, add_pos_10_email, add_pos_10_phone,
    add_pos_11_job, add_pos_11_name, add_pos_11_email, add_pos_11_phone,
    add_pos_12_job, add_pos_12_name, add_pos_12_email, add_pos_12_phone,
    add_pos_13_job, add_pos_13_name, add_pos_13_email, add_pos_13_phone,
    add_pos_14_job, add_pos_14_name, add_pos_14_email, add_pos_14_phone,
    add_pos_15_job, add_pos_15_name, add_pos_15_email, add_pos_15_phone,
    add_pos_16_job, add_pos_16_name, add_pos_16_email, add_pos_16_phone,
    add_pos_17_job, add_pos_17_name, add_pos_17_email, add_pos_17_phone,
    add_pos_18_job, add_pos_18_name, add_pos_18_email, add_pos_18_phone,
    add_pos_19_job, add_pos_19_name, add_pos_19_email, add_pos_19_phone,
    add_pos_20_job, add_pos_20_name, add_pos_20_email, add_pos_20_phone,
     } = crewInfoOne || {};

  return (
    <div>
      <div className={`mt-0 text-center ${styles.SubTitle }`}>
      <span className={`float-right pt-1 pt-md-2 ${styles.Bold } ${styles.Close }`} onClick={() => setShowPos(false) } >Close</span> 
      <h5 className={`d-none d-md-block pl-5 mb-0 text-center py-1 ${styles.Bold }`} >
        POST PRODUCTION/VFX </h5>
        <h5 className={`d-block d-md-none pl-5 mb-0 text-center py-1 ${styles.Bold }`} >
        POST/VFX</h5>
      </div>
      <div className={`px-md-5 mx-md-5 ${styles.White }`}>
      {/* On Set Editor */}
      {editor_name && 
          (<div className={`${styles.CrewInfoRow} pt-3 pb-2`}>
          <div className='d-flex justify-content-center '>
          <p className={`mb-2 mx-4 py-0 text-center ${styles.Width95 }
       ${styles.SubTitle2 }`} style={{ textTransform: 'uppercase'}}>On Set Editor</p>  
          </div>
          <Row className='text-center' >
            <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`} >
              <p className={`${styles.CrewInfoP} `}>{editor_name}</p>
            </Col>
            <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`} >
            <p className={`${styles.CrewInfop} `}>{editor_phone}</p>
            </Col>
            <Col xs={12} md={4}  className='px-0 mx-0 pt-3 pt-md-0' >
              <p className={`${styles.CrewInfop} `}>{editor_email}</p>
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
      {/* VFX Supervisor */}
      {fx_name && 
          (<div className={`${styles.CrewInfoRow} mt-1 pb-2`}>
          <div className='d-flex justify-content-center '>
          <p className={`mb-2 mx-4 py-0 text-center ${styles.Width95 }
       ${styles.SubTitle2 }`} style={{ textTransform: 'uppercase'}}>VFX Supervisor</p>  
          </div>
          <Row className='text-center' >
            <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`} >
              <p className={`${styles.CrewInfoP} `}>{fx_name}</p>
            </Col>
            <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`} >
            <p className={`${styles.CrewInfop} `}>{fx_phone}</p>
            </Col>
            <Col xs={12} md={4}  className='px-0 mx-0 pt-3 pt-md-0' >
              <p className={`${styles.CrewInfop} `}>{fx_email}</p>
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
          Extra Post/VFX Dept Positions </Button>
        </Col>
      </Row>
      {!show ? (
          ""
              ) : (
                <ExtraCrewInfo
                dept="post"
                setShow={setShow}  /> 
       ) } 
    </div>
  )
}

export default InfoPostVFX