import React, { useEffect, useState } from 'react';
import { useRedirect } from '../../hooks/Redirect';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../styles/Callsheets.module.css";
import { axiosReq } from '../../api/axiosDefaults';
import CharScheduleScene from './CharScheduleScene';

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
    <div className='mt-3'>
      <div className='d-none d-md-block mt-5'>
          <h4 className={`mt-3 pl-3 py-0 px-1 ${styles.SubTitleSpan }`} 
          style={{ textTransform: 'uppercase' }}>Advanced Schedule <span className={`${styles.HSpan }`} >(xxx Pages)  Day x Date </span></h4>
      </div>
      <div className='d-block d-md-none'>
          <div className={`mt-0 text-center ${styles.SubTitle }`}>
          <span className={`float-right ${styles.Close }`} onClick={() => setShow(false) } >Close</span> 
          <h5 className={`pl-5 text-center`} style={{ textTransform: 'uppercase'}} >
            Advanced Schedule </h5>
          <p className='pr-3'>(xxx Pages)  Day x Date </p>
          </div>
      </div>
      {/* titles */}
      <div className='d-none d-md-block'>
            <Row style={{ textTransform: 'uppercase' }} className={`text-center mx-0  ${styles.TitleBox}`} >
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                    <p className='mb-0'>Time</p>
                </Col>
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                    <p className='mb-0 pl-2'>Scene</p>
                </Col>
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={4} md={4}>
                    <p className='mb-0'>Details</p>
                </Col>
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                    <p className='mb-0'>D/N</p>
                </Col>
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={2} md={2}>
                <p className='mb-0'>Filming Loc</p>                        
                </Col>
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={2} md={2}>
                    <p className='mb-0'>Cast</p>
                </Col>
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                    <p className='mb-0'>Pages</p>
                </Col>
            </Row>
        </div>
        <div className='d-block d-md-none'>
            <Row className='text-center mx-0 px-0' >
                <Col className={`mx-0 px-0  ${styles.TitleBox2}`} xs={2}>
                <p style={{ textTransform: 'uppercase' }} className={`mb-0  ${styles.TitleBox}`}>Time</p>
                </Col>
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={2}>
                <p style={{ textTransform: 'uppercase' }} className={`mb-0  ${styles.TitleBox}`}>Scene</p>
                </Col>
                <Col className={` mx-0 px-0 ${styles.TitleBox2}`} xs={6}>
                <p style={{ textTransform: 'uppercase' }} className={`mb-0 text-center ${styles.TitleBox}`}>Details</p>
                </Col>
                <Col className={`mx-0 px-0 `} xs={2} md={1}>
                <p style={{ textTransform: 'uppercase' }} className={`mb-0 text-center ${styles.TitleBox}`}>Info</p>
                </Col>
            </Row>
        </div>
      {/* scenes */}
      <Row>
        <Col >                   
        {advancedSchedule.results.length ? (
            advancedSchedule.results.map((scene, index) => (
                <CharScheduleScene
                style={{ backgroundColor: (index % 3 === 0) 
                    ? '#dbfaf9' : (index % 2 === 0) ? 
                    'rgb(223 254 240)' : 'rgb(248 241 249)' }}
                    {...scene} 
                    scene={scene}
                    key={scene.id} />
            ))) : ("Sorry no Advanced Schedule yet")}
        </Col>
      </Row>
    </div>
  )
}

export default AdvancedSchedPage