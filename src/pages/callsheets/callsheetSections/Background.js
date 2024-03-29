/* Component in the BgPage component to display the Callsheet 
   Background items 
 * Contains the BackgroundInfo component to display 
   the extra background info 
 * Contains the BgInfoMob component to display 
   the extra background info in mobile */
import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../../styles/Callsheets.module.css";
import btnStyles from "../../../styles/Button.module.css";
// eslint-disable-next-line
import { Button } from 'react-bootstrap';
import { PostDropdown } from '../../../components/PostDropdown';
import { axiosReq } from '../../../api/axiosDefaults';
import BackgroundInfo from './BackgroundInfo';
import EditBack from '../CallsheetEditBackGround';
import BgInfoMob from './BgInfoMob';

const Background = (props) => {
    const [showInfo, setShowInfo] = useState(false);
    const [showEdit, setShowEdit] = useState(false);

    const { id, day_id, qty, type, call, scenes, set, costumes,
        admin, style, handleMount} = props

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

    const { id1, qty1, type1, call1, } = bgNew;

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
    <div style={style}>
        <div className='d-none d-md-block pt-0 mt-0'>
            <Row className='text-center mx-0' >
                <Col className={`mx-0 px-0  ${styles.Border}`} xs={2} md={2}>
                    <p className='mb-0'>{qty1}</p>
                </Col>
                <Col className={`mx-0 px-0 ${styles.Border}`} xs={2} md={2}>
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
                    <Col className={`mx-0 px-0 ${styles.Border}`} xs={6} md={6}>
                    <p className='mb-0'>{type1}</p>
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
        </div>
        {/* MOBILE */}
        <div className='d-block d-md-none'>
        <Row className='text-center mx-0' >
                <Col className={`mx-0 px-0  ${styles.Border}`} xs={2} md={2}>
                    <p className='mb-0'>{qty1}</p>
                </Col>
                <Col className={`mx-0 px-0 ${styles.Border}`} xs={2} md={2}>
                    <p className='mb-0'>{call1}</p>
                </Col>
                <Col className={`mx-0 px-0 ${styles.Border}`} xs={6} md={6}>
                    <p className='mb-0'>{type1}</p>
                    </Col>
                <Col className={`mx-0 px-0 ${styles.Border} `} xs={2} md={2}>
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
                    <BgInfoMob handleMount={handleMount}
                    setShowEdit={setShowEdit} admin={admin} {...bgNew}/> 
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
        </div>
    </div>
  )
}

export default Background