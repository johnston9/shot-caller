import React from 'react';
import { useRedirect } from '../../hooks/Redirect';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../styles/Callsheets.module.css";
import { Image } from 'react-bootstrap';

const InfoCompany = ({crewInfoOne}) => {
  useRedirect("loggedOut");
  const {id, production_name, production_company, company_phone, company_email,
    company_address_line_1, company_address_line_2, company_address_line_3,
    company_address_line_4, company_logo, total_shoot_days} = crewInfoOne || {};

  return (
    <div className='mt-3'>
    <h5 style={{ textTransform: 'uppercase'}} className={`py-1 mb-2 mt-3 text-center mt-1 ${styles.SubTitle }`}>PRODUCTION COMPANY</h5>
      <Row className='text-center'>
      <Col xs={6}>
        <h3>{production_name} </h3>
        <h5>{production_company} </h5>
        {company_logo && <> 
          <div className='px-1'>
            <p>logo</p>
            <Image className={styles.Logo} src={company_logo} alt="logo" />
        </div>
        </>
        }
        <p>Total Shoot Days {total_shoot_days} </p>
        <p>Id {id} </p>
      </Col>
      <Col xs={6}>
        <p className="mb-0">
          {company_address_line_1}
        </p>
        <p className="mb-0">
          {company_address_line_2}
        </p>
        <p className="mb-0">
          {company_address_line_3}
        </p>
        <p className="mb-0">
          {company_address_line_4}
        </p>
        <p className="mb-0">
          {company_phone}
        </p>
        <p className="mb-0">
          {company_email}
        </p>
      </Col>
    </Row>
    </div>
  )
}

export default InfoCompany