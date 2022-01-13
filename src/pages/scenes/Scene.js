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

const Scene = (props) => {
    useRedirect("loggedOut");
    const [showCos, setShowCos] = useState(false);
    const [showCosOther, setShowCosOther] = useState(false);
    const [showCosBack, setShowCosBack] = useState(false);
    const [showlist, setShowlist] = useState(false);
    const [showstory, setShowstory] = useState(false);
    const [showStoryShot, setShowStoryShot] = useState(false);
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
      pages, action, content, storyboard, info, image, scene } = props;
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

    return (
        <div>
            <Card className={` ${styles.DayPage}`}>
                <Card.Header className={`pt-2 pb-1 ${styles.Header }`}>
                  <Row className='d-flex align-items-center'>
                    <Col className='mx-0 px-0' xs={1}></Col>
                    <Col xs={10} className='mx-0 px-0 text-center'>
                    <h3 className={` ${styles.Titlelist }`}>Scene {number} - <span className={styles.Italics }> {title} </span>
                    </h3>
                    {/* <p>Act {act} </p>
                    <p>scene Id {id} </p> */}
                    </Col >
                    <Col xs={1} className='text-center mx-0 px-0'>
                    <PostDropdown
                            handleEdit={handleEdit}
                            handleDelete={handleDelete}
                        />
                    </Col>
                    </Row>
                  </Card.Header>
                  <h5 className='ml-3 my-3'>Scene breakdown</h5>
                  <Row>
                  <Col xs={6} md={4} >
                      <div className={`p-1 m-3 ${styles.BreakBox }`}>
                      <h5 className={` text-center ${styles.BreakBoxTitle }`}>
                        Action/Content
                        </h5>
                        <p>{action} </p>
                        <p>Pages: {pages} </p>
                        <p>{content} </p>
                      </div>
                    </Col>
                    <Col xs={6} md={4}>
                      <div className={`p-1 m-3 ${styles.BreakBox }`}>
                      <h5 className={` text-center ${styles.BreakBoxTitle }`}>
                        Location/Shoot
                        </h5>
                        <p style={{textTransform: 'uppercase' }}>{int_ext}. {location} - {day_night} </p>
                        <p>{shooting_date} </p>
                        <p>{filming_location} </p>
                      </div>
                    </Col>
                    <Col xs={6} md={4} >
                      <div className={`p-1 m-3 ${styles.BreakBox }`}>
                      <h5 className={`mb-2 text-center ${styles.BreakBoxTitle }`}>
                      Equip/Set
                        </h5>
                        <p>{info} </p>
                      </div>
                    </Col>
                  </Row>
                  {/* characters */}
                  <Row>
                    <Col xs={6} md={4} >
                      <div className={`p-1 m-3 ${styles.BreakBox }`}>
                      <h5 className={`mb-2 text-center ${styles.BreakBoxTitle }`}>
                        Main Characters
                        </h5>
                        <p> {character1} {character2} {character3} {character4} {character5}
                        {character6} {character7} {character7} {character9} {character10}
                        {character11} {character12} </p>
                        <p
                          className={`${styles.CostumeLink }`}
                          onClick={() => setShowCos(showCos => !showCos)} >Costumes
                        </p>
                        {!showCos ? (
                          ""
                        ) : (
                          <SceneCostumes scene={scene} />
                        ) }
                      </div>
                    </Col>
                    <Col xs={6} md={4} >
                      <div className={`p-1 m-3 ${styles.BreakBox }`}>
                      <h5 className={` text-center ${styles.BreakBoxTitle }`}>
                        Other Characters
                        </h5>
                        <p>{other_characters}</p> 
                        <p
                          className={`${styles.CostumeLink }`}
                          onClick={() => setShowCosOther(showCosOther => !showCosOther)} >Costumes
                        </p>
                        <div>
                          {!showCosOther ? (
                            ""
                          ) : (
                            <SceneCosOther scene={scene} />
                          ) }
                        </div>
                      </div>
                    </Col>
                    <Col xs={6} md={4}>
                      <div className={`p-1 m-3 ${styles.BreakBox }`}>
                      <h5 className={` text-center ${styles.BreakBoxTitle }`}>
                        Background Actors
                        </h5>
                        <p>{background_artists}</p>
                        <p
                          className={`${styles.CostumeLink }`}
                          onClick={() => setShowCosBack(showCosBack => !showCosBack)} >Costumes
                        </p>
                        <div>
                        {!showCosBack ? (
                            ""
                          ) : (
                            <SceneCosBack scene={scene} />
                          ) }
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <hr/>
                  <h5 className='ml-3 my-3'>Shotlist and Storyboard</h5>
                  <Row className='mt-3'>
                    <Col className='text-center' xs={4}>
                    <Button
                        className={`py-0 ${btnStyles.Button} ${btnStyles.Blue}`}
                        onClick={() => setShowlist(showlist => !showlist)} >Shotlist
                    </Button>
                    </Col>
                    <Col className='text-center' xs={4}>
                    <Button
                          className={`py-0 ${btnStyles.Button} ${btnStyles.Blue}`}
                          onClick={() => setShowStoryShot(showStoryShot => !showStoryShot)} > Storyboard and Shotlist
                      </Button>
                    </Col>
                    <Col className='text-center' xs={4}>
                      <Button
                          className={`py-0 ${btnStyles.Button} ${btnStyles.Blue}`}
                          onClick={() => setShowstory(showstory => !showstory)} > Storyboard
                      </Button>
                    </Col>
                  </Row>                 
                  <hr />
                  <Card.Body>
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
                  <h5 className={` my-3`}>Scene Workspaces</h5>
                  <Button className={`py-0 ${btnStyles.Button} ${btnStyles.Blue}`}>Instructions</Button>
                  <div className={` my-3`}>Instructions Box</div>
                  <Button className={`py-0 ${btnStyles.Button} ${btnStyles.Blue}`}>Add Scene Notes</Button>
                  <div className={` my-3`}>Form</div>
                  <div className={` my-3`}>Message Box</div>
                  <h5 className={` my-3`}>Universal Scene Workspace</h5>
                  <Row>
                      <Col xs={4} lg={3} >
                        <Card>
                        <Card.Img src={Camera} alt="Card image" />
                        {/* <Card.Title className={`text-center ${styles.Title}`} >Camera</Card.Title>
                        <DeptDropdown handleClick={(category) => handleClickCamera(category) } /> */}
                        </Card>
                      </Col>
                  </Row>
                  <h5 className={` my-3`}>Department Scene Workspaces</h5>
                    <Row>
                      <Col xs={4} lg={3} >
                        <Card>
                        <Card.Img src={Camera} alt="Card image" />
                        <Card.Title className={`text-center ${styles.Title}`} >Camera</Card.Title>
                        <DeptDropdown handleClick={(category) => handleClickCamera(category) } />
                        </Card>
                      </Col>
                      <Col xs={4} lg={3} >
                        <Card>
                        <Card.Img src={Camera} alt="Card image" />
                        <Card.Title className={`text-center ${styles.Title}`} >Sound</Card.Title>
                        <DeptDropdown handleClick={(category) => handleClickSound(category) } />
                        </Card>
                      </Col>
                      <Col xs={4} lg={3} >
                        <Card>
                        <Card.Img src={Camera} alt="Card image" />
                        <Card.Title className={`text-center ${styles.Title}`} >Location</Card.Title>
                        <DeptDropdown handleClick={(category) => handleClickLocation(category) } />
                        </Card>
                      </Col>
                      <Col xs={4} lg={3} >
                        <Card>
                        <Card.Img src={Camera} alt="Card image" />
                        <Card.Title className={`text-center ${styles.Title}`} >Script</Card.Title>
                        <DeptDropdown handleClick={(category) => handleClickScript(category) } />
                        </Card>
                      </Col>
                      <Col xs={4} lg={3} >
                        <Card>
                        <Card.Img src={Camera} alt="Card image" />
                        <Card.Title className={`text-center ${styles.Title}`} >Art</Card.Title>
                        <DeptDropdown handleClick={(category) => handleClickArt(category) } />
                        </Card>
                      </Col>
                      <Col xs={4} lg={3} >
                        <Card>
                        <Card.Img src={Camera} alt="Card image" />
                        <Card.Title className={`text-center ${styles.Title}`} >Makeup</Card.Title>
                        <DeptDropdown handleClick={(category) => handleClickMakeup(category) } />
                        </Card>
                      </Col>
                      <Col xs={4} lg={3} >
                        <Card>
                        <Card.Img src={Camera} alt="Card image" />
                        <Card.Title className={`text-center ${styles.Title}`} >Wardrobe</Card.Title>
                        <DeptDropdown handleClick={(category) => handleClickWardrobe(category) } />
                        </Card>
                      </Col>
                      <Col xs={4} lg={3} >
                        <Card>
                        <Card.Img src={Camera} alt="Card image" />
                        <Card.Title className={`text-center ${styles.Title}`} >Casting</Card.Title>
                        <DeptDropdown handleClick={(category) => handleClickCasting(category) } />
                        </Card>
                      </Col>
                      <Col xs={4} lg={3} >
                        <Card>
                        <Card.Img src={Camera} alt="Card image" />
                        <Card.Title className={`text-center ${styles.Title}`} >Post</Card.Title>
                        <DeptDropdown handleClick={(category) => handleClickPost(category) } />
                        </Card>
                      </Col>
                      <Col xs={4} lg={3} >
                        <Card>
                        <Card.Img src={Camera} alt="Card image" />
                        <Card.Title className={`text-center ${styles.Title}`} >Production</Card.Title>
                        <DeptDropdown handleClick={(category) => handleClickProduction(category) } />
                        </Card>
                      </Col>
                      <Col xs={4} lg={3} >
                        <Card>
                        <Card.Img src={Camera} alt="Card image" />
                        <Card.Title className={`text-center ${styles.Title}`} >Stunts</Card.Title>
                        <DeptDropdown handleClick={(category) => handleClickStunts(category) } />
                        </Card>
                      </Col>
                      <Col xs={4} lg={3} >
                        <Card>
                        <Card.Img src={Camera} alt="Card image" />
                        <Card.Title className={`text-center ${styles.Title}`} >Electric</Card.Title>
                        <DeptDropdown handleClick={(category) => handleClickElectric(category) } />
                        </Card>
                      </Col>
                    </Row>
                      <Link to={`/scenes/${id}`}>

                      </Link>
                  </Card.Body>
            </Card>
        </div>
    )
}

export default Scene
