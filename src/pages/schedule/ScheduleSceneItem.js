import React from 'react'

const ScheduleSceneItem = ({scene} ) => {
    return (
        <div>
            <p>{scene.number} {scene.location}</p>
        </div>
    )
}

export default ScheduleSceneItem
