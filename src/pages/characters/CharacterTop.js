/* Component rendered on the CharactersPage to display the 
   cover info for each Callsheet
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

const CharacterTop = (props) => {
    const {
        id,
        role,
    } = props;
    const history = useHistory();

    const handleEdit = () => { 
        history.push(`/characters/${id}/edit`);
        };

    const handleDelete = async () => {
        try {
            await axiosReq.delete(`/characters/${id}/`);
            history.push(`/home/`);
        } catch (err) {
        }
        };

    return (
        <div className='mx-0'>
            <Card className={`mx-1 text-center ${styles.Top}`}>
                <Link to={`/characters/${id}`}>
                <Card.Header className={`py-2 ${styles.Top }`}>
                  <Row className='d-flex align-items-center'>
                    <Col className='mx-0 px-0' xs={1}></Col>
                    <Col xs={10} className='text-center px-0'>
                    <h5 className={` ${styles.Titlelist }`}> {role}
                    </h5>
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
