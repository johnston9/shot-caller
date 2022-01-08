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
import Image from "react-bootstrap/Image";
import Alert from "react-bootstrap/Alert";

import { useHistory } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import TopBox from "../../components/TopBox";
import { useRedirect } from "../../hooks/Redirect";
import Asset2 from "../../components/Asset2";

const ShotListCreate = ({handleMount}) => {
    useRedirect("loggedOut")
    const [errors, setErrors] = useState({});
    const [postData, setPostData] = useState({
        scene_id: "",
        scene_number: "",
        shot_number: "",
        size: "",
        angle: "",
        movement: "",
        screen_time: "",
        camera: "",
        lens: "",
        script_length: "",
        script_ref: "",
        storyboard_refs: "",
        description: "",
        equipment: "",
        fx: "",
        focus_pulls: "",
        lighting: "",
        audio: "",
        image: "",
    });

    const { 
        scene_id,
        scene_number,
        shot_number,
        size,
        angle,
        movement,
        screen_time,
        camera,
        lens,
        script_length,
        script_ref,
        storyboard_refs,
        description,
        equipment,
        fx,
        focus_pulls,
        lighting,
        audio,
        image,
    } = postData;

    const imageInput1 = useRef(null);

    const history = useHistory();

    const handleChange = (event) => {
        setPostData({
          ...postData,
          [event.target.name]: event.target.value,
        });
      };
    
    const handleChangeImage = (event) => {
    if (event.target.files.length) {
        URL.revokeObjectURL(image);
        setPostData({
        ...postData,
        image: URL.createObjectURL(event.target.files[0]),
        });
        console.log(`image ${image}`)
    }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
    
        formData.append("scene_id", scene_id);
        formData.append("scene_number", scene_number);
        formData.append("shot_number", shot_number);
        formData.append("size", size);
        formData.append("description", description);
        formData.append("angle", angle);
        formData.append("equipment", equipment);
        formData.append("movement", movement);
        formData.append("screen_time", screen_time);
        formData.append("fx", fx);
        formData.append("focus_pulls", focus_pulls);
        formData.append("lighting", lighting);
        formData.append("camera", camera);
        formData.append("lens", lens);
        formData.append("script_length", script_length);
        formData.append("script_ref", script_ref);
        formData.append("storyboard_refs", storyboard_refs);
        formData.append("audio", audio);
        if(imageInput1.current.files[0]) {
          formData.append("image", imageInput1.current.files[0]);
        }
      
        try {
          const { data } = await axiosReq.post("/shotlists/", formData);
          handleMount();
        } catch (err) {
          console.log(err);
          if (err.response?.status !== 401) {
            setErrors(err.response?.data);
          }
        }
      }

    return (
        <div>
            bbb
        </div>
    )
}

export default ShotListCreate
