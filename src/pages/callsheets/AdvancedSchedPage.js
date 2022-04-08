import React from 'react';
import { useRedirect } from '../../hooks/Redirect';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../styles/Callsheets.module.css";

const AdvancedSchedPage = (props) => {
  useRedirect("loggedOut");
  const {setShow} = props;
  return (
    <div className='mt-3'>
      <div className='d-none d-md-block mt-5'>
        <h4 className={`mt-3 pl-3 py-0 px-1 ${styles.SubTitleSpan }`} 
        style={{ textTransform: 'uppercase' }}>Advanced Schedule <span className={`${styles.HSpan }`} >(xxx Pages)  Day x Date </span></h4>
    </div>
    <div className='d-block d-md-none'>
        <div className={`mt-0 text-center ${styles.SubTitle }`}>
        <span className={`float-right ${styles.Close }`} onClick={() => setShow(false) } >Close</span> 
        <h5 className={`pl-5 text-center`} style={{ textTransform: 'uppercase'}} >
          Advanced Schedule </h5>
        <p className='pr-3'>(xxx Pages)  Day x Date </p>
        </div>
    </div>
    </div>
  )
}

export default AdvancedSchedPage