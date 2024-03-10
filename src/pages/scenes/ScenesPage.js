/* Page to fetch all Scenes data and render the cover info 
 * Contains the SceneTop component to which it passes the data
   for each Scene cover */
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
import jb5 from "../../assets/jb5.png"; 
import jb7 from "../../assets/jb7.png"; 
import scenegood from "../../assets/scenegood.png"; 
import scenegood2 from "../../assets/scenegood2.png"; 
import Information from './info/Information';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import Freeze from './Freeze';
import { useCrewInfoContext } from '../../contexts/BaseCallContext';

const ScenesPage = ({message, filter = "" }) => {
    useRedirect();
    const crewInfoOne = useCrewInfoContext();
    const freeze = crewInfoOne.freeze || "";
    // const freeze = true;
    const currentUser = useCurrentUser();
    const superAdmin = currentUser?.username === "superAdmin";
    // const superAdmin = true;
    const [scenes, setScenes] = useState({results: [] });
    const [hasLoaded, setHasLoaded] = useState(false);
    const [query, setQuery] = useState("");
    const setAct = useSetActContext();
    const history = useHistory();
    const [showInfo, setShowInfo] = useState(false);

    /* The following 4 functions set the Act the useSetActContext
       for which to fetch the Scenes
     * This will be read in App.js and passed as a filter
       to the /act/scenes Route */
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
        /* Function to fetch all Scenes */
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

      const clickScript = () => {
        /* Function to take the user to the Script Page */
        history.push(`/script`);
      };

    return (
        <div >
          <TopBox title="Scenes Workspace" />
          <Row className='mb-3'>
            <Col xs={4} >
            <Button
              className={`${btnStyles.Button} ${btnStyles.Blue} mt-2`}
              onClick={() => history.goBack()}
              >
              Back
          </Button>
            </Col>
            <Col xs={4} className="text-center mt-2" >
              <Button className={`${btnStyles.Button}  ${btnStyles.Bright}`}
                onClick={() => clickScript()}> Script
              </Button>
            </Col>
            <Col xs={4} >
            <Button
              className={`float-right py-0 mt-1 ${btnStyles.Order} ${btnStyles.Button}`}
              onClick={() => setShowInfo(showInfo => !showInfo)} >INFO
            </Button>
            </Col>
          </Row>
          {!showInfo ? (
              ""
                  ) : (
                    <Information  /> 
                    ) } 
          {/* Freeze component for the Super Admin only */}
          { freeze ? (
            ""
          ) : (
            <Row className='my-3'>
            <Col className="text-center" md={{span: 10, offset: 1 }} >
            <p>
            Scene Numbers may be changed up to a certain point in production.
            </p>
            <p>
            The production team will freeze the numbers at that point.
            </p>
            </Col>
          </Row>
          ) }
          { superAdmin && <Freeze /> }
          {/* Add Scene */}
          <Row className='mt-0'>
            <Col className="text-center">
            <Button onClick={() => history.push('/scenes/create')} 
              className={`${btnStyles.Button} ${btnStyles.Wide2} ${btnStyles.Bright} `}>
              Create Scene</Button>
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
                  className={`py-0 ${btnStyles.Button} ${btnStyles.Back}`}
                  onClick={handleClickAct1} >Act One
              </Button>
              </Col>
              <Col className='text-center' xs={6} md={3}>
                <Button
                    className={`py-0 ${btnStyles.Button} ${btnStyles.Back}`}
                    onClick={handleClickAct2a} >Act Two A
                </Button>
              </Col>
              <Col className='text-center' xs={6} md={3}>
              <Button
                  className={`py-0 mt-2 mt-md-0 ${btnStyles.Button} ${btnStyles.Back}`}
                  onClick={handleClickAct2b} >Act Two B
              </Button> 
              </Col>
              <Col className='text-center' xs={6} md={3}>
                <Button
                    className={`py-0 mt-2 mt-md-0  ${btnStyles.Button} ${btnStyles.Back}`}
                    onClick={handleClickAct3} >Act Three
                </Button>
              </Col>
            </Row>
            <p style={{ textTransform: 'uppercase'}} className={`mt-2 pl-3 mb-0 py-1 ${styles.SubTitle }`}></p>
            {/* render scenes */}
            <Row className="h-100 mt-3 px-2">
            {hasLoaded ? (
            <>
            {scenes.results.length ? (
                scenes.results.map((scene, index) => {
                  return (
                    <Col xs={6} sm={4} md={3} lg={2} className="p-1 ">
                      <SceneTop 
                        key={scene.id}
                        {...scene} 
                        setScenes={setScenes}
                        style={{ backgroundImage:  (`url(${r1})`), 
                          objectFit: "cover", width: '100%', repeat: 'no-repeat' }}
                        // style={{ backgroundImage: (index % 3 === 0) ? (`url(${r1})`) : (index % 2 === 0) ? (`url(${r1})`) : (`url(${r1})`) , 
                        //   objectFit: "cover", width: '100%', repeat: 'no-repeat' }}
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
