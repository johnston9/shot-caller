import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { axiosRes } from '../../api/axiosDefaults';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import { useCategoryContext, useSetCategoryContext, useSetDeptContext, useSetSceneContext } from '../../contexts/DeptCategoryContext';
import { useRedirect } from '../../hooks/Redirect';
import styles from "../../styles/Scene.module.css";
import Camera from "../../assets/dep17s.png";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { DeptDropdown } from '../../components/PostDropdown';

const Scene = (props) => {
    useRedirect("loggedOut")
    const setSceneId = useSetSceneContext();
    const setDept = useSetDeptContext();
    const setCategory = useSetCategoryContext();
    const category = useCategoryContext();
    const { id, number, title, int_ext, time, location,
        characters, action, content, shotlist, 
        storyboard, info, image } = props;
    const currentUser = useCurrentUser();
    const history = useHistory();

    const handleClickCamera = (category) => {
      setSceneId(id); 
      setDept("camera");
      setCategory(category);
      history.push(`/dept/category`);

    };

    const handleClickSound = (category) => {
      setSceneId(id); 
      setDept("sound");
      setCategory(category);
      history.push(`/dept/category`);

    };

    const handleClickLocation = (category) => {
      setSceneId(id); 
      setDept("location");
      setCategory(category);
      history.push(`/dept/category`);

    };

    const handleClickScript = (category) => {
      setSceneId(id); 
      setDept("script");
      setCategory(category);
      history.push(`/dept/category`);

    };

    const handleClickArt = (category) => {
      setSceneId(id); 
      setDept("art");
      setCategory(category);
      history.push(`/dept/category`);

    };

    const handleClickMakeup = (category) => {
      setSceneId(id); 
      setDept("make-up");
      setCategory(category);
      history.push(`/dept/category`);

    };

    const handleClickWardrobe = (category) => {
      setSceneId(id); 
      setDept("wardrobe");
      setCategory(category);
      history.push(`/dept/category`);

    };

    const handleClickCasting = (category) => {
      setSceneId(id); 
      setDept("casting");
      setCategory(category);
      history.push(`/dept/category`);

    };

    const handleClickPost = (category) => {
      setSceneId(id); 
      setDept("post");
      setCategory(category);
      history.push(`/dept/category`);

    };

    const handleClickProduction = (category) => {
      setSceneId(id); 
      setDept("production");
      setCategory(category);
      history.push(`/dept/category`);

    };

    const handleClickStunts = (category) => {
      setSceneId(id); 
      setDept("stunts");
      setCategory(category);
      history.push(`/dept/category`);

    };

    const handleClickElectric = (category) => {
      setSceneId(id); 
      setDept("electric");
      setCategory(category);
      history.push(`/dept/category`);

    };

    // const timer = setTimeout(() => {
    //   history.push(`/dept/category`);
    //   }, 1000)

    // const handleEdit = () => {
    //     history.push(`/posts/${id}/edit`);
    //   };
    
    //   const handleDelete = async () => {
    //     try {
    //       await axiosRes.delete(`/posts/${id}/`);
    //       history.goBack();
    //     } catch (err) {
    //       // console.log(err);
    //     }
    //   };

    return (
        <div>
            <Card className={styles.Scene}>
                  <Card.Header>Scene{number} {location} </Card.Header>
                  <Card.Body>
                  <Card.Title className={`text-center`}>Departments</Card.Title>
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
