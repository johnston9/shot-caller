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

const CallsheetCreate = ({setShowCall}) => {
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
  const [dayData, setDayData] = useState({ results: [] });
  const [scenes, setScenes] = useState({ results: [] });
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

  // const { 
  //         ad_1_name, ad_1_email, ad_1_phone,
  //         ad_2_name, ad_2_email, ad_2_phone,
  //         ad_3_name, ad_3_email, ad_3_phone,
  //         ad_4_name, ad_4_email, ad_4_phone,
  //         ad_5_name, ad_5_email, ad_5_phone,
  //         pro_assistant_1_name, pro_assistant_1_email, pro_assistant_1_phone,
  //         pro_assistant_2_name, pro_assistant_2_email, pro_assistant_2_phone,
  //         pro_assistant_3_name, pro_assistant_3_email, pro_assistant_3_phone,
  //         pro_assistant_4_name, pro_assistant_4_email, pro_assistant_4_phone,
  //         pro_assistant_5_name, pro_assistant_5_email, pro_assistant_5_phone,
  //         dop_name, dop_email, dop_phone,
  //         camera_operator_name, camera_operator_email, camera_operator_phone,
  //         camera_ass_1_name, camera_ass_1_email, camera_ass_1_phone,
  //         camera_ass_2_name, camera_ass_2_email, camera_ass_2_phone,
  //         dit_name, dit_email, dit_phone,
  //         steadicam_name, steadicam_email, steadicam_phone,
  //         camera_pa_name, camera_pa_email, camera_pa_phone,
  //         oth_camera_pos_1_job, oth_camera_pos_1_name, oth_camera_pos_1_email, oth_camera_pos_1_phone,
  //         oth_camera_pos_2_job, oth_camera_pos_2_name, oth_camera_pos_2_email, oth_camera_pos_2_phone,
  //         oth_camera_pos_3_job, oth_camera_pos_3_name, oth_camera_pos_3_email, oth_camera_pos_3_phone,
  //         sound_mixer_name, sound_mixer_email, sound_mixer_phone,
  //         boom_operator_name, boom_operator_email, boom_operator_phone,
  //         sound_assistant_1_name, sound_assistant_1_email, sound_assistant_1_phone,
  //         sound_assistant_2_name, sound_assistant_2_email, sound_assistant_2_phone,
  //         script_supervisor_name, script_supervisor_email, script_supervisor_phone,
  //         key_hairmakeup_name, key_hairmakeup_email, key_hairmakeup_phone,
  //         key_hairstylist_name, key_hairstylist_email, key_hairstylist_phone,
  //         sfx_makeup_name, sfx_makeup_email, sfx_makeup_phone,
  //         sfx_makeup_assistant_name, sfx_makeup_assistant_email, sfx_makeup_assistant_phone,
  //         makeup_artist_1_name, makeup_artist_1_email, makeup_artist_1_phone,
  //         makeup_artist_2_name, makeup_artist_2_email, makeup_artist_2_phone,
  //         makeup_artist_3_name, makeup_artist_3_email, makeup_artist_3_phone,
  //         makeup_artist_4_name, makeup_artist_4_email, makeup_artist_4_phone,
  //         makeup_artist_5_name, makeup_artist_5_email, makeup_artist_5_phone,
  //         costume_designer_name, costume_designer_email, costume_designer_phone,
  //         ass_costume_designer_name, ass_costume_designer_email, ass_costume_designer_phone,
  //         wardrobe_assistant_1_name, wardrobe_assistant_1_email, wardrobe_assistant_1_phone,
  //         wardrobe_assistant_2_name, wardrobe_assistant_2_email, wardrobe_assistant_2_phone,
  //         wardrobe_assistant_3_name, wardrobe_assistant_3_email, wardrobe_assistant_3_phone,
  //         wardrobe_assistant_4_name, wardrobe_assistant_4_email, wardrobe_assistant_4_phone,
  //         wardrobe_assistant_5_name, wardrobe_assistant_5_email, wardrobe_assistant_5_phone,
  //         production_designer_name, production_designer_email, production_designer_phone,
  //         art_director_name, art_director_email, art_director_phone,
  //         art_assistant_name, art_assistant_email, art_assistant_phone,
  //         set_decorator_name, set_decorator_email, set_decorator_phone,
  //         set_dresser_name, set_dresser_email, set_dresser_phone,
  //         lead_man_name, lead_man_email, lead_man_phone,
  //         dresser_name, dresser_email, dresser_phone,
  //         prop_master_name, prop_master_email, prop_master_phone,
  //         ass_prop_master_name, ass_prop_master_email, ass_prop_master_phone,
  //         prop_buyer_name, prop_buyer_email, prop_buyer_phone,
  //         armorer_name, armorer_email, armorer_phone,
  //         gaffer_name, gaffer_email, gaffer_phone,
  //         best_boy_electric_name, best_boy_electric_email, best_boy_electric_phone,
  //         electric_3_name, electric_3_email, electric_3_phone,
  //         electric_4_name, electric_4_email, electric_4_phone, } = crewInfo;

  const [postData, setPostData] = useState({
      // xxx
      // wrap: "",
      // wrap: "",
      // wrap: "",
      // wrap: "",
      // wrap: "",
      // wrap: "",
      // wrap: "",
      // wrap: "",
      // wrap: "",
      // wrap: "",
      // xxx
      // wrap: "",
      // wrap: "",
      // wrap: "",
      // wrap: "",
      // wrap: "",
      // wrap: "",
      // wrap: "",
      // wrap: "",
      // wrap: "",
      // wrap: "",
      // pro
      producer_calltime: "",
      pro_coordinator_calltime: "",
      travel_coordinator_calltime: "",
      upm_calltime: "",
      production_pa_calltime: "",
      script_supervisor_calltime: "",
      legal_calltime: "",
      set_medic_calltime: "",
      oth_production_pos_1_calltime: "",
      oth_production_pos_2_calltime: "",
      oth_production_pos_3_calltime: "",
      oth_production_pos_4_calltime: "",
      oth_production_pos_5_calltime: "",
      // art
      art_director_calltime: "",
      art_assistant_calltime: "",
      set_decorator_calltime: "",
      set_dresser_calltime: "",
      lead_man_calltime: "",
      dresser_calltime: "",
      prop_master_calltime: "",
      ass_prop_master_calltime: "",
      prop_buyer_calltime: "",
      // cam
      dop_calltime: "",
      camera_operator_calltime: "",
      camera_ass_1_calltime: "",
      camera_ass_2_calltime: "",
      dit_calltime: "",
      steadicam_calltime: "",
      camera_pa_calltime: "",
      oth_camera_pos_1_calltime: "",
      oth_camera_pos_2_calltime: "",
      oth_camera_pos_3_calltime: "",
      // casting
      casting_director_calltime: "",
      extras_casting_calltime: "",
      ad_1_calltime: "",
      ad_2_calltime: "",
      ad_3_calltime: "",
      ad_4_calltime: "",
      ad_5_calltime: "",
      pro_assistant_1_calltime: "",
      pro_assistant_2_calltime: "",
      pro_assistant_3_calltime: "",
      pro_assistant_4_calltime: "",
      pro_assistant_5_calltime: "",
      // elegrip
      gaffer_calltime: "",
      best_boy_electric_calltime: "",
      electric_3_calltime: "",
      electric_4_calltime: "",
      keygrip_calltime: "",
      best_boy_grip_calltime: "",
      dolly_grip_calltime: "",
      swing_ge1_calltime: "",
      swing_ge2_calltime: "",
      swing_ge3_calltime: "",
      swing_ge4_calltime: "",
      swing_ge5_calltime: "",
      // loc
      location_mngr_calltime: "",
      location_ass_1_calltime: "",
      location_ass_2_calltime: "",
      location_ass_3_calltime: "",
      location_ass_4_calltime: "",
      location_security_calltime: "",
      // mak
      key_hairmakeup_calltime: "",
      key_hairstylist_calltime: "",
      sfx_makeup_calltime: "",
      sfx_makeup_assistant_calltime: "",
      makeup_artist_1_calltime: "",
      makeup_artist_2_calltime: "",
      makeup_artist_3_calltime: "",
      makeup_artist_4_calltime: "",
      makeup_artist_5_calltime: "",
      // post/add-pos
      editor_calltime: "",
      fx_calltime: "",
      add_pos_1_calltime: "",
      add_pos_2_calltime: "",
      add_pos_3_calltime: "",
      add_pos_4_calltime: "",
      add_pos_5_calltime: "",
      add_pos_6_calltime: "",
      add_pos_7_calltime: "",
      add_pos_8_calltime: "",
      add_pos_9_calltime: "",
      add_pos_10_calltime: "",
      all_other_add_positions_calltimes: "",
      // script/cater
      writer_calltime: "",
      catering_co_1_calltime: "",
      catering_co_2_calltime: "",
      catering_co_3_calltime: "",
      craft_service_calltime: "",
      crafty_ass_calltime: "",
      // yyyyyyyyyyyyyyyyyyyy
      unit_call: "",
      talent_call: "",
      shoot_call: "",
      breakfast: "",
      lunch: "",
      wrap: "",
      basecamp_address: "",
      basecamp_parking_n_notes: "",
      location_1_address: "",
      location_2_address: "",
      location_3_address: "",
      location_4_address: "",
      location_5_address: "",
      location_1_parking_n_notes: "",
      location_2_parking_n_notes: "",
      location_3_parking_n_notes: "",
      location_4_parking_n_notes: "",
      location_5_parking_n_notes: "",
      nearest_hospital: "",
      weather_location: "",
      important_info: "",
      transport_info: "",
      department_info: "",
      walkie_channel_production: "",
      walkie_channel_open: "",
      walkie_channel_transportation: "",
      walkie_channel_art_dept: "",
      walkie_channel_rollover: "",
      walkie_channel_camera: "",
      walkie_channel_electric: "",
      walkie_channel_grip: "",
  })

  const { 
        // xxx
        // pro
        producer_calltime,
        pro_coordinator_calltime,
        travel_coordinator_calltime,
        upm_calltime,
        production_pa_calltime,
        script_supervisor_calltime,
        legal_calltime,
        set_medic_calltime,
        oth_production_pos_1_calltime,
        oth_production_pos_2_calltime,
        oth_production_pos_3_calltime,
        oth_production_pos_4_calltime,
        oth_production_pos_5_calltime,
        // art
        art_director_calltime,
        art_assistant_calltime,
        set_decorator_calltime,
        set_dresser_calltime,
        lead_man_calltime,
        dresser_calltime,
        prop_master_calltime,
        ass_prop_master_calltime,
        prop_buyer_calltime,
        // cam
        dop_calltime,
        camera_operator_calltime,
        camera_ass_1_calltime,
        camera_ass_2_calltime,
        dit_calltime,
        steadicam_calltime,
        camera_pa_calltime,
        oth_camera_pos_1_calltime,
        oth_camera_pos_2_calltime,
        oth_camera_pos_3_calltime,
        // casting
        casting_director_calltime,
        extras_casting_calltime,
        ad_1_calltime,
        ad_2_calltime,
        ad_3_calltime,
        ad_4_calltime,
        ad_5_calltime,
        pro_assistant_1_calltime,
        pro_assistant_2_calltime,
        pro_assistant_3_calltime,
        pro_assistant_4_calltime,
        pro_assistant_5_calltime,
        // eleGrip
        gaffer_calltime,
        best_boy_electric_calltime,
        electric_3_calltime,
        electric_4_calltime,
        keygrip_calltime,
        best_boy_grip_calltime,
        dolly_grip_calltime,
        swing_ge1_calltime,
        swing_ge2_calltime,
        swing_ge3_calltime,
        swing_ge4_calltime,
        swing_ge5_calltime,
        // loc
        location_mngr_calltime,
        location_security_calltime,
        location_ass_1_calltime,
        location_ass_2_calltime,
        location_ass_3_calltime,
        location_ass_4_calltime,
        // makeup
        key_hairmakeup_calltime,
        key_hairstylist_calltime,
        sfx_makeup_calltime,
        sfx_makeup_assistant_calltime,
        makeup_artist_1_calltime,
        makeup_artist_2_calltime,
        makeup_artist_3_calltime,
        makeup_artist_4_calltime,
        makeup_artist_5_calltime,
        // post/add-pos
        editor_calltime,
        fx_calltime,
        add_pos_1_calltime,
        add_pos_2_calltime,
        add_pos_3_calltime,
        add_pos_4_calltime,
        add_pos_5_calltime,
        add_pos_6_calltime,
        add_pos_7_calltime,
        add_pos_8_calltime,
        add_pos_9_calltime,
        add_pos_10_calltime,
        all_other_add_positions_calltimes,
        // script/cater
        writer_calltime,
        catering_co_1_calltime,
        catering_co_2_calltime,
        catering_co_3_calltime,
        craft_service_calltime,
        crafty_ass_calltime,
        // yyyyyyyyyyyyyyyyyyyy
        unit_call,
        talent_call, 
        shoot_call, 
        breakfast, 
        lunch, 
        wrap, 
        basecamp_address, 
        basecamp_parking_n_notes, 
        location_1_address, 
        location_2_address, 
        location_3_address, 
        location_4_address, 
        location_5_address, 
        location_1_parking_n_notes, 
        location_2_parking_n_notes, 
        location_3_parking_n_notes, 
        location_4_parking_n_notes,
        location_5_parking_n_notes,
        nearest_hospital,
        weather_location,
        important_info,
        transport_info,
        department_info,
        walkie_channel_production,
        walkie_channel_open,
        walkie_channel_transportation,
        walkie_channel_art_dept,
        walkie_channel_rollover,
        walkie_channel_camera,
        walkie_channel_electric,
        walkie_channel_grip,
        // producer_calltime, 
        // pro_coordinator_calltime, 
      } = postData;

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    // xxxxxxxxxxxx
    // formData.append("dress", dress);
    // formData.append("dress", dress);
    // formData.append("dress", dress);
    // formData.append("dress", dress);
    // formData.append("dress", dress);
    // formData.append("dress", dress);
    // formData.append("dress", dress);
    // formData.append("dress", dress);
    // formData.append("dress", dress);
    // formData.append("dress", dress);
    // formData.append("dress", dress);
    // formData.append("dress", dress);
    // xxxxxxxxxxxx
    // formData.append("dress", dress);
    // formData.append("dress", dress);
    // formData.append("dress", dress);
    // formData.append("dress", dress);
    // formData.append("dress", dress);
    // formData.append("dress", dress);
    // formData.append("dress", dress);
    // formData.append("dress", dress);
    // formData.append("dress", dress);
    // formData.append("dress", dress);
    // formData.append("dress", dress);
    // formData.append("dress", dress);
    // formData.append("dress", dress);
    // formData.append("dress", dress);
    // formData.append("dress", dress);
    // formData.append("dress", dress);
    // pro
    formData.append("producer_calltime", producer_calltime);
    formData.append("pro_coordinator_calltime", pro_coordinator_calltime);
    formData.append("travel_coordinator_calltime", travel_coordinator_calltime);
    formData.append("upm_calltime", upm_calltime);
    formData.append("production_pa_calltime", production_pa_calltime);
    formData.append("script_supervisor_calltime", script_supervisor_calltime);
    formData.append("legal_calltime", legal_calltime);  
    formData.append("set_medic_calltime", set_medic_calltime);
    formData.append("oth_production_pos_1_calltime", oth_production_pos_1_calltime);
    formData.append("oth_production_pos_2_calltime", oth_production_pos_2_calltime);
    formData.append("oth_production_pos_3_calltime", oth_production_pos_3_calltime);
    formData.append("oth_production_pos_4_calltime", oth_production_pos_4_calltime);
    formData.append("oth_production_pos_5_calltime", oth_production_pos_5_calltime);
    // art
    formData.append("art_director_calltime", art_director_calltime);
    formData.append("art_assistant_calltime", art_assistant_calltime);
    formData.append("set_decorator_calltime", set_decorator_calltime);
    formData.append("set_dresser_calltime", set_dresser_calltime);
    formData.append("lead_man_calltime", lead_man_calltime);
    formData.append("dresser_calltime", dresser_calltime);
    formData.append("prop_master_calltime", prop_master_calltime);
    formData.append("ass_prop_master_calltime", ass_prop_master_calltime);
    formData.append("prop_buyer_calltime", prop_buyer_calltime);
    // cam
    formData.append("dop_calltime", dop_calltime);
    formData.append("camera_operator_calltime", camera_operator_calltime);
    formData.append("camera_ass_1_calltime", camera_ass_1_calltime);
    formData.append("camera_ass_2_calltime", camera_ass_2_calltime);
    formData.append("dit_calltime", dit_calltime);
    formData.append("steadicam_calltime", steadicam_calltime);
    formData.append("camera_pa_calltime", camera_pa_calltime);
    formData.append("oth_camera_pos_1_calltime", oth_camera_pos_1_calltime);
    formData.append("oth_camera_pos_2_calltime", oth_camera_pos_2_calltime);
    formData.append("oth_camera_pos_3_calltime", oth_camera_pos_3_calltime);
    // casting
    formData.append("casting_director_calltime", casting_director_calltime);
    formData.append("extras_casting_calltime", extras_casting_calltime);
    formData.append("ad_1_calltime", ad_1_calltime);
    formData.append("ad_2_calltime", ad_2_calltime);
    formData.append("ad_3_calltime", ad_3_calltime);
    formData.append("ad_4_calltime", ad_4_calltime);
    formData.append("ad_5_calltime", ad_5_calltime);
    formData.append("pro_assistant_1_calltime", pro_assistant_1_calltime);
    formData.append("pro_assistant_2_calltime", pro_assistant_2_calltime);
    formData.append("pro_assistant_3_calltime", pro_assistant_3_calltime);
    formData.append("pro_assistant_4_calltime", pro_assistant_4_calltime);
    formData.append("pro_assistant_5_calltime", pro_assistant_5_calltime);
    // ElectricGrip
    formData.append("gaffer_calltime", gaffer_calltime);
    formData.append("best_boy_electric_calltime", best_boy_electric_calltime);
    formData.append("electric_3_calltime", electric_3_calltime);
    formData.append("electric_4_calltime", electric_4_calltime);
    formData.append("keygrip_calltime", keygrip_calltime);
    formData.append("best_boy_grip_calltime", best_boy_grip_calltime);
    formData.append("dolly_grip_calltime", dolly_grip_calltime);
    formData.append("swing_ge1_calltime", swing_ge1_calltime);
    formData.append("swing_ge2_calltime", swing_ge2_calltime);
    formData.append("swing_ge3_calltime", swing_ge3_calltime);
    formData.append("swing_ge4_calltime", swing_ge4_calltime);
    formData.append("swing_ge5_calltime", swing_ge5_calltime);
    // loc
    formData.append("location_mngr_calltime", location_mngr_calltime);
    formData.append("location_security_calltime", location_security_calltime);
    formData.append("location_ass_1_calltime", location_ass_1_calltime);
    formData.append("location_ass_2_calltime", location_ass_2_calltime);
    formData.append("location_ass_3_calltime", location_ass_3_calltime);
    formData.append("location_ass_4_calltime", location_ass_4_calltime);
    // makeup
    formData.append("key_hairmakeup_calltime", key_hairmakeup_calltime);
    formData.append("key_hairstylist_calltime", key_hairstylist_calltime);
    formData.append("sfx_makeup_calltime", sfx_makeup_calltime);
    formData.append("sfx_makeup_assistant_calltime", sfx_makeup_assistant_calltime);
    formData.append("makeup_artist_1_calltime", makeup_artist_1_calltime);
    formData.append("makeup_artist_2_calltime", makeup_artist_2_calltime);
    formData.append("makeup_artist_3_calltime", makeup_artist_3_calltime);
    formData.append("makeup_artist_4_calltime", makeup_artist_4_calltime);
    formData.append("makeup_artist_5_calltime", makeup_artist_5_calltime);
    // post/add-pos
    formData.append("editor_calltime", editor_calltime);
    formData.append("fx_calltime", fx_calltime);
    formData.append("add_pos_1_calltime", add_pos_1_calltime);
    formData.append("add_pos_2_calltime", add_pos_2_calltime);
    formData.append("add_pos_3_calltime", add_pos_3_calltime);
    formData.append("add_pos_4_calltime", add_pos_4_calltime);
    formData.append("add_pos_5_calltime", add_pos_5_calltime);
    formData.append("add_pos_6_calltime", add_pos_6_calltime);
    formData.append("add_pos_7_calltime", add_pos_7_calltime);
    formData.append("add_pos_8_calltime", add_pos_8_calltime);
    formData.append("add_pos_9_calltime", add_pos_9_calltime);
    formData.append("add_pos_10_calltime", add_pos_10_calltime);
    formData.append("all_other_add_positions_calltimes", all_other_add_positions_calltimes);
    // script/cater
    formData.append("writer_calltime", writer_calltime);
    formData.append("catering_co_1_calltime", catering_co_1_calltime);
    formData.append("catering_co_2_calltime", catering_co_2_calltime);
    formData.append("catering_co_3_calltime", catering_co_3_calltime);
    formData.append("craft_service_calltime", craft_service_calltime);
    formData.append("crafty_ass_calltime", crafty_ass_calltime);
    // yyyyyyyyyyyyyyyyyyyyyyy
    formData.append("day_id", id);
    formData.append("day", dataDay);
    formData.append("date", dataDate);
    formData.append("unit_call", unit_call);
    formData.append("talent_call", talent_call);
    formData.append("shoot_call", shoot_call);
    formData.append("breakfast", breakfast);
    formData.append("lunch", lunch);
    formData.append("wrap", wrap);  
    formData.append("basecamp_address", basecamp_address);
    formData.append("basecamp_parking_n_notes", basecamp_parking_n_notes);
    formData.append("location_1_address", location_1_address);
    formData.append("location_2_address", location_2_address);
    formData.append("location_3_address", location_3_address);
    formData.append("location_4_address", location_4_address);
    formData.append("location_5_address", location_5_address);
    formData.append("location_1_parking_n_notes", location_1_parking_n_notes);
    formData.append("location_2_parking_n_notes", location_2_parking_n_notes);
    formData.append("location_3_parking_n_notes", location_3_parking_n_notes);
    formData.append("location_4_parking_n_notes", location_4_parking_n_notes);
    formData.append("location_5_parking_n_notes", location_5_parking_n_notes);
    formData.append("nearest_hospital", nearest_hospital);
    formData.append("weather_location", weather_location);
    formData.append("important_info", important_info);
    formData.append("transport_info", transport_info);
    formData.append("department_info", department_info);
    try {
      await axiosReq.post("/callsheetsnew/", formData);
      setShowCall(false);
      // setHasOrder(true);
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  }

  useEffect(() => {
    const handleMount = async () => {
        try {
          const [{ data: dayGet }, { data: scenes }] = await Promise.all([
            axiosReq.get(`/days/${id}`),
            axiosReq.get(`/schedule/scenes/?day_id=${id}`),
        ])
        setDayData({ results: [dayGet] });
        setScenes(scenes)
        setDataDay(dayGet.day);
        setDataDate(dayGet.date);
        } catch (err) {
            console.log(err);
          }
    }
    handleMount();
    }, [id])
    
  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
  };

  const infoFields = (
    <div className={`text-center ${styles.Back3 }`}>
      {/* Unit call - Talent call Shoot call */}
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="production_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Unit Call</Form.Label>
              <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="unit_call"
                value={unit_call}
                onChange={handleChange}
                  />
          </Form.Group>
          {errors?.unit_call?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="talent_call" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`}>Talent Call</Form.Label>
              <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="talent_call"
                value={talent_call}
                onChange={handleChange}
                  />
          </Form.Group>
          {errors?.talent_call?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="shoot_call" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`}>Shoot Call</Form.Label>
              <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="shoot_call"
                value={shoot_call}
                onChange={handleChange}
                  />
          </Form.Group>
          {errors?.shoot_call?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* breakfast - lunch - wrap */}
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="breakfast" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Breakfast</Form.Label>
              <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="breakfast"
                value={breakfast}
                onChange={handleChange}
                  />
          </Form.Group>
          {errors?.breakfast?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="lunch" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`}>Lunch</Form.Label>
              <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="lunch"
                value={lunch}
                onChange={handleChange}
                  />
          </Form.Group>
          {errors?.lunch?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="wrap" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`}>Est. Wrap</Form.Label>
              <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="wrap"
                value={wrap}
                onChange={handleChange}
                  />
          </Form.Group>
          {errors?.wrap?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* basecamp address - basecamp parking and notes */}
      <Row>
          <Col xs={6} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="basecamp_address" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Basecamp Address</Form.Label>
              <Form.Control 
                className={`${styles.InputScene}`}
                type="text"
                as="textarea"
                rows={2}
                name="basecamp_address"
                value={basecamp_address}
                onChange={handleChange}
                  />
          </Form.Group>
          {errors?.basecamp_address?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={6} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="basecamp_parking_n_notes" className={`${styles.Width} `}  >
              <Form.Label className={`d-none d-sm-block ${styles.Bold}`}>Basecamp Parking and Notes</Form.Label>
              <Form.Label className={`d-sm-none ${styles.Bold}`}>Basecamp Notes</Form.Label>
              <Form.Control 
                className={`${styles.InputScene}`}
                as="textarea"
                rows={2}
                type="text"
                name="basecamp_parking_n_notes"
                value={basecamp_parking_n_notes}
                onChange={handleChange}
                  />
          </Form.Group>
          {errors?.basecamp_parking_n_notes?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* location 1 address - location 1 parking and notes */}
      <Row>
          <Col xs={6} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="location_1_address" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Location 1 Address</Form.Label>
              <Form.Control 
                className={`${styles.InputScene}`}
                type="text"
                as="textarea"
                rows={2}
                name="location_1_address"
                value={location_1_address}
                onChange={handleChange}
                  />
          </Form.Group>
          {errors?.location_1_address?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={6} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="location_1_parking_n_notes" className={`${styles.Width} `}  >
              <Form.Label className={`d-none d-sm-block ${styles.Bold}`}>Location 1 Parking and Notes</Form.Label>
              <Form.Label className={`d-sm-none ${styles.Bold}`}>Location 1 Notes</Form.Label>
              <Form.Control 
                className={`${styles.InputScene}`}
                as="textarea"
                rows={2}
                type="text"
                name="location_1_parking_n_notes"
                value={location_1_parking_n_notes}
                onChange={handleChange}
                  />
          </Form.Group>
          {errors?.location_1_parking_n_notes?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* location 2 address - location 2 parking and notes */}
      <Row>
          <Col xs={6} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="location_2_address" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Location 2 Address</Form.Label>
              <Form.Control 
                className={`${styles.InputScene}`}
                type="text"
                as="textarea"
                rows={2}
                name="location_2_address"
                value={location_2_address}
                onChange={handleChange}
                  />
          </Form.Group>
          {errors?.location_2_address?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={6} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="location_2_parking_n_notes" className={`${styles.Width} `}  >
          <Form.Label className={`d-none d-sm-block ${styles.Bold}`}>Location 2 Parking and Notes</Form.Label>
              <Form.Label className={`d-sm-none ${styles.Bold}`}>Location 2 Notes</Form.Label>
              <Form.Control 
                className={`${styles.InputScene}`}
                as="textarea"
                rows={2}
                type="text"
                name="location_2_parking_n_notes"
                value={location_2_parking_n_notes}
                onChange={handleChange}
                  />
          </Form.Group>
          {errors?.location_2_parking_n_notes?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* location 3 address - location 3 parking and notes */}
      <Row>
          <Col xs={6} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="location_3_address" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Location 3 Address</Form.Label>
              <Form.Control 
                className={`${styles.InputScene}`}
                type="text"
                as="textarea"
                rows={2}
                name="location_3_address"
                value={location_3_address}
                onChange={handleChange}
                  />
          </Form.Group>
          {errors?.location_3_address?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={6} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="location_3_parking_n_notes" className={`${styles.Width} `}  >
          <Form.Label className={`d-none d-sm-block ${styles.Bold}`}>Location 3 Parking and Notes</Form.Label>
              <Form.Label className={`d-sm-none ${styles.Bold}`}>Location 3 Notes</Form.Label>
              <Form.Control 
                className={`${styles.InputScene}`}
                as="textarea"
                rows={2}
                type="text"
                name="location_3_parking_n_notes"
                value={location_3_parking_n_notes}
                onChange={handleChange}
                  />
          </Form.Group>
          {errors?.location_3_parking_n_notes?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* location 4 address - location 4 parking and notes */}
      <Row>
          <Col xs={6} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="location_4_address" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Location 4 Address</Form.Label>
              <Form.Control 
                className={`${styles.InputScene}`}
                type="text"
                as="textarea"
                rows={2}
                name="location_4_address"
                value={location_4_address}
                onChange={handleChange}
                  />
          </Form.Group>
          {errors?.location_4_address?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={6} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="location_4_parking_n_notes" className={`${styles.Width} `}  >
          <Form.Label className={`d-none d-sm-block ${styles.Bold}`}>Location 4 Parking and Notes</Form.Label>
              <Form.Label className={`d-sm-none ${styles.Bold}`}>Location 4 Notes</Form.Label>
              <Form.Control 
                className={`${styles.InputScene}`}
                as="textarea"
                rows={2}
                type="text"
                name="location_4_parking_n_notes"
                value={location_4_parking_n_notes}
                onChange={handleChange}
                  />
          </Form.Group>
          {errors?.location_4_parking_n_notes?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* location 5 address - location 5 parking and notes */}
      <Row>
          <Col xs={6} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="location_5_address" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Location 5 Address</Form.Label>
              <Form.Control 
                className={`${styles.InputScene}`}
                type="text"
                as="textarea"
                rows={2}
                name="location_5_address"
                value={location_5_address}
                onChange={handleChange}
                  />
          </Form.Group>
          {errors?.location_5_address?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={6} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="location_5_parking_n_notes" className={`${styles.Width} `}  >
          <Form.Label className={`d-none d-sm-block ${styles.Bold}`}>Location 5 Parking and Notes</Form.Label>
              <Form.Label className={`d-sm-none ${styles.Bold}`}>Location 5 Notes</Form.Label>
              <Form.Control 
                className={`${styles.InputScene}`}
                as="textarea"
                rows={2}
                type="text"
                name="location_5_parking_n_notes"
                value={location_5_parking_n_notes}
                onChange={handleChange}
                  />
          </Form.Group>
          {errors?.location_5_parking_n_notes?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* nearest hospital - important info */}
      <Row>
          <Col xs={6} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="nearest_hospital" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Nearest Hospital</Form.Label>
              <Form.Control 
                className={`${styles.InputScene}`}
                type="text"
                as="textarea"
                rows={2}
                name="nearest_hospital"
                value={nearest_hospital}
                onChange={handleChange}
                  />
          </Form.Group>
          {errors?.nearest_hospital?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={6} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="important_info" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`}>Important Info</Form.Label>
              <Form.Control 
                className={`${styles.InputScene}`}
                as="textarea"
                rows={2}
                type="text"
                name="important_info"
                value={important_info}
                onChange={handleChange}
                  />
          </Form.Group>
          {errors?.important_info?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* transport info - department info */}
      <Row>
          <Col xs={6} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="transport_info" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Transport Info</Form.Label>
              <Form.Control 
                className={`${styles.InputScene}`}
                type="text"
                as="textarea"
                rows={2}
                name="transport_info"
                value={transport_info}
                onChange={handleChange}
                  />
          </Form.Group>
          {errors?.transport_info?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={6} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="department_info" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`}>Department Info</Form.Label>
              <Form.Control 
                className={`${styles.InputScene}`}
                as="textarea"
                rows={2}
                type="text"
                name="department_info"
                value={department_info}
                onChange={handleChange}
                  />
          </Form.Group>
          {errors?.department_info?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* weather location */}
      <Row>
          <Col xs={{span: 6, offset: 3} } className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="weather_location" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Weather Location</Form.Label>
              <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="weather_location"
                value={weather_location}
                onChange={handleChange}
                  />
          </Form.Group>
          {errors?.weather_location?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>       
      {/* WALKIE CHANNELS */}
      <div>
        <div className={`my-3 ${styles.Bold }`} > 
        <span className={`px-5 my-3 py-1 ${styles.SubTitle }`} >WALKIE CHANNELS  </span> 
        </div>
      <Row>
          <Col xs={3} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="walkie_channel_production" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Production</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="walkie_channel_production"
              value={walkie_channel_production}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.walkie_channel_production?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={3} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="walkie_channel_open" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Open</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="walkie_channel_open"
              value={walkie_channel_open}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.walkie_channel_open?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={3} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="walkie_channel_transportation" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Transportation</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="walkie_channel_transportation"
              value={walkie_channel_transportation}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.walkie_channel_transportation?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={3} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="walkie_channel_art_dept" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Art Dept</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="walkie_channel_art_dept"
              value={walkie_channel_art_dept}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.walkie_channel_art_dept?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <Row>
          <Col xs={3} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="walkie_channel_rollover" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Rollover</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="walkie_channel_rollover"
              value={walkie_channel_rollover}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.walkie_channel_rollover?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={3} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="walkie_channel_camera" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Camera</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="walkie_channel_camera"
              value={walkie_channel_camera}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.walkie_channel_camera?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={3} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="walkie_channel_electric" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Electric</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="walkie_channel_electric"
              value={walkie_channel_electric}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.walkie_channel_electric?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={3} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="walkie_channel_grip" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Grip</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="walkie_channel_grip"
              value={walkie_channel_grip}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.walkie_channel_grip?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      </div>  
    </div>
  )

const buttons = (
  <div className={`text-center py-4 mb-3 mt-4 ${styles.White }`} >    
    <Button
      className={`${btnStyles.Button} ${btnStyles.Blue}`}
      onClick={() => setShowCall(showCall => !showCall)}
    >
      Cancel
    </Button>
    <Button className={`ml-5 ${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
      Create
    </Button>
  </div>
);
  
  return (
    <div>
    <TopBox work="Callsheet Create"
            title3={`Day ${dataDay} - ${dataDate} `} />
    {/* schedule */}
    {/* schedule - side by side buttons */}
    <Row className='text-center'>
    <Col  >
    <Button
        className={`mt-3 ${btnStyles.Button} ${btnStyles.Bright}`}
        onClick={() => setShowSchedule(showSchedule => !showSchedule)} >View Schedule
    </Button>
    </Col>
    </Row>
    <div className="mt-3">
    {!showSchedule ? (
      ""
    ) : (
      <>
      <CallsheetSchedule scenes={scenes} setShowSchedule={setShowSchedule} />
      </>
    ) }
    </div>
    {/* cast buttons */}
    <h3 className={`text-center py-3 ${styles.SubTitle }`} >ADD CAST</h3> 
    <div className= {`mb-3 ${styles.Back3}`}>
    <Row className='text-center'>
    <Col className='text-center' xs={6}>
    <Button
        className={`mt-3 px-5 ${btnStyles.Button} ${btnStyles.Bright}`}
        onClick={() => setShowAddCast(showAddCast => !showAddCast)} >Add Characters
    </Button>
    </Col>
    <Col className='text-center' xs={6}  >
    <Button
        className={`my-3 ${btnStyles.Button} ${btnStyles.Bright}`}
        onClick={() => setShowAddBg(showAddBg => !showAddBg)} >Add Background/Stand-Ins
    </Button>
    </Col>
    </Row>
    <div>
    {!showAddCast ? (
      ""
    ) : (
      <AddCast setShowAddCast={setShowAddCast} dataDay={dataDay} dataDate={dataDate} />
    ) }
    </div> 
    <div>
    {!showAddBg ? (
      ""
    ) : (
      <AddBackGround setShowAddBg={setShowAddBg} dataDay={dataDay} dataDate={dataDate} />
    ) }
    </div> 
    {/* schedule - side by side buttons */}
    <Row className='text-center'>
    <Col className='text-center'  >
    <Button
        className={`my-3 px-3 ${btnStyles.Button} ${btnStyles.Bright}`}
        onClick={() => setShowSideBySide(showSideBySide => !showSideBySide)} >
          Schedule and Cast Forms Side by Side
    </Button>
    </Col>
    </Row>
    {!showSideBySide ? (
      ""
    ) : (                      
      <Row className="mx-0">
        <Col className="px-1" xs={6}>
        <CallsheetSchedule showSideBySide={showSideBySide} scenes={scenes} setShowSchedule={setShowSchedule} />
        </Col>
        <Col xs={6}>
          <div>
        <AddCast setShowAddCast={setShowAddCast} dataDay={dataDay} dataDate={dataDate} />
          </div>
          <div>
        <AddBackGround setShowAddBg={setShowAddBg} dataDay={dataDay} dataDate={dataDate} />
          </div>
        </Col>
      </Row>             
    ) }
    </div>
    {/* info */}
    <h3 className={`text-center mt-5 py-3 ${styles.SubTitle }`} >ADD INFO</h3> 
    <Form className= {`mb-3 ${styles.Back3}`} onSubmit={handleSubmit}>
    {infoFields}
    <div className={`py-2 ${styles.White }`}></div> 
    <h3 className={`text-center mt-0 mb-0 py-3 ${styles.SubTitle }`} >ADD CREW CALLS</h3> 
    <div className={`pt-2 ${styles.White }`}> 
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
    <div className={`mt-0 ${styles.Crew }`}>
        {/* Add Production */}
        {!showPro ? (
          <Row>
            <Col xs={12} md={{span: 8, offset:2 }}>
            <p className="text-center">Add all crew members to the Crew Info page so they will appear in each 
                department. Complete all departments before clicking Create.</p>
            </Col>
          </Row>
              ) : (
                <AddProduction postData={postData} handleChange={handleChange} crewInfoOne={crewInfoOne} setShowPro={setShowPro} /> 
                ) }  
        {/* Add Casting */}
        {!showCas ? (
                ""
              ) : (
                <AddCastingAD crewInfoOne={crewInfoOne} setShowCas={setShowCas} /> 
                ) } 
        {/* Add Locations */}
        {!showLoc ? (
                ""
              ) : (
                <AddLocations crewInfoOne={crewInfoOne} setShowLoc={setShowLoc} /> 
                ) } 
        {/* Add Script  */}
        {!showScr ? (
                ""
              ) : (
                <AddScriptCater crewInfoOne={crewInfoOne} setShowScr={setShowScr} /> 
                ) } 
        {/* Add Electric */}
        {!showEle ? (
                ""
              ) : (
                <AddElectricGrip crewInfoOne={crewInfoOne} setShowEle={setShowEle} /> 
                ) } 
        {/* Add Makeup */}
        {!showMak ? (
                ""
              ) : (
                <AddMakeup crewInfoOne={crewInfoOne} setShowMak={setShowMak} /> 
                ) } 
        {/* Add Sound */}
        {!showSou ? (
                ""
              ) : (
                <AddSoundTransport crewInfoOne={crewInfoOne} setShowSou={setShowSou} /> 
                ) } 
        {/* Add Stunts */}
        {!showStu ? (
                ""
              ) : (
                <AddStunts crewInfoOne={crewInfoOne} setShowStu={setShowStu} /> 
                ) } 
        {/* Add Art */}
        {!showArt ? (
                ""
              ) : (
                <AddArt crewInfoOne={crewInfoOne} setShowArt={setShowArt} /> 
                ) } 
        {/* Add Camera */}
        {!showCam ? (
                ""
              ) : (
                <AddCamera crewInfoOne={crewInfoOne} setShowCam={setShowCam} /> 
                ) } 
        {/* Add Post */}
        {!showPos ? (
                ""
              ) : (
                <AddPostAdditional crewInfoOne={crewInfoOne} setShowPos={setShowPos} /> 
                ) } 
        {/* Add Wardrobe  */}
        {!showWar ? (
                ""
              ) : (
                <AddWardrobe crewInfoOne={crewInfoOne} setShowWar={setShowWar} /> 
                ) } 
        </div>
    {buttons}
    </Form>
    </div>
  )
}

export default CallsheetCreate