import React from 'react'
import Image from 'react-bootstrap/Image'
import { useHistory } from 'react-router';
import { axiosReq } from '../../api/axiosDefaults';
import { useRedirect } from '../../hooks/Redirect';
import styles from "../../styles/Scene.module.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { PostDropdown } from '../../components/PostDropdown';
import { useSetCharacterContext } from '../../contexts/CharLocatContex';

const Character = (props) => {
    useRedirect("loggedOut");
    const setCharacter = useSetCharacterContext();
    const { role,
            id,
            actor,
            pickup_address,
            pickup_address_2,
            make_up_time,
            commute_time,
            email,
            mobile,
            agent,
            diet,
            requirements,
            costume1,
            costume2,
            costume3,
            costume4,
            costume5,
            costume6,
            costume7,
            makeup,  
            costume1_image,
            costume2_image,
            costume3_image,
            costume4_image,
            costume5_image,
            costume6_image,
            costume7_image,
            makeup_image } = props;
    const history = useHistory();

    const handleEdit = () => {
        history.push(`/characters/${id}/edit`);
      };
    
      const handleDelete = async () => {
        try {
          await axiosReq.delete(`/characters/${id}/`);
          history.goBack();
        } catch (err) {
        }
      };

      const handleClickMoods = () => {
        setCharacter(role);
        history.push(`/character/moodshots`);
    
      };
    
      const handleClickAddMoods = () => {
        setCharacter(role);
        history.push(`/character/moodshot/create`);
    
      };

    return (
        <div>
            <div className={`mb-3 ${styles.Header}`}>
            <Row className={`${styles.ButtonLine} mx-2 mt-2`}>
                <Col className='text-center mx-0 px-0' xs={1} md={2} ></Col>
                <Col xs={4} className='text-center mx-0 px-0'>
                    <h5
                        className={`py-0 mb-0 ${styles.Button}`}
                        onClick={() => handleClickMoods()} > Moodshots
                    </h5>
                </Col>
                <Col xs={5} md={4} className='text-center mx-0 px-0'>
                    <h5
                        className={`py-0 mb-0 ${styles.Button}`}
                        onClick={() => handleClickAddMoods()} > Add Moodshot
                    </h5>
                    </Col>
                <Col className='text-center px-0 mx-0' xs={2}>
                <PostDropdown
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                    />
                </Col>
            </Row>
            <p style={{ textTransform: 'uppercase'}} className={` pl-3 mb-0 py-1 ${styles.SubTitle }`}></p>
            <div className='px-3'>
            <h5 className='my-3 text-center' style={{ textTransform: 'uppercase'}}>Actor Info</h5>
            <Row className='mb-3 text-center'>
                <Col xs={6} md={4} >
                <p className={`${styles.BoldTitle} mb-0 text-center mx-1 mx-sm-5`} >ACTOR</p>
                <p>{actor} </p>
                <hr/>
                </Col>
                <Col xs={6} md={4}>
                <p className={`${styles.BoldTitle} mb-0 text-center mx-1 mx-sm-5`}>MOBILE</p>
                <p>{mobile} </p>
                <hr/>
                </Col>
                <Col xs={12} md={4} >
                <p className={`${styles.BoldTitle} mb-0 text-center mx-1 mx-sm-5`}>EMAIL</p>
                <p>{email} </p>
                <hr/>
                </Col>
            </Row>
            <Row className='mb-3'>
                <Col className='text-center' md={4} xs={6}>
                <p className={`${styles.BoldTitle} mb-0 text-center mx-1 mx-sm-5`}>AGENT</p>
                <p>{agent} </p>
                <hr/>
                </Col>
                <Col className='text-center' md={4} xs={6}>
                <p className={`${styles.BoldTitle} mb-0 text-center mx-1 mx-sm-5`}>DIET</p>
                <p>{diet} </p>
                <hr/>
                </Col>
                <Col md={4} xs={12} className="text-center" >
                <p className={`${styles.BoldTitle} mb-0 text-center mx-1 mx-sm-5`}>REQUIREMENTS</p>
                <p>{requirements} </p>
                <hr/>
                </Col>
            </Row>
            <Row >
                <Col className='text-center' xs={12} md={6} >
                <p className={`${styles.BoldTitle} mb-0 text-center mx-1 mx-sm-5`}>PICKUP ADDRESS</p>
                <p>{pickup_address} </p>
                </Col>
                <Col className='text-center' xs={12} md={6}>
                <p className={`${styles.BoldTitle} mb-0 text-center mx-1 mx-sm-5`}>PICKUP ADDRESS 2</p>
                <p>{pickup_address_2} </p>
                </Col>
            </Row>
            </div>
            <p style={{ textTransform: 'uppercase'}} className={`mt-3 pl-3 mb-0 py-1 ${styles.SubTitle }`}></p>
            <h5 className='my-3 text-center' style={{ textTransform: 'uppercase'}}>Schedule Info</h5>
            <Row>
                <Col className='text-center' xs={6}>
                <p className={`${styles.BoldTitle} mb-0 text-center mx-1 mx-sm-5`}>MAKE UP TIME</p>
                <p>{make_up_time} </p>
                </Col>
                <Col className='text-center' xs={6}>
                <p className={`${styles.BoldTitle} mb-0 text-center mx-1 mx-sm-5`}>COMMUTE TIME</p>
                <p>{commute_time} </p>
                </Col>
            </Row>
            <p style={{ textTransform: 'uppercase'}} className={`mt-3 pl-3 mb-0 py-1 ${styles.SubTitle }`}></p>
            <h5 className='my-3 text-center' style={{ textTransform: 'uppercase'}}>Makeup - Costumes</h5>
            {/* makeup/costume 1 */}
            <Row className='text-center mb-5'>
            <Col xs={12} md={6} className='text-center mt-2'>
                {makeup &&  <> 
                <p className={`${styles.BoldTitle} mb-0 mx-1 mx-sm-5`}>MAKEUP</p>
                <p>{makeup} </p>
                </>}
                {makeup_image && <> 
                <div className='px-3'>
                    <Image className={styles.Images} src={makeup_image} alt="makeup image" height="200"  />
                    </div>
                    </>
                    }
                    <hr/>
                </Col>  
                
            <Col className='text-center mt-2' xs={12} md={6}>
                {costume1 &&  <> 
                <p className={`${styles.BoldTitle} mb-0 mx-1 mx-sm-5`}>COSTUME 1</p>
                <p>{costume1} </p>
                </>}
                {costume1_image && <> 
                <div className='px-1'>
                    <Image className={styles.Images} src={costume1_image} alt="costume 1" height="200"  />
                    </div>
                    </>
                    }
                <hr/>
                </Col>
            </Row>
            {/* costume 2/3 */}
            <Row className='text-center mb-5'>
                <Col className='text-center mt-2' xs={12} md={6}>
                {costume2 &&  <> 
                <p className={`${styles.BoldTitle} mb-0 mx-1 mx-sm-5`}>COSTUME 2</p>
                <p>{costume2} </p>
                </>}
                {costume2_image && <> 
                    <div className='px-3'>
                    <Image className={styles.Images} src={costume2_image} alt="costume 2" height="200"  />
                    </div>
                    </>
                    }
                    <hr/>
                </Col>                
                <Col className='text-center mt-2' xs={12} md={6}>
                {costume3 &&  <> 
                <p className={`${styles.BoldTitle} mb-0 mx-1 mx-sm-5`}>COSTUME 3</p>
                <p>{costume3} </p>
                </>}
                {costume3_image && <> 
                    <div className='px-3'>
                    <Image className={styles.Images} src={costume3_image} alt="costume 3" height="200"  />
                    </div>
                    </>
                    }
                    <hr/>
                </Col>
            </Row>
            {/* costume 4/5 */}
            <Row className='text-center mb-5'>
                <Col className='text-center mt-2' xs={12} md={6}>
                {costume4 &&  <> 
                <p className={`${styles.BoldTitle} mb-0 mx-1 mx-sm-5`}>COSTUME 4</p>
                <p>{costume4} </p>
                </>}
                {costume4_image && <> 
                    <div className='px-3'>
                    <Image className={styles.Images} src={costume4_image} alt="costume 4" height="200"  />
                    </div>
                    </>
                    }
                    <hr/>
                </Col>                
                <Col className='text-center mt-2' xs={12} md={6}>
                {costume5 &&  <> 
                <p className={`${styles.BoldTitle} mb-0 mx-1 mx-sm-5`}>COSTUME 5</p>
                <p>{costume5} </p>
                </>}
                {costume5_image && <> 
                    <div className='px-3'>
                    <Image className={styles.Images} src={costume5_image} alt="costume 5" height="200"  />
                    </div>
                    </>
                    }
                    <hr/>
                </Col>
            </Row>
            {/* costume 6/7 */}
            <Row className='text-center mb-5'>
                <Col className='text-center mt-2' xs={12} md={6}>
                {costume6 &&  <> 
                <p className={`${styles.BoldTitle} mb-0 mx-1 mx-sm-5`}>COSTUME 7</p>
                <p>{costume6} </p>
                </>}
                {costume6_image && <> 
                    <div className='mx-3'>
                    <Image className={styles.Images} src={costume6_image} alt="costume 6" height="200"  />
                    </div>
                    </>
                    }
                    <hr/>
                </Col>                
            <Col className='text-center mt-2' xs={12} md={6}>
                {costume7 &&  <> 
                <p className={`${styles.BoldTitle} mb-0 mx-1 mx-sm-5`}>COSTUME 7</p>
                <p>{costume7} </p>
                </>}
                {costume7_image && <> 
                    <div className='px-3'>
                    <Image className={styles.Images} src={costume7_image} alt="costume 7" height="200"  />
                    </div>
                    </>
                    }
                    <hr/>
                </Col>              
            </Row>
        </div>
        </div>
        // </div>
    )
}

export default Character
