import React, { useEffect, useState } from 'react';
import { axiosReq } from '../../api/axiosDefaults';
import { useRedirect } from '../../hooks/Redirect';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import styles from "../../styles/DayPage.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";
import TopBox from '../../components/TopBox';
import Asset from '../../components/Asset';
import { useParams, useHistory } from 'react-router-dom';
import { useCrewInfoContext, useCrewInfoIdContext } from "../../contexts/BaseCallContext";

const CrewInfo = () => {
  useRedirect("loggedOut");
  const [errors, setErrors] = useState({});
  const { id } = useParams();
  const history = useHistory();
  const crewInfo = useCrewInfoContext();
  const {production_name, production_company, 
    company_phone, company_email} = crewInfo
  // const crewInfoId = useCrewInfoIdContext();
  // console.log(crewInfoId)
  return (
    <div>
      {production_name && <p>Production Name {production_name} </p> } 
      {production_company && <p>Production Company {production_company} </p> } 
      {company_phone && <p>Phone {company_phone} </p> } 
      {company_email && <p>Email {company_email} </p> } 
    </div>
  )
}

export default CrewInfo