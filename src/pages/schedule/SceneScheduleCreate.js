import React, { useRef, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Asset from "../../components/Asset";

import Upload from "../../assets/upload.png";

import styles from "../../styles/PostCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import { Alert, Image } from "react-bootstrap";
import { useHistory } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import TopBox from "../../components/TopBox";
import { useRedirect } from "../../hooks/Redirect";

const SceneScheduleCreate = () => {
  useRedirect("loggedOut");
  const [scenes, setScenes] = useState({ results: [] });
  const [error, setErrors] = useState({});
  const history = useHistory();
//   const [hasLoaded, setHasLoaded] = useState(false);
//   const { pathname } = useLocation();
//   const [show, setShow] = useState(false);

  const [postData, setPostData] = useState({
      day_id: "",
      day: "",
      day_order_number: "",
      date: "",
      scene_number: "",
      act: "",
      title: "",
      start_time: "",
      end_time: "",
      content: "",
      location: "",
      filming_location: "",
      int_ext: "",
      day_night: "",
      time: "",
      action: "",
      info: "",
      character1: "",
      character1_costume: "",
      character1_calltime: "",
      character1_pickup: "",
      character2: "",
      character2_costume: "",
      character2_calltime: "",
      character2_pickup: "",
      character3: "",
      character3_costume: "",
      character3_calltime: "",
      character3_pickup: "",
      character4: "",
      character4_costume: "",
      character4_calltime: "",
      character4_pickup: "",
      character5_: "",
      character5_costume: "",
      character5_calltime: "",
      character5_pickup: "",
      character6: "",
      character6_costume: "",
      character6_calltime: "",
      character6_pickup: "",
      character7: "",
      character7_costume: "",
      character7_calltime: "",
      character7_pickup: "",
      character8: "",
      character8_costume: "",
      character8_calltime: "",
      character8_pickup: "",
      character9: "",
      character9_costume: "",
      character9_calltime: "",
      character9_pickup: "",
      character10: "",
      character10_costume: "",
      character10_calltime: "",
      character10_pickup: "",
      other_characters: "",
      other_characters_costumes: "",
      other_characters_calltimes: "",
      other_characters_pickups: "",
      background_artists: "",
      background_artists_costumes: "",
      background_artists_calltimes: "",
      background_artists_pickups: "",
  })

  const { day_id, day, day_order_number, date, scene_number, 
    act, title, int_ext, start_time, end_time, content, location,
    filming_location, day_night, time, action, info,
    character1, character1_costume, character2, 
    character2_costume, character3, character3_costume, character4, 
    character4_costume, character5, character5_costume, character6, 
    character6_costume, character7, character7_costume, character8,
    character8_costume, character9, character9_costume, character10, 
    character10_costume, character1_calltime, character1_pickup,
    character2_calltime, character2_pickup, character3_calltime,
    character3_pickup, character4_calltime, character4_pickup,
    character5_calltime, character5_pickup, character6_calltime, 
    character6_pickup, character7_calltime, character7_pickup,
    character8_calltime, character8_pickup, character9_calltime, 
    character9_pickup, character10_calltime, character10_pickup,
    other_characters, other_characters_costumes,
    background_artists, background_artists_costumes,
    other_characters_calltimes, other_characters_pickups,
    background_artists_calltimes, background_artists_pickups} = postData;

    const history = useHistory()
    
    const handleChange = (event) => {
      setPostData({
        ...postData,
        [event.target.name]: event.target.value,
      });
    };

    const handleSubmit = async (event) => {
      event.preventDefault();
      const formData = new FormData();
  
      formData.append("day_id", day_id);
      formData.append("day", day);
      formData.append("day_order_number", day_order_number);
      formData.append("date", date);
      formData.append("scene_number", scene_number);
      formData.append("act", act);
      formData.append("title", title);
      formData.append("start_time", start_time);
      formData.append("end_time", end_time);  
      formData.append("content", content);
      formData.append("location", location);
      formData.append("filming_location", filming_location);
      formData.append("int_ext", int_ext);
      formData.append("day_night", day_night);
      formData.append("time", time);
      formData.append("action", action);
      formData.append("info", info);
      formData.append("character1", character1);
      formData.append("character1_costume", character1_costume);
      formData.append("character1_calltime", character1_calltime);
      formData.append("character1_pickup", character1_pickup);
      formData.append("character2", character2);
      formData.append("character2_costume", character2_costume);
      formData.append("character2_calltime", character2_calltime);
      formData.append("character2_pickup", character2_pickup);
      formData.append("character3", character3);
      formData.append("character3_costume", character3_costume);
      formData.append("character3_calltime", character3_calltime);
      formData.append("character3_pickup", character3_pickup);
      formData.append("character4", character4);
      formData.append("character4_costume", character4_costume);
      formData.append("character4_calltime", character4_calltime);
      formData.append("character4_pickup", character4_pickup);
      formData.append("character5", character5);
      formData.append("character5_costume", character5_costume);
      formData.append("character5_calltime", character5_calltime);
      formData.append("character5_pickup", character5_pickup);
      formData.append("character6", character6);
      formData.append("character6_costume", character6_costume);
      formData.append("character6_calltime", character6_calltime);
      formData.append("character6_pickup", character6_pickup);
      formData.append("character7", character7);
      formData.append("character7_costume", character7_costume);
      formData.append("character7_calltime", character7_calltime);
      formData.append("character7_pickup", character7_pickup);
      formData.append("character8", character8);
      formData.append("character8_costume", character8_costume);
      formData.append("character8_calltime", character8_calltime);
      formData.append("character8_pickup", character8_pickup);
      formData.append("character9", character9);
      formData.append("character9_costume", character9_costume);
      formData.append("character9_calltime", character9_calltime);
      formData.append("character9_pickup", character9_pickup);
      formData.append("character10", character10);
      formData.append("character10_costume", character10_costume);
      formData.append("character10_calltime", character10_calltime);
      formData.append("character10_pickup", character10_pickup);
      formData.append("other_characters", other_characters);
      formData.append("other_characters_costumes", other_characters_costumes);
      formData.append("other_characters_calltimes", other_characters_calltimes);
      formData.append("other_characters_pickups", other_characters_pickups);
      formData.append("background_artists", background_artists);
      formData.append("background_artists_costumes", background_artists_costumes);
      formData.append("background_artists_calltimes", background_artists_calltimes);
      formData.append("background_artists_pickups", background_artists_pickups);
        
      try {
        const { data } = await axiosReq.post("/scenes/", formData);
        history.push(`/scenes/${data.id}`);
      } catch (err) {
        console.log(err);
        if (err.response?.status !== 401) {
          setErrors(err.response?.data);
        }
      }
    }
    
    return (
        <div>
            mm
        </div>
    )
}

export default SceneScheduleCreate
