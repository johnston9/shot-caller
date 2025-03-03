/* Component to display the Makeup Department Calltimes
   on the Callsheet */
import React from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../../styles/Callsheets.module.css";

const TimesMakeup = ({crewInfoOne, callsheet, setShowMak }) => {

  const {key_hairmakeup_name,
    key_hairstylist_name,
    sfx_makeup_name, 
    sfx_makeup_assistant_name,
    makeup_artist_1_name,
    makeup_artist_2_name,
    makeup_artist_3_name,
    makeup_artist_4_name, } = crewInfoOne || {};

  const { key_hairmakeup_calltime, key_hairstylist_calltime, sfx_makeup_calltime,
    sfx_makeup_assistant_calltime, makeup_artist_1_calltime, makeup_artist_2_calltime,
    makeup_artist_3_calltime, makeup_artist_4_calltime,
    } = callsheet;
    
  return (
    <div>
      <div className={`mt-0 mb-2 text-center ${styles.Back3 }`}>
      <span className={`float-right ${styles.Close }`} onClick={() => setShowMak(false) } >Close</span> 
      <h5 className={`pl-5 text-center`} style={{ textTransform: 'uppercase'}} >MAKEUP DEPARTMENT</h5>
      </div>
      <Row>
      {/* Key Hair and Makeup */}
      {(key_hairmakeup_calltime && key_hairmakeup_name) &&
            (<Col xs={12} lg={6}>
            <Row className={`mt-1 mx-0 d-flex align-items-center`} >
              <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
                <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
                Key Hair and Makeup</p>
                <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
                Key Hair and Makeup</p>                    
              </Col>
              <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
                <p className={`my-0 py-0 `}>{key_hairmakeup_name} </p>
              </Col>
              <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
                <p className={`my-0 py-0 `}>{key_hairmakeup_calltime} </p>
              </Col>
            </Row>
            <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
            </Col> )
      }
      {/* Key Hairstylist */}
      {(key_hairstylist_calltime && key_hairstylist_name) &&
            (<Col xs={12} lg={6}>
            <Row className={`mt-1 mx-0 d-flex align-items-center`} >
              <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
                <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
                Key Hairstylist</p>
                <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
                Key Hairstylist</p>                    
              </Col>
              <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
                <p className={`my-0 py-0 `}>{key_hairstylist_name} </p>
              </Col>
              <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
                <p className={`my-0 py-0 `}>{key_hairstylist_calltime} </p>
              </Col>
            </Row>
            <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
            </Col> )
      }
      {/* SFX Makeup */}
      {(sfx_makeup_calltime && sfx_makeup_name) &&
            (<Col xs={12} lg={6}>
            <Row className={`mt-1 mx-0 d-flex align-items-center`} >
              <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
                <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
                SFX Makeup</p>
                <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
                SFX Makeup</p>                    
              </Col>
              <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
                <p className={`my-0 py-0 `}>{sfx_makeup_name} </p>
              </Col>
              <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
                <p className={`my-0 py-0 `}>{sfx_makeup_calltime} </p>
              </Col>
            </Row>
            <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
            </Col> )
      }
      {/* SFX Makeup Assistant/Other */}
      {(sfx_makeup_assistant_calltime && sfx_makeup_assistant_name) &&
            (<Col xs={12} lg={6}>
            <Row className={`mt-1 mx-0 d-flex align-items-center`} >
              <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
                <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
                SFX Makeup Assistant/Other</p>
                <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
                SFX Makeup Assistant/Other</p>                    
              </Col>
              <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
                <p className={`my-0 py-0 `}>{sfx_makeup_assistant_name} </p>
              </Col>
              <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
                <p className={`my-0 py-0 `}>{sfx_makeup_assistant_calltime} </p>
              </Col>
            </Row>
            <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
            </Col> )
      }
      {/* Hair/Makeup Artist 1 */}
      {(makeup_artist_1_calltime && makeup_artist_1_name) &&
            (<Col xs={12} lg={6}>
            <Row className={`mt-1 mx-0 d-flex align-items-center`} >
              <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
                <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
                Hair/Makeup Artist 1</p>
                <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
                Hair/Makeup Artist 1</p>                    
              </Col>
              <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
                <p className={`my-0 py-0 `}>{makeup_artist_1_name} </p>
              </Col>
              <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
                <p className={`my-0 py-0 `}>{makeup_artist_1_calltime} </p>
              </Col>
            </Row>
            <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
            </Col> )
      }
      {/* Hair/Makeup Artist 2 */}
      {(makeup_artist_2_calltime && makeup_artist_2_name) &&
            (<Col xs={12} lg={6}>
            <Row className={`mt-1 mx-0 d-flex align-items-center`} >
              <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
                <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
                Hair/Makeup Artist 2</p>
                <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
                Hair/Makeup Artist 2</p>                    
              </Col>
              <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
                <p className={`my-0 py-0 `}>{makeup_artist_2_name} </p>
              </Col>
              <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
                <p className={`my-0 py-0 `}>{makeup_artist_2_calltime} </p>
              </Col>
            </Row>
            <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
            </Col> )
      }
      {/* Hair/Makeup Artist 3 */}
      {(makeup_artist_3_calltime && makeup_artist_3_name) &&
            (<Col xs={12} lg={6}>
            <Row className={`mt-1 mx-0 d-flex align-items-center`} >
              <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
                <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
                Hair/Makeup Artist 3</p>
                <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
                Hair/Makeup Artist 3</p>                    
              </Col>
              <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
                <p className={`my-0 py-0 `}>{makeup_artist_3_name} </p>
              </Col>
              <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
                <p className={`my-0 py-0 `}>{makeup_artist_3_calltime} </p>
              </Col>
            </Row>
            <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
            </Col> )
      }
      {/* Hair/Makeup Artist 4 */}
      {(makeup_artist_4_calltime && makeup_artist_4_name) &&
            (<Col xs={12} lg={6}>
            <Row className={`mt-1 mx-0 d-flex align-items-center`} >
              <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
                <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
                Hair/Makeup Artist 4</p>
                <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
                Hair/Makeup Artist 4</p>                    
              </Col>
              <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
                <p className={`my-0 py-0 `}>{makeup_artist_4_name} </p>
              </Col>
              <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
                <p className={`my-0 py-0 `}>{makeup_artist_4_calltime} </p>
              </Col>
            </Row>
            <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
            </Col> )
      }
      </Row>
    </div>
  )
}

export default TimesMakeup