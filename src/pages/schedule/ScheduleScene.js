import React, { useState } from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../styles/ScheduleCreate.module.css";
import btnStyles from "../../styles/Button.module.css";
import { axiosReq } from '../../api/axiosDefaults';
import { useHistory } from 'react-router';
import { useRedirect } from '../../hooks/Redirect';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { PostDropdown } from '../../components/PostDropdown';
import ScheduleCharacters from './ScheduleCharacters';
import SchedSceneInfo from './SchedSceneInfo';
import SchedOrder from './SchedOrder';

const ScheduleScene = (props) => {
    useRedirect("loggedOut");
    const history = useHistory();
    const [show, setShow] = useState(false);
    const [showOrder, setShowOrder] = useState(false);
    const [showInfo, setShowInfo] = useState(false);
    const {sceneAll, id, day_id, number, int_ext, start_time, end_time,
        location, filming_location, day_night, action, pages,
        new_info, day_order_number, setHasOrder, style } = props
        
        const handleEdit = () => {
            history.push(`/schedule/scenes/edit/${id}/`);
          };
        
          const handleDelete = async () => {
            try {
              await axiosReq.delete(`/schedule/scenes/${id}/`);
              setHasOrder(true);
            } catch (err) {
            }
          };

    return (
        <div style={style} className={`px-3 ${styles.Bold}`} > 
        <div className='d-none d-md-block'>
            <Row className='pt-2 text-center mx-0' >
                {/* edit */}
                <Col className={`mx-0 px-0 mt-0 pt-0 ${styles.TitleBox2}`} xs={1} md={1}>
                <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip>Re-Order</Tooltip>}
                    >
                    <Button onClick={() => setShowOrder(showOrder => !showOrder)} 
                        className={`${btnStyles.Button} ${btnStyles.Shed} py-0 px-4 `}>
                        {day_order_number}
                    </Button>
                </OverlayTrigger>
                    <PostDropdown
                        className={`${styles.Drop }`}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                    />
                </Col>
                <Col className={`mx-0 px-0  ${styles.TitleBox2}`} xs={1} md={1}>
                    <p className='mb-0'>{start_time}</p>
                    <p className='mb-0'>{end_time}</p>
                </Col>
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                    <p className='mb-0'>{number}</p>
                </Col>
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={3} md={3}>
                    <p style={{ textTransform: 'uppercase'}} className='mb-0'>{int_ext}. {location}</p>
                    <p className='mb-0'>{action}</p>
                </Col>
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                    <p className='mb-0'>{day_night}</p>
                </Col>
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={2} md={2}>
                <p className='mb-0'>{filming_location}</p>                        
                </Col>
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                    <p >{pages}</p>
                </Col>
                {/* cast */}
                <Col xs={1} md={1} className="mx-0 px-0">
                    <Button onClick={() => setShow(show => !show)} 
                    className={`${btnStyles.Button} ${btnStyles.Shed}`}>
                    Cast
                    </Button>
                </Col>
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                    <Button onClick={() => setShowInfo(showInfo => !showInfo)} 
                        className={`${btnStyles.Button} ${btnStyles.Shed}`}>
                        Info
                    </Button>
                    <p className='mb-0'>{id}</p>
                </Col>
            </Row>
            {/* Order  */}
            {!showOrder ?("") : (                       
            <SchedOrder 
            id={id}
            day_order_number1={day_order_number}
            start_time1={start_time}
            end_time1={end_time}
            new_info1={new_info} 
            day_id1={day_id}
            setShowOrder={setShowOrder}
            setHasOrder={setHasOrder}
            /> 
            ) }
            {/* cast  */}
            {!show ?("") : (                       
            <ScheduleCharacters {...sceneAll}
            /> 
            ) }
            {/* info */}
            <Row>
                <Col>
                    {!showInfo ?("") : (                       
                    <SchedSceneInfo {...sceneAll}/> 
                    ) }
                    </Col>
                </Row>
                {/* next */}
                {new_info ? (
                <Row>
                    <Col className={`mb-0 py-2 ${styles.Next1}`}>
                    <p className="mb-0" >Next: {new_info} </p>
                    </Col>
                </Row> 
                ) : ("") }     
        </div>
        {/* mobile */}
        <div className='d-block d-md-none'>
            {/* schedule */}
            <Row className='text-center' >
                <Col className={`mx-0 px-0  ${styles.TitleBox2}`} xs={2}>
                <p style={{ textTransform: 'uppercase' }} className={`  ${styles.TitleBox}`}>Times</p>
                    <p className='mb-0'>{start_time}</p>
                    <p className='mb-0'>{end_time}</p>
                </Col>
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={2}>
                <p style={{ textTransform: 'uppercase' }} className={`  ${styles.TitleBox}`}>Scene</p>
                    <p className='mb-0'>{number}</p>
                </Col>
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={2}>
                <p style={{ textTransform: 'uppercase' }} className={`text-center ${styles.TitleBox}`}>D/N</p>
                    <p className='mb-0'>{day_night}</p>
                </Col>  
                <Col className={` mx-0 px-0 ${styles.TitleBox2}`} xs={6}>
                <p style={{ textTransform: 'uppercase' }} className={`text-center ${styles.TitleBox}`}>Details</p>
                    <p style={{ textTransform: 'uppercase'}} className='mb-0'>{int_ext}. {location}</p>
                    <p className='mb-0'>{action}</p>
                </Col>
            </Row>
            {/* sechedule */}
            <Row className='mt-2 text-center'>
            <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={2} >
                <p style={{ textTransform: 'uppercase' }} className={`  ${styles.TitleBox}`}>Info</p>
                    <Button onClick={() => setShowInfo(showInfo => !showInfo)} 
                        className={`${btnStyles.Button} ${btnStyles.Shed}`}>
                        Info
                    </Button>
                </Col>
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={4}>
                <p style={{ textTransform: 'uppercase' }} className={`  ${styles.TitleBox}`}>Filming</p>
                <p className='mb-0'>{filming_location}</p>                        
                </Col>
                {/* cast */}
                <Col className={`text-center mx-0 px-0 ${styles.TitleBox2}`} xs={3}>
                <p style={{ textTransform: 'uppercase' }} className={`  ${styles.TitleBox}`}>Cast</p>
                    <Button onClick={() => setShow(show => !show)} 
                    className={`${btnStyles.Button} ${btnStyles.Shed}`}>
                    Cast
                    </Button>
                </Col>
                {/* edit */}
                <Col className={`text-center mx-0 px-0 mt-0 pt-0 ${styles.TitleBox2}`} xs={3} >
                <p style={{ textTransform: 'uppercase' }} className={`  ${styles.TitleBox}`}>Edit</p>
                    <Button onClick={() => setShowOrder(showOrder => !showOrder)} 
                        className={`${btnStyles.Button} ${btnStyles.Shed} px-4`}>
                        {day_order_number}
                    </Button>
                    <PostDropdown
                        className={`${styles.Drop }`}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                    />
                </Col>
            </Row>
            {/* Order  */}
            {!showOrder ?("") : (                       
            <SchedOrder 
            id={id}
            day_order_number1={day_order_number}
            start_time1={start_time}
            end_time1={end_time}
            new_info1={new_info} 
            day_id1={day_id}
            setShowOrder={setShowOrder}
            setHasOrder={setHasOrder}
            /> 
            ) }
            {/* cast */}
            {!show ?("") : (                       
            <ScheduleCharacters {...sceneAll}
            /> 
            ) }
            {/* info */}
            <Row>
                <Col>
                    {!showInfo ?("") : (                       
                    <SchedSceneInfo {...sceneAll}/> 
                    ) }
                    </Col>
                </Row>
                {/* next */}
                {new_info ? (
                    <Row>
                    <Col className={`mb-0 py-2 ${styles.Next1}`}>
                    <p className="mb-0" >Next: {new_info} </p>
                    </Col>
                </Row> 
                ) : (
                    <Row>
                    <Col className={`mb-0 py-2 ${styles.Next1}`}>
                    </Col>
                </Row> 
                ) }     
        </div>
        </div>
    )
}

export default ScheduleScene
