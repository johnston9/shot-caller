import React from 'react'
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useRedirect } from '../../hooks/Redirect';
import styles from "../../styles/DayPage.module.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { PostDropdown } from '../../components/PostDropdown';

const DayPageTop = (props) => {
    useRedirect("loggedOut")
    const {
        id,
        day,
        date,
        scene1,
        scene2,
        scene3,
        scene4,
        scene5,
        scene6,
        scene7,
        scene8,
        scene9,
        scene10,
        scene11,
        scene12,
        xtra_scenes,
        location1,
        crewcall,
        dayScenes
    } = props;
    const history = useHistory();

    const handleEditDayTop = () => { 
        history.push(`/edit/days/${id}/`);
        };

    const handleDeleteDayTop = () => {
        history.push(`/days/`);
        };

    return (
        <div>
            <div className={`p-2 mt-1 ${styles.Header }`}>
            <Row className='d-flex align-items-center'>
            <Col className='mx-0 px-0' xs={1}></Col>
            <Col xs={10} className='mx-0 px-0 text-center'>
            <h3>Day Info</h3>
            </Col>
            <Col xs={1} className='text-center mx-0 px-0'>
            <PostDropdown
                    handleEdit={handleEditDayTop}
                    handleDelete={handleDeleteDayTop}
                />
            </Col>
            </Row>
            {/* <h5 className={` ${styles.Titlelist }`}>Day {day} - {date}</h5> */}
            <p className={` mb-0 py-1 ${styles.SubTitle }`}></p>
            {/* <h5 className={`${styles.Bold }`} className='text-center'>Scenes</h5>
            <Row className='text-center'>
                <Col xs={{span: 10, offset: 1 }}  md={{span: 6, offset: 3 }}>                   
                {dayScenes.results.length ? (
                    dayScenes.results.map((scene, index) => (
                        <span>{scene.number} - {scene.location} </span>
                    ))) : ("")}
                </Col>
            </Row>  */}
                {/* Scenes:  */}
            {/* <p className={`${styles.Bold }`}>
            <span className={`${styles.Bold }`} >SCENES: </span>
            {scene1 && <span>{scene1}, </span>}
            {scene2 && <span>{scene2}, </span>}
            {scene3 && <span>{scene3}, </span>}
            {scene4 && <span>{scene4}, </span>}
            {scene5 && <span>{scene5}, </span>}
            {scene6 && <span>{scene6}, </span>}
            {scene7 && <span>{scene7}, </span>}
            {scene8 && <span>{scene8}, </span>}
            {scene9 && <span>{scene9}, </span>}
            {scene10 && <span>{scene10}, </span>}
            {scene11 && <span>{scene11}, </span>}
            {scene12 && <span>{scene12}, </span>}
            {xtra_scenes && <span>{xtra_scenes} </span>}
            </p>   */}
            <h5 className={`${styles.Bold }`} >UNIT CALL: {crewcall} {location1}  </h5>               
        </div>
        </div>
    )
}

export default DayPageTop
