import React, { useState } from "react";
import styles from "../../styles/ScheduleSceneItem.module.css";

const ScheduleSceneItem = (props) => {
    const {setPostData, scene,
        setShowOne, setShowTwoA, setShowTwoB,
        setShowThree, setShowLoc} = props

    const [newData, setNewData] = useState({
        day_order_number: "",
        start_time: "",
        end_time: "",
        location_address: "",
        new_info: "",
        new_content: "",
        character1_number: "",
        character2_number: "",
        character3_number: "",
        character4_number: "",
        character5_number: "",
        character6_number: "",
        character7_number: "",
        character8_number: "",
        character9_number: "",
        character10_number: "",
        character11_number: "",
        character12_number: "",
        other_characters_numbers: "",
        })
    const { day_order_number, location_address, start_time, end_time,
        new_info, new_content, 
        character1_number,
        character2_number,
        character3_number,
        character4_number,
        character5_number,
        character6_number,
        character7_number,
        character8_number,
        character9_number,
        character10_number,
        character11_number,
        character12_number,
        other_characters_numbers,  } = newData;

    const { number, title, act, int_ext, day_night, time, location,
        character1, character1_costume, character2, filming_location,
        character2_costume, character3, character3_costume, character4, 
        character4_costume, character5, character5_costume, character6, 
        character6_costume, character7, character7_costume, character8,
        character8_costume, character9, character9_costume, character10, 
        character10_costume, character11, character11_costume, character12,
        character12_costume, other_characters, other_characters_costumes,
        background_artists, background_artists_costumes,
        pages, action, content, info } = scene;

    const handleClick = () => {
            setShowOne(false);
            setShowTwoA(false);
            setShowTwoB(false);
            setShowThree(false);
            setShowLoc(false);
    
        setPostData({ number, title, act, int_ext, day_night, time, location,
            character1, character1_costume, character2, filming_location, info,
            character2_costume, character3, character3_costume, character4, 
            character4_costume, character5, character5_costume, character6, 
            character6_costume, character7, character7_costume, character8,
            character8_costume, character9, character9_costume, character10, 
            character10_costume, character11, character11_costume, character12,
            character12_costume, other_characters, other_characters_costumes,
            background_artists, background_artists_costumes, pages, action, content,
            day_order_number, location_address, start_time, end_time,
            new_info, new_content, other_characters_numbers, 
            character1_number, character2_number, character3_number,
            character4_number, character5_number, character6_number,
            character7_number, character8_number, character9_number,
            character10_number, character11_number, character12_number,
        });
    }

    return (
        <div onClick={handleClick} className={`mx-5 mx-md-1 ${styles.Item}`} >
            <p className="d-none d-md-block py-2">Scene - {number} {location} - {title}</p>
            <p className="d-md-none py-2">Scene - {number} {location}</p>
        </div>
    )
}

export default ScheduleSceneItem
