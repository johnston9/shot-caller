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
    const {number, location, title, setPostData, scene, list,
        setShowOne, setShowTwoA, setShowTwoB,
        setShowThree, setShowLoc} = props

    const handleClick = () => {
        if (setShowOne) {
            setShowOne(showOne => !showOne)
        };
        if (setShowTwoA) {
            setShowTwoA(showTwoA => !showTwoA)
        };
        if (setShowTwoB) {
            setShowThree(showThree => !showThree)
        };
        if (setShowLoc) {
            setShowLoc(showLoc => !showLoc)
        };
        setPostData({...scene})
    }
    return (
        <div onClick={handleClick} className={`${styles.Item}`} >
            <p>Scene - {number} {location} - {title}</p>
        </div>
    )
}

export default ScheduleSceneItem
