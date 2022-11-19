import React, { useState } from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../styles/ScheduleCreate.module.css";
import btnStyles from "../../styles/Button.module.css";
import { axiosReq } from '../../api/axiosDefaults';
import { useHistory } from 'react-router-dom';
import { useRedirect } from '../../hooks/Redirect';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { PostDropdown } from '../../components/PostDropdown';
import ScheduleCharacters from './ScheduleCharacters';
import SchedSceneInfo from './SchedSceneInfo';
import SchedOrder from './SchedOrder';
// import { getBeginNext } from 'react-calendar/dist/umd/shared/dates';

const ScheduleScene = (props) => {
    useRedirect("loggedOut");
    const history = useHistory();
    const [show, setShow] = useState(false);
    const [showOrder, setShowOrder] = useState(false);
    const [showInfo, setShowInfo] = useState(false);
    const {sceneAll, id, day_id, number, int_ext, start_time, end_time, admin,
        location, filming_location, day_night, action, pages, callsheetshed,
        next, day_order_number, setHasOrder, style, showSideBySide,
        new_info } = props
        
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
        <div style={style} className={` ${styles.Bold}`} > 
        <div className='d-none d-md-block'>
            <Row className='pt-2 text-center mx-0' >
                {admin ? (
                    <>
                {callsheetshed ? (
                    <>
                    <Col className={`mx-0 px-0  ${styles.TitleBox2}`} xs={1} md={1}>
                        <p className='mb-0'>{start_time}</p>
                    </Col>
                    <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                        <p className='mb-0'>{number}</p>
                    </Col>
                    <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={4} md={4}>
                        <p style={{ textTransform: 'uppercase'}} className='mb-0'>{int_ext}. {location}</p>
                    </Col>
                    </>
                ) : (
                    <>
                    <Col className={`mx-0 px-0 mt-0 pt-0 ${styles.TitleBox2}`} xs={1} md={1}>
                    <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>Re-Order</Tooltip>}
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
                    </Col>
                    <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                        <p className='mb-0'>{number}</p>
                    </Col>
                    <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={3} md={3}>
                        <p style={{ textTransform: 'uppercase'}} className='mb-0'>{int_ext}. {location}</p>
                        <p className='mb-0'>{action}</p>
                    </Col>
                    </>
                )}
                </>) : (
                    <>
                    <Col className={`mx-0 px-0  ${styles.TitleBox2}`} xs={1} md={1}>
                        <p className='mb-0'>{start_time}</p>
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
                {callsheetshed ? (
                    ""
                ) : (
                    <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                    <p className='mb-0'>{day_night}</p>
                </Col>
                ) }
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={2} md={2}>
                <p className='mb-0'>{filming_location}</p>                        
                </Col>
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                    <p >{pages}</p>
                </Col>
                {/* cast */}
                {showSideBySide ? (
                    <Col xs={1} md={1} className="mx-0 px-0">
                    <Button onClick={() => setShow(show => !show)} 
                    className={`${btnStyles.Button} ${btnStyles.Shed}`}>
                    C
                    </Button>
                </Col>
                ) : (
                    <Col xs={1} md={1} className="mx-0 px-0">
                    <Button onClick={() => setShow(show => !show)} 
                    className={`${btnStyles.Button} ${btnStyles.Shed}`}>
                    Cast
                    </Button>
                </Col>
                )}
                {showSideBySide ? (
                    <Col className={`mx-0 px-0 `} xs={1} md={1}>
                    <Button onClick={() => setShowInfo(showInfo => !showInfo)} 
                        className={`${btnStyles.Button} ${btnStyles.Shed}`}>
                        I
                    </Button>
                </Col>
                ) : (
                    <Col className={`mx-0 px-0 `} xs={1} md={1}>
                    <Button onClick={() => setShowInfo(showInfo => !showInfo)} 
                        className={`${btnStyles.Button} ${btnStyles.Shed}`}>
                        Info
                    </Button>
                </Col>
                )}      
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
                {/* next getBeginNext*/}
                {next ? (
                <Row className='px-3'>
                    <Col className={`mb-0 py-2 ${styles.Next1}`}>
                    <p className="mb-0" >Next: {next} </p>
                    </Col>
                </Row> 
                ) : ("") }     
        </div>
        {/* mobile */}
        <div className='d-block d-md-none'>
            {/* schedule */}
            <Row className='text-center mx-0 px-0' >
                <Col className={`mx-0 px-0  ${styles.TitleBox2}`} xs={2}>
                    <p className={`mb-0  ${styles.TitleBox2}`}>{start_time}</p>
                </Col>
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={2}>
                    <p className='mb-0'>{number}</p>
                </Col>
                <Col className={` mx-0 px-0 ${styles.TitleBox2}`} xs={8}>
                    <p style={{ textTransform: 'uppercase'}} className='mb-0'>{int_ext}. {location} {day_night}</p>
                    <p className='mb-0'>{action}</p>
                </Col>
            </Row>
            <hr className=' my-1'></hr>
            {/* sechedule */}
            <Row className='mt-2 mx-0 px-0 text-center'>
            {/* order */}
            {admin ? (
                    <>
                {callsheetshed ? (
                    <Col xs={2}></Col>
                ) : (
                    <>
                    <Col className={`mx-0 px-0 mt-0 pt-0`} xs={2} >
                        <Button onClick={() => setShowOrder(showOrder => !showOrder)} 
                            className={`${btnStyles.Button} ${btnStyles.Shed} py-0 px-3`}>
                            {day_order_number}
                        </Button>
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
                    // className={`${btnStyles.Button} ${btnStyles.Shed} py-0 px-1`}
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
                {next ? (
                    <Row>
                    <Col className={`mb-0 py-2 ${styles.Next1}`}>
                    <p className="mb-0" >Next: {next} </p>
                    </Col>
                </Row> 
                ) : (
                    <Row>
                    <Col className={`mb-0 pt-1 ${styles.Next1}`}>
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