import React from 'react';
import { useRedirect } from '../../hooks/Redirect';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../styles/Callsheets.module.css";

const HospitalPage = ({callsheet, setShow}) => {
    useRedirect("loggedOut");
    const {nearest_hospital, hospital_address_line_1,
        hospital_address_line_2, hospital_address_line_3, 
        hospital_address_line_4,} = callsheet;

  return (
    <div>
        <div className={`mb-3 text-center ${styles.SubTitle }`}>
        <span className={`float-right ${styles.Close }`} onClick={() => setShow(false) } >Close</span> 
        <h5 className={`pl-5 text-center`} style={{ textTransform: 'uppercase'}} >Nearest Hospital </h5>
        </div>
        <div >
            <Row className='mb-1'>
              <Col xs={{span: 10, offset: 0}}>
              <p className={`mb-0 ${styles.Bold} `} >Nearest Hospital: </p>
              <h5 className={`mb-1 pl-0 ${styles.WhiteAqua}`}>{nearest_hospital} </h5>
              <p className={`mb-1 pl-0 ${styles.WhiteAqua}`}>{hospital_address_line_1} </p>
              <p className={`mb-1 pl-0 ${styles.WhiteAqua}`}>{hospital_address_line_2} </p>
              <p className={`mb-1 pl-0 ${styles.WhiteAqua}`}>{hospital_address_line_3} </p>
              <p className={`mb-1 pl-0 ${styles.WhiteAqua}`}>{hospital_address_line_4} </p>
              {/* <p className={`mb-1 pl-0 ${styles.WhiteAqua}`}>Phone {company_phone} </p>
              <p className={`mb-1 pl-0 ${styles.WhiteAqua}`}>Email {company_email} </p> */}
              </Col>
            </Row>
            </div>
    </div>
  )
}

export default HospitalPage