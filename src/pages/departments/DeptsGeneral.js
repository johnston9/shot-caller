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
            <TopBox title="Depts Xtra"/>
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
            <Card className={` ${styles.Scene}`}>
                <Card.Header className={`pt-2 pb-1 ${styles.Header }`}>
                <h3 className={`text-center`}>Departments</h3>
                  </Card.Header>
                  <Card.Body>
                    <Row>
                      <Col xs={4} lg={3} className='px-1 px-sm-3'>
                        <Card onClick={() => handleClick('camera') } >
                        <Card.Img src={Camera} alt="Card image" />
                        <Card.Title className={`text-center ${styles.Title}`} >Camera</Card.Title>
                        </Card>
                      </Col>
                      <Col xs={4} lg={3} className='px-1 px-sm-3'>
                        <Card onClick={() => handleClick('sound') }>
                        <Card.Img src={Camera} alt="Card image" />
                        <Card.Title className={`text-center ${styles.Title}`} >Sound</Card.Title>
                        </Card>
                      </Col>
                      <Col xs={4} lg={3} className='px-1 px-sm-3'>
                        <Card onClick={() => handleClick('location') }>
                        <Card.Img src={Camera} alt="Card image" />
                        <Card.Title className={`text-center ${styles.Title}`} >Location</Card.Title>
                        </Card>
                      </Col>
                      <Col xs={4} lg={3} className='px-1 px-sm-3'>
                        <Card onClick={() => handleClick('script') }>
                        <Card.Img src={Camera} alt="Card image" />
                        <Card.Title className={`text-center ${styles.Title}`} >Script</Card.Title>
                        </Card>
                      </Col>
                      <Col xs={4} lg={3} className='px-1 px-sm-3'>
                        <Card onClick={() => handleClick('art') }>
                        <Card.Img src={Camera} alt="Card image" />
                        <Card.Title className={`text-center ${styles.Title}`} >Art</Card.Title>
                        </Card>
                      </Col>
                      <Col xs={4} lg={3} className='px-1 px-sm-3'>
                        <Card onClick={() => handleClick('make-up') }>
                        <Card.Img src={Camera} alt="Card image" />
                        <Card.Title className={`text-center ${styles.Title}`} >Hair Makeup</Card.Title>
                        </Card>
                      </Col>
                      <Col xs={4} lg={3} className='px-1 px-sm-3'>
                        <Card onClick={() => handleClick('wardrobe') }>
                        <Card.Img src={Camera} alt="Card image" />
                        <Card.Title className={`text-center ${styles.Title}`} >Wardrobe</Card.Title>
                        </Card>
                      </Col>
                      <Col xs={4} lg={3} className='px-1 px-sm-3'>
                        <Card onClick={() => handleClick('casting') }>
                        <Card.Img src={Camera} alt="Card image" />
                        <Card.Title className={`text-center ${styles.Title}`} >Casting</Card.Title>
                        </Card>
                      </Col>
                      <Col xs={4} lg={3} className='px-1 px-sm-3'>
                        <Card onClick={() => handleClick('post') }>
                        <Card.Img src={Camera} alt="Card image" />
                        <Card.Title className={`text-center ${styles.Title}`} >Post</Card.Title>
                        </Card>
                      </Col>
                      <Col xs={4} lg={3} className='px-1 px-sm-3'>
                        <Card onClick={() => handleClick('production') }>
                        <Card.Img src={Camera} alt="Card image" />
                        <Card.Title className={`text-center ${styles.Title}`} >Production</Card.Title>
                        </Card>
                      </Col>
                      <Col xs={4} lg={3} className='px-1 px-sm-3'>
                        <Card onClick={() => handleClick('stunts') }>
                        <Card.Img src={Camera} alt="Card image" />
                        <Card.Title className={`text-center ${styles.Title}`} >Stunts</Card.Title>
                        </Card>
                      </Col>
                      <Col xs={4} lg={3} className='px-1 px-sm-3'>
                        <Card onClick={() => handleClick('electric') }>
                        <Card.Img src={Camera} alt="Card image" />
                        <Card.Title className={`text-center ${styles.Title}`} >Electric</Card.Title>
                        </Card>
                      </Col>
                    </Row>
                  </Card.Body>
            </Card>
        </div>
    )
}

export default DeptsGeneral