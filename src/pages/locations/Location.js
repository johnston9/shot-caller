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
                <hr className='d-block d-md-none'/>
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
            <Col xs={12} md={6} className={`px-0 mx-0 mb-5`}>
            <Card className='mx-3 mx-md-5'>
            <Card.Body className={`px-md-5 `}  >
            <Row>
                <Col className='text-center mt-0' xs={12}>
                <p className={`${styles.BoldTitle} mb-md-3`}>
                    IMAGE 1</p>
                {image1 && <> 
                <div className='px-0 mb-0'>
                    <Image className={styles.ImagesIndex} 
                    onClick={() => handleClickFull1() } 
                    src={image1} alt="image" />
                    {/* <iframe title="Image1" src={image1}
                        className={appStyles.iframeIm} alt="Image"  /> */}
                    {/* <p className={`pr-5 mb-0 pb-0 float-right ${styles.FullsizeText }`}
                    onClick={() => handleClickFull1() }>FULLSIZE</p>  */}
                </div>
                </>}
            </Col>
            </Row>
            <div className={`py-2 px-3 ${styles.TopCard2 }`}>
            {image1_description &&  <> 
            <p className={`${styles.Role} text-center`}>{image1_description} </p>
            </>}
            </div>
            <p className={`pr-5 mb-0 pb-0 float-right ${styles.FullsizeText }`}
                    onClick={() => handleClickFull1() }>FULLSIZE</p> 
            </Card.Body>
            </Card>
            </Col>  
            <Col xs={12} md={6} className={`px-0 mx-0 mb-5`}>
            <Card className='mx-3 mx-md-5'>
            <Card.Body className={`px-md-5 `}  >
            <Row>
                <Col className='text-center mt-0' xs={12}>
                <p className={`${styles.BoldTitle} mb-md-3`}>
                    IMAGE 2</p>
                {image2 && <> 
                <div className='px-0 mb-0'>
                    <Image className={styles.ImagesIndex} 
                    onClick={() => handleClickFull2() } 
                    src={image2} alt="image" />
                    {/* <iframe title="Image2" src={image2}
                        className={appStyles.iframeIm} alt="Image"  /> */}
                    <p className={`pr-5 mb-0 pb-0 float-right ${styles.FullsizeText }`}
                    onClick={() => handleClickFull2() }>FULLSIZE</p> 
                </div>
                </>}
            </Col>
            </Row>
            <div className={`py-2 px-3 ${styles.TopCard2 }`}>
            {image2_description &&  <> 
            <p className={`${styles.Role}`}>{image2_description} </p>
            </>}
            </div>
            </Card.Body>
            </Card>
            </Col>
            </Row>
            {/* break */}
            <Row>
            <Col xs={12}>
            <hr className={`mt-0 mb-5 d-none d-md-block`}/>
            </Col>
            </Row>
            {/* image 3/4 */} 
            <Row >
                <Col xs={12} md={6} className={`px-0 mx-0 mb-5`}>
                <Card className='mx-3 mx-md-5'>
                <Card.Body className={`px-md-5 `}  >
                <Row>
                <Col className='text-center mt-0' xs={12}>
                <p className={`${styles.BoldTitle} mb-md-3`}>
                    IMAGE 3</p>
                {image3 && <> 
                <div className='px-0 mb-0'>
                    <Image className={styles.ImagesIndex} 
                    onClick={() => handleClickFull3() } 
                    src={image3} alt="image" />
                    {/* <iframe title="Image3" src={image3}
                        className={appStyles.iframeIm} alt="Image"  /> */}
                    <p className={`pr-5 mb-0 pb-0 float-right ${styles.FullsizeText }`}
                    onClick={() => handleClickFull3() }>FULLSIZE</p> 
                </div>
                </>}
                </Col>
                </Row>
                <div className={`py-2 px-3 ${styles.TopCard2 }`}>
                {image3_description &&  <> 
                <p className={`${styles.Role}`}>{image3_description} </p>
                </>}
                </div>
                </Card.Body>
                </Card>
                </Col>                
                <Col xs={12} md={6} className={`px-0 mx-0 mb-5`}>
                <Card className='mx-3 mx-md-5'>
                <Card.Body className={`px-md-5 `}  >
                <Row>
                    <Col className='text-center mt-0' xs={12}>
                    <p className={`${styles.BoldTitle} mb-md-3`}>
                        IMAGE 4</p>
                    {image4 && <> 
                    <div className='px-0 mb-0'>
                        <Image className={styles.ImagesIndex} 
                        onClick={() => handleClickFull4() } 
                        src={image4} alt="image" />
                        {/* <iframe title="Image4" src={image4}
                            className={appStyles.iframeIm} alt="Image"  /> */}
                        <p className={`pr-5 mb-0 pb-0 float-right ${styles.FullsizeText }`}
                        onClick={() => handleClickFull4() }>FULLSIZE</p> 
                    </div>
                    </>}
                </Col>
                </Row>
                <div className={`py-2 px-3 ${styles.TopCard2 }`}>
                {image4_description &&  <> 
                <p className={`${styles.Role}`}>{image4_description} </p>
                </>}
                </div>
                </Card.Body>
                </Card>
                </Col>
            </Row>
            {/* break */}
            <Row>
            <Col xs={12}>
            <hr className={`mt-0 mb-5 d-none d-md-block`}/>
            </Col>
            </Row>
            {/* IMAGE 5/6 */}
            <Row >
                <Col xs={12} md={6} className={`px-0 mx-0 mb-5`}>
                <Card className='mx-3 mx-md-5'>
                <Card.Body className={`px-md-5 `}  >
                <Row>
                    <Col className='text-center mt-0' xs={12}>
                    <p className={`${styles.BoldTitle} mb-md-3`}>
                        IMAGE 5</p>
                    {image5 && <> 
                    <div className='px-0 mb-0'>
                        <Image className={styles.ImagesIndex} 
                        onClick={() => handleClickFull5() } 
                        src={image5} alt="image" />
                        {/* <iframe title="Image5" src={image5}
                            className={appStyles.iframeIm} alt="Image"  /> */}
                        <p className={`pr-5 mb-0 pb-0 float-right ${styles.FullsizeText }`}
                        onClick={() => handleClickFull5() }>FULLSIZE</p> 
                    </div>
                    </>}
                </Col>
                </Row>
                <div className={`py-2 px-3 ${styles.TopCard2 }`}>
                {image5_description &&  <> 
                <p className={`${styles.Role}`}>{image5_description} </p>
                </>}
                </div>
                </Card.Body>
                </Card>
                </Col>                
                <Col xs={12} md={6} className={`px-0 mx-0 mb-5`}>
                <Card className='mx-3 mx-md-5'>
                <Card.Body className={`px-md-5 `}  >
                <Row>
                    <Col className='text-center mt-0' xs={12}>
                    <p className={`${styles.BoldTitle} mb-md-3`}>
                        IMAGE 6</p>
                    {image6 && <> 
                    <div className='px-0 mb-0'>
                        <Image className={styles.ImagesIndex} 
                        onClick={() => handleClickFull6() } 
                        src={image6} alt="image" />
                        {/* <iframe title="Image6" src={image6}
                            className={appStyles.iframeIm} alt="Image"  /> */}
                        <p className={`pr-5 mb-0 pb-0 float-right ${styles.FullsizeText }`}
                        onClick={() => handleClickFull6() }>FULLSIZE</p> 
                    </div>
                    </>}
                </Col>
                </Row>
                <div className={`py-2 px-3 ${styles.TopCard2 }`}>
                {image6_description &&  <> 
                <p className={`${styles.Role}`}>{image6_description} </p>
                </>}
                </div>
                </Card.Body>
                </Card>
                </Col>
            </Row>
            {/* break */}
            <Row>
            <Col xs={12}>
            <hr className={`mt-0 mb-5 d-none d-md-block`}/>
            </Col>
            </Row>
            {/* IMAGE 7/8 */}
            <Row >
                <Col xs={12} md={6} className={`px-0 mx-0 mb-5`}>
                <Card className='mx-3 mx-md-5'>
                <Card.Body className={`px-md-5 `}  >
                <Row>
                    <Col className='text-center mt-0' xs={12}>
                    <p className={`${styles.BoldTitle} mb-md-3`}>
                        IMAGE 7</p>
                    {image7 && <> 
                    <div className='px-0 mb-0'>
                        <Image className={styles.ImagesIndex} 
                        onClick={() => handleClickFull7() } 
                        src={image7} alt="image" />
                        {/* <iframe title="Image7" src={image7}
                            className={appStyles.iframeIm} alt="Image"  /> */}
                        <p className={`pr-5 mb-0 pb-0 float-right ${styles.FullsizeText }`}
                        onClick={() => handleClickFull7() }>FULLSIZE</p> 
                    </div>
                    </>}
                </Col>
                </Row>
                <div className={`py-2 px-3 ${styles.TopCard2 }`}>
                {image7_description &&  <> 
                <p className={`${styles.Role}`}>{image7_description} </p>
                </>}
                </div>
                </Card.Body>
                </Card>
                </Col>                
                <Col xs={12} md={6} className={`px-0 mx-0 mb-5`}>
                <Card className='mx-3 mx-md-5'>
                <Card.Body className={`px-md-5 `}  >
                <Row>
                    <Col className='text-center mt-0' xs={12}>
                    <p className={`${styles.BoldTitle} mb-md-3`}>
                        IMAGE 8</p>
                    {image8 && <> 
                    <div className='px-0 mb-0'>
                        <Image className={styles.ImagesIndex} 
                        onClick={() => handleClickFull8() } 
                        src={image8} alt="image" />
                        {/* <iframe title="Image8" src={image8}
                            className={appStyles.iframeIm} alt="Image"  /> */}
                        <p className={`pr-5 mb-0 pb-0 float-right ${styles.FullsizeText }`}
                        onClick={() => handleClickFull8() }>FULLSIZE</p> 
                    </div>
                    </>}
                </Col>
                </Row>
                <div className={`py-2 px-3 ${styles.TopCard2 }`}>
                {image8_description &&  <> 
                <p className={`${styles.Role}`}>{image8_description} </p>
                </>}
                </div>
                </Card.Body>
                </Card>
                </Col>              
            </Row>
        </div>
        </div>
        </div>
    )
}

export default Location
