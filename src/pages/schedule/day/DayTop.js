/* Component in the ScheduleDays page to display each day's data
   and the number and location of each of that day's schedule scenes
 * When clicked on it opens that Day's DayPage */
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Card from "react-bootstrap/Card";
import { Link, useHistory } from 'react-router-dom';
import { axiosReq } from '../../../api/axiosDefaults';
import { PostDropdown } from '../../../components/PostDropdown';
import styles from "../../../styles/Days.module.css";
import { toast } from 'react-toastify';

const DayTop = (props) => {
    const {
        id,
        day,
        date,
        daysScenes,
        fetchDays,
    } = props;

    const history = useHistory();

    const handleEdit = () => {
        history.push(`/edit/days/${id}/`);
        };
    
    const handleDelete = async () => {
    try {
        await axiosReq.delete(`/days/${id}/`);
        toast.success(`Day Deleted`);
        fetchDays();
    } catch (err) {
    }
    };

    return (
        <div>
            <Card className={`text-center `}  >
                <Card.Header className={`py-1 ${styles.Top }`}>
                  <Row className='d-flex align-items-center justify-content-center'>
                    <Col className='mx-0 px-0' xs={1}></Col>
                    <Col xs={10} className='mx-0 px-0'>
                    <p className={` ${styles.Titlelist }`}>
                        Day {day} - {date}
                    </p>
                    </Col >
                    <Col xs={1} className={`mx-0 px-0`}>
                    <div className={`${styles.Icon}`} >
                        <PostDropdown
                                handleEdit={handleEdit}
                                handleDelete={handleDelete}
                            />
                    </div>
                    </Col>
                  </Row>
                </Card.Header>
                <Card.Body className={`p-1 ${styles.Bottom }`} >
                    <Link to={`/day/${id}`}>
                        <div className={` ${styles.SceneLoc }`}>  
                        {/* filter the scenes for that day */}
                        {daysScenes.results.length ? (
                            daysScenes.results.map((scene) => (
                                scene.day_id === id ? (
                                    <span className={` ${styles.Titledetail }`}> {scene.number} - {scene.location},</span>
                                )  : ("")
                            ))) : ("")}
                        </div>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default DayTop
