/* Page to display the crew info by department
 * Contains the InfoProduction, InfoCamera, InfoCompany, InfoCasting,
   InfoLocations, InfoWardrobe, InfoScript, InfoElectric, InfoMakeup,
   InfoArt, InfoSound, InfoStunts and InfoPost components which are
   held in the crewInfoByDept folder to display the info by department */
import React, { useState } from 'react';
import { useRedirect } from '../../../hooks/Redirect';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import styles from "../../../styles/Callsheets.module.css";
import btnStyles from "../../../styles/Button.module.css";
import { useHistory } from 'react-router-dom';
import { useCrewInfoContext } from "../../../contexts/BaseCallContext";
import CreateOnce from './CreateOnce';

import InfoProduction from "./crewInfoByDept/InfoProduction";
import InfoCamera from './crewInfoByDept/InfoCamera';
import InfoCompany from './crewInfoByDept/InfoCompany';
import InfoCasting from './crewInfoByDept/InfoCasting';
import InfoLocations from './crewInfoByDept/InfoLocations';
import InfoWardrobe from './crewInfoByDept/InfoWardrobe';
import InfoScript from "./crewInfoByDept/InfoScript";
import InfoElectric from './crewInfoByDept/InfoElectricGrip';
import InfoArt from './crewInfoByDept/InfoArt';
import InfoSound from './crewInfoByDept/InfoSound';
import InfoStunts from './crewInfoByDept/InfoStunts';
import InfoCater from './crewInfoByDept/InfoCater';
import InfoTransport from './crewInfoByDept/InfoTransport';
import InfoPostVFX from './crewInfoByDept/InfoPostVFX';
import InfoWrangling from './crewInfoByDept/InfoWrangling';
import InfoAdditional from './crewInfoByDept/InfoAdditional';
import InfoTVStudio from './crewInfoByDept/InfoTVStudio';
import InfoADPA from './crewInfoByDept/InfoADPA';
import InfoMakeup from './crewInfoByDept/InfoMakeup';

import ExtraCrew from '../info/ExtraCrew';
import TopBox from '../../../components/TopBox';
import Important from '../info/Important';

