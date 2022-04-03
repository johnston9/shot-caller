import React, { useState } from 'react';
import { useRedirect } from '../../hooks/Redirect';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../styles/Callsheets.module.css";
import btnStyles from "../../styles/Button.module.css";
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { PostDropdown } from '../../components/PostDropdown';
import { axiosReq } from '../../api/axiosDefaults';
import { useHistory } from "react-router";
import BackgroundInfo from './BackgroundInfo';
import EditBack from './EditBack';
import BgInfoMob from './BgInfoMob';

const Background = (props) => {
    useRedirect("loggedOut");
    const [showInfo, setShowInfo] = useState(false);
    const [showEdit, setShowEdit] = useState(false);

    const { id, day_id, qty, type, call, scenes, set, costumes,
        admin, style} = props

    const [bgNew, setBgNew] = useState({
        id1: id,
        day_id1: day_id,
        qty1: qty,
        type1: type,
        call1: call,
        scenes1: scenes,
        set1: set,
        costumes1: costumes,
    });

    const { id1, qty1, type1, call1, scenes1, set1, 
        costumes1 } = bgNew;
    
    const history = useHistory();

    const handleEdit = () => {
        setShowEdit(showEdit => !showEdit)
      };
    
    const handleDelete = async () => {
        try {
            await axiosReq.delete(`/backgroundcallsnew/${id1}/`);
            history.goBack();
        } catch (err) {
        }
    };

  return (
    <div style={style}>
        <div className='d-none d-md-block pt-0 mt-0'>
            <Row className='text-center mx-0' >
                <Col className={`mx-0 px-0  ${styles.Border}`} xs={2} md={2}>
                    <p className='mb-0'>{qty1}</p>
                </Col>
                <Col className={`mx-0 px-0 ${styles.UnitCallBorder}`} xs={2} md={2}>
                    <p className='mb-0'>{call1}</p>
                </Col>
                {admin ? (
                    <>
                    <Col className={`mx-0 px-0 ${styles.Border}`} xs={6} md={6}>
                    <p className='mb-0'>{type1}</p>
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
                    </>

                ) : (
                    <>
                    <Col className={`mx-0 px-0 ${styles.Border}`} xs={2} md={2}>
                    <p className='mb-0'>{call1}</p>
                    </Col>
                    <Col className={`mx-0 px-0 ${styles.Border} `} xs={1} md={1}>
                    <Button onClick={() => setShowInfo(showInfo => !showInfo)} 
                        className={`${btnStyles.Button} ${btnStyles.Shed}`}>
                        I
                    </Button>
                    </Col>
                    </>
                )}
            </Row>
            {/* info */}
            <Row>
                <Col>
                    {!showInfo ?("") : (                       
                    <BackgroundInfo {...bgNew}/> 
                    ) }
                </Col>
            </Row> 
            {/* edit */}
            <Row>
                <Col>
                    {!showEdit ?("") : (                       
                    <EditBack
                    setBgNew={setBgNew}
                    setShowEdit={setShowEdit}
                    {...bgNew}/> 
                    ) }
                </Col>
            </Row> 
            {/* <Row>
            <Col className={`mb-0 py-1 ${styles.NextCall}`}>
            </Col>
            </Row>    */}
        </div>
        {/* MOBILE */}
        <div className='d-block d-md-none'>
        <Row className='text-center mx-0' >
                <Col className={`mx-0 px-0  ${styles.Border}`} xs={2} md={2}>
                    <p className='mb-0'>{qty1}</p>
                </Col>
                <Col className={`mx-0 px-0 ${styles.UnitCallBorder}`} xs={2} md={2}>
                    <p className='mb-0'>{call1}</p>
                </Col>
                <Col className={`mx-0 px-0 ${styles.Border}`} xs={6} md={6}>
                    <p className='mb-0'>{type1}</p>
                    </Col>
                <Col className={`mx-0 px-0 ${styles.Border} `} xs={1} md={1}>
                <Button onClick={() => setShowInfo(showInfo => !showInfo)} 
                    className={`${btnStyles.Button} ${btnStyles.Shed}`}>
                    I
                </Button>
                </Col>
            </Row>
            {/* info */}
            <Row>
                <Col>
                    {!showInfo ?("") : (                       
                    <BgInfoMob setShowEdit={setShowEdit} admin={admin} {...bgNew}/> 
                    ) }
                </Col>
            </Row>
            {/* edit */}
            <Row>
                <Col>
                    {!showEdit ?("") : (                       
                    <EditBack
                    setBgNew={setBgNew}
                    setShowEdit={setShowEdit}
                    {...bgNew}/> 
                    ) }
                </Col>
            </Row>  
            <Row>
            <Col className={`mb-0 py-1 ${styles.NextCall}`}>
            </Col>
            </Row>  
        </div>
    </div>
  )
}

export default Background