import React, { useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import styles from "../../styles/ScheduleCreate.module.css";
import btnStyles from "../../styles/Button.module.css";
import { Alert } from "react-bootstrap";
import { useHistory, useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import TopBox from "../../components/TopBox";
import { useRedirect } from "../../hooks/Redirect";

const CallsheetsBaseCreate = () => {
  useRedirect("loggedOut");
  const [errors, setErrors] = useState({});
  const { id } = useParams();
  const history = useHistory();
  return (
    <div>CallsheetsBaseCreate</div>
  )
}

export default CallsheetsBaseCreate