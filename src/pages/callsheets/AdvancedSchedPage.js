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
        <div className={`mt-0 text-center ${styles.SubTitle }`}>
        <span className={`float-right ${styles.Close }`} onClick={() => setShow(false) } >Close</span> 
        <h5 className={`pl-5 text-center`} style={{ textTransform: 'uppercase'}} >Advanced Schedule (xxx Pages)  Day x Date </h5>
        </div>
    </div>
  )
}

export default AdvancedSchedPage