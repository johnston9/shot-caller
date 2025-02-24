/* Component in the Callsheet component to display the Callsheet 
   crew call times
 * Contains the TimesProduction, TimesArt, TimesCastingAD,
   TimesLocations, TimesElectricGrip, TimesCamera, TimesMakeup,
   TimesScriptCater, TimesSoundTransport, TimesPostAdditional,
   TimesStunts and TimesWardrobe components to do so */
import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../../styles/Callsheets.module.css";
import { useCrewInfoContext } from "../../../contexts/BaseCallContext";
import TimesProduction from '../callsheetCrewTimes/TimesProduction';
import TimesArt from '../callsheetCrewTimes/TimesArt';
import TimesCastingAD from '../callsheetCrewTimes/TimesCastingAD';
import TimesLocations from '../callsheetCrewTimes/TimesLocations';
import TimesElectricGrip from '../callsheetCrewTimes/TimesElectricGrip';
import TimesCamera from '../callsheetCrewTimes/TimesCamera';
import TimesMakeup from '../callsheetCrewTimes/TimesMakeup';
import TimesScriptCater from '../callsheetCrewTimes/TimesScriptCater';
import TimesSoundTransport from '../callsheetCrewTimes/TimesSoundTransport';
import TimesPostAdditional from '../callsheetCrewTimes/TimesPostAdditional';
import TimesStunts from '../callsheetCrewTimes/TimesStunts';
import TimesWardrobe from '../callsheetCrewTimes/TimesWardrobe';
import TimesADPA from '../callsheetCrewTimes/TimesADPA';
import TimesCater from '../callsheetCrewTimes/TimesCater';
import TimesTransport from '../callsheetCrewTimes/TimesTransport';
import TimesConWrang from '../callsheetCrewTimes/TimesConWrang';
import TimesTVStudio from '../callsheetCrewTimes/TimesTVStudio';
import TimesAdditional from '../callsheetCrewTimes/TimesAdditional';

