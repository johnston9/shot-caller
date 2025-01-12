/* Component rendered on the SeriesPage to display the 
   cover info for each Series of IndexShots
 * When clicked on it opens that Series's IndexShots page
 * Contains the SeriesEditForm */
import React, { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom';
import { axiosReq } from '../../api/axiosDefaults';
import { PostDropdown } from '../../components/PostDropdown';
import styles from "../../styles/Indexes.module.css";
import btnStyles from "../../styles/Button.module.css";
import Content from './Content'; 
import SeriesEditForm from './SeriesEditForm';

const SeriesTop = (props) => {
    const [showEdit, setShowEdit] = useState(false);
    const [showContent, setShowContent] = useState(false);
    const {
        id,
        name,
        content,
        seri,
        setHasOrder,
        fetchseries,
        setSeries,
    } = props;

    const handleEdit = () => {
        setShowEdit(true);
        };
    
    const handleDelete = async () => {
    try {
        await axiosReq.delete(`/series/${id}/`);
        // setHasOrder(true);
        fetchseries();
    } catch (err) {
    }
    };

    return (
        <div>
            <Card className={`text-center `}  >
                <Card.Header className={`py-0 ${styles.TopSeries}`}>
                  <Row className='d-flex align-items-center'>
                    <Col className='mx-0 px-0' xs={1}>
                    <Button
                    className={`float-right py-0  ${btnStyles.White} ${btnStyles.Button}`}
                    onClick={() => setShowContent(showContent => !showContent)} >I
                    </Button>
                    </Col>
                    <Col xs={10} className='mx-0 text-center px-0'>
                    <Link to={`/indexshots/${id}`}>
                    <div>
                    <h5 className={` ${styles.Titlelist }`}>{name}
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