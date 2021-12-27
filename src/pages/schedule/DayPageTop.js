import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { axiosReq, axiosRes } from '../../api/axiosDefaults';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import { useRedirect } from '../../hooks/Redirect';
import styles from "../../styles/DayPage.module.css";
import btnStyles from "../../styles/Button.module.css";
import Camera from "../../assets/dep17s.png";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { DeptDropdown, PostDropdown } from '../../components/PostDropdown';

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
        location1,
        location2,
        location3,
        location4,
        location5,
    } = props;
    const currentUser = useCurrentUser();
    const history = useHistory();

    const handleEditDayTop = () => { 
        history.push(`/edit/days/${id}/`);
        };

    const handleDeleteDayTop = () => {
        history.push(`/days/`);
        };

    return (
        <div>
            <Card className={` ${styles.DayPage}`}>
                <Card.Header className={`pt-2 pb-1 ${styles.Header }`}>
                  <Row className='d-flex align-items-center'>
                    <Col className='mx-0 px-0' xs={1}></Col>
                    <Col xs={10} className='mx-0 px-0 text-center'>
                    <h2 className={` ${styles.Titlelist }`}>Day {day} - <span className={styles.Italics }> "{date}" </span>
                    </h2>
                    <p>day Id {id} </p>
                    </Col >
                    <Col xs={1} className='text-center mx-0 px-0'>
                    <PostDropdown
                            handleEdit={handleEditDayTop}
                            handleDelete={handleDeleteDayTop}
                        />
                    </Col>
                  </Row>
                  </Card.Header>
                  <div className="text-center mt-2">
                  <h4 className={` ${styles.Titledetail }`}>Scenes</h4>
                  {/* Scenes:  */}
                  <Card.Text style={{ fontWeight: '700' }} className="mb-1">
                        {scene1} {scene2} {scene3} {scene4} {scene5}  {scene6}
                         {scene7} {scene8} {scene9} {scene10} {scene11} {scene12}
                  </Card.Text>
                  {/* Location:  */}
                  <h4>Locations</h4>
                  <h5 style={{ textTransform: 'uppercase'}}>
                  {location1} {location2} {location3} {location4} {location5} </h5>
                  </div>
            </Card>           
        </div>
    )
}

export default DayPageTop
