import React from 'react'
import { useRedirect } from '../../hooks/Redirect';

const SchedSceneInfo = (props) => {
    useRedirect("loggedOut");
     const {day, day_order_number, date, info,
            act, title, content, location_address,
            time, new_content, day_id, id} = props
    return (
        <div>
            <hr className='mt-4'/>
            <p >Day {day} Day Id {date} {date} </p>
            <p >Day Id {day_id}  scene id{id} </p>
            <p className='mb-0'>Shooting Order: {day_order_number} </p>
            <p className='mb-0'>Act: {act} </p>
            <p className='mb-2'>Scene Heading: <span style={{ textTransform: 'italic' }} >{title} </span> </p>
            <p className='mb-0'>Shoot Address: {location_address} </p>
            <p className='mb-0'>Equip/Set: {info} </p>
            <p className='mb-0'>Scene Content: {content} </p>
            <p className='mb-0'>New Content: {new_content} </p>
            <p className='mb-0'>Scene Time: {time} </p>
        </div>
    )
}

export default SchedSceneInfo
