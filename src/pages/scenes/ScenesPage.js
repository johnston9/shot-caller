import React, { useEffect, useState } from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import styles from "../../styles/Scene.module.css";
import btnStyles from "../../styles/Button.module.css";
import { axiosReq } from '../../api/axiosDefaults';
// import InfiniteScroll from 'react-infinite-scroll-component';
// import { fetchMoreData } from '../../utils/utils';
import NoResults from "../../assets/no-results.png";
import Asset from "../../components/Asset";
import { useRedirect } from '../../hooks/Redirect';
import appStyles from "../../App.module.css";
import SceneTop from './SceneTop';
import { Button } from 'react-bootstrap';
import { useSetActContext } from '../../contexts/ActContext';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import TopBox from '../../components/TopBox';
import SceneCreateForm from './SceneCreateForm';
import b1 from "../../assets/b1.png";
import b2 from "../../assets/b2.png"; 
import b3 from "../../assets/b3.png";
import b4 from "../../assets/b4.png";  
import d3 from "../../assets/d3.png"; 

const ScenesPage = ({message, filter = "" }) => {
    useRedirect("loggedOut");
    const [scenes, setScenes] = useState({results: [] });
    const [show, setShow] = useState(false);
    const [hasLoaded, setHasLoaded] = useState(false);
    const [query, setQuery] = useState("");
    const setAct = useSetActContext();
    const history = useHistory();
    const topbox = true

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
      console.log(`depart ${filter}`);
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
        <div className='mt-5'>
          <TopBox title="Workspace" />
          <Button
              className={`${btnStyles.Button} ${btnStyles.Back} my-2`}
              onClick={() => history.goBack()}
              >
              Back
          </Button>
          <Row className='mt-0'>
            <Col className="text-center">
            <Button onClick={() => history.push('/scenes/create')} 
              className={`${btnStyles.Button} ${btnStyles.Wide2} ${btnStyles.Bright}`}>
              Add Scene</Button>
              {/* <Button onClick={() => setShow(show => !show)} 
              className={`${btnStyles.Button} ${btnStyles.Wide2} ${btnStyles.Bright}`}>
              Add Scene</Button>
              {!show ?("") : (<SceneCreateForm topbox /> ) } */}
            </Col>
          </Row>
          <Row>
            <Col className="mt-3" xs={12} md={{ span: 6, offset: 3 }} >
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
          <Row className='mt-3' >
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
            <Row className="h-100 mt-3">
            {hasLoaded ? (
          <>
            {scenes.results.length ? (
                scenes.results.map((scene, index) => {
                  return (
                    <Col xs={4} md={3} lg={2} className="px-2 py-2 p-0 p-lg-2">
                      <SceneTop 
                        key={scene.id} 
                        {...scene} 
                        setScenes={setScenes}
                        // style={{ backgroundImage: (index % 2 == 0) ? (`url(${b1})`) : (`url(${b3})`), 
                        style={{ backgroundImage: (index % 3 == 0) ? (`url(${d3})`) : (index % 2 == 0) ? (`url(${d3})`) : (`url(${d3})`) , 
                          objectFit: "contain", width: 'auto', repeat: 'no-repeat' }}
                        // style={{ backgroundColor: (index % 3 == 0) ? '#ecf0f1' : (index % 2 == 0) ? '#fff' : '#fafafa }}
                        // background={'#fff'}
                        />
                      </Col>
                    // (index % 2 == 0) ?
                    //   (<Col xs={4} md={3} lg={2} className="py-2 p-0 p-lg-2">
                    //   <SceneTop 
                    //     key={scene.id} 
                    //     {...scene} 
                    //     setScenes={setScenes}
                    //     background={'#fff'}
                    //     />
                    //   </Col>) : (<Col xs={4} md={3} lg={2} className="py-2 p-0 p-lg-2">
                    //   <SceneTop 
                    //     key={scene.id} 
                    //     {...scene} 
                    //     setScenes={setScenes}
                    //     background={'#000'}
                    //     />
                    //   </Col>)

                )}
                ))
                
                  // <Col xs={4} md={3} lg={2} className="py-2 p-0 p-lg-2">
                  // <SceneTop 
                  //   key={scene.id} 
                  //   {...scene} 
                  //   setScenes={setScenes}
                  //   background={back}
                  //   style={{ backgroundColor: (index % 2 == 0) ? '#ecf0f1' : '#fff' }}
                  //    />
                  // </Col>

            //   <InfiniteScroll
            //   children={scenes.results.map((scene) => (
            //     <Col xs={4} md={3} lg={2} className="py-2 p-0 p-lg-2">
            //     <SceneTop key={scene.id} {...scene} setScenes={setScenes} />
            //     {/* <p>{scene.id} {scene.number}</p> */}
            //     </Col>
            //   ))}
            //   dataLength={scenes.results.length}
            //   loader={<Asset spinner />}
            //   hasMore={!!scenes.next}
            //   next={() => fetchMoreData(scenes, setScenes)}
            // />
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
