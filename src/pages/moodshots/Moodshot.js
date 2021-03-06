import React from 'react'
import Image from 'react-bootstrap/Image'
import { useHistory } from 'react-router-dom';
import { axiosReq } from '../../api/axiosDefaults';
import { useRedirect } from '../../hooks/Redirect';
import styles from "../../styles/Moodshots.module.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { PostDropdown } from '../../components/PostDropdown';
import Avatar from '../../components/Avatar';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import btnStyles from "../../styles/Button.module.css";
import TopBox from '../../components/TopBox';

const Moodshot = (props) => {
    useRedirect("loggedOut");

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
        <TopBox title="Moodshot" />   
        <Button
            className={`${btnStyles.Button} ${btnStyles.Back} my-2`}
            onClick={() => history.goBack()}
        >
            Back
        </Button>     
        <Row className={`${styles.MoodTop} pt-2 mx-2 `}>
            <Col xs={12} md={7} 
            className="" >
            <Row className='d-flex align-items-center'>
            <Col xs={2} className="px-0" >
            <Link to={`/profiles/${profile_id}`}>
                <Avatar src={profile_image} height={45}  />
                </Link>
            </Col>
            <Col xs={6} >
            <p style={{ fontWeight: '700', textTransform: 'capitalize'}}
                className=''>
                {name} <span className='d-none d-sm-inline-block' >{position} </span></p>
            <p className='d-sm-none' >{position} </p>
            </Col>
            <Col className='d-flex align-items-center' xs={4} >
            <span className=''>{updated_at}</span>
                {is_owner && (
                <PostDropdown
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                />
                ) } 
            </Col>
            </Row>
            </Col>
            <Col xs={12} md={5} className='mx-0 px-0 d-flex align-items-center justify-content-center'>
            <p className={`mb-0 ${styles.Titlelist }`}>
                 {number && <span>Scene {number} </span> } 
                 {location && <span> - {location} </span> }
                 {character && <span> - {character} </span> }
            </p>
            </Col>
        </Row>
        <hr className='my-1'/>
      <Row className='p-3'>
            <Col xs={12} className='mx-0 px-0 text-center'>
            <h3>{title && <span> {title} </span> }</h3>
            </Col >
        </Row>
        <Row>
            <Col xs={10}>
                <p>{content} </p>
            </Col>
        </Row>
        <Row>
            {/* image 1/2 */}
            <Col xs={12} md={6} >
                {image1 && <> 
                    <Image src={image1} alt="image1" height="200"  />
                    </>
                    }
            </Col>  
            <Col xs={12} md={6}>
            {image2 && <> 
                    <Image src={image2} alt="image2" />
                    </>
                    }
            </Col>
        </Row>
        {/* image 3/4 */}
        <Row>
            <Col xs={12} md={6}>
                {image3 && <> 
                    <Image src={image3} alt="image3" />
                    </>
                    }
            </Col>  
            <Col xs={12} md={6}>
            {image4 && <> 
                    <Image src={image4} alt="image4" />
                    </>
                    }
            </Col>
        </Row>
        {/* image 5 */}
        <Row>
            <Col className='d-none d-md-block' md={3} ></Col>
            <Col xs={12} md={6}>
                {image5 && <> 
                    <Image src={image5} alt="image5" />
                    </>
                    }
            </Col>  
        </Row>
  </div>
  )

};

export default Moodshot;
