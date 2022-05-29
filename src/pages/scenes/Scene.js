import React, { useState } from 'react'
import {  Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { axiosReq } from '../../api/axiosDefaults';
import { useSetCategoryContext, useSetDeptContext, useSetNumberContext, useSetSceneContext } from '../../contexts/DeptCategoryContext';
import { useRedirect } from '../../hooks/Redirect';
import styles from "../../styles/Scene.module.css";
import Camera from "../../assets/dep17s.png";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import btnStyles from "../../styles/Button.module.css";
import { Button } from 'react-bootstrap';
import { DeptDropdown, PostDropdown } from '../../components/PostDropdown';
import ShotlistPage from './ShotlistPage';
import WorkspaceInst from './WorkspaceInst';
import WorkspaceGuideForm from './WorkspaceGuideForm';
import WorkspaceGuideEdit from './WorkspaceGuideEdit';
import Breakdown from './Breakdown';
import Storyboard from './Storyboard';
import TopBox from '../../components/TopBox';
import InfoScenePage from './InfoScenePage';
import InfoWorkspace from './InfoWorkspace';

const Scene = (props) => {
    useRedirect("loggedOut");
    const [showlist, setShowlist] = useState(false);
    const [showBreak, setShowBreak] = useState(false);
    const [showstory, setShowstory] = useState(false);
    const [showStoryShot, setShowStoryShot] = useState(false);
    const [showInts, setShowInts] = useState(false);
    const [showGuide, setShowGuide] = useState(false);
    const [showGuideEdit, setShowGuideEdit] = useState(false);
    const setSceneId = useSetSceneContext();
    const setNumber = useSetNumberContext();
    const setDept = useSetDeptContext();
    const setCategory = useSetCategoryContext();
    const { id, number, storyboard, scene,
      workspace_guide, setScene } = props;
    console.log(scene)
    const history = useHistory();
    const [showInfo, setShowInfo] = useState(false);
    const [showWorkInfo, setShowWorkInfo] = useState(false);

    const handleEdit = () => {
      history.push(`/scenes/${id}/edit`);
    };
  
    const handleDelete = async () => {
      try {
        await axiosReq.delete(`/scenes/${id}/`);
        history.goBack();
      } catch (err) {
      }
    };

    const handleClickCamera = (category) => {
      setSceneId(id); 
      setNumber(number);
      setDept("camera");
      setCategory(category);
      history.push(`/dept/category`);

    };

    const handleClickSound = (category) => {
      setSceneId(id); 
      setNumber(number);
      setDept("sound");
      setCategory(category);
      history.push(`/dept/category`);

    };

    const handleClickLocation = (category) => {
      setSceneId(id); 
      setNumber(number);
      setDept("location");
      setCategory(category);
      history.push(`/dept/category`);

    };

    const handleClickScript = (category) => {
      setSceneId(id); 
      setNumber(number);
      setDept("script");
      setCategory(category);
      history.push(`/dept/category`);

    };

    const handleClickArt = (category) => {
      setSceneId(id); 
      setNumber(number);
      setDept("art");
      setCategory(category);
      history.push(`/dept/category`);

    };

    const handleClickMakeup = (category) => {
      setSceneId(id); 
      setNumber(number);
      setDept("make-up");
      setCategory(category);
      history.push(`/dept/category`);

    };

    const handleClickWardrobe = (category) => {
      setSceneId(id); 
      setNumber(number);
      setDept("wardrobe");
      setCategory(category);
      history.push(`/dept/category`);

    };

    const handleClickCasting = (category) => {
      setSceneId(id); 
      setNumber(number);
      setDept("casting");
      setCategory(category);
      history.push(`/dept/category`);

    };

    const handleClickPost = (category) => {
      setSceneId(id); 
      setNumber(number);
      setDept("post");
      setCategory(category);
      history.push(`/dept/category`);

    };

    const handleClickProduction = (category) => {
      setSceneId(id); 
      setNumber(number);
      setDept("production");
      setCategory(category);
      history.push(`/dept/category`);

    };

    const handleClickStunts = (category) => {
      setSceneId(id); 
      setNumber(number);
      setDept("stunts");
      setCategory(category);
      history.push(`/dept/category`);

    };

    const handleClickElectric = (category) => {
      setSceneId(id); 
      setNumber(number);
      setDept("electric");
      setCategory(category);
      history.push(`/dept/category`);
    };

    const handleClickUniversal = () => {
      setSceneId(id); 
      setNumber(number);
      setDept("universal");
      setCategory("");
      history.push(`/dept/category`);
    };

    const handleClickMoods = () => {
      setSceneId(id); 
      setNumber(number);
      history.push(`/scene/moodshots`);

    };

    // const handleClickAddMoods = () => {
    //   setSceneId(id); 
    //   setNumber(number);
    //   history.push(`/scene/moodshot/create`);

    // };

    return (
        <div>
          <TopBox title={`Scene ${number} `} />
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
                    <InfoScenePage  /> 
                    ) } 
            <div className={` ${styles.Header}`}>
              <div className='d-none d-md-block'>
                  <Row className={`${styles.ButtonLine} mt-2 mx-3`}>
                  <Col md={1}></Col>
                    <Col md={2} className='text-center'>
                        <p
                          className={`py-0 mb-0 ${styles.Button}`}
                          onClick={() => handleClickMoods()} > Moodshots
                        </p>
                    </Col>
                    <Col md={2} className='text-center'>
                            <p
                              className={`py-0 mb-0 ${styles.Button}`}
                              onClick={() => setShowBreak(showBreak => !showBreak)} > Breakdown
                            </p>
                        </Col>
                    <Col className='text-center' md={2}>
                      <p
                          className={`py-0 mb-0 ${styles.Button}`}
                          onClick={() => setShowstory(showstory => !showstory)} > Storyboard
                      </p>
                    </Col>
                    <Col className='text-center' md={2}>
                    <p
                        className={`py-0 mb-0 ${styles.Button}`}
                        onClick={() => setShowlist(showlist => !showlist)} >Shotlist
                    </p>
                    </Col>
                    <Col className='text-center' md={2}>
                      <p
                          className={`py-0 mb-0 ${styles.Button}`}
                          onClick={() => setShowStoryShot(showStoryShot => !showStoryShot)} > Story/Shot
                      </p>
                    </Col>
                    <Col className='text-center' md={1}>
                    <PostDropdown
                            handleEdit={handleEdit}
                            handleDelete={handleDelete}
                        />
                    </Col>
                  </Row>  
              </div>
              <div className='d-md-none'>
                  <Row className={`${styles.ButtonLine} mt-2`}>
                    <Col xs={2}></Col>
                    <Col xs={4} className='text-center'>
                        <p
                          className={`py-0 mb-0 ${styles.Button}`}
                          onClick={() => handleClickMoods()} > Moodshots
                        </p>
                    </Col>
                    <Col xs={4} className='text-center'>
                            <p
                              className={`py-0 mb-0 ${styles.Button}`}
                              onClick={() => setShowBreak(showBreak => !showBreak)} > Breakdown
                            </p>
                        </Col>
                    <Col className='text-center px-0 mx-0' xs={2}>
                    <PostDropdown
                            handleEdit={handleEdit}
                            handleDelete={handleDelete}
                        />
                    </Col>
                    </Row>
                    <Row>
                    <Col className='text-center' xs={4}>
                      <p
                          className={`py-0 mb-0 ${styles.Button}`}
                          onClick={() => setShowstory(showstory => !showstory)} > Storyboard
                      </p>
                    </Col>
                    <Col className='text-center' xs={4} >
                    <p
                        className={`py-0 mb-0 ${styles.Button}`}
                        onClick={() => setShowlist(showlist => !showlist)} >Shotlist
                    </p>
                    </Col>
                    <Col className='text-center' xs={4}>
                      <p
                          className={`py-0 mb-0 ${styles.Button}`}
                          onClick={() => setShowStoryShot(showStoryShot => !showStoryShot)} > Story/Shot
                      </p>
                    </Col>
                  </Row>  
              </div>
                  <Card.Body className='pt-0'>                   
                      {!showBreak ? (
                      ""
                    ) : (
                      <Breakdown scene={scene} {...scene} setShowBreak={setShowBreak} setScene={setScene} /> 
                      ) }             
                    {!showstory ? (
                      ""
                    ) : (
                      <Storyboard storyboard={storyboard} setShowstory={setShowstory} scene={scene} setScene={setScene} />
                    ) }
                    {!showlist ? (
                      ""
                    ) : (
                      <ShotlistPage setShowlist={setShowlist} scene={scene} />
                    ) }
                    {!showStoryShot ? (
                      ""
                    ) : (                      
                      <Row>
                        <Col xs={6}>
                        <Storyboard setShowstory={setShowStoryShot} storyboard={storyboard} />
                        </Col>
                        <Col xs={6}>
                        <ShotlistPage setShowlist={setShowStoryShot} scene={scene} />
                        </Col>
                      </Row>             
                    ) }
                    {/* workspace */}
                  {/* <p className={`mt-1 pl-3 mb-0 py-1 ${styles.SubTitle }`}></p> */}
                  <h5 style={{ textTransform: 'uppercase'}} 
                  className={`mt-1 mb-1 pl-3 py-1 ${styles.SubTitle } text-center`}>
                SCENE WORKSPACE
                {/* <span style={{ textTransform: 'none'}} setShowWorkInfo
                className={`float-right ${styles.Close }`} 
                onClick={() => setShowBreak(false) } >Close</span> */}
            </h5>
            <Button
          className={`float-right py-0 mt-1 ${btnStyles.Order} ${btnStyles.Button}`}
          onClick={() => setShowWorkInfo(showWorkInfo => !showWorkInfo)} >INFO
        </Button>
          {!showWorkInfo ? (
              ""
                  ) : (
                    <InfoWorkspace  /> 
                    ) } 
                  <Row className='mb-2'>
                    <Col md={1}></Col>
                    <Col className='mx-0 px-0' xs={12} md={10} >
                    {!showInts ? (
                      ""
                    ) : (
                      <WorkspaceInst className="my-2" setShowInts={setShowInts} />
                    ) }
                    {!showGuide ? (
                      ""
                    ) : (
                      <WorkspaceGuideForm className="my-2" id={id} number={number} setShowGuide={setShowGuide} setScene={setScene} />
                    ) }
                    {!showGuideEdit ? (
                      ""
                    ) : (
                      <WorkspaceGuideEdit className="my-2" id={id} number={number} setShowGuideEdit={setShowGuideEdit} setScene={setScene} />
                    ) }
                    <div className={`mt-3 px-3 pb-0 ${styles.Guide}`}>
                    <h4 style={{ textTransform: 'uppercase'}} className={`pb-0 mb-1 text-center ${styles.GuideTitle}`}  >Workspace Guide</h4>
                      <div className={`text-center mt-2 px-3 pb-0 ${styles.GuideBox}`}>{workspace_guide} </div>
                      <Row>
                        <Col xs={4} className='mx-0 px-0 text-center'>
                          <p
                          className={`py-0 mb-1 ${styles.Button}`}
                          onClick={() => setShowInts(showInts => !showInts)} > Instructions
                        </p>
                        </Col>
                        <Col xs={4} className='mx-0 px-0 text-center'>
                        </Col>
                        <Col xs={4} className='mx-0 px-0 text-center'>
                          {workspace_guide ? (
                            <p
                            className={` py-0 mb-1 ${styles.Button} `}
                            onClick={() => setShowGuideEdit(showGuideEdit => !showGuideEdit)} > Edit
                          </p>
                          ) : (
                            <p
                            className={`py-0 mb-1 ${styles.Button}`}
                            onClick={() => setShowGuide(showGuide => !showGuide)} > Add 
                          </p>
                          )}
                        </Col>                      
                      </Row>
                      </div>
                    </Col>
                  </Row>

                  <Row className={`mt-1`} >
                  <Col xs={4}  ></Col>
                      <Col className='px-1 px-md-2' xs={4} md={4} lg={4} >
                        <Card className={` ${styles.CardBox}`} onClick={() => handleClickUniversal()}>
                        <Card.Img className={`text-center ${styles.UniImg}`} src={Camera} alt="Card image" />
                        <Card.Title className={`text-center ${styles.Title}`} >Universal</Card.Title>
                        </Card>
                      </Col>
                  </Row>
                  <Row>
                    <Col md={12}>
                    </Col>
                  </Row>
                    <Row >
                      <Col className='px-1 px-md-2' xs={4} md={3} lg={2} >
                        <Card className={` ${styles.CardBox}`} >
                        <Card.Img src={Camera} alt="Card image" />
                        <Card.Title className={`text-center ${styles.Title}`} >Camera</Card.Title>
                        <DeptDropdown handleClick={(category) => handleClickCamera(category) } />
                        </Card>
                      </Col>
                      <Col className='px-1 px-md-2' xs={4} md={3} lg={2} >
                        <Card className={` ${styles.CardBox}`}>
                        <Card.Img src={Camera} alt="Card image" />
                        <Card.Title className={`text-center ${styles.Title}`} >Sound</Card.Title>
                        <DeptDropdown handleClick={(category) => handleClickSound(category) } />
                        </Card>
                      </Col>
                      <Col className='px-1 px-md-2' xs={4} md={3} lg={2} >
                        <Card className={` ${styles.CardBox}`}>
                        <Card.Img src={Camera} alt="Card image" />
                        <Card.Title className={`text-center ${styles.Title}`} >Location</Card.Title>
                        <DeptDropdown handleClick={(category) => handleClickLocation(category) } />
                        </Card>
                      </Col>
                      <Col className='px-1 px-md-2' xs={4} md={3} lg={2} >
                        <Card className={` ${styles.CardBox}`}>
                        <Card.Img src={Camera} alt="Card image" />
                        <Card.Title className={`text-center ${styles.Title}`} >Script</Card.Title>
                        <DeptDropdown handleClick={(category) => handleClickScript(category) } />
                        </Card>
                      </Col>
                      <Col className='px-1 px-md-2' xs={4} md={3} lg={2} >
                        <Card className={` ${styles.CardBox}`}>
                        <Card.Img src={Camera} alt="Card image" />
                        <Card.Title className={`text-center ${styles.Title}`} >Art</Card.Title>
                        <DeptDropdown handleClick={(category) => handleClickArt(category) } />
                        </Card>
                      </Col>
                      <Col className='px-1 px-md-2' xs={4} md={3} lg={2} >
                        <Card className={` ${styles.CardBox}`}>
                        <Card.Img src={Camera} alt="Card image" />
                        <Card.Title className={`text-center ${styles.Title}`} >Makeup</Card.Title>
                        <DeptDropdown handleClick={(category) => handleClickMakeup(category) } />
                        </Card>
                      </Col>
                      <Col className='px-1 px-md-2' xs={4} md={3} lg={2} >
                        <Card className={` ${styles.CardBox}`}>
                        <Card.Img src={Camera} alt="Card image" />
                        <Card.Title className={`text-center ${styles.Title}`} >Wardrobe</Card.Title>
                        <DeptDropdown handleClick={(category) => handleClickWardrobe(category) } />
                        </Card>
                      </Col>
                      <Col className='px-1 px-md-2' xs={4} md={3} lg={2} >
                        <Card className={` ${styles.CardBox}`}>
                        <Card.Img src={Camera} alt="Card image" />
                        <Card.Title className={`text-center ${styles.Title}`} >Casting</Card.Title>
                        <DeptDropdown handleClick={(category) => handleClickCasting(category) } />
                        </Card>
                      </Col>
                      <Col className='px-1 px-md-2' xs={4} md={3} lg={2} >
                        <Card className={` ${styles.CardBox}`}>
                        <Card.Img src={Camera} alt="Card image" />
                        <Card.Title className={`text-center ${styles.Title}`} >Post</Card.Title>
                        <DeptDropdown handleClick={(category) => handleClickPost(category) } />
                        </Card>
                      </Col>
                      <Col className='px-1 px-md-2' xs={4} md={3} lg={2} >
                        <Card className={` ${styles.CardBox}`}>
                        <Card.Img src={Camera} alt="Card image" />
                        <Card.Title className={`text-center ${styles.Title}`} >Production</Card.Title>
                        <DeptDropdown handleClick={(category) => handleClickProduction(category) } />
                        </Card>
                      </Col>
                      <Col className='px-1 px-md-2' xs={4} md={3} lg={2} >
                        <Card className={` ${styles.CardBox}`}>
                        <Card.Img src={Camera} alt="Card image" />
                        <Card.Title className={`text-center ${styles.Title}`} >Stunts</Card.Title>
                        <DeptDropdown handleClick={(category) => handleClickStunts(category) } />
                        </Card>
                      </Col>
                      <Col className='px-1 px-md-2' xs={4} md={3} lg={2} >
                        <Card className={` ${styles.CardBox}`}>
                        <Card.Img src={Camera} alt="Card image" />
                        <Card.Title className={`text-center ${styles.Title}`} >Electric</Card.Title>
                        <DeptDropdown handleClick={(category) => handleClickElectric(category) } />
                        </Card>
                      </Col>
                    </Row>
                      <Link to={`/scenes/${id}`}>

                      </Link>
                  </Card.Body>
            </div>
        </div>
    )
}

export default Scene
