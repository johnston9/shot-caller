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
        character1_calltime: "",
        character1_pickup: "",
        character2_calltime: "",
        character2_pickup: "",
        character3_calltime: "",
        character3_pickup: "",
        character4_calltime: "",
        character4_pickup: "",
        character5_calltime: "",
        character5_pickup: "",
        character6_calltime: "",
        character6_pickup: "",
        character7_calltime: "",
        character7_pickup: "",
        character8_calltime: "",
        character8_pickup: "",
        character9_calltime: "",
        character9_pickup: "",
        character10_calltime: "",
        character10_pickup: "",
        character11_calltime: "",
        character11_pickup: "",
        character12_calltime: "",
        character12_pickup: "",
        other_characters_calltimes: "",
        other_characters_pickups: "",
        background_artists_calltimes: "",
        background_artists_pickups: "",
        })
    const { day_order_number, location_address, start_time, end_time,
        new_info, new_content, character1_calltime, character1_pickup,
        character2_calltime, character2_pickup, character3_calltime,
        character3_pickup, character4_calltime, character4_pickup,
        character5_calltime, character5_pickup, character6_calltime, 
        character6_pickup, character7_calltime, character7_pickup,
        character8_calltime, character8_pickup, character9_calltime, 
        character9_pickup, character10_calltime, character10_pickup,
        character11_calltime, character11_pickup, character12_calltime, 
        character12_pickup, other_characters_calltimes, 
        other_characters_pickups, background_artists_calltimes,
        background_artists_pickups, } = newData;

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
            new_info, new_content, character1_calltime, character1_pickup,
            character2_calltime, character2_pickup, character3_calltime,
            character3_pickup, character4_calltime, character4_pickup,
            character5_calltime, character5_pickup, character6_calltime, 
            character6_pickup, character7_calltime, character7_pickup,
            character8_calltime, character8_pickup, character9_calltime, 
            character9_pickup, character10_calltime, character10_pickup,
            character11_calltime, character11_pickup, character12_calltime, 
            character12_pickup, other_characters_calltimes, 
            other_characters_pickups, background_artists_calltimes,
            background_artists_pickups, 
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
