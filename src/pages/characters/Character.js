import React, { useState } from 'react'
import Image from 'react-bootstrap/Image'
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { axiosReq, axiosRes } from '../../api/axiosDefaults';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import { useCategoryContext, useSetCategoryContext, useSetDeptContext, useSetNumberContext, useSetSceneContext } from '../../contexts/DeptCategoryContext';
import { useRedirect } from '../../hooks/Redirect';
import styles from "../../styles/Scene.module.css";
import btnStyles from "../../styles/Button.module.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { PostDropdown } from '../../components/PostDropdown';

const Character = (props) => {
    useRedirect("loggedOut");
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
            costume8,  
            costume1_image,
            costume2_image,
            costume3_image,
            costume4_image,
            costume5_image,
            costume6_image,
            costume7_image,
            costume8_image } = props;
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
            <h5>Actor Info</h5>
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
                <p>Makeup Time</p>
                <p>{make_up_time} </p>
                </Col>
                <Col xs={6}>
                <p>Commute Time</p>
                <p>{commute_time} </p>
                </Col>
            </Row>
            {/* costume 1/2 */}
            <Row>
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
            </Row>
            {/* costume 3/4 */}
            <Row>
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
            </Row>
            {/* costume 5/6 */}
            <Row>
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
            </Row>
            {/* costume 7/8 */}
            <Row>
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
                <Col xs={6}>
                {costume8 &&  <> 
                <p>Costume 8</p>
                <p>{costume8} </p>
                </>}
                {costume8_image && <> 
                    <p>Costume 8 Image</p>
                    <Image src={costume8_image} alt="costume 8" height="200"  />
                    </>
                    }
                </Col>                
            </Row>
        </div>
    )
}

export default Character
