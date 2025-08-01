/* Component in the Scene Component to display the 
   Scene Breakdown info */
import React from 'react'
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../styles/Scene.module.css";
import btnStyles from "../../../styles/Button.module.css";
import { useHistory } from "react-router-dom";

const Breakdown = (props) => {
    const history = useHistory();

    const handleEdit = () => {
        history.push(`/scenes/${id}/edit`);
      };

    const { id,title, act, int_ext, day_night, time, location, location_detail,
            pages, action, filming_location, shooting_date,
            dramatic_day, equip_set_props, department_info,
            setShowBreak,} = props;
    return ( 
        <div className='pb-5'>
            <h5 style={{ textTransform: 'uppercase'}} 
            className={`mt-1 mb-2 pl-5 py-2 text-center ${styles.SubTitle }`}>
                Scene breakdown
                <span style={{ textTransform: 'none'}} className={`float-right ${styles.Close } pt-1`}
                 onClick={() => setShowBreak(false) } >Close</span>
            </h5>
            <Row>
            <Col className='text-center py-3'>
            <Button
                className={` py-0  ${btnStyles.Back} ${btnStyles.Button}`}
                onClick={handleEdit } >ADD / EDIT
            </Button> 
            </Col>
            </Row>
            {/* title */}
            <Row>
                <Col className='text-center' xs={{span: 10, offset: 1 }} 
                md={{span: 6, offset: 3 }}>
                <p className={`${styles.BoldTitle} 
                text-center mx-1 mx-sm-5`}>TITLE</p>
                <p>{title} </p>
                </Col>
            </Row>
            <Row>
            <Col xs={{span: 10, offset: 1 }} 
                md={{span: 6, offset: 3 }}>
            <hr className={`${styles.Break1} mb-0`}/>
            </Col>
            </Row>
            {/* act pages */}
            <Row className='mt-3' >
            <Col className={`${styles.BorderRight} text-center`} xs={6}>
            <p className={`${styles.BoldTitle} 
            mb-2 text-center mx-1 mx-sm-5`}>ACT</p>
            <p style={{ textTransform: 'capitalize'}}>{act} </p>
            </Col>
            <Col className={`text-center`} xs={6}>
            <p className={`${styles.BoldTitle} 
            mb-2 text-center mx-1 mx-sm-5`}>PAGES</p>
            <p>{pages} </p>
            </Col>
            </Row>
            <Row>
            <Col xs={12}>
            <hr className={`${styles.Break1} mb-0`}/>
            </Col>
            </Row>
            {/* d day time */}
            <Row className='mt-3'>
            <Col className={`${styles.BorderRight} text-center`} xs={6}>
            <p className={`${styles.BoldTitle} d-none d-md-block
            mb-2 text-center mx-1 mx-sm-5`}>DRAMATIC DAY</p>
            <p className={`${styles.BoldTitle} d-block d-md-none
            mb-2 text-center mx-1 mx-sm-5`}>D. DAY</p>
            <p >{dramatic_day} </p>
            </Col>
            <Col className={`text-center`} xs={6}>
            <p className={`${styles.BoldTitle} 
            mb-2 text-center mx-1 mx-sm-5`}>TIME</p>
            <p>{time} </p>
            </Col>
            </Row>
            <Row>
            <Col xs={12}>
            <hr className={`${styles.Break1} mb-0`}/>
            </Col>
            </Row>
            {/* location action */}
            <Row className='mt-3'>
            <Col className={`${styles.BorderRight} text-center`} xs={6}>
                <p className={`${styles.BoldTitle} 
                mb-2 text-center mx-1 mx-sm-5`}>LOCATION</p>
                <p style={{ textTransform: 'uppercase'}} >
                {int_ext && (`${int_ext}`)} {location} {location_detail} {day_night && (`- ${day_night}`)}</p>
            </Col>
            <Col className={` text-center `}xs={6}>
            <p className={`${styles.BoldTitle} 
            mb-2 text-center mx-1 mx-sm-5`}>ACTION</p>
            <p>{action} </p>
            </Col>
            </Row>
            <Row>
            <Col xs={12}>
            <hr className={`${styles.Break1} mb-0`}/>
            </Col>
            </Row>
            {/* shoot info Equipment*/}
            <Row className='mt-3'>
                <Col className={`${styles.BorderRight} text-center`} xs={12} md={6}>
                <p className={`${styles.BoldTitle} 
                mb-2 text-center mx-1 mx-sm-5`}>SHOOT INFO </p>
                <p>{filming_location} {shooting_date}</p>
                <hr className='d-block d-md-none' />
            </Col>
                <Col className={`text-center `} xs={12} md={6}>
                <p className={`${styles.BoldTitle} 
                mb-2 text-center mx-1 mx-sm-5`}>EQUIPMENT SET PROPS</p>
                <p>{equip_set_props} </p>
                </Col>
            </Row>
            <Row>
            <Col xs={12}>
            <hr className={`${styles.Break1} mb-0`}/>
            </Col>
            </Row>
            {/* depts info */}
            <Row className='my-3'>
                <Col className='text-center' xs={{span: 10, offset: 1 }} 
                md={{span: 8, offset: 2 }}>
                <p className={`${styles.BoldTitle} 
                mb-2 text-center mx-1 mx-sm-5`}>DEPARTMENTS INFO </p>
                <p>{department_info} </p>
                </Col>
            </Row>
            <Row>
            <Col xs={{span: 10, offset: 1 }}>
            <hr className={`${styles.Break1} mb-0`}/>
            </Col>
            </Row>
            <Row className='mt-5'>
            <Col xs={2} ></Col>
            <Col xs={8}>
            <hr className={`${styles.Break2}`}/>
            </Col>
            </Row>
        </div>
    )
}

export default Breakdown
