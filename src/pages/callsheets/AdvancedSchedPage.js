import React, { useEffect, useState } from 'react';
import { useRedirect } from '../../hooks/Redirect';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../styles/Callsheets.module.css";
import { axiosReq } from '../../api/axiosDefaults';
import CharScheduleScene from './CharScheduleScene';
import AdvancedSchedule from './AdvancedSchedule';

const AdvancedSchedPage = (props) => {
  useRedirect("loggedOut");
  const {setShow, advancedDay} = props;
  // eslint-disable-next-line
  const [hasLoaded, setHasLoaded] = useState("");
  const [advancedSchedule, setAdvancedSchedule] = useState({ results: [] });
  // eslint-disable-next-line
  const [error, setErrors] = useState({});

  useEffect(() => {
    const fetchAdvancedSchedule = async () => {
      try {
        const { data } = await axiosReq.get(`/schedule/scenes/?day=${advancedDay}`);
        setAdvancedSchedule(data);
        setHasLoaded(true);
        console.log(data)
      } catch(err) {
        console.log(err);
        if (err.response?.status !== 401) {
          setErrors(err.response?.data);
          setHasLoaded(true);
        }
      }
    }
    fetchAdvancedSchedule();
  // eslint-disable-next-line
  }, [])


  return (
    <div>
      <AdvancedSchedule
       scenes={advancedSchedule.results}/>
    </div>
  )
}

export default AdvancedSchedPage