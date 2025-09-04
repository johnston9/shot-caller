/* Component in the CrewInfo page to display
   the Camera Department crew info */
import React, { useState } from 'react';
import { useRedirect } from '../../../../hooks/Redirect';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import btnStyles from "../../../../styles/Button.module.css";
import styles from "../../../../styles/Callsheets.module.css";
import ExtraCrewInfo from '../ExtraCrewInfo';

const InfoCamera = ({crewInfoOne, setShowCam }) => {
  useRedirect();
  const [show, setShow] = useState(false);
  const { dop_name, dop_email, dop_phone,
    camera_operator_name, camera_operator_email, camera_operator_phone,
    camera_ass_1_name, camera_ass_1_email, camera_ass_1_phone,
    camera_ass_2_name, camera_ass_2_email, camera_ass_2_phone,
    dit_name, dit_email, dit_phone,
    steadicam_name, steadicam_email, steadicam_phone,
    camera_pa_name, camera_pa_email, camera_pa_phone,
    oth_camera_pos_1_job, oth_camera_pos_1_name, oth_camera_pos_1_email, oth_camera_pos_1_phone,
    oth_camera_pos_2_job, oth_camera_pos_2_name, oth_camera_pos_2_email, oth_camera_pos_2_phone,
    oth_camera_pos_3_job, oth_camera_pos_3_name, oth_camera_pos_3_email, oth_camera_pos_3_phone,
    oth_camera_pos_4_job, oth_camera_pos_4_name, oth_camera_pos_4_email, oth_camera_pos_4_phone,
        } = crewInfoOne || {};
  return (
    <div>
      <div className={`mt-0 text-center ${styles.SubTitle }`}>
      <span className={`float-right pt-1 pt-md-2 ${styles.Bold } ${styles.Close }`} onClick={() => setShowCam(false) } >Close</span> 
      <h5 className={`d-none d-md-block pl-5 mb-0 text-center py-1 ${styles.Bold }`} >
      CAMERA DEPARTMENT</h5>
      <h5 className={`d-block d-md-none pl-5 mb-0 text-center py-1 ${styles.Bold }`} >
      CAMERA</h5>
      </div>
      <div className={`px-md-3 mx-md-5 ${styles.White }`}>
        {/* dop */}
        {dop_name && 
          (<div className={`${styles.CrewInfoRow} pt-3 pb-2`}>
          <div className='d-flex justify-content-center '>
          <p className={`mb-2 mx-4 py-0 text-center ${styles.Width95 } 
          ${styles.SubTitle2 }`} style={{ textTransform: 'uppercase'}}>DOP</p> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={4} className={`${styles.BorderRight} `}>
              <p className={`${styles.CrewInfoP} `}>{dop_name}</p>
            </Col>
            <Col xs={6} md={4} className={`${styles.BorderRight} `}>
            <p className={`${styles.CrewInfop} `}>{dop_phone}</p>
            </Col>
            <Col xs={12} md={4} className='px-0 mx-0 pt-3 pt-md-0'>
              <p className={`${styles.CrewInfop} `}>{dop_email}</p>
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
        {/* camera operator */}
        {camera_operator_name && 
          (<div className={`${styles.CrewInfoRow} mt-1 pb-2`}>
          <div className='d-flex justify-content-center '>
          <p className={`mb-2 mx-4 py-0 text-center ${styles.Width95 } 
          ${styles.SubTitle2 }`} style={{ textTransform: 'uppercase'}}>Camera Operator</p> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={4} className={`${styles.BorderRight} `}>
              <p  className={`${styles.CrewInfoP} `}>{camera_operator_name}</p>
            </Col>
            <Col xs={6} md={4} className={`${styles.BorderRight} `}>
            <p className={`${styles.CrewInfop} `}>{camera_operator_phone}</p>
            </Col>
            <Col xs={12} md={4} className='px-0 mx-0 pt-3 pt-md-0'>
              <p className={`${styles.CrewInfop} `}>{camera_operator_email}</p>
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
        {/* 1st AC */}
        {camera_ass_1_name && 
          (<div className={`${styles.CrewInfoRow} mt-1 pb-2`}>
          <div className='d-flex justify-content-center '>
          <p className={`mb-2 mx-4 py-0 text-center ${styles.Width95 } ${styles.SubTitle2 }`} >1st AC</p> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={4} className={`${styles.BorderRight} `}>
              <p className={`${styles.CrewInfoP} `}>{camera_ass_1_name}</p>
            </Col>
            <Col xs={6} md={4} className={`${styles.BorderRight} `}>
            <p className={`${styles.CrewInfop} `}>{camera_ass_1_phone}</p>
            </Col>
            <Col xs={12} md={4} className='px-0 mx-0 pt-3 pt-md-0'>
              <p className={`${styles.CrewInfop} `}>{camera_ass_1_email}</p>
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
        {/* 2nd AC*/}
        {camera_ass_2_name && 
          (<div className={`${styles.CrewInfoRow} mt-1 pb-2`}>
          <div className='d-flex justify-content-center '>
          <p className={`mb-2 mx-4 py-0 text-center ${styles.Width95 } 
          ${styles.SubTitle2 }`} style={{ textTransform: 'uppercase'}}>2nd AC</p> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={4} className={`${styles.BorderRight} `}>
              <p className={`${styles.CrewInfoP} `}>{camera_ass_2_name} </p>
            </Col>
            <Col xs={6} md={4} className={`${styles.BorderRight} `}>
            <p className={`${styles.CrewInfop} `}>{camera_ass_2_phone}</p>
            </Col>
            <Col xs={12} md={4} className='px-0 mx-0 pt-3 pt-md-0'>
              <p className={`${styles.CrewInfop} `}>{camera_ass_2_email}</p>
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
        {/* DIT */}
        {dit_name && 
          (<div className={`${styles.CrewInfoRow} mt-1 pb-2`}>
          <div className='d-flex justify-content-center '>
          <p className={`mb-2 mx-4 py-0 text-center ${styles.Width95 } 
          ${styles.SubTitle2 }`} style={{ textTransform: 'uppercase'}}>DIT</p> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={4} className={`${styles.BorderRight} `}>
              <p className={`${styles.CrewInfoP} `}>{dit_name} </p>
            </Col>
            <Col xs={6} md={4} className={`${styles.BorderRight} `}>
            <p className={`${styles.CrewInfop} `}>{dit_phone}</p>
            </Col>
            <Col xs={12} md={4} className='px-0 mx-0 pt-3 pt-md-0'>
              <p className={`${styles.CrewInfop} `}>{dit_email}</p>
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
        {/* steadicam */}
        {steadicam_name && 
          (<div className={`${styles.CrewInfoRow} mt-1 pb-2`}>
          <div className='d-flex justify-content-center '>
          <p className={`mb-2 mx-4 py-0 text-center ${styles.Width95 } 
          ${styles.SubTitle2 }`} style={{ textTransform: 'uppercase'}}>Steadicam Operator</p> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={4} className={`${styles.BorderRight} `}>
              <p className={`${styles.CrewInfoP}`}>{steadicam_name}</p>
            </Col>
            <Col xs={6} md={4} className={`${styles.BorderRight} `}>
            <p className={`${styles.CrewInfop} `}>{steadicam_phone}</p>
            </Col>
            <Col xs={12} md={4} className='px-0 mx-0 pt-3 pt-md-0'>
              <p className={`${styles.CrewInfop} `}>{steadicam_email}</p>
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
        {/* camera pa */}
        {camera_pa_name && 
          (<div className={`${styles.CrewInfoRow} mt-1 pb-2`}>
          <div className='d-flex justify-content-center '>
          <p className={`mb-2 mx-4 py-0 text-center ${styles.Width95 } 
          ${styles.SubTitle2 }`} style={{ textTransform: 'uppercase'}}>Camera PA</p> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={4} className={`${styles.BorderRight} `}>
              <p className={`${styles.CrewInfoP} `}>{camera_pa_name}</p>
            </Col>
            <Col xs={6} md={4} className={`${styles.BorderRight} `}>
            <p className={`${styles.CrewInfop} `}>{camera_pa_phone}</p>
            </Col>
            <Col xs={12} md={4} className='px-0 mx-0 pt-3 pt-md-0'>
              <p className={`${styles.CrewInfop} `}>{camera_pa_email}</p>
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
        {/* oth camera pos 1 */}
        {oth_camera_pos_1_job && 
          (<div className={`${styles.CrewInfoRow} mt-1 pb-2`}>
          <div className='d-flex justify-content-center '>
          <p className={`mb-2 mx-4 py-0 text-center ${styles.Width95 } 
          ${styles.SubTitle2 }`} style={{ textTransform: 'uppercase'}}>{oth_camera_pos_1_job} </p> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={4} className={`${styles.BorderRight} `}>
              <p className={`${styles.CrewInfoP} `}>{oth_camera_pos_1_name}</p>
            </Col>
            <Col xs={6} md={4} className={`${styles.BorderRight} `}>
            <p className={`${styles.CrewInfop} `}>{oth_camera_pos_1_phone}</p>
            </Col>
            <Col xs={12} md={4} className='px-0 mx-0 pt-3 pt-md-0'>
              <p className={`${styles.CrewInfop} `}>{oth_camera_pos_1_email}</p>
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
        {/* oth camera pos 2 */}
        {oth_camera_pos_2_job && 
          (<div className={`${styles.CrewInfoRow} mt-1 pb-2`}>
          <div className='d-flex justify-content-center '>
          <p className={`mb-2 mx-4 py-0 text-center ${styles.Width95 } 
          ${styles.SubTitle2 }`} style={{ textTransform: 'uppercase'}}>{oth_camera_pos_2_job}</p> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={4} className={`${styles.BorderRight} `}>
              <p className={`${styles.CrewInfoP} `}>{oth_camera_pos_2_name}  </p>
            </Col>
            <Col xs={6} md={4} className={`${styles.BorderRight} `}>
            <p className={`${styles.CrewInfop} `}>{oth_camera_pos_2_phone}</p>
            </Col>
            <Col xs={12} md={4} className='px-0 mx-0 pt-3 pt-md-0'>
              <p className={`${styles.CrewInfop} `}>{oth_camera_pos_2_email}</p>
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
        {/* oth camera pos 3 job */}
        {oth_camera_pos_3_job && 
          (<div className={`${styles.CrewInfoRow} mt-1 pb-2`}>
          <div className='d-flex justify-content-center '>
          <p className={`mb-2 mx-4 py-0 text-center ${styles.Width95 } 
          ${styles.SubTitle2 }`} style={{ textTransform: 'uppercase'}}>{oth_camera_pos_3_job}</p> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={4} className={`${styles.BorderRight} `}>
              <p className={`${styles.CrewInfoP} `}>{oth_camera_pos_3_name} </p>
            </Col>
            <Col xs={6} md={4} className={`${styles.BorderRight} `}>
            <p className={`${styles.CrewInfop} `}>{oth_camera_pos_3_phone}</p>
            </Col>
            <Col xs={12} md={4} className='px-0 mx-0 pt-3 pt-md-0'>
              <p className={`${styles.CrewInfop} `}>{oth_camera_pos_3_email}</p>
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
        {/* oth camera pos 4 job*/}
        {oth_camera_pos_4_job && 
          (<div className={`${styles.CrewInfoRow} mt-1 pb-2`}>
          <div className='d-flex justify-content-center '>
          <p className={`mb-2 mx-4 py-0 text-center ${styles.Width95 } 
          ${styles.SubTitle2 }`} style={{ textTransform: 'uppercase'}}>{oth_camera_pos_4_job} </p> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={4} className={`${styles.BorderRight} `}>
              <p className={`${styles.CrewInfoP} `}>{oth_camera_pos_4_name}</p>
            </Col>
            <Col xs={6} md={4} className={`${styles.BorderRight} `}>
            <p className={`${styles.CrewInfop} `}>{oth_camera_pos_4_phone}</p>
            </Col>
            <Col xs={12} md={4} className='px-0 mx-0 pt-3 pt-md-0'>
              <p className={`${styles.CrewInfop} `}>{oth_camera_pos_4_email}</p>
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
      {/* Extra Positions Button style={{ textTransform: 'uppercase'}} */}
      <Row className='mt-3'>
        <Col className='text-center d-none d-md-block'>
        <Button onClick={() => setShow(show => !show)}
          className={`px-5 ${btnStyles.Button} ${btnStyles.Shed}
          ${btnStyles.Wide4}`} style={{ textTransform: 'uppercase'}}>
          Non-Callsheet Extra Camera Dept Positions </Button>
        </Col>
        <Col className='text-center d-block d-md-none'>
        <Button onClick={() => setShow(show => !show)}
          className={`px-5 ${btnStyles.Button} ${btnStyles.Shed} ${btnStyles.Wide3}`}
          style={{ textTransform: 'uppercase'}}>
          Non-Callsheet Extra Camera Dept Positions </Button>
        </Col>
      </Row>
      {!show ? (
          ""
              ) : (
                <ExtraCrewInfo
                dept="camera"
                setShow={setShow}  /> 
       ) } 
    </div>
  )
}

export default InfoCamera