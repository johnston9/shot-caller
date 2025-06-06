/* Component in LocationPage to display the Location data */
import React from 'react'
import Image from 'react-bootstrap/Image'
import { useHistory } from 'react-router-dom';
import { axiosReq } from '../../api/axiosDefaults';
import styles from "../../styles/Characters.module.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from "react-bootstrap/Card";
import { PostDropdown } from '../../components/PostDropdown';
import { useSetLocationContext } from '../../contexts/CharLocatContex';
import { toast } from 'react-toastify';
import { useSetImageContext } from '../../contexts/ImageContext';

const Location = (props) => {
    const setImage = useSetImageContext(); 
    const setLocation = useSetLocationContext();
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

    const handleClickFull1 = () => {
        setImage(image1); 
        history.push(`/fullshot`);  
      };

      const handleClickFull2 = () => {
        setImage(image2); 
        history.push(`/fullshot`);  
      };

      const handleClickFull3 = () => {
        setImage(image3); 
        history.push(`/fullshot`);  
      };

      const handleClickFull4 = () => {
        setImage(image4); 
        history.push(`/fullshot`);  
      };

      const handleClickFull5 = () => {
        setImage(image5); 
        history.push(`/fullshot`);  
      };

      const handleClickFull6 = () => {
        setImage(image6); 
        history.push(`/fullshot`);  
      };

      const handleClickFull7 = () => {
        setImage(image7); 
        history.push(`/fullshot`);  
      };

      const handleClickFull8 = () => {
        setImage(image8); 
        history.push(`/fullshot`);  
      };
    
    const history = useHistory();

    const handleEdit = () => {
            history.push(`/locations/${id}/edit`);
          };
        
    const handleDelete = async () => {
        try {
            await axiosReq.delete(`/locations/${id}/`);
            history.push(`/locations`);
            toast.success(`Location "${name}" Deleted`);
        } catch (err) {
        }
        };
    
    const handleClickMoods = () => {
       /* Functions take the user to the Location's Moodboards
        * They set the Location Context
        * This will be read on App.js page and passed
          as a filter to the /location/moodshots Route */
        setLocation(name);
        history.push(`/location/moodshots`);
    };
        
    const handleClickAddMoods = () => {
        /* Functions take the user to the Location's Moodboards Create form
        * They set the Location Context
        * This will be read on App.js page and passed
          as a filter to the /location/moodshots/create Route */
        setLocation(name);
        history.push(`/location/moodshot/create`);
    };

    return (
        <div>
            <div className={`mb-3`}>
            <Row className={`${styles.ButtonLine} mt-2 d-flex align-items-center `}>
                <Col className='text-center mx-0 px-0' xs={1}></Col>
                <Col xs={5} className='text-center mx-0 px-0'>
                    <h5
                        className={`py-0 mb-0 ${styles.Button}`}
                        onClick={() => handleClickMoods()} > Moodboards
                    </h5>
                </Col>
                <Col xs={5} className='text-center mx-0 px-0'>
                    <h5
                        className={`d-sm-none py-0 mb-0 ${styles.Button}`}
                        onClick={() => handleClickAddMoods()} > Add Board
                    </h5>
                    <h5
                        className={`d-none d-sm-block py-0 mb-0 ${styles.Button}`}
                        onClick={() => handleClickAddMoods()} > Add Moodboard
                    </h5>
                    </Col>
                <Col className='text-center px-0 mx-0' xs={1}>
                <PostDropdown
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                    />
                </Col>
            </Row>
            <h5 className={`text-center py-1 mb-3 ${styles.SubTitle }`}
             style={{ textTransform: 'uppercase'}}>{name} </h5>
            <div className={`px-3 ${styles.Header}`}>
            <Row className='mb-3 text-center'>
                <Col xs={12} md={6} className={`${styles.BorderRight} 
                text-center px-0 mx-0`} >
                <p className={`${styles.BoldTitle} mb-2 text-center mx-1 mx-sm-5`}>DESCRIPTION</p>
                <div className={`${styles.Para}`}>
                <p className={`${styles.Role}`}>{description} </p>
                </div>
                </Col>
                <Col xs={12} md={6} className='pt-3 pt-md-3'>
                <p className={`${styles.BoldTitle} mb-2 text-center mx-1 mx-sm-5`}>PRIMARY FILMING ADDRESS</p>
                <div className={`${styles.Para}`}>
                <p className={`${styles.Role}`}>{filming_address_primary} </p>
                </div>
                </Col>
            </Row>
            {/* break */}
            <Row>
            <Col xs={12}>
            <hr className={`d-none d-md-block mt-0 mb-3`}/>
            </Col>
            </Row>
            <Row className='mb-3 text-center'>
                <Col xs={12} md={6} className={`${styles.BorderRight} 
                text-center px-0 mx-0`}>
                <p className={`${styles.BoldTitle} mb-2 text-center mx-1 mx-sm-5`}>FILMING ADDRESS 2</p>
                <div className={`${styles.Para}`}>
                <p className={`${styles.Role}`}>{filming_address2} </p>
                </div>
                </Col>
                <Col xs={12} md={6} className='pt-3 pt-md-3'>
                <p className={`${styles.BoldTitle} mb-2 text-center mx-1 mx-sm-5 `}>FILMING ADDRESS 3</p>
                <div className={`${styles.Para}`}>
                <p className={`${styles.Role}`}>{filming_address3} </p>
                </div>
                </Col>
            </Row>
            </div>
            <h5 className={`text-center mt-4 mb-4 py-0 mx-md-4 ${styles.SubTitle }`}
             style={{ textTransform: 'uppercase'}}>Images & Descriptions</h5>
            <div className='px-3'>
            {/* IMAGE 1/2 */}
            <Row >
            <Col xs={12} md={6} className={`px-0 mx-0 mb-3`}>
            <Card className='mx-3 mx-md-5'>
            <Card.Body className={`px-md-5 `}  >
            <Row>
                <Col className='text-center mt-0' xs={12}>
                {image1 && <> 
                <p className={`${styles.BoldTitle} mb-md-3`}>
                    IMAGE 1</p>
                <div className='px-0 mb-0'>
                    <Image className={styles.ImagesIndex} 
                    onClick={() => handleClickFull1() } 
                    src={image1} alt="image" />
                    {/* <iframe title="Image1" src={image1}
                        className={appStyles.iframeIm} alt="Image"  /> */}
                    <p className={`pr-5 mb-0 pb-0 float-right ${styles.FullsizeText }`}
                    onClick={() => handleClickFull1() }>FULLSIZE</p> 
                </div>
                </>}
            </Col>
            </Row>
            <div className={`py-2 px-3 ${styles.TopCard2 }`}>
            {image1_description &&  <> 
            <p className={`${styles.Role}`}>{image1_description} </p>
            </>}
            </div>
            </Card.Body>
            </Card>
            </Col>  
            <Col xs={12} md={6} className={`text-center px-0 mx-0 mb-3`}>
            <div className={`${styles.ImageBox} px-sm-2 px-md-5`}>
                    <p className={`${styles.BoldTitle} mb-md-3 mx-sm-5`}>IMAGE 2</p>
                    {image2 && <> 
                        <div className={`${styles.ImageBox2} py-md-3 px-1 px-sm-2 px-md-3 mb-md-3`}>
                    <Image src={image2} alt="Image 2" 
                     className={styles.Images} />
                     </div>
                    </>
                    }
                {image2_description &&  <> 
                <p className={`${styles.Role}`}>{image2_description} </p>
                </>}
            </div>
            </Col>
            </Row>
            {/* break */}
            <Row>
            <Col xs={12}>
            <hr className={`mt-0 mb-5 d-none d-md-block`}/>
            </Col>
            </Row>
            {/* image 3/4 */} 
            <Row className='text-center'>
                <Col xs={12} md={6} className={`text-center px-0 mx-0 mb-3`}>
                <div className={`${styles.ImageBox} px-sm-2 px-md-5`}>
                    <p className={`${styles.BoldTitle} mb-md-3 mx-sm-5`}>IMAGE 3</p>
                    {image3 && <> 
                        <div className={`${styles.ImageBox2} py-md-3 px-1 px-sm-2 px-md-3 mb-md-3`}>
                    <Image src={image3} alt="Image 3" 
                      className={styles.Images} />
                      </div>
                    </>
                    }
                {image3_description &&  <> 
                <p className={`${styles.Role}`}>{image3_description} </p>
                </>}
                </div>
                </Col>                
                <Col xs={12} md={6} className={`text-center px-0 mx-0 mb-3`}>
                <div className={`${styles.ImageBox} px-sm-2 px-md-5`}>
                    <p className={`${styles.BoldTitle} mb-md-3 mx-sm-5`}>IMAGE 4</p>
                    {image4 && <> 
                        <div className={`${styles.ImageBox2} py-md-3 px-1 px-sm-2 px-md-3 mb-md-3`}>
                    <Image src={image4} alt="Image 4"
                      className={styles.Images} />
                      </div>
                    </>
                    }
                {image4_description &&  <> 
                <p className={`${styles.Role}`}>{image4_description} </p>
                </>}
                </div>
                </Col>
            </Row>
            {/* break */}
            <Row>
            <Col xs={12}>
            <hr className={`mt-0 mb-5 d-none d-md-block`}/>
            </Col>
            </Row>
            {/* IMAGE 5/6 */}
            <Row className='text-center'>
                <Col xs={12} md={6} className={`text-center px-0 mx-0 mb-3`}>
                <div className={`${styles.ImageBox} px-sm-2 px-md-5`}>
                    <p className={`${styles.BoldTitle} mb-md-3 mx-sm-5`}>IMAGE 5</p>
                    {image5 && <>
                        <div className={`${styles.ImageBox2} py-md-3 px-1 px-sm-2 px-md-3 mb-md-3`}>
                    <Image src={image5} alt="Image 5"
                    className={styles.Images} />
                    </div>
                    </>
                    }
                {image5_description &&  <> 
                <p className={`${styles.Role}`}>{image5_description} </p>
                </>}
                </div>
                </Col>                
                <Col xs={12} md={6} className={`text-center px-0 mx-0 mb-3`}>
                <div className={`${styles.ImageBox} px-sm-2 px-md-5`}>
                    <p className={`${styles.BoldTitle} mb-md-3 mx-sm-5`}>IMAGE 6</p>
                    {image6 && <> 
                        <div className={`${styles.ImageBox2} py-md-3 px-1 px-sm-2 px-md-3 mb-md-3`}>
                    <Image src={image6} alt="Image 6"
                      className={styles.Images} />
                      </div>
                    </>
                    }
                {image6_description &&  <> 
                <p className={`${styles.Role}`}>{image6_description} </p>
                </>}
                </div>
                </Col>
            </Row>
            {/* break */}
            <Row>
            <Col xs={12}>
            <hr className={`mt-0 mb-5 d-none d-md-block`}/>
            </Col>
            </Row>
            {/* IMAGE 7/8 */}
            <Row className='text-center'>
                <Col xs={12} md={6} className={`text-center px-0 mx-0 mb-3`}>
                <div className={`${styles.ImageBox} px-sm-2 px-md-5`}>
                    <p className={`${styles.BoldTitle} mb-md-3 mx-sm-5`}>IMAGE 7</p>
                    {image7 && <> 
                        <div className={`${styles.ImageBox2} py-md-3 px-1 px-sm-2 px-md-3 mb-md-3`}>
                    <Image src={image7} alt="Image 7" 
                      className={styles.Images} />
                      </div>
                    </>
                    }
                {image7_description &&  <> 
                <p className={`${styles.Role}`}>{image7_description} </p>
                </>}
                </div>
                </Col>                
                <Col xs={12} md={6} className={`text-center px-0 mx-0 mb-3`}>
                <div className={`${styles.ImageBox} px-sm-2 px-md-5`}>
                    <p className={`${styles.BoldTitle} mb-md-3mx-sm-5`}>IMAGE 8 </p>
                    {image8 && <> 
                        <div className={`${styles.ImageBox2} py-md-3 px-1 px-sm-2 px-md-3 mb-md-3`}>
                    <Image src={image8} alt="Image 8"
                      className={styles.Images} />
                      </div>
                    </>
                    }
                {image8_description &&  <> 
                <p className={`${styles.Role}`}>{image8_description} </p>
                </>}
                </div>
                </Col>              
            </Row>
        </div>
        </div>
        </div>
    )
}

export default Location