const CrewInfo = () => {
  useRedirect();
  const history = useHistory();
  const crewInfoOne = useCrewInfoContext();
  console.log(crewInfoOne);
  const [showImp, setShowImp] = useState(false);
  const [showEx, setShowEx] = useState(false);
  const [showCom, setShowCom] = useState(false);
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
  const { id } = crewInfoOne|| {};

  return (
    <div className='mt-3 pb-5'>
      <TopBox work="Crew Info" />
      <Row>
      <Col>
      <Button
            className={`${btnStyles.Button} ${btnStyles.Blue} py-0 mt-1`}
            onClick={() => history.goBack()}
        >
            Back
      </Button> 
      </Col>
      </Row>
      <Row>
      <Col md={6} className='text-center'>
      <Button
      className={`py-0 mt-1 ${btnStyles.Red} ${btnStyles.Button}`}
      onClick={() => setShowImp(showImp => !showImp)} >
        IMPORTANT - <span style={{fontStyle: 'italic'}}>CALLSHEET MAIN CREW</span>
      </Button>
      </Col>
      <Col md={6} className='text-center mt-3 mt-md-0'>
      <Button
      className={`py-0 mt-1 ${btnStyles.Red} ${btnStyles.Button}`}
      onClick={() => setShowEx(showEx => !showEx)} >
        IMPORTANT - <span style={{fontStyle: 'italic'}}>NON-CALLSHEET EXTRA CREW</span>
      </Button>
      </Col>
      </Row>
      <h5 className={`text-center py-1 my-3 ${styles.SubTitle }`}>CREW INFO</h5>
      {!showImp ? (
          ""
              ) : (
                <Important  /> 
      ) }  
      {!showEx ? (
          ""
              ) : (
                <ExtraCrew  /> 
      ) }  
      {/* create/edit buttons textTransform: 'uppercase', */}
      {id ? (
        <div >
        <Row>
        <Col>
        <p className={`${styles.SmallCrew} text-center`} 
          style={{ fontStyle: 'italic'}}>
          Add/Edit Callsheet Main Crew here
          </p>
        </Col>
        </Row>
        <Row className='mt-2'>
        <Col className='text-center d-none d-md-block'>
        <Button onClick={() => history.push("crewinfo/edit/1")}
          className={`${btnStyles.Button} ${btnStyles.Shed} ${btnStyles.Wide4}`}>
          ADD/EDIT CALLSHEET MAIN CREW</Button>
        </Col>
        <Col className='text-center d-block d-md-none'>
        <Button onClick={() => history.push("crewinfo/edit/1")}
          className={`${btnStyles.Button} ${btnStyles.Shed} ${btnStyles.Wide3}`}>
          ADD/EDIT MAIN CREW</Button>
        </Col>
        </Row>
        </div>
      ) : (
        <CreateOnce />
      )}
      {/* style={{fontStyle: 'italic' }} */}
      <Row className='text-center mt-4'>
      <Col>
      <p className={`${styles.SmallCrew} text-center`} 
      style={{fontStyle: 'italic' }}>
      View Callsheet Main Crew here by Department
      </p>
      <p className={`${styles.SmallCrew} text-center`} 
      style={{fontStyle: 'italic' }}>
        Add/View Non-Callsheet Extra Crew at the bottom of each Department
      </p>
      </Col>
      </Row>
      {/* department buttons */}
      <div className={` mt-2 ${styles.White }`}> 
        <Row className={`${styles.ButtonLine} mt-0`}>
          <Col md={{span: 4, offset: 4}} className='text-center'>
              <p
                className={`py-0 mb-0 ${styles.Button}`}
                onClick={() => setShowCom(showCom => !showCom)} > Company
              </p>
          </Col>
        </Row>  
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
          <Col xs={4} md={2} className='mx-0 px-0 pt-1 text-center'>
            <p
                className={`py-0 mb-0 ${styles.Button}`}
                onClick={() => setShowSou(showSou => !showSou)} > Sound
            </p>
          </Col>
          <Col xs={4} md={2} className='mx-0 px-0 pt-1 text-center'>
          <p
              className={`py-0 mb-0 ${styles.Button}`}
              onClick={() => setShowStu(showStu => !showStu)} >Stunts/SFX
          </p>
          </Col>
          <Col xs={4} md={2} className='mx-0 px-0 pt-1 text-center'>
            <p
                className={`py-0 mb-0 ${styles.Button}`}
                onClick={() => setShowArt(showArt => !showArt)} > Art
            </p>
          </Col>
          <Col xs={4} md={2} className='mx-0 px-0 pt-1 text-center'>
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
                  className={`d-block d-lg-none py-0 mb-0 ${styles.Button}`}
                  onClick={() => setShowWra(showWra => !showWra)} > Construction/Wr
              </p>
              <p
                  className={`d-none d-lg-block py-0 mb-0 ${styles.Button}`}
                  onClick={() => setShowWra(showWra => !showWra)} > Construction/Wrangling
              </p>
          </Col>
        <Col xs={4} md={2} className='mx-0 px-0 pt-1 text-center'>
            <p
                className={`py-0 mb-0 ${styles.Button}`}
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
        <p className={`mt-1 pl-3 mb-0 pt-1 ${styles.SubTitle }`}></p>
        <div className={`py-1 ${styles.White }`}>
      </div>
      </div>
      {/* departments */}
      <div className='mt-0'>
      {/* Info Company */}
      {!showCom ? (
              ""
            ) : (
              <InfoCompany crewInfoOne={crewInfoOne} setShowCom={setShowCom} /> 
              ) } 
      {/* Info Production */}
      {!showPro ? (
              ""
            ) : (
              <InfoProduction crewInfoOne={crewInfoOne} setShowPro={setShowPro} /> 
              ) }  
      {/* Info Casting */}
      {!showCas ? (
              ""
            ) : (
              <InfoCasting crewInfoOne={crewInfoOne} setShowCas={setShowCas} /> 
              ) }
      {/* Info AD/PA */}
      {!showAD ? (
              ""
            ) : (
              <InfoADPA crewInfoOne={crewInfoOne} setShowAD={setShowAD} /> 
              ) } 
      {/* Info Locations */}
      {!showLoc ? (
              ""
            ) : (
              <InfoLocations crewInfoOne={crewInfoOne} setShowLoc={setShowLoc} /> 
              ) } 
      {/* Info Script  */}
      {!showScr ? (
              ""
            ) : (
              <InfoScript crewInfoOne={crewInfoOne} setShowScr={setShowScr} /> 
              )}
      {/* Info Catering  */}
      {!showCat ? (
              ""
            ) : (
              <InfoCater crewInfoOne={crewInfoOne} setShowCat={setShowCat} /> 
              ) }  
      {/* Info Electric */}
      {!showEle ? (
              ""
            ) : (
              <InfoElectric crewInfoOne={crewInfoOne} setShowEle={setShowEle} /> 
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
      {/* Info Transport */}
      {!showTra ? (
              ""
            ) : (
              <InfoTransport crewInfoOne={crewInfoOne} setShowTra={setShowTra} /> 
              ) } 
      {/* Info Stunts */}
      {!showStu ? (
              ""
            ) : (
              <InfoStunts crewInfoOne={crewInfoOne} setShowStu={setShowStu} /> 
              ) }
      {/* Info Post */}
      {!showPos ? (
              ""
            ) : (
              <InfoPostVFX crewInfoOne={crewInfoOne} setShowPos={setShowPos} /> 
              ) } 
      {/* Info Wrangling */}
      {!showWra ? (
              ""
            ) : (
              <InfoWrangling crewInfoOne={crewInfoOne} setShowWra={setShowWra} /> 
              ) } 
      {/* Info Art */}
      {!showArt ? (
              ""
            ) : (
              <InfoArt crewInfoOne={crewInfoOne} setShowArt={setShowArt} /> 
              ) } 
      {/* Info Camera */}
      {!showCam ? (
              ""
            ) : (
              <InfoCamera crewInfoOne={crewInfoOne} setShowCam={setShowCam} /> 
              ) } 
      {/* Info Wardrobe  */}
      {!showWar ? (
              ""
            ) : (
              <InfoWardrobe crewInfoOne={crewInfoOne} setShowWar={setShowWar} /> 
              ) }
      {/* Info TV  */}
      {!showTv ? (
              ""
            ) : (
              <InfoTVStudio crewInfoOne={crewInfoOne} setShowTv={setShowTv} /> 
              ) } 
      {/* Info Additional  */}
      {!showAdd ? (
              ""
            ) : (
              <InfoAdditional crewInfoOne={crewInfoOne} setShowAdd={setShowAdd} /> 
              ) } 
      </div>
    </div>
  )
}

export default CrewInfo