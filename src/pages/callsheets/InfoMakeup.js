import React from 'react';
import { useRedirect } from '../../hooks/Redirect';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../styles/Callsheets.module.css";

const InfoMakeup = ({crewInfoOne, setShowMak }) => {
  useRedirect("loggedOut");

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
      <span className={`float-right ${styles.Close }`} onClick={() => setShowMak(false) } >Close</span> 
      <h5 className={`pl-5 text-center`} style={{ textTransform: 'uppercase'}} >MAKEUP </h5>
      </div>
      <div className='mt-3'>
        {/* key hairmakeup */}
        {key_hairmakeup_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>Key Hair/Makeup</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{key_hairmakeup_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{key_hairmakeup_email}</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{key_hairmakeup_phone}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* key hairstylist */}
         {key_hairstylist_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>Key Hairstylist</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{key_hairstylist_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{key_hairstylist_email}</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{key_hairstylist_phone}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* sfx makeup */}
         {sfx_makeup_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>SFX Makeup</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{sfx_makeup_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{sfx_makeup_email}</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{sfx_makeup_phone}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* sfx makeup ass*/}
         {sfx_makeup_assistant_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>SFX Makeup Ass</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{sfx_makeup_assistant_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{sfx_makeup_assistant_email}</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{sfx_makeup_assistant_phone}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* makeup artist 1 */}
         {makeup_artist_1_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>Makeup Artist 1</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{makeup_artist_1_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{makeup_artist_1_email}</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{makeup_artist_1_phone}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* makeup artist 2 */}
         {makeup_artist_2_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>Makeup Artist 2</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{makeup_artist_2_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{makeup_artist_2_email}</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{makeup_artist_2_phone}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* makeup artist 3 */}
         {makeup_artist_3_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>Makeup Artist 3</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{makeup_artist_3_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{makeup_artist_3_email}</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{makeup_artist_3_phone}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* makeup artist 4 */}
         {makeup_artist_4_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>Makeup Artist 4</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{makeup_artist_4_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{makeup_artist_4_email}</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{makeup_artist_4_phone}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* makeup artist 5 */}
         {makeup_artist_5_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>Makeup Artist 5</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{makeup_artist_5_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{makeup_artist_5_email}</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{makeup_artist_5_phone}</p>
            </Col>
          </Row>
          </div> )
         }
        </div>
    </div>
  )
}

export default InfoMakeup