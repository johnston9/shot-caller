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
import SceneTop from './SceneTop';
import { Button } from 'react-bootstrap';
import { useSetActContext } from '../../contexts/ActContext';
import { useHistory } from "react-router-dom";
import TopBox from '../../components/TopBox';
import r1 from "../../assets/r1.png"; 
import Information from './Information';

const ScenesPage = ({message, filter = "" }) => {
    useRedirect("loggedOut");
    const [scenes, setScenes] = useState({results: [] });
    const [hasLoaded, setHasLoaded] = useState(false);
    const [query, setQuery] = useState("");
    const setAct = useSetActContext();
    const history = useHistory();
    const [showInfo, setShowInfo] = useState(false);

    const handleClickAct1 = () => {
      setAct('one'); 
      history.push(`/act/scenes`);

    };

    const handleClickAct2a = () => {
      setAct('two-a'); 
      history.push(`/act/scenes`);

    };

    const handleClickAct2b = () => {
      setAct('two-b'); 
      history.push(`/act/scenes`);

    };

    const handleClickAct3 = () => {
      setAct('three'); 
      history.push(`/act/scenes`);

    };

    useEffect(() => {
        const fetchScenes = async () => {
          try {
            const { data } = await axiosReq.get(`/scenes/?${filter}&search=${query}`);
            setScenes(data);
            setHasLoaded(true);
          } catch(err) {
            console.log(err);
          }
        }
        setHasLoaded(false);

        const timer = setTimeout(() => {fetchScenes();
        }, 500)

        return () => {
            clearTimeout(timer);
          };
    
      }, [query, filter])

    return (
        <div >
          <TopBox title="Scenes" />
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
                    <Information  /> 
                    ) } 
          {/* Add Scene */}
          <Row className='mt-0'>
            <Col className="text-center">
            <Button onClick={() => history.push('/scenes/create')} 
              className={`${btnStyles.Button} ${btnStyles.Wide2} ${btnStyles.Bright} `}>
              Add Scene</Button>
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
                    placeholder="Search by scene number, title or location"
                />
                </Form>
            </Col>
          </Row>
          <Row className='mt-1' >
              <Col className='text-center' xs={6} md={3}>
              <Button
                  className={`py-0 ${btnStyles.Button} ${btnStyles.Blue}`}
                  onClick={handleClickAct1} >Act One
              </Button>
              </Col>
              <Col className='text-center' xs={6} md={3}>
                <Button
                    className={`py-0 ${btnStyles.Button} ${btnStyles.Blue}`}
                    onClick={handleClickAct2a} >Act Two A
                </Button>
              </Col>
              <Col className='text-center' xs={6} md={3}>
              <Button
                  className={`py-0 mt-2 mt-md-0 ${btnStyles.Button} ${btnStyles.Blue}`}
                  onClick={handleClickAct2b} >Act Two B
              </Button> 
              </Col>
              <Col className='text-center' xs={6} md={3}>
                <Button
                    className={`py-0 mt-2 mt-md-0  ${btnStyles.Button} ${btnStyles.Blue}`}
                    onClick={handleClickAct3} >Act Three
                </Button>
              </Col>
            </Row>
            <p style={{ textTransform: 'uppercase'}} className={`mt-2 pl-3 mb-0 py-1 ${styles.SubTitle }`}></p>
            <Row className="h-100 mt-3">
            {hasLoaded ? (
          <>
            {scenes.results.length ? (
                scenes.results.map((scene, index) => {
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

export default ScenesPage