const CrewCallsPage = ({callsheet, setShow}) => {

  const crewInfoOne = useCrewInfoContext();
  const [showPro, setShowPro] = useState(false);
  const [showCam, setShowCam] = useState(false);
  const [showSou, setShowSou] = useState(false);
  const [showLoc, setShowLoc] = useState(false);
  const [showMak, setShowMak] = useState(false);
  const [showEle, setShowEle] = useState(false);
  const [showScr, setShowScr] = useState(false);
  const [showArt, setShowArt] = useState(false);
  const [showCas, setShowCas] = useState(false);
  const [showStu, setShowStu] = useState(false);
  const [showPos, setShowPos] = useState(false);
  const [showWar, setShowWar] = useState(false);
  const [showCat, setShowCat] = useState(false);
  const [showAD, setShowAD] = useState(false); 
  const [showTra, setShowTra] = useState(false); 
  const [showAdd, setShowAdd] = useState(false);
  const [showTv, setShowTv] = useState(false);
  const [showWra, setShowWra] = useState(false);

  return (
    <div className='mt-3'>
      {/* md title */}
      <div className='d-none d-md-block mt-5'>
       <h4 className={`pl-3 py-0 px-1 ${styles.SubTitleSpan }`}
        style={{ textTransform: 'uppercase' }}>
        Crew Calls <span className={`${styles.HSpan }`} >Total</span></h4>
      </div>
        {/* mobile title */}
        <div className='d-block d-md-none'>
        <div className={`mb-3 text-center ${styles.SubTitle }`}>
            <span className={`float-right ${styles.Close }`} onClick={() => setShow(false) } >Close</span> 
            <h5 className={`pl-5 text-center`} 
            style={{ textTransform: 'uppercase'}} >crew calls </h5>
            </div>
        </div>
        {/* department buttons */}
        <p style={{ textTransform: 'uppercase'}} 
        className={`pl-3 pt-1 ${styles.SubTitle }`}></p>
        <div className={`mt-1 pt-2 ${styles.White }`}> 
          <Row className={`${styles.ButtonLine} mt-0`}>
            <Col xs={4} md={2} className='mx-0 px-0 pt-1 text-center'>
                <p
                  className={`py-0 mb-0 ${styles.Button}`}
                  onClick={() => setShowPro(showPro => !showPro)} > Production
                </p>
            </Col>
            <Col xs={4} md={2} className='mx-0 px-0 pt-1 text-center'>
                    <p
                      className={`py-0 mb-0 ${styles.Button}`}
                      onClick={() => setShowCam(showCam => !showCam)} > Camera
                    </p>
                </Col>
            <Col xs={4} md={2} className='mx-0 px-0 pt-1 text-center'>
              <p
                  className={`py-0 mb-0 ${styles.Button}`}
                  onClick={() => setShowAD(showAD => !showAD)} > AD/PA
              </p>
            </Col>
            <Col xs={4} md={2} className='mx-0 px-0 pt-1 text-center'>
            <p
                className={`py-0 mb-0 ${styles.Button}`}
                onClick={() => setShowLoc(showLoc => !showLoc)} >Locations
            </p>
            </Col>
            <Col xs={4} md={2} className='mx-0 px-0 pt-1 text-center'>
              <p
                  className={`py-0 mb-0 ${styles.Button}`}
                  onClick={() => setShowWar(showWar => !showWar)} >Wardrobe
              </p>
            </Col>
            <Col xs={4} md={2} className='mx-0 px-0 pt-1 text-center'>
              <p
                  className={`py-0 mb-0 ${styles.Button}`}
                  onClick={() => setShowScr(showScr => !showScr)} > Script
              </p>
            </Col>
          </Row>  
          <Row className={`${styles.ButtonLine} text-center mt-1`}>
            <Col xs={4} md={2} className='mx-0 px-0 pt-1 text-center'>
                <p
                  className={`py-0 mb-0 ${styles.Button}`}
                  onClick={() => setShowEle(showEle => !showEle)} > Electric/Grip
                </p>
            </Col>
            <Col xs={4} md={2} className='mx-0 px-0 pt-1 text-center'>
                    <p
                      className={`py-0 mb-0 ${styles.Button}`}
                      onClick={() => setShowMak(showMak => !showMak)} > Makeup
                    </p>
            </Col>
            <Col xs={4} sm={4} md={2} className='mx-0 px-0 pt-1 text-center'>
              <p
                  className={`py-0 mb-0 ${styles.Button}`}
                  onClick={() => setShowSou(showSou => !showSou)} > Sound
              </p>
            </Col>
            <Col xs={4} sm={4} md={2} className='mx-0 px-0 pt-1 text-center'>
            <p
                className={`py-0 mb-0 ${styles.Button}`}
                onClick={() => setShowStu(showStu => !showStu)} >Stunts/SFX
            </p>
            </Col>
            <Col xs={4} sm={4} md={2} className='mx-0 px-0 pt-1 text-center'>
              <p
                  className={`py-0 mb-0 ${styles.Button}`}
                  onClick={() => setShowArt(showArt => !showArt)} > Art
              </p>
            </Col>
            <Col xs={4} sm={4} md={2} className='mx-0 px-0 pt-1 text-center'>
              <p
                  className={`py-0 mb-0 ${styles.Button}`}
                  onClick={() => setShowPos(showPos => !showPos)} > Post/VFX
              </p>
            </Col>
          </Row> 
          {/* new row - Catering - Casting - Transport - Wrangling - TV Studio -Additional */}
          <Row className={`${styles.ButtonLine} mt-1`}>
          <Col xs={4} md={2} className='mx-0 px-0 pt-1 text-center'>
              <p
                  className={`py-0 mb-0 ${styles.Button}`}
                  onClick={() => setShowCat(showCat => !showCat)} > Catering/Craft
              </p>
          </Col>
          <Col xs={4} md={2} className='mx-0 px-0 pt-1 text-center'>
              <p
                  className={`py-0 mb-0 ${styles.Button}`}
                  onClick={() => setShowCas(showCas => !showCas)} > Casting
              </p>
          </Col>
          <Col xs={4} md={2} className='mx-0 px-0 pt-1 text-center'>
              <p
                  className={`py-0 mb-0 ${styles.Button}`}
                  onClick={() => setShowTra(showTra => !showTra)} > Transport
              </p>
          </Col>
          <Col xs={4} md={2} className='mx-0 px-0 pt-1 text-center'>
              <p
                  className={`d-block d-md-none py-0 mb-0 ${styles.Button}`}
                  onClick={() => setShowWra(showWra => !showWra)} > Construction/Wr
              </p>
              <p
                  className={`d-none d-md-block py-0 mb-0 ${styles.Button}`}
                  onClick={() => setShowWra(showWra => !showWra)} > Construction/Wrangling
              </p>
          </Col>
          <Col xs={4} md={2} className='mx-0 px-0 pt-1 text-center'>
              <p
                  className={`py-0 mb-0 d-block d-md-none ${styles.Button}`}
                  onClick={() => setShowTv(showTv => !showTv)} > TV
              </p>
              <p
                  className={`py-0 mb-0 d-none d-md-block ${styles.Button}`}
                  onClick={() => setShowTv(showTv => !showTv)} > TV Studio
              </p>
          </Col>
          <Col xs={4} md={2} className='mx-0 px-0 pt-1 text-center'>
              <p
                  className={`py-0 mb-0 ${styles.Button}`}
                  onClick={() => setShowAdd(showAdd => !showAdd)} >Additional
              </p>
          </Col>
          </Row> 
        </div>
        <p className={`mt-1 pl-3 mb-0 pt-1 ${styles.SubTitle }`}></p>
        <div className='mt-3'>
        {/* Production */}
        {!showPro ? (
                 ""
              ) : (
                <TimesProduction callsheet={callsheet} crewInfoOne={crewInfoOne} setShowPro={setShowPro} /> 
                ) }  
        {/* Camera */}
        {!showCam ? (
                ""
              ) : (
                <TimesCamera callsheet={callsheet} 
                crewInfoOne={crewInfoOne} setShowCam={setShowCam} /> 
        ) } 
        {/* AD/PA */}
        {!showAD ? (
                ""
              ) : (
                <TimesADPA callsheet={callsheet} 
                crewInfoOne={crewInfoOne} setShowAD={setShowAD} /> 
        ) } 
        {/* Casting */}
        {!showCas ? (
                ""
              ) : (
                <TimesCastingAD callsheet={callsheet} 
                crewInfoOne={crewInfoOne} setShowCas={setShowCas} /> 
                ) } 
        {/* Locations */}
        {!showLoc ? (
                ""
              ) : (
                <TimesLocations callsheet={callsheet} 
                crewInfoOne={crewInfoOne} setShowLoc={setShowLoc} /> 
                ) } 
        {/* Electric */}
        {!showEle ? (
                ""
              ) : (
                <TimesElectricGrip crewInfoOne={crewInfoOne}
                callsheet={callsheet} setShowEle={setShowEle} /> 
                ) } 
        {/* Makeup */}
        {!showMak ? (
                ""
              ) : (
                <TimesMakeup callsheet={callsheet} 
                crewInfoOne={crewInfoOne} setShowMak={setShowMak} /> 
                ) } 
        {/* Script  */}
        {!showScr ? (
                ""
              ) : (
                <TimesScriptCater crewInfoOne={crewInfoOne}
                callsheet={callsheet} setShowScr={setShowScr} /> 
                ) } 
        {/* Sound */}
        {!showSou ? (
                ""
              ) : (
                <TimesSoundTransport crewInfoOne={crewInfoOne}
                callsheet={callsheet} setShowSou={setShowSou} /> 
                ) } 
        {/* Stunts */}
        {!showStu ? (
                ""
              ) : (
                <TimesStunts crewInfoOne={crewInfoOne}
                callsheet={callsheet} setShowStu={setShowStu} /> 
                ) } 
        {/* Art */}
        {!showArt ? (
                ""
              ) : (
                <TimesArt crewInfoOne={crewInfoOne}
                callsheet={callsheet} setShowArt={setShowArt} /> 
                ) } 
        {/* Post */}
        {!showPos ? (
                ""
              ) : (
                <TimesPostAdditional crewInfoOne={crewInfoOne}
                callsheet={callsheet} setShowPos={setShowPos} /> 
                ) } 
        {/* Wardrobe  */}
        {!showWar ? (
                ""
              ) : (
                <TimesWardrobe crewInfoOne={crewInfoOne}
                callsheet={callsheet} setShowWar={setShowWar} /> 
        ) } 
        {/* Catering */}
        {!showCat ? (
                ""
              ) : (
                <TimesCater crewInfoOne={crewInfoOne}
                callsheet={callsheet} setShowCat={setShowCat} /> 
        ) }
        {/* Transport */}
        {!showTra ? (
                ""
              ) : (
                <TimesTransport crewInfoOne={crewInfoOne}
                callsheet={callsheet} setShowTra={setShowTra} /> 
        ) }
        {/* Construction/Wrangling */}
        {!showWra ? (
                ""
              ) : (
                <TimesConWrang crewInfoOne={crewInfoOne}
                callsheet={callsheet} setShowWra={setShowWra} /> 
        ) }
        {/* TV */}
        {!showTv ? (
                ""
              ) : (
                <TimesTVStudio crewInfoOne={crewInfoOne}
                callsheet={callsheet} setShowTv={setShowTv} /> 
        ) }
        {/* Additional */}
        {!showAdd ? (
                ""
              ) : (
                <TimesAdditional crewInfoOne={crewInfoOne}
                callsheet={callsheet} setShowAdd={setShowAdd} /> 
        ) }
        </div>
    </div>
  )
}

export default CrewCallsPage