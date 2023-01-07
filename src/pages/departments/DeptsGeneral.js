import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useSetDeptGeneralContext } from '../../contexts/DeptCategoryContext';
import { useRedirect } from '../../hooks/Redirect';
import styles from "../../styles/Scene.module.css";
import btnStyles from "../../styles/Button.module.css";
import Camera from "../../assets/dep17s.png";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import TopBox from '../../components/TopBox';
import Info from './Info';

const DeptsGeneral = () => {
    useRedirect("loggedOut")
    const setDeptGeneral = useSetDeptGeneralContext();
    const [showInfo, setShowInfo] = useState(false);
    const history = useHistory();

    const handleClick = (dept) => {
      setDeptGeneral(dept);
      history.push(`/department/posts`);

    };

    return (
        <div>
            <TopBox title="Departments"/>
            <Button
              className={`${btnStyles.Button} ${btnStyles.Blue} my-2`}
              onClick={() => history.goBack()}
              >
              Back
            </Button>
            <Button
              className={`float-right py-0 my-2 ${btnStyles.Order} ${btnStyles.Button}`}
              onClick={() => setShowInfo(showInfo => !showInfo)} >INFO
            </Button>
              {!showInfo ? (
                  ""
                      ) : (
                        <Info  /> 
                        ) } 
            <Card className={` ${styles.Scene} p-0`}>
                <Card.Header className={`${styles.Header } p-0`}>
                <h5 style={{ textTransform: 'uppercase'}} 
                className={`text-center pl-5 py-1 ${styles.SubTitle }`}>
                Depts Xtra</h5>
                  </Card.Header>
                  <Card.Body>
                    <Row>
                      <Col xs={4} lg={3}>
                      <div className={`${styles.DeptDiv } px-1 px-sm-3`}>
                      <Card className={`${styles.Dept }`}
                          onClick={() => handleClick('camera') } >
                        <Card.Img src={Camera} alt="Card image" />
                        <Card.Title className={`text-center ${styles.Title}`} >Camera</Card.Title>
                      </Card>
                      </div>
                      </Col>
                      <Col xs={4} lg={3}>
                      <div className={`${styles.DeptDiv } px-1 px-sm-3`}>
                        <Card className={`${styles.Dept }`}
                          onClick={() => handleClick('sound') }>
                        <Card.Img src={Camera} alt="Card image" />
                        <Card.Title className={`text-center ${styles.Title}`} >Sound</Card.Title>
                        </Card>
                      </div>
                      </Col>
                      <Col xs={4} lg={3} className='px-1 px-sm-3'>
                      <div className={`${styles.DeptDiv } px-1 px-sm-3`}>
                        <Card className={`${styles.Dept }`}
                          onClick={() => handleClick('location') }>
                        <Card.Img src={Camera} alt="Card image" />
                        <Card.Title className={`text-center ${styles.Title}`} >Location</Card.Title>
                        </Card>
                      </div>
                      </Col>
                      <Col xs={4} lg={3} className='px-1 px-sm-3'>
                      <div className={`${styles.DeptDiv } px-1 px-sm-3`}>
                        <Card className={`${styles.Dept }`}
                          onClick={() => handleClick('script') }>
                        <Card.Img src={Camera} alt="Card image" />
                        <Card.Title className={`text-center ${styles.Title}`} >Script</Card.Title>
                        </Card>
                      </div>
                      </Col>
                      <Col xs={4} lg={3} className='px-1 px-sm-3'>
                      <div className={`${styles.DeptDiv } px-1 px-sm-3`}>
                        <Card className={`${styles.Dept }`}
                          onClick={() => handleClick('art') }>
                        <Card.Img src={Camera} alt="Card image" />
                        <Card.Title className={`text-center ${styles.Title}`} >Art</Card.Title>
                        </Card>
                      </div>
                      </Col>
                      <Col xs={4} lg={3} className='px-1 px-sm-3'>
                      <div className={`${styles.DeptDiv } px-1 px-sm-3`}>
                        <Card className={`${styles.Dept }`}
                          onClick={() => handleClick('make-up') }>
                        <Card.Img src={Camera} alt="Card image" />
                        <Card.Title className={`text-center ${styles.Title}`} >Hair Makeup</Card.Title>
                        </Card>
                      </div>
                      </Col>
                      <Col xs={4} lg={3} className='px-1 px-sm-3'>
                      <div className={`${styles.DeptDiv } px-1 px-sm-3`}>
                        <Card className={`${styles.Dept }`}
                          onClick={() => handleClick('wardrobe') }>
                        <Card.Img src={Camera} alt="Card image" />
                        <Card.Title className={`text-center ${styles.Title}`} >Wardrobe</Card.Title>
                        </Card>
                      </div>
                      </Col>
                      <Col xs={4} lg={3} className='px-1 px-sm-3'>
                      <div className={`${styles.DeptDiv } px-1 px-sm-3`}>
                        <Card className={`${styles.Dept }`}
                          onClick={() => handleClick('casting') }>
                        <Card.Img src={Camera} alt="Card image" />
                        <Card.Title className={`text-center ${styles.Title}`} >Casting</Card.Title>
                        </Card>
                      </div>
                      </Col>
                      <Col xs={4} lg={3} className='px-1 px-sm-3'>
                      <div className={`${styles.DeptDiv } px-1 px-sm-3`}>
                        <Card className={`${styles.Dept }`}
                          onClick={() => handleClick('post') }>
                        <Card.Img src={Camera} alt="Card image" />
                        <Card.Title className={`text-center ${styles.Title}`} >Post</Card.Title>
                        </Card>
                      </div>
                      </Col>
                      <Col xs={4} lg={3} className='px-1 px-sm-3'>
                      <div className={`${styles.DeptDiv } px-1 px-sm-3`}>
                        <Card className={`${styles.Dept }`}
                          onClick={() => handleClick('production') }>
                        <Card.Img src={Camera} alt="Card image" />
                        <Card.Title className={`text-center ${styles.Title}`} >Production</Card.Title>
                        </Card>
                      </div>
                      </Col>
                      <Col xs={4} lg={3} className='px-1 px-sm-3'>
                      <div className={`${styles.DeptDiv } px-1 px-sm-3`}>
                        <Card className={`${styles.Dept }`}
                          onClick={() => handleClick('stunts') }>
                        <Card.Img src={Camera} alt="Card image" />
                        <Card.Title className={`text-center ${styles.Title}`} >Stunts</Card.Title>
                        </Card>
                      </div>
                      </Col>
                      <Col xs={4} lg={3} className='px-1 px-sm-3'>
                      <div className={`${styles.DeptDiv } px-1 px-sm-3`}>
                        <Card className={`${styles.Dept }`}
                          onClick={() => handleClick('electric') }>
                        <Card.Img src={Camera} alt="Card image" />
                        <Card.Title className={`text-center ${styles.Title}`} >Electric</Card.Title>
                        </Card>
                      </div>
                      </Col>
                    </Row>
                  </Card.Body>
            </Card>
        </div>
    )
}

export default DeptsGeneral