import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { axiosReq } from '../../api/axiosDefaults';
import NoResults from "../../assets/no-results.png";
import Asset from "../../components/Asset";
import appStyles from "../../App.module.css";
import TopBox from '../../components/TopBox';
import { useRedirect } from '../../hooks/Redirect';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import styles from "../../styles/DayPage.module.css";
import btnStyles from "../../styles/Button.module.css";
import { useParams, useHistory } from 'react-router-dom';
import Info2 from './Info2';
import IndexShotCreate from './IndexShotCreate';
import IndexShot from './IndexShot';

const IndexShotsPage = () => {
    useRedirect("loggedOut");
    const [indexShots, setIndexShots] = useState({results: [] });
    // eslint-disable-next-line
    const [error, setError] = useState({});
    const [show, setShow] = useState(false);
    const { id } = useParams();
    const [hasLoaded, setHasLoaded] = useState(false);
    const [query, setQuery] = useState("");
    const message = "No Results";
    const history = useHistory();
    const [showInfo, setShowInfo] = useState(false);
    const [hasOrder, setHasOrder] = useState(false);


    useEffect(() => {
          const fetchseries = async () => {
            try {
              const { data } = await axiosReq.get(`/indexshots/?series_id=${id}&search=${query}`);
              setIndexShots(data);
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
      
        }, [query, hasOrder])

    return (
        <div >
          <TopBox title="Index Shots" />
          <Button
              className={`${btnStyles.Button} ${btnStyles.Blue} mt-2`}
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
                    <Info2  /> 
                    ) } 
          {/* Add Index Shot history.push('/indexshots/create') */}
          <Row className='mt-0'>
            <Col className="text-center">
            <Button onClick={() => setShow(show => !show)} 
              className={`${btnStyles.Button} ${btnStyles.Wide2} ${btnStyles.Bright} `}>
              Add Index Shot</Button>
            </Col>
          </Row>
          {!show ?("") : (<IndexShotCreate setShow={setShow} setHasOrder={setHasOrder} /> ) }
          {/* search  */}
          <Row>
            <Col className="mt-2" xs={12} sm={{ span: 6, offset: 3 }} >
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
            <p style={{ textTransform: 'uppercase'}} 
            className={`mt-2 pl-3 mb-0 py-1 ${styles.SubTitle }`}></p>
            {/* series */}
            <Row className="py-2 d-flex justify-content-center">
              {hasLoaded ? (
              <>
                {indexShots.results.length ? (
                    indexShots.results.map((shot) => (
                      <Col xs={10}  md={6} lg={4} className="py-2">
                      <IndexShot key={shot.id} 
                      {...shot} setIndexShots={setIndexShots} />
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

export default IndexShotsPage