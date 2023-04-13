/* Component in MoodboardPage to display the Moodboard data 
 * The word moodshots is used through the app in the urls for moodboards */
import React from 'react'
import Image from 'react-bootstrap/Image'
import { useHistory } from 'react-router-dom';
import { axiosReq } from '../../api/axiosDefaults';
import { useRedirect } from '../../hooks/Redirect';
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

const Moodboard = (props) => {

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
        {/* card */}
        <Card className={ `mt-1 mb-0 ${styles.MoodTop}`}>
        <Card.Body className={`py-0 px-0 ${styles.MoodTop}`}>
        <Row className={`d-flex align-items-center pt-0 pb-0 my-0 pl-3`}>
        <Col xs={12} sm={3} className="my-1 " >
            <div className='d-none d-sm-block'>
            <Row >
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
            {/* mobile */}
            <div className='d-sm-none'>
            <Row>
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
            {position} - {updated_at}
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
            <Col xs={12} sm={3} 
                className="px-0 d-flex align-items-center justify-content-center"> 
            </Col>
            </Row>   
            </div> 
        </Col> 
        <Col xs={12} sm={6} className="my-0 my-sm-2" >
        <Row className={`${styles.Content3} py-1 pl-2 mr-2 `}>
            <Col xs={12} 
            className={` ${styles.Content4} text-center py-sm-2`} >
            <Row>
            <Col className='px-0 mx-0' xs={4}>
            {number && <h5 style={{ fontWeight: '700' }}>Scene {number} </h5>}
            </Col>
            <Col className='px-0 mx-0' xs={4}>{location && <h5> {location}</h5>}
            </Col>
            <Col className='px-0 mx-0' xs={4}>{character && 
                    <h5 style={{  fontWeight: '700' }}>
                    {character} </h5>}  
            </Col>
            </Row>
            </Col>
        </Row>
        {/* <Row className={`${styles.Content3} py-1 pl-2 mr-2 `}>
                <Col xs={12} 
                className={` ${styles.Content4} text-center py-sm-2`} >
                <h5>
                {number && <span className='mr-3' style={{ fontWeight: '700' }}>Scene {number} </span>}
                {location && <span> {location}</span>}
                {character && <span className='ml-3'> {character} </span>} 
                </h5>
                </Col>
        </Row> */}
        </Col>
        <Col xs={12} sm={3} className="my-2 " >
        <div className='d-none d-sm-block'>
        <Row >
        <Col className="pl-0 pr-0" sm={9} >
        <div className={`${styles.Content4} `}>
        <p>
        <span className={ ` text-center ${styles.Date}`}>{updated_at}</span>
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
        {/* title */}
        <Row className='p-3'>
            <Col xs={12} className='mx-0 px-0 text-center'>
            <h3>{title && <span> {title} </span> }</h3>
            </Col >
        </Row>
        <Row>
            <Col xs={{span: 10, offset: 1}}>
                <p className='text-center mb-3'>{content} </p>
            </Col>
        </Row>
        <Row className="mt-3" >
            {/* image 1/2 */}
            <Col xs={12} md={6} >
                {image1 && <> 
                    <Image src={image1} alt="image1" 
                      className={styles.ImagesLand} />
                    </>
                    }
            </Col>  
            <Col xs={12} md={6} className="mt-3 mt-md-0"  >
            {image2 && <> 
                    <Image src={image2} alt="image2"
                      className={styles.ImagesLand} />
                    </>
                    }
            </Col>
        </Row>
        {/* image 3/4 */}
        <Row className="mt-3" >
            <Col xs={12} md={6}>
                {image3 && <> 
                    <Image src={image3} alt="image3"
                      className={styles.ImagesLand} />
                    </>
                    }
            </Col>  
            <Col xs={12} md={6} className="mt-3 mt-md-0" >
            {image4 && <> 
                    <Image src={image4} alt="image4"
                      className={styles.ImagesLand} />
                    </>
                    }
            </Col>
        </Row>
        {/* image 5 */}
        <Row className="mt-3" >
            <Col className='d-none d-md-block' md={3} ></Col>
            <Col xs={12} md={6}>
                {image5 && <> 
                    <Image src={image5} alt="image5"
                      className={styles.ImagesLand} />
                    </>
                    }
            </Col>  
        </Row>
  </div>
  )

};

export default Moodboard;
