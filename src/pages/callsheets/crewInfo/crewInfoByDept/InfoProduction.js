/* Component in the CrewInfo page to display
   the Production Department crew info */
import React, { useState } from 'react';
import { useRedirect } from '../../../../hooks/Redirect';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../../../styles/Callsheets.module.css";
import Button from 'react-bootstrap/Button';
import btnStyles from "../../../../styles/Button.module.css";
import ExtraCrewInfo from '../ExtraCrewInfo';

const Production = ({crewInfoOne, setShowPro}) => {
  useRedirect();
  const [show, setShow] = useState(false);

  const {producer_name, producer_email, producer_phone,
    director_name, director_email, director_phone,
    pro_coordinator_name, pro_coordinator_email, pro_coordinator_phone,
    upm_name, upm_email, upm_phone,
    travel_coordinator_name, travel_coordinator_email, travel_coordinator_phone,
    production_pa_name, production_pa_email, production_pa_phone,
    oth_production_pos_1_job, oth_production_pos_1_name, oth_production_pos_1_email, oth_production_pos_1_phone,
    oth_production_pos_2_job, oth_production_pos_2_name, oth_production_pos_2_email, oth_production_pos_2_phone,
    oth_production_pos_3_job, oth_production_pos_3_name, oth_production_pos_3_email, oth_production_pos_3_phone,
    oth_production_pos_4_job, oth_production_pos_4_name, oth_production_pos_4_email, oth_production_pos_4_phone,
    oth_production_pos_5_job, oth_production_pos_5_name, oth_production_pos_5_email, oth_production_pos_5_phone,
    script_supervisor_name, script_supervisor_email, script_supervisor_phone,
    legal_name, legal_email, legal_phone,
    set_medic_name, set_medic_email, set_medic_phone,} = crewInfoOne || {};

  return (
    <div>
      <div className={`mt-0 text-center ${styles.SubTitle }`}>
      <span className={`float-right pt-2 ${styles.Bold } ${styles.Close }`} onClick={() => setShowPro(false) } >Close</span> 
      <h5 className={`pl-5 mb-0 text-center py-1 ${styles.Bold }`} >PRODUCTION </h5>
      </div>
      <div className={`px-md-5  ${styles.White }`}>
         {/* DIRECTOR  */} 
        {director_name && 
          (<div className={`${styles.CrewInfoRow} pt-3 pb-3`}>
          <div className='d-flex justify-content-center '>
          <p className={`mb-3 mx-4 py-0 text-center ${styles.Width95 }
           ${styles.SubTitle2 }`} >DIRECTOR</p> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={4} className={`${styles.BorderRight} `} >
              <p className={`${styles.CrewInfoP} ${styles.Bold} `}>{director_name} </p>
            </Col>
            <Col xs={6} md={4} className={`${styles.BorderRight} `} >
            <p className={`${styles.CrewInfop} `}>{director_phone}</p>
            </Col>
            <Col className='px-0 mx-0 pt-3 pt-md-0'  xs={12} md={4} >
              <p className={`${styles.CrewInfop} `}>{director_email}</p>
            </Col>
          </Row>
          </div> )
        }
        {/* break */}
        <Row>
        <Col xs={12}>
        <hr className={`mt-1 mb-3 mx-5`}/>
        </Col>
        </Row>
        {/* producer */}
        {producer_name && 
          (<div className={`${styles.CrewInfoRow} mt-1 pb-3`}>
          <div className='d-flex justify-content-center '>
          <p className={`mb-3 mx-4 py-0 text-center ${styles.Width95 }
           ${styles.SubTitle2 }`} >PRODUCER</p> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`}>
              <p className={`${styles.CrewInfoP} `}>{producer_name} </p>
            </Col>
            <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`}>
            <p className={`${styles.CrewInfop} `}>{producer_phone}</p>
            </Col>
            <Col className='px-0 mx-0 pt-3 pt-md-0' xs={12} md={4} >
              <p className={`${styles.CrewInfop} `}>{producer_email}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* break */}
        <Row>
        <Col xs={12}>
        <hr className={`mt-1 mb-3 mx-5`}/>
        </Col>
        </Row>
         {/* pro_coordinator */}
        {pro_coordinator_name && 
          (<div className={`${styles.CrewInfoRow} mt-1 pb-3`}>
          <div className='d-flex justify-content-center '>
          <p className={`mb-3 mx-4 py-0 text-center ${styles.Width95 }
           ${styles.SubTitle2 }`} >PRODUCTION COORDINATOR</p> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`}>
              <p className={`${styles.CrewInfoP} `}>{pro_coordinator_name} </p>
            </Col>
            <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`}>
            <p className={`${styles.CrewInfop} `}>{pro_coordinator_phone}</p>
            </Col>
            <Col className='px-0 mx-0 pt-3 pt-md-0' xs={12} md={4} >
              <p className={`${styles.CrewInfop} `}>{pro_coordinator_email}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* break */}
        <Row>
        <Col xs={12}>
        <hr className={`mt-1 mb-3 mx-5`}/>
        </Col>
        </Row>
         {/* upm */}
        {upm_name && 
          (<div className={`${styles.CrewInfoRow} mt-1 pb-3`}>
          <div className='d-flex justify-content-center '>
          <p className={`mb-3 mx-4 py-0 text-center ${styles.Width95 }
           ${styles.SubTitle2 }`} >UPM</p> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`}>
              <p className={`${styles.CrewInfoP} `}>{upm_name} </p>
            </Col>
            <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`}>
            <p className={`${styles.CrewInfop} `}>{upm_phone}</p>
            </Col>
            <Col className='px-0 mx-0 pt-3 pt-md-0' xs={12} md={4} >
              <p className={`${styles.CrewInfop} `}>{upm_email}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* break */}
        <Row>
        <Col xs={12}>
        <hr className={`mt-1 mb-3 mx-5`}/>
        </Col>
        </Row>
         {/* travel coordinator */}
        {travel_coordinator_name && 
          (<div className={`${styles.CrewInfoRow} mt-1 pb-3`}>
          <div className='d-flex justify-content-center '>
          <p className={`mb-3 mx-4 py-0 text-center ${styles.Width95 }
           ${styles.SubTitle2 }`} style={{ textTransform: 'uppercase'}} >Travel Coordinator</p> 
          </div>
          <Row className='text-center' >
          <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`}>
              <p className={`${styles.CrewInfoP} `}>{travel_coordinator_name} </p>
            </Col>
            <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`}>
            <p className={`${styles.CrewInfop} `}>{travel_coordinator_phone}</p>
            </Col>
            <Col className='px-0 mx-0 pt-3 pt-md-0' xs={12} md={4} >
              <p className={`${styles.CrewInfop} `}>{travel_coordinator_email}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* break */}
        <Row>
        <Col xs={12}>
        <hr className={`mt-1 mb-3 mx-5`}/>
        </Col>
        </Row>
         {/* production pa */}
        {production_pa_name && 
          (<div className={`${styles.CrewInfoRow} mt-1 pb-3`}>
          <div className='d-flex justify-content-center '>
          <p className={`mb-3 mx-4 py-0 text-center ${styles.Width95 }
           ${styles.SubTitle2 }`} style={{ textTransform: 'uppercase'}}>Production PA</p> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`}>
              <p className={`${styles.CrewInfoP} `}>{production_pa_name} </p>
            </Col>
            <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`}>
            <p className={`${styles.CrewInfop} `}>{production_pa_phone}</p>
            </Col>
            <Col className='px-0 mx-0 pt-3 pt-md-0' xs={12} md={4} >
              <p className={`${styles.CrewInfop} `}>{production_pa_email}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* break */}
        <Row>
        <Col xs={12}>
        <hr className={`mt-1 mb-3 mx-5`}/>
        </Col>
        </Row>
         {/* script supervisor */}
          {script_supervisor_name && 
          (<div className={`${styles.CrewInfoRow} mt-1 pb-3`}>
          <div className='d-flex justify-content-center '>
          <p className={`mb-3 mx-4 py-0 text-center ${styles.Width95 }
           ${styles.SubTitle2 }`} style={{ textTransform: 'uppercase'}}>Script Supervisor</p> 
          </div>
          <Row className='text-center' >
          <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`}>
              <p className={`${styles.CrewInfoP} `}>{script_supervisor_name} </p>
            </Col>
            <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`}>
            <p className={`${styles.CrewInfop} `}>{script_supervisor_phone}</p>
            </Col>
            <Col className='px-0 mx-0 pt-3 pt-md-0' xs={12} md={4} >
              <p className={`${styles.CrewInfop} `}>{script_supervisor_email}</p>
            </Col>
          </Row>
          </div> )
          }
          {/* break */}
        <Row>
        <Col xs={12}>
        <hr className={`mt-1 mb-3 mx-5`}/>
        </Col>
        </Row>
          {/* LEGAL */}
          {legal_name && 
            (<div className={`${styles.CrewInfoRow} pb-3`}>
            <div className='d-flex justify-content-center '>
            <p className={`mb-3 mx-4 py-0 text-center ${styles.Width95 }
             ${styles.SubTitle2 }`} style={{ textTransform: 'uppercase'}}>Legal</p> 
            </div>
            <Row className='text-center' >
            <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`}>
                <p className={`${styles.CrewInfoP} `}>{legal_name} </p>
              </Col>
              <Col className={`${styles.BorderRight} px-0 mx-0`} xs={6} md={4} >
              <p className={`${styles.CrewInfop} `}>{legal_phone}</p>
              </Col>
              <Col xs={12} md={4} className='px-0 mx-0 pt-3 pt-md-0'>
                <p className={`${styles.CrewInfop} `}>{legal_email}</p>
              </Col>
            </Row>
            </div> )
            }
            {/* break */}
        <Row>
        <Col xs={12}>
        <hr className={`mt-1 mb-3 mx-5`}/>
        </Col>
        </Row>
          {/* Set Medic */}
          {set_medic_name && 
          (<div className={`${styles.CrewInfoRow} mt-1 pb-3`}>
          <div className='d-flex justify-content-center '>
          <p className={`mb-3 mx-4 py-0 text-center ${styles.Width95 }
           ${styles.SubTitle2 }`} style={{ textTransform: 'uppercase'}}>Set Medic</p> 
          </div>
          <Row className='text-center' >
          <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`}>
              <p className={`${styles.CrewInfoP} `}>{set_medic_name} </p>
            </Col>
            <Col className={`${styles.BorderRight} px-0 mx-0`} xs={12} md={4} >
            <p className={`${styles.CrewInfop} `}>{set_medic_phone}</p>
            </Col>
            <Col xs={6} md={4} className='px-0 pt-3 pt-md-0'>
              <p className={`${styles.CrewInfop} `}>{set_medic_email}</p>
            </Col>
          </Row>
          </div> )
          }
          {/* break */}
        <Row>
        <Col xs={12}>
        <hr className={`mt-1 mb-3 mx-5`}/>
        </Col>
        </Row>
        {/* oth production pos 1 */}
        {oth_production_pos_1_job && 
          (<div className={`${styles.CrewInfoRow} mt-1 pb-3`}>
          <div className='d-flex justify-content-center '>
          <p className={`mb-3 mx-4 py-0 text-center ${styles.Width95 }
           ${styles.SubTitle2 }`} style={{ textTransform: 'uppercase'}}>{oth_production_pos_1_job} </p> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`}>
              <p className={`${styles.CrewInfoP} `}>{oth_production_pos_1_name} </p>
            </Col>
            <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`}>
            <p className={`${styles.CrewInfop} `}>{oth_production_pos_1_phone}</p>
            </Col>
            <Col className='px-0 mx-0 pt-3 pt-md-0' xs={12} md={4} >
              <p className={`${styles.CrewInfop} `}>{oth_production_pos_1_email}</p>
            </Col>
          </Row>
          </div> )
        }
        {/* break */}
        <Row>
        <Col xs={12}>
        <hr className={`mt-1 mb-3 mx-5`}/>
        </Col>
        </Row>
        {/* oth production pos 2 */}
        {oth_production_pos_2_job && 
          (<div className={`${styles.CrewInfoRow} mt-1 pb-3`}>
          <div className='d-flex justify-content-center '>
          <p className={`mb-3 mx-4 py-0 text-center ${styles.Width95 }
           ${styles.SubTitle2 }`} style={{ textTransform: 'uppercase'}}>{oth_production_pos_2_job} </p> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`}>
              <p className={`${styles.CrewInfoP} `}>{oth_production_pos_2_name} </p>
            </Col>
            <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`}>
            <p className={`${styles.CrewInfop} `}>{oth_production_pos_2_phone}</p>
            </Col>
            <Col className='px-0 mx-0 pt-3 pt-md-0' xs={12} md={4} >
              <p className={`${styles.CrewInfop} `}>{oth_production_pos_2_email}</p>
            </Col>
          </Row>
          </div> )
        }
        {/* break */}
        <Row>
        <Col xs={12}>
        <hr className={`mt-1 mb-3 mx-5`}/>
        </Col>
        </Row>
        {/* oth production pos 3 */}
        {oth_production_pos_3_job && 
          (<div className={`${styles.CrewInfoRow} mt-1 pb-3`}>
          <div className='d-flex justify-content-center '>
          <p className={`mb-3 mx-4 py-0 text-center ${styles.Width95 }
           ${styles.SubTitle2 }`} style={{ textTransform: 'uppercase'}}>{oth_production_pos_3_job} </p> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`}>
              <p className={`${styles.CrewInfoP} `}>{oth_production_pos_3_name} </p>
            </Col>
            <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`}>
            <p className={`${styles.CrewInfop} `}>{oth_production_pos_3_phone}</p>
            </Col>
            <Col className='px-0 mx-0 pt-3 pt-md-0' xs={12} md={4} >
              <p className={`${styles.CrewInfop} `}>{oth_production_pos_3_email}</p>
            </Col>
          </Row>
          </div> )
        }
        {/* break */}
        <Row>
        <Col xs={12}>
        <hr className={`mt-1 mb-3 mx-5`}/>
        </Col>
        </Row>
        {/* oth production pos 4 */}
        {oth_production_pos_4_job && 
          (<div className={`${styles.CrewInfoRow} mt-1 pb-3`}>
          <div className='d-flex justify-content-center '>
          <p className={`mb-3 mx-4 py-0 text-center ${styles.Width95 }
           ${styles.SubTitle2 }`} style={{ textTransform: 'uppercase'}}>{oth_production_pos_4_job} </p> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`}>
              <p className={`${styles.CrewInfoP} `}>{oth_production_pos_4_name} </p>
            </Col>
            <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`}>
            <p className={`${styles.CrewInfop} `}>{oth_production_pos_4_phone}</p>
            </Col>
            <Col className='px-0 mx-0 pt-3 pt-md-0' xs={12} md={4} >
              <p className={`${styles.CrewInfop} `}>{oth_production_pos_4_email}</p>
            </Col>
          </Row>
          </div> )
        }
        {/* break */}
        <Row>
        <Col xs={12}>
        <hr className={`mt-1 mb-3 mx-5`}/>
        </Col>
        </Row>
        {/* oth production pos 5 */}
        {oth_production_pos_5_job && 
          (<div className={`${styles.CrewInfoRow} mt-1 pb-3`}>
          <div className='d-flex justify-content-center '>
          <p className={`mb-3 mx-4 py-0 text-center ${styles.Width95 }
           ${styles.SubTitle2 }`} style={{ textTransform: 'uppercase'}}>{oth_production_pos_5_job} </p> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={4} >
              <p className={`${styles.CrewInfoP} `}>{oth_production_pos_5_name} </p>
            </Col>
            <Col xs={6} md={4} >
            <p className={`${styles.CrewInfop} `}>{oth_production_pos_5_phone}</p>
            </Col>
            <Col className='px-0 mx-0 pt-3 pt-md-0' xs={12} md={4} >
              <p className={`${styles.CrewInfop} `}>{oth_production_pos_5_email}</p>
            </Col>
          </Row>
          </div> )
        }
        {/* break */}
        <Row>
        <Col xs={12}>
        <hr className={`mt-1 mb-3 mx-5`}/>
        </Col>
        </Row>
      </div>
      {/* Extra Positions Button */}
      <Row className='mt-3'>
        <Col className='text-center'>
        <Button onClick={() => setShow(show => !show)}
          className={`px-5 ${btnStyles.Button} ${btnStyles.Shed}`}>
          Extra Production Dept Positions </Button>
        </Col>
      </Row>
      {!show ? (
          ""
              ) : (
                <ExtraCrewInfo
                dept="production"
                setShow={setShow}  /> 
       ) } 
  </div>
  )
}

export default Production