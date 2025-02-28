/* Component to display the AD/PA Department Calltimes
   on the Callsheet */
   import React from "react";
   import Col from 'react-bootstrap/Col';
   import Row from 'react-bootstrap/Row';
   import styles from "../../../styles/Callsheets.module.css";
   
   const TimesADPA = ({crewInfoOne, callsheet, setShowAD }) => {
   
     const {ad_1_name,
       ad_2_name,
       ad_3_name,
       ad_4_name,
       ad_5_name,
       pro_assistant_1_name,
       pro_assistant_2_name,
       pro_assistant_3_name,} = crewInfoOne;
   
     const { ad_1_calltime, ad_2_calltime, ad_3_calltime, ad_4_calltime, 
      ad_5_calltime, pro_assistant_1_calltime,
       pro_assistant_2_calltime, pro_assistant_3_calltime,
       } = callsheet;

     return (
       <div>
        <div className={`mt-0 text-center  ${styles.Back3 }`}>
        <span className={`float-right ${styles.Close }`} onClick={() => setShowAD(false) } >Close</span> 
        <h5 className={`pl-5 text-center`} style={{ textTransform: 'uppercase'}} >AD POSITIONS </h5>
        </div>
        <div>
        <Row className="px-2">
        {/* 1st AD */}
        {(ad_1_calltime && ad_1_name) &&
          (<Col xs={12} lg={6}>
          <Row className={`mt-1 mx-0 d-flex align-items-center`} >
            <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
              <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
              1st AD</p>
                <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
                1st AD</p>                    
            </Col>
            <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
              <p className={`my-0 py-0 `}>{ad_1_name} </p>
            </Col>
            <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
              <p className={`my-0 py-0 `}>{ad_1_calltime} </p>
            </Col>
          </Row>
          <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
          </Col> )
        }
        {/* 2nd AD */}
        {(ad_2_calltime && ad_2_name) &&
          (<Col xs={12} lg={6}>
          <Row className={`mt-1 mx-0 d-flex align-items-center`} >
            <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
              <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
              2nd AD</p>
                <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
                2nd AD</p>                    
            </Col>
            <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
              <p className={`my-0 py-0 `}>{ad_2_name} </p>
            </Col>
            <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
              <p className={`my-0 py-0 `}>{ad_2_calltime} </p>
            </Col>
          </Row>
          <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
          </Col> )
        }
        {/* 3rd AD */}
        {(ad_3_calltime && ad_3_name) &&
          (<Col xs={12} lg={6}>
          <Row className={`mt-1 mx-0 d-flex align-items-center`} >
            <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
              <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
              3rd AD</p>
                <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
                3rd AD</p>                    
            </Col>
            <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
              <p className={`my-0 py-0 `}>{ad_3_name} </p>
            </Col>
            <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
              <p className={`my-0 py-0 `}>{ad_3_calltime} </p>
            </Col>
          </Row>
          <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
          </Col> )
        }
        {/* 4th AD */}
        {(ad_4_calltime && ad_4_name) &&
          (<Col xs={12} lg={6}>
          <Row className={`mt-1 mx-0 d-flex align-items-center`} >
            <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
              <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
              4th AD</p>
                <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
                4th AD</p>                    
            </Col>
            <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
              <p className={`my-0 py-0 `}>{ad_4_name} </p>
            </Col>
            <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
              <p className={`my-0 py-0 `}>{ad_4_calltime} </p>
            </Col>
          </Row>
          <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
          </Col> )
        }
        {/* 2nd 2nd AD */}
        {(ad_5_calltime && ad_5_name) &&
          (<Col xs={12} lg={6}>
          <Row className={`mt-1 mx-0 d-flex align-items-center`} >
            <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
              <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
              2nd 2nd AD</p>
                <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
                2nd 2nd AD</p>                    
            </Col>
            <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
              <p className={`my-0 py-0 `}>{ad_5_name} </p>
            </Col>
            <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
              <p className={`my-0 py-0 `}>{ad_5_calltime} </p>
            </Col>
          </Row>
          <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
          </Col> )
        }
        </Row>
        <div className={`my-3 mt-0 text-center ${styles.SubTitle }`}>
        <h5 className={` text-center`} style={{ textTransform: 'uppercase'}} >PA POSITIONS </h5>
        </div>
        <Row className="px-2">
        {/* Production Assistant 1 */}
        {(pro_assistant_1_calltime && pro_assistant_1_name) &&
          (<Col xs={12} lg={6}>
          <Row className={`mt-1 mx-0 d-flex align-items-center`} >
            <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
              <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
              Production Assistant 1</p>
                <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
                Production Assistant 1</p>                    
            </Col>
            <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
              <p className={`my-0 py-0 `}>{pro_assistant_1_name} </p>
            </Col>
            <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
              <p className={`my-0 py-0 `}>{pro_assistant_1_calltime} </p>
            </Col>
          </Row>
          <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
          </Col> )
        }
        {/* Production Assistant 2 */}
        {(pro_assistant_2_calltime && pro_assistant_2_name) &&
          (<Col xs={12} lg={6}>
          <Row className={`mt-1 mx-0 d-flex align-items-center`} >
            <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
              <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
              Production Assistant 2</p>
                <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
                Production Assistant 2</p>                    
            </Col>
            <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
              <p className={`my-0 py-0 `}>{pro_assistant_2_name} </p>
            </Col>
            <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
              <p className={`my-0 py-0 `}>{pro_assistant_2_calltime} </p>
            </Col>
          </Row>
          <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
          </Col> )
        }
        {/* Production Assistant 3 */}
        {(pro_assistant_3_calltime && pro_assistant_3_name) &&
          (<Col xs={12} lg={6}>
          <Row className={`mt-1 mx-0 d-flex align-items-center`} >
            <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
              <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
              Production Assistant 3</p>
                <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
                Production Assistant 3</p>                    
            </Col>
            <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
              <p className={`my-0 py-0 `}>{pro_assistant_3_name} </p>
            </Col>
            <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
              <p className={`my-0 py-0 `}>{pro_assistant_3_calltime} </p>
            </Col>
          </Row>
          <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
          </Col> )
        }
        </Row>
        </div>
       </div>
     )
   }

export default TimesADPA