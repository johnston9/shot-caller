import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router';
import { axiosReq } from '../../api/axiosDefaults';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import { useRedirect } from '../../hooks/Redirect';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import styles from "../../styles/Scene.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";
import TopBox from '../../components/TopBox';
import ShotListCreate from './ShotListCreate';
import Asset from '../../components/Asset';
import NoResults from "../../assets/no-results.png";
import Shot from './Shot';

const Storyboard = ({storyboard} ) => {
    return (
        <div>
            <h5 style={{ textTransform: 'uppercase'}} className={` mt-5 mb-4 pl-3 py-1 ${styles.SubTitle }`}>Storyboard</h5>
            
        </div>
    )
}

export default Storyboard
