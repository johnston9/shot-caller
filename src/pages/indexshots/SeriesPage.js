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
import { useHistory } from 'react-router-dom';
import Info from './Info';
import SeriesTop from './SeriesTop';

const SeriesPage = () => {
    useRedirect("loggedOut");
    const [series, setSeries] = useState({results: [] });
    // eslint-disable-next-line
    const [error, setError] = useState({});
    const [hasLoaded, setHasLoaded] = useState(false);
    const [query, setQuery] = useState("");
    const filter = "";
    const message = "No Series Added";
    const history = useHistory();
    const [showInfo, setShowInfo] = useState(false);
    console.log(query);

    useEffect(() => {
          const fetchseries = async () => {
            try {
              const { data } = await axiosReq.get(`/series/?${filter}&search=${query}`);
              setSeries(data);
              console.log(data);
              setHasLoaded(true);
            } catch(err) {
              setError(err)
              console.log(err);
            }
          }
          setHasLoaded(false);
  
          const timer = setTimeout(() => {fetchseries();
          }, 500)
  
          return () => {
              clearTimeout(timer);
            };
      
        }, [query, filter])

    return (
        <div >
            <TopBox title="Index Shots" />
            {/* add  */}
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
            <Row className='mb-3'>
              <Col className='text-center' md={{span: 10, offset: 1}}>
                <p>
                  First create a Series.
                </p>
              </Col>
            </Row>
            <Row className='mb-3'>
              <Col className='text-center'>
              <Button onClick={() => history.push('/series/create')}
                className= {`${btnStyles.Button} ${btnStyles.Wide2} ${btnStyles.Bright}`}>
                    Create Series</Button>
                </Col>
            </Row>
            {/* calender */}
            <div className={`mx-1 mt-5 mb-3 ${styles.SubTitle }`} >
            <h3 className='text-center' >Index Shots Series</h3>
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
                        placeholder="Search by Series Name"
                    />
                    </Form>
                </Col>
            </Row>            
            {/* series */}
            <Row className="py-2 d-flex justify-content-center">
          {hasLoaded ? (
          <>
            {series.results.length ? (
                series.results.map((seri) => (
                  <Col xs={10}  md={6} lg={4} className="py-2">
                  <SeriesTop key={seri.id} 
                   {...seri} setSeries={setSeries} />
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

export default SeriesPage