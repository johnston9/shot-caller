import React from 'react';
import { useRedirect } from '../../hooks/Redirect';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../styles/Callsheets.module.css";

const ContactsPage = (props) => {
    useRedirect("loggedOut");
    const {crewInfoOne, setShow} = props;
    const {production_company, company_phone, company_email,
        company_address_line_1, company_address_line_2, company_address_line_3,
        // eslint-disable-next-line
        company_address_line_4,
        // eslint-disable-next-line
        director_name, director_phone,
        producer_name, producer_phone,
        pro_coordinator_name, pro_coordinator_phone,
        // eslint-disable-next-line
        upm_name, upm_phone,
        ad_1_name, ad_1_phone,
        dop_name, dop_phone,
        // eslint-disable-next-line
        set_medic_name, set_medic_email, set_medic_phone,} = crewInfoOne;
  return (
    <div className='mt-3'>
        <div className={`mb-3 text-center ${styles.SubTitle }`}>
        <span className={`float-right ${styles.Close }`} onClick={() => setShow(false) } >Close</span> 
        <h5 className={`pl-5 text-center`} style={{ textTransform: 'uppercase'}} >Contacts </h5>
        </div>
        <Row>
        <Col xs={12} >
            <div className='text-center'>
            <h5>{production_company} </h5>
            <p className='mb-0'>{company_address_line_1} </p>
            <p className='mb-0'>{company_address_line_2} </p>
            <p className='mb-0'>{company_address_line_3} </p>
            <p className='mb-0'>{company_address_line_4} </p>
            <p className='mb-0'>{company_phone} </p>
            <p className='mb-0'>{company_email} </p>
            </div>
            <div className='mt-3'>
            <p className={`mb-0`} ><span className={`${styles.Bold}`}>Producer:</span ><span className='pl-4'>{producer_name}</span> </p>
            <p className={`mb-0`} ><span className={`${styles.Bold}`}>Pro Cord:</span><span className='pl-4'>{pro_coordinator_name}</span></p>
            <p className={`mb-0`} ><span className={`${styles.Bold}`}>Director:</span><span className='pl-4'>{producer_name}</span></p>
            <p className={`mb-0`} ><span className={`${styles.Bold}`}>1st AD:</span><span className='pl-4 ml-3'>{ad_1_name}</span></p>
            <p className={`mb-0`} ><span className={`${styles.Bold}`}>DoP:</span><span className='pl-5 ml-2'>{dop_name}</span> </p>
            </div>
            </Col>
        </Row>
    </div>
  )
}

export default ContactsPage