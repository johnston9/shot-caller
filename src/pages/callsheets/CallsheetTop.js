import React from 'react'
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { axiosReq } from '../../api/axiosDefaults';
import { useRedirect } from '../../hooks/Redirect';
import styles from "../../styles/Callsheets.module.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const CallsheetTop = (props) => {
    useRedirect("loggedOut")
    const {
        id,
        day,
        day_id,
        date
    } = props;
    const history = useHistory();

    // eslint-disable-next-line
    const handleEdit = () => { 
        history.push(`/callsheetsnew/${id}/edit`);
        };

        // eslint-disable-next-line
    const handleDelete = async () => {
        try {
            await axiosReq.delete(`/callsheetsnew/${id}/`);
            history.push(`/callsheets/`);
        } catch (err) {
        }
        };
  return (
    <div>
        <Card className={`mx-1 text-center ${styles.Top}`}>
            <Link to={`/callsheets/${day_id}`}>
            <Card.Header className={`pt-2 pb-1 ${styles.Top }`}>
                <Row className='d-flex align-items-center'>
                <Col xs={10} className='text-center px-0'>
                <h5 className={` ${styles.Titlelist }`}>Day {day}
                </h5>
                <h5 className={` ${styles.Titlelist }`}> {date}
                </h5>
                </Col >
                </Row>
                </Card.Header>
            </Link>
        </Card>  
    </div>
  )
}

export default CallsheetTop