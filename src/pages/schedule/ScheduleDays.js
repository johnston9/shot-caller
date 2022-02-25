import React, { useEffect, useState } from 'react'
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
import DayCreateForm from './DayCreateForm';
import DayTop from './DayTop';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const SchedulePages = () => {
    useRedirect("loggedOut");
    const [today, setToday] = useState(new Date());
    const [newdate, setNewdate] = useState("");
    const [days, setDays] = useState({results: [] });
    const [show, setShow] = useState(false);
    const [error, setError] = useState({});
    const [hasLoaded, setHasLoaded] = useState(false);
    const [query, setQuery] = useState("");
    const filter = ""
    const message = "No Days. Please add Day"


    useEffect(() => {
          const fetchDays = async () => {
            try {
              const { data } = await axiosReq.get(`/days/?${filter}&search=${query}`);
              setDays(data);
              setHasLoaded(true);
            } catch(err) {
              setError(err)
              console.log(err);
            }
          }
          setHasLoaded(false);
  
          const timer = setTimeout(() => {fetchDays();
          }, 500)
  
          return () => {
              clearTimeout(timer);
            };
      
        }, [query, filter])

        const handleDate = (date) => {
          const formatdate = date.toLocaleDateString('en-GB', {
            day: 'numeric', month: 'short', year: 'numeric'
          })
          setNewdate(formatdate);
          console.log(`start ${formatdate}`);
          console.log(`date ${today}`);
          // history.push(`/calendar/days`);
        }

    return (
        <div >
            <TopBox title="Schedule" />
            {/* add day */}
            {/* <h3 className='text-center'>Create Shoot Day</h3> */}
            <Row className='my-4'>
                <Col className="text-center">
                    <Button onClick={() => setShow(show => !show)} 
                    className={`${btnStyles.Button} ${btnStyles.Wide2} ${btnStyles.Bright}`}>
                    Create Day</Button>
                    {!show ?("") : (<DayCreateForm topbox setShow={setShow} /> ) }
                </Col>
            </Row>
            <p className={`mt-1 pl-3 mb-0 py-1 ${styles.SubTitle }`}></p>
            {/* calender */}
            <Row>
                <Col>
                   <div>
                       <h3 className='my-3 text-center'>Shoot Days Calendar</h3>
                       <Row >
                         <Col className='d-flex justify-content-center '  xs={12}  md={6} >
                         <Calendar 
                            onChange={(date) => handleDate(date) } 
                            value={today} />
                         </Col>
                         <Col className='d-flex justify-content-center my-3'  xs={12} md={6}>
                          {days.results.map((day) => (
                            day.date == newdate ? (
                              <DayTop {...day} />
                            ) : ("")
                          )) }
                        </Col>
                       </Row>
                   </div>
                </Col>
            </Row>
            <p className={`mt-3 pl-3 mb-0 py-1 ${styles.SubTitle }`}></p>
            <h3 className='my-3 text-center'>All Shoot Days</h3>
            <Row>
                <Col className="mt-1" xs={{ span: 10, offset: 1 }} md={{ span: 6, offset: 3 }} >
                <Form
                    className={styles.SearchBar}
                    onSubmit={(event) => event.preventDefault()}
                    >
                    <Form.Control
                        value={query}
                        onChange={(event) => setQuery(event.target.value)}
                        type="text"
                        className="mr-sm-2"
                        placeholder="Search by scene number, title or location"
                    />
                    </Form>
                </Col>
            </Row>            
            {/* days */}
            <Row className="py-2 d-flex justify-content-center">
          {hasLoaded ? (
          <>
            {days.results.length ? (
                days.results.map((day) => (
                  <Col xs={10}  md={6} lg={4} className="py-2">
                  <DayTop key={day.id} {...day} setDays={setDays} />
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
    )
}

export default SchedulePages
