import React from 'react'
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
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
            <div className={`p-2 ${styles.Header }`}>
            <Row className='d-flex align-items-center'>
            <Col className='mx-0 px-0' xs={1}></Col>
            <Col xs={10} className='mx-0 px-0 text-center'>
            <h5 className={` ${styles.Titlelist }`}>Day {day} - {date}
            </h5>
            </Col >
            <Col xs={1} className='text-center mx-0 px-0'>
            <PostDropdown
                    handleEdit={handleEditDayTop}
                    handleDelete={handleDeleteDayTop}
                />
            </Col>
            </Row>
            <p className={` mb-0 py-1 ${styles.SubTitle }`}></p>
            <div className="ml-2 mt-2 text-center">
                {/* Scenes:  */}
            <p className={`${styles.Bold }`}>
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
            </p>  
            <p className={`${styles.Bold }`}>UNIT CALL - {crewcall} {location1} </p>                 
            </div>     
        </div>
        </div>
    )
}

export default DayPageTop
