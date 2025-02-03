/* Component in the CrewInfo page to display
   the Makeup Department crew info */
import React, { useState } from 'react';
import { useRedirect } from '../../../../hooks/Redirect';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../../../styles/Callsheets.module.css";
import Button from 'react-bootstrap/Button';
import btnStyles from "../../../../styles/Button.module.css";
import ExtraCrewInfo from '../ExtraCrewInfo';

const InfoMakeup = ({crewInfoOne, setShowMak }) => {
  useRedirect();
  const [show, setShow] = useState(false);

  const {key_hairmakeup_name, key_hairmakeup_email, key_hairmakeup_phone,
    key_hairstylist_name, key_hairstylist_email, key_hairstylist_phone,
    sfx_makeup_name, sfx_makeup_email, sfx_makeup_phone,
    sfx_makeup_assistant_name, sfx_makeup_assistant_email, sfx_makeup_assistant_phone,
    makeup_artist_1_name, makeup_artist_1_email, makeup_artist_1_phone,
    makeup_artist_2_name, makeup_artist_2_email, makeup_artist_2_phone,
    makeup_artist_3_name, makeup_artist_3_email, makeup_artist_3_phone,
    makeup_artist_4_name, makeup_artist_4_email, makeup_artist_4_phone,
    makeup_artist_5_name, makeup_artist_5_email, makeup_artist_5_phone,} = crewInfoOne || {};

  return (
    <div>
      <div className={`mt-0 text-center ${styles.SubTitle }`}>
      <span className={`float-right pt-1 pt-md-2 ${styles.Bold } ${styles.Close }`} onClick={() => setShowMak(false) } >Close</span> 
      <h5 className={`pl-5 mb-0 text-center py-1 ${styles.Bold }`} >
        MAKEUP DEPARTMENT</h5>
      </div>
      <div className={`px-md-5 mx-md-5 ${styles.White }`}>
      {/* Key Hair/Makeup */}
      {key_hairmakeup_name && 
      (<div className={`${styles.CrewInfoRow} pt-3 pb-2`}>
      <div className='d-flex justify-content-center '>
      <p className={`mb-2 mx-4 py-0 text-center ${styles.Width95 }
       ${styles.SubTitle2 }`} style={{ textTransform: 'uppercase'}}>Key Hair/Makeup</p> 
      </div>
      <Row className='text-center' >
        <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`}>
          <p className={`${styles.CrewInfoP} `}>{key_hairmakeup_name}</p>
        </Col>
        <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`}>
        <p className={`${styles.CrewInfop} `}>{key_hairmakeup_phone}</p>
        </Col>
        <Col xs={12} md={4}  className='px-0 mx-0 pt-3 pt-md-0'>
          <p className={`${styles.CrewInfop} `}>{key_hairmakeup_email}</p>
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
      {/* Key Hairstylist */}
      {key_hairstylist_name && 
      (<div className={`${styles.CrewInfoRow} pt-3 pb-2`}>
      <div className='d-flex justify-content-center '>
      <p className={`mb-2 mx-4 py-0 text-center ${styles.Width95 }
       ${styles.SubTitle2 }`} style={{ textTransform: 'uppercase'}}>Key Hairstylist</p> 
      </div>
      <Row className='text-center' >
        <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`}>
          <p className={`${styles.CrewInfoP} `}>{key_hairstylist_name}</p>
        </Col>
        <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`}>
        <p className={`${styles.CrewInfop} `}>{key_hairstylist_phone}</p>
        </Col>
        <Col xs={12} md={4}  className='px-0 mx-0 pt-3 pt-md-0'>
          <p className={`${styles.CrewInfop} `}>{key_hairstylist_email}</p>
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
      {/* SFX Makeup */}
      {sfx_makeup_name && 
      (<div className={`${styles.CrewInfoRow} pt-3 pb-2`}>
      <div className='d-flex justify-content-center '>
      <p className={`mb-2 mx-4 py-0 text-center ${styles.Width95 }
       ${styles.SubTitle2 }`} style={{ textTransform: 'uppercase'}}>SFX Makeup</p> 
      </div>
      <Row className='text-center' >
        <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`}>
          <p className={`${styles.CrewInfoP} `}>{sfx_makeup_name}</p>
        </Col>
        <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`}>
        <p className={`${styles.CrewInfop} `}>{sfx_makeup_phone}</p>
        </Col>
        <Col xs={12} md={4}  className='px-0 mx-0 pt-3 pt-md-0'>
          <p className={`${styles.CrewInfop} `}>{sfx_makeup_email}</p>
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
      {/* SFX Makeup Assistant/Makeup Other */}
      {sfx_makeup_assistant_name && 
      (<div className={`${styles.CrewInfoRow} pt-3 pb-2`}>
      <div className='d-flex justify-content-center '>
      <p className={`mb-2 mx-4 py-0 text-center ${styles.Width95 }
       ${styles.SubTitle2 }`} style={{ textTransform: 'uppercase'}}>SFX Makeup Assistant/Makeup Other</p> 
      </div>
      <Row className='text-center' >
        <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`}>
          <p className={`${styles.CrewInfoP} `}>{sfx_makeup_assistant_name}</p>
        </Col>
        <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`}>
        <p className={`${styles.CrewInfop} `}>{sfx_makeup_assistant_phone}</p>
        </Col>
        <Col xs={12} md={4}  className='px-0 mx-0 pt-3 pt-md-0'>
          <p className={`${styles.CrewInfop} `}>{sfx_makeup_assistant_email}</p>
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
      {/* Hair/Makeup Artist 1 */}
      {makeup_artist_1_name && 
      (<div className={`${styles.CrewInfoRow} pt-3 pb-2`}>
      <div className='d-flex justify-content-center '>
      <p className={`mb-2 mx-4 py-0 text-center ${styles.Width95 }
       ${styles.SubTitle2 }`} style={{ textTransform: 'uppercase'}}>
        Hair/Makeup Artist 1</p> 
      </div>
      <Row className='text-center' >
        <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`}>
          <p className={`${styles.CrewInfoP} `}>{makeup_artist_1_name}</p>
        </Col>
        <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`}>
        <p className={`${styles.CrewInfop} `}>{makeup_artist_1_phone}</p>
        </Col>
        <Col xs={12} md={4}  className='px-0 mx-0 pt-3 pt-md-0'>
          <p className={`${styles.CrewInfop} `}>{makeup_artist_1_email}</p>
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
      {/* Hair/Makeup Artist 2 */}
      {makeup_artist_2_name && 
      (<div className={`${styles.CrewInfoRow} pt-3 pb-2`}>
      <div className='d-flex justify-content-center '>
      <p className={`mb-2 mx-4 py-0 text-center ${styles.Width95 }
       ${styles.SubTitle2 }`} style={{ textTransform: 'uppercase'}}>
        Hair/Makeup Artist 2</p> 
      </div>
      <Row className='text-center' >
        <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`}>
          <p className={`${styles.CrewInfoP} `}>{makeup_artist_2_name}</p>
        </Col>
        <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`}>
        <p className={`${styles.CrewInfop} `}>{makeup_artist_2_phone}</p>
        </Col>
        <Col xs={12} md={4}  className='px-0 mx-0 pt-3 pt-md-0'>
          <p className={`${styles.CrewInfop} `}>{makeup_artist_2_email}</p>
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
      {/* Hair/Makeup Artist 3 */}
      {makeup_artist_3_name && 
      (<div className={`${styles.CrewInfoRow} pt-3 pb-2`}>
      <div className='d-flex justify-content-center '>
      <p className={`mb-2 mx-4 py-0 text-center ${styles.Width95 }
       ${styles.SubTitle2 }`} style={{ textTransform: 'uppercase'}}>
        Hair/Makeup Artist 3</p> 
      </div>
      <Row className='text-center' >
        <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`}>
          <p className={`${styles.CrewInfoP} `}>{makeup_artist_3_name}</p>
        </Col>
        <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`}>
        <p className={`${styles.CrewInfop} `}>{makeup_artist_3_phone}</p>
        </Col>
        <Col xs={12} md={4}  className='px-0 mx-0 pt-3 pt-md-0'>
          <p className={`${styles.CrewInfop} `}>{makeup_artist_3_email}</p>
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
      {/* Hair/Makeup Artist 4 */}
      {makeup_artist_4_name && 
      (<div className={`${styles.CrewInfoRow} pt-3 pb-2`}>
      <div className='d-flex justify-content-center '>
      <p className={`mb-2 mx-4 py-0 text-center ${styles.Width95 }
       ${styles.SubTitle2 }`} style={{ textTransform: 'uppercase'}}>
        Hair/Makeup Artist 4</p> 
      </div>
      <Row className='text-center' >
        <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`}>
          <p className={`${styles.CrewInfoP} `}>{makeup_artist_4_name}</p>
        </Col>
        <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`}>
        <p className={`${styles.CrewInfop} `}>{makeup_artist_4_phone}</p>
        </Col>
        <Col xs={12} md={4}  className='px-0 mx-0 pt-3 pt-md-0'>
          <p className={`${styles.CrewInfop} `}>{makeup_artist_4_email}</p>
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
      {/* Hair/Makeup Artist 5 */}
      {makeup_artist_5_name && 
      (<div className={`${styles.CrewInfoRow} pt-3 pb-2`}>
      <div className='d-flex justify-content-center '>
      <p className={`mb-2 mx-4 py-0 text-center ${styles.Width95 }
       ${styles.SubTitle2 }`} style={{ textTransform: 'uppercase'}}>
        Hair/Makeup Artist 5</p> 
      </div>
      <Row className='text-center' >
        <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`}>
          <p className={`${styles.CrewInfoP} `}>{makeup_artist_5_name}</p>
        </Col>
        <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`}>
        <p className={`${styles.CrewInfop} `}>{makeup_artist_5_phone}</p>
        </Col>
        <Col xs={12} md={4}  className='px-0 mx-0 pt-3 pt-md-0'>
          <p className={`${styles.CrewInfop} `}>{makeup_artist_5_email}</p>
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
          Extra Makeup Dept Positions </Button>
        </Col>
      </Row>
      {!show ? (
          ""
              ) : (
                <ExtraCrewInfo
                dept="make-up"
                setShow={setShow}  /> 
       ) } 
    </div>
  )
}

export default InfoMakeup