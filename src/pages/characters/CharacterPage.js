import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import { axiosReq } from '../../api/axiosDefaults';
import { useRedirect } from '../../hooks/Redirect';
import Button from 'react-bootstrap/Button';
import btnStyles from "../../styles/Button.module.css";
import Character from './Character';
import TopBox from '../../components/TopBox';

const CharacterPage = () => {
    // useRedirect("loggedOut");
    const { id } = useParams();
    const [character, setCharacter] = useState({ results: [] });
    const history = useHistory();
    const [title, setTitle] = useState("");

    useEffect(() => {
        const handleMount = async () => {
            try {
                const { data } = await axiosReq(`/characters/${id}`);
                console.log(data)
                const role = data.role;
                setTitle(role);
                setCharacter({ results: [data] });
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
                <Character {...character.results[0]}
                  />         
        </div>
    )
}

export default CharacterPage
