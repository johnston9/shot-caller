/* Component on the DayPage to display each Schedule Scene's data
 * Contains the ScheduleSceneInfo component to display the scenes extra info 
 * Contains the ScheduleSceneCharacters component to display the scenes Characters
 * Contains the ScheduleSceneOrder component to re-order the Scenes shooting position  */

import React, { useState } from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../../styles/ScheduleCreate.module.css";
import btnStyles from "../../../styles/Button.module.css";
import { axiosReq } from '../../../api/axiosDefaults';
import { useHistory } from 'react-router-dom';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { PostDropdown } from '../../../components/PostDropdown';
import ScheduleSceneCharactersBG from './ScheduleSceneCharactersBG';
import ScheduleSceneInfo from './ScheduleSceneInfo';
import ScheduleSceneOrder from './ScheduleSceneOrder';

const ScheduleScene = (props) => {
    const history = useHistory();
    const [show, setShow] = useState(false);
    const [showOrder, setShowOrder] = useState(false);
    const [showInfo, setShowInfo] = useState(false);
    const {sceneAll, scene_id, id, day_id, number, int_ext, start_time,
           end_time, admin, location, filming_location, day_night, 
           action, pages, callsheetshed, next, day_order_number, 
           // eslint-disable-next-line
           setHasOrder, style, showSideBySide, } = props
        
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
        <div style={style} className={`${styles.Bold}`} >
            {/* desktop */}
        <div className='d-none d-md-block'>
            <Row className={`${styles.Bold} pt-2 text-center mx-0`}>
                {admin ? (
                    <>
                    <Col className={`mx-0 px-0 mt-0 pt-0 ${styles.TitleBox2}`} xs={1} md={1}>
                    <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>Reorder</Tooltip>}
                        >
                        <Button onClick={() => setShowOrder(showOrder => !showOrder)} 
                            className={`${btnStyles.Button} ${btnStyles.Shed} py-0 px-3`}>
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
                    </>
                ) : (
                    <>
                    <Col className={`mx-0 px-0  ${styles.TitleBox2}`} xs={1} md={1}>
                        <p className='mb-0'>{start_time}</p>
                        <p className='mb-0'>{end_time}</p>
                    </Col>
                    <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                        <p className='mb-0'>{number}</p>
                    </Col>
                    <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={4} md={4}>
                        <p style={{ textTransform: 'uppercase'}} className='mb-0'>{int_ext}. {location}</p>
                        <p className='mb-0'>{action}</p>
                    </Col>
                    </>
                ) }
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                <p className='mb-0'>{day_night}</p>
                </Col>
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={2} md={2}>
                <p className='mb-0'>{filming_location}</p>                        
                </Col>
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                    <p >{pages}</p>
                </Col>
                    <Col xs={1} md={1} className="mx-0 px-0">
                    <Button onClick={() => setShow(show => !show)} 
                    className={`${btnStyles.Button} ${btnStyles.Shed}`}>
                    Cast
                    </Button>
                    </Col>
                    <Col className={`mx-0 px-0 `} xs={1} md={1}>
                    <Button onClick={() => setShowInfo(showInfo => !showInfo)} 
                        className={`${btnStyles.Button} ${btnStyles.Shed}`}>
                        Info
                    </Button>
                </Col>
            </Row>
            {/* Order  */}
            {!showOrder ?("") : (                       
            <ScheduleSceneOrder 
            id={id}
            day_order_number1={day_order_number}
            scene_id1={scene_id}
            start_time1={start_time}
            end_time1={end_time}
            next1={next} 
            day_id1={day_id}
            setShowOrder={setShowOrder}
            setHasOrder={setHasOrder}
            /> 
            ) }
            {/* cast  */}
            {!show ?("") : (                       
            <ScheduleSceneCharactersBG 
            scene_id={scene_id}
            /> 
            ) }
            {/* info */}
            <Row>
                <Col>
                    {!showInfo ?("") : (                       
                    <ScheduleSceneInfo 
                    style={style}
                    {...sceneAll}/> 
                    ) }
                    </Col>
                </Row>
                {/* next */}
                {next ? (
                <Row className='px-3'>
                    <Col>
                    <div className={`mb-0 py-2 ${styles.Next1}`}>
                    <p className="mb-0" >Next: {next} </p>
                    </div>
                    </Col>
                </Row> 
                ) : ("") }     
        </div>
        {/* mobile */} 
        <div className={`${styles.BottomScene} d-block d-md-none text-center mx-0`}>
            {/* schedule */}
            <Row className={`${styles.Bold} text-center mx-0`} >
                <Col className={`mx-0 px-0  ${styles.TitleBox2}`} xs={2}>
                    <p className={`mb-0  ${styles.Para2}`}>{start_time}</p>
                    <p className={`mb-0  ${styles.Para2}`}>{end_time}</p>
                </Col>
                <Col className={` mx-0 px-0 ${styles.TitleBox2}`} xs={8}>
                    <p style={{ textTransform: 'uppercase'}} className={`mb-0  ${styles.Para2}`}>{int_ext}. {location} - {day_night}</p>
                    <p className={`mb-0  ${styles.Para2}`}>{action}</p>
                </Col>
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={2}>
                    <p className={`mb-0  ${styles.Para2}`}>{number}</p>
                </Col>
            </Row>
            <hr className={`${styles.HrSched} my-0 mx-3`}></hr>
            {/* order - info -cast edit */}
            <Row className='mt-1 mx-0 px-0 d-flex align-items-center '>
            {/* order */}
            {admin ? (
                    <>
                {callsheetshed ? (
                    <Col xs={2}></Col>
                ) : (
                    <>
                    <Col className={`mx-0 px-0 mt-0 pt-0`} xs={2} >
                    <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>Reorder</Tooltip>}
                        >
                        <Button onClick={() => setShowOrder(showOrder => !showOrder)} 
                            className={`${btnStyles.Button} ${btnStyles.Shed} py-0 px-2`}>
                            {day_order_number}
                        </Button>
                        </OverlayTrigger>
                    </Col> 
                    </>
                )}
                </>) : (
                    <>
                    <Col xs={2} ></Col>
                    </>
                    ) }          
                {/* info styles.Info */}
                <Col className={`mx-0 pl-0 pr-2 text-right`} xs={4} >
                    <p onClick={() => setShowInfo(showInfo => !showInfo)} 
                    className={`${styles.Info}`}
                    //    className={`${btnStyles.Button} ${btnStyles.Shed} py-0 px-1`}
                       >
                        INFO
                    </p>
                </Col>
                {/* cast */}
                <Col className={`text-left mx-0 pr-0 pl-2 `} xs={4}>
                    <p onClick={() => setShow(show => !show)} 
                    className={`${styles.Info}`}
                    >
                    CAST
                    </p>
                </Col>  
                {admin ? (
                    <>
                {callsheetshed ? (
                    <Col xs={2}></Col>
                ) : (
                <Col className={`text-center mx-0 px-0 mt-0 pt-0`} xs={2} >
                <PostDropdown
                    className={`${styles.Drop }`}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                />
            </Col> 
                )}
                </>) : (
                    <>
                    <Col xs={2} ></Col>
                    </>
                    ) }              
            </Row>
            {/* Order  */}
            {!showOrder ?("") : (                       
            <ScheduleSceneOrder 
            id={id}
            day_order_number1={day_order_number}
            scene_id1={scene_id}
            start_time1={start_time}
            end_time1={end_time}
            next1={next} 
            day_id1={day_id}
            setShowOrder={setShowOrder}
            setHasOrder={setHasOrder}
            /> 
            ) }
            {/* cast */}
            {!show ?("") : (                       
            <ScheduleSceneCharactersBG 
            scene_id={scene_id}
            /> 
            ) }
            {/* info */}
            <Row>
                <Col>
                    {!showInfo ?("") : (                       
                    <ScheduleSceneInfo 
                    style={style}
                    {...sceneAll}/> 
                    ) }
                    </Col>
                </Row>
                {/* next */}
                {next ? (
                    <Row>
                    <Col className={`mb-0 py-2 text-center ${styles.Next2}`}>
                    <p className={`mb-0  ${styles.Para2}`} >Next: {next} </p>
                    </Col>
                </Row> 
                ) : (
                    <Row>
                    <Col >
                    <div className={`mb-0 py-1 ${styles.Next2}`}>
                    </div>
                    </Col>
                </Row> 
                ) }     
        </div>
        </div>
    )
}

