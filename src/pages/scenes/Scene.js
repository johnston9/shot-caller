import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { axiosReq, axiosRes } from '../../api/axiosDefaults';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import { useCategoryContext, useSetCategoryContext, useSetDeptContext, useSetNumberContext, useSetSceneContext } from '../../contexts/DeptCategoryContext';
import { useRedirect } from '../../hooks/Redirect';
import styles from "../../styles/Scene.module.css";
import btnStyles from "../../styles/Button.module.css";
import Camera from "../../assets/dep17s.png";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { DeptDropdown, PostDropdown } from '../../components/PostDropdown';
import Storyboard from './Storyboard';
import SceneCostumes from './SceneCostumes';
import ShotlistPage from './ShotlistPage';
import SceneCosOther from './SceneCosOther';
import SceneCosBack from './SceneCosBack';
import WorkspaceInst from './WorkspaceInst';
import WorkspaceGuideForm from './WorkspaceGuideForm';
import WorkspaceGuideEdit from './WorkspaceGuideEdit';
import Breakdown from './Breakdown';

const Scene = (props) => {
    useRedirect("loggedOut");
    const [showCos, setShowCos] = useState(false);
    const [showCosOther, setShowCosOther] = useState(false);
    const [showCosBack, setShowCosBack] = useState(false);
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
    const category = useCategoryContext();
    const { id, number, title, act, int_ext, day_night, time, location,
      filming_location, character1, character1_costume, character2, 
      character2_costume, character3, character3_costume, character4, 
      character4_costume, character5, character5_costume, character6, 
      character6_costume, character7, character7_costume, character8,
      character8_costume, character9, character9_costume, character10, 
      character10_costume, character11, character11_costume, character12,
      character12_costume, other_characters, other_characters_costumes,
      background_artists, background_artists_costumes, shooting_date,
      pages, action, content, storyboard, info, image, scene, 
      workspace_guide, setScene } = props;
    const currentUser = useCurrentUser();
    const history = useHistory();

    const handleEdit = () => {
      history.push(`/scenes/${id}/edit`);
    };
  
    const handleDelete = async () => {
      try {
        await axiosReq.delete(`/scenes/${id}/`);
        history.goBack();
      } catch (err) {
        // console.log(err);
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

    return (
        <div>
            <div className={` ${styles.Header}`}>
                <div className={`pb-0 pt-2 ${styles.Header }`}>
                  <Row className='d-flex align-items-center'>
                    <Col className='mx-0 px-0' xs={1}></Col>
                    <Col xs={10} className='mx-0 px-0'>
                    <h3 className={`text-center ${styles.SceneTitle }`}>Scene {number} - <span className={styles.Italics }> {title} </span>
                    </h3>
                    </Col >
                    <Col xs={1} className='text-center mx-0 px-0'>
                    <PostDropdown
                            handleEdit={handleEdit}
                            handleDelete={handleDelete}
                        />
                    </Col>
                    </Row>
                  </div>
                  <Row className='mb-0 mt-2'>
                    <Col xs={6} md={3} className='text-center'>
                            <Button
                              className={`py-0 ${btnStyles.Button} ${btnStyles.Blue}`}
                              onClick={() => setShowBreak(showBreak => !showBreak)} > Breakdown
                            </Button>
                        </Col>
                    <Col className='text-center' xs={6} md={3}>
                      <Button
                          className={`py-0 ${btnStyles.Button} ${btnStyles.Blue}`}
                          onClick={() => setShowstory(showstory => !showstory)} > Storyboard
                      </Button>
                    </Col>
                    <Col className='text-center' xs={6} md={3}>
                    <Button
                        className={`py-0 mt-2 mt-md-0 ${btnStyles.Button} ${btnStyles.Blue}`}
                        onClick={() => setShowlist(showlist => !showlist)} >Shotlist
                    </Button>
                    </Col>
                    <Col className='text-center' xs={6} md={3}>
                      <Button
                          className={`py-0 mt-2 mt-md-0 ${btnStyles.Button} ${btnStyles.Blue}`}
                          onClick={() => setShowStoryShot(showStoryShot => !showStoryShot)} > Story/Shot
                      </Button>
                    </Col>
                  </Row>  
                  <Card.Body className='pt-0'>
                      {!showBreak ? (
                      ""
                    ) : (
                      <Breakdown scene={scene} {...scene} setScene={setScene} />                    ) }             
                    {!showstory ? (
                      ""
                    ) : (
                      <Storyboard storyboard={storyboard} />
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
                        <Storyboard storyboard={storyboard} />
                        </Col>
                        <Col xs={6}>
                        <ShotlistPage setShowlist={setShowlist} scene={scene} />
                        </Col>
                      </Row>             
                    ) }
                    {/* workspace */}
                  <h5 style={{ textTransform: 'uppercase'}} className={`mt-3 mb-4 pl-3 py-1 ${styles.SubTitle }`}>Scene Workspaces</h5>
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
                    <div className={`px-3 pb-0 ${styles.Guide}`}>
                      <p style={{ textTransform: 'uppercase'}} className={`mx-0 px-0 pb-0  text-center ${styles.GuideTitle}`} >Workspace Guide</p>
                      <p>{workspace_guide} </p>
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
                            onClick={() => setShowGuideEdit(showGuideEdit => !showGuideEdit)} > Edit Guide
                          </p>
                          ) : (
                            <p
                            className={`py-0 mb-1 ${styles.Button}`}
                            onClick={() => setShowGuide(showGuide => !showGuide)} > Add Guide
                          </p>
                          )}
                        </Col>
                      </Row>
                    </div>
                    </Col>
                  </Row>
                  <Row className={`mt-5`} >
                  <Col xs={4}  ></Col>
                      <Col xs={4} md={4} lg={4} >
                        <Card className={` ${styles.CardBox}`} onClick={() => handleClickUniversal()}>
                        <Card.Img className={`text-center ${styles.UniImg}`} src={Camera} alt="Card image" />
                        <Card.Title className={`text-center ${styles.Title}`} >Universal</Card.Title>
                        </Card>
                      </Col>
                  </Row>
                  <hr/>
                  <Row>
                    <Col md={12}>
                    {/* <h5 style={{ textTransform: 'uppercase'}} className={`mt-5 mb-3  py-1`}>Department Workspaces</h5> */}
                    </Col>
                  </Row>
                    <Row >
                      <Col xs={4} md={3} lg={2} >
                        <Card className={` ${styles.CardBox}`} >
                        <Card.Img src={Camera} alt="Card image" />
                        <Card.Title className={`text-center ${styles.Title}`} >Camera</Card.Title>
                        <DeptDropdown handleClick={(category) => handleClickCamera(category) } />
                        </Card>
                      </Col>
                      <Col xs={4} md={3} lg={2} >
                        <Card className={` ${styles.CardBox}`}>
                        <Card.Img src={Camera} alt="Card image" />
                        <Card.Title className={`text-center ${styles.Title}`} >Sound</Card.Title>
                        <DeptDropdown handleClick={(category) => handleClickSound(category) } />
                        </Card>
                      </Col>
                      <Col xs={4} md={3} lg={2} >
                        <Card className={` ${styles.CardBox}`}>
                        <Card.Img src={Camera} alt="Card image" />
                        <Card.Title className={`text-center ${styles.Title}`} >Location</Card.Title>
                        <DeptDropdown handleClick={(category) => handleClickLocation(category) } />
                        </Card>
                      </Col>
                      <Col xs={4} md={3} lg={2} >
                        <Card className={` ${styles.CardBox}`}>
                        <Card.Img src={Camera} alt="Card image" />
                        <Card.Title className={`text-center ${styles.Title}`} >Script</Card.Title>
                        <DeptDropdown handleClick={(category) => handleClickScript(category) } />
                        </Card>
                      </Col>
                      <Col xs={4} md={3} lg={2} >
                        <Card className={` ${styles.CardBox}`}>
                        <Card.Img src={Camera} alt="Card image" />
                        <Card.Title className={`text-center ${styles.Title}`} >Art</Card.Title>
                        <DeptDropdown handleClick={(category) => handleClickArt(category) } />
                        </Card>
                      </Col>
                      <Col xs={4} md={3} lg={2} >
                        <Card className={` ${styles.CardBox}`}>
                        <Card.Img src={Camera} alt="Card image" />
                        <Card.Title className={`text-center ${styles.Title}`} >Makeup</Card.Title>
                        <DeptDropdown handleClick={(category) => handleClickMakeup(category) } />
                        </Card>
                      </Col>
                      <Col xs={4} md={3} lg={2} >
                        <Card className={` ${styles.CardBox}`}>
                        <Card.Img src={Camera} alt="Card image" />
                        <Card.Title className={`text-center ${styles.Title}`} >Wardrobe</Card.Title>
                        <DeptDropdown handleClick={(category) => handleClickWardrobe(category) } />
                        </Card>
                      </Col>
                      <Col xs={4} md={3} lg={2} >
                        <Card className={` ${styles.CardBox}`}>
                        <Card.Img src={Camera} alt="Card image" />
                        <Card.Title className={`text-center ${styles.Title}`} >Casting</Card.Title>
                        <DeptDropdown handleClick={(category) => handleClickCasting(category) } />
                        </Card>
                      </Col>
                      <Col xs={4} md={3} lg={2} >
                        <Card className={` ${styles.CardBox}`}>
                        <Card.Img src={Camera} alt="Card image" />
                        <Card.Title className={`text-center ${styles.Title}`} >Post</Card.Title>
                        <DeptDropdown handleClick={(category) => handleClickPost(category) } />
                        </Card>
                      </Col>
                      <Col xs={4} md={3} lg={2} >
                        <Card className={` ${styles.CardBox}`}>
                        <Card.Img src={Camera} alt="Card image" />
                        <Card.Title className={`text-center ${styles.Title}`} >Production</Card.Title>
                        <DeptDropdown handleClick={(category) => handleClickProduction(category) } />
                        </Card>
                      </Col>
                      <Col xs={4} md={3} lg={2} >
                        <Card className={` ${styles.CardBox}`}>
                        <Card.Img src={Camera} alt="Card image" />
                        <Card.Title className={`text-center ${styles.Title}`} >Stunts</Card.Title>
                        <DeptDropdown handleClick={(category) => handleClickStunts(category) } />
                        </Card>
                      </Col>
                      <Col xs={4} md={3} lg={2} >
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
