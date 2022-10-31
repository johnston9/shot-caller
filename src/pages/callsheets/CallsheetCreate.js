import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import styles from "../../styles/Callsheets.module.css";
import btnStyles from "../../styles/Button.module.css";
import { useHistory, useParams } from "react-router-dom";
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
import Information from "./Information";
import InfoCrewCalls from "./InfoCrewCalls";

const CallsheetCreate = () => {
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
  const callsheetshed = true;
  // eslint-disable-next-line
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
  const [showInfo, setShowInfo] = useState(false);
  const [showInfoCrew, setShowInfoCrew] = useState(false);

  const [postData, setPostData] = useState({
      // info
      unit_call: "",
      talent_call: "",
      shoot_call: "",
      breakfast: "",
      lunch: "",
      wrap: "",
      basecamp_name: "",
      basecamp_address: "",
      basecamp_parking_n_notes: "",
      location_1_name: "",
      location_2_name: "",
      location_3_name: "",
      location_4_name: "",
      location_5_name: "",
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
      hospital_address_line_1: "",
      hospital_address_line_2: "",
      hospital_address_line_3: "",
      hospital_address_line_4: "",
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
      // CALLS
      // production 
      director_calltime: "",
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
      production_designer_calltime: "",
      art_director_calltime: "",
      art_assistant_calltime: "",
      set_decorator_calltime: "",
      set_dresser_calltime: "",
      lead_man_calltime: "",
      dresser_calltime: "",
      prop_master_calltime: "",
      ass_prop_master_calltime: "",
      prop_buyer_calltime: "",
      armorer_calltime: "",
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
      // sound/transport
      sound_mixer_calltime: "",
      boom_operator_calltime: "",
      sound_assistant_1_calltime: "",
      sound_assistant_2_calltime: "",
      transport_captain_calltime: "",
      transport_manager_1_calltime: "",
      transport_manager_2_calltime: "",
      head_driver_calltime: "",
      car1_calltime: "",
      car2_calltime: "",
      car3_calltime: "",
      truck1_calltime: "",
      truck2_calltime: "",
      truck3_calltime: "",
      // stunts
      stunt_coordinator_calltime: "",
      stunts_1_calltime: "",
      stunts_2_calltime: "",
      stunts_3_calltime: "",
      stunts_4_calltime: "",
      stunts_5_calltime: "",
      // wardrobe
      costume_designer_calltime: "",
      ass_costume_designer_calltime: "",
      wardrobe_assistant_1_calltime: "",
      wardrobe_assistant_2_calltime: "",
      wardrobe_assistant_3_calltime: "",
      wardrobe_assistant_4_calltime: "",
      wardrobe_assistant_5_calltime: "",
  })

  const { 
        // info
        unit_call,
        talent_call, 
        shoot_call, 
        breakfast, 
        lunch, 
        wrap, 
        basecamp_name,
        basecamp_address, 
        basecamp_parking_n_notes, 
        location_1_name,
        location_2_name,
        location_3_name,
        location_4_name,
        location_5_name,
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
        hospital_address_line_1,
        hospital_address_line_2,
        hospital_address_line_3,
        hospital_address_line_4,
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
        // production
        director_calltime,
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
        production_designer_calltime,
        art_director_calltime,
        art_assistant_calltime,
        set_decorator_calltime,
        set_dresser_calltime,
        lead_man_calltime,
        dresser_calltime,
        prop_master_calltime,
        ass_prop_master_calltime,
        prop_buyer_calltime,
        armorer_calltime,
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
        // ele/Grip
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
        // locations
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
        // sound/transport
        sound_mixer_calltime,
        boom_operator_calltime,
        sound_assistant_1_calltime,
        sound_assistant_2_calltime,
        transport_captain_calltime,
        transport_manager_1_calltime,
        transport_manager_2_calltime,
        head_driver_calltime,
        car1_calltime,
        car2_calltime,
        car3_calltime,
        truck1_calltime,
        truck2_calltime,
        truck3_calltime,
        // stunts
        stunt_coordinator_calltime,
        stunts_1_calltime,
        stunts_2_calltime,
        stunts_3_calltime,
        stunts_4_calltime,
        stunts_5_calltime,
        // wardrobe
        costume_designer_calltime,
        ass_costume_designer_calltime,
        wardrobe_assistant_1_calltime,
        wardrobe_assistant_2_calltime,
        wardrobe_assistant_3_calltime,
        wardrobe_assistant_4_calltime,
        wardrobe_assistant_5_calltime,
      } = postData;
    
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    // info
    formData.append("day_id", id);
    formData.append("day", dataDay);
    formData.append("date", dataDate);
    formData.append("unit_call", unit_call);
    formData.append("talent_call", talent_call);
    formData.append("shoot_call", shoot_call);
    formData.append("breakfast", breakfast);
    formData.append("lunch", lunch);
    formData.append("wrap", wrap);
    formData.append("basecamp_name", basecamp_name);
    formData.append("basecamp_address", basecamp_address);
    formData.append("basecamp_parking_n_notes", basecamp_parking_n_notes);
    formData.append("location_1_name", location_1_name);
    formData.append("location_2_name", location_2_name);
    formData.append("location_3_name", location_3_name);
    formData.append("location_4_name", location_4_name);
    formData.append("location_5_name", location_5_name);
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
    formData.append("hospital_address_line_1", hospital_address_line_1);
    formData.append("hospital_address_line_2", hospital_address_line_2);
    formData.append("hospital_address_line_3", hospital_address_line_3);
    formData.append("hospital_address_line_4", hospital_address_line_4);
    formData.append("weather_location", weather_location);
    formData.append("important_info", important_info);
    formData.append("transport_info", transport_info);
    formData.append("department_info", department_info);
    formData.append("walkie_channel_production", walkie_channel_production);
    formData.append("walkie_channel_open", walkie_channel_open);
    formData.append("walkie_channel_transportation", walkie_channel_transportation);
    formData.append("walkie_channel_art_dept", walkie_channel_art_dept);
    formData.append("walkie_channel_rollover", walkie_channel_rollover);
    formData.append("walkie_channel_camera", walkie_channel_camera);
    formData.append("walkie_channel_electric", walkie_channel_electric);
    formData.append("walkie_channel_grip", walkie_channel_grip);
    // production 
    formData.append("director_calltime", director_calltime);
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
    formData.append("production_designer_calltime", production_designer_calltime);
    formData.append("art_director_calltime", art_director_calltime);
    formData.append("art_assistant_calltime", art_assistant_calltime);
    formData.append("set_decorator_calltime", set_decorator_calltime);
    formData.append("set_dresser_calltime", set_dresser_calltime);
    formData.append("lead_man_calltime", lead_man_calltime);
    formData.append("dresser_calltime", dresser_calltime);
    formData.append("prop_master_calltime", prop_master_calltime);
    formData.append("ass_prop_master_calltime", ass_prop_master_calltime);
    formData.append("prop_buyer_calltime", prop_buyer_calltime);
    formData.append("armorer_calltime", armorer_calltime);
    // camera
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
    // sound/transport
    formData.append("sound_mixer_calltime", sound_mixer_calltime);
    formData.append("boom_operator_calltime", boom_operator_calltime);
    formData.append("sound_assistant_1_calltime", sound_assistant_1_calltime);
    formData.append("sound_assistant_2_calltime", sound_assistant_2_calltime);
    formData.append("transport_captain_calltime", transport_captain_calltime);
    formData.append("transport_manager_1_calltime", transport_manager_1_calltime);
    formData.append("transport_manager_2_calltime", transport_manager_2_calltime);
    formData.append("head_driver_calltime", head_driver_calltime);
    formData.append("car1_calltime", car1_calltime);
    formData.append("car2_calltime", car2_calltime);
    formData.append("car3_calltime", car3_calltime);
    formData.append("truck1_calltime", truck1_calltime);
    formData.append("truck2_calltime", truck2_calltime);
    formData.append("truck3_calltime", truck3_calltime);
    // stunts
    formData.append("stunt_coordinator_calltime", stunt_coordinator_calltime);
    formData.append("stunts_1_calltime", stunts_1_calltime);
    formData.append("stunts_2_calltime", stunts_2_calltime);
    formData.append("stunts_3_calltime", stunts_3_calltime);
    formData.append("stunts_4_calltime", stunts_4_calltime);
    formData.append("stunts_5_calltime", stunts_5_calltime);
    // wardrobe
    formData.append("costume_designer_calltime", costume_designer_calltime);
    formData.append("ass_costume_designer_calltime", ass_costume_designer_calltime);
    formData.append("wardrobe_assistant_1_calltime", wardrobe_assistant_1_calltime);
    formData.append("wardrobe_assistant_2_calltime", wardrobe_assistant_2_calltime);
    formData.append("wardrobe_assistant_3_calltime", wardrobe_assistant_3_calltime);
    formData.append("wardrobe_assistant_4_calltime", wardrobe_assistant_4_calltime);
    formData.append("wardrobe_assistant_5_calltime", wardrobe_assistant_5_calltime);
    try {
      await axiosReq.post("/callsheetsnew/", formData);
      history.goBack();
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  }

  const infoFields = (
    <div className={`pb-5 text-center ${styles.Back3 }`}>
      {/* TIMES */}
      <div className={`my-3 ${styles.Bold }`} > 
      <h5 className={`py-1 ${styles.SubTitle }`} >
          <span className="float-left ml-3">Part 1</span>
          <span className="mr-5 pr-4">TIMES </span>
        </h5> 
      </div>
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
      {/* INFO */}
      <div className={`my-3 ${styles.Bold }`} > 
        <h5 className={`py-1 ${styles.SubTitle }`} >
          <span className="float-left ml-3">Part 2 </span>
          <span className="mr-5 pr-4">INFO </span>
        </h5> 
      </div>
      <Row>
        <Col className="d-flex justify-content-center" xs={{span: 6, offset: 3}} >
        {/* weather location */}
        <div className="mt-3">
          <Form.Group controlId="weather_location" className={`${styles.Width95} `}  >
              <Form.Label className={`${styles.Bold}`} >Weather Location
              <p className={`${styles.Red}`}>Important: Put the city's name, comma, 2-letter country code (ISO3166). Example - London, GB or New York, US.</p>
              </Form.Label>
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
          </div>
        </Col>
      </Row>
      {/* nearest hospital - department info */}
      <Row>
      <Col xs={6} className=" p-0 p-md-2">
      <div className="d-flex justify-content-center">
      <Form.Group controlId="nearest_hospital" className={`${styles.Width} `}  >
          <Form.Label className={`${styles.Bold}`} >Nearest Hospital</Form.Label>
          <Form.Control 
            className={`${styles.Input}`}
            type="text"
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
      </div>
      <div className="d-flex justify-content-center">
      <Form.Group controlId="hospital_address_line_1" className={`${styles.Width} `}  >
          <Form.Label className={`${styles.Bold}`} >Hospital Address Line 1</Form.Label>
          <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="hospital_address_line_1"
              value={hospital_address_line_1}
              onChange={handleChange}
              />
      </Form.Group>
      {errors?.hospital_address_line_1?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      </div>
      {/* line 2 */}
      <div className="d-flex justify-content-center">
      <Form.Group controlId="hospital_address_line_2" className={`${styles.Width} `}  >
          <Form.Label className={`${styles.Bold}`} >Hospital Address Line 2</Form.Label>
          <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="hospital_address_line_2"
              value={hospital_address_line_2}
              onChange={handleChange}
              />
      </Form.Group>
      {errors?.hospital_address_line_2?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      </div>
      <div className="d-flex justify-content-center">
      {/* line 3 */}
      <Form.Group controlId="hospital_address_line_3" className={`${styles.Width} `}  >
          <Form.Label className={`${styles.Bold}`} >Hospital Address Line 3</Form.Label>
          <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="hospital_address_line_3"
              value={hospital_address_line_3}
              onChange={handleChange}
              />
      </Form.Group>
      {errors?.hospital_address_line_3?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      </div>
      <div className="d-flex justify-content-center">
      {/* line 4 */}
      <Form.Group controlId="hospital_address_line_4" className={`${styles.Width} `}  >
          <Form.Label className={`${styles.Bold}`} >Hospital Address Line 4 </Form.Label>
          <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="hospital_address_line_4"
              value={hospital_address_line_4}
              onChange={handleChange}
              />
      </Form.Group>
      {errors?.hospital_address_line_4?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      </div>
      </Col>
      <Col xs={6} className="p-0 p-md-2 ">
          <Form.Group controlId="department_info" className={`${styles.Width95} `}  >
              <Form.Label className={`${styles.Bold}`}>Department Info</Form.Label>
              <Form.Control 
                className={`${styles.InputScene}`}
                as="textarea"
                rows={5}
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
          <div className="mt-4">
          <Form.Group controlId="transport_info" className={`${styles.Width95} `}  >
              <Form.Label className={`${styles.Bold}`} >Transport Info</Form.Label>
              <Form.Control 
                className={`${styles.InputScene}`}
                type="text"
                as="textarea"
                rows={5}
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
          </div>
          </Col>
      </Row>
      {/* transport info - important info */}
      <Row>
          <Col xs={12} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="important_info" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`}>Important Info</Form.Label>
              <Form.Control 
                className={`${styles.InputScene}`}
                as="textarea"
                rows={3}
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
      <div className={`my-3 ${styles.Bold }`} > 
      <h5 className={`py-1 ${styles.SubTitle }`} >
          <span className="float-left ml-3">Part 3 </span>
          <span className="mr-5 pr-4">LOCATIONS </span>
        </h5> 
      </div>
      <div className="pr-3">
      <div>
        <Row className="mb-2" >
        <Col ms={{span: 10, offset: 1 }} >
        <p>
        Please seperated each address line with a comma and a space. 
        </p>
        <p>
        Include the name if appropiate for Google Maps.</p>
        </Col>
        </Row>
      </div>
      {/* basecamp name basecamp address - basecamp parking and notes */}
      <span className={`px-5 my-3 py-1 ${styles.SubTitle }`}>BASECAMP</span>
      <Row className="mb-3">
          <Col xs={4 } className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="basecamp_name" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.Bold}`} >Basecamp Name</Form.Label>
              <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="basecamp_name"
                value={basecamp_name}
                onChange={handleChange}
                  />
          </Form.Group>
          {errors?.basecamp_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="basecamp_address" className={`${styles.Width95} `}  >
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
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="basecamp_parking_n_notes" className={`${styles.Width95} `}  >
              <Form.Label className={`d-none d-md-block ${styles.Bold}`}>Basecamp Parking and Notes</Form.Label>
              <Form.Label className={`d-md-none ${styles.Bold}`}>Basecamp Notes</Form.Label>
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
      {/* location 1 name location 1 address - location 1 parking and notes */}
      <span className={`px-5 my-3 py-1 ${styles.SubTitle }`}>LOCATION 1</span>
      <Row className="mb-3">
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="location_1_name" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.Bold}`} >Location 1 Name</Form.Label>
              <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="location_1_name"
                value={location_1_name}
                onChange={handleChange}
                  />
          </Form.Group>
          {errors?.location_1_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="location_1_address" className={`${styles.Width95} `}  >
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
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="location_1_parking_n_notes" className={`${styles.Width95} `}  >
              <Form.Label className={`d-none d-md-block ${styles.Bold}`}>Location 1 Parking and Notes</Form.Label>
              <Form.Label className={`d-md-none ${styles.Bold}`}>Location 1 Notes</Form.Label>
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
      <span className={`px-5 my-3 py-1 ${styles.SubTitle }`}>LOCATION 2</span>
      {/* location 2 name location 2 address - location 2 parking and notes */}
      <Row className="mb-3">
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="location_2_name" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.Bold}`} >Location 2 Name</Form.Label>
              <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="location_2_name"
                value={location_2_name}
                onChange={handleChange}
                  />
          </Form.Group>
          {errors?.location_2_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="location_2_address" className={`${styles.Width95} `}  >
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
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="location_2_parking_n_notes" className={`${styles.Width95} `}  >
          <Form.Label className={`d-none d-md-block ${styles.Bold}`}>Location 2 Parking and Notes</Form.Label>
              <Form.Label className={`d-md-none ${styles.Bold}`}>Location 2 Notes</Form.Label>
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
      <span className={`px-5 my-3 py-1 ${styles.SubTitle }`}>LOCATION 3</span>
      {/* location 3 name location 3 address - location 3 parking and notes */}
      <Row className="mb-3">
        <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="location_3_name" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.Bold}`} >Location 3 Name</Form.Label>
              <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="location_3_name"
                value={location_3_name}
                onChange={handleChange}
                  />
          </Form.Group>
          {errors?.location_3_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2"> 
          <Form.Group controlId="location_3_address" className={`${styles.Width95} `}  >
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
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="location_3_parking_n_notes" className={`${styles.Width95} `}  >
          <Form.Label className={`d-none d-md-block ${styles.Bold}`}>Location 3 Parking and Notes</Form.Label>
              <Form.Label className={`d-md-none ${styles.Bold}`}>Location 3 Notes</Form.Label>
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
      <span className={`px-5 my-3 py-1 ${styles.SubTitle }`}>LOCATION 4</span>
      {/* location 4 name location 4 address - location 4 parking and notes */}
      <Row className="mb-3">
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="location_4_name" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.Bold}`} >Location 4 Name</Form.Label>
              <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="location_4_name"
                value={location_4_name}
                onChange={handleChange}
                  />
          </Form.Group>
          {errors?.location_4_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="location_4_address" className={`${styles.Width95} `}  >
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
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="location_4_parking_n_notes" className={`${styles.Width95} `}  >
          <Form.Label className={`d-none d-md-block ${styles.Bold}`}>Location 4 Parking and Notes</Form.Label>
              <Form.Label className={`d-md-none ${styles.Bold}`}>Location 4 Notes</Form.Label>
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
      <span className={`px-5 my-3 py-1 ${styles.SubTitle }`}>LOCATION 5</span>
      {/* location 5 name location 5 address - location 5 parking and notes */}
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="location_2_name" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.Bold}`} >Location 5 Name</Form.Label>
              <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="location_5_name"
                value={location_5_name}
                onChange={handleChange}
                  />
          </Form.Group>
          {errors?.location_5_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="location_5_address" className={`${styles.Width95} `}  >
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
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="location_5_parking_n_notes" className={`${styles.Width95} `}  >
          <Form.Label className={`d-none d-md-block ${styles.Bold}`}>Location 5 Parking and Notes</Form.Label>
              <Form.Label className={`d-md-none ${styles.Bold}`}>Location 5 Notes</Form.Label>
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
      </div>
      {/* WALKIE CHANNELS */}
      <div>
        <div className={`my-3 ${styles.Bold }`} > 
        <h5 className={`py-1 ${styles.SubTitle }`} >
          <span className="float-left ml-3">Part 4 </span>
          <span className="mr-5 pr-4">WALKIES CHANNELS </span>
        </h5> 
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
      className={`${btnStyles.Button} ${btnStyles.Blue} px-3 mr-3`}
      onClick={() => history.goBack()}
    >
      Cancel
    </Button>
    <Button className={`ml-3 ${btnStyles.Button} ${btnStyles.Blue} px-3`} type="submit">
      Create
    </Button>
  </div>
);
  
  return (
    <div >
    <TopBox work="Callsheet Create"
            title3={`Day ${dataDay} - ${dataDate} `} />
    <Button
        className={`${btnStyles.Button} ${btnStyles.Blue} mt-1`}
        onClick={() => history.goBack()}
    >
        Back
    </Button>
    <Button
          className={`float-right py-0 mt-1 ${btnStyles.Order} ${btnStyles.Button}`}
          onClick={() => setShowInfo(showInfo => !showInfo)} >INFO
        </Button>
          {!showInfo ? (
              ""
                  ) : (
                    <Information  /> 
                    ) }  
    {/* cast buttons */}
    <h3 className={`text-center mt-2 py-1 ${styles.SubTitle }`} >ADD CAST / BG</h3> 
    <div className= {`mb-3`}>
      {/* schedule button */}
    <Row className='text-center'>
    <Col  >
    <Button
        className={`mt-3 ${btnStyles.Button} ${btnStyles.Bright}`}
        onClick={() => setShowSchedule(showSchedule => !showSchedule)} >View Schedule
    </Button>
    </Col>
    </Row>
    <Row className='text-center'>
    <Col className='text-center mx-0 px-0' xs={6} md={4}>
    <Button
        className={`mt-3 px-2 px-md-5 ${btnStyles.Button} ${btnStyles.Bright}`}
        onClick={() => setShowAddCast(showAddCast => !showAddCast)} >Add Characters
    </Button>
    </Col>
    <Col className='text-center mx-0 px-0' xs={6} md={4}  >
    <Button
        className={`my-3 px-2 px-md-5  ${btnStyles.Button} ${btnStyles.Bright}`}
        onClick={() => setShowAddBg(showAddBg => !showAddBg)} >Add Background
    </Button>
    </Col>
    <Col xs={{span: 10, offset: 1}} md={4} className='text-center mx-0 px-0'  >
    <Button
        className={`my-3 px-3 ${btnStyles.Button} ${btnStyles.Bright}`}
        onClick={() => setShowSideBySide(showSideBySide => !showSideBySide)} >
          Schedule and Cast Forms
    </Button>
    </Col>
    </Row>
    <div className="mt-3">
    {!showSchedule ? (
      ""
    ) : (
      <>
      <CallsheetSchedule scenes={scenes} callsheetshed={callsheetshed} setShowSchedule={setShowSchedule} />
      </>
    ) }
    </div>
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
    {!showSideBySide ? (
      ""
    ) : (                      
      <Row className="mx-0">
        <Col className="px-1" xs={6}>
        <CallsheetSchedule showSideBySide={showSideBySide} 
        scenes={scenes} callsheetshed={callsheetshed}
        setShowSchedule={setShowSchedule} />
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
    <h3 className={`text-center mt-5 mb-0 py-1 ${styles.SubTitle }`} >CALLSHEET INFO</h3> 
    <Form className= {`mb-3 ${styles.Back3}`} onSubmit={handleSubmit}>
    {infoFields}
    <div className={`my-3 text-center ${styles.Bold }`} > 
      <h5 className={`py-1 ${styles.SubTitle }`} >
          <span className="float-left ml-3">Part 5 </span>
          <span className="mr-5 pr-4">CREW CALLS </span>
        </h5> 
      </div>
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
    <div>
    <Row>
      <Col >
    <Button
          className={`float-right py-0 mt-1 ${btnStyles.Order} ${btnStyles.Button}`}
          onClick={() => setShowInfoCrew(showInfoCrew => !showInfoCrew)} >INFO
    </Button>
    </Col>
    </Row>
    </div>
    <Row>
      <Col >
      <div>
      {!showInfoCrew ? (
        ""
            ) : (
              <InfoCrewCalls  /> 
              ) } 
      </div>
      </Col>
    </Row>
        {/* Add Production */}
        {!showPro ? (
          ""
              ) : (
                <AddProduction postData={postData} handleChange={handleChange} 
                crewInfoOne={crewInfoOne} setShowPro={setShowPro} /> 
                ) }  
        {/* Add Casting */}
        {!showCas ? (
                ""
              ) : (
                <AddCastingAD crewInfoOne={crewInfoOne} setShowCas={setShowCas} 
                postData={postData} handleChange={handleChange}/> 
                ) } 
        {/* Add Locations */}
        {!showLoc ? (
                ""
              ) : (
                <AddLocations crewInfoOne={crewInfoOne} setShowLoc={setShowLoc} 
                postData={postData} handleChange={handleChange}/> 
                ) } 
        {/* Add Script  */}
        {!showScr ? (
                ""
              ) : (
                <AddScriptCater crewInfoOne={crewInfoOne} setShowScr={setShowScr} 
                postData={postData} handleChange={handleChange}/> 
                ) } 
        {/* Add Electric */}
        {!showEle ? (
                ""
              ) : (
                <AddElectricGrip crewInfoOne={crewInfoOne} setShowEle={setShowEle} 
                postData={postData} handleChange={handleChange}/> 
                ) } 
        {/* Add Makeup */}
        {!showMak ? (
                ""
              ) : (
                <AddMakeup crewInfoOne={crewInfoOne} setShowMak={setShowMak} 
                postData={postData} handleChange={handleChange}/> 
                ) } 
        {/* Add Sound */}
        {!showSou ? (
                ""
              ) : (
                <AddSoundTransport crewInfoOne={crewInfoOne} setShowSou={setShowSou} 
                postData={postData} handleChange={handleChange}/> 
                ) } 
        {/* Add Stunts */}
        {!showStu ? (
                ""
              ) : (
                <AddStunts crewInfoOne={crewInfoOne} setShowStu={setShowStu} 
                postData={postData} handleChange={handleChange}/> 
                ) } 
        {/* Add Art */}
        {!showArt ? (
                ""
              ) : (
                <AddArt crewInfoOne={crewInfoOne} setShowArt={setShowArt} 
                postData={postData} handleChange={handleChange}/> 
                ) } 
        {/* Add Camera */}
        {!showCam ? (
                ""
              ) : (
                <AddCamera crewInfoOne={crewInfoOne} setShowCam={setShowCam} 
                postData={postData} handleChange={handleChange}/> 
                ) } 
        {/* Add Post */}
        {!showPos ? (
                ""
              ) : (
                <AddPostAdditional crewInfoOne={crewInfoOne} setShowPos={setShowPos} 
                postData={postData} handleChange={handleChange}/> 
                ) } 
        {/* Add Wardrobe  */}
        {!showWar ? (
                ""
              ) : (
                <AddWardrobe crewInfoOne={crewInfoOne} setShowWar={setShowWar}
                postData={postData} handleChange={handleChange} /> 
                ) } 
        </div>
    {buttons}
    </Form>
    </div>
  )
}

export default CallsheetCreate