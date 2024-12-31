/* Component in LocationPage to display the Location data */
import React from 'react'
import Image from 'react-bootstrap/Image'
import { useHistory } from 'react-router-dom';
import { axiosReq } from '../../api/axiosDefaults';
import styles from "../../styles/Characters.module.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { PostDropdown } from '../../components/PostDropdown';
import { useSetLocationContext } from '../../contexts/CharLocatContex';
import { toast } from 'react-toastify';

const Location = (props) => {
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
            <Row className={`${styles.ButtonLine} mt-2 mx-3 d-flex align-items-center `}>
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
             style={{ textTransform: 'uppercase'}}>LOCATION - {name} </h5>
            <div className={`px-3 ${styles.Header}`}>
            <Row className='mb-3 text-center'>
                <Col xs={12} md={6} className={`${styles.BorderRight} 
                text-center px-0 mx-0`} >
                <p className={`${styles.BoldTitle} mb-2 text-center mx-1 mx-sm-5`}>DESCRIPTION</p>
                <div className={`${styles.Para}`}>
                <p className={`${styles.Role}`}>{description} </p>
                </div>
                </Col>
                <Col xs={12} md={6}>
                <p className={`${styles.BoldTitle} mb-2 text-center mx-1 mx-sm-5`}>PRIMARY FILMING ADDRESS</p>
                <div className={`${styles.Para}`}>
                <p className={`${styles.Role}`}>{filming_address_primary} </p>
                </div>
                </Col>
            </Row>
            {/* break */}
            <Row>
            <Col xs={12}>
            <hr className={`${styles.Break1} mt-0 mb-3`}/>
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
                <Col xs={12} md={6}>
                <p className={`${styles.BoldTitle} mb-2 text-center mx-1 mx-sm-5 `}>FILMING ADDRESS 3</p>
                <div className={`${styles.Para}`}>
                <p className={`${styles.Role}`}>{filming_address3} </p>
                </div>
                </Col>
            </Row>
            </div>
            <h5 className={`text-center mt-4 mb-4 py-1 ${styles.SubTitle }`}
             style={{ textTransform: 'uppercase'}}>Images</h5>
            <div className='px-3'>
            {/* IMAGE 1/2 */}
            <Row className='text-center mb-5'>
            <Col xs={12} md={6} className={`${styles.BorderRight} 
                text-center px-0 mx-0`}>
                <p className={`${styles.BoldTitle} 
                mb-3 text-center mx-1 mx-sm-5`}>IMAGE 1</p>
                {image1 && <> 
                <div className='px-1 mb-3'>
                <Image className={styles.Images} 
                src={image1} alt="Image 1" />
                </div>
                </>}
                {image1_description &&  <> 
                <p className={`${styles.Role}`}>{image1_description} </p>
                </>}
            </Col>  
            <Col xs={12} md={6}>
                    <p className={`${styles.BoldTitle} mb-3 text-center mx-1 mx-sm-5`}>IMAGE 2</p>
                    {image2 && <> 
                    <div className='px-1 mb-3'>
                    <Image src={image2} alt="Image 2" 
                     className={styles.Images} />
                     </div>
                    </>
                    }
                {image2_description &&  <> 
                <p className={`${styles.Role}`}>{image2_description} </p>
                </>}
            </Col>
            </Row>
            <hr/>
            {/* image 3/4 */}
            <Row className='text-center mb-5'>
                <Col xs={12} md={6} className={`${styles.BorderRight} 
                text-center px-0 mx-0`}>
                    <p className={`${styles.BoldTitle} mb-3 text-center mx-1 mx-sm-5`}>IMAGE 3</p>
                    {image3 && <> 
                    <div className='px-1 mb-3'>
                    <Image src={image3} alt="Image 3" 
                      className={styles.Images} />
                      </div>
                    </>
                    }
                {image3_description &&  <> 
                <p className={`${styles.Role}`}>{image3_description} </p>
                </>}
                </Col>                
                <Col xs={12} md={6}>
                    <p className={`${styles.BoldTitle} mb-3 text-center mx-1 mx-sm-5`}>IMAGE 4</p>
                    {image4 && <> 
                    <div className='px-1 mb-3'>
                    <Image src={image4} alt="Image 4"
                      className={styles.Images} />
                      </div>
                    </>
                    }
                {image4_description &&  <> 
                <p className={`${styles.Role}`}>{image4_description} </p>
                </>}
                </Col>
            </Row>
            <hr/>
            {/* IMAGE 5/6 */}
            <Row className='text-center mb-5'>
                <Col xs={12} md={6} className={`${styles.BorderRight} 
                text-center px-0 mx-0`}>
                    <p className={`${styles.BoldTitle} mb-3 text-center mx-1 mx-sm-5`}>IMAGE 5</p>
                    {image5 && <>
                    <div className='px-1 mb-3'>
                    <Image src={image5} alt="Image 5"
                    className={styles.Images} />
                    </div>
                    </>
                    }
                {image5_description &&  <> 
                <p className={`${styles.Role}`}>{image5_description} </p>
                </>}
                </Col>                
                <Col xs={12} md={6}>
                    <p className={`${styles.BoldTitle} mb-3 text-center mx-1 mx-sm-5`}>IMAGE 6</p>
                    {image6 && <> 
                    <div className='px-1 mb-3'>
                    <Image src={image6} alt="Image 6"
                      className={styles.Images} />
                      </div>
                    </>
                    }
                {image6_description &&  <> 
                <p className={`${styles.Role}`}>{image6_description} </p>
                </>}
                </Col>
            </Row>
            <hr/>
            {/* IMAGE 7/8 */}
            <Row className='text-center mb-5'>
                <Col xs={12} md={6} className={`${styles.BorderRight} 
                text-center px-0 mx-0`}>
                    <p className={`${styles.BoldTitle} mb-3 text-center mx-1 mx-sm-5`}>IMAGE 7</p>
                    {image7 && <> 
                    <div className='px-1 mb-3'>
                    <Image src={image7} alt="Image 7" 
                      className={styles.Images} />
                      </div>
                    </>
                    }
                {image7_description &&  <> 
                <p className={`${styles.Role}`}>{image7_description} </p>
                </>}
                </Col>                
                <Col xs={12} md={6}>
                    <p className={`${styles.BoldTitle} mb-3 text-center mx-1 mx-sm-5`}>IMAGE 8 </p>
                    {image8 && <> 
                    <div className='px-1 mb-3'>
                    <Image src={image8} alt="Image 8"
                      className={styles.Images} />
                      </div>
                    </>
                    }
                {image8_description &&  <> 
                <p className={`${styles.Role}`}>{image8_description} </p>
                </>}
                </Col>              
            </Row>
        </div>
        </div>
        </div>
    )
}

export default Location
