import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import Card from "react-bootstrap/Card";
import { Link, useHistory } from 'react-router-dom';
import { axiosReq } from '../../api/axiosDefaults';
import { PostDropdown } from '../../components/PostDropdown';
import { useRedirect } from '../../hooks/Redirect';
import styles from "../../styles/Indexes.module.css";

const IndexShot = (props) => {
    useRedirect("loggedOut")
    const {
        id,
        series_id,
        series_name,
        number,
        content,
        image,
        setHasOrder,
        setShowEdit,
    } = props;
    const history = useHistory();

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
        <div>
            <Card className={`text-center p-0 `}  >
                <Card.Header className={`py-0 ${styles.Top }`}>
                {/* className={` ${styles.Titledetail }`} */}
                  <Row >
                    <Col className='mx-0 px-0' xs={1}></Col>
                    <Col xs={10} className='mx-0 px-0 
                    d-flex align-items-center justify-content-center'>
                    <h5 className={` ${styles.Titlelist }`}>{number}
                    </h5>
                    </Col >
                    <Col xs={1} className='text-center mx-0 px-0 py-0'>
                    <PostDropdown
                            handleEdit={handleEdit}
                            handleDelete={handleDelete}
                        />
                    </Col>
                  </Row>
                </Card.Header>
                <Link to={`/indexshots/fullsize/${id}`}>
                <Card.Body className={`text-center p-0 `}  >
                    <Row>
                    <Col className='text-center mt-0' xs={12}>
                    {image && <> 
                    <div className='px-0 mb-0'>
                        <Image className={styles.Images} 
                        src={image} alt="image" height="200"  />
                        </div>
                        </>
                    }
                    {content &&  <> 
                    <p>{content} </p>
                    </>}
                </Col>
                    </Row>
                </Card.Body>
                </Link>
            </Card>
        </div>
    )
}
export default IndexShot