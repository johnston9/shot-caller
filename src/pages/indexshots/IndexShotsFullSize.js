import React, { useEffect, useState } from 'react';
import { Button, Col, Image, Row } from 'react-bootstrap';
import Card from "react-bootstrap/Card";
import { useParams, useHistory } from 'react-router-dom';
import { axiosReq } from '../../api/axiosDefaults';
import { useRedirect } from '../../hooks/Redirect';
import styles from "../../styles/Indexes.module.css";
import btnStyles from "../../styles/Button.module.css";

const IndexShotsFullSize = () => {
    useRedirect("loggedOut");
    const [shot, setShot] = useState({results: [] });
    // eslint-disable-next-line
    const [error, setError] = useState({});
    const { id } = useParams();
    const {
        number,
        content,
        image,
    } = shot;
    const history = useHistory();

    useEffect(() => {
        const fetchshot = async () => {
          try {
            const { data } = await axiosReq.get(`/indexshots/${id}`);
            setShot(data);
          } catch(err) {
            setError(err)
            console.log(err);
          }
        }
        fetchshot();   
      }, [id])

    return (
        <div>
            <Button
                className={`${btnStyles.Button} ${btnStyles.Blue} my-1`}
                onClick={() => history.goBack()}
                >
                Back
            </Button>
            <Card className={`text-center `}  >
                <Card.Header className={`pt-2 pb-1 ${styles.Top }`}>
                  <Row >
                    <Col className='mx-0 px-0' xs={1}></Col>
                    <Col xs={10} className='mx-0 px-0 text-center'>
                    <h5 className={` ${styles.Titlelist }`}>{number}
                    </h5>
                    </Col >
                    <Col xs={1} className='text-center mx-0 px-0'>
                    {/* <PostDropdown
                            handleEdit={handleEdit}
                            handleDelete={handleDelete}
                        /> */}
                    </Col>
                  </Row>
                  </Card.Header>
                  <Card.Body >
                    <Row>
                    <Col className='text-center mt-2' xs={12}>
                    {image && <> 
                    <div className='px-1 mb-3'>
                        <Image className={styles.ImagesFull} 
                        src={image} alt="image" height="500"  />
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

export default IndexShotsFullSize