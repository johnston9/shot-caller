/* Component in MoodboardPage to display the Moodboard data 
 * The word moodshots is used through the app in the urls for moodboards */
import React from 'react'
import Image from 'react-bootstrap/Image'
import { useHistory } from 'react-router-dom';
import { axiosReq } from '../../api/axiosDefaults';
import styles from "../../styles/Moodboards.module.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { PostDropdown } from '../../components/PostDropdown';
import Avatar from '../../components/Avatar';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import btnStyles from "../../styles/Button.module.css";
import TopBox from '../../components/TopBox';
import { useSetImageContext } from '../../contexts/ImageContext';

const Moodboard = (props) => {
    const setImage = useSetImageContext(); 

    const {
        id,
        is_owner,
        updated_at,
        name,
        position,
        profile_id,
        profile_image,
        number, 
        title, 
        content,
        character, 
        location,
        image1,
        image2,
        image3,
        image4,
        image5,
    } = props;
    const history = useHistory();

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

    const handleEdit = () => { 
        history.push(`/moodshots/${id}/edit`);
        };

    const handleDelete = async () => {
        try {
            await axiosReq.delete(`/moodshots/${id}/`);
            history.push(`/moodshots/`);
        } catch (err) {
        }
};
  return (
    <div>
        <TopBox title="Moodboard" />   
        <Button
            className={`${btnStyles.Button} ${btnStyles.Back} my-2`}
            onClick={() => history.goBack()}
        >
            Back
        </Button>     
        {/*  */}
        <Card className={ `mt-1 mb-0 pb-0 ${styles.MoodTop}`}>
        <Card.Body className={`py-0 px-0 ${styles.MoodTop}`}>
        <Row className={`d-flex align-items-center pt-0 pb-0 my-0 pl-3`}>
        <Col xs={12} md={3} className="my-1" >
        <div className='d-none d-md-block'>
        <Row >
          {/* mine */}
        <Col xs={3} className="pl-0 pr-0" >
        <Link to={`/profiles/${profile_id}`}>
        <Avatar src={profile_image} height={45}/>
        </Link>
        </Col>
        <Col xs={9} className="pl-0 pr-0" >
        <div className={`${styles.Content4} pl-2 ml-2`}>
        <p>
        <span className=''>{name} </span>
        </p>
        <p>
        <span className='ml-0 '>{position}</span>
        </p>
        </div>
        <div>
        </div>
        </Col>
        </Row>   
        </div>     
        {/* mobi le */}
        <div className='d-md-none'>
        <Row>
          {/* mine */}
        <Col className='d-flex align-items-center' xs={2}>
        <Link to={`/profiles/${profile_id}`}>
        <Avatar src={profile_image} height={45}  />
        </Link>
        </Col>
        <Col xs={8} className="text-center" >
        <p>
        <span className=''>{name}</span>
        </p>
        <p className=''>
        {position} - <span className={`${styles.Small }`}>{updated_at}</span>
        </p>
        </Col>
        <Col xs={2} 
        className="d-flex align-items-center" >
        {is_owner && (
        <PostDropdown
            handleEdit={handleEdit}
            handleDelete={handleDelete}
        />
        ) } 
        </Col>
        </Row>   
        </div> 
        </Col> 
        {/* titles */}
        <Col xs={12} md={6} className="my-0 py-0" >
        <Row className={`${styles.Content3} py-1`}>
            <Col xs={12} 
            className={`text-center py-md-2`} >

            {!number && !location && !character ? (
              <Row>
              <Col>
              <h5 className={` ${styles.Span100 }`}
                style={{ fontStyle: 'italic' }}>
                {title}</h5>
              </Col>
              </Row>
              ) : (
                <Row>
                <Col className='px-0 mx-0' xs={4}>
                {number && <h5 className={`${styles.Span100 }`} style={{ fontWeight: '700' }}>
                  Scene {number} </h5>}
                </Col>
                <Col className='px-0 mx-0' xs={4}>
                {location && <h5 className={`${styles.Span100 }`} style={{ fontWeight: '700' }}> 
                  {location}</h5>}
                </Col>
                <Col className='px-0 mx-0' xs={4}>
                {character && <h5 className={`${styles.Span100 }`} style={{  fontWeight: '700' }}>
                  {character} </h5>}  
                </Col>
                </Row>
              //   <Row className={`${styles.Content3} py-1 pl-2 mr-2 `}>
              //   <Col xs={12} 
              //   className={` ${styles.Content4} text-center py-sm-2`} >
              //   <h5>
              //   {number && <span className='mr-3' style={{ fontWeight: '700' }}>Scene {number} </span>}
              //   {location && <span> {location}</span>}
              //   {character && <span className='ml-3'> {character} </span>} 
              //   </h5>
              //   </Col>
              //  </Row>
                )}
            </Col>
        </Row>
        </Col>
        <Col xs={12} md={3} className="my-2 " >
        <div className='d-none d-md-block'>
        <Row >
        <Col className="pl-0 pr-0" sm={9} >
        <div className={`${styles.Content4} `}>
        <p>
        <span className={ `pl-3 text-center ${styles.Date}`}>{updated_at}</span>
        </p>
        </div>
        </Col>
        <Col sm={3}
        className="d-flex align-items-center px-0 float-right" >
        {is_owner && (
        <PostDropdown
            handleEdit={handleEdit}
            handleDelete={handleDelete}
        />
        ) } 
        </Col>
        </Row>   
        </div>     
        </Col>
        </Row>
        </Card.Body>
        </Card>   
        <div className={`${styles.MoodBack}`}>
        {/* title */}
        <Row className='py-3'>
            <Col xs={12} className='mx-0 px-0 text-center'>
            <h5>{title} </h5>
            </Col >
        </Row>
        <hr className='mt-0'/>
        <Row className='pb-3'>
            <Col xs={{span: 10, offset: 1}}>
                <p className='text-center'>{content} </p>
            </Col>
        </Row>
        <hr className='mt-0 mb-0'/>
        </div>

        {/* images */}
        <div className={`${styles.MoodBackImage}`}>
        <Row className="pt-5" >
            {/* image 1/2 */}
            <Col xs={12} md={6} >
            {image1 && <>
                  <Card className='mx-3 mx-md-5' >
                  <Card.Body className={`text-center px-md-5 `}  >
                    {/* <p className={`${styles.BoldTitle} mb-md-3`}>IMAGE 1</p> */}
                    {/* <p className={`${styles.BoldScene} mb-md-3`}>IMAGE 1</p> */}
                    <div className='px-0 mb-0'>
                        <Image className={styles.ImagesIndex} 
                        src={image1} alt="image" onClick={() => handleClickFull1() } />
                        {/* <iframe title="Image1" src={image1}
                          className={appStyles.iframeIm} alt="Image"  /> */}
                    <div>
                    <p className={`${styles.BoldScene} mb-md-0`}>IMAGE 1</p>
                          <span className={`text-center py-0 my-0 mb-0 pb-0 float-right ${styles.FullsizeText }`}
                        onClick={() => handleClickFull1() }>FULLSIZE</span> 
                    </div>
                    </div>
                  </Card.Body>
                  </Card>
                  </>}
            </Col>  
            <Col xs={12} md={6} className="mt-3 mt-md-0"  >
            {image2 && <>
                  <Card className='mx-3 mx-md-5' >
                  <Card.Body className={`text-center px-md-5 `}  >
                    {/* <p className={`${styles.BoldTitle} mb-md-3`}>
                        IMAGE 2</p> */}
                    <div className='px-0 mb-0'>
                        <Image className={styles.ImagesIndex} 
                        src={image2} alt="image" onClick={() => handleClickFull2() } />
                        {/* <iframe title="Image2" src={image2}
                          className={appStyles.iframeIm} alt="Image"  /> */}
                          <div>
                          <p className={`${styles.BoldScene} mb-md-0`}>IMAGE 2</p>
                          <span className={`text-center py-0 my-0 mb-0 pb-0 float-right ${styles.FullsizeText }`}
                           onClick={() => handleClickFull2() }>FULLSIZE</span> 
                          </div>
                    </div>
                </Card.Body>
                  </Card>
                  </>}
            </Col>
        </Row>
        {/* break */}
        {/* {image3 ? (
        <Row>
        <Col xs={12}>
        <hr className={`d-none d-md-block`}/>
        </Col>
        </Row>
        ) : ("") } */}
        {/* image 3/4 */}
        <Row className="mt-3" >
            <Col xs={12} md={6}>
            {image3 && <> 
                  <Card className='mx-3 mx-md-5' >
                  <Card.Body className={`text-center px-md-5 `}  >
                    {/* <p className={`${styles.BoldTitle} mb-md-3`}>
                        IMAGE 3</p> */}
                    <div className='px-0 mb-0'>
                        <Image className={styles.ImagesIndex} 
                        src={image3} alt="image3" onClick={() => handleClickFull3() } />
                        {/* <iframe title="Image3" src={image3}
                          className={appStyles.iframeIm} alt="Image"  /> */}
                          <div>
                          <p className={`${styles.BoldScene} mb-md-0`}>IMAGE 3</p>
                          <span className={`text-center py-0 my-0 mb-0 pb-0 float-right ${styles.FullsizeText }`}
                           onClick={() => handleClickFull3() }>FULLSIZE</span> 
                          </div>
                          {/* <p className={`text-center mb-0 pb-0 float-right ${styles.FullsizeText }`}
                        onClick={() => handleClickFull3() }>FULLSIZE</p>  */}
                    </div>
                  </Card.Body>
                  </Card>
                  </>}
            </Col>  
            <Col xs={12} md={6} className="mt-3 mt-md-0" >
            {image4 && <>
                  <Card className='mx-3 mx-md-5' >
                  <Card.Body className={`text-center px-md-5 `}  >
                    <p className={`${styles.BoldTitle} mb-md-3`}>
                        IMAGE 4</p>
                    <div className='px-0 mb-0'>
                        <Image className={styles.ImagesIndex} 
                        src={image4} alt="image4" onClick={() => handleClickFull4() } />
                        {/* <iframe title="Image4" src={image4}
                          className={appStyles.iframeIm} alt="Image"  /> */}
                          <p className={`text-center mb-0 pb-0 float-right ${styles.FullsizeText }`}
                        onClick={() => handleClickFull4() }>FULLSIZE</p> 
                    </div>
                  </Card.Body>
                  </Card>
                  </>}
            </Col>
        </Row>
        {/* break */}
        {image5 ? (
        <Row>
        <Col xs={12}>
        <hr className={`mt-0 mb-5 d-none d-md-block`}/>
        </Col>
        </Row>
        ) : ("") }
        {/* image 5 */}
        <Row className="mt-3" >
            <Col className='d-none d-md-block' md={3} ></Col>
            <Col xs={12} md={6}>
            {image5 && <> 
                  <Card className='mx-3 mx-md-5' >
                  <Card.Body className={`text-center px-md-5 `}  >
                    <p className={`${styles.BoldTitle} mb-md-3`}>
                        IMAGE 5</p>
                    <div className='px-0 mb-0'>
                        <Image className={styles.ImagesIndex} 
                        src={image5} alt="image5" onClick={() => handleClickFull5() } />
                        {/* <iframe title="Image5" src={image5}
                          className={appStyles.iframeIm} alt="Image"  /> */}
                          <p className={`text-center mb-0 pb-0 float-right ${styles.FullsizeText }`}
                        onClick={() => handleClickFull5() }>FULLSIZE</p> 
                    </div>
                  </Card.Body>
                  </Card>
                  </>}
            </Col>  
        </Row>
        </div>
  </div>
  )

};

export default Moodboard;
