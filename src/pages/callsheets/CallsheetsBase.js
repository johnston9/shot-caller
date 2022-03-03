import React, { useEffect, useState } from 'react';
import { axiosReq } from '../../api/axiosDefaults';
import { useRedirect } from '../../hooks/Redirect';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import styles from "../../styles/DayPage.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";
import DayPageTop from '../schedule/DayPageTop';
import SceneScheduleCreate from '../schedule/SceneScheduleCreate';
import ScheduleScene from '../schedule/ScheduleScene';
import TopBox from '../../components/TopBox';
import Asset from '../../components/Asset';
import { useParams, useHistory } from 'react-router-dom';

const CallsheetsBase = () => {
  return (
    <div>CallsheetsBase</div>
  )
}

export default CallsheetsBase