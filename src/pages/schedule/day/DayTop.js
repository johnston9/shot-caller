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

const DayTop = (props) => {
    const {
        id,
        day,
        date,
        daysScenes,
    } = props;

    const history = useHistory();

    const handleEdit = () => {
        history.push(`/edit/days/${id}/`);
        };
    
    const handleDelete = async () => {
    try {
        await axiosReq.delete(`/days/${id}/`);
        history.push(`/days/`);
    } catch (err) {
    }
    };

    return (
        <div>
            <Card className={`text-center `}  >
                <Card.Header className={`pt-2 pb-1 ${styles.Top }`}>
                  <Row >
                    <Col className='mx-0 px-0' xs={1}></Col>
                    <Col xs={10} className='mx-0 px-0 text-center d-flex align-items-center justify-content-center'>
                    <p className={` ${styles.Titlelist }`}>
                        Day {day} - {date}
                    </p>
                    </Col >
                    <Col xs={1} className='text-center mx-0 px-0'>
                        <PostDropdown
                                handleEdit={handleEdit}
                                handleDelete={handleDelete}
                            />
                    </Col>
                  </Row>
                </Card.Header>
                <Card.Body className={`p-1 ${styles.Bottom }`} >
                    <Link to={`/day/${id}`}>
                    <Col >  
                        <div className={` ${styles.SceneLoc }`}>  
                        {/* filter the scenes for that day */}
                        {daysScenes.results.length ? (
                            daysScenes.results.map((scene) => (
                                scene.day_id === id ? (
                                    <span className={` ${styles.Titledetail }`}>{scene.number} - {scene.location}, </span>
                                )  : ("")
                            ))) : ("")}
                        </div>
                        </Col>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default DayTop
