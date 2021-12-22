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

const Departments = (props) => {
    useRedirect("loggedOut")
    const setSceneId = useSetSceneContext();
    const setNumber = useSetNumberContext();
    const setDept = useSetDeptContext();
    const setCategory = useSetCategoryContext();
    const category = useCategoryContext();
    const { id, number, title, ACT,  int_ext, day_night, 
        time, location, characters, action, content, shotlist, 
        storyboard, info, image } = props;
    // const ext = int_ext.toUpperCase();
    const currentUser = useCurrentUser();
    const history = useHistory();

    const handleClickCamera = (category) => {
    //   setSceneId(id); 
    //   setNumber(number);
      setDept("camera");
      setCategory(category);
      history.push(`/departments`);

    };

    const handleClickSound = (category) => {
    //   setSceneId(id); 
    //   setNumber(number);
      setDept("sound");
      setCategory(category);
      history.push(`/departments`);

    };

    const handleClickLocation = (category) => {
    //   setSceneId(id); 
    //   setNumber(number);
      setDept("location");
      setCategory(category);
      history.push(`/departments`);

    };

    const handleClickScript = (category) => {
    //   setSceneId(id); 
    //   setNumber(number);
      setDept("script");
      setCategory(category);
      history.push(`/departments`);

    };

    const handleClickArt = (category) => {
    //   setSceneId(id); 
    //   setNumber(number);
      setDept("art");
      setCategory(category);
      history.push(`/departments`);

    };

    const handleClickMakeup = (category) => {
    //   setSceneId(id); 
    //   setNumber(number);
      setDept("make-up");
      setCategory(category);
      history.push(`/departments`);

    };

    const handleClickWardrobe = (category) => {
    //   setSceneId(id); 
    //   setNumber(number);
      setDept("wardrobe");
      setCategory(category);
      history.push(`/departments`);

    };

    const handleClickCasting = (category) => {
    //   setSceneId(id); 
    //   setNumber(number);
      setDept("casting");
      setCategory(category);
      history.push(`/departments`);

    };

    const handleClickPost = (category) => {
    //   setSceneId(id); 
    //   setNumber(number);
      setDept("post");
      setCategory(category);
      history.push(`/departments`);

    };

    const handleClickProduction = (category) => {
    //   setSceneId(id); 
    //   setNumber(number);
      setDept("production");
      setCategory(category);
      history.push(`/departments`);

    };

    const handleClickStunts = (category) => {
    //   setSceneId(id); 
    //   setNumber(number);
      setDept("stunts");
      setCategory(category);
      history.push(`/departments`);

    };

    const handleClickElectric = (category) => {
    //   setSceneId(id); 
    //   setNumber(number);
      setDept("electric");
      setCategory(category);
      history.push(`/departments`);

    };

    return (
        <div>
            <Card className={` ${styles.Scene}`}>
                <Card.Header className={`pt-2 pb-1 ${styles.Header }`}>
                  </Card.Header>
                  <Card.Body>
                  <h3 className={`text-center`}>Departments</h3>
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
                  </Card.Body>
            </Card>
        </div>
    )
}

export default Departments