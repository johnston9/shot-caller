import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import styles from "../../styles/Callsheets.module.css";
import btnStyles from "../../styles/Button.module.css";
import { useHistory, useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import TopBox from "../../components/TopBox";
import { useRedirect } from "../../hooks/Redirect";
import { useCrewInfoContext } from "../../contexts/BaseCallContext";
import AddCast from "./AddCast";
import CallsheetSchedule from "./CallsheetSchedule";
import AddBackGround from "./AddBackGround";
import AddProduction from './AddProduction';
import AddCamera from './AddCamera';
import AddCastingAD from './AddCastingAD';
import AddLocations from './AddLocations';
import AddWardrobe from './AddWardrobe';
import AddScriptCater from "./AddScriptCater";
import AddElectricGrip from './AddElectricGrip';
import AddMakeup from './AddMakeup';
import AddArt from './AddArt';
import AddSoundTransport from './AddSoundTransport';
import AddStunts from './AddStunts';
import AddPostAdditional from './AddPostAdditional';


const CallsheetEdit = () => {
    useRedirect("loggedOut");
  const [errors, setErrors] = useState({});
  const { id } = useParams();
  const history = useHistory();
  const crewInfo = useCrewInfoContext();
  const crewInfoOne = crewInfo.results[0];
  const [showSchedule, setShowSchedule] = useState(false);
  const [showAddCast, setShowAddCast] = useState(false);
  const [showAddBg, setShowAddBg] = useState(false);
  const [showSideBySide, setShowSideBySide] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  // eslint-disable-next-line
  const [dayData, setDayData] = useState({ results: [] });
  const [scenes, setScenes] = useState({ results: [] });
  const [callsheet, setCallsheet] = useState({ results: [] });
  const [dataDay, setDataDay] = useState("");
  const [dataDate, setDataDate] = useState("");
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
    <div>CallsheetEdit</div>
  )
}

export default CallsheetEdit