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
import Info from "./Info";

const IndexShotsPage = () => {
    useRedirect("loggedOut");
    const [indexShots, setIndexShots] = useState({results: [] });
    // eslint-disable-next-line
    const [error, setError] = useState({});
    const [hasLoaded, setHasLoaded] = useState(false);
    const [query, setQuery] = useState("");
    const filter = "";
    const message = "No xx Added";
    const history = useHistory();
    const [showInfo, setShowInfo] = useState(false);


    useEffect(() => {
          const fetchseries = async () => {
            try {
              const { data } = await axiosReq.get(`/scenes/?${filter}&search=${query}`);
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
      
        }, [query, filter])

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
                    <Info  /> 
                    ) } 
          {/* Add Index Shot */}
          <Row className='mt-0'>
            <Col className="text-center">
            <Button onClick={() => history.push('/series/create')} 
              className={`${btnStyles.Button} ${btnStyles.Wide2} ${btnStyles.Bright} `}>
              Add Index Shot Series</Button>
            </Col>
          </Row>
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
            <p style={{ textTransform: 'uppercase'}} className={`mt-2 pl-3 mb-0 py-1 ${styles.SubTitle }`}></p>
            {/* <Row className="h-100 mt-3">
            {hasLoaded ? (
          <>
            {indexShots.results.length ? (
                indexShots.results.map((scene, index) => {
                  return (
                    <Col xs={4} sm={3} lg={2} className="px-2 py-2 p-0 p-lg-2">
                      <SceneTop 
                        key={scene.title}
                        {...scene} 
                        setScenes={setScenes}
                        style={{ backgroundImage: (index % 3 === 0) ? (`url(${r1})`) : (index % 2 === 0) ? (`url(${r1})`) : (`url(${r1})`) , 
                          objectFit: "fill", width: 'auto', repeat: 'no-repeat' }}
                        />
                      </Col>
                )}
                ))
             : (
              <Container className={appStyles.Content}>
                <Asset src={NoResults } message="No Results" />
              </Container>
            )}
          </>
        ) : (
          <Container className={appStyles.Content}>
            <Asset spinner />
          </Container>
        )}
            </Row>            */}
        </div>
    )
}

export default IndexShotsPage