import React, { useEffect, useState } from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../../styles/ScheduleCreate.module.css";
import btnStyles from "../../../styles/Button.module.css";
import { axiosReq } from '../../../api/axiosDefaults';
import { useRedirect } from '../../../hooks/Redirect';
import { Button } from 'react-bootstrap';
import { PostDropdown } from '../../../components/PostDropdown';
import ShotInfo from './ShotInfo';
import ShotImage from './ShotImage';
import ShotListEdit from './ShotListEdit';

const Shot = (props) => {
    useRedirect("loggedOut");
    const [showInfo, setShowInfo] = useState(false);
    const [showImg, setShowImg] = useState(false);
    const [showEditForm, setShowEditForm] = useState(false);
    
    const [shotNew, setShotNew] = useState({
        id: "",
        scene_id: "",
        scene_number: "",
        shot_number: "",
        size: "",
        angle: "",
        movement: "",
        screen_time: "",
        camera: "",
        lens: "",
        script_length: "",
        description: "",
        equipment: "",
        script_ref: "",
        storyboard_refs: "",
        fx: "",
        focus_pulls: "",
        lighting: "",
        audio: "",
        image: "",
    });

    const {shotAll, handleMount, setAddShot, style } = props
    const { id,
            scene_id,
            scene_number,
            shot_number,
            size,
            angle,
            movement,
            screen_time,
            camera,
            lens,
            script_length,
            script_ref,
            storyboard_refs,
            description,
            equipment,
            fx,
            focus_pulls,
            lighting,
            audio,
            image, } = shotAll

    useEffect(() => {
        setShotNew({
            id,
            scene_id,
            scene_number,
            shot_number,
            size,
            angle,
            movement,
            screen_time,
            camera,
            lens,
            script_length,
            script_ref,
            storyboard_refs,
            description,
            equipment,
            fx,
            focus_pulls,
            lighting,
            audio,
            image,
            })
            // eslint-disable-next-line
        }, [])

    const handleDelete = async () => {
    try {
        await axiosReq.delete(`/shotlists/${id}/`);
        handleMount();
    } catch (err) {
        // console.log(err);
    }
    };

    return (
        <div style={style}>
            {/* medium*/}
            <div className='d-none d-md-block'>
            <Row  >
                <Col className={ `pl-2 ${styles.TitleBox2}`} xs={1} md={1}>
                    <Button onClick={() => setShowInfo(showInfo => !showInfo)} 
                        className={`ml-3 ${btnStyles.Button} ${btnStyles.Blue}`}>
                        I
                    </Button>
                </Col>
                <Col className={`${styles.TitleBox2}`} xs={1} md={1}>
                    <p className='mb-0'>{shot_number}</p>
                </Col>
                <Col className={`px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                    <p className='mb-0'>{size}</p>
                </Col>
                <Col className={`px-0 ${styles.TitleBox2}`} xs={3} md={3}>
                    <p className='mb-0'>{description}</p>
                </Col>
                <Col className={`px-0 ${styles.TitleBox2}`} xs={2} md={2}>
                    <p className='mb-0'>{angle} </p>
                </Col>
                <Col className={`px-0 ${styles.TitleBox2}`} xs={2} md={2}>
                    <p >{movement}</p>
                </Col>
                <Col className={`px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                    <Button onClick={() => setShowImg(showImg => !showImg)} 
                        className={`${btnStyles.Button} ${btnStyles.Blue}`}>
                        I
                    </Button>
                </Col>
                {/* edit */}
                <Col className={`px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                    <PostDropdown
                        handleEdit={() => setShowEditForm(true)}
                        handleDelete={handleDelete}
                    />
                </Col>
            </Row>
            </div>
            {/* mobile*/}
            <div className='d-block d-md-none'>
            <Row className='px-2' >
                <Col className={ `pl-1 ${styles.TitleBox2}`} xs={1} md={1}>
                    <Button onClick={() => setShowInfo(showInfo => !showInfo)} 
                        className={`pr-2 ${btnStyles.Button} ${btnStyles.Blue}`}>
                        I
                    </Button>
                </Col>
                <Col className={`${styles.TitleBox2}`} xs={1} md={1}>
                    <p className='mb-0 pl-1'>{shot_number}</p>
                </Col>
                <Col className={`px-0 ${styles.TitleBox2}`} xs={2} md={1}>
                    <p className='mb-0'>{size}</p>
                </Col>
                <Col className={`px-0 ${styles.TitleBox2}`} xs={3} md={3}>
                    <p className='mb-0'>{description}</p>
                </Col>
                <Col className={`px-0 ${styles.TitleBox2}`} xs={2} md={2}>
                    <p className='mb-0'>{angle} </p>
                </Col>
                <Col className={`px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                    <Button onClick={() => setShowImg(showImg => !showImg)} 
                        className={`${btnStyles.Button} ${btnStyles.Blue}`}>
                        I
                    </Button>
                </Col>
                {/* edit */}
                <Col className={`text-center`} xs={1} md={1}>
                    <PostDropdown
                        handleEdit={() => setShowEditForm(true)}
                        handleDelete={handleDelete}
                    />
                </Col>
            </Row>
            </div>
            <Row>
                <Col>
                    {!showInfo ?("") : (                       
                    <ShotInfo {...shotNew}/> 
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
            <Row>
                <Col>
                    {showEditForm ? (
                        <ShotListEdit
                            shotNew={shotNew}
                            shot_number={shot_number}
                            setShotNew={setShotNew}
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
        </div>
    )
}

export default Shot
