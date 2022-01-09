import React, { useEffect, useState } from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import styles from "../../styles/ScheduleCreate.module.css";
import btnStyles from "../../styles/Button.module.css";
import { axiosReq } from '../../api/axiosDefaults';
import { useHistory } from 'react-router';
import { useRedirect } from '../../hooks/Redirect';
import appStyles from "../../App.module.css";
import { Button } from 'react-bootstrap';
import TopBox from '../../components/TopBox';
import { PostDropdown } from '../../components/PostDropdown';
import ShotInfo from './ShotInfo';
import ShotImage from './ShotImage';
import ShotListEdit from './ShotListEdit';

const Shot = (props) => {
    useRedirect("loggedOut");
    const [showInfo, setShowInfo] = useState(false);
    const [showImg, setShowImg] = useState(false);
    const history = useHistory();
    const [showEditForm, setShowEditForm] = useState(false);
    const {shotAll, id, scene_id, shot_number, size, description, angle,
        equipment, movement, handleMount, image, setAddShot, setShotlist } = props

    const handleDelete = async () => {
    try {
        await axiosReq.delete(`/shotlists/${id}/`);
        handleMount();
    } catch (err) {
        // console.log(err);
    }
    };

    return (
        <div>
            {/* titles */}    
            <Row>
                <Col>
                    {showEditForm ? (
                        <ShotListEdit
                            setShotlist={setShotlist}
                            setAddShot={setAddShot}
                            id={id}
                            handleMount={handleMount}
                            setShowEditForm={setShowEditForm}
                        />
                    ) : (
                        ""
                    )}
                </Col>
                </Row>                  
            <Row  >
                <Col className={`mx-0 px-0 text-center ${styles.TitleBox2}`} xs={1} md={1}>
                    <Button onClick={() => setShowInfo(showInfo => !showInfo)} 
                        className={`${btnStyles.Button} ${btnStyles.Bright}`}>
                        I
                    </Button>
                </Col>
                <Col className={`mx-0 px-0 text-center ${styles.TitleBox2}`} xs={1} md={1}>
                    <p className='mb-0'>{shot_number}</p>
                </Col>
                <Col className={` ${styles.TitleBox2}`} xs={1} md={1}>
                    <p className='mb-0'>{size}</p>
                </Col>
                <Col className={`mx-0 px-0 text-center ${styles.TitleBox2}`} xs={4} md={4}>
                    <p className='mb-0'>{description}</p>
                </Col>
                <Col className={`mx-0 px-0 text-center ${styles.TitleBox2}`} xs={1} md={1}>
                    <p className='mb-0'>{angle}{scene_id} </p>
                </Col>
                <Col className={`mx-0 px-0 text-center ${styles.TitleBox2}`} xs={2} md={2}>
                    <p >{movement}</p>
                </Col>
                <Col className={`pl-0 ${styles.TitleBox2}`} xs={1} md={1}>
                    <Button onClick={() => setShowImg(showImg => !showImg)} 
                        className={`${btnStyles.Button} ${btnStyles.Bright}`}>
                        I
                    </Button>
                </Col>
                {/* edit */}
                <Col className={` ${styles.TitleBox2}`} xs={1} md={1}>
                    <PostDropdown
                        handleEdit={() => setShowEditForm(true)}
                        handleDelete={handleDelete}
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    {!showInfo ?("") : (                       
                    <ShotInfo {...shotAll}/> 
                    ) }
                </Col>
            </Row>
            <Row>
                <Col>
                    {!showImg ?("") : (                       
                    <ShotImage image={image} /> 
                    ) }
                </Col>
            </Row>
        </div>
    )
}

export default Shot
