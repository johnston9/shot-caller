/* Page to fetch the Advanced Schedule data
 * Contain the Advanced Schedule to which it passses the data 
 * Note: The Advanced Schedule is the first half of the next day's schedule*/
import React, { useEffect, useState } from 'react';
import { useRedirect } from '../../../hooks/Redirect';
import { axiosReq } from '../../../api/axiosDefaults';
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
    /* Fetch day data and day schedule scenes data for the advancedDay */
    const fetchAdvancedSchedule = async () => {
      try {
        const [{ data: dayGet }, { data: scenes }] = await Promise.all([
          axiosReq.get(`/days/?day=${advancedDay}`),
          axiosReq.get(`/schedule/scenes/?day=${advancedDay}`), 
      ])
        setDayInfo(dayGet);
        setAdvancedSchedule(scenes);
        setHasLoaded(true);
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
       setShow={setShow}
       dayInfo={dayInfo.results[0]}
       scenes={advancedSchedule.results}/>
    </div>
  )
}

export default AdvancedSchedPage