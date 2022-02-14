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
            <div className={` mb-3 ${styles.Header}`}>
            <Row className={`${styles.ButtonLine} mx-2 mt-2`}>
                <Col className='text-center mx-0 px-0' xs={1} md={2} ></Col>
                <Col xs={4} className='text-center mx-0 px-0'>
                    <p
                        className={`py-0 mb-0 ${styles.Button}`}
                        onClick={() => handleClickMoods()} > Moodshots
                    </p>
                </Col>
                <Col xs={5} md={4} className='text-center mx-0 px-0'>
                    <p
                        className={`py-0 mb-0 ${styles.Button}`}
                        onClick={() => handleClickAddMoods()} > Add Moodshot
                    </p>
                    </Col>
                <Col className='text-center px-0 mx-0' xs={2}>
                <PostDropdown
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                    />
                </Col>
            </Row>
            <p style={{ textTransform: 'uppercase'}} className={`mt-1 pl-3 mb-0 py-1 ${styles.SubTitle }`}></p>
            <div className='px-3'>
            <h3 className='my-3 text-center'>Actor Info</h3>
            <Row>
                <Col className='text-center' xs={6} md={4} >
                <p className={`${styles.Bold} mb-0 text-center `} >ACTOR</p>
                <p>{actor} </p>
                </Col>
                <Col className='text-center' xs={6} md={4}>
                <p className={`${styles.Bold} mb-0 text-center `}>MOBILE</p>
                <p>{mobile} </p>
                </Col>
                <hr className='d-block d-md-none'/>
                <Col xs={12} md={4} className="text-center" >
                <p className={`${styles.Bold} mb-0 text-center `}>EMAIL</p>
                <p>{email} </p>
                </Col>
            </Row>
            <hr/>
            <Row>
                <Col className='text-center' md={4} xs={6}>
                <p className={`${styles.Bold} mb-0 text-center `}>AGENT</p>
                <p>{agent} </p>
                </Col>
                <Col className='text-center' md={4} xs={6}>
                <p className={`${styles.Bold} mb-0 text-center `}>DIET</p>
                <p>{diet} </p>
                </Col>
                <hr className='d-md-none'/>
                <Col md={4} xs={12} className="text-center" >
                <p className={`${styles.Bold} mb-0 text-center `}>REQUIREMENTS</p>
                <p>{requirements} </p>
                </Col>
            </Row>
            <hr/>
            <Row>
                <Col className='text-center' xs={6}>
                <p className={`${styles.Bold} mb-0 text-center `}>PICKUP ADDRESS</p>
                <p>{pickup_address} </p>
                </Col>
                <Col className='text-center' xs={6}>
                <p className={`${styles.Bold} mb-0 text-center `}>PICKUP ADDRESS 2</p>
                <p>{pickup_address_2} </p>
                </Col>
            </Row>
            <p style={{ textTransform: 'uppercase'}} className={`mt-1 pl-3 mb-0 py-1 ${styles.SubTitle }`}></p>
            <h3 className='my-3 text-center'>Schedule Info</h3>
            <Row>
                <Col className='text-center' xs={6}>
                <p className={`${styles.Bold} mb-0 text-center `}>MAKE UP TIME</p>
                <p>{make_up_time} </p>
                </Col>
                <Col className='text-center' xs={6}>
                <p className={`${styles.Bold} mb-0 text-center `}>COMMUTE TIME</p>
                <p>{commute_time} </p>
                </Col>
            </Row>
            <p style={{ textTransform: 'uppercase'}} className={`mt-1 pl-3 mb-0 py-1 ${styles.SubTitle }`}></p>
            <h3 className='my-3 text-center'>Makeup - Costumes</h3>
            {/* makeup/costume 1 */}
            <Row>
            <Col xs={6} className='text-center'>
                {makeup &&  <> 
                <p className={`${styles.Bold} mb-0`} >MAKEUP</p>
                <p>{makeup} </p>
                </>}
                {makeup_image && <> 
                    <Image src={makeup_image} alt="makeup image" height="200"  />
                    <p className={`${styles.Bold} mb-0`}>MAKEUP IMAGE</p>
                    </>
                    }
                </Col>  
            <Col className='text-center' xs={6}>
                {costume1 &&  <> 
                <p className={`${styles.Bold} mb-0`}>COSTUME 1</p>
                <p>{costume1} </p>
                </>}
                {costume1_image && <> 
                    <Image src={costume1_image} alt="costume 1" height="200"  />
                    <p className={`${styles.Bold} mb-0`}>COSTUME 1 IMAGE</p>
                    </>
                    }
                </Col>
            </Row>
            {/* costume 2/3 */}
            <Row>
                <Col className='text-center' xs={6}>
                {costume2 &&  <> 
                <p className={`${styles.Bold} mb-0`}>COSTUME 2</p>
                <p>{costume2} </p>
                </>}
                {costume2_image && <> 
                    <p className={`${styles.Bold} mb-0`}>COSTUME 2 IMAGE</p>
                    <Image src={costume2_image} alt="costume 2" height="200"  />
                    </>
                    }
                </Col>                
                <Col className='text-center' xs={6}>
                {costume3 &&  <> 
                <p className={`${styles.Bold} mb-0`}>COSTUME 3</p>
                <p>{costume3} </p>
                </>}
                {costume3_image && <> 
                    <p className={`${styles.Bold} mb-0`}>COSTUME 3 IMAGE</p>
                    <Image src={costume3_image} alt="costume 3" height="200"  />
                    </>
                    }
                </Col>
            </Row>
            {/* costume 4/5 */}
            <Row>
                <Col className='text-center' xs={6}>
                {costume4 &&  <> 
                <p className={`${styles.Bold} mb-0`}>COSTUME 4</p>
                <p>{costume4} </p>
                </>}
                {costume4_image && <> 
                    <p className={`${styles.Bold} mb-0`}>COSTUME 4 IMAGE</p>
                    <Image src={costume4_image} alt="costume 4" height="200"  />
                    </>
                    }
                </Col>                
                <Col className='text-center' xs={6}>
                {costume5 &&  <> 
                <p className={`${styles.Bold} mb-0`}>COSTUME 5</p>
                <p>{costume5} </p>
                </>}
                {costume5_image && <> 
                    <p className={`${styles.Bold} mb-0`}>COSTUME 5 IMAGE</p>
                    <Image src={costume5_image} alt="costume 5" height="200"  />
                    </>
                    }
                </Col>
            </Row>
            {/* costume 6/7 */}
            <Row>
                <Col className='text-center' xs={6}>
                {costume6 &&  <> 
                <p className={`${styles.Bold} mb-0`}>COSTUME 7</p>
                <p>{costume6} </p>
                </>}
                {costume6_image && <> 
                    <p className={`${styles.Bold} mb-0`}>COSTUME 6 IMAGE</p>
                    <Image src={costume6_image} alt="costume 6" height="200"  />
                    </>
                    }
                </Col>                
            <Col className='text-center' xs={6}>
                {costume7 &&  <> 
                <p className={`${styles.Bold} mb-0`}>COSTUME 7</p>
                <p>{costume7} </p>
                </>}
                {costume7_image && <> 
                    <p className={`${styles.Bold} mb-0`}>COSTUME 7 IMAGE</p>
                    <Image src={costume7_image} alt="costume 7" height="200"  />
                    </>
                    }
                </Col>              
            </Row>
        </div>
        </div>
        </div>
    )
}

export default Character
