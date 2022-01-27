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
          // console.log(err);
        }
      };

      const handleClickMoods = () => {
        setCharacter(role);
        history.push(`/moodshots/character`);
    
      };
    
      const handleClickAddMoods = () => {
        setCharacter(role);
        history.push(`/character/moodshot/create`);
    
      };

    return (
        <div>
            <Row className='p-3'>
                <Col className='mx-0 px-0' xs={1}></Col>
                <Col xs={10} className='mx-0 px-0 text-center'>
                <h2 className={` ${styles.Titlelist }`}> {role} </h2>
                </Col >
                <Col xs={1} className='text-center mx-0 px-0'>
                <PostDropdown
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                />
                </Col>
            </Row>
            <hr/>
            <Row>
                <Col xs={6} className='text-center'>
                    <p
                        className={`py-0 mb-0 ${styles.Button}`}
                        onClick={() => handleClickMoods()} > Moodshots
                    </p>
                </Col>
                <Col xs={6} className='text-center'>
                    <p
                        className={`py-0 mb-0 ${styles.Button}`}
                        onClick={() => handleClickAddMoods()} > Add Moodshot
                    </p>
                </Col>
            </Row>
            <h5 className='my-3'>Actor Info</h5>
            <Row>
                <Col xs={4}>
                <p>ACTOR</p>
                <p>{actor} </p>
                </Col>
                <Col xs={4}>
                <p>EMAIL</p>
                <p>{email} </p>
                </Col>
                <Col xs={4}>
                <p>MOBILE</p>
                <p>{mobile} </p>
                </Col>
            </Row>
            <Row>
                <Col xs={4}>
                <p>AGENT</p>
                <p>{agent} </p>
                </Col>
                <Col xs={4}>
                <p>DIET</p>
                <p>{diet} </p>
                </Col>
                <Col xs={4}>
                <p>REQUIREMENTS</p>
                <p>{requirements} </p>
                </Col>
            </Row>
            <Row>
                <Col xs={6}>
                <p>PICKUP ADDRESS</p>
                <p>{pickup_address} </p>
                </Col>
                <Col xs={6}>
                <p>SECOND SICKUP ADDRESS</p>
                <p>{pickup_address_2} </p>
                </Col>
            </Row>
            <hr/>
            <h5 className='my-3'>Schedule Info</h5>
            <Row>
                <Col xs={6}>
                <p>MAKE UP TIME</p>
                <p>{make_up_time} </p>
                </Col>
                <Col xs={6}>
                <p>COMMUTE TIME</p>
                <p>{commute_time} </p>
                </Col>
            </Row>
            <hr/>
            <h5 className='my-3'>Costumes</h5>
            {/* makeup/costume 1 */}
            <Row>
            <Col xs={6}>
                {makeup &&  <> 
                <p>Makeup</p>
                <p>{makeup} </p>
                </>}
                {makeup_image && <> 
                    <p>Makeup Image</p>
                    <Image src={makeup_image} alt="makeup image" height="200"  />
                    </>
                    }
                </Col>  
            <Col xs={6}>
                {costume1 &&  <> 
                <p>Costume 1</p>
                <p>{costume1} </p>
                </>}
                {costume1_image && <> 
                    <p>Costume 1 Image</p>
                    <Image src={costume1_image} alt="costume 1" height="200"  />
                    </>
                    }
                </Col>
            </Row>
            {/* costume 2/3 */}
            <Row>
                <Col xs={6}>
                {costume2 &&  <> 
                <p>Costume 2</p>
                <p>{costume2} </p>
                </>}
                {costume2_image && <> 
                    <p>Costume 2 Image</p>
                    <Image src={costume2_image} alt="costume 2" height="200"  />
                    </>
                    }
                </Col>                
            <Col xs={6}>
                {costume3 &&  <> 
                <p>Costume 3</p>
                <p>{costume3} </p>
                </>}
                {costume3_image && <> 
                    <p>Costume 3 Image</p>
                    <Image src={costume3_image} alt="costume 3" height="200"  />
                    </>
                    }
                </Col>
            </Row>
            {/* costume 4/5 */}
            <Row>
                <Col xs={6}>
                {costume4 &&  <> 
                <p>Costume 4</p>
                <p>{costume4} </p>
                </>}
                {costume4_image && <> 
                    <p>Costume 4 Image</p>
                    <Image src={costume4_image} alt="costume 4" height="200"  />
                    </>
                    }
                </Col>                
            <Col xs={6}>
                {costume5 &&  <> 
                <p>Costume 5</p>
                <p>{costume5} </p>
                </>}
                {costume5_image && <> 
                    <p>Costume 5 Image</p>
                    <Image src={costume5_image} alt="costume 5" height="200"  />
                    </>
                    }
                </Col>
            </Row>
            {/* costume 6/7 */}
            <Row>
                <Col xs={6}>
                {costume6 &&  <> 
                <p>Costume 6</p>
                <p>{costume6} </p>
                </>}
                {costume6_image && <> 
                    <p>Costume 6 Image</p>
                    <Image src={costume6_image} alt="costume 6" height="200"  />
                    </>
                    }
                </Col>                
            <Col xs={6}>
                {costume7 &&  <> 
                <p>Costume 7</p>
                <p>{costume7} </p>
                </>}
                {costume7_image && <> 
                    <p>Costume 7 Image</p>
                    <Image src={costume7_image} alt="costume 7" height="200"  />
                    </>
                    }
                </Col>              
            </Row>
        </div>
    )
}

export default Character
