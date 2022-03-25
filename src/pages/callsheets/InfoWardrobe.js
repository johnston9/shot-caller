import React from 'react';
import { useRedirect } from '../../hooks/Redirect';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../styles/Callsheets.module.css";

const InfoWardrobe = ({setShowWar, crewInfoOne}) => {
  useRedirect("loggedOut");

  const {costume_designer_name, costume_designer_email, costume_designer_phone,
    ass_costume_designer_name, ass_costume_designer_email, ass_costume_designer_phone,
    wardrobe_assistant_1_name, wardrobe_assistant_1_email, wardrobe_assistant_1_phone,
    wardrobe_assistant_2_name, wardrobe_assistant_2_email, wardrobe_assistant_2_phone,
    wardrobe_assistant_3_name, wardrobe_assistant_3_email, wardrobe_assistant_3_phone,
    wardrobe_assistant_4_name, wardrobe_assistant_4_email, wardrobe_assistant_4_phone,
    wardrobe_assistant_5_name, wardrobe_assistant_5_email, wardrobe_assistant_5_phone,} = crewInfoOne || {};

  return (
    <div>
      <div className={`mt-0 text-center ${styles.SubTitle }`}>
      <span className={`float-right ${styles.Close }`} onClick={() => setShowWar(false) } >Close</span> 
      <h5 className={`pl-5 text-center`} style={{ textTransform: 'uppercase'}} >WARDROBE </h5>
      </div>
      <div className='mt-3'>
        {/* Costume Designer */}
        {costume_designer_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>Costume Designer</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{costume_designer_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{costume_designer_email}</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{costume_designer_phone}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* ass costume designer */}
         {ass_costume_designer_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>Assist Costume Design </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{ass_costume_designer_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{ass_costume_designer_email}</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{ass_costume_designer_phone}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* wardrobe assistant 1 */}
         {wardrobe_assistant_1_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>Wardrobe Assist 1</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{wardrobe_assistant_1_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{wardrobe_assistant_1_email}</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{wardrobe_assistant_1_phone}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* wardrobe assistant 2 */}
         {wardrobe_assistant_2_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>Wardrobe Assist 2</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{wardrobe_assistant_2_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{wardrobe_assistant_2_email}</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{wardrobe_assistant_2_phone}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* wardrobe assistant 3 */}
         {wardrobe_assistant_3_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>Wardrobe Assist 3</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{wardrobe_assistant_3_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{wardrobe_assistant_3_email}</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{wardrobe_assistant_3_phone}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* wardrobe assistant 4 */}
         {wardrobe_assistant_4_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>Wardrobe Assist 4</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{wardrobe_assistant_4_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{wardrobe_assistant_4_email}</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{wardrobe_assistant_4_phone}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* wardrobe assistant 5 */}
         {wardrobe_assistant_5_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>Wardrobe Assist 5</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{wardrobe_assistant_5_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{wardrobe_assistant_5_email}</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{wardrobe_assistant_5_phone}</p>
            </Col>
          </Row>
          </div> )
         }
        </div>
    </div>
  )
}

export default InfoWardrobe