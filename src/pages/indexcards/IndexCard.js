import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import Card from "react-bootstrap/Card";
import { Link, useHistory } from 'react-router-dom';
import { axiosReq } from '../../api/axiosDefaults';
import { PostDropdown } from '../../components/PostDropdown';
import { useRedirect } from '../../hooks/Redirect';
import styles from "../../styles/Indexes.module.css";

const IndexCard = (props ) => {
  useRedirect("loggedOut")
    const {
        id,
        story,
        style,
        number,
        setShowEdit,
        setHasOrder,
    } = props;
    const history = useHistory();

    const handleEdit = () => {
      setShowEdit(true);
        };
    
    const handleDelete = async () => {
    try {
        await axiosReq.delete(`/indexcards/${id}/`);
        setHasOrder(false);
    } catch (err) {
    }
    };
  return (
    <div>IndexCard</div>
  )
}

export default IndexCard