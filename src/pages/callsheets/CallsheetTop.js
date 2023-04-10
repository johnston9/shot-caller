/* Component rendered on the CallsheetsPage to display the 
   cover info for each Callsheet
 * When clicked on it opens that Callsheet's CallSheetPage */
import React from 'react'
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
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
        <Card className={`mx-2 text-center ${styles.Top}`}>
        <Link to={`/callsheets/${day_id}`}>
            <Card.Header className={`pt-2 pb-0 px-0 ${styles.Top }`}>
                <Row>
                <Col xs={{span: 10, offset: 1}} className=' px-0'>
                <h5 className={` ${styles.Titlelist }`}>Day {day}
                </h5>
                <div className={`${styles.Inner} mt-2 px-0 mx-0`}>
                <p className={`py-1 ${styles.Titlelist }`}> {date}
                </p>
                </div>
                </Col >
                </Row>
            </Card.Header>
        </Link>
        </Card>  
    </div>
  )
}

export default CallsheetTop