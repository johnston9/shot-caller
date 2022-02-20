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

const SchedulePages = () => {
    useRedirect("loggedOut");
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

    return (
        <div >
            <TopBox title="Days" />
            {/* calender */}
            <Row>
                <Col>
                   <div>
                       <h3>Calender</h3>
                   </div>
                </Col>
            </Row>
            {/* add day */}
            <Row className='mb-3'>
                <Col className="text-center">
                    <Button onClick={() => setShow(show => !show)} 
                    className={`${btnStyles.Button} ${btnStyles.Wide2} ${btnStyles.Bright}`}>
                    Add Day</Button>
                    {!show ?("") : (<DayCreateForm topbox /> ) }
                </Col>
            </Row>
            {/* search */}
            <Row>
                <Col className="mt-1" xs={12} md={{ span: 6, offset: 3 }} >
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
            <Row className="h-100">
          {hasLoaded ? (
          <>
            {days.results.length ? (
                days.results.map((day) => (
                  <Col xs={12} md={6} className="py-2">
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
