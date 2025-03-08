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

const InfoADPA = ({crewInfoOne, setShowAD }) => {
  useRedirect();
  const [showAd, setShowAd] = useState(false);
  const [showPa, setShowPa] = useState(false);

  const {ad_1_name, ad_1_email, ad_1_phone,
    ad_2_name, ad_2_email, ad_2_phone,
    ad_3_name, ad_3_email, ad_3_phone,
    ad_4_name, ad_4_email, ad_4_phone,
    ad_5_name, ad_5_email, ad_5_phone,
    pro_assistant_1_name, pro_assistant_1_email, pro_assistant_1_phone,
    pro_assistant_2_name, pro_assistant_2_email, pro_assistant_2_phone,
    pro_assistant_3_name, pro_assistant_3_email, pro_assistant_3_phone,
  } = crewInfoOne || {};

  return (
    <div>
      <div className={`mt-0 text-center ${styles.SubTitle }`}>
      <span className={`float-right pt-1 pt-md-2 ${styles.Bold } ${styles.Close }`} onClick={() => setShowAD(false) } >Close</span> 
      <h5 className={`d-none d-md-block pl-5 mb-0 text-center py-1 ${styles.Bold }`} >
        ASSISTANT DIRECTORS</h5>
        <h5 className={`d-block d-md-none pl-5 mb-0 text-center py-1 ${styles.Bold }`} >
        ADs</h5>
      </div>
      <div className={`px-md-5 mx-md-5 ${styles.White }`}>
      {/*  1st Assistant Director */}
      {ad_1_name && 
      (<div className={`${styles.CrewInfoRow} pt-3 pb-2`}>
      <div className='d-flex justify-content-center '>
      <p className={`mb-2 mx-4 py-0 text-center ${styles.Width95 }
       ${styles.SubTitle2 }`} style={{ textTransform: 'uppercase'}}>1st Assistant Director</p> 
      </div>
      <Row className='text-center' >
        <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`}>
          <p className={`${styles.CrewInfoP} `}>{ad_1_name}</p>
        </Col>
        <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`}>
        <p className={`${styles.CrewInfop} `}>{ad_1_phone}</p>
        </Col>
        <Col xs={12} md={4}  className='px-0 mx-0 pt-3 pt-md-0'>
          <p className={`${styles.CrewInfop} `}>{ad_1_email}</p>
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
      {/* 2nd Assistant Director  */}
      {ad_2_name && 
      (<div className={`${styles.CrewInfoRow} mt-1 pb-2`}>
      <div className='d-flex justify-content-center '>
      <p className={`mb-2 mx-4 py-0 text-center ${styles.Width95 }
       ${styles.SubTitle2 }`} style={{ textTransform: 'uppercase'}}>2nd Assistant Director</p> 
      </div>
      <Row className='text-center' >
        <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`}>
          <p className={`${styles.CrewInfoP} `}>{ad_2_name}</p>
        </Col>
        <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`}>
        <p className={`${styles.CrewInfop} `}>{ad_2_phone}</p>
        </Col>
        <Col xs={12} md={4}  className='px-0 mx-0 pt-3 pt-md-0'>
          <p className={`${styles.CrewInfop} `}>{ad_2_email}</p>
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
      {/* 3rd Assistant Director  */}
      {ad_3_name && 
      (<div className={`${styles.CrewInfoRow} mt-1 pb-2`}>
      <div className='d-flex justify-content-center '>
      <p className={`mb-2 mx-4 py-0 text-center ${styles.Width95 }
       ${styles.SubTitle2 }`} style={{ textTransform: 'uppercase'}}>3rd Assistant Director</p> 
      </div>
      <Row className='text-center' >
        <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`}>
          <p className={`${styles.CrewInfoP} `}>{ad_3_name}</p>
        </Col>
        <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`}>
        <p className={`${styles.CrewInfop} `}>{ad_3_phone}</p>
        </Col>
        <Col xs={12} md={4}  className='px-0 mx-0 pt-3 pt-md-0'>
          <p className={`${styles.CrewInfop} `}>{ad_3_email}</p>
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
      {/* 4th Assistant Director  */}
      {ad_4_name && 
      (<div className={`${styles.CrewInfoRow} mt-1 pb-2`}>
      <div className='d-flex justify-content-center '>
      <p className={`mb-2 mx-4 py-0 text-center ${styles.Width95 }
       ${styles.SubTitle2 }`} style={{ textTransform: 'uppercase'}}>4th Assistant Director</p> 
      </div>
      <Row className='text-center' >
        <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`}>
          <p className={`${styles.CrewInfoP} `}>{ad_4_name}</p>
        </Col>
        <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`}>
        <p className={`${styles.CrewInfop} `}>{ad_4_phone}</p>
        </Col>
        <Col xs={12} md={4}  className='px-0 mx-0 pt-3 pt-md-0'>
          <p className={`${styles.CrewInfop} `}>{ad_4_email}</p>
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
      {/* 2nd 2nd Assistant Director  */}
      {ad_5_name && 
      (<div className={`${styles.CrewInfoRow} mt-1 pb-2`}>
      <div className='d-flex justify-content-center '>
      <p className={`mb-2 mx-4 py-0 text-center ${styles.Width95 }
       ${styles.SubTitle2 }`} style={{ textTransform: 'uppercase'}}>2nd 2nd Assistant Director</p> 
      </div>
      <Row className='text-center' >
        <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`}>
          <p className={`${styles.CrewInfoP} `}>{ad_5_name}</p>
        </Col>
        <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`}>
        <p className={`${styles.CrewInfop} `}>{ad_5_phone}</p>
        </Col>
        <Col xs={12} md={4}  className='px-0 mx-0 pt-3 pt-md-0'>
          <p className={`${styles.CrewInfop} `}>{ad_5_email}</p>
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
        <Button onClick={() => setShowAd(showAd => !showAd)}
          className={`px-5 ${btnStyles.Button} ${btnStyles.Shed}`}>
          Non-Callsheet/Extra AD Positions </Button>
        </Col>
      </Row>
      {!showAd ? (
          ""
              ) : (
                <ExtraCrewInfo
                dept="ad"
                setShow={setShowAd}  /> 
       ) } 
      {/* PRODUCTION ASSISTANTS */}
      <div className={`mt-4 mx-md-5 text-center ${styles.SubTitle }`}>
      <h5 className={`d-none d-md-block mb-0 text-center py-1 ${styles.Bold }`} >
        PRODUCTION ASSISTANTS</h5>
        <h5 className={`d-block d-md-none mb-0 text-center py-1 ${styles.Bold }`} >
        PAs</h5>
      </div>
      <div className={`px-md-5 mx-md-5 ${styles.White }`}>
      {/* Production Assistant 1  */}
      {pro_assistant_1_name && 
      (<div className={`${styles.CrewInfoRow} pt-3 pb-2`}>
      <div className='d-flex justify-content-center '>
      <p className={`mb-2 mx-4 py-0 text-center ${styles.Width95 }
       ${styles.SubTitle2 }`} style={{ textTransform: 'uppercase'}}>Production Assistant 1</p> 
      </div>
      <Row className='text-center' >
        <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`}>
          <p className={`${styles.CrewInfoP} `}>{pro_assistant_1_name}</p>
        </Col>
        <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`}>
        <p className={`${styles.CrewInfop} `}>{pro_assistant_1_phone}</p>
        </Col>
        <Col xs={12} md={4}  className='px-0 mx-0 pt-3 pt-md-0'>
          <p className={`${styles.CrewInfop} `}>{pro_assistant_1_email}</p>
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
      {/* Production Assistant 2  */}
      {pro_assistant_2_name && 
      (<div className={`${styles.CrewInfoRow} mt-1 pb-2`}>
      <div className='d-flex justify-content-center '>
      <p className={`mb-2 mx-4 py-0 text-center ${styles.Width95 }
       ${styles.SubTitle2 }`} style={{ textTransform: 'uppercase'}}>Production Assistant 2</p> 
      </div>
      <Row className='text-center' >
        <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`}>
          <p className={`${styles.CrewInfoP} `}>{pro_assistant_2_name}</p>
        </Col>
        <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`}>
        <p className={`${styles.CrewInfop} `}>{pro_assistant_2_phone}</p>
        </Col>
        <Col xs={12} md={4}  className='px-0 mx-0 pt-3 pt-md-0'>
          <p className={`${styles.CrewInfop} `}>{pro_assistant_2_email}</p>
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
      {/* Production Assistant 3  */}
      {pro_assistant_3_name && 
      (<div className={`${styles.CrewInfoRow} mt-1 pb-2`}>
      <div className='d-flex justify-content-center '>
      <p className={`mb-2 mx-4 py-0 text-center ${styles.Width95 }
       ${styles.SubTitle2 }`} style={{ textTransform: 'uppercase'}}>Production Assistant 3</p> 
      </div>
      <Row className='text-center' >
        <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`}>
          <p className={`${styles.CrewInfoP} `}>{pro_assistant_3_name}</p>
        </Col>
        <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`}>
        <p className={`${styles.CrewInfop} `}>{pro_assistant_3_phone}</p>
        </Col>
        <Col xs={12} md={4}  className='px-0 mx-0 pt-3 pt-md-0'>
          <p className={`${styles.CrewInfop} `}>{pro_assistant_3_email}</p>
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
        <Button onClick={() => setShowPa(showPa => !showPa)}
          className={`px-5 ${btnStyles.Button} ${btnStyles.Shed}`}>
          Non-Callsheet/Extra PA Positions </Button>
        </Col>
      </Row>
      {!showPa ? (
          ""
              ) : (
                <ExtraCrewInfo
                dept="pa"
                setShow={setShowPa}  /> 
       ) } 
    </div>
  )
}

export default InfoADPA