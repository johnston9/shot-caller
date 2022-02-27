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
import DayTop from './DayTop';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useHistory } from 'react-router';

const SchedulePages = () => {
    useRedirect("loggedOut");
    const [today, setToday] = useState(new Date());
    const [newdate, setNewdate] = useState("");
    const [days, setDays] = useState({results: [] });
    const [error, setError] = useState({});
    const [hasLoaded, setHasLoaded] = useState(false);
    const [query, setQuery] = useState("");
    const filter = "";
    const message = "No Days Added";
    const history = useHistory;


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
        }

    return (
        <div >
            <TopBox title="Schedule" />
            {/* add day */}
            <Button
              className={`${btnStyles.Button} ${btnStyles.Blue} my-1`}
              onClick={() => history.goBack()}
              >
              Back
              </Button>
            <Row className='mb-3'>
              <Col className='text-center'>
              <Button className= {`${btnStyles.Button} ${btnStyles.Wide2} ${btnStyles.Bright}`}>
                    Create Day</Button>
                </Col>
            </Row>
            {/* calender */}
            <Row className={`mx-1 py-2 ${styles.SubTitle }`} >
                <Col>
                <h3 className='mb-3 text-center'>Shoot Days Calendar</h3>
                   <div>
                       <Row >
                         <Col className='d-flex justify-content-center '  xs={12}  md={6} >
                         <Calendar 
                            onChange={(date) => handleDate(date) } 
                            value={today} />
                         </Col>
                         <Col className='d-flex justify-content-center my-3'  xs={12} md={6}>
                           <p>Click to find Shooting Day</p>
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
            <div className={`mx-1 mt-5 mb-3 ${styles.SubTitle }`} >
            <h3 className='text-center' >All Shoot Days</h3>
            <Row >
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
                        placeholder="Search by Scene or Location"
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
        </div>
    )
}

export default SchedulePages
