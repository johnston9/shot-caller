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
  const [dayInfo, setDayInfo] = useState({ results: [] });
  const [advancedSchedule, setAdvancedSchedule] = useState({ results: [] });
  // eslint-disable-next-line
  const [error, setErrors] = useState({});

  useEffect(() => {
    const fetchAdvancedSchedule = async () => {
      try {
        const [{ data: dayGet }, { data: scenes }] = await Promise.all([
          axiosReq.get(`/days/?day=${advancedDay}`),
          axiosReq.get(`/schedule/scenes/?day=${advancedDay}`), 
      ])
        setDayInfo(dayGet);
        setAdvancedSchedule(scenes);
        setHasLoaded(true);
        console.log(dayGet)
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

  // useEffect(() => {
  //   const fetchAdvancedSchedule = async () => {
  //     try {
  //       const {data} = await axiosReq.get(`/schedule/scenes/?day=${advancedDay}`); 
  //       // setDayInfo({ results: [dayGet] });
  //       setAdvancedSchedule(data);
  //       setHasLoaded(true);
  //     } catch(err) {
  //       console.log(err);
  //       if (err.response?.status !== 401) {
  //         setErrors(err.response?.data);
  //         setHasLoaded(true);
  //       }
  //     }
  //   }
  //   fetchAdvancedSchedule();
  // // eslint-disable-next-line
  // }, [])


  return (
    <div>
      <AdvancedSchedule
       setShow={setShow}
       dayInfo={dayInfo.results[0]}
      //  dayInfo={dayInfo.results[0] }
       scenes={advancedSchedule.results}/>
    </div>
  )
}

export default AdvancedSchedPage