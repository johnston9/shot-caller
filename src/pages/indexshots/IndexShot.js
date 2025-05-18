/* Component in IndexShots to display each the IndexShot 
 * Contains a link to IndexShotsFullSize to view the Image full size 
 * Contains the IndexShotEdit component */ 
import React, { useState } from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import Card from "react-bootstrap/Card";
import { useHistory, Link } from 'react-router-dom';
import { axiosReq } from '../../api/axiosDefaults';
import { PostDropdown } from '../../components/PostDropdown';
import styles from "../../styles/Indexes.module.css";
import IndexShotEdit from './IndexShotEdit';
import { useSetImageContext } from '../../contexts/ImageContext';

const IndexShot = (props) => {
    const [showEdit, setShowEdit] = useState(false);
    const history = useHistory();
    const setImage = useSetImageContext();
    const {
        ser_id,
        id,
        number,
        content,
        image,
        shot,
        setHasOrder,
        setIndexShots,
    } = props;

    const handleClickFull = () => {
        console.log(image);
        console.log("full");
        setImage(image); 
        history.push(`/fullshot`);  
      }; 

    const handleEdit = () => {
        setShowEdit(true);
        };
    
    const handleDelete = async () => {
    try {
        await axiosReq.delete(`/indexshots/${id}/`);
        setHasOrder(true);
    } catch (err) {
    }
    };

    return (
        <div className='mt-3'>
            <Card className={`text-center p-0`}>
                <Card.Header className={`py-0 ${styles.TopCard }`}>
                  <Row >
                    <Col className='mx-0 px-0 text-center' xs={1}></Col>
                    <Col xs={10} className='mx-0 px-0 
                    d-flex align-items-center justify-content-center'>
                    <p className={` ${styles.Titlelist }`}>{number}
                    </p>
                    </Col >
                    <Col xs={1} className='text-center mx-0 px-0 py-0'>
                    <PostDropdown
                            handleEdit={handleEdit}
                            handleDelete={handleDelete}
                        />
                    </Col>
                  </Row>
                </Card.Header>
                {/* onClick={() => setShowFull(showFull => !showFull)} */}
                {/* onClick={() => handleClickFull() } */}
                {/* <Link to={`/indexshots/fullsize/${id}`}> */}
                <Card.Body onClick={() => handleClickFull() } className={`text-center p-0 `}  >
                    <Row>
                    <Col className='text-center mt-0' xs={12}>
                    {image && <> 
                    <div className='px-0 mb-0'>
                        <Image className={styles.ImagesIndex} 
                        src={image} alt="image" height="250"  />
                        </div>
                    </>}
                </Col>
                </Row>
                <Row >
                <Col xs={12} className='mx-0 px-0 '>
                <div className={`py-2 px-3 ${styles.TopCard2 }`}>
                <p className={` ${styles.Titlelist }`}>{content}</p>
                </div>
                </Col >
                </Row>
                </Card.Body>
                {/* </Link> */}
            </Card>
            {!showEdit ?("") : (
            <IndexShotEdit
                ser_id={ser_id}
                setIndexShots={setIndexShots}
                shot={shot}
                id={id}
                setShowEdit={setShowEdit} 
            setHasOrder={setHasOrder} /> ) }
        </div>
    )
}
export default IndexShot