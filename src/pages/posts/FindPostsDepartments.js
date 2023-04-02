import React from 'react'
import { Button, Card, Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useSetCategoryContext, useSetDeptContext } from '../../contexts/DeptCategoryContext';
// import { useSetCategoryContext, useSetDeptContext, useSetNumberContext, useSetSceneContext } from '../../contexts/DeptCategoryContext';
import { useRedirect } from '../../hooks/Redirect';
import styles from "../../styles/Scene.module.css";
import btnStyles from "../../styles/Button.module.css";
import Camera from "../../assets/dep17s.png";
import dep1 from "../../assets/dep1.png";
import dep2 from "../../assets/dep2.png";
import dep3 from "../../assets/dep3.png";
import dep4 from "../../assets/dep4.png";
import dep5 from "../../assets/dep5.png";
import dep6 from "../../assets/dep6.png";
import dep7 from "../../assets/dep7.png";
import dep8 from "../../assets/dep8.png";
import dep9 from "../../assets/dep9.png";
import dep10 from "../../assets/dep10.png";
import dep11 from "../../assets/dep11.png";
import dep12 from "../../assets/dep12.png";
import dep13 from "../../assets/dep13.png";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { DeptDropdown } from '../../components/PostDropdown';
import TopBox from '../../components/TopBox';

const Departments = (props) => {
    useRedirect("loggedOut")
    const setDept = useSetDeptContext();
    const setCategory = useSetCategoryContext();
    // const setSceneId = useSetSceneContext();
    // const setNumber = useSetNumberContext();
    // const { id, number } = props;
    const history = useHistory();

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
      // setSceneId(id); 
      // setNumber(number);
      setDept("universal");
      setCategory("");
      history.push(`/departments`);
      // history.push(`/dept/category`);
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
              <Container className={`my-3`}>
              <Row className='mb-4 mt-3'>
                  <Col className='text-center' xs={4} >
                  <Button onClick={() => history.push("/archived")} 
                    className={`${btnStyles.Button} py-0 px-2 ${btnStyles.Bright}`} >Starred
                       </Button>
                  </Col>
                  <Col className='text-center px-0' xs={4} >
                  <Button onClick={() => history.push("/posts")}
                    className={`${btnStyles.Button} py-0 px-3 ${btnStyles.Bright}`} >All Posts
                     </Button>
                  </Col>
                  <Col className='text-center' xs={4} >
                  <Button onClick={() => history.push("/liked")} 
                    className={`${btnStyles.Button} py-0 px-3 ${btnStyles.Bright}`}>Liked
                    </Button>
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
            <Card className={` ${styles.Scene}`}>
                  <Card.Body>
                  <h3 className={`text-center mt-3`}>Posts by Department</h3>
              <p className='text-center'>Requirements and Finals post are ordered by scene number</p>
                  <Row className={`mt-1`} >
                  <Col xs={4}  ></Col>
                      <Col className='px-0' xs={4} md={4} lg={4} >
                        <Card className={` ${styles.CardBox}`} onClick={() => handleClickUniversal()}>
                        <Card.Img className={`text-center ${styles.UniImg}`} src={dep1} alt="Card image" />
                        <Card.Title className={`text-center ${styles.Title}`} >Universal</Card.Title>
                        </Card>
                      </Col>
                  </Row>
                    <Row>
                      <Col className='px-1 px-md-2' xs={4} md={3} lg={2} >
                        <Card>
                        <Card.Img src={dep2} alt="Card image" />
                        <Card.Title className={`text-center ${styles.Title}`} >Camera</Card.Title>
                        <DeptDropdown depart handleClick={(category) => handleClickCamera(category) } />
                        </Card>
                      </Col>
                      <Col className='px-1 px-md-2' xs={4} md={3} lg={2} >
                        <Card>
                        <Card.Img src={dep3} alt="Card image" />
                        <Card.Title className={`text-center ${styles.Title}`} >Sound</Card.Title>
                        <DeptDropdown depart handleClick={(category) => handleClickSound(category) } />
                        </Card>
                      </Col>
                      <Col className='px-1 px-md-2' xs={4} md={3} lg={2} >
                        <Card>
                        <Card.Img src={dep4} alt="Card image" />
                        <Card.Title className={`text-center ${styles.Title}`} >Location</Card.Title>
                        <DeptDropdown depart handleClick={(category) => handleClickLocation(category) } />
                        </Card>
                      </Col>
                      <Col className='px-1 px-md-2' xs={4} md={3} lg={2} >
                        <Card>
                        <Card.Img src={dep5} alt="Card image" />
                        <Card.Title className={`text-center ${styles.Title}`} >Script</Card.Title>
                        <DeptDropdown depart handleClick={(category) => handleClickScript(category) } />
                        </Card>
                      </Col>
                      <Col className='px-1 px-md-2' xs={4} md={3} lg={2} >
                        <Card>
                        <Card.Img src={dep6} alt="Card image" />
                        <Card.Title className={`text-center ${styles.Title}`} >Art</Card.Title>
                        <DeptDropdown depart handleClick={(category) => handleClickArt(category) } />
                        </Card>
                      </Col>
                      <Col className='px-1 px-md-2' xs={4} md={3} lg={2} >
                        <Card>
                        <Card.Img src={dep13} alt="Card image" />
                        <Card.Title className={`text-center ${styles.Title}`} >Makeup</Card.Title>
                        <DeptDropdown depart handleClick={(category) => handleClickMakeup(category) } />
                        </Card>
                      </Col>
                      <Col className='px-1 px-md-2' xs={4} md={3} lg={2} >
                        <Card>
                        <Card.Img src={dep7} alt="Card image" />
                        <Card.Title className={`text-center ${styles.Title}`} >Wardrobe</Card.Title>
                        <DeptDropdown depart handleClick={(category) => handleClickWardrobe(category) } />
                        </Card>
                      </Col>
                      <Col className='px-1 px-md-2' xs={4} md={3} lg={2} >
                        <Card>
                        <Card.Img src={dep8} alt="Card image" />
                        <Card.Title className={`text-center ${styles.Title}`} >Casting</Card.Title>
                        <DeptDropdown depart handleClick={(category) => handleClickCasting(category) } />
                        </Card>
                      </Col>
                      <Col className='px-1 px-md-2' xs={4} md={3} lg={2} >
                        <Card>
                        <Card.Img src={dep9} alt="Card image" />
                        <Card.Title className={`text-center ${styles.Title}`} >Post</Card.Title>
                        <DeptDropdown depart handleClick={(category) => handleClickPost(category) } />
                        </Card>
                      </Col>
                      <Col className='px-1 px-md-2' xs={4} md={3} lg={2} >
                        <Card>
                        <Card.Img src={dep10} alt="Card image" />
                        <Card.Title className={`text-center ${styles.Title}`} >Production</Card.Title>
                        <DeptDropdown depart handleClick={(category) => handleClickProduction(category) } />
                        </Card>
                      </Col>
                      <Col className='px-1 px-md-2' xs={4} md={3} lg={2} >
                        <Card>
                        <Card.Img src={dep11} alt="Card image" />
                        <Card.Title className={`text-center ${styles.Title}`} >Stunts</Card.Title>
                        <DeptDropdown depart handleClick={(category) => handleClickStunts(category) } />
                        </Card>
                      </Col>
                      <Col className='px-1 px-md-2' xs={4} md={3} lg={2} >
                        <Card>
                        <Card.Img src={dep12} alt="Card image" />
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