import React from 'react';
import styles from "../../styles/Scene.module.css";

const WorkspaceInst = ({setShowInts}) => {
    return (
        <div className={`px-3 mt-1 mb-3 ${styles.Instructions }`}>
            <span className={` ${styles.CloseIns }`} onClick={() => setShowInts(false) } >Close</span>
            <h5 className='text-center'>Instructions</h5>
            <p>
                The Universal Workspace can be used for all work on the scene or
                in conjunction with one or a number of departments. Or all work 
                can be done in departments. Use the Guide to indicate which.
            </p>
        </div>
    )
}

export default WorkspaceInst
