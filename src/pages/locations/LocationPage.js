/* Page to fetch the data for each Location
 * Contains the Location Component to which it passes the data */
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import { axiosReq } from '../../api/axiosDefaults';
import { useRedirect } from '../../hooks/Redirect';
import Button from 'react-bootstrap/Button';
import btnStyles from "../../styles/Button.module.css";
import TopBox from '../../components/TopBox';
import Location from "./Location";

const LocationPage = () => {
    useRedirect();
    const { id } = useParams();
    const [location, setLocation] = useState({ results: [] });
    const history = useHistory();
    const [title, setTitle] = useState("");

    useEffect(() => {
        const handleMount = async () => {
            try {
                const { data } = await axiosReq(`/locations/${id}`);
                const name = data.name;
                console.log(name)
                setTitle(name);
                setLocation({ results: [data] });
            } catch (err) {
                console.log(err);
              }
        }
        handleMount();
    }, [id])
    return (
        <div>
            <TopBox title={title} />
            <Button
                className={`${btnStyles.Button} ${btnStyles.Blue} mt-1`}
                onClick={() => history.goBack()}
            >
                Back
            </Button>
            <Location {...location.results[0]}
                /> 
        </div>
    )
}

export default LocationPage
