import React, { useState } from 'react';
import { useRedirect } from '../../hooks/Redirect';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../styles/Callsheets.module.css";
import { useCrewInfoContext } from "../../contexts/BaseCallContext";
import InfoCamera from './InfoCamera';
import InfoWardrobe from './InfoWardrobe';
import InfoScript from "./InfoScript";
import InfoMakeup from './InfoMakeup';
import InfoSound from './InfoSound';
import InfoStunts from './InfoStunts';
import InfoPost from './InfoPost';
import TimesProduction from './TimesProduction';
import TimesArt from './TimesArt';
import TimesCastingAD from './TimesCastingAD';
import TimesLocations from './TimesLocations';
import TimesElectricGrip from './TimesElectricGrip';

const CrewCallsPage = ({callsheet}) => {
  useRedirect("loggedOut");

  const crewInfo = useCrewInfoContext();
  const crewInfoOne = crewInfo.results[0];
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

  return (
    <div className='mt-3'>
      <span className={`pl-3 py-0 px-1 ${styles.SubTitleSpan }`}style={{ textTransform: 'uppercase' }}>Crew (total)</span>
        <p style={{ textTransform: 'uppercase'}} className={` pl-3 pt-1 ${styles.SubTitle }`}></p>
      {/* <h4 style={{ textTransform: 'uppercase'}} className={`text-center mt-0 mb-4 pl-3 py-0 ${styles.SubTitle }`}>CREW CALLS</h4> */}
        <div className='mt-0 mb-3'>
          <Row className={`${styles.ButtonLine} mt-0`}>
            <Col xs={4} md={2} className='text-center'>
                <p
                  className={`py-0 mb-0 ${styles.Button}`}
                  onClick={() => setShowPro(showPro => !showPro)} > Production
                </p>
            </Col>
            <Col xs={4} md={2} className='text-center'>
                    <p
                      className={`py-0 mb-0 ${styles.Button}`}
                      onClick={() => setShowCam(showCam => !showCam)} > Camera
                    </p>
                </Col>
            <Col xs={4} className='mx-0 pl-4 py-0' md={2}>
              <p
                  className={`py-0 mb-0 ${styles.Button}`}
                  onClick={() => setShowCas(showCas => !showCas)} > Casting/AD
              </p>
            </Col>
            <Col xs={4} className='text-center' md={2}>
            <p
                className={`py-0 mb-0 ${styles.Button}`}
                onClick={() => setShowLoc(showLoc => !showLoc)} >Locations
            </p>
            </Col>
            <Col xs={4} className='text-center' md={2}>
              <p
                  className={`py-0 mb-0 ${styles.Button}`}
                  onClick={() => setShowWar(showWar => !showWar)} >Wardrobe
              </p>
            </Col>
            <Col xs={4} className='mx-0 px-0 text-center' md={2}>
              <p
                  className={`py-0 mb-0 ${styles.Button}`}
                  onClick={() => setShowScr(showScr => !showScr)} > Script/Catering
              </p>
            </Col>
          </Row>  
          <Row className={`${styles.ButtonLine} text-center mt-0`}>
            <Col xs={4} md={2} className='mx-0 px-0 py-0'>
                <p
                  className={`py-0 mb-0 ${styles.Button}`}
                  onClick={() => setShowEle(showEle => !showEle)} > Electric/Grip
                </p>
            </Col>
            <Col xs={4} md={2} className='mx-0 px-0 py-0'>
                    <p
                      className={`py-0 mb-0 ${styles.Button}`}
                      onClick={() => setShowMak(showMak => !showMak)} > Makeup
                    </p>
                </Col>
            <Col xs={4} className='mx-0 px-0 py-0' md={2}>
              <p
                  className={`py-0 mb-0 ${styles.Button}`}
                  onClick={() => setShowSou(showSou => !showSou)} > Sound/Transport
              </p>
            </Col>
            <Col xs={4} className='py-0' md={2}>
            <p
                className={`py-0 mb-0 ${styles.Button}`}
                onClick={() => setShowStu(showStu => !showStu)} >Stunts
            </p>
            </Col>
            <Col xs={4} className='text-center' md={2}>
              <p
                  className={`py-0 mb-0 ${styles.Button}`}
                  onClick={() => setShowArt(showArt => !showArt)} > Art
              </p>
            </Col>
            <Col xs={4} className='mx-0 px-0 py-0' md={2}>
              <p
                  className={`py-0 mb-0 ${styles.Button}`}
                  onClick={() => setShowPos(showPos => !showPos)} > Post/Additional
              </p>
            </Col>
          </Row>  
          {/* <p className={`mt-1 pl-3 mb-0 py-1 ${styles.SubTitle }`}></p> */}
        </div>
        <p className={`mt-1 pl-3 mb-0 pt-1 ${styles.SubTitle }`}></p>
        <div className='mt-0'>
        {/* Info Production */}
        {!showPro ? (
                 ""
              ) : (
                <TimesProduction callsheet={callsheet} crewInfoOne={crewInfoOne} setShowPro={setShowPro} /> 
                ) }  
        {/* Info Casting */}
        {!showCas ? (
                ""
              ) : (
                <TimesCastingAD callsheet={callsheet} crewInfoOne={crewInfoOne} setShowCas={setShowCas} /> 
                ) } 
        {/* Info Locations */}
        {!showLoc ? (
                ""
              ) : (
                <TimesLocations callsheet={callsheet} crewInfoOne={crewInfoOne} setShowLoc={setShowLoc} /> 
                ) } 
        {/* Info Script  */}
        {!showScr ? (
                ""
              ) : (
                <InfoScript crewInfoOne={crewInfoOne} setShowScr={setShowScr} /> 
                ) } 
        {/* Info Electric */}
        {!showEle ? (
                ""
              ) : (
                <TimesElectricGrip crewInfoOne={crewInfoOne} setShowEle={setShowEle} /> 
                ) } 
        {/* Info Makeup */}
        {!showMak ? (
                ""
              ) : (
                <InfoMakeup crewInfoOne={crewInfoOne} setShowMak={setShowMak} /> 
                ) } 
        {/* Info Sound */}
        {!showSou ? (
                ""
              ) : (
                <InfoSound crewInfoOne={crewInfoOne} setShowSou={setShowSou} /> 
                ) } 
        {/* Info Stunts */}
        {!showStu ? (
                ""
              ) : (
                <InfoStunts crewInfoOne={crewInfoOne} setShowStu={setShowStu} /> 
                ) } 
        {/* Info Art */}
        {!showArt ? (
                ""
              ) : (
                <TimesArt crewInfoOne={crewInfoOne} setShowArt={setShowArt} /> 
                ) } 
        {/* Info Camera */}
        {!showCam ? (
                ""
              ) : (
                <InfoCamera crewInfoOne={crewInfoOne} setShowCam={setShowCam} /> 
                ) } 
        {/* Info Post */}
        {!showPos ? (
                ""
              ) : (
                <InfoPost crewInfoOne={crewInfoOne} setShowPos={setShowPos} /> 
                ) } 
        {/* Info Wardrobe  */}
        {!showWar ? (
                ""
              ) : (
                <InfoWardrobe crewInfoOne={crewInfoOne} setShowWar={setShowWar} /> 
                ) } 
        </div>
    </div>
  )
}

export default CrewCallsPage