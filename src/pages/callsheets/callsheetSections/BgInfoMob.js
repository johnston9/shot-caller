/* Component in the Background component to display the Callsheet 
   the extra background info in mobile */
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styles from "../../../styles/Callsheets.module.css";
import { PostDropdown } from '../../../components/PostDropdown';
import { axiosReq } from '../../../api/axiosDefaults';

const BgInfoMob = (props) => {
    const { id1,  admin, setShowEdit, scenes1, set1, costumes1, handleMount } = props;

        const handleEdit = () => {
            setShowEdit(showEdit => !showEdit)
          };

        const handleDelete = async () => {
            try {
                await axiosReq.delete(`/backgroundcallsnew/${id1}/`);
                handleMount();
            } catch (err) {
            }
        };

  return (
    <div>
        <Row className='text-center px-3 mx-0'>
        <Col className={`mx-0 px-0  ${styles.Border}`} xs={2}>
            <p style={{ textTransform: 'uppercase' }} className={`mb-0 ${styles.TitleBox}`}>Set</p>
            <p className='mb-0 py-2'>{set1}</p>
        </Col>
        <Col className={`mx-0 px-0 ${styles.Border}`} xs={3}>
          <p style={{ textTransform: 'uppercase' }} className={`mb-0 ${styles.TitleBox}`}>Scenes</p>
          <p className={`mb-0 mx-0 py-2`}>{scenes1}</p>                        
        </Col>
        {admin ? (
            <>
            <Col className={`mx-0 px-0  ${styles.Border}`} xs={5}>
            <p style={{ textTransform: 'uppercase' }} className={`mb-0 ${styles.TitleBox}`}>Costumes</p>
                <p className='mb-0 py-2'>{costumes1}</p>
            </Col>
            <Col className={`mx-0 px-0 ${styles.Border} `} xs={2} md={2}>
            <p style={{ textTransform: 'uppercase' }} className={`mb-0 ${styles.TitleBox}`}>Edit</p>
            <PostDropdown
                    className={` mx-0 my-2`}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                />
            </Col>   
            </>        
        ) : (
            <Col className={`mx-0 px-0  ${styles.Border}`} xs={7}>
            <p style={{ textTransform: 'uppercase' }} className={`mb-0 ${styles.TitleBox}`}>Costumes</p>
                <p className='mb-0 py-2'>{costumes1}</p>
            </Col>
        )}
        </Row>
    </div>
  )
}

export default BgInfoMob