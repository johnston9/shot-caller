/* Component rendered on the CharactersPage to display the 
   cover info for each Character
 * When clicked on it opens that Character's CharacterPage */
import React from 'react'
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { axiosReq } from '../../api/axiosDefaults';
import styles from "../../styles/Characters.module.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { PostDropdown } from '../../components/PostDropdown';
import { toast } from 'react-toastify';

const CharacterTop = (props) => {
    const {
        id,
        role,
        // eslint-disable-next-line
        fetchCharacters,
    } = props;

    const history = useHistory();

    const handleEdit = () => { 
        history.push(`/characters/${id}/edit`);
        };

    const handleDelete = async () => {
        try {
            await axiosReq.delete(`/characters/${id}/`);
            toast.success(`Character "${role}" Deleted`);
            history.push(`/characters`);
            // history.push(`/home`);
            // fetchCharacters();
        } catch (err) {
        }
        };

    return (
        <div className='mx-0'>
            <Card className={`mx-1 text-center py-0 ${styles.Top}`}>
                <Link to={`/characters/${id}`}>
                <Card.Header className={`py-0 ${styles.Top }`}>
                  <Row className='d-flex align-items-center'>
                    <Col className='mx-0 px-0' xs={1}></Col>
                    <Col xs={10} className='text-center px-0'>
                    <p className={` ${styles.Titlelist } py-0`}> {role}
                    </p>
                    </Col >
                    <Col xs={1} className='text-center mx-0 px-0'>
                    <PostDropdown
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                    />
                    </Col>
                  </Row>
                  </Card.Header>
                </Link>
            </Card>           
        </div>
    )
}

export default CharacterTop
