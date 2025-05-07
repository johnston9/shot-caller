/* Component in ScenePage to display the Scene data
 * Contains the CharactersBG, Breakdown, Script, ShotlistPage,
   Storyboard, WorkspaceGuideForm and WorkspaceGuideEdit components 
   each of which deals with a section of the Scene data
 * Potential change to the department images:
   A/ The categories Finals, Shooting and Info will be removed
   B/ The actual image when clicked opens the dropdowm menu
   c/ The department images will be changed to have a top half
    and bottom half both slightly differently shaded by opacity.
    The top one will say Requirements and the other Workspace both 
    with links to these Post pages. */
import React, { useEffect, useState } from 'react'
import {  Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { axiosReq } from '../../api/axiosDefaults';
import { useSetCategoryContext, useSetDeptContext, 
  useSetNumberContext, 
  useSetSceneContext } from '../../contexts/DeptCategoryContext';
import styles from "../../styles/Scene.module.css";
import dep1 from "../../assets/dep1.png";
import dep2 from "../../assets/dep2.png";
import dep3 from "../../assets/dep3.png";
import dep4 from "../../assets/dep4.png";
import dep5 from "../../assets/dep5.png";
import dep6 from "../../assets/dep6.png";
import dep7 from "../../assets/dep7.png";
import dep8 from "../../assets/dep8.png";
import dep9 from "../../assets/dep9.png";
import dep10 from "../../assets/dep10.png";
import dep11 from "../../assets/dep11.png";
import dep12 from "../../assets/dep12.png";
import dep13 from "../../assets/dep13.png";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import btnStyles from "../../styles/Button.module.css";
import { Button } from 'react-bootstrap';
import { DeptDropdown, PostDropdown } from '../../components/PostDropdown';
import ShotlistPage from './shotlistStoryboard/ShotlistPage';
import WorkspaceGuideForm from './WorkspaceGuideForm';
import WorkspaceGuideEdit from './WorkspaceGuideEdit';
import Breakdown from './breakdown/Breakdown';
import Storyboard from './shotlistStoryboard/Storyboard';
import TopBox from '../../components/TopBox';
import InfoScenePage from './info/InfoScenePage';
import InfoWorkspace from './info/InfoWorkspace';
import Script from './scriptAndSceneScript/ScriptScene';
import CharactersBG from './charactersBg/CharactersBG';
import StoryboardforSList from './shotlistStoryboard/StoryboardforSList';
import { toast } from 'react-toastify';

const Scene = (props) => {
    const [showScript, setShowScript] = useState(false);
    const [showlist, setShowlist] = useState(false);
    const [showBreak, setShowBreak] = useState(false);
    const [showCharactersBG, setShowCharactersBG] = useState(false);
    const [showstory, setShowstory] = useState(false);
    const [showStoryShot, setShowStoryShot] = useState(false);
    const [showGuide, setShowGuide] = useState(false);
    const [showGuideEdit, setShowGuideEdit] = useState(false);
    const setSceneId = useSetSceneContext();
    const setNumber = useSetNumberContext();
    const setDept = useSetDeptContext();
    const setCategory = useSetCategoryContext();
    const { id, number, storyboard, script,
      workspace_guide, admin, posts,
      scene, setScene } = props;
    const history = useHistory();
    const [showInfo, setShowInfo] = useState(false);
    const [showWorkInfo, setShowWorkInfo] = useState(false);

    const handleEdit = () => {
      history.push(`/scenes/${id}/edit`);
    };

    const handleDelete = async () => {
      try {
        await axiosReq.delete(`/scenes/${id}/`);
        toast.success(`Scene Deleted`);
        history.push(`/scenes`);
      } catch (err) {
      }
    }; 

    /* Functions to get departments total posts  */

        // CAMERA
        const camReqUnopen = posts.filter(post => post.departments === "camera" 
          && post.category === "requirements" && post.opened_id === null).length;

        const camWorkUnopen = posts.filter(post => post.departments === "camera" 
          && post.category === "workspace" && post.opened_id === null).length;

        const camFinUnopen = posts.filter(post => post.departments === "camera" 
          && post.category === "finals" && post.opened_id === null).length;

        const camReqOpen = posts.filter(post => post.departments === "camera" 
          && post.category === "requirements" && post.opened_id).length;

        const camWorkOpen = posts.filter(post => post.departments === "camera" 
          && post.category === "workspace" && post.opened_id).length;

        const camFinOpen = posts.filter(post => post.departments === "camera" 
          && post.category === "finals" && post.opened_id).length;

        // SOUND
        const souReqUnopen = posts.filter(post => post.departments === "sound" 
          && post.category === "requirements" && post.opened_id === null).length;

        const souWorkUnopen = posts.filter(post => post.departments === "sound" 
          && post.category === "workspace" && post.opened_id === null).length;

        const souFinUnopen = posts.filter(post => post.departments === "sound" 
          && post.category === "finals" && post.opened_id === null).length;

        const souReqOpen = posts.filter(post => post.departments === "sound" 
          && post.category === "requirements" && post.opened_id).length;

        const souWorkOpen = posts.filter(post => post.departments === "sound" 
          && post.category === "workspace" && post.opened_id).length;

        const souFinOpen = posts.filter(post => post.departments === "sound" 
          && post.category === "finals" && post.opened_id).length;

        // LOCATION
        const locReqUnopen = posts.filter(post => post.departments === "location" 
          && post.category === "requirements" && post.opened_id === null).length;

        const locWorkUnopen = posts.filter(post => post.departments === "location" 
          && post.category === "workspace" && post.opened_id === null).length;

        const locFinUnopen = posts.filter(post => post.departments === "location" 
          && post.category === "finals" && post.opened_id === null).length;

        const locReqOpen = posts.filter(post => post.departments === "location" 
          && post.category === "requirements" && post.opened_id).length;

        const locWorkOpen = posts.filter(post => post.departments === "location" 
          && post.category === "workspace" && post.opened_id).length;

        const locFinOpen = posts.filter(post => post.departments === "location" 
          && post.category === "finals" && post.opened_id).length;

          // SCRIPT
          const scrReqUnopen = posts.filter(post => post.departments === "script" 
            && post.category === "requirements" && post.opened_id === null).length;
  
          const scrWorkUnopen = posts.filter(post => post.departments === "script" 
            && post.category === "workspace" && post.opened_id === null).length;
  
          const scrFinUnopen = posts.filter(post => post.departments === "script" 
            && post.category === "finals" && post.opened_id === null).length;
  
          const scrReqOpen = posts.filter(post => post.departments === "script" 
            && post.category === "requirements" && post.opened_id).length;
  
          const scrWorkOpen = posts.filter(post => post.departments === "script" 
            && post.category === "workspace" && post.opened_id).length;
  
          const scrFinOpen = posts.filter(post => post.departments === "script" 
            && post.category === "finals" && post.opened_id).length;

          // ART
          const artReqUnopen = posts.filter(post => post.departments === "art" 
            && post.category === "requirements" && post.opened_id === null).length;
  
          const artWorkUnopen = posts.filter(post => post.departments === "art" 
            && post.category === "workspace" && post.opened_id === null).length;
  
          const artFinUnopen = posts.filter(post => post.departments === "art" 
            && post.category === "finals" && post.opened_id === null).length;
  
          const artReqOpen = posts.filter(post => post.departments === "art" 
            && post.category === "requirements" && post.opened_id).length;
  
          const artWorkOpen = posts.filter(post => post.departments === "art" 
            && post.category === "workspace" && post.opened_id).length;
  
          const artFinOpen = posts.filter(post => post.departments === "art" 
            && post.category === "finals" && post.opened_id).length;

          // makeup
          const makReqUnopen = posts.filter(post => post.departments === "make-up" 
            && post.category === "requirements" && post.opened_id === null).length;
  
          const makWorkUnopen = posts.filter(post => post.departments === "make-up" 
            && post.category === "workspace" && post.opened_id === null).length;
  
          const makFinUnopen = posts.filter(post => post.departments === "make-up" 
            && post.category === "finals" && post.opened_id === null).length;
  
          const makReqOpen = posts.filter(post => post.departments === "make-up" 
            && post.category === "requirements" && post.opened_id).length;
  
          const makWorkOpen = posts.filter(post => post.departments === "make-up" 
            && post.category === "workspace" && post.opened_id).length;
  
          const makFinOpen = posts.filter(post => post.departments === "make-up" 
            && post.category === "finals" && post.opened_id).length;

          // COSTUME
          const warReqUnopen = posts.filter(post => post.departments === "wardrobe" 
            && post.category === "requirements" && post.opened_id === null).length;
  
          const warWorkUnopen = posts.filter(post => post.departments === "wardrobe" 
            && post.category === "workspace" && post.opened_id === null).length;
  
          const warFinUnopen = posts.filter(post => post.departments === "wardrobe" 
            && post.category === "finals" && post.opened_id === null).length;
  
          const warReqOpen = posts.filter(post => post.departments === "wardrobe" 
            && post.category === "requirements" && post.opened_id).length;
  
          const warWorkOpen = posts.filter(post => post.departments === "wardrobe" 
            && post.category === "workspace" && post.opened_id).length;
  
          const warFinOpen = posts.filter(post => post.departments === "wardrobe" 
            && post.category === "finals" && post.opened_id).length;

          // CASTING
          const casReqUnopen = posts.filter(post => post.departments === "casting" 
            && post.category === "requirements" && post.opened_id === null).length;
  
          const casWorkUnopen = posts.filter(post => post.departments === "casting" 
            && post.category === "workspace" && post.opened_id === null).length;
  
          const casFinUnopen = posts.filter(post => post.departments === "casting" 
            && post.category === "finals" && post.opened_id === null).length;
  
          const casReqOpen = posts.filter(post => post.departments === "casting" 
            && post.category === "requirements" && post.opened_id).length;
  
          const casWorkOpen = posts.filter(post => post.departments === "casting" 
            && post.category === "workspace" && post.opened_id).length;
  
          const casFinOpen = posts.filter(post => post.departments === "casting" 
            && post.category === "finals" && post.opened_id).length;

          // CASTING
          const posReqUnopen = posts.filter(post => post.departments === "post" 
            && post.category === "requirements" && post.opened_id === null).length;
  
          const posWorkUnopen = posts.filter(post => post.departments === "post" 
            && post.category === "workspace" && post.opened_id === null).length;
  
          const posFinUnopen = posts.filter(post => post.departments === "post" 
            && post.category === "finals" && post.opened_id === null).length;
  
          const posReqOpen = posts.filter(post => post.departments === "post" 
            && post.category === "requirements" && post.opened_id).length;
  
          const posWorkOpen = posts.filter(post => post.departments === "post" 
            && post.category === "workspace" && post.opened_id).length;
  
          const posFinOpen = posts.filter(post => post.departments === "post" 
            && post.category === "finals" && post.opened_id).length;

          // PRODUCTION
          const proReqUnopen = posts.filter(post => post.departments === "production" 
            && post.category === "requirements" && post.opened_id === null).length;
  
          const proWorkUnopen = posts.filter(post => post.departments === "production" 
            && post.category === "workspace" && post.opened_id === null).length;
  
          const proFinUnopen = posts.filter(post => post.departments === "production" 
            && post.category === "finals" && post.opened_id === null).length;
  
          const proReqOpen = posts.filter(post => post.departments === "production" 
            && post.category === "requirements" && post.opened_id).length;
  
          const proWorkOpen = posts.filter(post => post.departments === "production" 
            && post.category === "workspace" && post.opened_id).length;
  
          const proFinOpen = posts.filter(post => post.departments === "production" 
            && post.category === "finals" && post.opened_id).length;

          // STUNTS
          const stuReqUnopen = posts.filter(post => post.departments === "stunts" 
            && post.category === "requirements" && post.opened_id === null).length;
  
          const stuWorkUnopen = posts.filter(post => post.departments === "stunts" 
            && post.category === "workspace" && post.opened_id === null).length;
  
          const stuFinUnopen = posts.filter(post => post.departments === "stunts" 
            && post.category === "finals" && post.opened_id === null).length;
  
          const stuReqOpen = posts.filter(post => post.departments === "stunts" 
            && post.category === "requirements" && post.opened_id).length;
  
          const stuWorkOpen = posts.filter(post => post.departments === "stunts" 
            && post.category === "workspace" && post.opened_id).length;
  
          const stuFinOpen = posts.filter(post => post.departments === "stunts" 
            && post.category === "finals" && post.opened_id).length;

          // ELECTRIC
          const eleReqUnopen = posts.filter(post => post.departments === "electric" 
            && post.category === "requirements" && post.opened_id === null).length;
  
          const eleWorkUnopen = posts.filter(post => post.departments === "electric" 
            && post.category === "workspace" && post.opened_id === null).length;
  
          const eleFinUnopen = posts.filter(post => post.departments === "electric" 
            && post.category === "finals" && post.opened_id === null).length;
  
          const eleReqOpen = posts.filter(post => post.departments === "electric" 
            && post.category === "requirements" && post.opened_id).length;
  
          const eleWorkOpen = posts.filter(post => post.departments === "electric" 
            && post.category === "workspace" && post.opened_id).length;
  
          const eleFinOpen = posts.filter(post => post.departments === "electric" 
            && post.category === "finals" && post.opened_id).length;

          // UNIVERSAL
    const uniReqUnopen = posts.filter(post => post.departments === "universal" 
      && post.category === "requirements" && post.opened_id === null).length;

    const uniWorkUnopen = posts.filter(post => post.departments === "universal" 
      && post.category === "workspace" && post.opened_id === null).length;

    const uniFinUnopen = posts.filter(post => post.departments === "universal" 
      && post.category === "finals" && post.opened_id === null).length;

    const uniReqOpen = posts.filter(post => post.departments === "universal" 
      && post.category === "requirements" && post.opened_id).length;

    const uniWorkOpen = posts.filter(post => post.departments === "universal" 
      && post.category === "workspace" && post.opened_id).length;

    const uniFinOpen = posts.filter(post => post.departments === "universal" 
      && post.category === "finals" && post.opened_id).length;

    // result = posts.reduce((a,o)=>(arr1.find(n=>n.completedBy==o.id)?.score || 0)+a,0);

    /* The following 13 functions take the user to that Scenes 
       department and category they choose by setting the 
       useSetCategoryContext, useSetDeptContext, useSetNumberContext,
       and useSetSceneContext 
     * These values will be read in App.js and passed as a filter
       to The /dept/category Route */
    
       const handleClickCameraReq = () => {
        setSceneId(id); 
        setNumber(number);
        setDept("camera");
        setCategory("requirements");
        history.push(`/dept/category`);  
      };

      const handleClickCameraWor = () => {
        setSceneId(id); 
        setNumber(number);
        setDept("camera");
        setCategory("workspace");
        history.push(`/dept/category`); 
      };

      const handleClickCameraFin = () => {
        setSceneId(id); 
        setNumber(number);
        setDept("camera");
        setCategory("finals");
        history.push(`/dept/category`);  
      };

    const handleClickCamera = (category) => {
      setSceneId(id); 
      setNumber(number);
      setDept("camera");
      setCategory(category);
      history.push(`/dept/category`);

    };

    const handleClickSoundReq = () => {
      setSceneId(id); 
      setNumber(number);
      setDept("sound");
      setCategory("requirements");
      history.push(`/dept/category`);  
    };

    const handleClickSoundWor = () => {
      setSceneId(id); 
      setNumber(number);
      setDept("sound");
      setCategory("workspace");
      history.push(`/dept/category`); 
    };

    const handleClickSoundFin = () => {
      setSceneId(id); 
      setNumber(number);
      setDept("sound");
      setCategory("finals");
      history.push(`/dept/category`);  
    };

    const handleClickSound = (category) => {
      setSceneId(id); 
      setNumber(number);
      setDept("sound");
      setCategory(category);
      history.push(`/dept/category`);

    };

    const handleClickLocationReq = () => {
      setSceneId(id); 
      setNumber(number);
      setDept("location");
      setCategory("requirements");
      history.push(`/dept/category`);  
    };

    const handleClickLocationWor = () => {
      setSceneId(id); 
      setNumber(number);
      setDept("location");
      setCategory("workspace");
      history.push(`/dept/category`); 
    };

    const handleClickLocationFin = () => {
      setSceneId(id); 
      setNumber(number);
      setDept("location");
      setCategory("finals");
      history.push(`/dept/category`);  
    };

    const handleClickLocation = (category) => {
      setSceneId(id); 
      setNumber(number);
      setDept("location");
      setCategory(category);
      history.push(`/dept/category`);

    };
    
    const handleClickScriptReq = () => {
      setSceneId(id); 
      setNumber(number);
      setDept("script");
      setCategory("requirements");
      history.push(`/dept/category`);  
    };

    const handleClickScriptWor = () => {
      setSceneId(id); 
      setNumber(number);
      setDept("script");
      setCategory("workspace");
      history.push(`/dept/category`); 
    };

    const handleClickScriptFin = () => {
      setSceneId(id); 
      setNumber(number);
      setDept("script");
      setCategory("finals");
      history.push(`/dept/category`);  
    };

    const handleClickScript = (category) => {
      setSceneId(id); 
      setNumber(number);
      setDept("script");
      setCategory(category);
      history.push(`/dept/category`);

    };

    const handleClickArtReq = () => {
      setSceneId(id); 
      setNumber(number);
      setDept("art");
      setCategory("requirements");
      history.push(`/dept/category`);  
    };

    const handleClickArtWor = () => {
      setSceneId(id); 
      setNumber(number);
      setDept("art");
      setCategory("workspace");
      history.push(`/dept/category`); 
    };

    const handleClickArtFin = () => {
      setSceneId(id); 
      setNumber(number);
      setDept("art");
      setCategory("finals");
      history.push(`/dept/category`);  
    };

    const handleClickArt = (category) => {
      setSceneId(id); 
      setNumber(number);
      setDept("art");
      setCategory(category);
      history.push(`/dept/category`);

    };

    const handleClickMakeupReq = () => {
      setSceneId(id); 
      setNumber(number);
      setDept("make-up");
      setCategory("requirements");
      history.push(`/dept/category`);  
    };

    const handleClickMakeupWor = () => {
      setSceneId(id); 
      setNumber(number);
      setDept("make-up");
      setCategory("workspace");
      history.push(`/dept/category`); 
    };

    const handleClickMakeupFin = () => {
      setSceneId(id); 
      setNumber(number);
      setDept("make-up");
      setCategory("finals");
      history.push(`/dept/category`);  
    };

    const handleClickMakeup = (category) => {
      setSceneId(id); 
      setNumber(number);
      setDept("make-up");
      setCategory(category);
      history.push(`/dept/category`);

    };

    const handleClickWardrobeReq = () => {
      setSceneId(id); 
      setNumber(number);
      setDept("wardrobe");
      setCategory("requirements");
      history.push(`/dept/category`);  
    };

    const handleClickWardrobeWor = () => {
      setSceneId(id); 
      setNumber(number);
      setDept("wardrobe");
      setCategory("workspace");
      history.push(`/dept/category`); 
    };

    const handleClickWardrobeFin = () => {
      setSceneId(id); 
      setNumber(number);
      setDept("wardrobe");
      setCategory("finals");
      history.push(`/dept/category`);  
    };

    const handleClickWardrobe = (category) => {
      setSceneId(id); 
      setNumber(number);
      setDept("wardrobe");
      setCategory(category);
      history.push(`/dept/category`);

    };

    const handleClickCastingReq = () => {
      setSceneId(id); 
      setNumber(number);
      setDept("casting");
      setCategory("requirements");
      history.push(`/dept/category`);  
    };

    const handleClickCastingWor = () => {
      setSceneId(id); 
      setNumber(number);
      setDept("casting");
      setCategory("workspace");
      history.push(`/dept/category`); 
    };

    const handleClickCastingFin = () => {
      setSceneId(id); 
      setNumber(number);
      setDept("casting");
      setCategory("finals");
      history.push(`/dept/category`);  
    };

    const handleClickCasting = (category) => {
      setSceneId(id); 
      setNumber(number);
      setDept("casting");
      setCategory(category);
      history.push(`/dept/category`);

    }; 

    const handleClickPostReq = () => {
      setSceneId(id); 
      setNumber(number);
      setDept("post");
      setCategory("requirements");
      history.push(`/dept/category`);  
    };

    const handleClickPostWor = () => {
      setSceneId(id); 
      setNumber(number);
      setDept("post");
      setCategory("workspace");
      history.push(`/dept/category`); 
    };

    const handleClickPostFin = () => {
      setSceneId(id); 
      setNumber(number);
      setDept("post");
      setCategory("finals");
      history.push(`/dept/category`);  
    };

    const handleClickPost = (category) => {
      setSceneId(id); 
      setNumber(number);
      setDept("post");
      setCategory(category);
      history.push(`/dept/category`);

    };

    const handleClickProductionReq = () => {
      setSceneId(id); 
      setNumber(number);
      setDept("production");
      setCategory("requirements");
      history.push(`/dept/category`);  
    };

    const handleClickProductionWor = () => {
      setSceneId(id); 
      setNumber(number);
      setDept("production");
      setCategory("workspace");
      history.push(`/dept/category`); 
    };

    const handleClickProductionFin = () => {
      setSceneId(id); 
      setNumber(number);
      setDept("production");
      setCategory("finals");
      history.push(`/dept/category`);  
    };

    const handleClickProduction = (category) => {
      setSceneId(id); 
      setNumber(number);
      setDept("production");
      setCategory(category);
      history.push(`/dept/category`);

    };

    const handleClickStuntsReq = () => {
      setSceneId(id); 
      setNumber(number);
      setDept("stunts");
      setCategory("requirements");
      history.push(`/dept/category`);  
    };

    const handleClickStuntsWor = () => {
      setSceneId(id); 
      setNumber(number);
      setDept("stunts");
      setCategory("workspace");
      history.push(`/dept/category`); 
    };

    const handleClickStuntsFin = () => {
      setSceneId(id); 
      setNumber(number);
      setDept("stunts");
      setCategory("finals");
      history.push(`/dept/category`);  
    };

    const handleClickStunts = (category) => {
      setSceneId(id); 
      setNumber(number);
      setDept("stunts");
      setCategory(category);
      history.push(`/dept/category`);

    };

    const handleClickElectricReq = () => {
      setSceneId(id); 
      setNumber(number);
      setDept("electric");
      setCategory("requirements");
      history.push(`/dept/category`);  
    };

    const handleClickElectricWor = () => {
      setSceneId(id); 
      setNumber(number);
      setDept("electric");
      setCategory("workspace");
      history.push(`/dept/category`); 
    };

    const handleClickElectricFin = () => {
      setSceneId(id); 
      setNumber(number);
      setDept("electric");
      setCategory("finals");
      history.push(`/dept/category`);  
    };

    const handleClickElectric = (category) => {
      setSceneId(id); 
      setNumber(number);
      setDept("electric");
      setCategory(category);
      history.push(`/dept/category`);
    };

    const handleClickUniversalReq = () => {
      setSceneId(id); 
      setNumber(number);
      setDept("universal");
      setCategory("requirements");
      history.push(`/dept/category`);  
    };

    const handleClickUniversalWor = () => {
      setSceneId(id); 
      setNumber(number);
      setDept("universal");
      setCategory("workspace");
      history.push(`/dept/category`); 
    };

    const handleClickUniversalFin = () => {
      setSceneId(id); 
      setNumber(number);
      setDept("universal");
      setCategory("finals");
      history.push(`/dept/category`);  
    };

    const handleClickUni = (category) => {
      setSceneId(id); 
      setNumber(number);
      setDept("universal");
      setCategory(category);
      history.push(`/dept/category`);
    };

    // const handleClickUniversal = () => {
    //   setSceneId(id); 
    //   setNumber(number);
    //   setDept("universal");
    //   setCategory("");
    //   history.push(`/dept/category`);
    // };

    const handleClickMoods = () => {
      /* Function to open the Scene MoodBoards page
       * Sets the SceneId and Number contexts
         These values will be read in App.js and passed as a filter
         to the /scene/moodshots Route */
      setSceneId(id); 
      setNumber(number);
      history.push(`/scene/moodshots`);

    };

    const clickScript = () => {
      history.push(`/script/scene/${id}`);
    };

    const clickStory = () => {
      history.push(`/story/scene/${id}`);
    };

    return (
        <div>
          {scene && (
          <>
          <TopBox title={`Scene ${number} `}/>
          <Button
              className={`${btnStyles.Button} ${btnStyles.Blue} my-2`}
              onClick={() => history.goBack()}
              >
              Back
          </Button>
          <Button
          className={`float-right py-0 my-2 ${btnStyles.Order} ${btnStyles.Button}`}
          onClick={() => setShowInfo(showInfo => !showInfo)} >INFO
          </Button>
          {!showInfo ? (
              ""
                  ) : (
                    <InfoScenePage  /> 
                    ) } 
            <div className={` ${styles.Header}`}>
              <div className='d-none d-md-block'>
                  <Row className={`${styles.ButtonLine} mt-2 mx-0`}>
                  <Col md={1}>
                        <p className={`py-0 mb-0 ${styles.Button}`}
                          onClick={() => clickScript()}> Script
                        </p>
                  </Col>
                    <Col md={2} className='text-center'>
                        <p
                          className={`py-0 mb-0 ${styles.Button}`}
                          onClick={() => handleClickMoods()} > Moodboards
                        </p>
                    </Col>
                    <Col md={2} className='text-center'>
                            <p
                              className={`py-0 mb-0 ${styles.Button}`}
                              onClick={() => setShowBreak(showBreak => !showBreak)} > Breakdown
                            </p>
                        </Col>
                    <Col md={2} className='text-center'>
                        <p
                          className={`py-0 mb-0 ${styles.Button}`}
                          onClick={() => setShowCharactersBG(showCharactersBG => !showCharactersBG)} >Characters/BG
                        </p>
                    </Col>
                    <Col className='text-center' md={2}>
                      <p
                          className={`py-0 mb-0 ${styles.Button}`}
                          onClick={() => clickStory()}> Storyboard
                      </p>
                    </Col>
                    <Col className='text-center' md={1}>
                    <p
                        className={`py-0 mb-0 ${styles.Button}`}
                        onClick={() => setShowlist(showlist => !showlist)} >Shotlist
                    </p>
                    </Col>
                    <Col className='text-center' md={1}>
                      <p
                          className={`py-0 mb-0 ${styles.Button}`}
                          onClick={() => setShowStoryShot(showStoryShot => !showStoryShot)} > Story/Shot
                      </p>
                    </Col>
                    <Col className='text-center pl-4' md={1}>
                    <PostDropdown
                            handleEdit={handleEdit}
                            handleDelete={handleDelete}
                        />
                    </Col>
                  </Row>  
              </div>
              <div className='d-block d-md-none'>
                  <Row className={`${styles.ButtonLine} mt-2`}>
                    <Col xs={2}></Col>
                    <Col xs={4} className='text-center'>
                            <p
                              className={`py-0 mb-0 ${styles.Button}`}
                              onClick={() => setShowBreak(showBreak => !showBreak)} > Breakdown
                            </p>
                    </Col>
                    <Col xs={4} className='text-center'>
                        {/* <p
                          className={`py-0 mb-0 ${styles.Button}`}
                          onClick={() => setShowScript(showScript => !showScript)} > Script
                        </p> */}
                        <p className={`py-0 mb-0 ${styles.Button}`}
                          onClick={() => clickScript()}> Script
                        </p>
                    </Col>
                    <Col className='text-center' xs={2}>
                    <PostDropdown
                            handleEdit={handleEdit}
                            handleDelete={handleDelete}
                        />
                    </Col>
                  </Row>
                  <Row >
                    <Col xs={1}></Col>
                    <Col xs={5} className='text-center'>
                        <p
                          className={`py-0 mb-0 ${styles.Button}`}
                          onClick={() => handleClickMoods()} > Moodboards
                        </p>
                    </Col>
                    <Col xs={4} className='text-center'>
                        <p
                          className={`py-0 mb-0 ${styles.Button}`}
                          onClick={() => setShowCharactersBG(showCharactersBG => !showCharactersBG)} >Characters/BG
                        </p>
                    </Col>
                  </Row>
                  <Row className='mt-3'>
                    <Col className='text-center' xs={4}>
                      {/* <p
                          className={`py-0 mb-0 ${styles.Button}`}
                          onClick={() => setShowstory(showstory => !showstory)} > Storyboard
                      </p> */}
                      <p
                          className={`py-0 mb-0 ${styles.Button}`}
                          onClick={() => clickStory()}> Storyboard
                      </p>
                    </Col>
                    <Col className='text-center' xs={4} >
                    <p
                        className={`py-0 mb-0 ${styles.Button}`}
                        onClick={() => setShowlist(showlist => !showlist)} >Shotlist
                    </p>
                    </Col>
                    <Col className='text-center' xs={4}>
                      <p
                          className={`py-0 mb-0 ${styles.Button}`}
                          onClick={() => setShowStoryShot(showStoryShot => !showStoryShot)} > Story/Shot
                      </p>
                    </Col>
                  </Row>  
              </div>
              </div>
              {/* Breakdown CharactersBG Script Moodboards Storyboard Slotlist ShotStory */}
              <div>
              {!showBreak ? (
                      ""
                    ) : (
                      <Breakdown 
                        id={id}
                        scene={scene} 
                        {...scene} 
                        setShowBreak={setShowBreak} 
                        setScene={setScene} /> 
                      ) }
                      {!showCharactersBG ? (
                      ""
                    ) : (
                      <CharactersBG
                        id={id}
                        setShowCharactersBG={setShowCharactersBG} 
                        admin={admin}
                        /> 
                      ) }    
                      {!showScript ? (
                      ""
                    ) : (
                      <Script scene={scene} script={script} 
                      setShowScript={setShowScript} setScene={setScene} /> 
                      ) }          
                    {!showstory ? (
                      ""
                    ) : (
                      <Storyboard storyboard={storyboard} 
                      setShowstory={setShowstory} scene={scene} 
                      setScene={setScene} />
                    ) }
                    {!showlist ? (
                      ""
                    ) : (
                      <ShotlistPage setShowlist={setShowlist} scene={scene} />
                    ) }
                    {!showStoryShot ? (
                      ""
                    ) : (                      
                      <Row>
                        <Col xs={12} lg={6} >
                        <StoryboardforSList
                        storyboard={storyboard}
                        />
                        </Col>
                        <Col xs={12} lg={6} >
                        <ShotlistPage setShowlist={setShowStoryShot} 
                        scene={scene} />
                        </Col>
                      </Row>             
                    ) }
              </div>
              {/* workspace */}
              <h5 style={{ textTransform: 'uppercase'}} 
                  className={`mt-1 mb-1 pl-3 py-2 ${styles.SubTitle } text-center`}>
                  SCENE WORKSPACE
              </h5>
              {/* Guide all */}
              <div>
              <Row>
                <Col>
                {workspace_guide ? (
                <Button 
                className={`px-sm-4 py-0 mt-1 ${btnStyles.GreyDark} ${btnStyles.Button}`}
                onClick={() => setShowGuideEdit(showGuideEdit => !showGuideEdit)} > 
                Edit Guide
              </Button>
              ) : (
                <Button 
                  className={` py-0 mt-1 ${btnStyles.GreyDark} ${btnStyles.Button}`}
                onClick={() => setShowGuide(showGuide => !showGuide)} >
                    Add Guide
              </Button>
              )}
            <Button 
                className={`float-right py-0 mt-1 ${btnStyles.GreyDark} ${btnStyles.Button}`}
              onClick={() => setShowWorkInfo(showWorkInfo => !showWorkInfo)} >INSTRUCTIONS
            </Button>
                </Col>
              </Row>
              {!showWorkInfo ? (
              ""
                  ) : (
                <InfoWorkspace 
                setShowWorkInfo={setShowWorkInfo} /> 
                ) } 
              <Row className='mb-2'>
                <Col md={1}></Col>
                <Col className='mx-0 px-0' xs={12} md={10} >
                {!showGuide ? (
                  ""
                ) : (
                  <WorkspaceGuideForm className="my-2" id={id} number={number} setShowGuide={setShowGuide} setScene={setScene} />
                ) }
                {!showGuideEdit ? (
                  ""
                ) : (
                  <WorkspaceGuideEdit className="my-2" id={id} number={number} setShowGuideEdit={setShowGuideEdit} setScene={setScene} />
                ) }
                </Col>
              </Row>
              {/* guide */}
              <Row>
                  <Col sm={{span: 10, offset: 1}} >
                  <div className={`my-3 pb-0 ${styles.Guide}`}>
                  <p style={{ textTransform: 'uppercase'}} 
                  className={`pb-0 mb-0 text-center ${styles.GuideTitle}`}  >
                    Workspace Guide</p>
                    <div className={`text-center px-3 pt-2`}>
                      {workspace_guide} </div>
                    </div>
                  </Col>
              </Row>
              </div>
              <Row>
              <Col>
              <h1 className='text-center'>HI DONNA</h1>
              </Col>
              </Row>
              
              {/* Department Image links Original */}
              <div >
              <h1>NO 1 - Original</h1>
              {/* Universal */}
              <Row className={`mt-1`} >
                  <Col xs={4}  ></Col>
                  <Col className='px-1 px-md-2' xs={4} >
                    {/* <Card className={` ${styles.CardBox}`} onClick={() => handleClickUniversal()}>
                    <Card.Img height={100} className={`text-center ${styles.UniImg}`}
                     src={dep8} alt="Card image" />
                    <Card.Title className={`text-center ${styles.Title}`} >Universal</Card.Title>
                    <DeptDropdown  handleClick={(category) => handleClickUni(category) } />
                    </Card> */}
                    <Card className={` ${styles.CardBox}`} >
                    <Card.Img height={100} className={`text-center ${styles.UniImg}`}
                     src={dep8} alt="Card image" />
                    <Card.Title className={`text-center ${styles.Title}`} >Universal</Card.Title>
                    <DeptDropdown  handleClick={(category) => handleClickUni(category) } />
                    </Card>
                  </Col>
              </Row>
              {/* Camera Sound */}
                  <Row className='px-2' >
                    <Col className='px-1 px-md-2' xs={4} md={3} lg={2} >
                    <Card className={` ${styles.CardBox} px-0`} >
                    <Card.Img src={dep2} alt="Card image" />
                    <Card.Title className={`text-center ${styles.Title}`} >Camera</Card.Title>
                    <DeptDropdown  handleClick={(category) => handleClickCamera(category) } />
                    </Card> 
                    </Col>
                    <Col className='px-1 px-md-2' xs={4} md={3} lg={2} >
                      <Card className={` ${styles.CardBox}`}>
                      <Card.Img src={dep3} alt="Card image" />
                      <Card.Title className={`text-center ${styles.Title}`} >Sound</Card.Title>
                      <DeptDropdown handleClick={(category) => handleClickSound(category) } />
                      </Card>
                    </Col>
                    <Col className='px-1 px-md-2' xs={4} md={3} lg={2} >
                      <Card className={` ${styles.CardBox}`}>
                      <Card.Img src={dep4} alt="Card image" />
                      <Card.Title className={`text-center ${styles.Title}`} >Location</Card.Title>
                      <DeptDropdown handleClick={(category) => handleClickLocation(category) } />
                      </Card>
                    </Col>
                    <Col className='px-1 px-md-2' xs={4} md={3} lg={2} >
                      <Card className={` ${styles.CardBox}`}>
                      <Card.Img src={dep5} alt="Card image" />
                      <Card.Title className={`text-center ${styles.Title}`} >Script</Card.Title>
                      <DeptDropdown handleClick={(category) => handleClickScript(category) } />
                      </Card>
                    </Col>
                    <Col className='px-1 px-md-2' xs={4} md={3} lg={2} >
                      <Card className={` ${styles.CardBox}`}>
                      <Card.Img src={dep6} alt="Card image" />
                      <Card.Title className={`text-center ${styles.Title}`} >Art</Card.Title>
                      <DeptDropdown handleClick={(category) => handleClickArt(category) } />
                      </Card>
                    </Col>
                    <Col className='px-1 px-md-2' xs={4} md={3} lg={2} >
                      <Card className={` ${styles.CardBox}`}>
                      <Card.Img src={dep7} alt="Card image" />
                      <Card.Title className={`text-center ${styles.Title}`} >Makeup</Card.Title>
                      <DeptDropdown handleClick={(category) => handleClickMakeup(category) } />
                      </Card>
                    </Col>
                    <Col className='px-1 px-md-2' xs={4} md={3} lg={2} >
                      <Card className={` ${styles.CardBox}`}>
                      <Card.Img src={dep9} alt="Card image" />
                      <Card.Title className={`text-center ${styles.Title}`} >Wardrobe</Card.Title>
                      <DeptDropdown handleClick={(category) => handleClickWardrobe(category) } />
                      </Card>
                    </Col>
                    <Col className='px-1 px-md-2' xs={4} md={3} lg={2} >
                      <Card className={` ${styles.CardBox}`}>
                      <Card.Img src={dep1} alt="Card image" />
                      <Card.Title className={`text-center ${styles.Title}`} >Casting</Card.Title>
                      <DeptDropdown handleClick={(category) => handleClickCasting(category) } />
                      </Card>
                    </Col>
                    <Col className='px-1 px-md-2' xs={4} md={3} lg={2} >
                      <Card className={` ${styles.CardBox}`}>
                      <Card.Img src={dep10} alt="Card image" />
                      <Card.Title className={`text-center ${styles.Title}`} >Post</Card.Title>
                      <DeptDropdown handleClick={(category) => handleClickPost(category) } />
                      </Card>
                    </Col>
                    <Col className='px-1 px-md-2' xs={4} md={3} lg={2} >
                      <Card className={` ${styles.CardBox}`}>
                      <Card.Img src={dep11} alt="Card image" />
                      <Card.Title className={`text-center ${styles.Title}`} >Production</Card.Title>
                      <DeptDropdown handleClick={(category) => handleClickProduction(category) } />
                      </Card>
                    </Col>
                    <Col className='px-1 px-md-2' xs={4} md={3} lg={2} >
                      <Card className={` ${styles.CardBox}`}>
                      <Card.Img src={dep12} alt="Card image" />
                      <Card.Title className={`text-center ${styles.Title}`} >Stunts</Card.Title>
                      <DeptDropdown handleClick={(category) => handleClickStunts(category) } />
                      </Card>
                    </Col>
                    <Col className='px-1 px-md-2' xs={4} md={3} lg={2} >
                      <Card className={` ${styles.CardBox}`}>
                      <Card.Img src={dep13} alt="Card image" />
                      <Card.Title className={`text-center ${styles.Title}`} >Electric</Card.Title>
                      <DeptDropdown handleClick={(category) => handleClickElectric(category) } />
                      </Card>
                    </Col>
                  </Row>
              </div>          

            {/* Department Image all white with color 4 */}
            <div className='mt-5 pt-5'>
              {/* Universal */}
              <Row className={`mt-1`} >
                  <Col xs={2} md={4}  ></Col>
                  <Col className='px-1 px-md-2' xs={8} md={4} >
                  <div className={` ${styles.CardBox2} px-2`}
                    style={{ backgroundColor: 'rgb(248 241 249)'}}
                    >
                      {/* read */}
                    <div className={`${styles.WhiteRead} mt-1`}>
                    <Row>
                    <Col xs={12} className={``}><p className='pl-3'>Read <span className='pr-3 float-right'>Unread</span> </p></Col>
                    </Row>
                    </div>
                    {/* requirements */}
                    <div className={` ${styles.WhiteReq} mt-1`} 
                    onClick={() => handleClickUniversalReq() }>
                    <Row className='py-2 py-md-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{uniReqOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className={`${styles.WhiteReq1} d-none d-sm-block`}> REQUIREMENTS</p>
                    <p className={`${styles.WhiteReq1} d-block d-sm-none`}> REQUIREM.</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`${styles.Red} float-left`}>{uniReqUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* workspace */}
                    <div className={` ${styles.WhiteReq} mt-1`}
                    onClick={() => handleClickUniversalWor() }>
                    <Row className='py-2 py-md-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{uniWorkOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > WORKSPACE</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{uniWorkUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* Finals */}
                    <div className={` ${styles.WhiteReq} my-1`}
                    onClick={() => handleClickUniversalFin() }>
                    <Row className='py-2 py-md-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{uniFinOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > FINALS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{uniFinUnopen}</p></Col>
                    </Row>
                    </div>
                    </div>
                    <p className={`text-center pt-1 ${styles.Bold}`}>UNIVERSAL</p>
                  </Col>
              </Row>
              {/* Camera Sound ... */}
              <Row className='px-2'>
              {/* CAMERA 1*/}
              <Col className='px-2 px-md-2' xs={6} sm={4} md={3} lg={2} >
                    <div className={` ${styles.CardBox2} px-2`}
                    style={{ backgroundColor: 'rgb(248 241 249)'}}
                    >
                      {/* read */}
                    <div className={`d-none d-sm-block ${styles.WhiteRead} mt-1`}>
                    <Row>
                      <Col xs={6} className={`text-center pr-5`}><p>Read</p></Col>
                      <Col xs={6} className={`text-center pl-4`}><p>Unread</p></Col>
                    </Row>
                    </div>
                    {/* read */}
                    <div className={`d-block d-sm-none ${styles.WhiteRead} mt-1`}>
                    <Row>
                      <Col xs={6} className={`text-center`}><p>Read</p></Col>
                      <Col xs={6} className={`float-right`}><p>Unread</p></Col>
                    </Row>
                    </div>
                    {/* requirements */}
                    <div className={` ${styles.WhiteReq} mt-1`} 
                    onClick={() => handleClickCameraReq() }>
                    <Row className='py-2 py-md-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{camReqOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className={`${styles.WhiteReq1} d-none d-sm-block`}> REQUIREMENTS</p>
                    <p className={`${styles.WhiteReq1} d-block d-sm-none`}> REQUIREM.</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`${styles.Red} float-left`}>{camReqUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* workspace */}
                    <div className={` ${styles.WhiteReq} mt-1`}
                    onClick={() => handleClickCameraWor() }>
                    <Row className='py-2 py-md-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{camWorkOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > WORKSPACE</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{camWorkUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* Finals */}
                    <div className={` ${styles.WhiteReq} my-1`}
                    onClick={() => handleClickCameraFin() }>
                    <Row className='py-2 py-md-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{camFinOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > FINALS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{camFinUnopen}</p></Col>
                    </Row>
                    </div>
                    </div>
                    <p className={`text-center pt-1 ${styles.Bold}`}>CAMERA</p>
              </Col>
              {/* SOUND 2 */}
              <Col className='px-2 px-md-2' xs={6} sm={4} md={3} lg={2} >
                    <div className={` ${styles.CardBox2} px-2`}
                    style={{ backgroundColor: '#dbfaf9'}}
                    >
                      {/* read */}
                    <div className={`d-none d-sm-block ${styles.WhiteRead} mt-1`}>
                    <Row>
                      <Col xs={6} className={`text-center pr-5`}><p>Read</p></Col>
                      <Col xs={6} className={`text-center pl-4`}><p>Unread</p></Col>
                    </Row>
                    </div>
                    {/* read */}
                    <div className={`d-block d-sm-none ${styles.WhiteRead} mt-1`}>
                    <Row>
                      <Col xs={6} className={`text-center`}><p>Read</p></Col>
                      <Col xs={6} className={`float-right`}><p>Unread</p></Col>
                    </Row>
                    </div>
                    {/* requirements */}
                    <div className={` ${styles.WhiteReq} mt-1`} 
                    onClick={() => handleClickSoundReq() }>
                    <Row className='py-2 py-md-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{souReqOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className={`${styles.WhiteReq1} d-none d-sm-block`}> REQUIREMENTS</p>
                    <p className={`${styles.WhiteReq1} d-block d-sm-none`}> REQUIREM.</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`${styles.Red} float-left`}>{souReqUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* workspace */}
                    <div className={` ${styles.WhiteReq} mt-1`}
                    onClick={() => handleClickSoundWor() }>
                    <Row className='py-2 py-md-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{souWorkOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > WORKSPACE</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{souWorkUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* Finals */}
                    <div className={` ${styles.WhiteReq} my-1`}
                    onClick={() => handleClickSoundFin() }>
                    <Row className='py-2 py-md-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{souFinOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className='d-block d-md-none'> FINALS</p>
                    <p className='d-none d-md-block'> FINALS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{souFinUnopen}</p></Col>
                    </Row>
                    </div>
                    </div>
                    <p className={`text-center ${styles.Bold}`}>SOUND</p>
              </Col>
              {/* LOCATION 3*/}
              <Col className='px-2 px-md-2' xs={6} sm={4} md={3} lg={2} >
                    <div className={` ${styles.CardBox2} px-2`}
                    style={{ backgroundColor: 'rgb(223 254 240)'}}
                    >
                      {/* read */}
                    <div className={`d-none d-sm-block ${styles.WhiteRead} mt-1`}>
                    <Row>
                      <Col xs={6} className={`text-center pr-5`}><p>Read</p></Col>
                      <Col xs={6} className={`text-center pl-4`}><p>Unread</p></Col>
                    </Row>
                    </div>
                    {/* read */}
                    <div className={`d-block d-sm-none ${styles.WhiteRead} mt-1`}>
                    <Row>
                      <Col xs={6} className={`text-center`}><p>Read</p></Col>
                      <Col xs={6} className={`float-right`}><p>Unread</p></Col>
                    </Row>
                    </div>
                    {/* requirements */}
                    <div className={` ${styles.WhiteReq} mt-1`} 
                    onClick={() => handleClickLocationReq() }>
                    <Row className='py-2 py-md-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locReqOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className={`${styles.WhiteReq1} d-none d-sm-block`}> REQUIREMENTS</p>
                    <p className={`${styles.WhiteReq1} d-block d-sm-none`}> REQUIREM.</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`${styles.Red} float-left`}>{locReqUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* workspace */}
                    <div className={` ${styles.WhiteReq} mt-1`}
                    onClick={() => handleClickLocationWor() }>
                    <Row className='py-2 py-md-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locWorkOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > WORKSPACE</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locWorkUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* Finals */}
                    <div className={` ${styles.WhiteReq} my-1`}
                    onClick={() => handleClickLocationFin() }>
                    <Row className='py-2 py-md-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locFinOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className='d-block d-md-none'> FINALS</p>
                    <p className='d-none d-md-block'> FINALS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locFinUnopen}</p></Col>
                    </Row>
                    </div>
                    </div>
                    <p className={`text-center ${styles.Bold}`}>LOCATION</p>
              </Col>
              {/* SCRIPT 4*/}
              <Col className='px-2 px-md-2' xs={6} sm={4} md={3} lg={2} >
                    <div className={` ${styles.CardBox2} px-2`}
                    style={{ backgroundColor: 'rgb(248 241 249)'}}
                    >
                      {/* read */}
                    <div className={`d-none d-sm-block ${styles.WhiteRead} mt-1`}>
                    <Row>
                      <Col xs={6} className={`text-center pr-5`}><p>Read</p></Col>
                      <Col xs={6} className={`text-center pl-4`}><p>Unread</p></Col>
                    </Row>
                    </div>
                    {/* read */}
                    <div className={`d-block d-sm-none ${styles.WhiteRead} mt-1`}>
                    <Row>
                      <Col xs={6} className={`text-center`}><p>Read</p></Col>
                      <Col xs={6} className={`float-right`}><p>Unread</p></Col>
                    </Row>
                    </div>
                    {/* requirements */}
                    <div className={` ${styles.WhiteReq} mt-1`} 
                    onClick={() => handleClickScriptReq() }>
                    <Row className='py-2 py-md-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{scrReqOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className={`${styles.WhiteReq1} d-none d-sm-block`}> REQUIREMENTS</p>
                    <p className={`${styles.WhiteReq1} d-block d-sm-none`}> REQUIREM.</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`${styles.Red} float-left`}>{scrReqUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* workspace */}
                    <div className={` ${styles.WhiteReq} mt-1`}
                    onClick={() => handleClickScriptWor() }>
                    <Row className='py-2 py-md-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{scrWorkOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > WORKSPACE</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{scrWorkUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* Finals */}
                    <div className={` ${styles.WhiteReq} my-1`}
                    onClick={() => handleClickScriptFin() }>
                    <Row className='py-2 py-md-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{scrFinOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className='d-block d-md-none'> FINALS</p>
                    <p className='d-none d-md-block'> FINALS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{scrFinUnopen}</p></Col>
                    </Row>
                    </div>
                    </div>
                    <p className={`text-center ${styles.Bold}`}>SCRIPT</p>
              </Col>
              {/* ART 5*/}
              <Col className='px-2 px-md-2' xs={6} sm={4} md={3} lg={2} >
                    <div className={` ${styles.CardBox2} px-2`}
                    style={{ backgroundColor: 'rgb(248 241 249)'}}
                    >
                      {/* read */}
                    <div className={`d-none d-sm-block ${styles.WhiteRead} mt-1`}>
                    <Row>
                      <Col xs={6} className={`text-center pr-5`}><p>Read</p></Col>
                      <Col xs={6} className={`text-center pl-4`}><p>Unread</p></Col>
                    </Row>
                    </div>
                    {/* read */}
                    <div className={`d-block d-sm-none ${styles.WhiteRead} mt-1`}>
                    <Row>
                      <Col xs={6} className={`text-center`}><p>Read</p></Col>
                      <Col xs={6} className={`float-right`}><p>Unread</p></Col>
                    </Row>
                    </div>
                    {/* requirements */}
                    <div className={` ${styles.WhiteReq} mt-1`} 
                    onClick={() => handleClickArtReq() }>
                    <Row className='py-2 py-md-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{artReqOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className={`${styles.WhiteReq1} d-none d-sm-block`}> REQUIREMENTS</p>
                    <p className={`${styles.WhiteReq1} d-block d-sm-none`}> REQUIREM.</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`${styles.Red} float-left`}>{artReqUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* workspace */}
                    <div className={` ${styles.WhiteReq} mt-1`}
                    onClick={() => handleClickArtWor() }>
                    <Row className='py-2 py-md-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{artWorkOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > WORKSPACE</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{artWorkUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* Finals */}
                    <div className={` ${styles.WhiteReq} my-1`}
                    onClick={() => handleClickArtFin() }>
                    <Row className='py-2 py-md-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{artFinOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className='d-block d-md-none'> FINALS</p>
                    <p className='d-none d-md-block'> FINALS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{artFinUnopen}</p></Col>
                    </Row>
                    </div>
                    </div>
                    <p className={`text-center ${styles.Bold}`}>ART</p>
              </Col>
              {/* MAKEUP 6 */}
              <Col className='px-2 px-md-2' xs={6} sm={4} md={3} lg={2} >
                    <div className={` ${styles.CardBox2} px-2`}
                    style={{ backgroundColor: '#dbfaf9'}}
                    >
                      {/* read */}
                    <div className={`d-none d-sm-block ${styles.WhiteRead} mt-1`}>
                    <Row>
                      <Col xs={6} className={`text-center pr-5`}><p>Read</p></Col>
                      <Col xs={6} className={`text-center pl-4`}><p>Unread</p></Col>
                    </Row>
                    </div>
                    {/* read */}
                    <div className={`d-block d-sm-none ${styles.WhiteRead} mt-1`}>
                    <Row>
                      <Col xs={6} className={`text-center`}><p>Read</p></Col>
                      <Col xs={6} className={`float-right`}><p>Unread</p></Col>
                    </Row>
                    </div>
                    {/* requirements */}
                    <div className={` ${styles.WhiteReq} mt-1`} 
                    onClick={() => handleClickMakeupReq() }>
                    <Row className='py-2 py-md-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{makReqOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className={`${styles.WhiteReq1} d-none d-sm-block`}> REQUIREMENTS</p>
                    <p className={`${styles.WhiteReq1} d-block d-sm-none`}> REQUIREM.</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`${styles.Red} float-left`}>{makReqUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* workspace */}
                    <div className={` ${styles.WhiteReq} mt-1`}
                    onClick={() => handleClickMakeupWor() }>
                    <Row className='py-2 py-md-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{makWorkOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > WORKSPACE</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{makWorkUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* Finals */}
                    <div className={` ${styles.WhiteReq} my-1`}
                    onClick={() => handleClickMakeupFin() }>
                    <Row className='py-2 py-md-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{makFinOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > FINALS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{makFinUnopen}</p></Col>
                    </Row>
                    </div>
                    </div>
                    <p className={`text-center ${styles.Bold}`}>MAKEUP</p>
              </Col>
              {/* WARDROBE 7 */}
              <Col className='px-2 px-md-2' xs={6} sm={4} md={3} lg={2} >
                    <div className={` ${styles.CardBox2} px-2`}
                    style={{ backgroundColor: 'rgb(223 254 240)'}}
                    >
                      {/* read */}
                    <div className={`d-none d-sm-block ${styles.WhiteRead} mt-1`}>
                    <Row>
                      <Col xs={6} className={`text-center pr-5`}><p>Read</p></Col>
                      <Col xs={6} className={`text-center pl-4`}><p>Unread</p></Col>
                    </Row>
                    </div>
                    {/* read */}
                    <div className={`d-block d-sm-none ${styles.WhiteRead} mt-1`}>
                    <Row>
                      <Col xs={6} className={`text-center`}><p>Read</p></Col>
                      <Col xs={6} className={`float-right`}><p>Unread</p></Col>
                    </Row>
                    </div>
                    {/* requirements */}
                    <div className={` ${styles.WhiteReq} mt-1`} 
                    onClick={() => handleClickWardrobeReq() }>
                    <Row className='py-2 py-md-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{warReqOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className={`${styles.WhiteReq1} d-none d-sm-block`}> REQUIREMENTS</p>
                    <p className={`${styles.WhiteReq1} d-block d-sm-none`}> REQUIREM.</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`${styles.Red} float-left`}>{warReqUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* workspace */}
                    <div className={` ${styles.WhiteReq} mt-1`}
                    onClick={() => handleClickWardrobeWor() }>
                    <Row className='py-2 py-md-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{warWorkOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > WORKSPACE</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{warWorkUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* Finals */}
                    <div className={` ${styles.WhiteReq} my-1`}
                    onClick={() => handleClickWardrobeFin() }>
                    <Row className='py-2 py-md-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{warFinOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > FINALS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{warFinUnopen}</p></Col>
                    </Row>
                    </div>
                    </div>
                    <p className={`text-center ${styles.Bold}`}>WARDROBE</p>
              </Col>
              {/* CAMERA 8 */}
              <Col className='px-2 px-md-2' xs={6} sm={4} md={3} lg={2} >
                    <div className={` ${styles.CardBox2} px-2`}
                    style={{ backgroundColor: 'rgb(248 241 249)'}}
                    >
                      {/* read */}
                    <div className={`d-none d-sm-block ${styles.WhiteRead} mt-1`}>
                    <Row>
                      <Col xs={6} className={`text-center pr-5`}><p>Read</p></Col>
                      <Col xs={6} className={`text-center pl-4`}><p>Unread</p></Col>
                    </Row>
                    </div>
                    {/* read */}
                    <div className={`d-block d-sm-none ${styles.WhiteRead} mt-1`}>
                    <Row>
                      <Col xs={6} className={`text-center`}><p>Read</p></Col>
                      <Col xs={6} className={`float-right`}><p>Unread</p></Col>
                    </Row>
                    </div>
                    {/* requirements */}
                    <div className={` ${styles.WhiteReq} mt-1`} 
                    onClick={() => handleClickCastingReq() }>
                    <Row className='py-2 py-md-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{casReqOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className={`${styles.WhiteReq1} d-none d-sm-block`}> REQUIREMENTS</p>
                    <p className={`${styles.WhiteReq1} d-block d-sm-none`}> REQUIREM.</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`${styles.Red} float-left`}>{casReqUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* workspace */}
                    <div className={` ${styles.WhiteReq} mt-1`}
                    onClick={() => handleClickCastingWor() }>
                    <Row className='py-2 py-md-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{casWorkOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > WORKSPACE</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{casWorkUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* Finals */}
                    <div className={` ${styles.WhiteReq} my-1`}
                    onClick={() => handleClickCastingFin() }>
                    <Row className='py-2 py-md-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{casFinOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > FINALS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{casFinUnopen}</p></Col>
                    </Row>
                    </div>
                    </div>
                    <p className={`text-center ${styles.Bold}`}>CASTING</p>
              </Col>
              {/* POST/VFX 9 */}
              <Col className='px-2 px-md-2' xs={6} sm={4} md={3} lg={2} >
                    <div className={` ${styles.CardBox2} px-2`}
                    style={{ backgroundColor: 'rgb(248 241 249)'}}
                    >
                      {/* read */}
                    <div className={`d-none d-sm-block ${styles.WhiteRead} mt-1`}>
                    <Row>
                      <Col xs={6} className={`text-center pr-5`}><p>Read</p></Col>
                      <Col xs={6} className={`text-center pl-4`}><p>Unread</p></Col>
                    </Row>
                    </div>
                    {/* read */}
                    <div className={`d-block d-sm-none ${styles.WhiteRead} mt-1`}>
                    <Row>
                      <Col xs={6} className={`text-center`}><p>Read</p></Col>
                      <Col xs={6} className={`float-right`}><p>Unread</p></Col>
                    </Row>
                    </div>
                    {/* requirements */}
                    <div className={` ${styles.WhiteReq} mt-1`} 
                    onClick={() => handleClickPostReq() }>
                    <Row className='py-2 py-md-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{posReqOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className={`${styles.WhiteReq1} d-none d-sm-block`}> REQUIREMENTS</p>
                    <p className={`${styles.WhiteReq1} d-block d-sm-none`}> REQUIREM.</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`${styles.Red} float-left`}>{posReqUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* workspace */}
                    <div className={` ${styles.WhiteReq} mt-1`}
                    onClick={() => handleClickPostWor() }>
                    <Row className='py-2 py-md-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{posWorkOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > WORKSPACE</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{posWorkUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* Finals */}
                    <div className={` ${styles.WhiteReq} my-1`}
                    onClick={() => handleClickPostFin() }>
                    <Row className='py-2 py-md-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{posFinOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > FINALS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{posFinUnopen}</p></Col>
                    </Row>
                    </div>
                    </div>
                    <p className={`text-center ${styles.Bold}`}>POST/VFX</p>
              </Col>
              {/* PRODUCTION 10 */}
              <Col className='px-2 px-md-2' xs={6} sm={4} md={3} lg={2} >
                    <div className={` ${styles.CardBox2} px-2`}
                    style={{ backgroundColor: 'rgb(223 254 240)'}}
                    >
                      {/* read */}
                    <div className={`d-none d-sm-block ${styles.WhiteRead} mt-1`}>
                    <Row>
                      <Col xs={6} className={`text-center pr-5`}><p>Read</p></Col>
                      <Col xs={6} className={`text-center pl-4`}><p>Unread</p></Col>
                    </Row>
                    </div>
                    {/* read */}
                    <div className={`d-block d-sm-none ${styles.WhiteRead} mt-1`}>
                    <Row>
                      <Col xs={6} className={`text-center`}><p>Read</p></Col>
                      <Col xs={6} className={`float-right`}><p>Unread</p></Col>
                    </Row>
                    </div>
                    {/* requirements */}
                    <div className={` ${styles.WhiteReq} mt-1`} 
                    onClick={() => handleClickProductionReq() }>
                    <Row className='py-2 py-md-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{proReqOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className={`${styles.WhiteReq1} d-none d-sm-block`}> REQUIREMENTS</p>
                    <p className={`${styles.WhiteReq1} d-block d-sm-none`}> REQUIREM.</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`${styles.Red} float-left`}>{proReqUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* workspace */}
                    <div className={` ${styles.WhiteReq} mt-1`}
                    onClick={() => handleClickProductionWor() }>
                    <Row className='py-2 py-md-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{proWorkOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > WORKSPACE</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{proWorkUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* Finals */}
                    <div className={` ${styles.WhiteReq} my-1`}
                    onClick={() => handleClickProductionFin() }>
                    <Row className='py-2 py-md-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{proFinOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > FINALS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{proFinUnopen}</p></Col>
                    </Row>
                    </div>
                    </div>
                    <p className={`text-center ${styles.Bold}`}>PRODUCTION</p>
              </Col>
              {/* STUNTS 11*/}
              <Col className='px-2 px-md-2' xs={6} sm={4} md={3} lg={2} >
                    <div className={` ${styles.CardBox2} px-2`}
                    style={{ backgroundColor: '#dbfaf9'}}
                    >
                      {/* read */}
                    <div className={`d-none d-sm-block ${styles.WhiteRead} mt-1`}>
                    <Row>
                      <Col xs={6} className={`text-center pr-5`}><p>Read</p></Col>
                      <Col xs={6} className={`text-center pl-4`}><p>Unread</p></Col>
                    </Row>
                    </div>
                    {/* read */}
                    <div className={`d-block d-sm-none ${styles.WhiteRead} mt-1`}>
                    <Row>
                      <Col xs={6} className={`text-center`}><p>Read</p></Col>
                      <Col xs={6} className={`float-right`}><p>Unread</p></Col>
                    </Row>
                    </div>
                    {/* requirements */}
                    <div className={` ${styles.WhiteReq} mt-1`} 
                    onClick={() => handleClickStuntsReq() }>
                    <Row className='py-2 py-md-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{stuReqOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className={`${styles.WhiteReq1} d-none d-sm-block`}> REQUIREMENTS</p>
                    <p className={`${styles.WhiteReq1} d-block d-sm-none`}> REQUIREM.</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`${styles.Red} float-left`}>{stuReqUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* workspace */}
                    <div className={` ${styles.WhiteReq} mt-1`}
                    onClick={() => handleClickStuntsWor() }>
                    <Row className='py-2 py-md-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{stuWorkOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > WORKSPACE</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{stuWorkUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* Finals */}
                    <div className={` ${styles.WhiteReq} my-1`}
                    onClick={() => handleClickStuntsFin() }>
                    <Row className='py-2 py-md-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{stuFinOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > FINALS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{stuFinUnopen}</p></Col>
                    </Row>
                    </div>
                    </div>
                    <p className={`text-center ${styles.Bold}`}>STUNTS</p>
              </Col>
              {/* ELECTRIC 12 */}
              <Col className='px-2 px-md-2' xs={6} sm={4} md={3} lg={2} >
                    <div className={` ${styles.CardBox2} px-2`}
                    style={{ backgroundColor: 'rgb(248 241 249)'}}
                    >
                      {/* read */}
                    <div className={`d-none d-sm-block ${styles.WhiteRead} mt-1`}>
                    <Row>
                      <Col xs={6} className={`text-center pr-5`}><p>Read</p></Col>
                      <Col xs={6} className={`text-center pl-4`}><p>Unread</p></Col>
                    </Row>
                    </div>
                    {/* read */}
                    <div className={`d-block d-sm-none ${styles.WhiteRead} mt-1`}>
                    <Row>
                      <Col xs={6} className={`text-center`}><p>Read</p></Col>
                      <Col xs={6} className={`float-right`}><p>Unread</p></Col>
                    </Row>
                    </div>
                    {/* requirements */}
                    <div className={` ${styles.WhiteReq} mt-1`} 
                    onClick={() => handleClickElectricReq() }>
                    <Row className='py-2 py-md-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{eleReqOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className={`${styles.WhiteReq1} d-none d-sm-block`}> REQUIREMENTS</p>
                    <p className={`${styles.WhiteReq1} d-block d-sm-none`}> REQUIREM.</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`${styles.Red} float-left`}>{eleReqUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* workspace */}
                    <div className={` ${styles.WhiteReq} mt-1`}
                    onClick={() => handleClickElectricWor() }>
                    <Row className='py-2 py-md-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{eleWorkOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > WORKSPACE</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{eleWorkUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* Finals */}
                    <div className={` ${styles.WhiteReq} my-1`}
                    onClick={() => handleClickElectricFin() }>
                    <Row className='py-2 py-md-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{eleFinOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > FINALS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{eleFinUnopen}</p></Col>
                    </Row>
                    </div>
                    </div>
                    <p className={`text-center ${styles.Bold}`}>ELECTRIC/GRIP</p>
              </Col>
              </Row>
            </div>

            {/* Department Image all white with pics */}
            <div className='mt-5 pt-5'>
              {/* Universal */}
              <Row className={`mt-1`} >
                  <Col xs={2} md={4}  ></Col>
                  <Col className='px-1 px-md-2' xs={8} md={4} >
                  <div className={` ${styles.CardBoxIm} py-2 px-2`}
                    // style={{ backgroundColor: 'rgb(248 241 249)'}}
                    style={{
                      background: `url(${dep1})`,
                    }}
                    >
                      {/* read */}
                    {/* <div className={`${styles.WhiteRead} mt-3`}>
                    <Row>
                    <Col xs={12} className={``}><p className='pl-3'>Read <span className='pr-3 float-right'>Unread</span> </p></Col>
                    </Row>
                    </div> */}
                    {/* requirements */}
                    <div className={` ${styles.WhiteReq} mt-3`} 
                    onClick={() => handleClickUniversalReq() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{uniReqOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className={`${styles.WhiteReq1} d-none d-sm-block`}> REQUIREMENTS</p>
                    <p className={`${styles.WhiteReq1} d-block d-sm-none`}> REQUIREM.</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`${styles.Red} float-left`}>{uniReqUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* workspace */}
                    <div className={` ${styles.WhiteReq} mt-3`}
                    onClick={() => handleClickUniversalWor() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{uniWorkOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > WORKSPACE</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{uniWorkUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* Finals */}
                    <div className={` ${styles.WhiteReq} my-3`}
                    onClick={() => handleClickUniversalFin() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{uniFinOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > FINALS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{uniFinUnopen}</p></Col>
                    </Row>
                    </div>
                    </div>
                    <p className={`text-center pt-1 ${styles.Bold}`}>UNIVERSAL</p>
                  </Col>
              </Row>
              {/* Camera Sound ... */}
              <Row className='px-2'>
              {/* CAMERA 1*/}
              <Col className='px-2 px-md-2' xs={6} sm={4} md={3} lg={2} >
                    <div className={` ${styles.CardBox2} px-2`}
                    // style={{ backgroundColor: 'rgb(248 241 249)'}}
                    style={{
                      background: `url(${dep1})`,
                    }}
                    >
                      {/* read */}
                    {/* <div className={`d-none d-sm-block ${styles.WhiteRead} mt-3`}>
                    <Row>
                      <Col xs={6} className={`text-center pr-5`}><p>Read</p></Col>
                      <Col xs={6} className={`text-center pl-4`}><p>Unread</p></Col>
                    </Row>
                    </div> */}
                    {/* read */}
                    {/* <div className={`d-block d-sm-none ${styles.WhiteRead} mt-3`}>
                    <Row>
                      <Col xs={6} className={`text-center`}><p>Read</p></Col>
                      <Col xs={6} className={`float-right`}><p>Unread</p></Col>
                    </Row>
                    </div> */}
                    {/* requirements */}
                    <div className={` ${styles.WhiteReq} mt-3`} 
                    onClick={() => handleClickCameraReq() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{camReqOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className={`${styles.WhiteReq1} d-none d-sm-block`}> REQUIREMENTS</p>
                    <p className={`${styles.WhiteReq1} d-block d-sm-none`}> REQUIREM.</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`${styles.Red} float-left`}>{camReqUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* workspace */}
                    <div className={` ${styles.WhiteReq} mt-3`}
                    onClick={() => handleClickCameraWor() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{camWorkOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > WORKSPACE</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{camWorkUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* Finals */}
                    <div className={` ${styles.WhiteReq} my-3`}
                    onClick={() => handleClickCameraFin() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{camFinOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > FINALS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{camFinUnopen}</p></Col>
                    </Row>
                    </div>
                    </div>
                    <p className={`text-center pt-1 ${styles.Bold}`}>CAMERA</p>
              </Col>
              {/* SOUND 2 */}
              <Col className='px-2 px-md-2' xs={6} sm={4} md={3} lg={2} >
                    <div className={` ${styles.CardBox2} px-2`}
                    style={{
                      background: `url(${dep2})`,
                    }}
                    >
                      {/* read */}
                    {/* <div className={`d-none d-sm-block ${styles.WhiteRead} mt-3`}>
                    <Row>
                      <Col xs={6} className={`text-center pr-5`}><p>Read</p></Col>
                      <Col xs={6} className={`text-center pl-4`}><p>Unread</p></Col>
                    </Row>
                    </div> */}
                    {/* read */}
                    {/* <div className={`d-block d-sm-none ${styles.WhiteRead} mt-3`}>
                    <Row>
                      <Col xs={6} className={`text-center`}><p>Read</p></Col>
                      <Col xs={6} className={`float-right`}><p>Unread</p></Col>
                    </Row>
                    </div> */}
                    {/* requirements */}
                    <div className={` ${styles.WhiteReq} mt-3`} 
                    onClick={() => handleClickSoundReq() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{souReqOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className={`${styles.WhiteReq1} d-none d-sm-block`}> REQUIREMENTS</p>
                    <p className={`${styles.WhiteReq1} d-block d-sm-none`}> REQUIREM.</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`${styles.Red} float-left`}>{souReqUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* workspace */}
                    <div className={` ${styles.WhiteReq} mt-3`}
                    onClick={() => handleClickSoundWor() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{souWorkOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > WORKSPACE</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{souWorkUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* Finals */}
                    <div className={` ${styles.WhiteReq} my-3`}
                    onClick={() => handleClickSoundFin() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{souFinOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className='d-block d-md-none'> FINALS</p>
                    <p className='d-none d-md-block'> FINALS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{souFinUnopen}</p></Col>
                    </Row>
                    </div>
                    </div>
                    <p className={`text-center ${styles.Bold}`}>SOUND</p>
              </Col>
              {/* LOCATION 3*/}
              <Col className='px-2 px-md-2' xs={6} sm={4} md={3} lg={2} >
                    <div className={` ${styles.CardBox2} px-2`}
                    style={{
                      background: `url(${dep3})`,
                    }}
                    >
                      {/* read */}
                    {/* <div className={`d-none d-sm-block ${styles.WhiteRead} mt-3`}>
                    <Row>
                      <Col xs={6} className={`text-center pr-5`}><p>Read</p></Col>
                      <Col xs={6} className={`text-center pl-4`}><p>Unread</p></Col>
                    </Row>
                    </div> */}
                    {/* read */}
                    {/* <div className={`d-block d-sm-none ${styles.WhiteRead} mt-3`}>
                    <Row>
                      <Col xs={6} className={`text-center`}><p>Read</p></Col>
                      <Col xs={6} className={`float-right`}><p>Unread</p></Col>
                    </Row>
                    </div> */}
                    {/* requirements */}
                    <div className={` ${styles.WhiteReq} mt-3`} 
                    onClick={() => handleClickLocationReq() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locReqOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className={`${styles.WhiteReq1} d-none d-sm-block`}> REQUIREMENTS</p>
                    <p className={`${styles.WhiteReq1} d-block d-sm-none`}> REQUIREM.</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`${styles.Red} float-left`}>{locReqUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* workspace */}
                    <div className={` ${styles.WhiteReq} mt-3`}
                    onClick={() => handleClickLocationWor() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locWorkOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > WORKSPACE</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locWorkUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* Finals */}
                    <div className={` ${styles.WhiteReq} my-3`}
                    onClick={() => handleClickLocationFin() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locFinOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className='d-block d-md-none'> FINALS</p>
                    <p className='d-none d-md-block'> FINALS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locFinUnopen}</p></Col>
                    </Row>
                    </div>
                    </div>
                    <p className={`text-center ${styles.Bold}`}>LOCATION</p>
              </Col>
              {/* SCRIPT 4*/}
              <Col className='px-2 px-md-2' xs={6} sm={4} md={3} lg={2} >
                    <div className={` ${styles.CardBox2} px-2`}
                    style={{
                      background: `url(${dep4})`,
                    }}
                    >
                      {/* read */}
                    {/* <div className={`d-none d-sm-block ${styles.WhiteRead} mt-3`}>
                    <Row>
                      <Col xs={6} className={`text-center pr-5`}><p>Read</p></Col>
                      <Col xs={6} className={`text-center pl-4`}><p>Unread</p></Col>
                    </Row>
                    </div> */}
                    {/* read */}
                    {/* <div className={`d-block d-sm-none ${styles.WhiteRead} mt-3`}>
                    <Row>
                      <Col xs={6} className={`text-center`}><p>Read</p></Col>
                      <Col xs={6} className={`float-right`}><p>Unread</p></Col>
                    </Row>
                    </div> */}
                    {/* requirements */}
                    <div className={` ${styles.WhiteReq} mt-3`} 
                    onClick={() => handleClickScriptReq() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{scrReqOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className={`${styles.WhiteReq1} d-none d-sm-block`}> REQUIREMENTS</p>
                    <p className={`${styles.WhiteReq1} d-block d-sm-none`}> REQUIREM.</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`${styles.Red} float-left`}>{scrReqUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* workspace */}
                    <div className={` ${styles.WhiteReq} mt-3`}
                    onClick={() => handleClickScriptWor() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{scrWorkOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > WORKSPACE</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{scrWorkUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* Finals */}
                    <div className={` ${styles.WhiteReq} my-3`}
                    onClick={() => handleClickScriptFin() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{scrFinOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className='d-block d-md-none'> FINALS</p>
                    <p className='d-none d-md-block'> FINALS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{scrFinUnopen}</p></Col>
                    </Row>
                    </div>
                    </div>
                    <p className={`text-center ${styles.Bold}`}>SCRIPT</p>
              </Col>
              {/* ART 5*/}
              <Col className='px-2 px-md-2' xs={6} sm={4} md={3} lg={2} >
              {/* read */}
              {/* <div className={`d-none d-sm-block ${styles.WhiteRead} mt-3`}>
                    <Row>
                      <Col xs={6} className={`text-center pr-5`}><p>Read</p></Col>
                      <Col xs={6} className={`text-center pl-4`}><p>Unread</p></Col>
                    </Row>
                    </div> */}
                    {/* read */}
                    {/* <div className={`d-block d-sm-none ${styles.WhiteRead} mt-3`}>
                    <Row>
                      <Col xs={6} className={`text-center`}><p>Read</p></Col>
                      <Col xs={6} className={`float-right`}><p>Unread</p></Col>
                    </Row>
                    </div> */}
                    <div className={` ${styles.CardBox2} px-2`}
                    style={{
                      background: `url(${dep5})`,
                    }}
                    >
                    {/* read */}
                    {/* <div className={`d-none d-sm-block ${styles.WhiteRead} mt-3`}>
                    <Row>
                      <Col xs={6} className={`text-center pr-5`}><p>Read</p></Col>
                      <Col xs={6} className={`text-center pl-4`}><p>Unread</p></Col>
                    </Row>
                    </div> */}
                    {/* read */}
                    {/* <div className={`d-block d-sm-none ${styles.WhiteRead} mt-3`}>
                    <Row>
                      <Col xs={6} className={`text-center`}><p>Read</p></Col>
                      <Col xs={6} className={`float-right`}><p>Unread</p></Col>
                    </Row>
                    </div> */}
                    {/* requirements */}
                    <div className={` ${styles.WhiteReq} mt-3`} 
                    onClick={() => handleClickArtReq() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{artReqOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className={`${styles.WhiteReq1} d-none d-sm-block`}> REQUIREMENTS</p>
                    <p className={`${styles.WhiteReq1} d-block d-sm-none`}> REQUIREM.</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`${styles.Red} float-left`}>{artReqUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* workspace */}
                    <div className={` ${styles.WhiteReq} mt-3`}
                    onClick={() => handleClickArtWor() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{artWorkOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > WORKSPACE</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{artWorkUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* Finals */}
                    <div className={` ${styles.WhiteReq} my-3`}
                    onClick={() => handleClickArtFin() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{artFinOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className='d-block d-md-none'> FINALS</p>
                    <p className='d-none d-md-block'> FINALS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{artFinUnopen}</p></Col>
                    </Row>
                    </div>
                    </div>
                    <p className={`text-center ${styles.Bold}`}>ART</p>
              </Col>
              {/* MAKEUP 6 */}
              <Col className='px-2 px-md-2' xs={6} sm={4} md={3} lg={2} >
                    <div className={` ${styles.CardBox2} px-2`}
                    style={{
                      background: `url(${dep6})`,
                    }}
                    >
                      {/* read */}
                    {/* <div className={`d-none d-sm-block ${styles.WhiteRead} mt-3`}>
                    <Row>
                      <Col xs={6} className={`text-center pr-5`}><p>Read</p></Col>
                      <Col xs={6} className={`text-center pl-4`}><p>Unread</p></Col>
                    </Row>
                    </div> */}
                    {/* read */}
                    {/* <div className={`d-block d-sm-none ${styles.WhiteRead} mt-3`}>
                    <Row>
                      <Col xs={6} className={`text-center`}><p>Read</p></Col>
                      <Col xs={6} className={`float-right`}><p>Unread</p></Col>
                    </Row>
                    </div> */}
                    {/* requirements */}
                    <div className={` ${styles.WhiteReq} mt-3`} 
                    onClick={() => handleClickMakeupReq() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{makReqOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className={`${styles.WhiteReq1} d-none d-sm-block`}> REQUIREMENTS</p>
                    <p className={`${styles.WhiteReq1} d-block d-sm-none`}> REQUIREM.</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`${styles.Red} float-left`}>{makReqUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* workspace */}
                    <div className={` ${styles.WhiteReq} mt-3`}
                    onClick={() => handleClickMakeupWor() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{makWorkOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > WORKSPACE</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{makWorkUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* Finals */}
                    <div className={` ${styles.WhiteReq} my-3`}
                    onClick={() => handleClickMakeupFin() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{makFinOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > FINALS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{makFinUnopen}</p></Col>
                    </Row>
                    </div>
                    </div>
                    <p className={`text-center ${styles.Bold}`}>MAKEUP</p>
              </Col>
              {/* WARDROBE 7 */}
              <Col className='px-2 px-md-2' xs={6} sm={4} md={3} lg={2} >
                    <div className={` ${styles.CardBox2} px-2`}
                    style={{
                      background: `url(${dep7})`,
                    }}
                    >
                      {/* read */}
                    <div className={`d-none d-sm-block ${styles.WhiteRead} mt-3`}>
                    <Row>
                      <Col xs={6} className={`text-center pr-5`}><p>Read</p></Col>
                      <Col xs={6} className={`text-center pl-4`}><p>Unread</p></Col>
                    </Row>
                    </div>
                    {/* read */}
                    <div className={`d-block d-sm-none ${styles.WhiteRead} mt-3`}>
                    <Row>
                      <Col xs={6} className={`text-center`}><p>Read</p></Col>
                      <Col xs={6} className={`float-right`}><p>Unread</p></Col>
                    </Row>
                    </div>
                    {/* requirements */}
                    <div className={` ${styles.WhiteReq} mt-3`} 
                    onClick={() => handleClickWardrobeReq() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{warReqOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className={`${styles.WhiteReq1} d-none d-sm-block`}> REQUIREMENTS</p>
                    <p className={`${styles.WhiteReq1} d-block d-sm-none`}> REQUIREM.</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`${styles.Red} float-left`}>{warReqUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* workspace */}
                    <div className={` ${styles.WhiteReq} mt-3`}
                    onClick={() => handleClickWardrobeWor() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{warWorkOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > WORKSPACE</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{warWorkUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* Finals */}
                    <div className={` ${styles.WhiteReq} my-3`}
                    onClick={() => handleClickWardrobeFin() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{warFinOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > FINALS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{warFinUnopen}</p></Col>
                    </Row>
                    </div>
                    </div>
                    <p className={`text-center ${styles.Bold}`}>WARDROBE</p>
              </Col>
              {/* CAMERA 8 */}
              <Col className='px-2 px-md-2' xs={6} sm={4} md={3} lg={2} >
                    <div className={` ${styles.CardBox2} px-2`}
                    style={{
                      background: `url(${dep8})`,
                    }}
                    >
                      {/* read */}
                    <div className={`d-none d-sm-block ${styles.WhiteRead} mt-3`}>
                    <Row>
                      <Col xs={6} className={`text-center pr-5`}><p>Read</p></Col>
                      <Col xs={6} className={`text-center pl-4`}><p>Unread</p></Col>
                    </Row>
                    </div>
                    {/* read */}
                    <div className={`d-block d-sm-none ${styles.WhiteRead} mt-3`}>
                    <Row>
                      <Col xs={6} className={`text-center`}><p>Read</p></Col>
                      <Col xs={6} className={`float-right`}><p>Unread</p></Col>
                    </Row>
                    </div>
                    {/* requirements */}
                    <div className={` ${styles.WhiteReq} mt-3`} 
                    onClick={() => handleClickCastingReq() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{casReqOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className={`${styles.WhiteReq1} d-none d-sm-block`}> REQUIREMENTS</p>
                    <p className={`${styles.WhiteReq1} d-block d-sm-none`}> REQUIREM.</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`${styles.Red} float-left`}>{casReqUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* workspace */}
                    <div className={` ${styles.WhiteReq} mt-3`}
                    onClick={() => handleClickCastingWor() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{casWorkOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > WORKSPACE</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{casWorkUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* Finals */}
                    <div className={` ${styles.WhiteReq} my-3`}
                    onClick={() => handleClickCastingFin() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{casFinOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > FINALS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{casFinUnopen}</p></Col>
                    </Row>
                    </div>
                    </div>
                    <p className={`text-center ${styles.Bold}`}>CASTING</p>
              </Col>
              {/* POST/VFX 9 */}
              <Col className='px-2 px-md-2' xs={6} sm={4} md={3} lg={2} >
                    <div className={` ${styles.CardBox2} px-2`}
                    style={{
                      background: `url(${dep9})`,
                    }}
                    >
                      {/* read */}
                    <div className={`d-none d-sm-block ${styles.WhiteRead} mt-3`}>
                    <Row>
                      <Col xs={6} className={`text-center pr-5`}><p>Read</p></Col>
                      <Col xs={6} className={`text-center pl-4`}><p>Unread</p></Col>
                    </Row>
                    </div>
                    {/* read */}
                    <div className={`d-block d-sm-none ${styles.WhiteRead} mt-3`}>
                    <Row>
                      <Col xs={6} className={`text-center`}><p>Read</p></Col>
                      <Col xs={6} className={`float-right`}><p>Unread</p></Col>
                    </Row>
                    </div>
                    {/* requirements */}
                    <div className={` ${styles.WhiteReq} mt-3`} 
                    onClick={() => handleClickPostReq() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{posReqOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className={`${styles.WhiteReq1} d-none d-sm-block`}> REQUIREMENTS</p>
                    <p className={`${styles.WhiteReq1} d-block d-sm-none`}> REQUIREM.</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`${styles.Red} float-left`}>{posReqUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* workspace */}
                    <div className={` ${styles.WhiteReq} mt-3`}
                    onClick={() => handleClickPostWor() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{posWorkOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > WORKSPACE</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{posWorkUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* Finals */}
                    <div className={` ${styles.WhiteReq} my-3`}
                    onClick={() => handleClickPostFin() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{posFinOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > FINALS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{posFinUnopen}</p></Col>
                    </Row>
                    </div>
                    </div>
                    <p className={`text-center ${styles.Bold}`}>POST/VFX</p>
              </Col>
              {/* PRODUCTION 10 */}
              <Col className='px-2 px-md-2' xs={6} sm={4} md={3} lg={2} >
                    <div className={` ${styles.CardBox2} px-2`}
                    style={{
                      background: `url(${dep10})`,
                    }}
                    >
                      {/* read */}
                    <div className={`d-none d-sm-block ${styles.WhiteRead} mt-3`}>
                    <Row>
                      <Col xs={6} className={`text-center pr-5`}><p>Read</p></Col>
                      <Col xs={6} className={`text-center pl-4`}><p>Unread</p></Col>
                    </Row>
                    </div>
                    {/* read */}
                    <div className={`d-block d-sm-none ${styles.WhiteRead} mt-3`}>
                    <Row>
                      <Col xs={6} className={`text-center`}><p>Read</p></Col>
                      <Col xs={6} className={`float-right`}><p>Unread</p></Col>
                    </Row>
                    </div>
                    {/* requirements */}
                    <div className={` ${styles.WhiteReq} mt-3`} 
                    onClick={() => handleClickProductionReq() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{proReqOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className={`${styles.WhiteReq1} d-none d-sm-block`}> REQUIREMENTS</p>
                    <p className={`${styles.WhiteReq1} d-block d-sm-none`}> REQUIREM.</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`${styles.Red} float-left`}>{proReqUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* workspace */}
                    <div className={` ${styles.WhiteReq} mt-3`}
                    onClick={() => handleClickProductionWor() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{proWorkOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > WORKSPACE</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{proWorkUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* Finals */}
                    <div className={` ${styles.WhiteReq} my-3`}
                    onClick={() => handleClickProductionFin() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{proFinOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > FINALS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{proFinUnopen}</p></Col>
                    </Row>
                    </div>
                    </div>
                    <p className={`text-center ${styles.Bold}`}>PRODUCTION</p>
              </Col>
              {/* STUNTS 11*/}
              <Col className='px-2 px-md-2' xs={6} sm={4} md={3} lg={2} >
                    <div className={` ${styles.CardBox2} px-2`}
                    style={{
                      background: `url(${dep11})`,
                    }}
                    >
                      {/* read */}
                    <div className={`d-none d-sm-block ${styles.WhiteRead} mt-3`}>
                    <Row>
                      <Col xs={6} className={`text-center pr-5`}><p>Read</p></Col>
                      <Col xs={6} className={`text-center pl-4`}><p>Unread</p></Col>
                    </Row>
                    </div>
                    {/* read */}
                    <div className={`d-block d-sm-none ${styles.WhiteRead} mt-3`}>
                    <Row>
                      <Col xs={6} className={`text-center`}><p>Read</p></Col>
                      <Col xs={6} className={`float-right`}><p>Unread</p></Col>
                    </Row>
                    </div>
                    {/* requirements */}
                    <div className={` ${styles.WhiteReq} mt-3`} 
                    onClick={() => handleClickStuntsReq() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{stuReqOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className={`${styles.WhiteReq1} d-none d-sm-block`}> REQUIREMENTS</p>
                    <p className={`${styles.WhiteReq1} d-block d-sm-none`}> REQUIREM.</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`${styles.Red} float-left`}>{stuReqUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* workspace */}
                    <div className={` ${styles.WhiteReq} mt-3`}
                    onClick={() => handleClickStuntsWor() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{stuWorkOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > WORKSPACE</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{stuWorkUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* Finals */}
                    <div className={` ${styles.WhiteReq} my-3`}
                    onClick={() => handleClickStuntsFin() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{stuFinOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > FINALS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{stuFinUnopen}</p></Col>
                    </Row>
                    </div>
                    </div>
                    <p className={`text-center ${styles.Bold}`}>STUNTS</p>
              </Col>
              {/* ELECTRIC 12 */}
              <Col className='px-2 px-md-2' xs={6} sm={4} md={3} lg={2} >
                    <div className={` ${styles.CardBox2} px-2`}
                    style={{
                      background: `url(${dep12})`,
                    }}
                    >
                      {/* read */}
                    <div className={`d-none d-sm-block ${styles.WhiteRead} mt-3`}>
                    <Row>
                      <Col xs={6} className={`text-center pr-5`}><p>Read</p></Col>
                      <Col xs={6} className={`text-center pl-4`}><p>Unread</p></Col>
                    </Row>
                    </div>
                    {/* read */}
                    <div className={`d-block d-sm-none ${styles.WhiteRead} mt-3`}>
                    <Row>
                      <Col xs={6} className={`text-center`}><p>Read</p></Col>
                      <Col xs={6} className={`float-right`}><p>Unread</p></Col>
                    </Row>
                    </div>
                    {/* requirements */}
                    <div className={` ${styles.WhiteReq} mt-3`} 
                    onClick={() => handleClickElectricReq() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{eleReqOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className={`${styles.WhiteReq1} d-none d-sm-block`}> REQUIREMENTS</p>
                    <p className={`${styles.WhiteReq1} d-block d-sm-none`}> REQUIREM.</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`${styles.Red} float-left`}>{eleReqUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* workspace */}
                    <div className={` ${styles.WhiteReq} mt-3`}
                    onClick={() => handleClickElectricWor() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{eleWorkOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > WORKSPACE</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{eleWorkUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* Finals */}
                    <div className={` ${styles.WhiteReq} my-3`}
                    onClick={() => handleClickElectricFin() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{eleFinOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > FINALS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{eleFinUnopen}</p></Col>
                    </Row>
                    </div>
                    </div>
                    <p className={`text-center ${styles.Bold}`}>ELECTRIC/GRIP</p>
              </Col>
              </Row>
            </div>

            {/* Department Image all white with pics  backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat', */}
            <div className='mt-5 pt-5'>
              {/* Universal */}
              <Row className={`mt-1`} >
                  <Col xs={2} md={4}  ></Col>
                  <Col className='px-1 px-md-2' xs={8} md={4} >
                  <div className={` ${styles.CardBoxIm} py-2 px-2`}
                    // style={{ backgroundColor: 'rgb(248 241 249)'}}
                    style={{
                      background: `url(${dep1})`
                    }}
                    >
                      <Row className='my-2'>
                    <Col>
                    <h5 className={`text-center ${styles.White2} mt-2`} >
                    UNIVERSAL
                    </h5>
                    </Col>
                    </Row>
                      {/* read */}
                    {/* <div className={`${styles.WhiteRead} mt-3`}>
                    <Row>
                    <Col xs={12} className={``}><p className='pl-3'>Read <span className='pr-3 float-right'>Unread</span> </p></Col>
                    </Row>
                    </div> */}
                    {/* requirements */}
                    <div className={` ${styles.WhiteReq} mt-3`} 
                    onClick={() => handleClickUniversalReq() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{uniReqOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className={`${styles.WhiteReq1} d-none d-sm-block`}> REQUIREMENTS</p>
                    <p className={`${styles.WhiteReq1} d-block d-sm-none`}> REQUIREM.</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`${styles.Red} float-left`}>{uniReqUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* workspace */}
                    <div className={` ${styles.WhiteReq} mt-3`}
                    onClick={() => handleClickUniversalWor() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{uniWorkOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > WORKSPACE</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{uniWorkUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* Finals */}
                    <div className={` ${styles.WhiteReq} my-3`}
                    onClick={() => handleClickUniversalFin() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{uniFinOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > FINALS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{uniFinUnopen}</p></Col>
                    </Row>
                    </div>
                    </div>
                  </Col>
              </Row>
              {/* Camera Sound ... */}
              <Row className='px-2'>
              {/* CAMERA 1*/}
              <Col className='px-2 px-md-2' xs={6} sm={4} md={3} lg={2} >
                    <div className={` ${styles.CardBox2} px-2`}
                    // style={{ backgroundColor: 'rgb(248 241 249)'}}
                    style={{
                      background: `url(${dep5})`,}}>
                      {/* read */}
                    {/* <div className={`d-none d-sm-block ${styles.WhiteRead} mt-3`}>
                    <Row>
                      <Col xs={6} className={`text-center pr-5`}><p>Read</p></Col>
                      <Col xs={6} className={`text-center pl-4`}><p>Unread</p></Col>
                    </Row>
                    </div> */}
                    {/* read */}
                    {/* <div className={`d-block d-sm-none ${styles.WhiteRead} mt-3`}>
                    <Row>
                      <Col xs={6} className={`text-center`}><p>Read</p></Col>
                      <Col xs={6} className={`float-right`}><p>Unread</p></Col>
                    </Row>
                    </div> */}
                    <Row className='my-2'>
                    <Col>
                    <h5 className={`text-center ${styles.White2} mt-2`} >
                    CAMERA
                    </h5>
                    </Col>
                    </Row>
                    {/* requirements */}
                    <div className={` ${styles.WhiteReq} mt-2`} 
                    onClick={() => handleClickCameraReq() }>
                    <Row className='py-0 mt-3'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{camReqOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className={`${styles.WhiteReq1} d-none d-sm-block`}> REQUIREMENTS</p>
                    <p className={`${styles.WhiteReq1} d-block d-sm-none`}> REQUIREM.</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`${styles.Red} float-left`}>{camReqUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* workspace */}
                    <div className={` ${styles.WhiteReq} mt-3`}
                    onClick={() => handleClickCameraWor() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{camWorkOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > WORKSPACE</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{camWorkUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* Finals */}
                    <div className={` ${styles.WhiteReq} my-3`}
                    onClick={() => handleClickCameraFin() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{camFinOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > FINALS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{camFinUnopen}</p></Col>
                    </Row>
                    </div>
                    </div>
              </Col>
              {/* SOUND 2 */}
              <Col className='px-2 px-md-2' xs={6} sm={4} md={3} lg={2} >
                    <div className={` ${styles.CardBox2} px-2`}
                    style={{
                      background: `url(${dep1})`,
                    }}
                    >
                      <Row className='my-2'>
                    <Col>
                    <h5 className={`text-center ${styles.White2} mt-2`} >
                    CAMERA
                    </h5>
                    </Col>
                    </Row>
                      {/* read */}
                    {/* <div className={`d-none d-sm-block ${styles.WhiteRead} mt-3`}>
                    <Row>
                      <Col xs={6} className={`text-center pr-5`}><p>Read</p></Col>
                      <Col xs={6} className={`text-center pl-4`}><p>Unread</p></Col>
                    </Row>
                    </div> */}
                    {/* read */}
                    {/* <div className={`d-block d-sm-none ${styles.WhiteRead} mt-3`}>
                    <Row>
                      <Col xs={6} className={`text-center`}><p>Read</p></Col>
                      <Col xs={6} className={`float-right`}><p>Unread</p></Col>
                    </Row>
                    </div> */}
                    {/* requirements */}
                    <div className={` ${styles.WhiteReq} mt-3`} 
                    onClick={() => handleClickSoundReq() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{souReqOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className={`${styles.WhiteReq1} d-none d-sm-block`}> REQUIREMENTS</p>
                    <p className={`${styles.WhiteReq1} d-block d-sm-none`}> REQUIREM.</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`${styles.Red} float-left`}>{souReqUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* workspace */}
                    <div className={` ${styles.WhiteReq} mt-3`}
                    onClick={() => handleClickSoundWor() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{souWorkOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > WORKSPACE</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{souWorkUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* Finals */}
                    <div className={` ${styles.WhiteReq} my-3`}
                    onClick={() => handleClickSoundFin() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{souFinOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className='d-block d-md-none'> FINALS</p>
                    <p className='d-none d-md-block'> FINALS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{souFinUnopen}</p></Col>
                    </Row>
                    </div>
                    </div>
              </Col>
              {/* LOCATION 3*/}
              <Col className='px-2 px-md-2' xs={6} sm={4} md={3} lg={2} >
                    <div className={` ${styles.CardBox2} px-2`}
                    style={{
                      background: `url(${dep1})`,
                    }}
                    >
                      <Row className='my-2'>
                    <Col>
                    <h5 className={`text-center ${styles.White2} mt-2`} >
                    CAMERA
                    </h5>
                    </Col>
                    </Row>
                      {/* read */}
                    {/* <div className={`d-none d-sm-block ${styles.WhiteRead} mt-3`}>
                    <Row>
                      <Col xs={6} className={`text-center pr-5`}><p>Read</p></Col>
                      <Col xs={6} className={`text-center pl-4`}><p>Unread</p></Col>
                    </Row>
                    </div> */}
                    {/* read */}
                    {/* <div className={`d-block d-sm-none ${styles.WhiteRead} mt-3`}>
                    <Row>
                      <Col xs={6} className={`text-center`}><p>Read</p></Col>
                      <Col xs={6} className={`float-right`}><p>Unread</p></Col>
                    </Row>
                    </div> */}
                    {/* requirements */}
                    <div className={` ${styles.WhiteReq} mt-3`} 
                    onClick={() => handleClickLocationReq() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locReqOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className={`${styles.WhiteReq1} d-none d-sm-block`}> REQUIREMENTS</p>
                    <p className={`${styles.WhiteReq1} d-block d-sm-none`}> REQUIREM.</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`${styles.Red} float-left`}>{locReqUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* workspace */}
                    <div className={` ${styles.WhiteReq} mt-3`}
                    onClick={() => handleClickLocationWor() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locWorkOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > WORKSPACE</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locWorkUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* Finals */}
                    <div className={` ${styles.WhiteReq} my-3`}
                    onClick={() => handleClickLocationFin() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locFinOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className='d-block d-md-none'> FINALS</p>
                    <p className='d-none d-md-block'> FINALS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locFinUnopen}</p></Col>
                    </Row>
                    </div>
                    </div>
              </Col>
              {/* SCRIPT 4*/}
              <Col className='px-2 px-md-2' xs={6} sm={4} md={3} lg={2} >
                    <div className={` ${styles.CardBox2} px-2`}
                    style={{
                      background: `url(${dep1})`,
                    }}
                    >
                      <Row className='my-2'>
                    <Col>
                    <h5 className={`text-center ${styles.White2} mt-2`} >
                    CAMERA
                    </h5>
                    </Col>
                    </Row>
                      {/* read */}
                    {/* <div className={`d-none d-sm-block ${styles.WhiteRead} mt-3`}>
                    <Row>
                      <Col xs={6} className={`text-center pr-5`}><p>Read</p></Col>
                      <Col xs={6} className={`text-center pl-4`}><p>Unread</p></Col>
                    </Row>
                    </div> */}
                    {/* read */}
                    {/* <div className={`d-block d-sm-none ${styles.WhiteRead} mt-3`}>
                    <Row>
                      <Col xs={6} className={`text-center`}><p>Read</p></Col>
                      <Col xs={6} className={`float-right`}><p>Unread</p></Col>
                    </Row>
                    </div> */}
                    {/* requirements */}
                    <div className={` ${styles.WhiteReq} mt-3`} 
                    onClick={() => handleClickScriptReq() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{scrReqOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className={`${styles.WhiteReq1} d-none d-sm-block`}> REQUIREMENTS</p>
                    <p className={`${styles.WhiteReq1} d-block d-sm-none`}> REQUIREM.</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`${styles.Red} float-left`}>{scrReqUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* workspace */}
                    <div className={` ${styles.WhiteReq} mt-3`}
                    onClick={() => handleClickScriptWor() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{scrWorkOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > WORKSPACE</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{scrWorkUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* Finals */}
                    <div className={` ${styles.WhiteReq} my-3`}
                    onClick={() => handleClickScriptFin() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{scrFinOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className='d-block d-md-none'> FINALS</p>
                    <p className='d-none d-md-block'> FINALS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{scrFinUnopen}</p></Col>
                    </Row>
                    </div>
                    </div>
              </Col>
              {/* ART 5*/}
              <Col className='px-2 px-md-2' xs={6} sm={4} md={3} lg={2} >
              {/* read */}
              {/* <div className={`d-none d-sm-block ${styles.WhiteRead} mt-3`}>
                    <Row>
                      <Col xs={6} className={`text-center pr-5`}><p>Read</p></Col>
                      <Col xs={6} className={`text-center pl-4`}><p>Unread</p></Col>
                    </Row>
                    </div> */}
                    {/* read */}
                    {/* <div className={`d-block d-sm-none ${styles.WhiteRead} mt-3`}>
                    <Row>
                      <Col xs={6} className={`text-center`}><p>Read</p></Col>
                      <Col xs={6} className={`float-right`}><p>Unread</p></Col>
                    </Row>
                    </div> */}
                    <div className={` ${styles.CardBox2} px-2`}
                    style={{
                      background: `url(${dep1})`,
                    }}
                    >
                      <Row className='my-2'>
                    <Col>
                    <h5 className={`text-center ${styles.White2} mt-2`} >
                    CAMERA
                    </h5>
                    </Col>
                    </Row>
                    {/* read */}
                    {/* <div className={`d-none d-sm-block ${styles.WhiteRead} mt-3`}>
                    <Row>
                      <Col xs={6} className={`text-center pr-5`}><p>Read</p></Col>
                      <Col xs={6} className={`text-center pl-4`}><p>Unread</p></Col>
                    </Row>
                    </div> */}
                    {/* read */}
                    {/* <div className={`d-block d-sm-none ${styles.WhiteRead} mt-3`}>
                    <Row>
                      <Col xs={6} className={`text-center`}><p>Read</p></Col>
                      <Col xs={6} className={`float-right`}><p>Unread</p></Col>
                    </Row>
                    </div> */}
                    {/* requirements */}
                    <div className={` ${styles.WhiteReq} mt-3`} 
                    onClick={() => handleClickArtReq() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{artReqOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className={`${styles.WhiteReq1} d-none d-sm-block`}> REQUIREMENTS</p>
                    <p className={`${styles.WhiteReq1} d-block d-sm-none`}> REQUIREM.</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`${styles.Red} float-left`}>{artReqUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* workspace */}
                    <div className={` ${styles.WhiteReq} mt-3`}
                    onClick={() => handleClickArtWor() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{artWorkOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > WORKSPACE</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{artWorkUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* Finals */}
                    <div className={` ${styles.WhiteReq} my-3`}
                    onClick={() => handleClickArtFin() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{artFinOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className='d-block d-md-none'> FINALS</p>
                    <p className='d-none d-md-block'> FINALS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{artFinUnopen}</p></Col>
                    </Row>
                    </div>
                    </div>
              </Col>
              {/* MAKEUP 6 */}
              <Col className='px-2 px-md-2' xs={6} sm={4} md={3} lg={2} >
                    <div className={` ${styles.CardBox2} px-2`}
                    style={{
                      background: `url(${dep7})`,
                    }}
                    >
                      <Row className='my-2'>
                    <Col>
                    <h5 className={`text-center ${styles.White2} mt-2`} >
                    CAMERA
                    </h5>
                    </Col>
                    </Row>
                      {/* read */}
                    {/* <div className={`d-none d-sm-block ${styles.WhiteRead} mt-3`}>
                    <Row>
                      <Col xs={6} className={`text-center pr-5`}><p>Read</p></Col>
                      <Col xs={6} className={`text-center pl-4`}><p>Unread</p></Col>
                    </Row>
                    </div> */}
                    {/* read */}
                    {/* <div className={`d-block d-sm-none ${styles.WhiteRead} mt-3`}>
                    <Row>
                      <Col xs={6} className={`text-center`}><p>Read</p></Col>
                      <Col xs={6} className={`float-right`}><p>Unread</p></Col>
                    </Row>
                    </div> */}
                    {/* requirements */}
                    <div className={` ${styles.WhiteReq} mt-3`} 
                    onClick={() => handleClickMakeupReq() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{makReqOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className={`${styles.WhiteReq1} d-none d-sm-block`}> REQUIREMENTS</p>
                    <p className={`${styles.WhiteReq1} d-block d-sm-none`}> REQUIREM.</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`${styles.Red} float-left`}>{makReqUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* workspace */}
                    <div className={` ${styles.WhiteReq} mt-3`}
                    onClick={() => handleClickMakeupWor() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{makWorkOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > WORKSPACE</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{makWorkUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* Finals */}
                    <div className={` ${styles.WhiteReq} my-3`}
                    onClick={() => handleClickMakeupFin() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{makFinOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > FINALS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{makFinUnopen}</p></Col>
                    </Row>
                    </div>
                    </div>
              </Col>
              {/* WARDROBE 7 */}
              <Col className='px-2 px-md-2' xs={6} sm={4} md={3} lg={2} >
                    <div className={` ${styles.CardBox2} px-2`}
                    style={{
                      background: `url(${dep1})`,
                    }}
                    >
                      <Row className='my-2'>
                    <Col>
                    <h5 className={`text-center ${styles.White2} mt-2`} >
                    CAMERA
                    </h5>
                    </Col>
                    </Row>
                      {/* read */}
                    {/* <div className={`d-none d-sm-block ${styles.WhiteRead} mt-3`}>
                    <Row>
                      <Col xs={6} className={`text-center pr-5`}><p>Read</p></Col>
                      <Col xs={6} className={`text-center pl-4`}><p>Unread</p></Col>
                    </Row>
                    </div> */}
                    {/* read */}
                    {/* <div className={`d-block d-sm-none ${styles.WhiteRead} mt-3`}>
                    <Row>
                      <Col xs={6} className={`text-center`}><p>Read</p></Col>
                      <Col xs={6} className={`float-right`}><p>Unread</p></Col>
                    </Row>
                    </div> */}
                    {/* requirements */}
                    <div className={` ${styles.WhiteReq} mt-3`} 
                    onClick={() => handleClickWardrobeReq() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{warReqOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className={`${styles.WhiteReq1} d-none d-sm-block`}> REQUIREMENTS</p>
                    <p className={`${styles.WhiteReq1} d-block d-sm-none`}> REQUIREM.</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`${styles.Red} float-left`}>{warReqUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* workspace */}
                    <div className={` ${styles.WhiteReq} mt-3`}
                    onClick={() => handleClickWardrobeWor() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{warWorkOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > WORKSPACE</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{warWorkUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* Finals */}
                    <div className={` ${styles.WhiteReq} my-3`}
                    onClick={() => handleClickWardrobeFin() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{warFinOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > FINALS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{warFinUnopen}</p></Col>
                    </Row>
                    </div>
                    </div>
              </Col>
              {/* CAMERA 8 */}
              <Col className='px-2 px-md-2' xs={6} sm={4} md={3} lg={2} >
                    <div className={` ${styles.CardBox2} px-2`}
                    style={{
                      background: `url(${dep1})`,
                    }}
                    >
                      <Row className='my-2'>
                    <Col>
                    <h5 className={`text-center ${styles.White2} mt-2`} >
                    CAMERA
                    </h5>
                    </Col>
                    </Row>
                      {/* read */}
                    {/* <div className={`d-none d-sm-block ${styles.WhiteRead} mt-3`}>
                    <Row>
                      <Col xs={6} className={`text-center pr-5`}><p>Read</p></Col>
                      <Col xs={6} className={`text-center pl-4`}><p>Unread</p></Col>
                    </Row>
                    </div> */}
                    {/* read */}
                    {/* <div className={`d-block d-sm-none ${styles.WhiteRead} mt-3`}>
                    <Row>
                      <Col xs={6} className={`text-center`}><p>Read</p></Col>
                      <Col xs={6} className={`float-right`}><p>Unread</p></Col>
                    </Row>
                    </div> */}
                    {/* requirements */}
                    <div className={` ${styles.WhiteReq} mt-3`} 
                    onClick={() => handleClickCastingReq() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{casReqOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className={`${styles.WhiteReq1} d-none d-sm-block`}> REQUIREMENTS</p>
                    <p className={`${styles.WhiteReq1} d-block d-sm-none`}> REQUIREM.</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`${styles.Red} float-left`}>{casReqUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* workspace */}
                    <div className={` ${styles.WhiteReq} mt-3`}
                    onClick={() => handleClickCastingWor() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{casWorkOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > WORKSPACE</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{casWorkUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* Finals */}
                    <div className={` ${styles.WhiteReq} my-3`}
                    onClick={() => handleClickCastingFin() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{casFinOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > FINALS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{casFinUnopen}</p></Col>
                    </Row>
                    </div>
                    </div>
              </Col>
              {/* POST/VFX 9 */}
              <Col className='px-2 px-md-2' xs={6} sm={4} md={3} lg={2} >
                    <div className={` ${styles.CardBox2} px-2`}
                    style={{
                      background: `url(${dep7})`,
                    }}
                    >
                    <Row className='my-2'>
                    <Col>
                    <h5 className={`text-center ${styles.White2} mt-2`} >
                    CAMERA
                    </h5>
                    </Col>
                    </Row>
                      {/* read */}
                    {/* <div className={`d-none d-sm-block ${styles.WhiteRead} mt-3`}>
                    <Row>
                      <Col xs={6} className={`text-center pr-5`}><p>Read</p></Col>
                      <Col xs={6} className={`text-center pl-4`}><p>Unread</p></Col>
                    </Row>
                    </div> */}
                    {/* read */}
                    {/* <div className={`d-block d-sm-none ${styles.WhiteRead} mt-3`}>
                    <Row>
                      <Col xs={6} className={`text-center`}><p>Read</p></Col>
                      <Col xs={6} className={`float-right`}><p>Unread</p></Col>
                    </Row>
                    </div> */}
                    {/* requirements */}
                    <div className={` ${styles.WhiteReq} mt-3`} 
                    onClick={() => handleClickPostReq() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{posReqOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className={`${styles.WhiteReq1} d-none d-sm-block`}> REQUIREMENTS</p>
                    <p className={`${styles.WhiteReq1} d-block d-sm-none`}> REQUIREM.</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`${styles.Red} float-left`}>{posReqUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* workspace */}
                    <div className={` ${styles.WhiteReq} mt-3`}
                    onClick={() => handleClickPostWor() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{posWorkOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > WORKSPACE</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{posWorkUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* Finals */}
                    <div className={` ${styles.WhiteReq} my-3`}
                    onClick={() => handleClickPostFin() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{posFinOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > FINALS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{posFinUnopen}</p></Col>
                    </Row>
                    </div>
                    </div>
              </Col>
              {/* PRODUCTION 10 */}
              <Col className='px-2 px-md-2' xs={6} sm={4} md={3} lg={2} >
                    <div className={` ${styles.CardBox2} px-2`}
                    style={{
                      background: `url(${dep1})`,
                    }}
                    >
                      <Row className='my-2'>
                    <Col>
                    <h5 className={`text-center ${styles.White2} mt-2`} >
                    PRODUCTION
                    </h5>
                    </Col>
                    </Row>
                      {/* read */}
                    {/* <div className={`d-none d-sm-block ${styles.WhiteRead} mt-3`}>
                    <Row>
                      <Col xs={6} className={`text-center pr-5`}><p>Read</p></Col>
                      <Col xs={6} className={`text-center pl-4`}><p>Unread</p></Col>
                    </Row>
                    </div> */}
                    {/* read */}
                    {/* <div className={`d-block d-sm-none ${styles.WhiteRead} mt-3`}>
                    <Row>
                      <Col xs={6} className={`text-center`}><p>Read</p></Col>
                      <Col xs={6} className={`float-right`}><p>Unread</p></Col>
                    </Row>
                    </div> */}
                    {/* requirements */}
                    <div className={` ${styles.WhiteReq} mt-3`} 
                    onClick={() => handleClickProductionReq() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{proReqOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className={`${styles.WhiteReq1} d-none d-sm-block`}> REQUIREMENTS</p>
                    <p className={`${styles.WhiteReq1} d-block d-sm-none`}> REQUIREM.</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`${styles.Red} float-left`}>{proReqUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* workspace */}
                    <div className={` ${styles.WhiteReq} mt-3`}
                    onClick={() => handleClickProductionWor() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{proWorkOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > WORKSPACE</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{proWorkUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* Finals */}
                    <div className={` ${styles.WhiteReq} my-3`}
                    onClick={() => handleClickProductionFin() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{proFinOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > FINALS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{proFinUnopen}</p></Col>
                    </Row>
                    </div>
                    </div>
              </Col>
              {/* STUNTS 11*/}
              <Col className='px-2 px-md-2' xs={6} sm={4} md={3} lg={2} >
                    <div className={` ${styles.CardBox2} px-2`}
                    style={{
                      background: `url(${dep1})`,
                    }}
                    >
                      <Row className='my-2'>
                    <Col>
                    <h5 className={`text-center ${styles.White2} mt-2`} >
                    STUNTS
                    </h5>
                    </Col>
                    </Row>
                      {/* read */}
                    {/* <div className={`d-none d-sm-block ${styles.WhiteRead} mt-3`}>
                    <Row>
                      <Col xs={6} className={`text-center pr-5`}><p>Read</p></Col>
                      <Col xs={6} className={`text-center pl-4`}><p>Unread</p></Col>
                    </Row>
                    </div> */}
                    {/* read */}
                    {/* <div className={`d-block d-sm-none ${styles.WhiteRead} mt-3`}>
                    <Row>
                      <Col xs={6} className={`text-center`}><p>Read</p></Col>
                      <Col xs={6} className={`float-right`}><p>Unread</p></Col>
                    </Row>
                    </div> */}
                    {/* requirements */}
                    <div className={` ${styles.WhiteReq} mt-3`} 
                    onClick={() => handleClickStuntsReq() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{stuReqOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className={`${styles.WhiteReq1} d-none d-sm-block`}> REQUIREMENTS</p>
                    <p className={`${styles.WhiteReq1} d-block d-sm-none`}> REQUIREM.</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`${styles.Red} float-left`}>{stuReqUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* workspace */}
                    <div className={` ${styles.WhiteReq} mt-3`}
                    onClick={() => handleClickStuntsWor() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{stuWorkOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > WORKSPACE</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{stuWorkUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* Finals */}
                    <div className={` ${styles.WhiteReq} my-3`}
                    onClick={() => handleClickStuntsFin() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{stuFinOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > FINALS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{stuFinUnopen}</p></Col>
                    </Row>
                    </div>
                    </div>
              </Col>
              {/* ELECTRIC 12 */}
              <Col className='px-2 px-md-2' xs={6} sm={4} md={3} lg={2} >
                    <div className={` ${styles.CardBox2} px-2`}
                    style={{
                      background: `url(${dep5})`,
                    }}
                    >
                      <Row className='my-2'>
                    <Col>
                    <h5 className={`text-center ${styles.White2} mt-2`} >
                    ELECTRIC/GRIP
                    </h5>
                    </Col>
                    </Row>
                      {/* read */}
                    {/* <div className={`d-none d-sm-block ${styles.WhiteRead} mt-3`}>
                    <Row>
                      <Col xs={6} className={`text-center pr-5`}><p>Read</p></Col>
                      <Col xs={6} className={`text-center pl-4`}><p>Unread</p></Col>
                    </Row>
                    </div> */}
                    {/* read */}
                    {/* <div className={`d-block d-sm-none ${styles.WhiteRead} mt-3`}>
                    <Row>
                      <Col xs={6} className={`text-center`}><p>Read</p></Col>
                      <Col xs={6} className={`float-right`}><p>Unread</p></Col>
                    </Row>
                    </div> */}
                    {/* requirements */}
                    <div className={` ${styles.WhiteReq} mt-3`} 
                    onClick={() => handleClickElectricReq() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{eleReqOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className={`${styles.WhiteReq1} d-none d-sm-block`}> REQUIREMENTS</p>
                    <p className={`${styles.WhiteReq1} d-block d-sm-none`}> REQUIREM.</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`${styles.Red} float-left`}>{eleReqUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* workspace */}
                    <div className={` ${styles.WhiteReq} mt-3`}
                    onClick={() => handleClickElectricWor() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{eleWorkOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > WORKSPACE</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{eleWorkUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* Finals */}
                    <div className={` ${styles.WhiteReq} my-3`}
                    onClick={() => handleClickElectricFin() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{eleFinOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > FINALS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{eleFinUnopen}</p></Col>
                    </Row>
                    </div>
                    </div>
              </Col>
              </Row>
            </div>

            {/* Department Image links New April 2025 all white small on mobile with color */}
            <div className='mt-5 pt-5'>
            <h1>NO 3 - White Small on mobile with color</h1>
              {/* Camera Sound ... */}
              <Row className='px-2'>
              {/* Location */}
              <Col className='px-2 px-md-2' xs={4} md={3} lg={2} >
                    <div className={` ${styles.CardBox2} px-2`}
                    style={{ backgroundColor: 'rgb(248 241 249)'}}
                    >
                      {/* read */}
                    <div className={`d-none d-sm-block ${styles.WhiteRead}`}>
                    <Row>
                      <Col xs={6} className={`text-center pr-5`}><p>Read</p></Col>
                      <Col xs={6} className={`text-center pl-2`}><p>Unread</p></Col>
                    </Row>
                    <hr className='my-0'/>
                    </div>
                    {/* read */}
                    <div className={`d-block d-sm-none ${styles.WhiteRead} pr-4 pr-sm-0`}>
                    <Row>
                      <Col xs={6} className={`text-center`}><p>Read</p></Col>
                      <Col xs={6} className={`float-right`}><p>Unread</p></Col>
                    </Row>
                    <hr className='my-0'/>
                    </div>
                    {/* requirements */}
                    <div className={` ${styles.WhiteReq} mt-1`} 
                    onClick={() => handleClickLocationReq() }>
                    <Row className='py-2 py-md-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locReqOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className='d-block d-md-none'> REQ</p>
                    <p className='d-none d-md-block'> REQUIREMENTS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locReqUnopen}</p></Col>
                    </Row>
                    </div>
                    <hr className='my-0 pb-1'/>
                    {/* workspace */}
                    <div className={` ${styles.WhiteReq}`}
                    onClick={() => handleClickLocationWor() }>
                    <Row className='py-2 py-md-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locWorkOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className='d-block d-md-none'> WORK</p>
                    <p className='d-none d-md-block'> WORKSPACE</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locWorkUnopen}</p></Col>
                    </Row>
                    </div>
                    <hr className='my-0 pb-1'/>
                    {/* Finals */}
                    <div className={` ${styles.WhiteReq} mb-1`}
                    onClick={() => handleClickLocationFin() }>
                    <Row className='py-2 py-md-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locFinOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className='d-block d-md-none'> FINALS</p>
                    <p className='d-none d-md-block'> FINALS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locFinUnopen}</p></Col>
                    </Row>
                    </div>
                    </div>
                    <p className={`text-center ${styles.Bold}`}>CAMERA</p>
              </Col>
              {/* Location */}
              <Col className='px-1 px-md-2' xs={4} md={3} lg={2} >
                    <div className={` ${styles.CardBox2} px-2`} 
                    style={{ backgroundColor: '#dbfaf9'}}
                    >
                      {/* read */}
                    <div className={`d-none d-sm-block ${styles.WhiteRead}`}>
                    <Row>
                      <Col xs={6} className={`text-center pr-5`}><p>Read</p></Col>
                      <Col xs={6} className={`text-center pl-5`}><p>Unread</p></Col>
                    </Row>
                    <hr className='my-0'/>
                    </div>
                    {/* read */}
                    <div className={`d-block d-sm-none ${styles.WhiteRead} pr-4 pr-sm-0`}>
                    <Row>
                      <Col xs={6} className={`text-center`}><p>Read</p></Col>
                      <Col xs={6} className={`float-right`}><p>Unread</p></Col>
                    </Row>
                    <hr className='my-0'/>
                    </div>
                    {/* requirements */}
                    <div className={` ${styles.WhiteReq}`} 
                    onClick={() => handleClickLocationReq() }>
                    <Row className='py-2 py-md-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locReqOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className='d-block d-md-none'> REQ</p>
                    <p className='d-none d-md-block'> REQUIREMENTS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locReqUnopen}</p></Col>
                    </Row>
                    </div>
                    <hr className='my-0'/>
                    {/* workspace */}
                    <div className={` ${styles.WhiteReq}`}
                    onClick={() => handleClickLocationWor() }>
                    <Row className='py-2 py-md-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locWorkOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className='d-block d-md-none'> WORK</p>
                    <p className='d-none d-md-block'> WORKSPACE</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locWorkUnopen}</p></Col>
                    </Row>
                    </div>
                    <hr className='my-0'/>
                    {/* Finals */}
                    <div className={` ${styles.WhiteReq}`}
                    onClick={() => handleClickLocationFin() }>
                    <Row className='py-2 py-md-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locFinOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className='d-block d-md-none'> FINALS</p>
                    <p className='d-none d-md-block'> FINALS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locFinUnopen}</p></Col>
                    </Row>
                    </div>
                    </div>
                    <p className={`text-center ${styles.Bold}`}>SOUND</p>
              </Col>
              {/* Location */}
              <Col className='px-1 px-md-2' xs={4} md={3} lg={2} >
                    <div className={` ${styles.CardBox2} px-2`} 
                    style={{ backgroundColor: 'rgb(223 254 240)'}}
                    >
                      {/* read */}
                    <div className={`d-none d-sm-block ${styles.WhiteRead}`}>
                    <Row>
                      <Col xs={6} className={`text-center pr-5`}><p>Read</p></Col>
                      <Col xs={6} className={`text-center pl-5`}><p>Unread</p></Col>
                    </Row>
                    <hr className='my-0'/>
                    </div>
                    {/* read */}
                    <div className={`d-block d-sm-none ${styles.WhiteRead} pr-3 pr-sm-0`}>
                    <Row>
                      <Col xs={6} className={`text-center`}><p>Read</p></Col>
                      <Col xs={6} className={`float-right`}><p>Unread</p></Col>
                    </Row>
                    <hr className='my-0'/>
                    </div>
                    {/* requirements */}
                    <div className={` ${styles.WhiteReq}`} 
                    onClick={() => handleClickLocationReq() }>
                    <Row className='py-2 py-md-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locReqOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className='d-block d-md-none'> REQ</p>
                    <p className='d-none d-md-block'> REQUIREMENTS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locReqUnopen}</p></Col>
                    </Row>
                    </div>
                    <hr className='my-0'/>
                    {/* workspace */}
                    <div className={` ${styles.WhiteReq}`}
                    onClick={() => handleClickLocationWor() }>
                    <Row className='py-2 py-md-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locWorkOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className='d-block d-md-none'> WORK</p>
                    <p className='d-none d-md-block'> WORKSPACE</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locWorkUnopen}</p></Col>
                    </Row>
                    </div>
                    <hr className='my-0'/>
                    {/* Finals */}
                    <div className={` ${styles.WhiteReq}`}
                    onClick={() => handleClickLocationFin() }>
                    <Row className='py-2 py-md-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locFinOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className='d-block d-md-none'> FINALS</p>
                    <p className='d-none d-md-block'> FINALS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locFinUnopen}</p></Col>
                    </Row>
                    </div>
                    </div>
                    <p className={`text-center ${styles.Bold}`}>LOCATION</p>
              </Col>
              {/* Location */}
              <Col className='px-1 px-md-2' xs={4} md={3} lg={2} >
                    <div className={` ${styles.CardBox2} px-2`} 
                    style={{ backgroundColor: '#dbfaf9'}}
                    >
                      {/* read */}
                    <div className={`d-none d-sm-block ${styles.WhiteRead}`}>
                    <Row>
                      <Col xs={6} className={`text-center pr-5`}><p>Read</p></Col>
                      <Col xs={6} className={`text-center pl-5`}><p>Unread</p></Col>
                    </Row>
                    <hr className='my-0'/>
                    </div>
                    {/* read */}
                    <div className={`d-block d-sm-none ${styles.WhiteRead} pr-3 pr-sm-0`}>
                    <Row>
                      <Col xs={6} className={`text-center`}><p>Read</p></Col>
                      <Col xs={6} className={`float-right`}><p>Unread</p></Col>
                    </Row>
                    <hr className='my-0'/>
                    </div>
                    {/* requirements */}
                    <div className={` ${styles.WhiteReq}`} 
                    onClick={() => handleClickLocationReq() }>
                    <Row className='py-2 py-md-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locReqOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className='d-block d-md-none'> REQ</p>
                    <p className='d-none d-md-block'> REQUIREMENTS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locReqUnopen}</p></Col>
                    </Row>
                    </div>
                    <hr className='my-0'/>
                    {/* workspace */}
                    <div className={` ${styles.WhiteReq}`}
                    onClick={() => handleClickLocationWor() }>
                    <Row className='py-2 py-md-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locWorkOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className='d-block d-md-none'> WORK</p>
                    <p className='d-none d-md-block'> WORKSPACE</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locWorkUnopen}</p></Col>
                    </Row>
                    </div>
                    <hr className='my-0'/>
                    {/* Finals */}
                    <div className={` ${styles.WhiteReq}`}
                    onClick={() => handleClickLocationFin() }>
                    <Row className='py-2 py-md-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locFinOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className='d-block d-md-none'> FINALS</p>
                    <p className='d-none d-md-block'> FINALS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locFinUnopen}</p></Col>
                    </Row>
                    </div>
                    </div>
                    <p className={`text-center ${styles.Bold}`}>SCRIPT</p>
              </Col>
              {/* Location */}
              <Col className='px-1 px-md-2' xs={4} md={3} lg={2} >
                    <div className={` ${styles.CardBox2} px-2`} 
                    style={{ backgroundColor: 'rgb(223 254 240)'}}
                    >
                      {/* read */}
                    <div className={`d-none d-sm-block ${styles.WhiteRead}`}>
                    <Row>
                      <Col xs={6} className={`text-center pr-5`}><p>Read</p></Col>
                      <Col xs={6} className={`text-center pl-5`}><p>Unread</p></Col>
                    </Row>
                    <hr className='my-0'/>
                    </div>
                    {/* read */}
                    <div className={`d-block d-sm-none ${styles.WhiteRead} pr-3 pr-sm-0`}>
                    <Row>
                      <Col xs={6} className={`text-center`}><p>Read</p></Col>
                      <Col xs={6} className={`float-right`}><p>Unread</p></Col>
                    </Row>
                    <hr className='my-0'/>
                    </div>
                    {/* requirements */}
                    <div className={` ${styles.WhiteReq}`} 
                    onClick={() => handleClickLocationReq() }>
                    <Row className='py-2 py-md-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locReqOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className='d-block d-md-none'> REQ</p>
                    <p className='d-none d-md-block'> REQUIREMENTS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locReqUnopen}</p></Col>
                    </Row>
                    </div>
                    <hr className='my-0'/>
                    {/* workspace */}
                    <div className={` ${styles.WhiteReq}`}
                    onClick={() => handleClickLocationWor() }>
                    <Row className='py-2 py-md-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locWorkOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className='d-block d-md-none'> WORK</p>
                    <p className='d-none d-md-block'> WORKSPACE</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locWorkUnopen}</p></Col>
                    </Row>
                    </div>
                    <hr className='my-0'/>
                    {/* Finals */}
                    <div className={` ${styles.WhiteReq}`}
                    onClick={() => handleClickLocationFin() }>
                    <Row className='py-2 py-md-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locFinOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className='d-block d-md-none'> FINALS</p>
                    <p className='d-none d-md-block'> FINALS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locFinUnopen}</p></Col>
                    </Row>
                    </div>
                    </div>
                    <p className={`text-center ${styles.Bold}`}>MAKEUP</p>
                    
              </Col>
              {/* Location */}
              <Col className='px-1 px-md-2' xs={4} md={3} lg={2} >
                    <div className={` ${styles.CardBox2} px-2`}
                    style={{ backgroundColor: 'rgb(248 241 249)'}}
                    >
                      {/* read */}
                    <div className={`d-none d-sm-block ${styles.WhiteRead}`}>
                    <Row>
                      <Col xs={6} className={`text-center pr-5`}><p>Read</p></Col>
                      <Col xs={6} className={`text-center pl-5`}><p>Unread</p></Col>
                    </Row>
                    <hr className='my-0'/>
                    </div>
                    {/* read */}
                    <div className={`d-block d-sm-none ${styles.WhiteRead} pr-3 pr-sm-0`}>
                    <Row>
                      <Col xs={6} className={`text-center`}><p>Read</p></Col>
                      <Col xs={6} className={`float-right`}><p>Unread</p></Col>
                    </Row>
                    <hr className='my-0'/>
                    </div>
                    {/* requirements */}
                    <div className={` ${styles.WhiteReq}`} 
                    onClick={() => handleClickLocationReq() }>
                    <Row className='py-2 py-md-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locReqOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className='d-block d-md-none'> REQ</p>
                    <p className='d-none d-md-block'> REQUIREMENTS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locReqUnopen}</p></Col>
                    </Row>
                    </div>
                    <hr className='my-0'/>
                    {/* workspace */}
                    <div className={` ${styles.WhiteReq}`}
                    onClick={() => handleClickLocationWor() }>
                    <Row className='py-2 py-md-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locWorkOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className='d-block d-md-none'> WORK</p>
                    <p className='d-none d-md-block'> WORKSPACE</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locWorkUnopen}</p></Col>
                    </Row>
                    </div>
                    <hr className='my-0'/>
                    {/* Finals */}
                    <div className={` ${styles.WhiteReq}`}
                    onClick={() => handleClickLocationFin() }>
                    <Row className='py-2 py-md-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locFinOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className='d-block d-md-none'> FINALS</p>
                    <p className='d-none d-md-block'> FINALS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locFinUnopen}</p></Col>
                    </Row>
                    </div>
                    </div>
                    <p className={`text-center ${styles.Bold}`}>ART</p>
              </Col>
              {/* Location */}
              <Col className='px-1 px-md-2' xs={4} md={3} lg={2} >
                    <div className={` ${styles.CardBox2} px-2`} 
                    style={{ backgroundColor: 'rgb(248 241 249)'}}
                    >
                      {/* read */}
                    <div className={`d-none d-sm-block ${styles.WhiteRead}`}>
                    <Row>
                      <Col xs={6} className={`text-center pr-5`}><p>Read</p></Col>
                      <Col xs={6} className={`text-center pl-5`}><p>Unread</p></Col>
                    </Row>
                    <hr className='my-0'/>
                    </div>
                    {/* read */}
                    <div className={`d-block d-sm-none ${styles.WhiteRead} pr-3 pr-sm-0`}>
                    <Row>
                      <Col xs={6} className={`text-center`}><p>Read</p></Col>
                      <Col xs={6} className={`float-right`}><p>Unread</p></Col>
                    </Row>
                    <hr className='my-0'/>
                    </div>
                    {/* requirements */}
                    <div className={` ${styles.WhiteReq}`} 
                    onClick={() => handleClickLocationReq() }>
                    <Row className='py-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locReqOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className='d-block d-md-none'> REQ</p>
                    <p className='d-none d-md-block'> REQUIREMENTS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locReqUnopen}</p></Col>
                    </Row>
                    </div>
                    <hr className='my-0'/>
                    {/* workspace */}
                    <div className={` ${styles.WhiteReq}`}
                    onClick={() => handleClickLocationWor() }>
                    <Row className='py-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locWorkOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className='d-block d-md-none'> WORK</p>
                    <p className='d-none d-md-block'> WORKSPACE</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locWorkUnopen}</p></Col>
                    </Row>
                    </div>
                    <hr className='my-0'/>
                    {/* Finals */}
                    <div className={` ${styles.WhiteReq}`}
                    onClick={() => handleClickLocationFin() }>
                    <Row className='py-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locFinOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className='d-block d-md-none'> FINALS</p>
                    <p className='d-none d-md-block'> FINALS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locFinUnopen}</p></Col>
                    </Row>
                    </div>
                    </div>
                    <p className={`text-center ${styles.Bold}`}>CAMERA</p>
              </Col>
              {/* Location */}
              <Col className='px-1 px-md-2' xs={4} md={3} lg={2} >
                    <div className={` ${styles.CardBox2} px-2`} 
                    style={{ backgroundColor: 'rgb(223 254 240)'}}
                    >
                      {/* read */}
                    <div className={`d-none d-sm-block ${styles.WhiteRead}`}>
                    <Row>
                      <Col xs={6} className={`text-center pr-5`}><p>Read</p></Col>
                      <Col xs={6} className={`text-center pl-5`}><p>Unread</p></Col>
                    </Row>
                    <hr className='my-0'/>
                    </div>
                    {/* read */}
                    <div className={`d-block d-sm-none ${styles.WhiteRead} pr-3 pr-sm-0`}>
                    <Row>
                      <Col xs={6} className={`text-center`}><p>Read</p></Col>
                      <Col xs={6} className={`float-right`}><p>Unread</p></Col>
                    </Row>
                    <hr className='my-0'/>
                    </div>
                    {/* requirements */}
                    <div className={` ${styles.WhiteReq}`} 
                    onClick={() => handleClickLocationReq() }>
                    <Row className='py-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locReqOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className='d-block d-md-none'> REQ</p>
                    <p className='d-none d-md-block'> REQUIREMENTS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locReqUnopen}</p></Col>
                    </Row>
                    </div>
                    <hr className='my-0'/>
                    {/* workspace */}
                    <div className={` ${styles.WhiteReq}`}
                    onClick={() => handleClickLocationWor() }>
                    <Row className='py-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locWorkOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className='d-block d-md-none'> WORK</p>
                    <p className='d-none d-md-block'> WORKSPACE</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locWorkUnopen}</p></Col>
                    </Row>
                    </div>
                    <hr className='my-0'/>
                    {/* Finals */}
                    <div className={` ${styles.WhiteReq}`}
                    onClick={() => handleClickLocationFin() }>
                    <Row className='py-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locFinOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > FINALS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locFinUnopen}</p></Col>
                    </Row>
                    </div>
                    </div>
                    <p className={`text-center ${styles.Bold}`}>SOUND</p>
              </Col>
              {/* Location */}
              <Col className='px-1 px-md-2' xs={4} md={3} lg={2} >
                    <div className={` ${styles.CardBox2} px-2`} 
                    style={{ backgroundColor: '#dbfaf9'}}
                    >
                      {/* read */}
                    <div className={`d-none d-sm-block ${styles.WhiteRead}`}>
                    <Row>
                      <Col xs={6} className={`text-center pr-5`}><p>Read</p></Col>
                      <Col xs={6} className={`text-center pl-5`}><p>Unread</p></Col>
                    </Row>
                    <hr className='my-0'/>
                    </div>
                    {/* read */}
                    <div className={`d-block d-sm-none ${styles.WhiteRead} pr-3 pr-sm-0`}>
                    <Row>
                      <Col xs={6} className={`text-center`}><p>Read</p></Col>
                      <Col xs={6} className={`float-right`}><p>Unread</p></Col>
                    </Row>
                    <hr className='my-0'/>
                    </div>
                    {/* requirements */}
                    <div className={` ${styles.WhiteReq}`} 
                    onClick={() => handleClickLocationReq() }>
                    <Row className='py-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locReqOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className='d-block d-md-none'> REQ</p>
                    <p className='d-none d-md-block'> REQUIREMENTS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locReqUnopen}</p></Col>
                    </Row>
                    </div>
                    <hr className='my-0'/>
                    {/* workspace */}
                    <div className={` ${styles.WhiteReq}`}
                    onClick={() => handleClickLocationWor() }>
                    <Row className='py-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locWorkOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className='d-block d-md-none'> WORK</p>
                    <p className='d-none d-md-block'> WORKSPACE</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locWorkUnopen}</p></Col>
                    </Row>
                    </div>
                    <hr className='my-0'/>
                    {/* Finals */}
                    <div className={` ${styles.WhiteReq}`}
                    onClick={() => handleClickLocationFin() }>
                    <Row className='py-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locFinOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className='d-block d-md-none'> FINALS</p>
                    <p className='d-none d-md-block'> FINALS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locFinUnopen}</p></Col>
                    </Row>
                    </div>
                    </div>
                    <p className={`text-center ${styles.Bold}`}>LOCATION</p>
              </Col>
              {/* Location */}
              <Col className='px-1 px-md-2' xs={4} md={3} lg={2} >
                    <div className={` ${styles.CardBox2} px-2`}
                    style={{ backgroundColor: '#dbfaf9'}}
                    >
                      {/* read */}
                    <div className={`d-none d-sm-block ${styles.WhiteRead}`}>
                    <Row>
                      <Col xs={6} className={`text-center pr-5`}><p>Read</p></Col>
                      <Col xs={6} className={`text-center pl-5`}><p>Unread</p></Col>
                    </Row>
                    <hr className='my-0'/>
                    </div>
                    {/* read */}
                    <div className={`d-block d-sm-none ${styles.WhiteRead} pr-3 pr-sm-0`}>
                    <Row>
                      <Col xs={6} className={`text-center`}><p>Read</p></Col>
                      <Col xs={6} className={`float-right`}><p>Unread</p></Col>
                    </Row>
                    <hr className='my-0'/>
                    </div>
                    {/* requirements */}
                    <div className={` ${styles.WhiteReq}`} 
                    onClick={() => handleClickLocationReq() }>
                    <Row className='py-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locReqOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className='d-block d-md-none'> REQ</p>
                    <p className='d-none d-md-block'> REQUIREMENTS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locReqUnopen}</p></Col>
                    </Row>
                    </div>
                    <hr className='my-0'/>
                    {/* workspace */}
                    <div className={` ${styles.WhiteReq}`}
                    onClick={() => handleClickLocationWor() }>
                    <Row className='py-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locWorkOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className='d-block d-md-none'> WORK</p>
                    <p className='d-none d-md-block'> WORKSPACE</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locWorkUnopen}</p></Col>
                    </Row>
                    </div>
                    <hr className='my-0'/>
                    {/* Finals */}
                    <div className={` ${styles.WhiteReq}`}
                    onClick={() => handleClickLocationFin() }>
                    <Row className='py-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locFinOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > FINALS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locFinUnopen}</p></Col>
                    </Row>
                    </div>
                    </div>
                    <p className={`text-center ${styles.Bold}`}>SCRIPT</p>
              </Col>
              {/* Location */}
              <Col className='px-1 px-md-2' xs={4} md={3} lg={2} >
                    <div className={` ${styles.CardBox2} px-2`}
                    style={{ backgroundColor: 'rgb(248 241 249)'}}
                     >
                      {/* read */}
                    <div className={`d-none d-sm-block ${styles.WhiteRead}`}>
                    <Row>
                      <Col xs={6} className={`text-center pr-5`}><p>Read</p></Col>
                      <Col xs={6} className={`text-center pl-5`}><p>Unread</p></Col>
                    </Row>
                    <hr className='my-0'/>
                    </div>
                    {/* read */}
                    <div className={`d-block d-sm-none ${styles.WhiteRead} pr-3 pr-sm-0`}>
                    <Row>
                      <Col xs={6} className={`text-center`}><p>Read</p></Col>
                      <Col xs={6} className={`float-right`}><p>Unread</p></Col>
                    </Row>
                    <hr className='my-0'/>
                    </div>
                    {/* requirements */}
                    <div className={` ${styles.WhiteReq}`} 
                    onClick={() => handleClickLocationReq() }>
                    <Row className='py-2 py-md-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locReqOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className='d-block d-md-none'> REQ</p>
                    <p className='d-none d-md-block'> REQUIREMENTS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locReqUnopen}</p></Col>
                    </Row>
                    </div>
                    <hr className='my-0'/>
                    {/* workspace */}
                    <div className={` ${styles.WhiteReq}`}
                    onClick={() => handleClickLocationWor() }>
                    <Row className='py-2 py-md-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locWorkOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className='d-block d-md-none'> WORK</p>
                    <p className='d-none d-md-block'> WORKSPACE</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locWorkUnopen}</p></Col>
                    </Row>
                    </div>
                    <hr className='my-0'/>
                    {/* Finals */}
                    <div className={` ${styles.WhiteReq}`}
                    onClick={() => handleClickLocationFin() }>
                    <Row className='py-2 py-md-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locFinOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > FINALS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locFinUnopen}</p></Col>
                    </Row>
                    </div>
                    </div>
                    <p className={`text-center ${styles.Bold}`}>MAKEUP</p>                    
              </Col>
              {/* Location */}
              <Col className='px-1 px-md-2' xs={4} md={3} lg={2} >
                    <div className={` ${styles.CardBox2} px-2`} 
                    style={{ backgroundColor: 'rgb(223 254 240)'}}
                    >
                      {/* read */}
                    <div className={`d-none d-sm-block ${styles.WhiteRead}`}>
                    <Row>
                      <Col xs={6} className={`text-center pr-5`}><p>Read</p></Col>
                      <Col xs={6} className={`text-center pl-5`}><p>Unread</p></Col>
                    </Row>
                    <hr className='my-0'/>
                    </div>
                    {/* read */}
                    <div className={`d-block d-sm-none ${styles.WhiteRead} pr-3 pr-sm-0`}>
                    <Row>
                      <Col xs={6} className={`text-center`}><p>Read</p></Col>
                      <Col xs={6} className={`float-right`}><p>Unread</p></Col>
                    </Row>
                    <hr className='my-0'/>
                    </div>
                    {/* requirements */}
                    <div className={` ${styles.WhiteReq}`} 
                    onClick={() => handleClickLocationReq() }>
                    <Row className='py-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locReqOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className='d-block d-md-none'> REQ</p>
                    <p className='d-none d-md-block'> REQUIREMENTS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locReqUnopen}</p></Col>
                    </Row>
                    </div>
                    <hr className='my-0'/>
                    {/* workspace */}
                    <div className={` ${styles.WhiteReq}`}
                    onClick={() => handleClickLocationWor() }>
                    <Row className='py-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locWorkOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className='d-block d-md-none'> WORK</p>
                    <p className='d-none d-md-block'> WORKSPACE</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locWorkUnopen}</p></Col>
                    </Row>
                    </div>
                    <hr className='my-0'/>
                    {/* Finals */}
                    <div className={` ${styles.WhiteReq}`}
                    onClick={() => handleClickLocationFin() }>
                    <Row className='py-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locFinOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > FINALS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locFinUnopen}</p></Col>
                    </Row>
                    </div>
                    </div>
                    <p className={`text-center ${styles.Bold}`}>ART</p>
              </Col>
              </Row>
            </div>

            {/* Department Image links New April 2025 all white */}
            <div className='mt-5 pt-5'>
            <h1>NO 2 - White</h1>
              {/* Camera Sound ... */}
              <Row className='px-3'>
                    {/* Location */}
                    <Col className='px-1 px-md-2' xs={6} sm={4} md={3} lg={2} >
                    <div className={` ${styles.CardBox2} px-0`} >
                    {/* read */}
                    <div className={` ${styles.WhiteRead}`}>
                    <Row>
                      <Col xs={6} className={`text-center pr-5`}><p>Read</p></Col>
                      <Col xs={6} className={`text-center pl-3`}><p>Unread</p></Col>
                    </Row>
                    <hr className='my-0'/>
                    </div>
                    {/* requirements */}
                    <div className={` ${styles.WhiteReq}`} 
                    onClick={() => handleClickLocationReq() }>
                    <Row className='py-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locReqOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p> REQUIREMENTS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locReqUnopen}</p></Col>
                    </Row>
                    </div>
                    <hr className='my-0'/>
                    {/* workspace */}
                    <div className={` ${styles.WhiteReq}`}
                    onClick={() => handleClickLocationWor() }>
                    <Row className='py-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locWorkOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p> WORKSPACE</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locWorkUnopen}</p></Col>
                    </Row>
                    </div>
                    <hr className='my-0'/>
                    {/* Finals */}
                    <div className={` ${styles.WhiteReq}`}
                    onClick={() => handleClickLocationFin() }>
                    <Row className='py-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locFinOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p> FINALS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locFinUnopen}</p></Col>
                    </Row>
                    </div>
                      {/* <Card.Title className={`text-center ${styles.Title}`} >
                        LOCATION</Card.Title> */}
                    </div>
                    <p className={`text-center ${styles.Bold}`}>CAMERA</p>
                    </Col>
                    {/* Location */}
                    <Col className='px-1 px-md-2' xs={6} sm={4} md={3} lg={2} >
                    <div className={` ${styles.CardBox2} px-0`} >
                    {/* read */}
                    <div className={` ${styles.WhiteRead}`}>
                    <Row>
                      <Col xs={6} className={`text-center`}><p>Read</p></Col>
                      <Col xs={6} className={`text-center`}><p>Unread</p></Col>
                    </Row>
                    <hr className='my-0'/>
                    </div>
                    {/* requirements */}
                    <div className={` ${styles.WhiteReq}`} 
                    onClick={() => handleClickLocationReq() }>
                    <Row className='py-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locReqOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p> REQUIREMENTS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locReqUnopen}</p></Col>
                    </Row>
                    </div>
                    <hr className='my-0'/>
                    {/* workspace */}
                    <div className={` ${styles.WhiteReq}`}
                    onClick={() => handleClickLocationWor() }>
                    <Row className='py-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locWorkOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p> WORKSPACE</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locWorkUnopen}</p></Col>
                    </Row>
                    </div>
                    <hr className='my-0'/>
                    {/* Finals */}
                    <div className={` ${styles.WhiteReq}`}
                    onClick={() => handleClickLocationFin() }>
                    <Row className='py-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locFinOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p> FINALS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locFinUnopen}</p></Col>
                    </Row>
                    </div>
                      {/* <Card.Title className={`text-center ${styles.Title}`} >
                        LOCATION</Card.Title> */}
                    </div>
                    <p className={`text-center ${styles.Bold}`}>SOUND</p>
                    </Col>
                    {/* Location */}
                    <Col className='px-1 px-md-2' xs={6} sm={4} md={3} lg={2} >
                    <div className={` ${styles.CardBox2} px-0`} >
                    {/* read */}
                    <div className={` ${styles.WhiteRead}`}>
                    <Row>
                      <Col xs={6} className={`text-center`}><p>Read</p></Col>
                      <Col xs={6} className={`text-center`}><p>Unread</p></Col>
                    </Row>
                    <hr className='my-0'/>
                    </div>
                    {/* requirements */}
                    <div className={` ${styles.WhiteReq}`} 
                    onClick={() => handleClickLocationReq() }>
                    <Row className='py-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locReqOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p> REQUIREMENTS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locReqUnopen}</p></Col>
                    </Row>
                    </div>
                    <hr className='my-0'/>
                    {/* workspace */}
                    <div className={` ${styles.WhiteReq}`}
                    onClick={() => handleClickLocationWor() }>
                    <Row className='py-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locWorkOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p> WORKSPACE</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locWorkUnopen}</p></Col>
                    </Row>
                    </div>
                    <hr className='my-0'/>
                    {/* Finals */}
                    <div className={` ${styles.WhiteReq}`}
                    onClick={() => handleClickLocationFin() }>
                    <Row className='py-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locFinOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p> FINALS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locFinUnopen}</p></Col>
                    </Row>
                    </div>
                      {/* <Card.Title className={`text-center ${styles.Title}`} >
                        LOCATION</Card.Title> */}
                    </div>
                    <p className={`text-center ${styles.Bold}`}>LOCATION</p>
                    </Col>
                    {/* Location */}
                    <Col className='px-1 px-md-2' xs={6} sm={4} md={3} lg={2} >
                    <div className={` ${styles.CardBox2} px-0`} >
                    {/* read */}
                    <div className={` ${styles.WhiteRead}`}>
                    <Row>
                      <Col xs={6} className={`text-center`}><p>Read</p></Col>
                      <Col xs={6} className={`text-center`}><p>Unread</p></Col>
                    </Row>
                    <hr className='my-0'/>
                    </div>
                    {/* requirements */}
                    <div className={` ${styles.WhiteReq}`} 
                    onClick={() => handleClickLocationReq() }>
                    <Row className='py-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locReqOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p> REQUIREMENTS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locReqUnopen}</p></Col>
                    </Row>
                    </div>
                    <hr className='my-0'/>
                    {/* workspace */}
                    <div className={` ${styles.WhiteReq}`}
                    onClick={() => handleClickLocationWor() }>
                    <Row className='py-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locWorkOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p> WORKSPACE</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locWorkUnopen}</p></Col>
                    </Row>
                    </div>
                    <hr className='my-0'/>
                    {/* Finals */}
                    <div className={` ${styles.WhiteReq}`}
                    onClick={() => handleClickLocationFin() }>
                    <Row className='py-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locFinOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p> FINALS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locFinUnopen}</p></Col>
                    </Row>
                    </div>
                      {/* <Card.Title className={`text-center ${styles.Title}`} >
                        LOCATION</Card.Title> */}
                    </div>
                    <p className={`text-center ${styles.Bold}`}>SCRIPT</p>
                    </Col>
                    {/* Location */}
                    <Col className='px-1 px-md-2' xs={6} sm={4} md={3} lg={2} >
                    <div className={` ${styles.CardBox2} px-0`} >
                    {/* read */}
                    <div className={` ${styles.WhiteRead}`}>
                    <Row>
                      <Col xs={6} className={`text-center`}><p>Read</p></Col>
                      <Col xs={6} className={`text-center`}><p>Unread</p></Col>
                    </Row>
                    <hr className='my-0'/>
                    </div>
                    {/* requirements */}
                    <div className={` ${styles.WhiteReq}`} 
                    onClick={() => handleClickLocationReq() }>
                    <Row className='py-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locReqOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p> REQUIREMENTS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locReqUnopen}</p></Col>
                    </Row>
                    </div>
                    <hr className='my-0'/>
                    {/* workspace */}
                    <div className={` ${styles.WhiteReq}`}
                    onClick={() => handleClickLocationWor() }>
                    <Row className='py-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locWorkOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p> WORKSPACE</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locWorkUnopen}</p></Col>
                    </Row>
                    </div>
                    <hr className='my-0'/>
                    {/* Finals */}
                    <div className={` ${styles.WhiteReq}`}
                    onClick={() => handleClickLocationFin() }>
                    <Row className='py-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locFinOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p> FINALS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locFinUnopen}</p></Col>
                    </Row>
                    </div>
                      {/* <Card.Title className={`text-center ${styles.Title}`} >
                        LOCATION</Card.Title> */}
                    </div>
                    <p className={`text-center ${styles.Bold}`}>ART</p>
                    </Col>
                    {/* Location */}
                    <Col className='px-1 px-md-2' xs={6} sm={4} md={3} lg={2} >
                    <div className={` ${styles.CardBox2} px-0`} >
                    {/* read */}
                    <div className={` ${styles.WhiteRead}`}>
                    <Row>
                      <Col xs={6} className={`text-center`}><p>Read</p></Col>
                      <Col xs={6} className={`text-center`}><p>Unread</p></Col>
                    </Row>
                    <hr className='my-0'/>
                    </div>
                    {/* requirements */}
                    <div className={` ${styles.WhiteReq}`} 
                    onClick={() => handleClickLocationReq() }>
                    <Row className='py-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locReqOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p> REQUIREMENTS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locReqUnopen}</p></Col>
                    </Row>
                    </div>
                    <hr className='my-0'/>
                    {/* workspace */}
                    <div className={` ${styles.WhiteReq}`}
                    onClick={() => handleClickLocationWor() }>
                    <Row className='py-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locWorkOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p> WORKSPACE</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locWorkUnopen}</p></Col>
                    </Row>
                    </div>
                    <hr className='my-0'/>
                    {/* Finals */}
                    <div className={` ${styles.WhiteReq}`}
                    onClick={() => handleClickLocationFin() }>
                    <Row className='py-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locFinOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p> FINALS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locFinUnopen}</p></Col>
                    </Row>
                    </div>
                      {/* <Card.Title className={`text-center ${styles.Title}`} >
                        LOCATION</Card.Title> */}
                    </div>
                    <p className={`text-center ${styles.Bold}`}>MAKEUP</p>
                    </Col>
                    {/* Location */}
                    <Col className='px-1 px-md-2' xs={6} sm={4} md={3} lg={2} >
                    <div className={` ${styles.CardBox2} px-0`} >
                    {/* read */}
                    <div className={` ${styles.WhiteRead}`}>
                    <Row>
                      <Col xs={6} className={`text-center`}><p>Read</p></Col>
                      <Col xs={6} className={`text-center`}><p>Unread</p></Col>
                    </Row>
                    <hr className='my-0'/>
                    </div>
                    {/* requirements */}
                    <div className={` ${styles.WhiteReq}`} 
                    onClick={() => handleClickLocationReq() }>
                    <Row className='py-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locReqOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p> REQUIREMENTS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locReqUnopen}</p></Col>
                    </Row>
                    </div>
                    <hr className='my-0'/>
                    {/* workspace */}
                    <div className={` ${styles.WhiteReq}`}
                    onClick={() => handleClickLocationWor() }>
                    <Row className='py-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locWorkOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p> WORKSPACE</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locWorkUnopen}</p></Col>
                    </Row>
                    </div>
                    <hr className='my-0'/>
                    {/* Finals */}
                    <div className={` ${styles.WhiteReq}`}
                    onClick={() => handleClickLocationFin() }>
                    <Row className='py-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locFinOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p> FINALS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locFinUnopen}</p></Col>
                    </Row>
                    </div>
                      {/* <Card.Title className={`text-center ${styles.Title}`} >
                        LOCATION</Card.Title> */}
                    </div>
                    <p className={`text-center ${styles.Bold}`}>LOCATION</p>
                    </Col>
                    {/* Location */}
                    <Col className='px-1 px-md-2' xs={6} sm={4} md={3} lg={2} >
                    <div className={` ${styles.CardBox2} px-0`} >
                    {/* read */}
                    <div className={` ${styles.WhiteRead}`}>
                    <Row>
                      <Col xs={6} className={`text-center`}><p>Read</p></Col>
                      <Col xs={6} className={`text-center`}><p>Unread</p></Col>
                    </Row>
                    <hr className='my-0'/>
                    </div>
                    {/* requirements */}
                    <div className={` ${styles.WhiteReq}`} 
                    onClick={() => handleClickLocationReq() }>
                    <Row className='py-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locReqOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p> REQUIREMENTS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locReqUnopen}</p></Col>
                    </Row>
                    </div>
                    <hr className='my-0'/>
                    {/* workspace */}
                    <div className={` ${styles.WhiteReq}`}
                    onClick={() => handleClickLocationWor() }>
                    <Row className='py-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locWorkOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p> WORKSPACE</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locWorkUnopen}</p></Col>
                    </Row>
                    </div>
                    <hr className='my-0'/>
                    {/* Finals */}
                    <div className={` ${styles.WhiteReq}`}
                    onClick={() => handleClickLocationFin() }>
                    <Row className='py-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locFinOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p> FINALS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locFinUnopen}</p></Col>
                    </Row>
                    </div>
                      {/* <Card.Title className={`text-center ${styles.Title}`} >
                        LOCATION</Card.Title> */}
                    </div>
                    <p className={`text-center ${styles.Bold}`}>LOCATION</p>
                    </Col>
                    {/* Location */}
                    <Col className='px-1 px-md-2' xs={6} sm={4} md={3} lg={2} >
                    <div className={` ${styles.CardBox2} px-0`} >
                    {/* read */}
                    <div className={` ${styles.WhiteRead}`}>
                    <Row>
                      <Col xs={6} className={`text-center`}><p>Read</p></Col>
                      <Col xs={6} className={`text-center`}><p>Unread</p></Col>
                    </Row>
                    <hr className='my-0'/>
                    </div>
                    {/* requirements */}
                    <div className={` ${styles.WhiteReq}`} 
                    onClick={() => handleClickLocationReq() }>
                    <Row className='py-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locReqOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p> REQUIREMENTS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locReqUnopen}</p></Col>
                    </Row>
                    </div>
                    <hr className='my-0'/>
                    {/* workspace */}
                    <div className={` ${styles.WhiteReq}`}
                    onClick={() => handleClickLocationWor() }>
                    <Row className='py-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locWorkOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p> WORKSPACE</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locWorkUnopen}</p></Col>
                    </Row>
                    </div>
                    <hr className='my-0'/>
                    {/* Finals */}
                    <div className={` ${styles.WhiteReq}`}
                    onClick={() => handleClickLocationFin() }>
                    <Row className='py-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locFinOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p> FINALS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locFinUnopen}</p></Col>
                    </Row>
                    </div>
                      {/* <Card.Title className={`text-center ${styles.Title}`} >
                        LOCATION</Card.Title> */}
                    </div>
                    <p className={`text-center ${styles.Bold}`}>LOCATION</p>
                    </Col>
                    {/* Location */}
                    <Col className='px-1 px-md-2' xs={6} sm={4} md={3} lg={2} >
                    <div className={` ${styles.CardBox2} px-0`} >
                    {/* read */}
                    <div className={` ${styles.WhiteRead}`}>
                    <Row>
                      <Col xs={6} className={`text-center`}><p>Read</p></Col>
                      <Col xs={6} className={`text-center`}><p>Unread</p></Col>
                    </Row>
                    <hr className='my-0'/>
                    </div>
                    {/* requirements */}
                    <div className={` ${styles.WhiteReq}`} 
                    onClick={() => handleClickLocationReq() }>
                    <Row className='py-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locReqOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p> REQUIREMENTS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locReqUnopen}</p></Col>
                    </Row>
                    </div>
                    <hr className='my-0'/>
                    {/* workspace */}
                    <div className={` ${styles.WhiteReq}`}
                    onClick={() => handleClickLocationWor() }>
                    <Row className='py-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locWorkOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p> WORKSPACE</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locWorkUnopen}</p></Col>
                    </Row>
                    </div>
                    <hr className='my-0'/>
                    {/* Finals */}
                    <div className={` ${styles.WhiteReq}`}
                    onClick={() => handleClickLocationFin() }>
                    <Row className='py-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locFinOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p> FINALS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locFinUnopen}</p></Col>
                    </Row>
                    </div>
                      {/* <Card.Title className={`text-center ${styles.Title}`} >
                        LOCATION</Card.Title> */}
                    </div>
                    <p className={`text-center ${styles.Bold}`}>LOCATION</p>
                    </Col>
                    {/* Location */}
                    <Col className='px-1 px-md-2' xs={6} sm={4} md={3} lg={2} >
                    <div className={` ${styles.CardBox2} px-0`} >
                    {/* read */}
                    <div className={` ${styles.WhiteRead}`}>
                    <Row>
                      <Col xs={6} className={`text-center`}><p>Read</p></Col>
                      <Col xs={6} className={`text-center`}><p>Unread</p></Col>
                    </Row>
                    <hr className='my-0'/>
                    </div>
                    {/* requirements */}
                    <div className={` ${styles.WhiteReq}`} 
                    onClick={() => handleClickLocationReq() }>
                    <Row className='py-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locReqOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p> REQUIREMENTS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locReqUnopen}</p></Col>
                    </Row>
                    </div>
                    <hr className='my-0'/>
                    {/* workspace */}
                    <div className={` ${styles.WhiteReq}`}
                    onClick={() => handleClickLocationWor() }>
                    <Row className='py-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locWorkOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p> WORKSPACE</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locWorkUnopen}</p></Col>
                    </Row>
                    </div>
                    <hr className='my-0'/>
                    {/* Finals */}
                    <div className={` ${styles.WhiteReq}`}
                    onClick={() => handleClickLocationFin() }>
                    <Row className='py-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locFinOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p> FINALS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locFinUnopen}</p></Col>
                    </Row>
                    </div>
                      {/* <Card.Title className={`text-center ${styles.Title}`} >
                        LOCATION</Card.Title> */}
                    </div>
                    <p className={`text-center ${styles.Bold}`}>LOCATION</p>
                    </Col>
                    {/* Location */}
                    <Col className='px-1 px-md-2' xs={6} sm={4} md={3} lg={2} >
                    <div className={` ${styles.CardBox2} px-0`} >
                    {/* read */}
                    <div className={` ${styles.WhiteRead}`}>
                    <Row>
                      <Col xs={6} className={`text-center`}><p>Read</p></Col>
                      <Col xs={6} className={`text-center`}><p>Unread</p></Col>
                    </Row>
                    <hr className='my-0'/>
                    </div>
                    {/* requirements */}
                    <div className={` ${styles.WhiteReq}`} 
                    onClick={() => handleClickLocationReq() }>
                    <Row className='py-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locReqOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p> REQUIREMENTS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locReqUnopen}</p></Col>
                    </Row>
                    </div>
                    <hr className='my-0'/>
                    {/* workspace */}
                    <div className={` ${styles.WhiteReq}`}
                    onClick={() => handleClickLocationWor() }>
                    <Row className='py-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locWorkOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p> WORKSPACE</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locWorkUnopen}</p></Col>
                    </Row>
                    </div>
                    <hr className='my-0'/>
                    {/* Finals */}
                    <div className={` ${styles.WhiteReq}`}
                    onClick={() => handleClickLocationFin() }>
                    <Row className='py-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locFinOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p> FINALS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locFinUnopen}</p></Col>
                    </Row>
                    </div>
                      {/* <Card.Title className={`text-center ${styles.Title}`} >
                        LOCATION</Card.Title> */}
                    </div>
                    <p className={`text-center ${styles.Bold}`}>LOCATION</p>
                    </Col>
              </Row>
            </div>

            {/* Department Image links New April 2025 all White with Blue Border */}
            <div className='mt-5 pt-5'>
            <h1>NO 2A - White with Blue Border</h1>
              {/* Camera Sound ... */}
              <Row className='px-3'>
                {/* Location */}
                <Col className='px-1 px-md-2' xs={6} sm={4} md={3} lg={2} >
                    <div className={` ${styles.CardBox3} px-0`} >
                    {/* read */}
                    <div className={` ${styles.WhiteRead}`}>
                    <Row>
                      <Col xs={6} className={`text-center pr-3`}><p>Read</p></Col>
                      <Col xs={6} className={`text-center pl-3`}><p>Unread</p></Col>
                    </Row>
                    <hr className='my-0'/>
                    </div>
                    {/* requirements */}
                    <div className={` ${styles.WhiteReq}`} 
                    onClick={() => handleClickLocationReq() }>
                    <Row className='py-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locReqOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p> REQUIREMENTS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locReqUnopen}</p></Col>
                    </Row>
                    </div>
                    <hr className='my-0'/>
                    {/* workspace */}
                    <div className={` ${styles.WhiteReq}`}
                    onClick={() => handleClickLocationWor() }>
                    <Row className='py-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locWorkOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p> WORKSPACE</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locWorkUnopen}</p></Col>
                    </Row>
                    </div>
                    <hr className='my-0'/>
                    {/* Finals */}
                    <div className={` ${styles.WhiteReq}`}
                    onClick={() => handleClickLocationFin() }>
                    <Row className='py-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locFinOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p> FINALS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locFinUnopen}</p></Col>
                    </Row>
                    </div>
                      {/* <Card.Title className={`text-center ${styles.Title}`} >
                        LOCATION</Card.Title> */}
                    </div>
                    <p className={`text-center ${styles.Bold}`}>CAMERA</p>
                    </Col>
                    {/* Location */}
                    <Col className='px-1 px-md-2' xs={6} sm={4} md={3} lg={2} >
                    <div className={` ${styles.CardBox3} px-0`} >
                    {/* read */}
                    <div className={` ${styles.WhiteRead}`}>
                    <Row>
                      <Col xs={6} className={`text-center pr-3`}><p>Read</p></Col>
                      <Col xs={6} className={`text-center pl-3`}><p>Unread</p></Col>
                    </Row>
                    <hr className='my-0'/>
                    </div>
                    {/* requirements */}
                    <div className={` ${styles.WhiteReq}`} 
                    onClick={() => handleClickLocationReq() }>
                    <Row className='py-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locReqOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p> REQUIREMENTS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locReqUnopen}</p></Col>
                    </Row>
                    </div>
                    <hr className='my-0'/>
                    {/* workspace */}
                    <div className={` ${styles.WhiteReq}`}
                    onClick={() => handleClickLocationWor() }>
                    <Row className='py-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locWorkOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p> WORKSPACE</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locWorkUnopen}</p></Col>
                    </Row>
                    </div>
                    <hr className='my-0'/>
                    {/* Finals */}
                    <div className={` ${styles.WhiteReq}`}
                    onClick={() => handleClickLocationFin() }>
                    <Row className='py-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locFinOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p> FINALS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locFinUnopen}</p></Col>
                    </Row>
                    </div>
                      {/* <Card.Title className={`text-center ${styles.Title}`} >
                        LOCATION</Card.Title> */}
                    </div>
                    <p className={`text-center ${styles.Bold}`}>CAMERA</p>
                    </Col>
                    {/* Location */}
                    <Col className='px-1 px-md-2' xs={6} sm={4} md={3} lg={2} >
                    <div className={` ${styles.CardBox3} px-0`} >
                    {/* read */}
                    <div className={` ${styles.WhiteRead}`}>
                    <Row>
                      <Col xs={6} className={`text-center pr-3`}><p>Read</p></Col>
                      <Col xs={6} className={`text-center pl-3`}><p>Unread</p></Col>
                    </Row>
                    <hr className='my-0'/>
                    </div>
                    {/* requirements */}
                    <div className={` ${styles.WhiteReq}`} 
                    onClick={() => handleClickLocationReq() }>
                    <Row className='py-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locReqOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p> REQUIREMENTS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locReqUnopen}</p></Col>
                    </Row>
                    </div>
                    <hr className='my-0'/>
                    {/* workspace */}
                    <div className={` ${styles.WhiteReq}`}
                    onClick={() => handleClickLocationWor() }>
                    <Row className='py-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locWorkOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p> WORKSPACE</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locWorkUnopen}</p></Col>
                    </Row>
                    </div>
                    <hr className='my-0'/>
                    {/* Finals */}
                    <div className={` ${styles.WhiteReq}`}
                    onClick={() => handleClickLocationFin() }>
                    <Row className='py-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locFinOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p> FINALS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locFinUnopen}</p></Col>
                    </Row>
                    </div>
                      {/* <Card.Title className={`text-center ${styles.Title}`} >
                        LOCATION</Card.Title> */}
                    </div>
                    <p className={`text-center ${styles.Bold}`}>CAMERA</p>
                    </Col>
                    {/* Location */}
                    <Col className='px-1 px-md-2' xs={6} sm={4} md={3} lg={2} >
                    <div className={` ${styles.CardBox3} px-0`} >
                    {/* read */}
                    <div className={` ${styles.WhiteRead}`}>
                    <Row>
                      <Col xs={6} className={`text-center pr-3`}><p>Read</p></Col>
                      <Col xs={6} className={`text-center pl-3`}><p>Unread</p></Col>
                    </Row>
                    <hr className='my-0'/>
                    </div>
                    {/* requirements */}
                    <div className={` ${styles.WhiteReq}`} 
                    onClick={() => handleClickLocationReq() }>
                    <Row className='py-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locReqOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p> REQUIREMENTS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locReqUnopen}</p></Col>
                    </Row>
                    </div>
                    <hr className='my-0'/>
                    {/* workspace */}
                    <div className={` ${styles.WhiteReq}`}
                    onClick={() => handleClickLocationWor() }>
                    <Row className='py-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locWorkOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p> WORKSPACE</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locWorkUnopen}</p></Col>
                    </Row>
                    </div>
                    <hr className='my-0'/>
                    {/* Finals */}
                    <div className={` ${styles.WhiteReq}`}
                    onClick={() => handleClickLocationFin() }>
                    <Row className='py-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locFinOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p> FINALS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locFinUnopen}</p></Col>
                    </Row>
                    </div>
                      {/* <Card.Title className={`text-center ${styles.Title}`} >
                        LOCATION</Card.Title> */}
                    </div>
                    <p className={`text-center ${styles.Bold}`}>CAMERA</p>
                    </Col>
                    {/* Location */}
                    <Col className='px-1 px-md-2' xs={6} sm={4} md={3} lg={2} >
                    <div className={` ${styles.CardBox3} px-0`} >
                    {/* read */}
                    <div className={` ${styles.WhiteRead}`}>
                    <Row>
                      <Col xs={6} className={`text-center pr-3`}><p>Read</p></Col>
                      <Col xs={6} className={`text-center pl-3`}><p>Unread</p></Col>
                    </Row>
                    <hr className='my-0'/>
                    </div>
                    {/* requirements */}
                    <div className={` ${styles.WhiteReq}`} 
                    onClick={() => handleClickLocationReq() }>
                    <Row className='py-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locReqOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p> REQUIREMENTS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locReqUnopen}</p></Col>
                    </Row>
                    </div>
                    <hr className='my-0'/>
                    {/* workspace */}
                    <div className={` ${styles.WhiteReq}`}
                    onClick={() => handleClickLocationWor() }>
                    <Row className='py-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locWorkOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p> WORKSPACE</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locWorkUnopen}</p></Col>
                    </Row>
                    </div>
                    <hr className='my-0'/>
                    {/* Finals */}
                    <div className={` ${styles.WhiteReq}`}
                    onClick={() => handleClickLocationFin() }>
                    <Row className='py-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locFinOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p> FINALS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locFinUnopen}</p></Col>
                    </Row>
                    </div>
                      {/* <Card.Title className={`text-center ${styles.Title}`} >
                        LOCATION</Card.Title> */}
                    </div>
                    <p className={`text-center ${styles.Bold}`}>CAMERA</p>
                    </Col>
                    {/* Location */}
                    <Col className='px-1 px-md-2' xs={6} sm={4} md={3} lg={2} >
                    <div className={` ${styles.CardBox3} px-0`} >
                    {/* read */}
                    <div className={` ${styles.WhiteRead}`}>
                    <Row>
                      <Col xs={6} className={`text-center pr-3`}><p>Read</p></Col>
                      <Col xs={6} className={`text-center pl-3`}><p>Unread</p></Col>
                    </Row>
                    <hr className='my-0'/>
                    </div>
                    {/* requirements */}
                    <div className={` ${styles.WhiteReq}`} 
                    onClick={() => handleClickLocationReq() }>
                    <Row className='py-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locReqOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p> REQUIREMENTS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locReqUnopen}</p></Col>
                    </Row>
                    </div>
                    <hr className='my-0'/>
                    {/* workspace */}
                    <div className={` ${styles.WhiteReq}`}
                    onClick={() => handleClickLocationWor() }>
                    <Row className='py-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locWorkOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p> WORKSPACE</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locWorkUnopen}</p></Col>
                    </Row>
                    </div>
                    <hr className='my-0'/>
                    {/* Finals */}
                    <div className={` ${styles.WhiteReq}`}
                    onClick={() => handleClickLocationFin() }>
                    <Row className='py-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locFinOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p> FINALS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locFinUnopen}</p></Col>
                    </Row>
                    </div>
                      {/* <Card.Title className={`text-center ${styles.Title}`} >
                        LOCATION</Card.Title> */}
                    </div>
                    <p className={`text-center ${styles.Bold}`}>CAMERA</p>
                    </Col>
              </Row>
            </div>
            

            {/* Department Image links New April 2025 all white with black text */}
            <div className='mt-5 pt-5'>
            <h1>NO 4 - White with black text not gold</h1>
              {/* Camera Sound ... */}
              <Row>
              {/* Location */}
              <Col className='px-1 px-md-2' xs={6} sm={4} md={3} lg={2} >
              <div className={` ${styles.CardBox2} px-0`} >
              {/* read */}
              <div className={` ${styles.GoldRead}`}>
              <Row>
                <Col xs={6} className={`text-center pr-5`}><p>Read</p></Col>
                <Col xs={6} className={`text-center pl-5`}><p>Unread</p></Col>
              </Row>
              <hr className='my-0'/>
              </div>
              {/* requirements */}
              <div  
              onClick={() => handleClickLocationReq() }>
              <Row className='py-2'>
              <Col xs={2} className={`text-center px-0`}>
              <p className={`float-right ${styles.Open}`}>{locReqOpen}</p></Col>
              <Col xs={8} className={`text-center`}>
              <p className={` ${styles.BlueReq}`}> REQUIREMENTS</p>
              </Col>
              <Col xs={2} className={`text-center px-0`}>
              <p className={`float-left ${styles.Open}`}>{locReqUnopen}</p></Col>
              </Row>
              </div>
              <hr className='my-0'/>
              {/* workspace */}
              <div 
              onClick={() => handleClickLocationWor() }>
              <Row className='py-2'>
              <Col xs={2} className={`text-center px-0`}>
              <p className={`float-right ${styles.Open}`}>{locWorkOpen}</p></Col>
              <Col xs={8} className={`text-center`}>
              <p className={` ${styles.BlueReq}`}> WORKSPACE</p>
              </Col>
              <Col xs={2} className={`text-center px-0`}>
              <p className={`float-left ${styles.Open}`}>{locWorkUnopen}</p></Col>
              </Row>
              </div>
              <hr className='my-0'/>
              {/* Finals */}
              <div 
              onClick={() => handleClickLocationFin() }>
              <Row className='py-2'>
              <Col xs={2} className={`text-center px-0`}>
              <p className={`float-right ${styles.Open}`}>{locFinOpen}</p></Col>
              <Col xs={8} className={`text-center`}>
              <p className={` ${styles.BlueReq}`}> FINALS</p>
              </Col>
              <Col xs={2} className={`text-center px-0`}>
              <p className={`float-left ${styles.Open}`}>{locFinUnopen}</p></Col>
              </Row>
              </div>
                {/* <Card.Title className={`text-center ${styles.Title}`} >
                  LOCATION</Card.Title> */}
              </div>
              <p className={`text-center ${styles.Bold}`}>CAMERA</p>
              </Col>
              </Row>
              </div>

              {/* Department Image links - old NEW TRIAL code*/}
              <div className={` ${styles.CardBox7} mt-5 pt-5`}>
              <h1>NO 5 - Image and text</h1>
                  <Row className='px-2' >
                    <Col className='px-1 px-md-2' xs={6} sm={4} md={3} lg={2} >
                    <Row className={` ${styles.Small} text-center`}>
                      <Col xs={6}>
                      <p className='float-left pl-1'>READ</p>
                      </Col>
                      <Col xs={6}>
                      <p className='float-right pl-1'>UNREAD</p>
                      </Col>
                      </Row>
                      <Card className={ `${styles.Small} px-0`} >
                      <Card.Img src={dep2} alt="Card image" className='px-0'/>
                      <Card.ImgOverlay className='px-0 text-center pt-1 pt-md-3 ' > 
                      <div onClick={() => handleClickLocationReq()}>                  
                      <Row className={` ${styles.DeptImageBox} mx-0 py-sm-1`}>
                      <Col xs={2} className='px-0'><p>{camReqUnopen}</p> </Col>
                      <Col xs={8} className='px-0'><p>REQUIREMENTS</p> </Col>
                      <Col xs={2} className='px-0'><p>{camReqUnopen}</p> </Col>
                      </Row>
                      </div>
                      {/* <Row className={` ${styles.DeptImageBox} mx-0 py-1`}>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locReqOpen}</p></Col>
                    <Col xs={8} className={`text-center px-0`}>
                    <p> REQUIREMENTS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locReqUnopen}</p></Col>
                    </Row> */}
                    <div onClick={() => handleClickLocationWor()}>
                      <Row className={` ${styles.DeptImageBox} mx-1 py-sm-1 mt-3`}>
                      <Col xs={2} className='px-0'><p>{camReqUnopen}</p> </Col>
                      <Col xs={8} className='px-0'><p>WORKSPACE</p> </Col>
                      <Col xs={2} className='px-0'><p>{camReqUnopen}</p> </Col>
                      </Row>
                      </div>
                      <div onClick={() => handleClickLocationFin()}>
                      <Row className={` ${styles.DeptImageBox} mx-1 mt-3 py-sm-1`}>
                      <Col xs={2} className='px-0'><p>{camReqUnopen}</p> </Col>
                      <Col xs={8} className='px-0'><p>FINALS</p> </Col>
                      <Col xs={2} className='px-0'><p>{camReqUnopen}</p> </Col>
                      </Row>
                      </div>
                      </Card.ImgOverlay>
                      {/* <Card.Title className={`text-center ${styles.Title}`} >
                        Camera</Card.Title>                           */}
                      </Card> 
                      <p className={` ${styles.BoldScene} text-center`}>CAMERA</p>
                    </Col>
                    <Col className='px-1 px-md-2' xs={6} sm={4} md={3} lg={2} >
                      <Card className={` ${styles.CardBox}`}>
                      <Card.Img src={dep3} alt="Card image" />
                      <Card.Title className={`text-center ${styles.Title}`} >Sound</Card.Title>
                      <DeptDropdown handleClick={(category) => handleClickSound(category) } />
                      </Card>
                    </Col>
                    <Col className='px-1 px-md-2' xs={6} sm={4} md={3} lg={2} >
                      <Card className={` ${styles.CardBox}`}>
                      <Card.Img src={dep4} alt="Card image" />
                      <Card.Title className={`text-center ${styles.Title}`} >Location</Card.Title>
                      <DeptDropdown handleClick={(category) => handleClickLocation(category) } />
                      </Card>
                    </Col>
                    <Col className='px-1 px-md-2' xs={6} sm={4} md={3} lg={2} >
                      <Card className={` ${styles.CardBox}`}>
                      <Card.Img src={dep5} alt="Card image" />
                      <Card.Title className={`text-center ${styles.Title}`} >Script</Card.Title>
                      <DeptDropdown handleClick={(category) => handleClickScript(category) } />
                      </Card>
                    </Col>
                    <Col className='px-1 px-md-2' xs={6} sm={4} md={3} lg={2} >
                      <Card className={` ${styles.CardBox}`}>
                      <Card.Img src={dep6} alt="Card image" />
                      <Card.Title className={`text-center ${styles.Title}`} >Art</Card.Title>
                      <DeptDropdown handleClick={(category) => handleClickArt(category) } />
                      </Card>
                    </Col>
                    <Col className='px-1 px-md-2' xs={6} sm={4} md={3} lg={2} >
                      <Card className={` ${styles.CardBox}`}>
                      <Card.Img src={dep7} alt="Card image" />
                      <Card.Title className={`text-center ${styles.Title}`} >Makeup</Card.Title>
                      <DeptDropdown handleClick={(category) => handleClickMakeup(category) } />
                      </Card>
                    </Col>
                    <Col className='px-1 px-md-2' xs={6} sm={4} md={3} lg={2} >
                      <Card className={` ${styles.CardBox}`}>
                      <Card.Img src={dep9} alt="Card image" />
                      <Card.Title className={`text-center ${styles.Title}`} >Wardrobe</Card.Title>
                      <DeptDropdown handleClick={(category) => handleClickWardrobe(category) } />
                      </Card>
                    </Col>
                    <Col className='px-1 px-md-2' xs={6} sm={4} md={3} lg={2} >
                      <Card className={` ${styles.CardBox}`}>
                      <Card.Img src={dep1} alt="Card image" />
                      <Card.Title className={`text-center ${styles.Title}`} >Casting</Card.Title>
                      <DeptDropdown handleClick={(category) => handleClickCasting(category) } />
                      </Card>
                    </Col>
                    <Col className='px-1 px-md-2' xs={6} sm={4} md={3} lg={2} >
                      <Card className={` ${styles.CardBox}`}>
                      <Card.Img src={dep10} alt="Card image" />
                      <Card.Title className={`text-center ${styles.Title}`} >Post</Card.Title>
                      <DeptDropdown handleClick={(category) => handleClickPost(category) } />
                      </Card>
                    </Col>
                    <Col className='px-1 px-md-2' xs={6} sm={4} md={3} lg={2} >
                      <Card className={` ${styles.CardBox}`}>
                      <Card.Img src={dep11} alt="Card image" />
                      <Card.Title className={`text-center ${styles.Title}`} >Production</Card.Title>
                      <DeptDropdown handleClick={(category) => handleClickProduction(category) } />
                      </Card>
                    </Col>
                    <Col className='px-1 px-md-2' xs={6} sm={4} md={3} lg={2} >
                      <Card className={` ${styles.CardBox}`}>
                      <Card.Img src={dep12} alt="Card image" />
                      <Card.Title className={`text-center ${styles.Title}`} >Stunts</Card.Title>
                      <DeptDropdown handleClick={(category) => handleClickStunts(category) } />
                      </Card>
                    </Col>
                    <Col className='px-1 px-md-2' xs={6} sm={4} md={3} lg={2} >
                      <Card className={` ${styles.CardBox}`}>
                      <Card.Img src={dep13} alt="Card image" />
                      <Card.Title className={`text-center ${styles.Title}`} >Electric</Card.Title>
                      <DeptDropdown handleClick={(category) => handleClickElectric(category) } />
                      </Card>
                    </Col>
                  </Row>
              </div>

              {/* Department Image links New April 2025 */}
              <div className='mt-5 pt-5'>
                <h1>NO 6 - Experiments</h1>
              {/* Camera Sound ... */}
                  <Row className='px-2' >
                    {/* Camera */}
                    <Col className='px-1 px-md-2' xs={4} md={3} lg={2} >
                    <Card className={` ${styles.CardBox} px-0`} >
                    {/* read */}
                    <div className={` ${styles.BlackRead}`}>
                    <Row>
                      <Col xs={6} className={`text-center`}><p>Read</p></Col>
                      <Col xs={6} className={`text-center`}><p>Unread</p></Col>
                    </Row>
                    </div>
                    {/* requirements */}
                    <div className={` ${styles.BlackReq}`} 
                    onClick={() => handleClickCameraReq() }>
                    <Row>
                    <Col xs={12} className={`text-center`}>
                    <p>REQUIREMENTS</p>
                    </Col>
                    </Row>
                    <Row>
                      <Col xs={6} className={`text-center`}><p>{camReqOpen} </p></Col>
                      <Col xs={6} className={`text-center`}><p> {camReqUnopen} </p></Col>
                    </Row>
                    </div>
                    {/* workspace */}
                    <div className={` ${styles.BlackWor}`}
                    onClick={() => handleClickCameraWor() }>
                    <Row>
                    <Col xs={12} className={`text-center`}>
                    <p>WORKSPACE</p>
                    </Col>
                    </Row>
                    <Row>
                      <Col xs={6} className={`text-center`}><p>{camWorkOpen} </p></Col>
                      <Col xs={6} className={`text-center`}><p>{camWorkUnopen} </p></Col>
                    </Row>
                    </div>
                    {/* Finals */}
                    <div className={` ${styles.BlackFin}`}
                    onClick={() => handleClickCameraFin() }>
                    <Row>
                    <Col xs={12} className={`text-center`}>
                    <p>FINALS</p>
                    </Col>
                    </Row>
                    <Row>
                      <Col xs={6} className={`text-center`}><p>{camFinOpen} </p></Col>
                      <Col xs={6} className={`text-center`}><p>{camFinUnopen} </p></Col>
                    </Row>
                    </div>
                      <Card.Title className={`text-center ${styles.Title}`} >Camera</Card.Title>
                      {/* <DeptDropdown  handleClick={(category) => handleClickCamera(category) } /> */}
                    </Card> 
                    {/* <Card className={` ${styles.CardBox} px-0`} >
                    <Card.Img src={dep2} alt="Card image" />
                    <Card.Title className={`text-center ${styles.Title}`} >Camera</Card.Title>
                    <DeptDropdown  handleClick={(category) => handleClickCamera(category) } />
                    </Card>  */}
                    </Col>
                    {/* Sound */}
                    <Col className='px-1 px-md-2' xs={4} md={3} lg={2} >
                    <Card className={` ${styles.CardBox} px-0`} >
                    {/* read */}
                    <div className={` ${styles.BlackRead}`}>
                    <Row>
                      <Col xs={6} className={`text-center`}><p>Read</p></Col>
                      <Col xs={6} className={`text-center`}><p>Unread</p></Col>
                    </Row>
                    </div>
                    {/* requirements */}
                    <div className={` ${styles.BlackReq}`} 
                    onClick={() => handleClickSoundReq() }>
                    <Row className='py-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{souReqOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p> REQUIREMENTS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{souReqUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* workspace */}
                    <div className={` ${styles.BlackWor}`}
                    onClick={() => handleClickSoundWor() }>
                    <Row className='py-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{souWorkOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p> WORKSPACE</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{souWorkUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* Finals */}
                    <div className={` ${styles.BlackFin}`}
                    onClick={() => handleClickSoundFin() }>
                    <Row className='py-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{souFinOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p> FINALS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{souFinUnopen}</p></Col>
                    </Row>
                    </div>
                      <Card.Title className={`text-center ${styles.Title}`} >SOUND</Card.Title>
                    </Card>
                    </Col>
                    {/* Location */}
                    <Col className='px-1 px-md-2' xs={4} md={3} lg={2} >
                    <div className={` ${styles.CardBox2} px-0`} >
                    {/* read */}
                    <div className={` ${styles.WhiteRead}`}>
                    <Row>
                      <Col xs={6} className={`text-center`}><p>Read</p></Col>
                      <Col xs={6} className={`text-center`}><p>Unread</p></Col>
                    </Row>
                    <hr className='my-0'/>
                    </div>
                    {/* requirements */}
                    <div className={` ${styles.WhiteReq}`} 
                    onClick={() => handleClickLocationReq() }>
                    <Row className='py-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locReqOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p> REQUIREMENTS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locReqUnopen}</p></Col>
                    </Row>
                    </div>
                    <hr className='my-0'/>
                    {/* workspace */}
                    <div className={` ${styles.WhiteReq}`}
                    onClick={() => handleClickLocationWor() }>
                    <Row className='py-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locWorkOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p> WORKSPACE</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locWorkUnopen}</p></Col>
                    </Row>
                    </div>
                    <hr className='my-0'/>
                    {/* Finals */}
                    <div className={` ${styles.WhiteReq}`}
                    onClick={() => handleClickLocationFin() }>
                    <Row className='py-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locFinOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p> FINALS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locFinUnopen}</p></Col>
                    </Row>
                    </div>
                      {/* <Card.Title className={`text-center ${styles.Title}`} >
                        LOCATION</Card.Title> */}
                    </div>
                    <p className={`text-center ${styles.Bold}`}>LOCATION</p>
                    </Col>
                    <Col className='px-1 px-md-2' xs={4} md={3} lg={2} >
                    <div className={` ${styles.CardBox2}`} >
                    {/* read */}
                    <div className={` ${styles.WhiteRead}`}>
                    <Row>
                      <Col xs={6} className={`text-center`}><p>Read</p></Col>
                      <Col xs={6} className={`text-center`}><p>Unread</p></Col>
                    </Row>
                    <hr className='my-0'/>
                    </div>
                    {/* requirements */}
                    <div className={`text-center ${styles.AquaReq}`}
                    onClick={() => handleClickScriptReq() }>
                    <Row className='py-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{scrReqOpen}</p></Col>
                    <Col xs={8} >
                    <p> REQUIREMENTS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{scrReqUnopen}</p></Col>
                    </Row>
                    </div>
                    <hr className='my-0'/>
                    {/* workspace */}
                    <div className={` ${styles.AquaWork}`}
                    onClick={() => handleClickScriptWor() }>
                    <Row className='py-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{scrWorkOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p> WORKSPACE</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{scrWorkUnopen}</p></Col>
                    </Row>
                    </div>
                    <hr className='my-0'/>
                    {/* Finals */}
                    <div className={` ${styles.AquaFin}`}
                    onClick={() => handleClickScriptFin() }>
                    <Row className='py-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{scrFinOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p> FINALS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{scrFinUnopen}</p></Col>
                    </Row>
                    </div>
                    </div>
                    <p className={`text-center ${styles.Bold}`}>SCRIPT</p>
                      {/* <Card className={` ${styles.CardBox}`}>
                      <Card.Img src={dep5} alt="Card image" />
                      <Card.Title className={`text-center ${styles.Title}`} >Script</Card.Title>
                      <DeptDropdown handleClick={(category) => handleClickScript(category) } />
                      </Card> */}
                    </Col>
                    {/* Location */}
                    <Col className='px-1 px-md-2' xs={6} sm={4} md={3} lg={2} >
                    <div className={` ${styles.CardBox2} px-0`} >
                    {/* read */}
                    <div className={` ${styles.WhiteRead}`}>
                    <Row>
                      <Col xs={6} className={`text-center`}><p>Read</p></Col>
                      <Col xs={6} className={`text-center`}><p>Unread</p></Col>
                    </Row>
                    <hr className='my-0'/>
                    </div>
                    {/* requirements */}
                    <div className={` ${styles.WhiteReq}`} 
                    onClick={() => handleClickLocationReq() }>
                    <Row className='py-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locReqOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p> REQUIREMENTS
                    <span><i className="navicon fas fa-play"></i></span></p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locReqUnopen}</p></Col>
                    </Row>
                    </div>
                    <hr className='my-0'/>
                    {/* workspace */}
                    <div className={` ${styles.WhiteReq}`}
                    onClick={() => handleClickLocationWor() }>
                    <Row className='py-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locWorkOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p> WORKSPACE <span><i className="navicon fas fa-play"></i></span> </p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locWorkUnopen}</p></Col>
                    </Row>
                    </div>
                    <hr className='my-0'/>
                    {/* Finals */}
                    <div className={` ${styles.WhiteReq}`}
                    onClick={() => handleClickLocationFin() }>
                    <Row className='py-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locFinOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p> FINALS<span><i className="navicon fas fa-play"></i></span></p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locFinUnopen}</p></Col>
                    </Row>
                    </div>
                      {/* <Card.Title className={`text-center ${styles.Title}`} >
                        LOCATION</Card.Title> */}
                    </div>
                    <p className={`text-center ${styles.Bold}`}>LOCATION</p>
                    </Col>
                    {/* Location */}
                    <Col className='px-1 px-md-2' xs={6} sm={4} md={3} lg={2} >
                    <div className={` ${styles.CardBox2} px-0`} >
                    {/* read */}
                    <div className={` ${styles.WhiteRead}`}>
                    <Row>
                      <Col xs={6} className={`pl-5`}><p>Read</p></Col>
                      <Col xs={6} className={` pl-5`}><p>Unread</p></Col>
                    </Row>
                    <hr className='my-0'/>
                    </div>
                    {/* requirements */}
                    <div className={` ${styles.WhiteReq}`} 
                    onClick={() => handleClickLocationReq() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locReqOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p> REQUIREMENTS</p>
                    <i className="navicon fas fa-play"></i>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locReqUnopen}</p></Col>
                    </Row>
                    </div>
                    <hr className='my-0'/>
                    {/* workspace */}
                    <div className={` ${styles.WhiteReq}`}
                    onClick={() => handleClickLocationWor() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locWorkOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p> WORKSPACE</p>
                    <i className="navicon fas fa-play"></i>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locWorkUnopen}</p></Col>
                    </Row>
                    </div>
                    <hr className='my-0'/>
                    {/* Finals */}
                    <div className={` ${styles.WhiteReq}`}
                    onClick={() => handleClickLocationFin() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locFinOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p> FINALS</p>
                    <i className="navicon fas fa-play"></i>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locFinUnopen}</p></Col>
                    </Row>
                    </div>
                      {/* <Card.Title className={`text-center ${styles.Title}`} >
                        LOCATION</Card.Title> */}
                    </div>
                    <p className={`text-center ${styles.Bold}`}>LOCATION</p>
                    </Col>
                    <Col className='px-1 px-md-2' xs={4} md={3} lg={2} >
                      <Card className={` ${styles.CardBox}`}>
                      <Card.Img src={dep6} alt="Card image" />
                      <Card.Title className={`text-center ${styles.Title}`} >Art</Card.Title>
                      <DeptDropdown handleClick={(category) => handleClickArt(category) } />
                      </Card>
                    </Col>
                    <Col className='px-1 px-md-2' xs={4} md={3} lg={2} >
                      <Card className={` ${styles.CardBox}`}>
                      <Card.Img src={dep7} alt="Card image" />
                      <Card.Title className={`text-center ${styles.Title}`} >Makeup</Card.Title>
                      <DeptDropdown handleClick={(category) => handleClickMakeup(category) } />
                      </Card>
                    </Col>
                    <Col className='px-1 px-md-2' xs={4} md={3} lg={2} >
                      <Card className={` ${styles.CardBox}`}>
                      <Card.Img src={dep9} alt="Card image" />
                      <Card.Title className={`text-center ${styles.Title}`} >Wardrobe</Card.Title>
                      <DeptDropdown handleClick={(category) => handleClickWardrobe(category) } />
                      </Card>
                    </Col>
                    <Col className='px-1 px-md-2' xs={4} md={3} lg={2} >
                      <Card className={` ${styles.CardBox}`}>
                      <Card.Img src={dep1} alt="Card image" />
                      <Card.Title className={`text-center ${styles.Title}`} >Casting</Card.Title>
                      <DeptDropdown handleClick={(category) => handleClickCasting(category) } />
                      </Card>
                    </Col>
                    <Col className='px-1 px-md-2' xs={4} md={3} lg={2} >
                      <Card className={` ${styles.CardBox}`}>
                      <Card.Img src={dep10} alt="Card image" />
                      <Card.Title className={`text-center ${styles.Title}`} >Post</Card.Title>
                      <DeptDropdown handleClick={(category) => handleClickPost(category) } />
                      </Card>
                    </Col>
                    <Col className='px-1 px-md-2' xs={4} md={3} lg={2} >
                      <Card className={` ${styles.CardBox}`}>
                      <Card.Img src={dep11} alt="Card image" />
                      <Card.Title className={`text-center ${styles.Title}`} >Production</Card.Title>
                      <DeptDropdown handleClick={(category) => handleClickProduction(category) } />
                      </Card>
                    </Col>
                    <Col className='px-1 px-md-2' xs={4} md={3} lg={2} >
                      <Card className={` ${styles.CardBox}`}>
                      <Card.Img src={dep12} alt="Card image" />
                      <Card.Title className={`text-center ${styles.Title}`} >Stunts</Card.Title>
                      <DeptDropdown handleClick={(category) => handleClickStunts(category) } />
                      </Card>
                    </Col>
                    <Col className='px-1 px-md-2' xs={4} md={3} lg={2} >
                      <Card className={` ${styles.CardBox}`}>
                      <Card.Img src={dep13} alt="Card image" />
                      <Card.Title className={`text-center ${styles.Title}`} >Electric</Card.Title>
                      <DeptDropdown handleClick={(category) => handleClickElectric(category) } />
                      </Card>
                    </Col>
                  </Row>
              </div>
            </>
          ) }
        </div>
    )
}

export default Scene
