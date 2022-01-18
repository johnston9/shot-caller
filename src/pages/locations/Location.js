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

const Location = (props) => {
    useRedirect("loggedOut");
    const { id,
        name,
        description,
        filming_address_primary,
        filming_address2,
        filming_address3,
        image1_description,
        image1,
        image2_description,
        image2,
        image3_description,
        image3,
        image4_description,
        image4,
        image5_description,
        image5,
        image6_description,
        image6,
        image7_description,
        image7,
        image8_description,
        image8, } = props;
        const history = useHistory();

        const handleEdit = () => {
            history.push(`/locations/${id}/edit`);
          };
        
          const handleDelete = async () => {
            try {
              await axiosReq.delete(`/locations/${id}/`);
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
                <h2 className={` ${styles.Titlelist }`}> {name} </h2>
                </Col >
                <Col xs={1} className='text-center mx-0 px-0'>
                <PostDropdown
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                />
                </Col>
            </Row>
            <hr/>
            <h5 className='my-3'> Info</h5>
            <Row>
                <Col xs={6}>
                <p>DESCRIPTION</p>
                <p>{description} </p>
                </Col>
                <Col xs={6}>
                <p>PRIMARY FILMING ADDRESS</p>
                <p>{filming_address_primary} </p>
                </Col>
            </Row>
            <Row>
                <Col xs={6}>
                <p>SECOND FILMING ADDRESS</p>
                <p>{filming_address2} </p>
                </Col>
                <Col xs={6}>
                <p>THIRD FILMING ADDRESS</p>
                <p>{filming_address3} </p>
                </Col>
            </Row>
            <hr/> 
            <h5 className='my-3'>IMAGES</h5>
            {/* IMAGE 1/2 */}
            <Row>
            <Col xs={6}>
                {image1_description &&  <> 
                <p>Image 1 Description</p>
                <p>{image1_description} </p>
                </>}
                {image1 && <> 
                    <p>Image 1</p>
                    <Image src={image1} alt="Image 1" height="200"  />
                    </>
                    }
                </Col>  
            <Col xs={6}>
            {image2_description &&  <> 
                <p>Image 2 Description</p>
                <p>{image2_description} </p>
                </>}
                {image2 && <> 
                    <p>Image 2</p>
                    <Image src={image2} alt="Image 2" height="200"  />
                    </>
                    }
                </Col>
            </Row>
            {/* image 3/4 */}
            <Row>
                <Col xs={6}>
                {image3_description &&  <> 
                <p>Image 3 Description</p>
                <p>{image3_description} </p>
                </>}
                {image3 && <> 
                    <p>Image 3</p>
                    <Image src={image3} alt="Image 3" height="200"  />
                    </>
                    }
                </Col>                
            <Col xs={6}>
                {image4_description &&  <> 
                <p>Image 4 Description</p>
                <p>{image4_description} </p>
                </>}
                {image4 && <> 
                    <p>Image 4</p>
                    <Image src={image4} alt="Image 4" height="200"  />
                    </>
                    }
                </Col>
            </Row>
            {/* costume 5/6 */}
            <Row>
                <Col xs={6}>
                {image5_description &&  <> 
                <p>Image 5 Description</p>
                <p>{image5_description} </p>
                </>}
                {image5 && <> 
                    <p>Image 5</p>
                    <Image src={image5} alt="Image 5" height="200"  />
                    </>
                    }
                </Col>                
            <Col xs={6}>
            {image6_description &&  <> 
                <p>Image 6 Description</p>
                <p>{image6_description} </p>
                </>}
                {image6 && <> 
                    <p>Image 6</p>
                    <Image src={image6} alt="Image 6" height="200"  />
                    </>
                    }
                </Col>
            </Row>
            {/* costume 7/8 */}
            <Row>
                <Col xs={6}>
                {image7_description &&  <> 
                <p>Image 7 Description</p>
                <p>{image7_description} </p>
                </>}
                {image7 && <> 
                    <p>Image 7</p>
                    <Image src={image7} alt="Image 7" height="200"  />
                    </>
                    }
                </Col>                
            <Col xs={6}>
            {image8_description &&  <> 
                <p>Image 8 Description</p>
                <p>{image8_description} </p>
                </>}
                {image8 && <> 
                    <p>Image8 </p>
                    <Image src={image8} alt="Image 8" height="200"  />
                    </>
                    }
                </Col>              
            </Row>
        </div>
    )
}

export default Location