export default ScheduleScene

// {callsheetshed ? (
//     <>
//     <Col className={`mx-0 px-0  ${styles.TitleBox2}`} xs={1} md={1}>
//         <p className='mb-0'>{start_time}</p>
//     </Col>
//     <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
//         <p className='mb-0'>{number}</p>
//     </Col>
//     <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={4} md={4}>
//         <p style={{ textTransform: 'uppercase'}} className='mb-0'>{int_ext}. {location}</p>
//         <p className='mb-0'>{action}</p>
//     </Col>
//     </>
// ) : (
//     <>
//     <Col className={`mx-0 px-0 mt-0 pt-0 ${styles.TitleBox2}`} xs={1} md={1}>
//     <OverlayTrigger
//         placement="top"
//         overlay={<Tooltip>Re-Order</Tooltip>}
//         >
//         <Button onClick={() => setShowOrder(showOrder => !showOrder)} 
//             className={`${btnStyles.Button} ${btnStyles.Shed} py-0 `}>
//             {day_order_number}
//         </Button>
//     </OverlayTrigger>
//         <PostDropdown
//             className={`${styles.Drop }`}
//             handleEdit={handleEdit}
//             handleDelete={handleDelete}
//         />
//     </Col>
//     <Col className={`mx-0 px-0  ${styles.TitleBox2}`} xs={1} md={1}>
//         <p className='mb-0'>{start_time}</p>
//     </Col>
//     <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
//         <p className='mb-0'>{number}</p>
//     </Col>
//     <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={3} md={3}>
//         <p style={{ textTransform: 'uppercase'}} className='mb-0'>{int_ext}. {location}</p>
//         <p className='mb-0'>{action}</p>
//     </Col>
//     </>
// )}