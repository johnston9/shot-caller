import React, { useState } from 'react'
import { Button, Card, Container } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { axiosReq, axiosRes } from '../../api/axiosDefaults';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import { useCategoryContext, useSetCategoryContext, useSetDeptContext, useSetNumberContext, useSetSceneContext } from '../../contexts/DeptCategoryContext';
import { useRedirect } from '../../hooks/Redirect';
import styles from "../../styles/Scene.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import Camera from "../../assets/dep17s.png";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { DeptDropdown, PostDropdown } from '../../components/PostDropdown';
import TopBox from '../../components/TopBox';

const Departments = (props) => {
    useRedirect("loggedOut")
    const setDept = useSetDeptContext();
    const setCategory = useSetCategoryContext();
    const category = useCategoryContext();
    const setSceneId = useSetSceneContext();
    const setNumber = useSetNumberContext();
    const { id, number, title, act,  int_ext, day_night, 
        time, location, characters, action, content, shotlist, 
        storyboard, info, image } = props;
    const currentUser = useCurrentUser();
    const history = useHistory();
    const depart = true;

    const handleClickCamera = (category) => {
      setDept("camera");
      setCategory(category);
      history.push(`/departments`);

    };

    const handleClickSound = (category) => {
      setDept("sound");
      setCategory(category);
      history.push(`/departments`);

    };

    const handleClickLocation = (category) => {
      setDept("location");
      setCategory(category);
      history.push(`/departments`);

    };

    const handleClickScript = (category) => {
      setDept("script");
      setCategory(category);
      history.push(`/departments`);

    };

    const handleClickArt = (category) => {
      setDept("art");
      setCategory(category);
      history.push(`/departments`);

    };

    const handleClickMakeup = (category) => {
      setDept("make-up");
      setCategory(category);
      history.push(`/departments`);

    };

    const handleClickWardrobe = (category) => {
      setDept("wardrobe");
      setCategory(category);
      history.push(`/departments`);

    };

    const handleClickCasting = (category) => {
      setDept("casting");
      setCategory(category);
      history.push(`/departments`);

    };

    const handleClickPost = (category) => {
      setDept("post");
      setCategory(category);
      history.push(`/departments`);

    };

    const handleClickProduction = (category) => {
      setDept("production");
      setCategory(category);
      history.push(`/departments`);

    };

    const handleClickStunts = (category) => {
      setDept("stunts");
      setCategory(category);
      history.push(`/departments`);

    };

    const handleClickElectric = (category) => {
      setDept("electric");
      setCategory(category);
      history.push(`/departments`);

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
            <TopBox title="Find Posts"/>
            <Button
              className={`${btnStyles.Button} ${btnStyles.Blue} my-2`}
              onClick={() => history.goBack()}
              >
              Back
              </Button>
              <h3 className='text-center mt-3'>Posts</h3>
              <Container className={`my-3 ${appStyles.Content}`}>
              <Row className='mb-4 mt-3'>
                  <Col className='text-center' xs={4} >
                  <Button onClick={() => history.push("/archived")} 
                    className={`${btnStyles.Button} py-0 ${btnStyles.Bright}`} >Archived Posts</Button>
                  </Col>
                  <Col className='text-center' xs={4} >
                  <Button onClick={() => history.push("/posts")}
                    className={`${btnStyles.Button} py-0 ${btnStyles.Bright}`} >All Posts</Button>
                  </Col>
                  <Col className='text-center' xs={4} >
                  <Button onClick={() => history.push("/liked")} 
                    className={`${btnStyles.Button} py-0 ${btnStyles.Bright}`}>Liked Posts</Button>
                  </Col>
              </Row>
              <Row className='mt-1'>
                  <Col className='text-center' >
                  <Button onClick={() => history.push("/feed")} 
                    className={`${btnStyles.Button} ${btnStyles.Wide2} ${btnStyles.Bright}`}
                    >
                      Feed
                      </Button>
                  </Col>
              </Row>
              </Container>
              <h3 className={`text-center mt-3`}>Departments Posts</h3>
              <p>Requirements and Finals post are ordered by scene number</p>
            <Card className={` ${styles.Scene}`}>
                  <Card.Body>
                  <Row className={`mt-1`} >
                  <Col xs={4}  ></Col>
                      <Col className='px-1 px-md-2' xs={4} md={4} lg={4} >
                        <Card className={` ${styles.CardBox}`} onClick={() => handleClickUniversal()}>
                        <Card.Img className={`text-center ${styles.UniImg}`} src={Camera} alt="Card image" />
                        <Card.Title className={`text-center ${styles.Title}`} >Universal</Card.Title>
                        </Card>
                      </Col>
                  </Row>
                  <hr/>
                    <Row>
                      <Col className='px-1 px-md-2' xs={4} md={3} lg={2} >
                        <Card>
                        <Card.Img src={Camera} alt="Card image" />
                        <Card.Title className={`text-center ${styles.Title}`} >Camera</Card.Title>
                        <DeptDropdown depart handleClick={(category) => handleClickCamera(category) } />
                        </Card>
                      </Col>
                      <Col className='px-1 px-md-2' xs={4} md={3} lg={2} >
                        <Card>
                        <Card.Img src={Camera} alt="Card image" />
                        <Card.Title className={`text-center ${styles.Title}`} >Sound</Card.Title>
                        <DeptDropdown depart handleClick={(category) => handleClickSound(category) } />
                        </Card>
                      </Col>
                      <Col className='px-1 px-md-2' xs={4} md={3} lg={2} >
                        <Card>
                        <Card.Img src={Camera} alt="Card image" />
                        <Card.Title className={`text-center ${styles.Title}`} >Location</Card.Title>
                        <DeptDropdown depart handleClick={(category) => handleClickLocation(category) } />
                        </Card>
                      </Col>
                      <Col className='px-1 px-md-2' xs={4} md={3} lg={2} >
                        <Card>
                        <Card.Img src={Camera} alt="Card image" />
                        <Card.Title className={`text-center ${styles.Title}`} >Script</Card.Title>
                        <DeptDropdown depart handleClick={(category) => handleClickScript(category) } />
                        </Card>
                      </Col>
                      <Col className='px-1 px-md-2' xs={4} md={3} lg={2} >
                        <Card>
                        <Card.Img src={Camera} alt="Card image" />
                        <Card.Title className={`text-center ${styles.Title}`} >Art</Card.Title>
                        <DeptDropdown depart handleClick={(category) => handleClickArt(category) } />
                        </Card>
                      </Col>
                      <Col className='px-1 px-md-2' xs={4} md={3} lg={2} >
                        <Card>
                        <Card.Img src={Camera} alt="Card image" />
                        <Card.Title className={`text-center ${styles.Title}`} >Makeup</Card.Title>
                        <DeptDropdown depart handleClick={(category) => handleClickMakeup(category) } />
                        </Card>
                      </Col>
                      <Col className='px-1 px-md-2' xs={4} md={3} lg={2} >
                        <Card>
                        <Card.Img src={Camera} alt="Card image" />
                        <Card.Title className={`text-center ${styles.Title}`} >Wardrobe</Card.Title>
                        <DeptDropdown depart handleClick={(category) => handleClickWardrobe(category) } />
                        </Card>
                      </Col>
                      <Col className='px-1 px-md-2' xs={4} md={3} lg={2} >
                        <Card>
                        <Card.Img src={Camera} alt="Card image" />
                        <Card.Title className={`text-center ${styles.Title}`} >Casting</Card.Title>
                        <DeptDropdown depart handleClick={(category) => handleClickCasting(category) } />
                        </Card>
                      </Col>
                      <Col className='px-1 px-md-2' xs={4} md={3} lg={2} >
                        <Card>
                        <Card.Img src={Camera} alt="Card image" />
                        <Card.Title className={`text-center ${styles.Title}`} >Post</Card.Title>
                        <DeptDropdown depart handleClick={(category) => handleClickPost(category) } />
                        </Card>
                      </Col>
                      <Col className='px-1 px-md-2' xs={4} md={3} lg={2} >
                        <Card>
                        <Card.Img src={Camera} alt="Card image" />
                        <Card.Title className={`text-center ${styles.Title}`} >Production</Card.Title>
                        <DeptDropdown depart handleClick={(category) => handleClickProduction(category) } />
                        </Card>
                      </Col>
                      <Col className='px-1 px-md-2' xs={4} md={3} lg={2} >
                        <Card>
                        <Card.Img src={Camera} alt="Card image" />
                        <Card.Title className={`text-center ${styles.Title}`} >Stunts</Card.Title>
                        <DeptDropdown depart handleClick={(category) => handleClickStunts(category) } />
                        </Card>
                      </Col>
                      <Col className='px-1 px-md-2' xs={4} md={3} lg={2} >
                        <Card>
                        <Card.Img src={Camera} alt="Card image" />
                        <Card.Title className={`text-center ${styles.Title}`} >Electric</Card.Title>
                        <DeptDropdown depart handleClick={(category) => handleClickElectric(category) } />
                        </Card>
                      </Col>
                    </Row>
                  </Card.Body>
            </Card>
        </div>
    )
}

export default Departments