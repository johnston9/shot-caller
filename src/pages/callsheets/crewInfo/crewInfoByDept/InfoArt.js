/* Component in the CrewInfo page to display
   the Art Department crew info */
import React, { useState } from 'react';
import { useRedirect } from '../../../../hooks/Redirect';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import btnStyles from "../../../../styles/Button.module.css";
import styles from "../../../../styles/Callsheets.module.css";
import ExtraCrewInfo from '../ExtraCrewInfo';

const InfoArt = ({crewInfoOne, setShowArt}) => {
  useRedirect();

  const [show, setShow] = useState(false);

  const {production_designer_name, production_designer_email, production_designer_phone,
    art_director_name, art_director_email, art_director_phone,
    art_assistant_name, art_assistant_email, art_assistant_phone,
    set_decorator_name, set_decorator_email, set_decorator_phone,
    set_dresser_name, set_dresser_email, set_dresser_phone,
    lead_man_name, lead_man_email, lead_man_phone,
    dresser_name, dresser_email, dresser_phone,
    prop_master_name, prop_master_email, prop_master_phone,
    ass_prop_master_name, ass_prop_master_email, ass_prop_master_phone,
    prop_buyer_name, prop_buyer_email, prop_buyer_phone,
    armorer_name, armorer_email, armorer_phone,
    // new cater
    catering_co_1_name, catering_co_1_email, catering_co_1_phone,
    catering_co_2_name, catering_co_2_email, catering_co_2_phone,
    catering_co_3_name, catering_co_3_email, catering_co_3_phone,
    oth_camera_pos_5_name, oth_camera_pos_5_email, oth_camera_pos_5_phone,
    } = crewInfoOne || {};

  return (
    <div className="pb-3 text-center">
      <div className={`mt-0 text-center ${styles.SubTitle }`}>
      <span className={`float-right pt-1 pt-md-2 ${styles.Bold } ${styles.Close }`} onClick={() => setShowArt(false) } >Close</span> 
      <h5 className={`pl-5 mb-0 text-center py-1 ${styles.Bold }`} >ART DEPARTMENT </h5>
      </div>
      <div className={`px-md-5 mx-md-5 ${styles.White }`}>
      {/*  production designer */}
      {production_designer_name && 
      (<div className={`${styles.CrewInfoRow} pt-3 pb-2`}>
      <div className='d-flex justify-content-center '>
      <p className={`mb-2 mx-4 py-0 text-center ${styles.Width95 }
       ${styles.SubTitle2 }`} style={{ textTransform: 'uppercase'}}>Production Designer</p> 
      </div>
      <Row className='text-center' >
        <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`}>
          <p className={`${styles.CrewInfoP} `}>{production_designer_name}</p>
        </Col>
        <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`}>
        <p className={`${styles.CrewInfop} `}>{production_designer_phone}</p>
        </Col>
        <Col xs={12} md={4}  className='px-0 mx-0 pt-3 pt-md-0'>
          <p className={`${styles.CrewInfop} `}>{production_designer_email}</p>
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
      {/* art director  */}
      {art_director_name && 
      (<div className={`${styles.CrewInfoRow} mt-1 pb-2`}>
      <div className='d-flex justify-content-center '>
      <p className={`mb-2 mx-4 py-0 text-center ${styles.Width95 } 
          ${styles.SubTitle2 }`} style={{ textTransform: 'uppercase'}}>Art Director</p> 
      </div>
      <Row className='text-center' >
        <Col xs={6} md={4} className={`${styles.BorderRight} `}>
          <p className={`${styles.CrewInfoP} `}>{art_director_name} </p>
        </Col>
        <Col xs={6} md={4} className={`${styles.BorderRight} `}>
        <p className={`${styles.CrewInfop} `}>{art_director_phone}</p>
        </Col>
        <Col xs={12} md={4} className='px-0 mx-0 pt-3 pt-md-0'>
          <p className={`${styles.CrewInfop} `}>{art_director_email}</p>
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
      {/* Standby Art - (Using Catering Company 1 keys) */}
      {catering_co_1_name && 
            (<div className={`${styles.CrewInfoRow} mt-1 pb-2`}>
            <div className='d-flex justify-content-center '>
            <p className={`mb-2 mx-4 py-0 text-center ${styles.Width95 }
        ${styles.SubTitle2 }`} style={{ textTransform: 'uppercase'}}>Standby Art</p>  
            </div>
            <Row className='text-center' >
              <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`} >
                <p className={`${styles.CrewInfoP} `}>{catering_co_1_name}</p>
              </Col>
              <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`} >
              <p className={`${styles.CrewInfop} `}>{catering_co_1_phone}</p>
              </Col>
              <Col xs={12} md={4}  className='px-0 mx-0 pt-3 pt-md-0' >
                <p className={`${styles.CrewInfop} `}>{catering_co_1_email}</p>
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
      {/* art assistant */}
      {art_assistant_name && 
      (<div className={`${styles.CrewInfoRow} mt-1 pb-2`}>
      <div className='d-flex justify-content-center '>
      <p className={`mb-2 mx-4 py-0 text-center ${styles.Width95 } 
          ${styles.SubTitle2 }`} style={{ textTransform: 'uppercase'}}>Art Assistant</p> 
      </div>
      <Row className='text-center' >
        <Col xs={6} md={4} className={`${styles.BorderRight} `}>
          <p className={`${styles.CrewInfoP} `}>{art_assistant_name}</p>
        </Col>
        <Col xs={6} md={4} className={`${styles.BorderRight} `}>
        <p className={`${styles.CrewInfop} `}>{art_assistant_phone}</p>
        </Col>
        <Col xs={12} md={4} className='px-0 mx-0 pt-3 pt-md-0'>
          <p className={`${styles.CrewInfop} `}>{art_assistant_email}</p>
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
      {/* SET DECORATION */}
      <div className={`mt-4 mx-5 text-center ${styles.SubTitle }`}>
      <h5 className={` mb-0 text-center py-1 ${styles.Bold }`} >SET DECORATION DEPARTMENT</h5>
      </div>
      <div className={`px-md-5 mx-md-5 ${styles.White }`}>
      {/* set decorator */}
      {set_decorator_name && 
      (<div className={`${styles.CrewInfoRow} pt-3 pb-2`}>
      <div className='d-flex justify-content-center '>
      <p className={`mb-2 mx-4 py-0 text-center ${styles.Width95 } 
          ${styles.SubTitle2 }`} style={{ textTransform: 'uppercase'}}>Set Decorator</p> 
      </div>
      <Row className='text-center' >
        <Col xs={6} md={4} className={`${styles.BorderRight} `}>
          <p className={`${styles.CrewInfoP} `}>{set_decorator_name}</p>
        </Col>
        <Col xs={6} md={4} className={`${styles.BorderRight} `}>
        <p className={`${styles.CrewInfop} `}>{set_decorator_phone}</p>
        </Col>
        <Col xs={12} md={4} className='px-0 mx-0 pt-3 pt-md-0'>
          <p className={`${styles.CrewInfop} `}>{set_decorator_email}</p>
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
      {/* Assistant Set Decorator - (Using Catering Company 2 keys) */}
      {catering_co_2_name && 
            (<div className={`${styles.CrewInfoRow} mt-1 pb-2`}>
            <div className='d-flex justify-content-center '>
            <p className={`mb-2 mx-4 py-0 text-center ${styles.Width95 }
        ${styles.SubTitle2 }`} style={{ textTransform: 'uppercase'}}>Assistant Set Decorator</p>  
            </div>
            <Row className='text-center' >
              <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`} >
                <p className={`${styles.CrewInfoP} `}>{catering_co_2_name}</p>
              </Col>
              <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`} >
              <p className={`${styles.CrewInfop} `}>{catering_co_2_phone}</p>
              </Col>
              <Col xs={12} md={4}  className='px-0 mx-0 pt-3 pt-md-0' >
                <p className={`${styles.CrewInfop} `}>{catering_co_2_email}</p>
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
      {/* set dresser */}
      {set_dresser_name && 
      (<div className={`${styles.CrewInfoRow} mt-1 pb-2`}>
      <div className='d-flex justify-content-center '>
      <p className={`mb-2 mx-4 py-0 text-center ${styles.Width95 } 
          ${styles.SubTitle2 }`} style={{ textTransform: 'uppercase'}}>Set Dresser</p> 
      </div>
      <Row className='text-center' >
        <Col xs={6} md={4} className={`${styles.BorderRight} `}>
          <p className={`${styles.CrewInfoP} `}>{set_dresser_name}</p>
        </Col>
        <Col xs={6} md={4} className={`${styles.BorderRight} `}>
        <p className={`${styles.CrewInfop} `}>{set_dresser_phone}</p>
        </Col>
        <Col xs={12} md={4} className='px-0 mx-0 pt-3 pt-md-0'>
          <p className={`${styles.CrewInfop} `}>{set_dresser_email}</p>
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
      {/* lead man */}
      {lead_man_name && 
      (<div className={`${styles.CrewInfoRow} mt-1 pb-2`}>
      <div className='d-flex justify-content-center '>
      <p className={`mb-2 mx-4 py-0 text-center ${styles.Width95 } 
          ${styles.SubTitle2 }`} style={{ textTransform: 'uppercase'}}>Lead Man</p>  
      </div>
      <Row className='text-center' >
      <Col xs={6} md={4} className={`${styles.BorderRight} `}>
        <p className={`${styles.CrewInfoP} `}>{lead_man_name}</p>
      </Col>
      <Col xs={6} md={4} className={`${styles.BorderRight} `}>
      <p className={`${styles.CrewInfop} `}>{lead_man_phone}</p>
      </Col>
      <Col xs={12} md={4} className='px-0 mx-0 pt-3 pt-md-0'>
        <p className={`${styles.CrewInfop} `}>{lead_man_email}</p>
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
      {/* dresser */}
      {dresser_name && 
      (<div className={`${styles.CrewInfoRow} mt-1 pb-2`}>
      <div className='d-flex justify-content-center '>
      <p className={`mb-2 mx-4 py-0 text-center ${styles.Width95 } 
          ${styles.SubTitle2 }`} style={{ textTransform: 'uppercase'}}>Dresser</p> 
      </div>
      <Row className='text-center' >
      <Col xs={6} md={4} className={`${styles.BorderRight} `}>
        <p className={`${styles.CrewInfoP} `}>{dresser_name}</p>
      </Col>
      <Col xs={6} md={4} className={`${styles.BorderRight} `}>
      <p className={`${styles.CrewInfop} `}>{dresser_phone}</p>
      </Col>
      <Col xs={12} md={4} className='px-0 mx-0 pt-3 pt-md-0'>
        <p className={`${styles.CrewInfop} `}>{dresser_email}</p>
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
      {/* Swing Gang 1 - (Using Catering Company 3 keys) */}
      {catering_co_3_name && 
            (<div className={`${styles.CrewInfoRow} mt-1 pb-2`}>
            <div className='d-flex justify-content-center '>
            <p className={`mb-2 mx-4 py-0 text-center ${styles.Width95 }
        ${styles.SubTitle2 }`} style={{ textTransform: 'uppercase'}}>Swing Gang 1</p>  
            </div>
            <Row className='text-center' >
              <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`} >
                <p className={`${styles.CrewInfoP} `}>{catering_co_3_name}</p>
              </Col>
              <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`} >
              <p className={`${styles.CrewInfop} `}>{catering_co_3_phone}</p>
              </Col>
              <Col xs={12} md={4}  className='px-0 mx-0 pt-3 pt-md-0' >
                <p className={`${styles.CrewInfop} `}>{catering_co_3_email}</p>
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
      {/* PROPERTY  */}
      <div className={`mt-4 mx-5 text-center ${styles.SubTitle }`}>
      <h5 className={` mb-0 text-center py-1 ${styles.Bold }`} >PROPERTY DEPARTMENT</h5>
      </div>  
      <div className={`px-md-5 mx-md-5 ${styles.White }`}>   
      {/* prop master */}
      {prop_master_name && 
      (<div className={`${styles.CrewInfoRow} pt-3 pb-2`}>
      <div className='d-flex justify-content-center '>
      <p className={`mb-2 mx-4 py-0 text-center ${styles.Width95 } 
          ${styles.SubTitle2 }`} style={{ textTransform: 'uppercase'}}>Prop Master</p> 
      </div>
      <Row className='text-center' >
        <Col xs={6} md={4} className={`${styles.BorderRight} `}>
          <p className={`${styles.CrewInfoP} `}>{prop_master_name}</p>
        </Col>
        <Col xs={6} md={4} className={`${styles.BorderRight} `}>
        <p className={`${styles.CrewInfop} `}>{prop_master_phone}</p>
        </Col>
        <Col xs={12} md={4} className='px-0 mx-0 pt-3 pt-md-0'>
          <p className={`${styles.CrewInfop} `}>{prop_master_email}</p>
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
      {/* ass prop master */}
      {ass_prop_master_name && 
      (<div className={`${styles.CrewInfoRow} mt-1 pb-2`}>
      <div className='d-flex justify-content-center '>
      <p className={`mb-2 mx-4 py-0 text-center ${styles.Width95 } 
          ${styles.SubTitle2 }`} style={{ textTransform: 'uppercase'}}>Assistant Prop Master</p> 
      </div>
      <Row className='text-center' >
        <Col xs={6} md={4} className={`${styles.BorderRight} `}>
          <p className={`${styles.CrewInfoP} `}>{ass_prop_master_name}</p>
        </Col>
        <Col xs={6} md={4} className={`${styles.BorderRight} `}>
        <p className={`${styles.CrewInfop} `}>{ass_prop_master_phone}</p>
        </Col>
        <Col xs={12} md={4} className='px-0 mx-0'>
          <p className={`${styles.CrewInfop} `}>{ass_prop_master_email}</p>
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
      {/* On Set Props Person (Using Additional Camera Position 5 Keys)  */}
      {oth_camera_pos_5_name && 
          (<div className={`${styles.CrewInfoRow} mt-1 pb-2`}>
          <div className='d-flex justify-content-center '>
          <p className={`mb-2 mx-4 py-0 text-center ${styles.Width95 } 
          ${styles.SubTitle2 }`} style={{ textTransform: 'uppercase'}}>On Set Props Person</p> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={4} className={`${styles.BorderRight} `}>
              <p className={`${styles.CrewInfoP} `}>{oth_camera_pos_5_name}</p>
            </Col>
            <Col xs={6} md={4} className={`${styles.BorderRight} `}>
            <p className={`${styles.CrewInfop} `}>{oth_camera_pos_5_phone}</p>
            </Col>
            <Col xs={12} md={4} className='px-0 mx-0 pt-3 pt-md-0'>
              <p className={`${styles.CrewInfop} `}>{oth_camera_pos_5_email}</p>
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
      {/* prop buyer */}
      {prop_buyer_name && 
      (<div className={`${styles.CrewInfoRow} mt-1 pb-2`}>
      <div className='d-flex justify-content-center '>
      <p className={`mb-2 mx-4 py-0 text-center ${styles.Width95 } 
          ${styles.SubTitle2 }`} style={{ textTransform: 'uppercase'}}>Prop Buyer</p> 
      </div>
      <Row className='text-center' >
        <Col xs={6} md={4} className={`${styles.BorderRight} `}>
          <p className={`${styles.CrewInfoP} `}>{prop_buyer_name} </p>
        </Col>
        <Col xs={6} md={4} className={`${styles.BorderRight} `}>
        <p className={`${styles.CrewInfop} `}>{prop_buyer_phone}</p>
        </Col>
        <Col xs={12} md={4} className='px-0 mx-0 pt-3 pt-md-0'>
          <p className={`${styles.CrewInfop} `}>{prop_buyer_email}</p>
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
      {/* armorer name */}
      {armorer_name && 
      (<div className={`${styles.CrewInfoRow} mt-1 pb-2`}>
      <div className='d-flex justify-content-center '>
      <p className={`mb-2 mx-4 py-0 text-center ${styles.Width95 } 
          ${styles.SubTitle2 }`} style={{ textTransform: 'uppercase'}}>Armorer</p> 
      </div>
      <Row className='text-center' >
      <Col xs={6} md={4} className={`${styles.BorderRight} `}>
        <p className={`${styles.CrewInfoP} `}>{armorer_name}</p>
      </Col>
      <Col xs={6} md={4} className={`${styles.BorderRight} `}>
      <p className={`${styles.CrewInfop} `}>{armorer_phone}</p>
      </Col>
      <Col xs={12} md={4} className='px-0 mx-0'>
        <p className={`${styles.CrewInfop} `}>{armorer_email}</p>
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
          Extra Art Dept Positions </Button>
        </Col>
      </Row>
      {!show ? (
          ""
              ) : (
                <ExtraCrewInfo
                dept="art"
                setShow={setShow}  /> 
       ) }      
    </div>
  )
}

export default InfoArt