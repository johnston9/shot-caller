import React from 'react';
import { useRedirect } from '../../hooks/Redirect';
import { Col, Row } from 'react-bootstrap';
import styles from "../../styles/Callsheets.module.css";
import { PostDropdown } from '../../components/PostDropdown';
import { useHistory } from "react-router-dom";
import { axiosReq } from '../../api/axiosDefaults';

const CallCastInfoMob = (props) => {
    useRedirect("loggedOut");
    const history = useHistory;
    const { id1, contact1, swf1, inst1, pickup1,
        hmw1, on_set1, admin, setShowEdit} = props;

        const handleEdit = () => {
            setShowEdit(showEdit => !showEdit)
          };
        
        const handleDelete = async () => {
            try {
                await axiosReq.delete(`/castcallsnew/${id1}/`);
                history.goBack();
            } catch (err) {
            }
        };

  return (
    <div>
        <Row className='text-center px-0 mx-0'>
        {/* <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={4}>
            <p style={{ textTransform: 'uppercase' }} className={`text-center ${styles.TitleBox}`}>Artist</p>
            <p className='mb-0'>{artist}</p>
        </Col>  */}
        <Col className={`mx-0 px-0 ${styles.Border}`} xs={4}>
          <p style={{ textTransform: 'uppercase' }} className={`mb-0 ${styles.TitleBox}`}>Contact</p>
          <p className={`mb-0 mx-0 py-2`}>{contact1}</p>                        
        </Col>
        <Col className={`mx-0 px-0  ${styles.Border}`} xs={2}>
            <p style={{ textTransform: 'uppercase' }} className={`mb-0 ${styles.TitleBox}`}>SWF</p>
            <p className='mb-0 py-2'>{swf1}</p>
        </Col>
        <Col className={`mx-0 px-0  ${styles.Border}`} xs={2}>
        <p style={{ textTransform: 'uppercase' }} className={`mb-0 ${styles.TitleBox}`}>PU</p>
            <p className='mb-0 py-2'>{pickup1}</p>
        </Col>
        <Col className={`mx-0 px-0 ${styles.Border}`} xs={2}>
        <p style={{ textTransform: 'uppercase' }} className={`mb-0  text-center ${styles.TitleBox}`}>H/M/W</p>
            <p className='mb-0 py-2'>{hmw1}</p>
        </Col>  
        <Col className={`mx-0 px-0 ${styles.Border}`} xs={2}>
        <p style={{ textTransform: 'uppercase' }} className={`mb-0  text-center ${styles.TitleBox}`}>Set</p>
            <p className='mb-0 py-2'>{on_set1}</p>
        </Col> 
        </Row>
        {admin ? (
            <Row className='text-center px-0 mx-0'>
            <Col className={`text-center mx-0 px-0 ${styles.Border}`} xs={10}>
            <p style={{ textTransform: 'uppercase' }} className={`mb-0 ${styles.TitleBox}`}>Instructions</p>
            <p className={`mb-0 mx-0 py-2`}>{inst1}</p>
            </Col>   
            <Col className={`mx-0 px-0 ${styles.Border} `} xs={2} md={2}>
            <p style={{ textTransform: 'uppercase' }} className={`mb-0 ${styles.TitleBox}`}>Edit</p>
            <PostDropdown
                    className={` mx-0 my-2`}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                />
            </Col>            
        </Row>
        ) : (
            <Row className='text-center px-0 mx-0'>
            <Col className={`text-center mx-0 px-0 ${styles.Border}`} xs={12}>
            <p style={{ textTransform: 'uppercase' }} className={`mb-0 ${styles.TitleBox}`}>Instructions</p>
            <p className={`mb-0 mx-0 py-2`}>{inst1}</p>
            </Col>             
        </Row>
        )}
    </div>
  )
}

export default CallCastInfoMob