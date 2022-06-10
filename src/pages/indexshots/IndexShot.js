import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import Card from "react-bootstrap/Card";
import { Link, useHistory } from 'react-router-dom';
import { axiosReq } from '../../api/axiosDefaults';
import { PostDropdown } from '../../components/PostDropdown';
import { useRedirect } from '../../hooks/Redirect';
import styles from "../../styles/Days.module.css";

const IndexShot = (props) => {
    useRedirect("loggedOut")
    const {
        id,
        series_id,
        series_name,
        number,
        content,
        image,
    } = props;
    const history = useHistory();

    const handleEdit = () => {
        history.push(`/indexshots/edit/${id}/`);
        };
    
    const handleDelete = async () => {
    try {
        await axiosReq.delete(`/indexshots/${id}/`);
        history.push(`/home/`);
    } catch (err) {
    }
    };

    return (
        <div>
            <Card className={`text-center `}  >
                <Card.Header className={`pt-2 pb-1 ${styles.Top }`}>
                  <Row >
                    <Col className='mx-0 px-0' xs={1}></Col>
                    <Link to={`/indexshots/fullsize/${id}`}>
                    <Col xs={10} className='mx-0 px-0 text-center'>
                    <h5 className={` ${styles.Titlelist }`}>{number}
                    </h5>
                    </Col >
                    </Link>
                    <Col xs={1} className='text-center mx-0 px-0'>
                    <PostDropdown
                            handleEdit={handleEdit}
                            handleDelete={handleDelete}
                        />
                    </Col>
                  </Row>
                </Card.Header>
                <Card.Body >
                    <Row>
                    <Col className='text-center mt-2' xs={12}>
                    {image && <> 
                    <div className='px-1 mb-3'>
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
            </Card>
        </div>
    )
}
export default IndexShot