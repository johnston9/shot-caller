import React, { useState } from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../styles/ScheduleSceneItem.module.css";

const ScheduleSceneItem = (props) => {
    const {setPostData, scene} = props

    // eslint-disable-next-line
    const [newData, setNewData] = useState({
        day_order_number: "",
        start_time: "",
        end_time: "",
        location_address: "",
        new_info: "",
        next: "",
        })
    const { day_order_number, location_address, start_time, end_time,
        new_info, next,  } = newData;

    const { number, title, act, int_ext, day_night, time,
        pages, action, dramatic_day,
        location_detail, location, filming_location,
        equip_set_props, department_info, 
        character1, character1_costume, character2,
        character2_costume, character3, character3_costume, character4, 
        character4_costume, character5, character5_costume, character6, 
        character6_costume, character7, character7_costume, character8,
        character8_costume, character9, character9_costume, character10, 
        character10_costume, character11, character11_costume, character12,
        character12_costume, other_characters_numbers,
        character1_number, character2_number, character3_number,
        character4_number, character5_number, character6_number,
        character7_number, character8_number, character9_number,
        character10_number, character11_number, character12_number,
        other_characters, other_characters_costumes,
        background_artists, background_artists_costumes } = scene;

    const handleClick = () => {   
        setPostData({ number, title, act, int_ext, day_night, time,
            pages, action, dramatic_day,
            location_detail, location, filming_location,
            equip_set_props, department_info, 
            day_order_number, location_address, start_time, end_time, 
            new_info, next, 
            character1, character1_costume, character2,
            character2_costume, character3, character3_costume, character4, 
            character4_costume, character5, character5_costume, character6, 
            character6_costume, character7, character7_costume, character8,
            character8_costume, character9, character9_costume, character10, 
            character10_costume, character11, character11_costume, character12,
            character12_costume, other_characters, other_characters_costumes,
            background_artists, background_artists_costumes,
            character1_number, character2_number, character3_number,
            character4_number, character5_number, character6_number,
            character7_number, character8_number, character9_number,
            character10_number, character11_number, character12_number,
            other_characters_numbers,
        });
    }

    return (
        <div className={`mx-4 mb-2 ${styles.SchedItem}`} >
        <Row>
        <Col xs={2} className={`text-center mx-0 py-2 ${styles.ItemNu}`}>
        <p >{number}</p>
        </Col>
        <Col xs={10} onClick={handleClick} className={`mx-0 py-2 ${styles.Item}`}>
        <p><span style={{ textTransform: 'uppercase'}}>{location}</span> - <span className={`${styles.Italic}`} >{title}</span></p>
        </Col>
        </Row>
        </div>
    )
}

export default ScheduleSceneItem
