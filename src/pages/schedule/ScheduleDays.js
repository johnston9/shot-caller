/* Page to fetch the Shooting Schedule Days data and all 
   Schedule Scenes
 * Contains DayTop component to which it passes the
   Day's cover info and the Schedule Scenes
 * Contains the link to the DayCreateForm component
 * Contains the Calendar component */
import React, { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import styles from "../../styles/Scene.module.css";
import btnStyles from "../../styles/Button.module.css";
import { axiosReq } from '../../api/axiosDefaults';
import NoResults from "../../assets/no-results.png";
import Asset from "../../components/Asset";
import { useRedirect } from '../../hooks/Redirect';
import appStyles from "../../App.module.css";
import { Button } from 'react-bootstrap';
import TopBox from '../../components/TopBox';
import DayTop from './day/DayTop';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useHistory } from 'react-router-dom';
import Info from './Info';


const SchedulePages = () => {
    useRedirect();
    // eslint-disable-next-line
    const [today, setToday] = useState(new Date());
    const [newdate, setNewdate] = useState("");
    const [days, setDays] = useState({results: [] });
    const [daysScenes, setDaysScenes] = useState({ results: [] });
    // eslint-disable-next-line
    const [error, setError] = useState({});
    const [hasLoaded, setHasLoaded] = useState(false);
    const [query, setQuery] = useState("");
    const filter = "";
    const message = "No Days Added";
    const history = useHistory();
    const [showInfo, setShowInfo] = useState(false);

    const fetchDays = async () => {
      /* Fetch all Days and all schedule scenes */
      try {
        const [{ data: daysData }, { data: scenesData }] = await Promise.all([
          axiosReq.get(`/days/?${filter}&search=${query}`),
          axiosReq.get(`/schedule/scenes`),
      ])
        // const { data } = await axiosReq.get(`/days/?${filter}&search=${query}`);
        setDays(daysData);
        setDaysScenes(scenesData);
        setHasLoaded(true);
      } catch(err) {
        setError(err)
        console.log(err);
      }
    }

    useEffect(() => {
          setHasLoaded(false);
  
          const timer = setTimeout(() => {fetchDays();
          }, 500)
  
          return () => {
              clearTimeout(timer);
            };
      
        }, [query, filter])

    const handleDate = (date) => {
      /* Change the Calander date format to the DRF model's format */
      const formatdate = date.toLocaleDateString('en-GB', {
        day: '2-digit', month: 'short', year: 'numeric'
      })
      setNewdate(formatdate);
    }

    return (
        <div >
            <TopBox title="Schedule" />
            {/* back info */}
            <Button
              className={`${btnStyles.Button} ${btnStyles.Blue} my-1`}
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
                        <Info  /> 
                        ) } 
            {/* add day */}
            <Row className='mb-3'>
              <Col className='text-center'>
              <Button onClick={() => history.push('/days/create')}
                className= {`${btnStyles.Button} ${btnStyles.Wide2} ${btnStyles.Bright}`}>
                    Create Day</Button>
                </Col>
            </Row>
            {/* calender */}
            <h5 className={`mt-3 text-center py-1 ${styles.SubTitle }`}>
              Shoot Days Calendar</h5>
            <div >
            <Row className={`mx-1 py-3`} >
                <Col>
                   <div>
                       <Row >
                         <Col className='d-flex justify-content-center '  xs={12}  md={6} >
                         <Calendar 
                            onChange={(date) => handleDate(date) } 
                            value={today} />
                         </Col>
                         <Col className='p-1'  xs={12} md={6}>
                          <Row className='text-center'>
                            <Col>
                            <p>Click on a date in the Calendar to find its Shoot Days if one has been
                              created.
                            </p>
                            <p>
                            If one has not been created for that date nothing will show.
                            </p>
                            </Col>
                          </Row>
                          <Row className='mt-3'>
                            <Col xs={{span: 10, offset: 1}}  md={{span: 8, offset: 2}} className='mt-3 text-center' >
                            {days.results.map((day) => (
                                day.date === newdate ? (
                                  <DayTop
                                  fetchDays={fetchDays}
                                   daysScenes={daysScenes} {...day} />
                                ) : ("")
                              )) }
                            </Col>
                          </Row>
                           </Col>
                       </Row>
                   </div>
                </Col>
            </Row>
            </div>
            <h5 className={`mt-3 text-center py-1 mb-0 ${styles.SubTitle }`}>
            All Shoot Days</h5>
            <div >
            <Row >
                <Col className="mt-3" xs={{ span: 10, offset: 1 }} 
                md={{ span: 6, offset: 3 }} >
                <Form
                    className={styles.SearchBar}
                    onSubmit={(event) => event.preventDefault()}
                    >
                    <Form.Control
                        value={query}
                        onChange={(event) => setQuery(event.target.value)}
                        type="text"
                        className="mr-sm-2"
                        placeholder="Search by Day Number"
                    />
                    </Form>
                </Col>
            </Row>            
            {/* days */}
            <Row className="py-2">
              {hasLoaded ? (
              <>
                {days.results.length ? (
                    days.results.map((day) => (
                      <Col xs={{ span: 10, offset: 1 }}
                           sm={{ span: 6, offset: 0 }}
                       md={{ span: 4, offset: 0 }} lg={3} className="py-2">
                      <DayTop 
                      fetchDays={fetchDays}
                      daysScenes={daysScenes} key={day.id} 
                      {...day} setDays={setDays} />
                      </Col>
                    ))) 
                : (
                  <Container className={appStyles.Content}>
                    <Asset src={NoResults } message={message} />
                  </Container>
                )}
              </>
            ) : (
              <Container className={appStyles.Content}>
                <Asset spinner />
              </Container>
            )}
            </Row>  
            </div>
        </div>
    )
}

export default SchedulePages
