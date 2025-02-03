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

const InfoTVStudio = ({crewInfoOne, setShowTv}) => {
    useRedirect();
      const [showTvstu, setShowTvstu] = useState(false);

      const {add_pos_16_name, add_pos_16_email, add_pos_16_phone,
        add_pos_17_name, add_pos_17_email, add_pos_17_phone,
        add_pos_18_name, add_pos_18_email, add_pos_18_phone,
        add_pos_19_name, add_pos_19_email, add_pos_19_phone,
        add_pos_20_name, add_pos_20_email, add_pos_20_phone,   
        add_pos_15_job, add_pos_15_name, add_pos_15_email, add_pos_15_phone,} = crewInfoOne || {};

  return (
    <div>
    <div className={`mt-0 text-center ${styles.SubTitle }`}>
      <span className={`float-right pt-1 pt-md-2 ${styles.Bold } ${styles.Close }`} onClick={() => setShowTv(false) } >Close</span> 
      <h5 className={`d-none d-md-block pl-5 mb-0 text-center py-1 ${styles.Bold }`} >
      TV STUDIO POSITIONS</h5>
        <h5 className={`d-block d-md-none pl-5 mb-0 text-center py-1 ${styles.Bold }`} >
        TV STUDIO</h5>
    </div>
    <div className={`px-md-5 mx-md-5 ${styles.White }`}>
    {/* Technical Director - (Using Additional Position 16 keys) */}
    {add_pos_16_name && 
          (<div className={`${styles.CrewInfoRow} pt-3 pb-2`}>
          <div className='d-flex justify-content-center '>
          <p className={`mb-2 mx-4 py-0 text-center ${styles.Width95 }
      ${styles.SubTitle2 }`} style={{ textTransform: 'uppercase'}}>Technical Director</p>  
          </div>
          <Row className='text-center' >
            <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`} >
              <p className={`${styles.CrewInfoP} `}>{add_pos_16_name}</p>
            </Col>
            <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`} >
            <p className={`${styles.CrewInfop} `}>{add_pos_16_phone}</p>
            </Col>
            <Col xs={12} md={4}  className='px-0 mx-0 pt-3 pt-md-0' >
              <p className={`${styles.CrewInfop} `}>{add_pos_16_email}</p>
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
    {/* Floor Manager - (Using Additional Position 17 keys) */}
    {add_pos_17_name && 
          (<div className={`${styles.CrewInfoRow} pt-3 pb-2`}>
          <div className='d-flex justify-content-center '>
          <p className={`mb-2 mx-4 py-0 text-center ${styles.Width95 }
      ${styles.SubTitle2 }`} style={{ textTransform: 'uppercase'}}>Floor Manager</p>  
          </div>
          <Row className='text-center' >
            <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`} >
              <p className={`${styles.CrewInfoP} `}>{add_pos_17_name}</p>
            </Col>
            <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`} >
            <p className={`${styles.CrewInfop} `}>{add_pos_17_phone}</p>
            </Col>
            <Col xs={12} md={4}  className='px-0 mx-0 pt-3 pt-md-0' >
              <p className={`${styles.CrewInfop} `}>{add_pos_17_email}</p>
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
    {/* A1 - (Using Additional Position 18 keys) */}
    {add_pos_18_name && 
          (<div className={`${styles.CrewInfoRow} pt-3 pb-2`}>
          <div className='d-flex justify-content-center '>
          <p className={`mb-2 mx-4 py-0 text-center ${styles.Width95 }
      ${styles.SubTitle2 }`} style={{ textTransform: 'uppercase'}}>A1/Audio</p>  
          </div>
          <Row className='text-center' >
            <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`} >
              <p className={`${styles.CrewInfoP} `}>{add_pos_18_name}</p>
            </Col>
            <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`} >
            <p className={`${styles.CrewInfop} `}>{add_pos_18_phone}</p>
            </Col>
            <Col xs={12} md={4}  className='px-0 mx-0 pt-3 pt-md-0' >
              <p className={`${styles.CrewInfop} `}>{add_pos_18_email}</p>
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
    {/* Assistant Floor Manager - (Using Additional Position 19 keys) */}
    {add_pos_19_name && 
          (<div className={`${styles.CrewInfoRow} pt-3 pb-2`}>
          <div className='d-flex justify-content-center '>
          <p className={`mb-2 mx-4 py-0 text-center ${styles.Width95 }
      ${styles.SubTitle2 }`} style={{ textTransform: 'uppercase'}}>Assistant Floor Manager</p>  
          </div>
          <Row className='text-center' >
            <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`} >
              <p className={`${styles.CrewInfoP} `}>{add_pos_19_name}</p>
            </Col>
            <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`} >
            <p className={`${styles.CrewInfop} `}>{add_pos_19_phone}</p>
            </Col>
            <Col xs={12} md={4}  className='px-0 mx-0 pt-3 pt-md-0' >
              <p className={`${styles.CrewInfop} `}>{add_pos_19_email}</p>
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
    {/* Stage Manager - (Using Additional Position 20 keys) */}
    {add_pos_20_name && 
          (<div className={`${styles.CrewInfoRow} pt-3 pb-2`}>
          <div className='d-flex justify-content-center '>
          <p className={`mb-2 mx-4 py-0 text-center ${styles.Width95 }
      ${styles.SubTitle2 }`} style={{ textTransform: 'uppercase'}}>Stage Manager</p>  
          </div>
          <Row className='text-center' >
            <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`} >
              <p className={`${styles.CrewInfoP} `}>{add_pos_20_name}</p>
            </Col>
            <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`} >
            <p className={`${styles.CrewInfop} `}>{add_pos_20_phone}</p>
            </Col>
            <Col xs={12} md={4}  className='px-0 mx-0 pt-3 pt-md-0' >
              <p className={`${styles.CrewInfop} `}>{add_pos_20_email}</p>
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
    {/* Additional Position TV Studio 1 - (Using Additional Position 15 keys) */}
    {add_pos_15_job && 
          (<div className={`${styles.CrewInfoRow} pt-3 pb-2`}>
          <div className='d-flex justify-content-center '>
          <p className={`mb-2 mx-4 py-0 text-center ${styles.Width95 }
      ${styles.SubTitle2 }`} style={{ textTransform: 'uppercase'}}>{add_pos_15_job}</p>  
          </div>
          <Row className='text-center' >
            <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`} >
              <p className={`${styles.CrewInfoP} `}>{add_pos_15_name}</p>
            </Col>
            <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`} >
            <p className={`${styles.CrewInfop} `}>{add_pos_15_phone}</p>
            </Col>
            <Col xs={12} md={4}  className='px-0 mx-0 pt-3 pt-md-0' >
              <p className={`${styles.CrewInfop} `}>{add_pos_15_email}</p>
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
           <Button onClick={() => setShowTvstu(showTvstu => !showTvstu)}
             className={`px-5 ${btnStyles.Button} ${btnStyles.Shed}`}>
             Extra TV Studio Positions </Button>
           </Col>
         </Row>
         {!showTvstu ? (
             ""
                 ) : (
                   <ExtraCrewInfo
                   dept="tv"
                   setShow={setShowTvstu}  /> 
          ) } 
    </div>
  )
}

export default InfoTVStudio