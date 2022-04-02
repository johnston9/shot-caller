import React, { useState } from 'react';
import { useRedirect } from '../../hooks/Redirect';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../styles/Callsheets.module.css";
import btnStyles from "../../styles/Button.module.css";
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import CallCastInfo from './CallCastInfo';
import { PostDropdown } from '../../components/PostDropdown';
import { axiosReq } from '../../api/axiosDefaults';
import { useHistory } from "react-router";
import EditCast from './EditCast';

const CallCast = (props) => {
    useRedirect("loggedOut");
    const [showInfo, setShowInfo] = useState(false);
    const [showEdit, setShowEdit] = useState(false);

    const { 
        id,
        day_id,
        cast_member,
        cast_number,
        role,
        artist,
        contact,
        swf,
        pickup,
        call,
        hmw,
        on_set,
        inst,
      } = props

    const [castNew, setCastNew] = useState({
        id1: id,
        day_id1: day_id,
        cast_number1: cast_number,
        role1: role,
        artist1: artist,
        contact1: contact,
        swf1: swf,
        pickup1: pickup,
        call1: call,
        hmw1: hmw,
        on_set1: on_set,
        inst1: inst,
    });

    const { 
        day_id1,
        cast_number1,
        role1,
        artist1,
        contact1,
        swf1,
        pickup1,
        call1,
        hmw1,
        on_set1,
        inst1,
      } = castNew;

    const history = useHistory();

    const handleEdit = () => {
        setShowEdit(showEdit => !showEdit)
      };
    
    const handleDelete = async () => {
        try {
            await axiosReq.delete(`/castcallsnew/${id}/`);
            history.goBack();
        } catch (err) {
        }
    };

    return (
        <div className={` ${styles.Bold}`} > 
        <div className='d-none d-md-block'>
            <Row className='text-center mx-0' >
                <Col className={`mx-0 px-0  ${styles.Border}`} xs={1} md={1}>
                    <p className='mb-0'>{cast_number1}</p>
                </Col>
                <Col className={`mx-0 px-0 ${styles.Border}`} xs={2} md={2}>
                    <p className='mb-0'>{role1}</p>
                </Col>
                <Col className={`mx-0 px-0 ${styles.Border}`} xs={2} md={2}>
                    <p className='mb-0'>{artist1}</p>
                </Col>
                <Col className={`mx-0 px-0 ${styles.Border}`} xs={1} md={1}>
                <p className='mb-0'>{swf1}</p>                        
                </Col>
                <Col className={`mx-0 px-0 ${styles.Border}`} xs={1} md={1}>
                    <p >{pickup1}</p>
                </Col>
                <Col className={`mx-0 px-0 ${styles.Border}`} xs={1} md={1}>
                <p className='mb-0'>{call1}</p>                        
                </Col>
                <Col className={`mx-0 px-0 ${styles.Border} `} xs={1} md={1}>
                    <p >{hmw1}</p>
                </Col>
                <Col className={`mx-0 px-0 ${styles.Border} `} xs={1} md={1}>
                    <p >{on_set1}</p>
                </Col>
                <Col className={`mx-0 px-0 ${styles.Border} `} xs={1} md={1}>
                <Button onClick={() => setShowInfo(showInfo => !showInfo)} 
                    className={`${btnStyles.Button} ${btnStyles.Shed}`}>
                    I
                </Button>
                </Col>
                <Col className={`mx-0 px-0 ${styles.Border} `} xs={1} md={1}>
                <PostDropdown
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                    />
                </Col>
            </Row>
            {/* info cast_member castNew */}
            <Row>
                <Col>
                    {!showInfo ?("") : (                       
                    <CallCastInfo {...castNew}/> 
                    ) }
                </Col>
            </Row>
              <Row>
                <Col className={`mb-0 ${styles.NextCall}`}>
                </Col>
            </Row>
            {/* edit */}
            <Row>
                <Col>
                    {!showEdit ?("") : (                       
                    <EditCast
                    setCastNew={setCastNew}
                    setShowEdit={setShowEdit}
                    {...castNew}/> 
                    ) }
                </Col>
            </Row>  
        </div>
        {/* MOBILE */}
        <div className='d-block d-md-none'>
            <Row className='text-center mx-0 px-0' >
                <Col className={`mx-0 px-0  ${styles.TitleBox2}`} xs={2}>
                <p style={{ textTransform: 'uppercase' }} className={`  ${styles.TitleBox}`}>#</p>
                    <p className='mb-0'>{cast_number}</p>
                </Col>
                <Col className={`mx-0 px-0  ${styles.TitleBox2}`} xs={2}>
                <p style={{ textTransform: 'uppercase' }} className={`  ${styles.TitleBox}`}>SWF</p>
                    <p className='mb-0'>{swf}</p>
                </Col>
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={4}>
                <p style={{ textTransform: 'uppercase' }} className={`  ${styles.TitleBox}`}>Role</p>
                    <p className='mb-0'>{role}</p>
                </Col>
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={4}>
                <p style={{ textTransform: 'uppercase' }} className={`text-center ${styles.TitleBox}`}>Artist</p>
                    <p className='mb-0'>{artist}</p>
                </Col>  
            </Row>
            {/* 2 */}
            <Row className='text-center mx-0 px-0' >
                <Col className={`mx-0 px-0  ${styles.TitleBox2}`} xs={4}>
                <p style={{ textTransform: 'uppercase' }} className={`  ${styles.TitleBox}`}>Contact</p>
                    <p className='mb-0'>{contact}</p>Contact
                </Col>
                <Col className={`mx-0 px-0  ${styles.TitleBox2}`} xs={2}>
                <p style={{ textTransform: 'uppercase' }} className={`  ${styles.TitleBox}`}>PU</p>
                    <p className='mb-0'>{pickup}</p>
                </Col>
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={2}>
                <p style={{ textTransform: 'uppercase' }} className={`  ${styles.TitleBox}`}>Call</p>
                    <p className='mb-0'>{call}</p>
                </Col>
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={2}>
                <p style={{ textTransform: 'uppercase' }} className={`text-center ${styles.TitleBox}`}>H/M/W</p>
                    <p className='mb-0'>{hmw}</p>
                </Col>  
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={2}>
                <p style={{ textTransform: 'uppercase' }} className={`text-center ${styles.TitleBox}`}>Set</p>
                    <p className='mb-0'>{on_set}</p>
                </Col>  
            </Row>
            {/* inst */}
            {inst ? (
            <Row className='px-3'>
                <Col md={{span: 10, offset: 1} } className={`mb-0 py-2 ${styles.NextCall}`}>
                <p className="mb-0" >{inst} </p>
                </Col>
            </Row> 
            ) : (<Row>
            <Col className={`mb-0 py-1 ${styles.NextCall}`}>
            </Col>
        </Row>)  }      
        </div>
        </div>
    )
}
  
export default CallCast