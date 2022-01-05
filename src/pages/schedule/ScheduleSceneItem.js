import React, { useEffect, useRef, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Asset from "../../components/Asset";

import Upload from "../../assets/upload.png";

import styles from "../../styles/ScheduleSceneItem.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import { Alert, Image } from "react-bootstrap";
import { useHistory } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import TopBox from "../../components/TopBox";
import { useRedirect } from "../../hooks/Redirect";

const ScheduleSceneItem = (props) => {
    const {setPostData, scene,
        setShowOne, setShowTwoA, setShowTwoB,
        setShowThree, setShowLoc} = props

    const { number, title, act, int_ext, day_night, time, location,
        character1, character1_costume, character2, filming_location,
        character2_costume, character3, character3_costume, character4, 
        character4_costume, character5, character5_costume, character6, 
        character6_costume, character7, character7_costume, character8,
        character8_costume, character9, character9_costume, character10, 
        character10_costume, character11, character11_costume, character12,
        character12_costume, other_characters, other_characters_costumes,
        background_artists, background_artists_costumes,
        pages, action, content, info } = scene;

    const handleClick = () => {
        if (setShowOne) {
            setShowOne(showOne => !showOne)
        };
        if (setShowTwoA) {
            setShowTwoA(showTwoA => !showTwoA)
        };
        if (setShowTwoB) {
            setShowTwoB(showTwoB => !showTwoB)
        };
        if (setShowThree) {
            setShowThree(showThree => !showThree)
        };
        if (setShowLoc) {
            setShowLoc(showLoc => !showLoc)
        };
        setPostData({ number, title, act, int_ext, day_night, time, location,
            character1, character1_costume, character2, filming_location,
            character2_costume, character3, character3_costume, character4, 
            character4_costume, character5, character5_costume, character6, 
            character6_costume, character7, character7_costume, character8,
            character8_costume, character9, character9_costume, character10, 
            character10_costume, character11, character11_costume, character12,
            character12_costume, other_characters, other_characters_costumes,
            background_artists, background_artists_costumes,
            pages, action, content, info });
    }
    return (
        <div onClick={handleClick} className={`${styles.Item}`} >
            <p>Scene - {number} {location} - {title}</p>
        </div>
    )
}

export default ScheduleSceneItem
