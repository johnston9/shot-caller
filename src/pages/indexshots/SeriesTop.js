import React, { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom';
import { axiosReq } from '../../api/axiosDefaults';
import { PostDropdown } from '../../components/PostDropdown';
import { useRedirect } from '../../hooks/Redirect';
import styles from "../../styles/Characters.module.css";
import btnStyles from "../../styles/Button.module.css";
import Content from './Content'; 
import SeriesEditForm from './SeriesEditForm';

const SeriesTop = (props) => {
    useRedirect("loggedOut");
    const [showEdit, setShowEdit] = useState(false);
    const [showContent, setShowContent] = useState(false);
    const {
        id,
        name,
        content,
        seri,
        setHasOrder,
        setSeries,
    } = props;

    const handleEdit = () => {
        setShowEdit(true);
        };
    
    const handleDelete = async () => {
    try {
        await axiosReq.delete(`/series/${id}/`);
        setHasOrder(true);
    } catch (err) {
    }
    };

    return (
        <div>
            <Card className={`text-center `}  >
                <Card.Header className={`pt-2 pb-1 ${styles.Top }`}>
                  <Row className='d-flex align-items-center'>
                    <Col className='mx-0 px-0' xs={1}>
                    <Button
                    className={`float-right py-0  ${btnStyles.White} ${btnStyles.Button}`}
                    onClick={() => setShowContent(showContent => !showContent)} >I
                    </Button>
                    </Col>
                    <Col xs={10} className='mx-0 text-center'>
                    <Link to={`/indexshots/${id}`}>
                    <div>
                    <h5 style={{color: "white"}}
                    className={` ${styles.Titlelist }`}>{name}
                    </h5>
                    </div>
                    </Link>
                    </Col >
                    <Col xs={1} className='text-center mx-0 px-0'>
                    <PostDropdown
                            handleEdit={handleEdit}
                            handleDelete={handleDelete}
                        />
                    </Col>
                  </Row>
                  <Row>
                      <Col className='px-0'>
                      {!showContent ? (
                        ""
                            ) : (
                                <Content content={content}  /> 
                                ) } 
                      </Col>
                  </Row>
                  </Card.Header>
            </Card>
                  {!showEdit ?("") : (
                    <SeriesEditForm
                            setSeries= {setSeries}
                            seri={seri}
                            name1={name}
                            id={id}
                            setShowEdit={setShowEdit} 
                            setHasOrder={setHasOrder} /> ) }
        </div>
    )
}

export default SeriesTop