import React, { useState } from 'react';
import { useRedirect } from '../../hooks/Redirect';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import styles from "../../styles/Callsheets.module.css";
import btnStyles from "../../styles/Button.module.css";
import { useHistory } from 'react-router-dom';
import { useCrewInfoContext } from "../../contexts/BaseCallContext";
import CreateOnce from './CreateOnce';
import InfoProduction from "./InfoProduction";
import InfoCamera from './InfoCamera';
import InfoCompany from './InfoCompany';
import InfoCasting from './InfoCasting';
import InfoLocations from './InfoLocations';
import InfoWardrobe from './InfoWardrobe';
import InfoScript from "./InfoScript";
import InfoElectric from './InfoElectric';
import InfoMakeup from './InfoMakeup';
import InfoArt from './InfoArt';
import InfoSound from './InfoSound';
import InfoStunts from './InfoStunts';
import InfoPost from './InfoPost';
import TopBox from '../../components/TopBox';

const CrewInfo = () => {
  useRedirect("loggedOut");
  const history = useHistory();
  const crewInfo = useCrewInfoContext();
  const crewInfoOne = crewInfo.results[0];
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
  const { id } = crewInfoOne|| {};

  return (
    <div className='mt-3 pb-5'>
      <TopBox work="Crew Info" />
      <Button
            className={`${btnStyles.Button} ${btnStyles.Blue} py-0 mt-1`}
            onClick={() => history.goBack()}
        >
            Back
        </Button>   
      {/* <h4 style={{ textTransform: 'uppercase'}} 
      className={`text-center mt-1 mb-4 pl-3 py-1 ${styles.SubTitle }`}>
        CREW INFO</h4> */}
      {id ? (
        ""
      ) : (
        <CreateOnce />
      )}
      {/* edit */}
      <Row className='mt-3'>
          <Col className='text-center'>
          <Button onClick={() => history.push("crewinfo/edit/1")}
            className={`px-5 ${btnStyles.Button} ${btnStyles.Shed}`}>
            Add / Edit Info</Button>
          </Col>
      </Row>
      <div className='my-3'>
        <Row className={`${styles.ButtonLine} mt-0`}>
          <Col xs={{span: 4, offset: 4}} md={{span: 4, offset: 4}} className='text-center'>
              <p
                className={`py-0 mb-0 ${styles.Button}`}
                onClick={() => setShowCom(showCom => !showCom)} > Company
              </p>
          </Col>
        </Row>  
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
        <p className={`mt-1 pl-3 mb-0 py-1 ${styles.SubTitle }`}></p>
      </div>
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
              <InfoArt crewInfoOne={crewInfoOne} setShowArt={setShowArt} /> 
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
      <Row className="my-3">
      <Col className="d-none d-md-block" md={2}></Col>     
      <Col xs={12} md={8} >
      <div className={`text-center px-3 pt-1 ${styles.SubTitle2 }`}>
      <h5 className={`text-center ${styles.Red }`} >IMPORTANT</h5>  
      <p className={`text-center px-3 pt-1 ${styles.Red }`}>
        All Crew Members MUST BE Registered
        </p>     
        <p className={`text-center px-3 py-2 ${styles.SubTitle2 }`}>
          Register an account for each crew member 
          using their position's Username.
          Send the Shot Caller link to them with the Username 
          and whatever password you used instructing them 
          to sign in and change their password.
        </p>
      </div>
      </Col>
    </Row>
    </div>
  )
}

export default CrewInfo