/* Component in the Callsheet component to display the Callsheet 
   Department and Important Notes */
import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../../styles/Callsheets.module.css";

const NotesPage = (props) => {
    const {important_info, transport_info, department_info, setShow} = props;
  return (
    <div className='mt-5'>
    {/* Important Notes */}
    <div>
    <div className='d-block d-md-none'>
    <div className={`mt-0 mb-3 text-center ${styles.SubTitle }`}>
    <span className={`float-right ${styles.Close }`} onClick={() => setShow(false) } >Close</span> 
    <h5 className={`pl-5 text-center ${styles.Bold }`} style={{ textTransform: 'uppercase'}} > Notes</h5>
    </div>
    </div>
    <span className={`mt-3 ml-5 ml-md-0 pl-3 py-0 px-1 ${styles.SubTitleSpan }`} 
    style={{ textTransform: 'uppercase' }}>Important Notes</span>
    <hr className={`mb-0 pl-3 mt-0 pt-1 ${styles.Break5 }`}/>
    <Row className='px-3'>
        <Col className={`px-1 ${styles.Border3 }`}>
        <p className={`px-1 pt-2 pb-2`}>{important_info} </p>
        </Col>
    </Row>
    </div>
    {/* TRANSPORT NOTES */}
    <div className='mt-5'>
        <span className={`mt-3 ml-5 ml-md-0 pl-3 py-0 px-1 ${styles.SubTitleSpan }`}
         style={{ textTransform: 'uppercase' }}>Transport Notes</span>
        <hr className={`mb-0 mt-0 pl-3 pt-1 ${styles.Break5 }`}/>
        <Row className='px-3'>
            <Col className={`px-1 ${styles.Border3 }`}>
            <p className={`px-1 pt-2 pb-2`}>{transport_info} </p>
            </Col>
        </Row>
    </div>
    {/* Department Notes */}
    <div className='mt-5'>
    <span className={`mt-3 ml-5 ml-md-0 pl-3 py-0 px-1 ${styles.SubTitleSpan }`} style={{ textTransform: 'uppercase' }}>Department Notes</span>
    <hr className={`mb-0 mt-0 pl-3 pt-1 ${styles.Break5 }`}/>
    <Row className='px-3'>
        <Col className={`px-1 ${styles.Border3 }`}>
        <p className={`px-1 pt-2 pb-2`}>{department_info} </p>
        </Col>
    </Row>
    </div>
    </div>
  )
}

export default NotesPage